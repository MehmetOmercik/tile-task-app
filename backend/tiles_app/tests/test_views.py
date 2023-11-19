import pytest
import requests


class TestViews:
    def test_tiles_url(self):
        url = "http://127.0.0.1:8000/tiles/"
        response = requests.get(url, timeout=30000)
        print(f"Tiles url status code: {response.status_code}")
        assert response.status_code == 200

    def test_tasks_url(self):
        url = "http://127.0.0.1:8000/tasks/"
        response = requests.get(url, timeout=30000)
        print(f"Tasks url status code: {response.status_code}")
        assert response.status_code == 200
