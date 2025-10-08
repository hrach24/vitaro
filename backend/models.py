from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict
from datetime import datetime
import uuid

# Product Models
class ProductSpecifications(BaseModel):
    material: str
    thickness: Optional[str] = None
    sizes: str
    packaging: str
    weight: Optional[str] = None
    layers: Optional[str] = None
    filtration: Optional[str] = None
    breathability: Optional[str] = None
    standard: Optional[str] = None
    design: Optional[str] = None
    volumes: Optional[str] = None
    needles: Optional[str] = None
    sterilization: Optional[str] = None

class ProductBase(BaseModel):
    name: str
    category: str
    description: str
    image: str
    specifications: Dict
    certifications: List[str]

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {datetime: lambda v: v.isoformat()}

# News Article Models
class NewsArticleBase(BaseModel):
    title: str
    category: str
    excerpt: str
    image: str
    content: str

class NewsArticleCreate(NewsArticleBase):
    pass

class NewsArticle(NewsArticleBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    date: datetime = Field(default_factory=datetime.utcnow)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_encoders = {datetime: lambda v: v.isoformat()}

# Contact Models
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    subject: str
    message: str

class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"

    class Config:
        json_encoders = {datetime: lambda v: v.isoformat()}

# Newsletter Models
class NewsletterCreate(BaseModel):
    email: EmailStr

class Newsletter(NewsletterCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "active"

    class Config:
        json_encoders = {datetime: lambda v: v.isoformat()}

# Category Model
class Category(BaseModel):
    id: str
    name: str
    count: int