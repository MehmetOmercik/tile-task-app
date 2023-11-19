import pytest
from django.core.exceptions import ObjectDoesNotExist
from datetime import datetime

from tiles_app.models import Tile, Task


@pytest.fixture()
def tile_model(db):
    return Tile.objects.create(launch_date="2000-10-12", status="live")


@pytest.fixture()
def task_model(db, tile_model):
    return Task.objects.create(
        title="test title",
        order=1,
        description="test description",
        type="survey",
        tile=Tile.objects.get(id=1),
    )


class TestTileModel:
    def test_tile_model_exists(self, tile_model):
        assert Tile.objects.count() == 1

    def test_tile_model_properties(self, tile_model):
        tile_object = Tile.objects.get(id=1)
        expected_date = datetime.strptime("2000-10-12", "%Y-%m-%d").date()
        assert tile_object.launch_date == expected_date
        assert tile_object.status == "live"

    def test_tile_model_create_object(self, tile_model):
        Tile.objects.create(launch_date="2022-10-21", status="pending")
        assert Tile.objects.count() == 2

    def test_tile_model_update(self, tile_model):
        tile_model.launch_date = "2053-12-21"
        tile_model.status = "pending"
        tile_model.save()
        assert tile_model.launch_date == "2053-12-21"
        assert tile_model.status == "pending"

    def test_tile_model_delete(self, tile_model):
        tile_model.delete()

        with pytest.raises(ObjectDoesNotExist):
            Tile.objects.get(id=1)


class TestTaskModel:
    def test_task_model_exists(self, task_model):
        assert Task.objects.count() == 1

    def test_task_model_properties(self, task_model):
        task_object = Task.objects.get(id=1)
        tile_object = Tile.objects.get(id=1)
        assert task_object.title == "test title"
        assert task_object.order == 1
        assert task_object.description == "test description"
        assert task_object.type == "survey"
        assert task_object.tile == tile_object

    def test_task_model_create_object(self, task_model):
        Task.objects.create(
            title="test title 2",
            order=2,
            description="test description",
            type="survey",
            tile=Tile.objects.get(id=1),
        )
        assert Task.objects.count() == 2

    def test_task_model_update(self, task_model):
        task_model.title = "test tile updated"
        task_model.order = 3
        task_model.save()
        assert task_model.title == "test tile updated"
        assert task_model.order == 3

    def test_task_model_delete(self, task_model):
        task_model.delete()

        with pytest.raises(ObjectDoesNotExist):
            Task.objects.get(id=1)
