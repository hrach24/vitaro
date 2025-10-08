from fastapi import APIRouter, HTTPException
from typing import List
from models import Contact, ContactCreate
from database import get_database

router = APIRouter(prefix="/api/contact", tags=["contact"])

# Get database
db = get_database()

@router.post("", response_model=Contact)
async def submit_contact(contact: ContactCreate):
    """Submit a contact form"""
    try:
        contact_obj = Contact(**contact.dict())
        await db.contacts.insert_one(contact_obj.dict())
        return contact_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("", response_model=List[Contact])
async def get_contacts():
    """Get all contact submissions (admin endpoint)"""
    try:
        contacts = await db.contacts.find().sort("submitted_at", -1).to_list(1000)
        return [Contact(**contact) for contact in contacts]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))