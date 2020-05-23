from fastapi import APIRouter, Request, Depends, Response
import typing as t

from app.db.session import get_db
from app.db.crud import (
    get_users,
    get_user,
    create_user,
    delete_user,
    edit_user,
)
from app.db.schemas import UserCreate, UserEdit, User
from app.core.auth import get_current_active_user

users_router = r = APIRouter()


@r.get(
    "/users", response_model=t.List[User],
)
async def users_list(response: Response, db=Depends(get_db)):
    users = get_users(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(users)}"
    return users


@r.get("/users/me", response_model=User)
async def user_me(current_user=Depends(get_current_active_user)):
    return current_user


@r.get("/users/{user_id}", response_model=User)
async def user_details(request: Request, user_id: int, db=Depends(get_db)):
    return get_user(db, user_id)


@r.post("/users", response_model=User)
async def user_create(request: Request, user: UserCreate, db=Depends(get_db)):
    return create_user(db, user)


@r.put("/users/{user_id}", response_model=User)
async def user_edit(
    request: Request, user_id: int, user: UserEdit, db=Depends(get_db)
):
    return edit_user(db, user_id, user)


@r.delete("/users/{user_id}", response_model=User)
async def user_delete(request: Request, user_id: int, db=Depends(get_db)):
    return delete_user(db, user_id)
