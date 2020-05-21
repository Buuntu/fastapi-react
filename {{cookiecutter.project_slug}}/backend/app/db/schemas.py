from pydantic import BaseModel


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class UserEdit(UserBase):
    password: str
    email: str
    is_active: str

    class Config:
        orm_mode = True


class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True
