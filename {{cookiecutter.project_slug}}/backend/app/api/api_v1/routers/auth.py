from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi import APIRouter, Request, Depends, Response, HTTPException

from app.db.crud import get_user_by_email
from app.db import models
from app.db.session import get_db
from app.core.security import get_password_hash, verify_password

auth_router = r = APIRouter()

@r.post("/token")
async def login(db=Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = get_user_by_email(db, form_data.username)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    user_dict = user.__dict__
    if not verify_password(form_data.password, user_dict['hashed_password']):
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    return {"access_token": user_dict['email'], "token_type": "bearer"}