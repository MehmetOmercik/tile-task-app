from rest_framework import viewsets, filters


from .models import Tile, Task
from .serializers import TileSerializer, TaskSerializer


# Chose viewsets over generics because all CRUD operations required for both tables
class TileViewset(viewsets.ModelViewSet):
    serializer_class = TileSerializer
    filter_backends = [filters.OrderingFilter]
    ordering = ["launch_date"]

    def get_queryset(self):
        queryset = Tile.objects.all()
        status = self.request.query_params.get("status")
        if status is not None:
            queryset = queryset.filter(status=status)
        return queryset


class TaskViewset(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    filter_backends = [filters.OrderingFilter]
    ordering = ["order"]

    def get_queryset(self):
        queryset = Task.objects.all()
        tile_id = self.request.query_params.get("tile_id")
        if tile_id is not None:
            queryset = queryset.filter(tile=tile_id)
        return queryset
