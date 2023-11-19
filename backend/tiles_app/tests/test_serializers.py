import pytest
from datetime import datetime

from tiles_app.serializers import TileSerializer, TaskSerializer
from tiles_app.models import Tile, Task


@pytest.mark.django_db
class TestTileSerializer:
    def test_tile_valid_data(self):
        data = {"launch_date": "2000-10-12", "status": "live"}
        serializer = TileSerializer(data=data)
        assert serializer.is_valid() is True

    def test_tile_invalid_data(self):
        data = {
            "launch_date": "2000-10-12",
            "status": "lie",
        }  # Status can only be live, pending or archived
        serializer = TileSerializer(data=data)
        assert serializer.is_valid() is False

    def test_tile_serializer_save_object(self):
        data = {"launch_date": "2000-10-12", "status": "live"}
        serializer = TileSerializer(data=data)
        assert serializer.is_valid() is True
        obj = serializer.save()
        assert isinstance(obj, Tile) is True
        data_date_converted = datetime.strptime(data["launch_date"], "%Y-%m-%d").date()
        assert obj.launch_date == data_date_converted
        assert obj.status == data["status"]


@pytest.mark.django_db
class TestTaskSerializer:
    def test_task_valid_data(self):
        tile = Tile.objects.create(launch_date="2000-10-12", status="live")
        data = {
            "title": "test title",
            "order": 1,
            "description": "test description",
            "type": "survey",
            "tile": tile.id,
        }
        serializer = TaskSerializer(data=data)
        assert serializer.is_valid() is True

    def test_task_invalid_data(self):
        data = {
            "title": "test title",
            "order": 1,
            "description": "test description",
            "type": "survey",
            "tile": None,  # No relationship to Tile object will break the serializer
        }
        serializer = TaskSerializer(data=data)
        assert serializer.is_valid() is False

    def test_task_serializer_save_object(self):
        tile = Tile.objects.create(launch_date="2000-10-12", status="live")
        data = {
            "title": "test title",
            "order": 1,
            "description": "test description",
            "type": "survey",
            "tile": tile.id,
        }
        serializer = TaskSerializer(data=data)
        assert serializer.is_valid() is True
        obj = serializer.save()
        assert isinstance(obj, Task) is True
        assert obj.title == data["title"]
        assert obj.order == data["order"]
        assert obj.description == data["description"]
        assert obj.type == data["type"]
        assert obj.tile == Tile.objects.get(id=data["tile"])
