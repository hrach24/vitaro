// Mock data for VITARO Medical Website
// This file contains all mock data for products, news, etc.

export const mockProducts = [
  {
    id: '1',
    name: 'Dental Chair',
    category: 'Dental Equipment',
    description: 'Premium electric dental chair with memory foam cushioning, programmable positioning, and integrated control system for optimal patient comfort and dentist ergonomics.',
    image: 'https://images.unsplash.com/photo-1704455306251-b4634215d98f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGFpcnxlbnwwfHx8fDE3NjEwMjk1MzV8MA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.unsplash.com/photo-1591283261401-c76eba2d369a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzYxMDI5NTUyfDA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.unsplash.com/photo-1495573020741-8a2f372bbec3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzYxMDI5NTUyfDA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.unsplash.com/photo-1626878880028-0438b1403b3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzYxMDI5NTUyfDA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.pexels.com/photos/6502306/pexels-photo-6502306.jpeg',
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
    image: 'https://images.unsplash.com/photo-1651493803684-03a332c42014?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxpbnN1bGluJTIwc3lyaW5nZXxlbnwwfHx8fDE3NjEwMjk1NjB8MA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.unsplash.com/photo-1748064716276-6fb0fc9da94a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxuaXRyaWxlJTIwZ2xvdmVzJTIwbWVkaWNhbHxlbnwwfHx8fDE3NjEwMjk2MDh8MA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.unsplash.com/photo-1643660527076-726d42bb1a06?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxkZW50YWwlMjBjaGFpcnxlbnwwfHx8fDE3NjEwMjk1MzV8MA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.unsplash.com/photo-1643386106343-18d5d3c64d47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbnN0cnVtZW50cyUyMHRvb2xzfGVufDB8fHx8MTc2MTAyOTYxM3ww&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.pexels.com/photos/6528776/pexels-photo-6528776.jpeg',
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
    image: 'https://images.unsplash.com/photo-1706894724916-244a7d1e4990?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBsb3VwZXN8ZW58MHx8fHwxNzYxMDI5NjIwfDA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.pexels.com/photos/4269355/pexels-photo-4269355.jpeg',
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
    image: 'https://images.pexels.com/photos/4269942/pexels-photo-4269942.jpeg',
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
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzYxMDI5NjMyfDA&ixlib=rb-4.1.0&q=85',
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
    name: 'Implant Fiber Optic Contra-Angle Handpiece',
    category: 'Dental Handpieces',
    description: 'Specialized 20:1 reduction contra-angle handpiece with LED fiber optic illumination for implant procedures.',
    image: 'https://images.unsplash.com/photo-1728102197400-0648e058fddd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHw0fHxkZW50YWwlMjBpbnN0cnVtZW50cyUyMHRvb2xzfGVufDB8fHx8MTc2MTAyOTYxM3ww&ixlib=rb-4.1.0&q=85',
    specifications: {
      gear_ratio: '20:1 reduction',
      speed_range: '100-2000 RPM',
      torque: 'Up to 60 N.cm',
      fiber_optic: 'Integrated LED illumination',
      irrigation: 'Internal/External cooling',
      chuck_type: 'Latch-type',
      bur_compatibility: '2.35mm surgical burs',
      sterilization: 'Autoclavable 135°C'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '16',
    name: 'X-Ray Sensor',
    category: 'Dental Imaging',
    description: 'Digital intraoral X-ray sensor with high resolution CMOS technology for instant digital radiography.',
    image: 'https://images.unsplash.com/photo-1755526739866-c73f65b82f8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB4LXJheSUyMGVxdWlwbWVudHxlbnwwfHx8fDE3NjEwMjk2MDN8MA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxkZW50YWwlMjB4LXJheSUyMGVxdWlwbWVudHxlbnwwfHx8fDE3NjEwMjk2MDN8MA&ixlib=rb-4.1.0&q=85',
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
    image: 'https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg',
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
    image: 'https://images.pexels.com/photos/6501925/pexels-photo-6501925.jpeg',
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
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
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
    image: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=800',
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
  },
  {
    id: '22',
    name: 'Dental Headlight with Magnification Loupes',
    category: 'Dental Equipment',
    description: 'Professional head-mounted LED illumination system with integrated magnification loupes for enhanced visualization during dental procedures. Features adjustable headband, dual LED lights, and interchangeable magnifying lenses for optimal precision.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/7pgo77wk_photo_1_2025-11-17_22-37-11.jpg',
    specifications: {
      led_lights: 'Dual LED adjustable lights',
      magnification: '2.5x, 3.5x, 4.5x (interchangeable)',
      working_distance: '340mm - 520mm',
      battery: 'Rechargeable lithium 5000mAh',
      led_brightness: 'High-intensity white LED',
      headband: 'Adjustable padded headband',
      weight: '250g complete system',
      lenses: 'Multiple magnification options included'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '23',
    name: 'ZEISS EXTARO 300 Surgical Microscope',
    category: 'Dental Imaging',
    description: 'Premium wall-mounted dental surgical microscope with superior Carl Zeiss optics. Binocular design with advanced magnification and co-axial illumination for endodontics, periodontics, and precision dental surgery.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/71taoc7t_photo_2_2025-11-17_22-37-11.jpg',
    specifications: {
      manufacturer: 'Carl Zeiss',
      magnification_range: '3x to 20x variable',
      binocular: 'Stereoscopic viewing',
      mounting: 'Wall-mounted articulated arm',
      illumination: 'Integrated LED co-axial light',
      working_distance: '200mm - 400mm adjustable',
      controls: 'Manual zoom and focus controls',
      applications: 'Endodontics, surgery, implantology'
    },
    certifications: ['CE', 'FDA', 'ISO 13485']
  },
  {
    id: '24',
    name: 'Professional Dental Loupes Set',
    category: 'Dental Equipment',
    description: 'German-engineered precision dental loupes with multiple mounting options. Available with integrated LED illumination for shadow-free visibility. Perfect for restorative dentistry, surgery, and detailed examination work.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/a9en07dq_photo_3_2025-11-17_22-37-11.jpg',
    specifications: {
      origin: 'Made in Germany',
      magnification: '2.5x, 3.5x, 4.5x, 5.5x options',
      mounting: 'Spectacle frame or headband mount',
      illumination: 'Optional integrated LED system',
      optics: 'High-quality German optical glass',
      adjustment: 'Fully adjustable angle and distance',
      weight: '85g - 150g depending on model',
      field_of_view: '80mm - 120mm'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '25',
    name: 'Dental Surgical Instruments Set (MCT)',
    category: 'Dental Instruments',
    description: 'Comprehensive stainless steel surgical instrument set for tooth extraction and oral surgery. Includes specialized forceps, elevators, and examination tools. Precision-manufactured with ergonomic textured handles for optimal control.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/ejuryu0e_photo_4_2025-11-17_22-37-11.jpg',
    specifications: {
      material: 'Surgical grade stainless steel',
      set_includes: 'Extraction forceps, elevators, mouth mirror',
      handle_design: 'Cross-hatched textured grip',
      sterilization: 'Autoclavable up to 134°C',
      finish: 'Brushed matte surgical finish',
      forceps_types: 'Upper/lower molars, incisors, premolars',
      brand: 'MCT',
      model: 'EXP-001CE series'
    },
    certifications: ['CE', 'ISO 13485', 'EN 455']
  },
  {
    id: '26',
    name: 'APEX Digital Apex Locator',
    category: 'Dental Equipment',
    description: 'Advanced electronic apex locator with large touchscreen display for precise root canal length measurement. Features intuitive interface with visual and audible feedback for accurate endodontic procedures.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/dwco7wiv_photo_1_2025-11-17_22-48-57.jpg',
    specifications: {
      display: 'Large color touchscreen',
      measurement_accuracy: '±0.5mm',
      interface: 'Touch-based navigation',
      controls: 'Settings menu and directional controls',
      feedback: 'Visual display and audible alerts',
      design: 'Portable standalone unit',
      applications: 'Root canal therapy, endodontics',
      connectivity: 'USB port for charging/data'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '27',
    name: 'Propex Pixi Apex Locator (Dentsply)',
    category: 'Dental Equipment',
    description: 'Dentsply Maillefer Propex Pixi electronic apex locator with multi-segment digital display. Provides precise canal length measurements with color-coded visual feedback and numerical scale for successful endodontic treatment.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/wj5a1zc3_photo_2_2025-11-17_22-48-57.jpg',
    specifications: {
      manufacturer: 'Dentsply Maillefer',
      display_type: 'Multi-segment digital with color bars',
      measurement_scale: '0.0 - 2.0mm gradients',
      visual_indicators: 'Yellow to blue progression bars',
      audio_feedback: 'Integrated speaker alerts',
      accuracy: 'High precision impedance measurement',
      design: 'Compact handheld unit',
      battery: 'Rechargeable with charging port'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '28',
    name: 'ALLADIN LED Curing Light',
    category: 'Dental Equipment',
    description: 'Cordless LED dental curing light for polymerizing composite resins and bonding materials. Features digital display, multiple curing modes, adjustable timer, and ergonomic handheld design for efficient restorative procedures.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/d79xuy6v_photo_3_2025-11-17_22-48-57.jpg',
    specifications: {
      light_type: 'High-intensity LED',
      wavelength: '420-480nm',
      intensity: 'Adjustable power modes',
      display: 'Digital LCD screen',
      controls: 'Mode (M) and Timer (T) buttons',
      design: 'Cordless handheld pen-style',
      battery: 'Rechargeable lithium-ion',
      applications: 'Composite curing, bonding, sealants'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '29',
    name: 'NSK S-Max M25 Contra-Angle Handpiece',
    category: 'Dental Handpieces',
    description: 'Professional NSK contra-angle handpiece with 1:1 direct drive ratio. Features precision engineering for restorative procedures, cavity preparation, polishing, and implant work. Durable stainless steel construction with ergonomic design.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/ezutwl1t_photo_4_2025-11-17_22-48-57.jpg',
    specifications: {
      manufacturer: 'NSK Dental',
      model_series: 'S-Max M25',
      gear_ratio: '1:1 (direct drive)',
      material: 'Surgical grade stainless steel',
      bur_type: 'Standard latch-type',
      head_design: 'Angled for posterior access',
      sterilization: 'Autoclavable 135°C',
      applications: 'Restorative, prosthetic, implantology'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '30',
    name: 'High-Speed Dental Turbine Handpiece (Japan)',
    category: 'Dental Handpieces',
    description: 'Premium Japanese-manufactured high-speed dental handpiece with integrated water spray system. Model A21Z0145 features precision-engineered titanium construction, compact head design, and multi-port cooling for efficient cutting and shaping procedures.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/4vnj9l91_IMAGE%202025-11-18%2017%3A46%3A34.jpg',
    specifications: {
      model: 'A21Z0145',
      origin: 'Made in Japan',
      speed: '300,000-500,000 RPM',
      material: 'Titanium alloy / Stainless steel',
      spray_system: 'Multi-port water/air cooling',
      head_design: 'Compact ergonomic head',
      bur_retention: 'Push-button chuck mechanism',
      sterilization: 'Full autoclavable'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '31',
    name: 'Dental Implant Abutment Screw Set',
    category: 'Dental Implants',
    description: 'Precision dental implant abutment screws for connecting implant fixtures to prosthetic restorations. Manufactured from biocompatible titanium with threaded design for secure attachment. Essential component for dental implantology procedures.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/32mgk6rf_IMAGE%202025-11-18%2017%3A46%3A35.jpg',
    specifications: {
      material: 'Medical grade titanium alloy',
      design: 'Threaded shaft with retention head',
      compatibility: 'Universal implant platforms',
      surface: 'Precision machined finish',
      seal: 'Integrated O-ring sealing',
      applications: 'Crown, bridge, denture attachment',
      packaging: 'Sterile individual packaging',
      sizes: 'Multiple lengths and diameters available'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '32',
    name: 'Complete Dental Treatment Unit with LED Light',
    category: 'Dental Equipment',
    description: 'Integrated dental workstation featuring patient chair with multi-segment positioning, articulated LED operating light, instrument delivery system with multiple handpiece connections, digital control panel, and ergonomic design for comprehensive dental procedures.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/l6tp7bsy_IMAGE%202025-11-18%2017%3A46%3A39.jpg',
    specifications: {
      chair: 'Multi-position reclining with headrest',
      light: 'Multi-LED shadowless illumination',
      delivery_system: 'Articulated arm with handpiece holders',
      control_panel: 'Digital touchscreen interface',
      spittoon: 'Integrated cuspidor with suction',
      foot_control: 'Pneumatic foot pedal included',
      upholstery: 'Medical-grade leather',
      design: 'Ergonomic modular system'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '33',
    name: 'DAC Professional Dental Treatment Unit',
    category: 'Dental Equipment',
    description: 'High-end DAC dental treatment unit with complete operatory setup. Features ergonomic patient chair, advanced LED lighting, multiple handpiece delivery system, digital control panel, assistant station, and professional stool. Designed for comprehensive dental practice.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/hd7a4bcp_IMAGE%202025-11-18%2017%3A46%3A40.jpg',
    specifications: {
      manufacturer: 'DAC/DCI',
      chair_type: 'Fully adjustable patient chair',
      lighting: 'Articulated LED surgical light',
      handpieces: 'Multiple connection ports',
      control_system: 'Digital display with presets',
      suction: 'HVE and SE integrated',
      stool: 'Height-adjustable professional stool',
      finish: 'Premium upholstery and chrome accents'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '34',
    name: 'Integrated Dental Operatory with Patient Monitoring',
    category: 'Dental Equipment',
    description: 'Advanced integrated dental operatory unit with patient chair, multi-LED surgical light, mobile instrument delivery cart, and integrated vital signs monitor. Features digital display for real-time monitoring of heart rate, blood pressure, and oxygen saturation during procedures.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/hnf79sqp_IMAGE%202025-11-18%2017%3A48%3A02.jpg',
    specifications: {
      chair: 'Electric with programmable positions',
      monitor: 'Vital signs display (HR, BP, SpO2)',
      lighting: 'Multi-faceted LED with brightness control',
      delivery_cart: 'Mobile with multiple handpiece holders',
      control_panel: 'Digital with preset programs',
      mounting: 'Articulated arms for monitor and light',
      footpedal: 'Pneumatic control included',
      features: 'Real-time patient monitoring integration'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '35',
    name: 'Modern Dental Treatment Chair Unit (Premium Black)',
    category: 'Dental Equipment',
    description: 'Comprehensive dental treatment unit with sleek black upholstery. Includes fully adjustable patient chair, integrated instrument delivery console with digital controls, articulated examination light, ceramic spittoon with faucet, and ergonomic dentist stool. All-in-one modern operatory solution.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/m251eer0_IMAGE%202025-11-18%2017%3A48%3A04.jpg',
    specifications: {
      upholstery: 'Black medical-grade leather/vinyl',
      chair_adjustment: 'Multi-position reclining with headrest',
      handpiece_holders: '5+ instrument connections',
      control_panel: 'Digital touchscreen interface',
      bowl: 'Ceramic with integrated faucet',
      light: 'Multi-LED articulated examination light',
      stool: 'Mobile with five-star base',
      design: 'Contemporary streamlined aesthetic'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '36',
    name: 'Wireless Intraoral Camera System with Touch Monitor',
    category: 'Dental Imaging',
    description: 'Advanced wireless intraoral camera system with integrated Wi-Fi and Bluetooth connectivity. Features ergonomic handheld camera with LED illumination, large touch-screen monitor on articulated arm (Ø45mm clamp), and real-time image display. Perfect for diagnosis and patient education.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/m0xnggcc_IMAGE%202025-11-18%2017%3A48%3A06.jpg',
    specifications: {
      connectivity: 'Wi-Fi and Bluetooth wireless',
      camera: 'Handheld with integrated LED lighting',
      display: 'Large touch-screen monitor',
      mounting: 'Articulated arm with Ø45mm clamp',
      interface: 'Touch-screen controls',
      image_capture: 'High-resolution photos and video',
      applications: 'Diagnosis, treatment planning, patient education',
      power: 'Wireless operation with rechargeable battery'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '37',
    name: 'Wireless Endodontic Rotary System',
    category: 'Dental Equipment',
    description: 'Professional wireless motor-driven endodontic handpiece system for root canal procedures. Features angled handpiece with rotary file mechanism, separate control unit with speed/torque settings, and foot pedal operation. Designed for precision endodontic treatment with minimal cable clutter.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/v0gfh7og_IMAGE%202025-11-18%2017%3A48%3A08.jpg',
    specifications: {
      handpiece: 'Angled metallic with ergonomic grip',
      power: 'Wireless/battery-powered operation',
      control_unit: 'Digital with speed and torque control',
      foot_pedal: 'Hands-free activation included',
      applications: 'Rotary endodontics, root canal shaping',
      file_compatibility: 'Standard rotary endodontic files',
      features: 'Auto-reverse, torque control',
      design: 'Compact integrated system'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '38',
    name: 'Dental Intraoral Camera with Computer Workstation',
    category: 'Dental Imaging',
    description: 'Complete dental imaging workstation with intraoral camera, widescreen computer monitor, keyboard, mouse, and articulated mounting arm. Features Wi-Fi and Bluetooth connectivity for seamless integration with practice management software. Ideal for digital diagnostics and patient records.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/fhfxkrw7_IMAGE%202025-11-18%2017%3A48%3A10.jpg',
    specifications: {
      camera: 'Ergonomic handheld with LED illumination',
      connectivity: 'Wi-Fi and Bluetooth wireless',
      monitor: 'Widescreen with Windows OS interface',
      input_devices: 'Compact keyboard and mouse',
      mounting_arm: 'Articulated arm with brand logo',
      software: 'Image management and patient records',
      resolution: 'High-definition imaging',
      applications: 'Diagnosis, documentation, patient education'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '39',
    name: 'High-Speed Dental Turbine Handpiece with Blue Ring',
    category: 'Dental Handpieces',
    description: 'Premium high-speed dental turbine handpiece with distinctive blue color-coding ring. Features textured ergonomic grip, precision-machined nozzle for bur retention, and cooling water spray system. Designed for cavity preparation, tooth shaping, and general restorative procedures.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/p0spicl4_IMAGE%202025-11-18%2018%3A18%3A57.jpg',
    specifications: {
      speed: '300,000-450,000 RPM',
      material: 'Stainless steel/aluminum alloy',
      grip: 'Textured non-slip surface',
      color_coding: 'Blue identification ring',
      cooling: 'Multi-port water spray system',
      bur_retention: 'Push-button or friction grip',
      sterilization: 'Full autoclavable',
      applications: 'Cavity prep, crown prep, tooth shaping'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '40',
    name: 'Fiber Optic Contra-Angle Handpiece (CE Certified)',
    category: 'Dental Handpieces',
    description: 'High-speed fiber optic contra-angle dental handpiece with integrated LED illumination and push-button bur release. Features CE marking for European compliance, ergonomic design, and multi-port water spray. Perfect for precise restorative work in posterior teeth.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/tfp89b1j_IMAGE%202025-11-18%2018%3A18%3A59.jpg',
    specifications: {
      illumination: 'Fiber optic LED light',
      head_design: 'Contra-angle for posterior access',
      bur_release: 'Push-button quick-connect',
      spray_system: 'Multi-port water cooling',
      certification: 'CE marked (European compliance)',
      material: 'High-grade stainless steel',
      grip: 'Ergonomic contoured body',
      speed: 'High-speed rotation capability'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '41',
    name: 'Dental Turbine Rotor Assembly Kit',
    category: 'Dental Parts & Accessories',
    description: 'Professional replacement rotor assembly for dental turbine handpieces. Complete kit includes air-driven impeller rotor, high-precision ball bearings, O-ring seals, and spacers. Designed for high-speed performance with minimal vibration and friction.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/n7tx4ice_IMAGE%202025-11-18%2018%3A19%3A01.jpg',
    specifications: {
      components: 'Rotor, 2x ball bearings, O-ring, spacers',
      rotor_design: 'Multi-blade air impeller',
      bearings: 'High-precision high-speed rated',
      material: 'Stainless steel/metal alloy',
      sealing: 'O-ring and gasket system',
      compatibility: 'Standard dental turbine handpieces',
      rpm_rating: 'Suitable for 300,000+ RPM',
      applications: 'Turbine maintenance and repair'
    },
    certifications: ['ISO 13485']
  },
  {
    id: '42',
    name: 'High-Speed Dental Handpiece with Quad Spray',
    category: 'Dental Handpieces',
    description: 'Professional high-speed dental handpiece featuring angled head with quad-port water/air spray system. Ergonomic diamond-textured grip, precise bur retention, and optimized cooling for extended procedures. Ideal for cavity preparation, polishing, and restorative dentistry.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/2qcoeda1_IMAGE%202025-11-18%2018%3A19%3A02.jpg',
    specifications: {
      spray_system: '4-5 port water/air cooling',
      head_angle: 'Angled for posterior access',
      grip: 'Diamond-pattern textured surface',
      material: 'Polished stainless steel',
      head_size: 'Compact for precision work',
      cooling: 'Continuous irrigation during operation',
      sterilization: 'Autoclavable design',
      applications: 'Cavity prep, polishing, restoration'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '43',
    name: 'EASYDENT Cordless Endodontic Obturation Gun',
    category: 'Dental Equipment',
    description: 'Professional cordless obturation gun for root canal therapy by EASYDENT. Features ergonomic design, angled delivery tip for posterior access, digital temperature control, and rechargeable battery. Delivers heated gutta-percha for precise canal filling and sealing.',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/01yptg2l_IMAGE%202025-11-18%2018%3A19%3A04.jpg',
    specifications: {
      manufacturer: 'EASYDENT',
      power: 'Cordless rechargeable battery',
      tip_design: 'Angled for posterior access',
      tip_color: 'Green disposable/replaceable',
      controls: 'Digital temperature and flow control',
      applications: 'Root canal obturation with gutta-percha',
      design: 'Ergonomic cylindrical handle',
      features: 'Precision filling, temperature controlled'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  }
];

export const mockNews = [
  {
    id: '1',
    title: 'VITARO Expands Product Line with Advanced Dental Imaging Solutions',
    date: '2024-10-15',
    excerpt: 'We are excited to announce the launch of our new line of digital X-ray sensors and intraoral cameras.',
    content: 'VITARO Medical continues its commitment to innovation with the introduction of cutting-edge dental imaging solutions. Our new CMOS-based X-ray sensors offer superior image quality with up to 80% reduction in radiation exposure.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800',
    category: 'Product Launch'
  },
  {
    id: '2',
    title: 'ISO 13485:2016 Certification Renewed for 2024',
    date: '2024-09-20',
    excerpt: 'VITARO Medical successfully renews its ISO 13485:2016 certification, demonstrating continued commitment to quality.',
    content: 'Following a comprehensive audit of our quality management systems, VITARO Medical has successfully renewed its ISO 13485:2016 certification for medical device manufacturing.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    category: 'Certifications'
  },
  {
    id: '3',
    title: 'New Partnership with Leading European Dental Distributors',
    date: '2024-08-10',
    excerpt: 'VITARO expands its global reach through strategic partnerships in the European market.',
    content: 'We are pleased to announce new distribution agreements with leading dental equipment distributors across Germany, France, and Italy, strengthening our presence in the European market.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
    category: 'Business'
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: mockProducts.length },
  { id: 'dental-equipment', name: 'Dental Equipment', count: mockProducts.filter(p => p.category === 'Dental Equipment').length },
  { id: 'dental-handpieces', name: 'Dental Handpieces', count: mockProducts.filter(p => p.category === 'Dental Handpieces').length },
  { id: 'dental-imaging', name: 'Dental Imaging', count: mockProducts.filter(p => p.category === 'Dental Imaging').length },
  { id: 'dental-instruments', name: 'Dental Instruments', count: mockProducts.filter(p => p.category === 'Dental Instruments').length },
  { id: 'dental-implants', name: 'Dental Implants', count: mockProducts.filter(p => p.category === 'Dental Implants').length },
  { id: 'dental-parts', name: 'Dental Parts & Accessories', count: mockProducts.filter(p => p.category === 'Dental Parts & Accessories').length },
  { id: 'medical-supplies', name: 'Medical Supplies', count: mockProducts.filter(p => p.category === 'Medical Supplies').length },
  { id: 'orthodontic', name: 'Orthodontic Products', count: mockProducts.filter(p => p.category === 'Orthodontic Products').length },
  { id: 'sterilization', name: 'Sterilization Equipment', count: mockProducts.filter(p => p.category === 'Sterilization Equipment').length }
];
