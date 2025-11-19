/// mockData.js
// Mock data for VITARO Medical Website

import dentalSolutions from '@/images/news/dentalSolutions.webp'
import iso from '@/images/news/iso.webp'

export const mockProducts = [
  {
    id: '22',
    nameKey: 'product22Name',
    descriptionKey: 'product22Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product23Name',
    descriptionKey: 'product23Desc',
    categoryKey: 'dentalImagingTranslate',
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
    nameKey: 'product24Name',
    descriptionKey: 'product24Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product25Name',
    descriptionKey: 'product25Desc',
    categoryKey: 'dentalInstruments',
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
    nameKey: 'product26Name',
    descriptionKey: 'product26Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product27Name',
    descriptionKey: 'product27Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product28Name',
    descriptionKey: 'product28Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product29Name',
    descriptionKey: 'product29Desc',
    categoryKey: 'dentalHandpiecesTranslate',
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
    nameKey: 'product30Name',
    descriptionKey: 'product30Desc',
    categoryKey: 'dentalHandpiecesTranslate',
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
    nameKey: 'product31Name',
    descriptionKey: 'product31Desc',
    categoryKey: 'dentalImplants',
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
    nameKey: 'product32Name',
    descriptionKey: 'product32Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product33Name',
    descriptionKey: 'product33Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product34Name',
    descriptionKey: 'product34Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product35Name',
    descriptionKey: 'product35Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product36Name',
    descriptionKey: 'product36Desc',
    categoryKey: 'dentalImagingTranslate',
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
    nameKey: 'product37Name',
    descriptionKey: 'product37Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
    nameKey: 'product38Name',
    descriptionKey: 'product38Desc',
    categoryKey: 'dentalImagingTranslate',
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
    nameKey: 'product39Name',
    descriptionKey: 'product39Desc',
    categoryKey: 'dentalHandpiecesTranslate',
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
    nameKey: 'product40Name',
    descriptionKey: 'product40Desc',
    categoryKey: 'dentalHandpiecesTranslate',
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
    nameKey: 'product41Name',
    descriptionKey: 'product41Desc',
    categoryKey: 'dentalParts',
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
    nameKey: 'product42Name',
    descriptionKey: 'product42Desc',
    categoryKey: 'dentalHandpiecesTranslate',
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
    nameKey: 'product43Name',
    descriptionKey: 'product43Desc',
    categoryKey: 'dentalEquipmentTranslate',
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
  },
  {
    id: '44',
    nameKey: 'product44Name',
    descriptionKey: 'product44Desc',
    categoryKey: 'dentalEquipmentTranslate',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/gxw396ru_IMAGE%202025-11-18%2018%3A37%3A13.jpg',
    specifications: {
      manufacturer: 'EASYDOC',
      technique: 'Warm vertical condensation',
      power: 'Cordless rechargeable',
      head_design: 'Contra-angle with fine applicator',
      tip_color: 'Green heated carrier/plugger',
      controls: 'Temperature and mode selection',
      applications: 'Root canal obturation, gutta-percha delivery',
      design: 'Ergonomic white body with control buttons'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '45',
    nameKey: 'product45Name',
    descriptionKey: 'product45Desc',
    categoryKey: 'dentalEquipmentTranslate',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/47klintj_IMAGE%202025-11-18%2018%3A37%3A14.jpg',
    specifications: {
      manufacturer: 'KAVO',
      model: 'PROPHYflex 4',
      design: 'Ergonomic pistol-grip',
      reservoir: 'Transparent for powder level monitoring',
      nozzle: 'Angled, detachable for sterilization',
      powder_types: 'Sodium bicarbonate, glycine, calcium carbonate',
      applications: 'Stain removal, plaque removal, biofilm removal',
      color: 'Dark blue body with silver accents'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '46',
    nameKey: 'product46Name',
    descriptionKey: 'product46Desc',
    categoryKey: 'dentalEquipmentTranslate',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/jeqnur7j_IMAGE%202025-11-18%2018%3A37%3A20.jpg',
    specifications: {
      manufacturer: 'DTE / Woodpecker',
      model: 'Endo R+ W3-Pro',
      display: 'Color digital LCD with visual indicators',
      apex_locator: 'Integrated real-time measurement',
      handpiece: 'Cordless with contra-angle attachment',
      controls: 'Speed, torque, direction, file settings',
      charging: 'Wireless docking station',
      connectivity: 'USB ports for data/updates'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '47',
    nameKey: 'product47Name',
    descriptionKey: 'product47Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/ort32rki_IMAGE%202025-11-18%2018%3A37%3A21.jpg',
    specifications: {
      manufacturer: 'VDW',
      model: 'VDW.GOLD RECIPROC',
      mode: 'RECIPROCATION / RECIPROC ALL',
      display: 'Digital LCD with canal visualization',
      handpiece: 'Motorized with RECIPROC branding',
      apex_locator: 'Integrated with separate probe',
      controls: 'rpm, memory (MEMO), calibration (CAL), analysis',
      technique: 'Reciprocating single-file system'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '48',
    nameKey: 'product48Name',
    descriptionKey: 'product48Desc',
    categoryKey: 'dentalLabEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/2ipe79ex_photo_1_2025-11-18_21-43-44.jpg',
    specifications: {
      manufacturer: 'ASIGA',
      technology: 'DLP/SLA resin-based 3D printing',
      cover: 'Red UV-filtering translucent enclosure',
      interface: 'Color touchscreen with Main Menu',
      build_chamber: 'Enclosed with visible build platform',
      connectivity: 'USB port for data transfer',
      applications: 'Models, guides, crowns, aligners, dentures',
      form_factor: 'Compact desktop unit'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '49',
    nameKey: 'product49Name',
    descriptionKey: 'product49Desc',
    categoryKey: 'dentalLabEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/dswi5s85_photo_2_2025-11-18_21-43-44.jpg',
    specifications: {
      process: 'Vacuum forming/thermoforming',
      chamber: 'Removable clear tray with handles',
      heating: 'Top-mounted heating element',
      controls: 'Temperature and pressure dial',
      materials: 'Thermoplastic aligner sheets',
      applications: 'Clear aligners, retainers, mouthguards',
      design: 'Red/black professional housing',
      base_unit: 'White with motor and controls'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '50',
    nameKey: 'product50Name',
    descriptionKey: 'product50Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/j3gbmw5g_photo_3_2025-11-18_21-43-44.jpg',
    specifications: {
      manufacturer: 'DTE',
      model: 'SANI-X',
      display: 'Color touchscreen',
      modes: 'Bone (B), Perio (P), Endo (E), Clean (C)',
      controls: 'WATER + and POWER + adjustable',
      handpiece: 'Detachable with integrated holder',
      irrigation: 'Suspended fluid bag system',
      applications: 'Scaling, periodontal treatment, endodontics, bone surgery'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '51',
    nameKey: 'product51Name',
    descriptionKey: 'product51Desc',
    categoryKey: 'dentalParts',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/t0398l5x_photo_4_2025-11-18_21-43-44.jpg',
    specifications: {
      manufacturer: 'DTE',
      coating: 'Gold (likely titanium nitride)',
      material: 'Stainless steel with TiN coating',
      tip_designs: 'Various curved configurations',
      storage: 'Stainless racks with blue silicone inserts',
      sterilization: 'Autoclavable cassettes included',
      packaging: 'Individual blister packs',
      applications: 'Bone grafting, sinus lifts, ridge augmentation, extractions'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '52',
    nameKey: 'product52Name',
    descriptionKey: 'product52Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/k3alss6r_photo_5_2025-11-18_21-43-44.jpg',
    specifications: {
      functions: 'Scaling and endodontic irrigation',
      handpieces: 'Two detachable (scaling + endo)',
      reservoirs: 'Dual: 1400ml water + solution reservoir',
      modes: 'Scaling, P, E.G. (Endo), Purge',
      water_control: '0-12 scale adjustable',
      power_control: '0-12 scale adjustable',
      display: 'Digital control panel',
      applications: 'Scaling, plaque removal, root canal irrigation'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '53',
    nameKey: 'product53Name',
    descriptionKey: 'product53Desc',
    categoryKey: 'dentalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/1c29npzn_photo_1_2025-11-18_21-49-28.jpg',
    specifications: {
      manufacturer: 'DTE',
      model: 'i-SCAN',
      interface: 'Large color touchscreen (7-10 inch)',
      functions: 'Patient Card, Register, Settings, Images, Scan',
      memory: 'Digital storage with usage indicators',
      design: 'Compact white and gold desktop unit',
      applications: 'Digital impressions, crowns, bridges, aligners, surgical guides',
      connectivity: 'USB, Wi-Fi, Ethernet (implied)'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '54',
    nameKey: 'product54Name',
    descriptionKey: 'product54Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/a1ezsrw1_photo_2_2025-11-18_21-49-28.jpg',
    specifications: {
      manufacturer: 'DTE',
      display: 'Digital LCD with multiple parameters',
      settings: 'Tip type, Mode, Frequency, Power, Water flow',
      handpiece: 'Ultrasonic with gold-coated tip',
      irrigation: 'Transparent water bag with tubing',
      holder: 'Integrated metal handpiece rack',
      control: 'Foot pedal (implied)',
      certifications_visible: 'CE mark on handpiece'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '55',
    nameKey: 'product55Name',
    descriptionKey: 'product55Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/gnpw9lvl_photo_3_2025-11-18_21-49-28.jpg',
    specifications: {
      manufacturer: 'DTE',
      model: 'Fi-G',
      design: 'Cordless pistol-grip with charging base',
      display: 'Digital temperature screen (150°C shown)',
      controls: 'Power, temperature adjustment buttons',
      tip: 'Fine heated needle for gutta-percha',
      power: 'Rechargeable lithium battery',
      applications: 'Root canal obturation, thermoplastic compaction'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '56',
    nameKey: 'product56Name',
    descriptionKey: 'product56Desc',
    categoryKey: 'sterilization',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/vp9wtzo6_photo_4_2025-11-18_21-49-28.jpg',
    specifications: {
      chamber: 'Stainless steel front-loading',
      interface: 'Color touchscreen control panel',
      racks: 'Multiple stainless steel trays',
      cleaning_system: 'Integrated handpiece flushing with spray nozzle',
      reservoir: 'Side-mounted water/filtration system',
      ventilation: 'Multiple grilles for heat dissipation',
      design: 'Countertop white unit with modern aesthetic'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '57',
    nameKey: 'product57Name',
    descriptionKey: 'product57Desc',
    categoryKey: 'sterilization',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/2oz186f6_photo_5_2025-11-18_21-49-28.jpg',
    specifications: {
      manufacturer: 'Runyes',
      chamber: 'Circular stainless steel with racks',
      display: 'Digital LCD with cycle status',
      controls: 'Button panel with programmable cycles',
      door: 'Hinged with blue handle and latch',
      connectivity: 'USB ports, water connections',
      power: 'Green rocker switch',
      design: 'Benchtop model with ventilation grilles'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '58',
    nameKey: 'product58Name',
    descriptionKey: 'product58Desc',
    categoryKey: 'sterilization',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/7eaox13m_photo_1_2025-11-18_21-53-51.jpg',
    specifications: {
      manufacturer: 'WOSON',
      class: 'Class B',
      programs: 'Unwrapped, Wrapped, Prion, Porous',
      temperatures: '121°C, 134°C selectable',
      cycles: 'Vacuum, Sterilization, Drying',
      display: 'Digital temp, pressure, time readouts',
      chamber: 'Stainless steel with multiple racks',
      safety: 'Hot surface warning, secure door lock'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '59',
    nameKey: 'product59Name',
    descriptionKey: 'product59Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/ny71rqmq_photo_2_2025-11-18_21-53-51.jpg',
    specifications: {
      manufacturer: 'COXO',
      model: 'CX235',
      torque: 'Up to 50 Ncm',
      speed: 'Up to 1200 rpm',
      gear_ratio: '20:1 contra-angle',
      control: 'Multi-button foot pedal',
      irrigation: 'Integrated fluid delivery system',
      programs: 'Multiple programmable presets (P1, P2, etc.)'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '60',
    nameKey: 'product60Name',
    descriptionKey: 'product60Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/09e5ix91_photo_3_2025-11-18_21-53-51.jpg',
    specifications: {
      modes: '4 modes - Bone, Perio, Endo, Clean',
      interface: 'Color touchscreen display',
      power_control: 'Adjustable graphical scale',
      water_control: 'Adjustable flow with dial',
      irrigation: 'Integrated fluid bag system',
      handpiece: 'Ergonomic with tip holder',
      program: 'E0 and customizable settings'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '61',
    nameKey: 'product61Name',
    descriptionKey: 'product61Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/28etc275_photo_4_2025-11-18_21-53-51.jpg',
    specifications: {
      torque: '55 N.cm',
      speed: '2000 r/min',
      gear_ratio: '20:1',
      display: 'Large color touchscreen',
      handpieces: 'Two contra-angle included',
      foot_pedal: '4-button multicolor control',
      features: 'Calibration, light, irrigation, pump control'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '62',
    nameKey: 'product62Name',
    descriptionKey: 'product62Desc',
    categoryKey: 'dentalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/z6oen7re_photo_5_2025-11-18_21-53-51.jpg',
    specifications: {
      design: 'Portable handheld with integrated display',
      kilovoltage: '60kV (adjustable)',
      exposure_time: '0.36s (adjustable)',
      display: 'Digital screen for real-time imaging',
      controls: 'Comprehensive button panel',
      collimator: 'Cylindrical cone for beam direction',
      applications: 'Intraoral radiography, caries detection'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '63',
    nameKey: 'product63Name',
    descriptionKey: 'product63Desc',
    categoryKey: 'dentalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/99fzh60o_photo_3_2025-11-18_21-59-28.jpg',
    specifications: {
      manufacturer: 'RAYIMAGING',
      display: 'Color touchscreen with icon-based UI',
      exposure_measurement: '0.160s displayed',
      xray_parameters: '70kV, 3mA compatible',
      modes: 'Multiple imaging profiles with patient/tooth icons',
      design: 'Compact with lens detector component',
      applications: 'Digital dental imaging, exposure verification, QA'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '64',
    nameKey: 'product64Name',
    descriptionKey: 'product64Desc',
    categoryKey: 'dentalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/0ydkmfjo_photo_4_2025-11-18_21-59-28.jpg',
    specifications: {
      manufacturer: 'Mayar Med',
      generator: 'Portable X-ray with handle',
      detector: 'Digital flat panel with grid lines',
      display: 'Laptop with immediate image viewing',
      controls: 'Multi-button panel with digital displays',
      collimator: 'Adjustable beam size with knobs',
      applications: 'Point-of-care, emergency, ICU, mobile diagnostics'
    },
    certifications: ['CE', 'ISO 13485']
  },
  {
    id: '65',
    nameKey: 'product65Name',
    descriptionKey: 'product65Desc',
    categoryKey: 'dentalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/rb79y2bh_photo_5_2025-11-18_21-59-28.jpg',
    specifications: {
      design: 'Ergonomic pen-like handpiece',
      color: 'Blue body with white scanning tip',
      connectivity: 'Wired with charging dock',
      software: '3D rendering with orthodontic module',
      features: 'Color accuracy map, scan review, export options',
      docking_station: 'Gray base with charging',
      applications: 'Digital impressions, orthodontics, aligners, restoration'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '66',
    nameKey: 'product66Name',
    descriptionKey: 'product66Desc',
    categoryKey: 'dentalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/e1oj9oi5_photo_6_2025-11-18_21-59-28.jpg',
    specifications: {
      manufacturer: 'VITARO',
      origin: 'Made in Korea',
      kilovoltage: '60kV',
      current: '2mA',
      exposure_time: '0.35s',
      power: 'Battery-powered (icon visible)',
      display: 'Digital LCD with icons',
      controls: 'Button interface with mode selection'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '67',
    nameKey: 'product67Name',
    descriptionKey: 'product67Desc',
    categoryKey: 'dentalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/gx6ah2gl_photo_7_2025-11-18_21-59-28.jpg',
    specifications: {
      speed: '1000 r/min',
      torque: '36 Nm',
      gear_ratio: '20:1 contra-angle',
      interface: 'Large color touchscreen',
      foot_pedal: 'Multi-button with green/red controls',
      irrigation: 'IV bag system with stand',
      handpiece: 'Motor handpiece with coiled cable',
      programs: 'Pre-programmed protocols and custom settings'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '68',
    nameKey: 'product68Name',
    descriptionKey: 'product68Desc',
    categoryKey: 'dentalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medequip-catalog/artifacts/ns4z5bth_photo_1_2025-11-18_22-11-53.jpg',
    specifications: {
      voltage: '60kV',
      exposure_time: 'Adjustable up to 2.00s',
      display: 'Digital LCD with parameter display',
      interface: 'Button control panel with mode icons',
      portability: 'Integrated carrying strap',
      power: 'Battery-powered operation',
      imaging_modes: 'Pre-programmed for anterior, posterior, and bitewing',
      indicators: 'READY and EXPOSURE status lights'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '69',
    nameKey: 'product69Name',
    descriptionKey: 'product69Desc',
    categoryKey: 'dentalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medequip-catalog/artifacts/ixvic8yl_photo_2_2025-11-18_22-11-53.jpg',
    specifications: {
      design: 'Handheld portable unit',
      display: 'Digital LCD screen',
      controls: 'Tactile buttons for exposure settings',
      indicators: 'READY and Exposure status',
      power: 'Rechargeable battery',
      ergonomics: 'Comfortable grip handle',
      collimator: 'Focused X-ray beam emission',
      applications: 'Caries, periodontal, endodontic, implant imaging'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '70',
    nameKey: 'product70Name',
    descriptionKey: 'product70Desc',
    categoryKey: 'medicalImaging',
    image: 'https://customer-assets.emergentagent.com/job_medequip-catalog/artifacts/r9frnips_photo_3_2025-11-18_22-11-53.jpg',
    specifications: {
      brand: 'SonoScape',
      imaging_modes: 'B-mode, Color Doppler, Spectral Doppler',
      display: 'High-definition screen with flip-up design',
      interface: 'Integrated full-function keyboard',
      portability: 'Laptop-style with carry handle',
      applications: 'Vascular, cardiology, emergency, general diagnostics',
      doppler: 'Real-time blood flow velocity and direction',
      parameters: 'FPS, PRF, Gain, Depth adjustable',
      design: 'Compact and mobile'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '71',
    nameKey: 'product71Name',
    descriptionKey: 'product71Desc',
    categoryKey: 'medicalEquipment',
    image: 'https://customer-assets.emergentagent.com/job_medequip-catalog/artifacts/oqjzd2ji_photo_4_2025-11-18_22-11-53.jpg',
    specifications: {
      measurement: 'Automated oscillometric blood pressure',
      display: 'High-definition touchscreen interface',
      mobility: 'Wheeled pedestal base with casters',
      cuff_system: 'Automatic inflation and deflation',
      data_management: 'Digital storage and EHR integration capability',
      ergonomics: 'Adjustable display and cuff positioning',
      materials: 'Medical-grade, easy-to-clean surfaces',
      applications: 'Clinics, hospitals, pharmacies, wellness programs'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '72',
    nameKey: 'product72Name',
    descriptionKey: 'product72Desc',
    categoryKey: 'dentalImagingTranslate',
    image: 'https://customer-assets.emergentagent.com/job_medequip-catalog/artifacts/d2zlwxd3_photo_5_2025-11-18_22-11-53.jpg',
    specifications: {
      imaging_type: 'Cone-Beam Computed Tomography (CBCT)',
      reconstruction: '3D volumetric data',
      resolution: 'High-resolution digital imaging',
      patient_positioning: 'Chin rest, forehead support, head stabilizers',
      interface: 'Color touchscreen control panel',
      applications: 'Implantology, endodontics, orthodontics, oral surgery',
      design: 'C-arm structure with stable base',
      radiation: 'Low-dose technology',
      construction: 'Robust and durable frame'
    },
    certifications: ['CE', 'ISO 13485', 'FDA']
  },
  {
    id: '73',
    nameKey: 'product73Name',
    descriptionKey: 'product73Desc',
    categoryKey: 'dentalImagingTranslate',
    image: 'https://customer-assets.emergentagent.com/job_medequip-catalog/artifacts/hyk107e9_photo_1_2025-11-18_22-22-45.jpg',
    specifications: {
      imaging_modes: 'CBCT and Panoramic Radiography',
      cbct_views: 'Axial, Sagittal, Coronal cross-sections',
      reconstruction: '3D volumetric rendering',
      panoramic: 'Full arch view including TMJs',
      software: 'Intuitive visualization with measurement tools',
      applications: 'Implantology, orthodontics, endodontics, surgery, TMJ',
      resolution: 'Ultra-high-resolution imaging',
      workflow: 'Integrated acquisition to report generation',
      visualization: 'Interactive 3D models with manipulation'
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
  // { id: 'all', nameKey: 'all', count: mockProducts.length },
  { id: 'dental-equipment', nameKey: 'dentalEquipmentTranslate', count: mockProducts.filter(p => p.categoryKey === 'dentalEquipmentTranslate').length },
  { id: 'dental-handpieces', nameKey: 'dentalHandpieces', count: mockProducts.filter(p => p.categoryKey === 'dentalHandpiecesTranslate').length },
  { id: 'dental-imaging', nameKey: 'dentalImaging', count: mockProducts.filter(p => p.categoryKey === 'dentalImagingTranslate').length },
  { id: 'dental-instruments', nameKey: 'dentalInstruments', count: mockProducts.filter(p => p.categoryKey === 'dentalInstruments').length },
  { id: 'dental-implants', nameKey: 'dentalImplants', count: mockProducts.filter(p => p.categoryKey === 'dentalImplants').length },
  { id: 'dental-lab-equipment', nameKey: 'dentalLabEquipment', count: mockProducts.filter(p => p.categoryKey === 'dentalLabEquipment').length },
  { id: 'dental-parts', nameKey: 'dentalParts', count: mockProducts.filter(p => p.categoryKey === 'dentalParts').length },
  { id: 'sterilization', nameKey: 'sterilization', count: mockProducts.filter(p => p.categoryKey === 'sterilization').length },
  { id: 'medical-equipment', nameKey: 'medicalEquipment', count: mockProducts.filter(p => p.categoryKey === 'medicalEquipment').length },
  { id: 'medical-imaging', nameKey: 'medicalImaging', count: mockProducts.filter(p => p.categoryKey === 'dentalImagingTranslate').length },
];
