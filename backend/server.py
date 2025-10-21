from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware
import logging

# Import database
from database import get_database, get_client

# Import route modules
from routes import products, news, contact, newsletter, catalog

# Import models for seeding
from models import Product, NewsArticle
from seed_data import products_data, news_data

# Get database and client
db = get_database()
client = get_client()

# Create the main app without a prefix
app = FastAPI(title="VITARO Medical API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "VITARO Medical API", "status": "operational"}

# Include all routers
app.include_router(products.router)
app.include_router(news.router)
app.include_router(contact.router)
app.include_router(newsletter.router)
app.include_router(catalog.router)
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db_seed():
    """Seed database with initial data if empty"""
    try:
        # Check if products collection is empty
        product_count = await db.products.count_documents({})
        if product_count == 0:
            logger.info("Seeding products...")
            for product_data in products_data:
                product = Product(**product_data)
                await db.products.insert_one(product.dict())
            logger.info(f"Seeded {len(products_data)} products")
        
        # Check if news collection is empty
        news_count = await db.news.count_documents({})
        if news_count == 0:
            logger.info("Seeding news articles...")
            for news_item in news_data:
                article = NewsArticle(**news_item)
                await db.news.insert_one(article.dict())
            logger.info(f"Seeded {len(news_data)} news articles")
        
        logger.info("Database initialization complete")
    except Exception as e:
        logger.error(f"Error seeding database: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()