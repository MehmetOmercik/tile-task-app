from django.urls import path
from . import views

tile_list = views.TileViewset.as_view({"get": "list", "post": "create"})
tile_detail = views.TileViewset.as_view(
    {"get": "retrieve", "put": "update", "patch": "partial_update", "delete": "destroy"}
)

task_list = views.TaskViewset.as_view({"get": "list", "post": "create"})
task_detail = views.TaskViewset.as_view(
    {"get": "retrieve", "put": "update", "patch": "partial_update", "delete": "destroy"}
)

urlpatterns = [
    path("tiles/", tile_list, name="tile-list"),
    path("tiles/<int:pk>/", tile_detail, name="tile-detail"),
    path("tasks/", task_list, name="task-list"),
    path("tasks/<int:pk>/", task_detail, name="task-detail"),
]
