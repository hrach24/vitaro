from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
from database import db
import uuid

router = APIRouter(prefix="/api/catalog", tags=["catalog"])

class CatalogRegistration(BaseModel):
    fullName: str
    email: EmailStr
    phone: str
    company: str
    country: str
    jobTitle: str

@router.post("/register")
async def register_for_catalog(registration: CatalogRegistration):
    """Register user for catalog download"""
    try:
        registration_data = {
            "id": str(uuid.uuid4()),
            "full_name": registration.fullName,
            "email": registration.email,
            "phone": registration.phone,
            "company": registration.company,
            "country": registration.country,
            "job_title": registration.jobTitle,
            "registered_at": datetime.utcnow().isoformat()
        }
        
        await db.catalog_registrations.insert_one(registration_data)
        
        return {
            "success": True,
            "message": "Registration successful. You can now download the catalog."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to register: {str(e)}")

@router.get("/registrations")
async def get_all_registrations():
    """Get all catalog registrations (admin use)"""
    try:
        registrations = await db.catalog_registrations.find({}).to_list(length=None)
        # Remove MongoDB _id field
        for reg in registrations:
            reg.pop('_id', None)
        return registrations
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch registrations: {str(e)}")
