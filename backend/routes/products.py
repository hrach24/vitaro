from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models import Product, ProductCreate, Category
from database import get_database
from datetime import datetime

router = APIRouter(prefix="/api/products", tags=["products"])

# Get database
db = get_database()

@router.get("", response_model=List[Product])
async def get_products(category: Optional[str] = None):
    """Get all products, optionally filtered by category"""
    try:
        query = {}
        if category and category != "All":
            query["category"] = category
        
        products = await db.products.find(query).to_list(1000)
        return [Product(**product) for product in products]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/categories", response_model=List[Category])
async def get_categories():
    """Get all product categories with counts"""
    try:
        # Aggregate to get category counts
        pipeline = [
            {"$group": {"_id": "$category", "count": {"$sum": 1}}},
            {"$project": {"name": "$_id", "count": 1, "_id": 0}}
        ]
        categories = await db.products.aggregate(pipeline).to_list(100)
        
        # Add IDs for frontend compatibility
        for i, cat in enumerate(categories):
            cat["id"] = str(i + 1)
        
        return categories
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{product_id}", response_model=Product)
async def get_product(product_id: str):
    """Get a single product by ID"""
    try:
        product = await db.products.find_one({"id": product_id})
        if not product:
            raise HTTPException(status_code=404, detail="Product not found")
        return Product(**product)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("", response_model=Product)
async def create_product(product: ProductCreate):
    """Create a new product"""
    try:
        product_obj = Product(**product.dict())
        await db.products.insert_one(product_obj.dict())
        return product_obj
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{product_id}", response_model=Product)
async def update_product(product_id: str, product: ProductCreate):
    """Update an existing product"""
    try:
        existing = await db.products.find_one({"id": product_id})
        if not existing:
            raise HTTPException(status_code=404, detail="Product not found")
        
        update_data = product.dict()
        update_data["updated_at"] = datetime.utcnow()
        
        await db.products.update_one(
            {"id": product_id},
            {"$set": update_data}
        )
        
        updated = await db.products.find_one({"id": product_id})
        return Product(**updated)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{product_id}")
async def delete_product(product_id: str):
    """Delete a product"""
    try:
        result = await db.products.delete_one({"id": product_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Product not found")
        return {"message": "Product deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))