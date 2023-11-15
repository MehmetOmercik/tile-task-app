# Generated by Django 4.2.7 on 2023-11-15 12:22

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('launch_date', models.DateField(default=django.utils.timezone.now)),
                ('status', models.CharField(choices=[('live', 'Live'), ('pending', 'Pending'), ('archived', 'Archived')], default='pending', max_length=8)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='task title', max_length=30)),
                ('order', models.IntegerField()),
                ('description', models.TextField()),
                ('type', models.CharField(choices=[('survey', 'Survey'), ('discussion', 'Discussion'), ('diary', 'Diary')], default='survey', max_length=10)),
                ('tile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tiles_app.tile')),
            ],
        ),
    ]
