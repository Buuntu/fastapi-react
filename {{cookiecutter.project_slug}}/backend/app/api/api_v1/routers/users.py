from fastapi import APIRouter, Request, Depends

from app.db.session import get_db
from app.db.crud import get_users

users_router = r = APIRouter()


@r.get("/")
async def users_list(request: Request, db=Depends(get_db)):
    users = get_users(db)
    return users


@r.get("/{user_id}")
async def user_details(request: Request, db=Depends(get_db)):
    return []
