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
    },
    {
        "name": "Dental Chair",
        "category": "Dental Equipment",
        "description": "Premium electric dental chair with memory foam cushioning, programmable positioning, and integrated control system for optimal patient comfort and dentist ergonomics.",
        "image": "https://images.unsplash.com/photo-1704455306251-b4634215d98f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGFpcnxlbnwwfHx8fDE3NjEwMjk1MzV8MA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "type": "Electric Hydraulic Chair",
            "movement": "4-way programmable positioning",
            "weight_capacity": "180 kg",
            "upholstery": "Medical grade leather, 9 colors available",
            "base": "Heavy-duty cast iron base",
            "dimensions": "1800mm x 650mm x 600mm",
            "voltage": "220V/110V, 50/60Hz",
            "features": "LED operating light, instrument tray, spittoon unit"
        },
        "certifications": ["CE", "ISO 13485", "FDA"]
    },
    {
        "name": "Dental Endomotor",
        "category": "Dental Equipment",
        "description": "Advanced endodontic motor with precise torque control and apex locator integration for safe and efficient root canal treatment.",
        "image": "https://images.unsplash.com/photo-1591283261401-c76eba2d369a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzYxMDI5NTUyfDA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "speed_range": "100-2000 RPM",
            "torque_range": "0.4-5.0 N.cm",
            "gear_ratio": "16:1, 64:1",
            "apex_locator": "Built-in multi-frequency",
            "display": "4.5 inch LCD touchscreen",
            "file_systems": "Compatible with all major file systems",
            "battery": "Rechargeable lithium 2200mAh"
        },
        "certifications": ["CE", "ISO 13485", "FDA"]
    },
    {
        "name": "Dental Contra-Angle Handpiece",
        "category": "Dental Handpieces",
        "description": "Premium 1:1 ratio contra-angle handpiece with push-button chuck system and triple water spray for optimal cooling.",
        "image": "https://images.unsplash.com/photo-1626878880028-0438b1403b3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzYxMDI5NTUyfDA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "gear_ratio": "1:1",
            "speed": "Up to 40,000 RPM",
            "chuck_type": "Push button",
            "bur_compatibility": "2.35mm",
            "head_size": "Mini head 11.5mm",
            "spray_system": "Triple water spray"
        },
        "certifications": ["CE", "ISO 13485", "FDA"]
    },
    {
        "name": "Dental Turbine Handpiece",
        "category": "Dental Handpieces",
        "description": "High-speed turbine handpiece with ceramic bearings, quad water spray, and superior torque for efficient cutting.",
        "image": "https://images.pexels.com/photos/6502306/pexels-photo-6502306.jpeg",
        "specifications": {
            "speed": "350,000-420,000 RPM",
            "torque": "16-18 W",
            "chuck_type": "Push button",
            "bur_size": "1.6mm",
            "noise_level": "< 70 dB"
        },
        "certifications": ["CE", "ISO 13485", "FDA"]
    },
    {
        "name": "Insulin Syringes 1ml U-100 with Needle 29G, 30G, 31G",
        "category": "Medical Supplies",
        "description": "Sterile single-use insulin syringes with ultra-fine needles for comfortable insulin injection. Available in multiple gauge sizes (8mm & 13mm).",
        "image": "https://images.unsplash.com/photo-1651493803684-03a332c42014?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxpbnN1bGluJTIwc3lyaW5nZXxlbnwwfHx8fDE3NjEwMjk1NjB8MA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "capacity": "1ml (100 units)",
            "scale": "U-100 insulin scale",
            "needle_gauge": "29G, 30G, 31G",
            "needle_length": "8mm, 13mm",
            "material": "Medical grade PP barrel"
        },
        "certifications": ["CE", "ISO 13485", "FDA 510(k)", "ISO 7886"]
    },
    {
        "name": "Dental Lamp",
        "category": "Dental Equipment",
        "description": "LED dental operating light with adjustable color temperature, shadow-free illumination, and touchless sensor control.",
        "image": "https://images.unsplash.com/photo-1643660527076-726d42bb1a06?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxkZW50YWwlMjBjaGFpcnxlbnwwfHx8fDE3NjEwMjk1MzV8MA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "light_type": "LED array",
            "illumination": "20,000-40,000 Lux",
            "color_temperature": "4000-5000K adjustable",
            "lamp_head_diameter": "180mm",
            "led_lifespan": "50,000 hours"
        },
        "certifications": ["CE", "ISO 13485"]
    },
    {
        "name": "Dental Binocular Loupes Set",
        "category": "Dental Equipment",
        "description": "Surgical loupes with adjustable magnification and integrated LED illumination for enhanced precision during procedures.",
        "image": "https://images.unsplash.com/photo-1706894724916-244a7d1e4990?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBsb3VwZXN8ZW58MHx8fHwxNzYxMDI5NjIwfDA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "magnification": "2.5x, 3.5x, 4.5x (selectable)",
            "working_distance": "340mm, 420mm, 520mm",
            "field_of_view": "80-100mm",
            "led_light": "Integrated 5W LED headlight",
            "weight": "85g (frame + loupes)"
        },
        "certifications": ["CE", "ISO 13485"]
    },
    {
        "name": "Air Prophy (Dental Air Polisher)",
        "category": "Dental Equipment",
        "description": "Air polishing system for effective biofilm removal and stain removal using fine powder particles.",
        "image": "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzYxMDI5NjMyfDA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "air_pressure": "0.3-0.5 MPa",
            "powder_capacity": "120ml chamber",
            "powder_type": "Sodium bicarbonate / Glycine compatible",
            "nozzle": "360° rotating, autoclavable",
            "noise_level": "< 65 dB"
        },
        "certifications": ["CE", "ISO 13485", "FDA"]
    },
    {
        "name": "Implant Fiber Optic Contra-Angle Handpiece",
        "category": "Dental Handpieces",
        "description": "Specialized 20:1 reduction contra-angle handpiece with LED fiber optic illumination for implant procedures.",
        "image": "https://images.unsplash.com/photo-1728102197400-0648e058fddd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxkZW50YWwlMjBpbnN0cnVtZW50cyUyMHRvb2xzfGVufDB8fHx8MTc2MTAyOTYxM3ww&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "gear_ratio": "20:1 reduction",
            "speed_range": "100-2000 RPM",
            "torque": "Up to 60 N.cm",
            "fiber_optic": "Integrated LED illumination",
            "irrigation": "Internal/External cooling"
        },
        "certifications": ["CE", "ISO 13485", "FDA"]
    },
    {
        "name": "X-Ray Sensor",
        "category": "Dental Imaging",
        "description": "Digital intraoral X-ray sensor with high resolution CMOS technology for instant digital radiography.",
        "image": "https://images.unsplash.com/photo-1755526739866-c73f65b82f8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB4LXJheSUyMGVxdWlwbWVudHxlbnwwfHx8fDE3NjEwMjk2MDN8MA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "sensor_type": "CMOS APS",
            "resolution": "26 lp/mm (1600 x 1200 pixels)",
            "sensor_size": "Size 1: 22 x 31mm, Size 2: 31 x 41mm",
            "gray_scale": "14-bit (16384 shades)",
            "image_capture": "Instant (<1 second)"
        },
        "certifications": ["CE", "FDA", "ISO 13485"]
    },
    {
        "name": "Dental X-Ray Machine",
        "category": "Dental Imaging",
        "description": "Wall-mounted dental X-ray unit with DC technology for precise imaging and reduced radiation exposure.",
        "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxkZW50YWwlMjB4LXJheSUyMGVxdWlwbWVudHxlbnwwfHx8fDE3NjEwMjk2MDN8MA&ixlib=rb-4.1.0&q=85",
        "specifications": {
            "generator": "DC constant potential",
            "tube_voltage": "60-70 kV",
            "tube_current": "7-8 mA",
            "focal_spot": "0.8mm",
            "arm_rotation": "360° horizontal, 180° vertical"
        },
        "certifications": ["CE", "FDA", "IEC 60601", "ISO 13485"]
    },
    {
        "name": "Intraoral Camera Set",
        "category": "Dental Imaging",
        "description": "HD intraoral camera with autofocus, freeze-frame capture, and integrated software for patient education.",
        "image": "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg",
        "specifications": {
            "sensor": "1/4 inch Sony CMOS",
            "resolution": "1920 x 1080 Full HD",
            "frame_rate": "30 fps",
            "focus": "Auto-focus 5-50mm",
            "led_illumination": "6 high-brightness LEDs"
        },
        "certifications": ["CE", "FDA", "ISO 13485"]
    },
    {
        "name": "Gun-Type Dental X-Ray Machine",
        "category": "Dental Imaging",
        "description": "Portable handheld X-ray unit with backscatter shield for safe mobile radiography in dental practice.",
        "image": "https://images.pexels.com/photos/6501925/pexels-photo-6501925.jpeg",
        "specifications": {
            "type": "Handheld portable",
            "tube_voltage": "60 kV",
            "tube_current": "2.5 mA",
            "battery": "Lithium-ion rechargeable",
            "battery_life": "200+ exposures",
            "weight": "2.5 kg"
        },
        "certifications": ["CE", "FDA 21 CFR 1020.30", "ISO 13485"]
    }
]

news_data = [
    {
        "title": "VITARO Achieves ISO 13485:2016 Certification",
        "category": "Company News",
        "excerpt": "We are proud to announce that VITARO has successfully achieved ISO 13485:2016 certification, demonstrating our commitment to quality management systems.",
        "image": "https://customer-assets.emergentagent.com/job_medpro-vitaro/artifacts/2rb9vcpa_IMG_3131.jpeg",
        "content": "VITARO Medical is proud to announce the successful achievement of ISO 13485:2016 certification, a globally recognized standard for quality management systems in the medical device industry. This certification demonstrates our unwavering commitment to maintaining the highest standards of quality and safety in all our manufacturing processes. Since our founding in 2002, we have continuously invested in quality infrastructure and personnel training. The rigorous audit process evaluated our entire quality management system at our Shanghai facility, from design and development to production, storage, and distribution. This achievement reinforces our position as a trusted partner for healthcare facilities worldwide and ensures that our customers receive products that meet the most stringent international standards."
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