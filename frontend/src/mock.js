// Mock data for VITARO Medical Products Website

export const products = [
  {
    id: '1',
    name: 'Premium Latex Examination Gloves',
    category: 'Medical Gloves',
    description: 'High-quality latex examination gloves for medical professionals. Powder-free, textured surface for superior grip.',
    image: 'https://images.unsplash.com/photo-1628235176517-71013205a2de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZ2xvdmVzfGVufDB8fHx8MTc1OTkxNTI2OXww&ixlib=rb-4.1.0&q=85',
    specifications: {
      material: 'Natural Rubber Latex',
      thickness: '0.12mm',
      sizes: 'S, M, L, XL',
      packaging: '100 pieces per box'
    },
    certifications: ['CE', 'ISO 13485', 'EN 455']
  },
  {
    id: '2',
    name: 'Nitrile Examination Gloves',
    category: 'Medical Gloves',
    description: 'Premium nitrile gloves offering excellent chemical resistance and latex-free protection.',
    image: 'https://images.unsplash.com/photo-1599412227383-b7d4751c8765?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwZ2xvdmVzfGVufDB8fHx8MTc1OTkxNTI2OXww&ixlib=rb-4.1.0&q=85',
    specifications: {
      material: 'Nitrile',
      thickness: '0.14mm',
      sizes: 'XS, S, M, L, XL',
      packaging: '100 pieces per box'
    },
    certifications: ['CE', 'ISO 13485', 'FDA Approved']
  },
  {
    id: '3',
    name: 'Sterile Surgical Gloves',
    category: 'Medical Gloves',
    description: 'Powder-free sterile surgical gloves designed for precision procedures.',
    image: 'https://images.pexels.com/photos/4586711/pexels-photo-4586711.jpeg',
    specifications: {
      material: 'Natural Rubber Latex',
      thickness: '0.20mm',
      sizes: '6.0, 6.5, 7.0, 7.5, 8.0, 8.5',
      packaging: 'Individually wrapped, 50 pairs per box'
    },
    certifications: ['CE', 'ISO 13485', 'EN 455']
  },
  {
    id: '4',
    name: 'Type IIR Surgical Face Masks',
    category: 'Face Masks',
    description: '3-layer surgical masks with high bacterial filtration efficiency and fluid resistance.',
    image: 'https://images.unsplash.com/photo-1601392842066-eb7dbcec9866?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwbWFza3MlMjBtZWRpY2FsfGVufDB8fHx8MTc1OTkxNTI3NHww&ixlib=rb-4.1.0&q=85',
    specifications: {
      layers: '3-ply non-woven',
      filtration: 'BFE ≥ 98%',
      breathability: '< 40 Pa/cm²',
      packaging: '50 pieces per box'
    },
    certifications: ['CE', 'EN 14683 Type IIR', 'ISO 13485']
  },
  {
    id: '5',
    name: 'FFP2 Respirator Masks',
    category: 'Face Masks',
    description: 'High-filtration FFP2 respirators for enhanced protection against airborne particles.',
    image: 'https://images.unsplash.com/photo-1589837991353-312e435144d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxmYWNlJTIwbWFza3MlMjBtZWRpY2FsfGVufDB8fHx8MTc1OTkxNTI3NHww&ixlib=rb-4.1.0&q=85',
    specifications: {
      filtration: '≥ 94%',
      standard: 'EN 149:2001+A1:2009',
      design: 'Foldable with adjustable nose clip',
      packaging: '20 pieces per box'
    },
    certifications: ['CE', 'FFP2', 'ISO 13485']
  },
  {
    id: '6',
    name: 'Disposable Medical Gowns',
    category: 'Disposable Materials',
    description: 'Protective isolation gowns for medical and laboratory use.',
    image: 'https://images.pexels.com/photos/5863400/pexels-photo-5863400.jpeg',
    specifications: {
      material: 'Non-woven PP+PE',
      weight: '45 g/m²',
      sizes: 'M, L, XL, XXL',
      packaging: '10 pieces per pack'
    },
    certifications: ['CE', 'ISO 13485', 'Cat III Type 4B']
  },
  {
    id: '7',
    name: 'Medical Sterilization Pouches',
    category: 'Disposable Materials',
    description: 'Self-seal sterilization pouches for autoclaving medical instruments.',
    image: 'https://images.unsplash.com/photo-1561328165-f0b762a9508e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwc3VwcGxpZXN8ZW58MHx8fHwxNzU5OTE1Mjc5fDA&ixlib=rb-4.1.0&q=85',
    specifications: {
      material: 'Medical grade paper + film',
      sterilization: 'Steam, ETO',
      sizes: 'Various sizes available',
      packaging: '200 pieces per box'
    },
    certifications: ['CE', 'ISO 11607', 'EN 868']
  },
  {
    id: '8',
    name: 'Disposable Syringes & Needles',
    category: 'Medical Supplies',
    description: 'Sterile single-use syringes with precision needles.',
    image: 'https://images.unsplash.com/photo-1605176173609-a0067079b419?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VwcGxpZXN8ZW58MHx8fHwxNzU5OTE1Mjc5fDA&ixlib=rb-4.1.0&q=85',
    specifications: {
      volumes: '1ml, 3ml, 5ml, 10ml, 20ml',
      needles: 'Various gauge sizes',
      material: 'Medical grade PP',
      packaging: 'Individually blister packed'
    },
    certifications: ['CE', 'ISO 7886', 'ISO 13485']
  }
];

export const categories = [
  { id: '1', name: 'Medical Gloves', count: 3 },
  { id: '2', name: 'Face Masks', count: 2 },
  { id: '3', name: 'Disposable Materials', count: 2 },
  { id: '4', name: 'Medical Supplies', count: 1 }
];

export const newsArticles = [
  {
    id: '1',
    title: 'VITARO Achieves ISO 13485:2016 Certification',
    date: '2025-01-15',
    category: 'Company News',
    excerpt: 'We are proud to announce that VITARO has successfully achieved ISO 13485:2016 certification, demonstrating our commitment to quality management systems.',
    image: 'https://images.unsplash.com/photo-1581056771085-3ce30d907416?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwc3VwcGxpZXN8ZW58MHx8fHwxNzU5OTE1Mjc5fDA&ixlib=rb-4.1.0&q=85',
    content: 'Full article content here...'
  },
  {
    id: '2',
    title: 'New Product Line: FFP3 Respirators Launch',
    date: '2025-01-08',
    category: 'Product Launch',
    excerpt: 'VITARO introduces advanced FFP3 respirators with enhanced filtration technology for maximum protection.',
    image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg',
    content: 'Full article content here...'
  },
  {
    id: '3',
    title: 'Partnership with European Healthcare Distributors',
    date: '2024-12-20',
    category: 'Business',
    excerpt: 'VITARO expands its distribution network across Europe through strategic partnerships with leading healthcare suppliers.',
    image: 'https://images.pexels.com/photos/7723394/pexels-photo-7723394.jpeg',
    content: 'Full article content here...'
  },
  {
    id: '4',
    title: 'Sustainability Initiative: Eco-Friendly Packaging',
    date: '2024-12-10',
    category: 'Sustainability',
    excerpt: 'Our commitment to environmental responsibility: VITARO introduces recyclable packaging materials for all product lines.',
    image: 'https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg',
    content: 'Full article content here...'
  }
];

export const companyInfo = {
  name: 'VITARO Medical',
  tagline: 'Innovation in Healthcare Solutions',
  mission: 'To provide high-quality, reliable medical products that enhance healthcare delivery and patient safety worldwide.',
  vision: 'To be a global leader in medical product manufacturing, recognized for innovation, quality, and sustainability.',
  founded: '2002',
  employees: '500+',
  countries: '45+',
  certifications: [
    { name: 'ISO 13485:2016', description: 'Medical Devices Quality Management System' },
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'CE Marking', description: 'European Conformity Standards' },
    { name: 'FDA Registered', description: 'US Food and Drug Administration' },
    { name: 'EN ISO 374', description: 'Protective Gloves Standard' },
    { name: 'EN 455', description: 'Medical Gloves Standard' },
    { name: 'ASTM D6319', description: 'Nitrile Examination Gloves' },
    { name: 'ISO 11607', description: 'Packaging for Medical Devices' },
    { name: 'EN 14683', description: 'Medical Face Masks Standard' },
    { name: 'GB 19083', description: 'Chinese Medical Mask Standard' },
    { name: 'GMP Certified', description: 'Good Manufacturing Practice' },
    { name: 'ISO 14001', description: 'Environmental Management' }
  ],
  contact: {
    address: 'Plot 12, Unit A, North Ridge Industrial Park',
    addressLine2: 'No. 3 Hengshan Road, Jiading District',
    city: 'Shanghai 201800, China',
    phone: '+86 21 6798 1203',
    email: 'info@myvitaro.com',
    website: 'www.myvitaro.com',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM (CST)'
  }
};