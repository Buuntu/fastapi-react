from fastapi import APIRouter, Request, Depends, Response

from app.db.session import get_db
from app.db.crud import get_users, get_user, create_user, delete_user
from app.db.schemas import UserCreate

users_router = r = APIRouter()


@r.get("/users")
async def users_list(request: Request, response: Response, db=Depends(get_db)):
    users = get_users(db)
    response.headers['Content-Range'] = f'0-9/{len(users)}'
    return users


@r.get("/users/{user_id}")
async def user_details(request: Request, user_id: str, db=Depends(get_db)):
    user = get_user(db, user_id)
    return user


@r.post("/users")
async def user_create(request: Request, user: UserCreate, db=Depends(get_db)):
    return create_user(db, user)


@r.put("/users")
async def user_edit(request: Request, user: UserCreate, db=Depends(get_db)):
    return user


@r.delete("/users/${user_id}")
async def user_delete(request: Request, user_id: str, db=Depends(get_db)):
    return delete_user(db, user_id)
