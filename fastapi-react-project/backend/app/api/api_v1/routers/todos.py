from fastapi import APIRouter, Request, Depends, Response
import typing as t

from app.db.session import get_db
from app.db.crud import (
    get_todos,
    get_todo,
    create_todo,
    delete_todo,
    edit_todo,
)
from app.db.schemas import TodoCreate, TodoEdit, TodoOut

todos_router = r = APIRouter()

@r.get(
    "/todos",
    response_model=t.List[TodoOut],
    response_model_exclude_none=True,
)
async def todos_list(
    response: Response,
    db=Depends(get_db),
):
    """
    Get all todos
    """
    todos = get_todos(db)
    response.headers["Content-Range"] = f"0-9/{len(todos)}"
    return todos


@r.get(
    "/todos/{todo_id}",
    response_model=TodoOut,
    response_model_exclude_none=True,
)
async def todo_details(
    request: Request,
    todo_id: int,
    db=Depends(get_db),
):
    """
    Get any todo details
    """
    todo = get_todo(db, todo_id)
    return todo

@r.post("/todos", response_model=TodoOut, response_model_exclude_none=True)
async def todo_create(
    request: Request,
    todo: TodoCreate,
    db=Depends(get_db),
):
    """
    Create a new todo
    """
    return create_todo(db, todo)

@r.put(
    "/todos/{todo_id}", response_model=TodoOut, response_model_exclude_none=True
)
async def todo_id_edit(
    request: Request,
    todo_id: int,
    todo: TodoEdit,
    db=Depends(get_db),
):
    """
    Update existing todo
    """
    return edit_todo(db, todo_id, todo)

@r.delete(
    "/todos/{todo_id}", response_model=TodoOut, response_model_exclude_none=True
)
async def todo_delete(
    request: Request,
    todo_id: int,
    db=Depends(get_db),
):
    """
    Delete existing todo
    """
    return delete_todo(db, todo_id)