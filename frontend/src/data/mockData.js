// Mock data for VITARO Medical Website
// This file contains all mock data for products, news, etc.

import dentalChair from '@/images/products/dentalChair.webp'
import dentalEndomtor from '@/images/products/dentalEndomtor.webp'
import equipment from '@/images/products/equipment.webp'
import contraAngel from '@/images/products/contraAngel.webp'
import turbine from '@/images/products/turbine.webp'
import insuline from '@/images/products/insulin.webp'
import gloves from '@/images/products/gloves.webp'
import lamp from '@/images/products/lamp.webp'
import dentalLaboratory from '@/images/products/dentalLaboratory.webp'
import floss from '@/images/products/floss.webp'
import binocular from '@/images/products/binocular.webp'
import clinicProducts from '@/images/products/clinicProducts.webp'
import dentalBraces from '@/images/products/dentalBraces.webp'
import air from '@/images/products/air.webp'
import xRay from '@/images/products/xRay.webp'
import machine from '@/images/products/machine.webp'
import cameraSet from '@/images/products/cameraSet.webp'
import dental from '@/images/products/dental.webp'
import ultrasonic from '@/images/products/ultrasonic.webp'
import autoClave from '@/images/products/autoclave.webp'
import dentalSolutions from '@/images/news/dentalSolutions.webp'
import iso from '@/images/news/iso.webp'



export const mockProducts = [
  {
    id: '1',
    name: 'Dental Chair',
    category: 'Dental Equipment',
    description: 'Premium electric dental chair with memory foam cushioning, programmable positioning, and integrated control system for optimal patient comfort and dentist ergonomics.',
    image: dentalChair,
    specifications: {
      type: 'Electric Hydraulic Chair',
      movement: '4-way programmable positioning',
      weight_capacity: '180 kg',
      upholstery: 'Medical grade leather, 9 colors available',
      base: 'Heavy-duty cast iron base',
      dimensions: '1800mm x 650mm x 600mm',
      voltage: '220V/110V, 50/60Hz',
      features: 'LED operating light, instrument tray, spittoon unit'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '2',
    name: 'Dental Endomotor',
    category: 'Dental Equipment',
    description: 'Advanced endodontic motor with precise torque control and apex locator integration for safe and efficient root canal treatment.',
    image: dentalEndomtor,
    specifications: {
      speed_range: '100-2000 RPM',
      torque_range: '0.4-5.0 N.cm',
      gear_ratio: '16:1, 64:1',
      apex_locator: 'Built-in multi-frequency',
      display: '4.5 inch LCD touchscreen',
      file_systems: 'Compatible with all major file systems',
      battery: 'Rechargeable lithium 2200mAh',
      autoclavable: 'Handpiece up to 135°C'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '3',
    name: 'Air Micro Motor (Dental)',
    category: 'Dental Equipment',
    description: 'High-performance pneumatic micromotor with exceptional torque and speed control for precise dental procedures.',
    image: equipment,
    specifications: {
      speed: '0-40,000 RPM',
      air_pressure: '0.28-0.30 MPa',
      noise_level: '< 70 dB',
      coupling: 'ISO standard E-type',
      weight: '185g',
      spray: '4-hole water spray system',
      sterilization: 'Autoclavable 135°C',
      connection: 'Standard 4-hole coupling'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '4',
    name: 'Dental Contra-Angle Handpiece',
    category: 'Dental Handpieces',
    description: 'Premium 1:1 ratio contra-angle handpiece with push-button chuck system and triple water spray for optimal cooling.',
    image: contraAngel,
    specifications: {
      gear_ratio: '1:1',
      speed: 'Up to 40,000 RPM',
      chuck_type: 'Push button',
      bur_compatibility: '2.35mm',
      head_size: 'Mini head 11.5mm',
      spray_system: 'Triple water spray',
      bearing: 'Ceramic ball bearings',
      sterilization: 'Autoclavable 135°C, 200 cycles'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '5',
    name: 'Dental Turbine Handpiece',
    category: 'Dental Handpieces',
    description: 'High-speed turbine handpiece with ceramic bearings, quad water spray, and superior torque for efficient cutting.',
    image: turbine,
    specifications: {
      speed: '350,000-420,000 RPM',
      torque: '16-18 W',
      chuck_type: 'Push button',
      bur_size: '1.6mm',
      head_height: '12.5mm',
      noise_level: '< 70 dB',
      spray_holes: '4-hole quad spray',
      bearing_type: 'Ceramic ball bearings',
      coupling: 'ISO standard 4-hole'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '6',
    name: 'Insulin Syringes 1ml U-100',
    category: 'Medical Supplies',
    description: 'Sterile single-use insulin syringes with ultra-fine needles for comfortable insulin injection. Available in multiple gauge sizes.',
    image: insuline,
    specifications: {
      capacity: '1ml (100 units)',
      scale: 'U-100 insulin scale',
      needle_gauge: '29G, 30G, 31G',
      needle_length: '8mm, 13mm',
      material: 'Medical grade PP barrel',
      needle_type: 'Ultra-thin wall, tri-bevel tip',
      packaging: 'Individually blister packed, sterile',
      shelf_life: '5 years'
    },
    certifications: ['CE', 'ISO 13485', 'FDA 510(k)', 'ISO 7886']
  },
  {
    id: '7',
    name: 'Nitrile Gloves',
    category: 'Medical Supplies',
    description: 'Powder-free nitrile examination gloves offering superior puncture resistance and chemical protection. Latex-free alternative.',
    image: gloves,
    specifications: {
      material: 'Nitrile (acrylonitrile-butadiene)',
      thickness: '0.12mm palm, 0.10mm finger',
      sizes: 'XS, S, M, L, XL',
      length: '240mm minimum',
      aql: '1.5 (critical defects)',
      tensile_strength: '14 MPa minimum',
      elongation: '500% minimum',
      packaging: '100 pieces per box, 10 boxes per carton'
    },
    certifications: ['CE', 'EN 455', 'ISO 13485', 'FDA', 'ASTM D6319']
  },
  {
    id: '8',
    name: 'Dental Lamp',
    category: 'Dental Equipment',
    description: 'LED dental operating light with adjustable color temperature, shadow-free illumination, and touchless sensor control.',
    image: lamp,
    specifications: {
      light_type: 'LED array',
      illumination: '20,000-40,000 Lux',
      color_temperature: '4000-5000K adjustable',
      lamp_head_diameter: '180mm',
      depth_of_focus: '700-1200mm',
      control: 'Touchless sensor + manual',
      led_lifespan: '50,000 hours',
      power_consumption: '35W'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '9',
    name: 'Dental Laboratory Electro-Spatula',
    category: 'Dental Lab Equipment',
    description: 'Electric wax spatula for precise wax modeling and dental lab work with adjustable temperature control.',
    image: dentalLaboratory,
    specifications: {
      temperature_range: '50-450°C',
      heating_time: '15 seconds to working temp',
      tip_types: '6 interchangeable tips included',
      power: '50W',
      voltage: '220V/110V',
      handle: 'Heat-resistant ergonomic design',
      cord_length: '1.5 meters',
      weight: '120g'
    },
    certifications: ['CE']
  },
  {
    id: '10',
    name: 'Dental Floss Picks',
    category: 'Dental Consumables',
    description: 'Premium dental floss picks with high-strength UHMWPE fiber and ergonomic handle design for effective plaque removal.',
    image: floss,
    specifications: {
      floss_material: 'UHMWPE (Ultra-high molecular weight polyethylene)',
      floss_strength: 'Shred resistant',
      handle_material: 'Food-grade PP plastic',
      pick_design: 'Textured tip for interdental cleaning',
      flavor: 'Mint / Unflavored options',
      sterilization: 'Gamma irradiated',
      packaging: '50 pieces per bag, individual sealed',
      dimensions: '75mm length'
    },
    certifications: ['ISO 13485', 'FDA']
  },
  {
    id: '11',
    name: 'Dental Binocular Loupes Set',
    category: 'Dental Equipment',
    description: 'Surgical loupes with adjustable magnification and integrated LED illumination for enhanced precision during procedures.',
    image: binocular,
    specifications: {
      magnification: '2.5x, 3.5x, 4.5x (selectable)',
      working_distance: '340mm, 420mm, 520mm',
      field_of_view: '80-100mm',
      led_light: 'Integrated 5W LED headlight',
      battery: 'Rechargeable lithium 5000mAh',
      weight: '85g (frame + loupes)',
      lens_coating: 'Anti-reflective, scratch resistant',
      frame: 'Titanium alloy, adjustable'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '12',
    name: 'Clinic Disinfection Products',
    category: 'Medical Supplies',
    description: 'Comprehensive disinfection solution for medical and dental clinics. Hospital-grade broad-spectrum disinfectant.',
    image: clinicProducts,
    specifications: {
      active_ingredient: 'Quaternary ammonium compounds',
      concentration: 'Ready-to-use / Concentrate 1:10',
      efficacy: 'Bactericidal, virucidal, fungicidal',
      contact_time: '1-5 minutes',
      surface_compatibility: 'All non-porous surfaces',
      fragrance: 'Lemon / Unscented options',
      volume: '500ml, 1L, 5L bottles',
      shelf_life: '2 years unopened'
    },
    certifications: ['EPA Registered', 'EN 14476', 'ISO 13485']
  },
  {
    id: '13',
    name: 'Dental Braces',
    category: 'Orthodontic Products',
    description: 'Metal and ceramic orthodontic brackets with advanced bonding system and low-friction design for efficient tooth movement.',
    image: dentalBraces,
    specifications: {
      material: 'Stainless steel 316L / Ceramic (zirconia)',
      slot_size: '0.018", 0.022"',
      prescription: 'Roth, MBT available',
      base_design: 'Mesh base with retention grooves',
      torque_angle: 'Pre-programmed angulation',
      hook: 'Integral tie wings',
      packaging: '20 pieces per kit (5-5 configuration)',
      sterilization: 'Pre-sterilized, single-use'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '14',
    name: 'Air Prophy (Dental Air Polisher)',
    category: 'Dental Equipment',
    description: 'Air polishing system for effective biofilm removal and stain removal using fine powder particles.',
    image: air,
    specifications: {
      air_pressure: '0.3-0.5 MPa',
      powder_capacity: '120ml chamber',
      powder_type: 'Sodium bicarbonate / Glycine compatible',
      nozzle: '360° rotating, autoclavable',
      water_pressure: '0.2 MPa',
      connection: 'Standard 4-hole coupling',
      weight: '280g handpiece',
      noise_level: '< 65 dB'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '15',
    name: 'X-Ray Sensor',
    category: 'Dental Imaging',
    description: 'Digital intraoral X-ray sensor with high resolution CMOS technology for instant digital radiography.',
    image: xRay,
    specifications: {
      sensor_type: 'CMOS APS',
      resolution: '26 lp/mm (1600 x 1200 pixels)',
      sensor_size: 'Size 1: 22 x 31mm, Size 2: 31 x 41mm',
      gray_scale: '14-bit (16384 shades)',
      exposure_reduction: 'Up to 80% vs. traditional film',
      cable_length: '3 meters USB',
      image_capture: 'Instant (<1 second)',
      infection_control: 'Autoclavable protective sheaths'
    },
    certifications: ['CE', 'FDA', 'ISO 13485']
  },
  {
    id: '17',
    name: 'Dental X-Ray Machine',
    category: 'Dental Imaging',
    description: 'Wall-mounted dental X-ray unit with DC technology for precise imaging and reduced radiation exposure.',
    image: machine,
    specifications: {
      generator: 'DC constant potential',
      tube_voltage: '60-70 kV',
      tube_current: '7-8 mA',
      focal_spot: '0.8mm',
      timer: '0.01-3.2 seconds',
      filtration: '2.5mm Al equivalent',
      cone_length: '200mm, 300mm',
      arm_rotation: '360° horizontal, 180° vertical',
      exposure_switch: 'Wireless remote'
    },
    certifications: ['CE', 'FDA', 'IEC 60601', 'ISO 13485']
  },
  {
    id: '18',
    name: 'Intraoral Camera Set',
    category: 'Dental Imaging',
    description: 'HD intraoral camera with autofocus, freeze-frame capture, and integrated software for patient education.',
    image: cameraSet,
    specifications: {
      sensor: '1/4 inch Sony CMOS',
      resolution: '1920 x 1080 Full HD',
      frame_rate: '30 fps',
      focus: 'Auto-focus 5-50mm',
      led_illumination: '6 high-brightness LEDs',
      connection: 'USB 2.0',
      software: 'Image capture & management software',
      dimensions: '230mm x 28mm diameter',
      weight: '140g'
    },
    certifications: ['CE', 'FDA', 'ISO 13485']
  },
  {
    id: '19',
    name: 'Gun-Type Dental X-Ray Machine',
    category: 'Dental Imaging',
    description: 'Portable handheld X-ray unit with backscatter shield for safe mobile radiography in dental practice.',
    image: dental,
    specifications: {
      type: 'Handheld portable',
      tube_voltage: '60 kV',
      tube_current: '2.5 mA',
      exposure_time: '0.2-0.8 seconds',
      battery: 'Lithium-ion rechargeable',
      battery_life: '200+ exposures',
      backscatter_shield: 'Integrated lead shield',
      weight: '2.5 kg',
      charging_time: '3 hours'
    },
    certifications: ['CE', 'FDA 21 CFR 1020.30', 'ISO 13485']
  },
  {
    id: '20',
    name: 'Dental Ultrasonic Scaler',
    category: 'Dental Equipment',
    description: 'Piezoelectric ultrasonic scaler for effective calculus removal and periodontal therapy with minimal discomfort.',
    image: ultrasonic,
    specifications: {
      frequency: '28-32 kHz',
      power: 'Adjustable 1-10 levels',
      water_control: 'Adjustable flow rate',
      handpiece: 'Detachable, autoclavable',
      tips: '6 scaling tips included',
      display: 'LED digital display',
      voltage: '220V-240V / 110V-120V',
      weight: '1.8 kg'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '21',
    name: 'Dental Autoclave Sterilizer',
    category: 'Sterilization Equipment',
    description: 'Class B autoclave with pre-vacuum cycles for complete sterilization of dental instruments and handpieces.',
    image: autoClave,
    specifications: {
      class: 'Class B (EN 13060)',
      chamber_volume: '18 liters',
      temperature_range: '121°C, 134°C',
      pressure: '2.1-2.3 bar',
      cycle_time: '18-28 minutes',
      trays: '3 stainless steel trays',
      drying: 'Forced air drying system',
      display: 'LCD touchscreen with cycle logs'
    },
    certifications: ['CE', 'EN 13060', 'ISO 13485']
  }
];

export const mockNews = [
  {
    id: '1',
    title: 'VITARO Expands Product Line with Advanced Dental Imaging Solutions',
    date: '2024-10-15',
    excerpt: 'We are excited to announce the launch of our new line of digital X-ray sensors and intraoral cameras.',
    content: 'VITARO Medical continues its commitment to innovation with the introduction of cutting-edge dental imaging solutions. Our new CMOS-based X-ray sensors offer superior image quality with up to 80% reduction in radiation exposure.',
    image: dentalSolutions,
    category: 'Product Launch'
  },
  {
    id: '2',
    title: 'ISO 13485:2016 Certification Renewed for 2024',
    date: '2024-09-20',
    excerpt: 'VITARO Medical successfully renews its ISO 13485:2016 certification, demonstrating continued commitment to quality.',
    content: 'Following a comprehensive audit of our quality management systems, VITARO Medical has successfully renewed its ISO 13485:2016 certification for medical device manufacturing.',
    image: iso,
    category: 'Certifications'
  },
];

export const categories = [
  // { id: 'all', name: 'All Products', count: mockProducts.length },
  { id: 'dental-equipment', name: 'Dental Equipment', count: mockProducts.filter(p => p.category === 'Dental Equipment').length },
  { id: 'dental-handpieces', name: 'Dental Handpieces', count: mockProducts.filter(p => p.category === 'Dental Handpieces').length },
  { id: 'medical-supplies', name: 'Medical Supplies', count: mockProducts.filter(p => p.category === 'Medical Supplies').length },
  { id: 'dental-imaging', name: 'Dental Imaging', count: mockProducts.filter(p => p.category === 'Dental Imaging').length },
  { id: 'orthodontic', name: 'Orthodontic Products', count: mockProducts.filter(p => p.category === 'Orthodontic Products').length }
];
