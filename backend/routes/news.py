from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models import NewsArticle, NewsArticleCreate
from database import get_database
from datetime import datetime

router = APIRouter(prefix="/api/news", tags=["news"])

# Get database
db = get_database()

@router.get("", response_model=List[NewsArticle])
async def get_news(category: Optional[str] = None):
    """Get all news articles, optionally filtered by category"""
    try:
        query = {}
        if category and category != "All":
            query["category"] = category
        
        # Sort by date descending
        news = await db.news.find(query).sort("date", -1).to_list(1000)
        return [NewsArticle(**article) for article in news]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{news_id}", response_model=NewsArticle)
async def get_news_article(news_id: str):
    """Get a single news article by ID"""
    try:
        article = await db.news.find_one({"id": news_id})
        if not article:
            raise HTTPException(status_code=404, detail="News article not found")
        return NewsArticle(**article)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("", response_model=NewsArticle)
async def create_news(article: NewsArticleCreate):
    """Create a new news article"""
    try:
        article_obj = NewsArticle(**article.dict())
        await db.news.insert_one(article_obj.dict())
        return article_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{news_id}", response_model=NewsArticle)
async def update_news(news_id: str, article: NewsArticleCreate):
    """Update an existing news article"""
    try:
        existing = await db.news.find_one({"id": news_id})
        if not existing:
            raise HTTPException(status_code=404, detail="News article not found")
        
        update_data = article.dict()
        update_data["updated_at"] = datetime.utcnow()
        
        await db.news.update_one(
            {"id": news_id},
            {"$set": update_data}
        )
        
        updated = await db.news.find_one({"id": news_id})
        return NewsArticle(**updated)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{news_id}")
async def delete_news(news_id: str):
    """Delete a news article"""
    try:
        result = await db.news.delete_one({"id": news_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="News article not found")
        return {"message": "News article deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))