from fastapi import APIRouter, Request, Depends, Response
import typing as t

from app.db.session import get_db
from app.db.crud import (
    get_notes,
    get_note,
    create_note,
    delete_note,
    edit_note,
)
from app.db.schemas import NoteCreate, NoteEdit, NoteOut
from app.core.auth import get_current_active_user, get_current_active_superuser

notes_router = r = APIRouter()


@r.get(
    "/notes",
    response_model=t.List[NoteOut],
    response_model_exclude_none=True,
)
async def notes_list(
    response: Response,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Get all notes
    """
    notes = get_notes(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(notes)}"
    return notes


@r.get(
    "/notes/{note_id}",
    response_model=NoteOut,
    response_model_exclude_none=True,
)
async def note_details(
    request: Request,
    note_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Get any note details
    """
    note = get_note(db, note_id)
    return note

@r.post("/notes", response_model=NoteOut, response_model_exclude_none=True)
async def note_create(
    request: Request,
    note: NoteCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Create a new note
    """
    return create_note(db, note, current_user.id)

@r.put(
    "/notes/{note_id}", response_model=NoteOut, response_model_exclude_none=True
)
async def note_edit(
    request: Request,
    note_id: int,
    note: NoteEdit,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Update existing note
    """
    return edit_note(db, note_id, note)

@r.delete(
    "/notes/{note_id}", response_model=NoteOut, response_model_exclude_none=True
)
async def note_delete(
    request: Request,
    note_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Delete existing note
    """
    return delete_note(db, note_id)
