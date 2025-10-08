from fastapi import APIRouter, HTTPException
from typing import List
from models import Newsletter, NewsletterCreate
from database import get_database

router = APIRouter(prefix="/api/newsletter", tags=["newsletter"])

# Get database
db = get_database()

@router.post("", response_model=Newsletter)
async def subscribe_newsletter(subscription: NewsletterCreate):
    """Subscribe to newsletter"""
    try:
        # Check if email already exists
        existing = await db.newsletter.find_one({"email": subscription.email})
        if existing:
            # If already subscribed, return the existing subscription
            return Newsletter(**existing)
        
        subscription_obj = Newsletter(**subscription.dict())
        await db.newsletter.insert_one(subscription_obj.dict())
        return subscription_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("", response_model=List[Newsletter])
async def get_subscribers():
    """Get all newsletter subscribers (admin endpoint)"""
    try:
        subscribers = await db.newsletter.find().sort("subscribed_at", -1).to_list(1000)
        return [Newsletter(**sub) for sub in subscribers]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))