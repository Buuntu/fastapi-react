from app import tasks


def test_example_task():
    task_output = tasks.example_task("Hello World")
    assert task_output == "test task returns Hello World"
