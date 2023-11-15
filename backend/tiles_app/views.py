from rest_framework import viewsets, filters


from .models import Tile, Task
from .serializers import TileSerializer, TaskSerializer


# Chose viewsets over generics because all CRUD operations required for both tables
class TileViewset(viewsets.ModelViewSet):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer
    filter_backends = [filters.OrderingFilter]
    ordering = ["launch_date"]


class TaskViewset(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = [filters.OrderingFilter]
    ordering = ["order"]
