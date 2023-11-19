from django.db import models
from django.utils import timezone
from django.utils.translation import gettext as _


class StatusChoices(models.TextChoices):
    """Different choices for status field in Tile model

    Args:
        models (TextChoices): Django TextChoices class inheritance
    """

    LIVE = "live", _("Live")
    PENDING = "pending", _("Pending")
    ARCHIVED = "archived", _("Archived")


class TypeChoices(models.TextChoices):
    """Different choices for type field in Task model

    Args:
        models (TextChoices): Django TextChoices class inheritance
    """

    SURVEY = "survey", _("Survey")
    DISCUSSION = "discussion", _("Discussion")
    DIARY = "diary", _("Diary")


class Tile(models.Model):
    """Tile table in the database

    Args:
        models (Model): Django class
    Fields:
        launch_date: The date the tile was successfully launched
        status: Current status of the tile, either PENDING, LIVE OR ARCHIVED
    """

    launch_date = models.DateField(default=timezone.now)
    status = models.CharField(
        choices=StatusChoices.choices, default=StatusChoices.PENDING, max_length=8
    )

    def __str__(self) -> str:
        return str(f"Tile Number: {self.pk}")


class Task(models.Model):
    """Task table in the databases

    Args:
        models (Model): Django class
    Fields:
        title: Title of the task
        order: Numerical order of the task
        description: Task description
        type: Type of task, either SURVEY, DISCUSSION or DIARY
        tile: One-to-many relationship with the tile model
    """

    title = models.CharField(
        max_length=30,
        null=False,
        blank=False,
    )
    order = models.IntegerField()
    description = models.TextField(max_length=256)
    type = models.CharField(
        choices=TypeChoices.choices, default=TypeChoices.SURVEY, max_length=10
    )
    tile = models.ForeignKey(Tile, on_delete=models.CASCADE, null=False, blank=False)

    def __str__(self) -> str:
        return str(self.title)
