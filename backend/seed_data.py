# Seed data for initial database population

products_data = [
    {
        "name": "Premium Latex Examination Gloves",
        "category": "Medical Gloves",
        "description": "High-quality latex examination gloves for medical professionals. Powder-free, textured surface for superior grip.",
        "image": "https://images.unsplash.com/photo-1628235176517-71013205a2de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZ2xvdmVzfGVufDB8fHx8MTc1OTkxNTI2OXww&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "material": "Natural Rubber Latex",
            "thickness": "0.12mm",
            "sizes": "S, M, L, XL",
            "packaging": "100 pieces per box"
        },
        "certifications": ["CE", "ISO 13485", "EN 455"]
    },
    {
        "name": "Nitrile Examination Gloves",
        "category": "Medical Gloves",
        "description": "Premium nitrile gloves offering excellent chemical resistance and latex-free protection.",
        "image": "https://images.unsplash.com/photo-1599412227383-b7d4751c8765?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwZ2xvdmVzfGVufDB8fHx8MTc1OTkxNTI2OXww&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "material": "Nitrile",
            "thickness": "0.14mm",
            "sizes": "XS, S, M, L, XL",
            "packaging": "100 pieces per box"
        },
        "certifications": ["CE", "ISO 13485", "FDA Approved"]
    },
    {
        "name": "Sterile Surgical Gloves",
        "category": "Medical Gloves",
        "description": "Powder-free sterile surgical gloves designed for precision procedures.",
        "image": "https://images.pexels.com/photos/4586711/pexels-photo-4586711.jpeg",
        "specifications": {
            "material": "Natural Rubber Latex",
            "thickness": "0.20mm",
            "sizes": "6.0, 6.5, 7.0, 7.5, 8.0, 8.5",
            "packaging": "Individually wrapped, 50 pairs per box"
        },
        "certifications": ["CE", "ISO 13485", "EN 455"]
    },
    {
        "name": "Type IIR Surgical Face Masks",
        "category": "Face Masks",
        "description": "3-layer surgical masks with high bacterial filtration efficiency and fluid resistance.",
        "image": "https://images.unsplash.com/photo-1601392842066-eb7dbcec9866?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwbWFza3MlMjBtZWRpY2FsfGVufDB8fHx8MTc1OTkxNTI3NHww&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "layers": "3-ply non-woven",
            "filtration": "BFE ≥ 98%",
            "breathability": "< 40 Pa/cm²",
            "packaging": "50 pieces per box"
        },
        "certifications": ["CE", "EN 14683 Type IIR", "ISO 13485"]
    },
    {
        "name": "FFP2 Respirator Masks",
        "category": "Face Masks",
        "description": "High-filtration FFP2 respirators for enhanced protection against airborne particles.",
        "image": "https://images.unsplash.com/photo-1589837991353-312e435144d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxmYWNlJTIwbWFza3MlMjBtZWRpY2FsfGVufDB8fHx8MTc1OTkxNTI3NHww&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "filtration": "≥ 94%",
            "standard": "EN 149:2001+A1:2009",
            "design": "Foldable with adjustable nose clip",
            "packaging": "20 pieces per box"
        },
        "certifications": ["CE", "FFP2", "ISO 13485"]
    },
    {
        "name": "Disposable Medical Gowns",
        "category": "Disposable Materials",
        "description": "Protective isolation gowns for medical and laboratory use.",
        "image": "https://images.pexels.com/photos/5863400/pexels-photo-5863400.jpeg",
        "specifications": {
            "material": "Non-woven PP+PE",
            "weight": "45 g/m²",
            "sizes": "M, L, XL, XXL",
            "packaging": "10 pieces per pack"
        },
        "certifications": ["CE", "ISO 13485", "Cat III Type 4B"]
    },
    {
        "name": "Medical Sterilization Pouches",
        "category": "Disposable Materials",
        "description": "Self-seal sterilization pouches for autoclaving medical instruments.",
        "image": "https://images.unsplash.com/photo-1561328165-f0b762a9508e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwc3VwcGxpZXN8ZW58MHx8fHwxNzU5OTE1Mjc5fDA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "material": "Medical grade paper + film",
            "sterilization": "Steam, ETO",
            "sizes": "Various sizes available",
            "packaging": "200 pieces per box"
        },
        "certifications": ["CE", "ISO 11607", "EN 868"]
    },
    {
        "name": "Disposable Syringes & Needles",
        "category": "Medical Supplies",
        "description": "Sterile single-use syringes with precision needles.",
        "image": "https://images.unsplash.com/photo-1605176173609-a0067079b419?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VwcGxpZXN8ZW58MHx8fHwxNzU5OTE1Mjc5fDA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "volumes": "1ml, 3ml, 5ml, 10ml, 20ml",
            "needles": "Various gauge sizes",
            "material": "Medical grade PP",
            "packaging": "Individually blister packed"
        },
        "certifications": ["CE", "ISO 7886", "ISO 13485"]
    }
]

news_data = [
    {
        "title": "VITARO Achieves ISO 13485:2016 Certification",
        "category": "Company News",
        "excerpt": "We are proud to announce that VITARO has successfully achieved ISO 13485:2016 certification, demonstrating our commitment to quality management systems.",
        "image": "https://images.unsplash.com/photo-1581056771085-3ce30d907416?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwc3VwcGxpZXN8ZW58MHx8fHwxNzU5OTE1Mjc5fDA&ixlib=rb-4.1.0&q=85",
        "content": "VITARO Medical is proud to announce the successful achievement of ISO 13485:2016 certification, a globally recognized standard for quality management systems in the medical device industry. This certification demonstrates our unwavering commitment to maintaining the highest standards of quality and safety in all our manufacturing processes. The rigorous audit process evaluated our entire quality management system, from design and development to production, storage, and distribution. This achievement reinforces our position as a trusted partner for healthcare facilities worldwide and ensures that our customers receive products that meet the most stringent international standards."
    },
    {
        "title": "New Product Line: FFP3 Respirators Launch",
        "category": "Product Launch",
        "excerpt": "VITARO introduces advanced FFP3 respirators with enhanced filtration technology for maximum protection.",
        "image": "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg",
        "content": "We are excited to announce the launch of our new FFP3 respirator line, featuring state-of-the-art filtration technology that provides the highest level of respiratory protection. These respirators offer 99% filtration efficiency against airborne particles and are designed for use in high-risk healthcare environments. The new FFP3 line features improved comfort with adjustable head straps, enhanced breathability, and a secure seal for extended wear. All products are CE certified and meet EN 149:2001+A1:2009 standards. This launch expands our respiratory protection portfolio and reinforces our commitment to healthcare worker safety."
    },
    {
        "title": "Partnership with European Healthcare Distributors",
        "category": "Business",
        "excerpt": "VITARO expands its distribution network across Europe through strategic partnerships with leading healthcare suppliers.",
        "image": "https://images.pexels.com/photos/7723394/pexels-photo-7723394.jpeg",
        "content": "VITARO Medical is pleased to announce strategic partnerships with major healthcare distributors across Europe, significantly expanding our market reach and service capabilities. These partnerships will enable faster delivery times, improved local support, and better availability of our products to healthcare facilities throughout the European Union. Our distribution partners have been carefully selected based on their reputation for excellence, extensive logistics networks, and commitment to quality service. This expansion is part of our broader strategy to become a leading global supplier of medical products while maintaining our high standards of quality and customer service."
    },
    {
        "title": "Sustainability Initiative: Eco-Friendly Packaging",
        "category": "Sustainability",
        "excerpt": "Our commitment to environmental responsibility: VITARO introduces recyclable packaging materials for all product lines.",
        "image": "https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg",
        "content": "As part of our commitment to environmental sustainability, VITARO Medical is transitioning all product packaging to eco-friendly, recyclable materials. This initiative represents a significant investment in sustainable practices and demonstrates our responsibility to both current and future generations. The new packaging maintains the same level of product protection and sterility while significantly reducing environmental impact. All materials are recyclable and sourced from sustainable suppliers. We are also implementing a comprehensive recycling program at our manufacturing facilities and encouraging our distribution partners to adopt similar practices. This is just one step in our ongoing commitment to reducing our environmental footprint while continuing to deliver the highest quality medical products."
    }
]