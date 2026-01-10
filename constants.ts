import { NavItem, ServiceItem, BenefitItem, FAQItem, DetailedServiceItem, BrandData, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Offers', href: '/#offers' },
  { label: 'Brands', href: '/brands' },
  { label: 'Services', href: '/services' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'XTOOL D8 Automotive Diagnostic Scan Tool',
    category: 'Professional Scanner',
    price: 12399,
    image: 'https://xtool.co.za/wp-content/uploads/2024/09/d8w-product.jpeg',
    description: 'The XTOOL D8 is a professional automotive diagnostic tool with ECU coding, bi-directional control, OE-level full system diagnostics, and 38+ service functions.',
    features: ['ECU Coding', 'Bi-Directional Control', '38+ Service Functions', '3-Year Free Updates']
  },
  {
    id: '2',
    name: 'Autel MaxiCOM MK808S',
    category: 'Tablet Scanner',
    price: 11850,
    image: 'https://gtsupplies.co.za/cdn/shop/files/GT-CRP919-1_600x.png?v=1710154359',
    description: 'Autel MaxiCOM MK808S is an advanced tablet scan tool based on the Android operating system. It consists of the MaxiCOM MK808S and the MaxiVCI Mini.',
    features: ['Android 11 OS', 'Full System Diagnostics', '28+ Service Functions', 'Injector Coding']
  },
  {
    id: '3',
    name: 'Launch X431 V+ PRO 4.0',
    category: 'Heavy Duty',
    price: 14200,
    image: 'https://launchx431.co.za/wp-content/uploads/2025/06/pro-elite-box-300x300.jpeg',
    description: 'Launch X431 V+ is a 10.1-inch advanced automotive diagnostic tool with heavy-duty module compatibility.',
    features: ['Active Test', 'ECU Coding', 'Key Programming', 'Wireless Bluetooth']
  },
  {
    id: '4',
    name: 'Innova 5610 OBD2 Diagnostic Code Reader',
    category: 'Handheld',
    price: 1200,
    image: 'https://timingtoolssa.co.za/wp-content/uploads/2024/04/lau33.jpg',
    description: 'Empower yourself with dealership level data. The 5610 provides special bidirectional control functions.',
    features: ['RepairSolutions2 App', 'Live Data', 'Smog Check', 'ABS/SRS Support']
  },
  {
    id: '5',
    name: 'Topdon ArtiDiag800 BT',
    category: 'Bluetooth Scanner',
    price: 1600,
    image: 'https://www.geewiz.co.za/323821-large_default/konnwei-kw680-obd2-obdii-car-diagnostic-scanner-car-engine-fault-error-code-reader-scanner-tool-black.jpg',
    description: 'Wireless diagnostics at its best. The ArtiDiag800 BT offers lifetime free updates and full system diagnostics.',
    features: ['Bluetooth VCI', 'AutoVIN', 'Oil Reset', 'EPB Reset']
  },
  {
    id: '6',
    name: 'Foxwell NT301 OBD2 Scanner',
    category: 'Entry Level',
    price: 450,
    image: 'https://image.made-in-china.com/229f0j00eEkRnjMqZhcT/V519-mp4.webp',
    description: 'The NT301 CAN OBDII/EOBD Code Reader creates a hands-on experience for checking engine issues.',
    features: ['I/M Readiness', 'DTC Lookup', 'Print Data', 'Check Engine Light Reset']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Mechanical Services',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKY7NPeHhWq74BBZuMvYKTdtJogl5SDSjkQ&s',
    items: ['Axle/ Driveshaft Repair', 'Brake Repair', 'Gearbox Repair', 'Suspension Repair', 'Transmission Repair']
  },
  {
    title: 'Electrical Services',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QPmNgsI0IZdkD9D33qWDMlRdl7AHpXkclg&s',
    items: ['AC Repair', 'Comfort System Repair']
  },
  {
    title: 'Diagnostics toool',
    image: 'data:image/jpeg;base64,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',
    items: ['smart scanner ', 'heavey duty/ hand held']
  },
  {
    title: 'Engine Repair Services',
    image: 'data:image/jpeg;base64,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',
    items: ['Engine Control Unit Repair', 'Engine Cooling System Repair', 'Engine Management System Repair']
  },
  {
    title: 'Service Packages',
    image: 'https://www.rmi.org.za/wp-content/uploads/sites/12/2020/10/Summer-car-maintenance-tips.jpg',
    items: ['Luxury Car Service Packages', 'Service & Warranty Packages']
  },
  {
    title: 'Extended Warranty',
    image: 'https://plus.unsplash.com/premium_photo-1661932729990-ac67192d26bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    items: ['New Cars Warranty Packages', 'Pre-Owned Cars Warranty Packages', 'Luxury Cars Warranty Packages']
  }
];

export const ALL_SERVICES: DetailedServiceItem[] = [
  {
    title: "AC Repair",
    image: "https://swissauto.ae/wp-content/uploads/2021/04/AC-Repair-Content-Image.jpg",
    description: "Is your car AC working properly? Or, Do you still feel the heat even after turning on the car AC?",
    link: "/services/ac-repair"
  },
  {
    title: "Axle/ Driveshaft Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Drive-Axle-Content.jpg",
    description: "Do you know, four-wheel-drive refers to cars with two axles providing torque or power to all the four wheels or axle ends at the same time?",
    link: "/services/axle-driveshaft-repair"
  },
  {
    title: "Brake Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    description: "Did you know, that your vehicle brakes are the most carping requirement that ensures the safety of you & your loved ones?",
    link: "/services/brake-repair"
  },
  {
    title: "Camera / Radar Calibration",
    image: "https://swissauto.ae/wp-content/uploads/2021/04/Camera-and-Radar-Calibration-Content-.jpg",
    description: "Do you know, your drive can be more comfortable if you have all the car calibration and radar at the right place?",
    link: "/services/camera-radar-calibration"
  },
  {
    title: "Car Software Repair & Programming",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Software-repair-Content.jpg",
    description: "Have you ever observed that the control units in your car have chip lock or programs specifically designed for your car?",
    link: "/services/car-software-repair-programming"
  },
  {
    title: "Comfort System Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Comfort-System-Service_content.jpg",
    description: "Dubai is well known for its Luxury & comfortable rides and highly equipped cars that ensures comfort to the drivers.",
    link: "/services/comfort-system-repair"
  },
  {
    title: "Engine Control Unit Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-control-Unit-2.jpg",
    description: "Do you know, your car’s control unit ensures your safety and comfort?",
    link: "/services/engine-control-unit-repair"
  },
  {
    title: "Engine Cooling System Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-Coolent-System-content.jpg",
    description: "Did you know that engine overheating is one of the most common problems on the roads of Dubai?",
    link: "/services/engine-cooling-system-repair"
  },
  {
    title: "Engine Management System Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-Management-sytem_content.jpg",
    description: "Do you know that the engine management system is the most vital part of your car?",
    link: "/services/engine-management-system-repair"
  },
  {
    title: "Gearbox repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Gear-Box-Content.jpg",
    description: "Do you know that the gearbox is the second most essential part of the car?",
    link: "/services/gearbox-repair"
  },
  {
    title: "Pre-purchase inspection",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Pre-Incepection-Content.jpg",
    description: "Do you know that you can save a lot of money and secure your safety if you get a pre-owned car inspected before purchasing it?",
    link: "/services/pre-purchase-inspection"
  },
  {
    title: "Suspension Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Suspension-repair-content.jpg",
    description: "Do you know your car is completely useless if you are not able to control it? And from where the control comes?",
    link: "/services/suspension-repair"
  },
  {
    title: "Touchless wheel alignment",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Touchless-wheel-alighnment-Content.jpg",
    description: "Have you ever thought of a touchless wheel alignment system that can quickly measure your car wheel’s alignment",
    link: "/services/touchless-wheel-alignment"
  },
  {
    title: "Transmission Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Transmission-Repair-Content.jpg",
    description: "Do you know the transmission is one of the most neglected parts of the car?",
    link: "/services/transmission-repair"
  },
  {
    title: "Fleet Maintenance",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Fleet-maintenace-Content.jpg",
    description: "Do you know the transmission is one of the most neglected parts of the car?",
    link: "/services/fleet-maintenance"
  },
  {
    title: "Major Service",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/Major-service-Content-Image.jpg",
    description: "Major services is a full professional car service as per the manufacturer guidelines with the complete vehicle inspection with any needed repairs & replacements.",
    link: "/services/major-service"
  },
  {
    title: "Minor Service",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/Minor-Service-Content-Image.jpg",
    description: "Minor car services do not cost much but have a greater impact on your vehicle’s overall health and keep away major repairs.",
    link: "/services/minor-service"
  },
  {
    title: "Paint Protection film",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/PPF-Content-Image.jpg",
    description: "PPF installation is essential to cover your car’s exterior and safeguard the paint job.",
    link: "/services/paint-protection-film"
  },
  {
    title: "Brake Caliper Painting",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/Brake-Caliber-Content-Image.jpg",
    description: "Brake caliper painting makes your car look smart, fresh and prevents the calipers from rusting.",
    link: "/services/brake-caliper-painting"
  },
  {
    title: "Ceramic Coating",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/ceramic-Content-Image.jpg",
    description: "Ceramic coating ensures extreme protection to your car surface for scratches, dirt and chemical substances.",
    link: "/services/ceramic-coating"
  },
  {
    title: "Car dip color service",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/CAR-DIP-COLOR-SERVICE-Content-Image.jpg",
    description: "Quality dip color paint services when done with greater care provides a unique finish to your vehicle.",
    link: "/services/car-dip-color-service"
  },
  {
    title: "Car Tinting services",
    image: "https://swissauto.ae/wp-content/uploads/2022/10/car-tinting.jpg",
    description: "A car tinting service enhances the resale value of your vehicle and provides a flawless look.",
    link: "/services/car-tinting-services"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'PROFESSIONAL TEAM & TOOLS',
    description: 'Every technician is hired after assessing their expertise in car garage services. We employ the latest diagnostic equipment to ensure precise evaluations.'
  },
  {
    title: 'RELIABLE SERVICE @ REASONABLE PRICE',
    description: 'We offer the best car repair and maintenance services for all types of cars with clear pricing without any hidden costs.'
  },
  {
    title: 'DETAILED DIAGNOSIS',
    description: 'Our car repair shop services include a diagnosis of repairs with high precision. We ensure a thorough inspection of your car.'
  },
  {
    title: 'QUALITY SPARES',
    description: 'We use good quality spares, which not only extends the car\'s lifespan but also enhances its performance and value when sold.'
  },
  {
    title: 'EXCELLENT SERVICE',
    description: 'Focusing on providing top-notch services, ensuring customer satisfaction, surpassing their expectations, and making their visit pleasant.'
  },
  {
    title: 'QUICK SERVICE',
    description: 'During on-road emergencies, a search for a reliable auto repair shop can be stressful. We prioritize efficiency and speed.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How many branches does Royal Swiss Auto Services have?',
    answer: 'We have multiple branches across the UAE, including locations in Dubai (Al Quoz), Abu Dhabi, Sharjah, Al Ain, and Ras Al-Khaimah.'
  },
  {
    question: 'What services does cartenatex offer?',
    answer: 'We offer a comprehensive range of car maintenance and repair services including tire replacement, battery replacement, body shop repair, AC repair, oil changes, and more.'
  },
  {
    question: 'Does  cartenatex extend the car service ',
    answer: 'Yes, we are known for the best car .'
  },
  {
    question: 'Does  cartenatex offer only car repair services?',
    answer: 'At  cartenatex, you can avail professional car repair, maintenance & body shop services and also get affordable .'
  },
  {
    question: 'What makes  cartenatex unique?',
    answer: 'Our state-of-the-art facilities, expert technicians, dealership-quality equipment, and competitive pricing make us the preferred choice for  car owners.'
  }
];

export const BRANDS_DATA: BrandData[] = [
  {
    id: 'audi',
    name: 'Audi',
    image: 'https://imgd.aeplcdn.com/664x374/cw/ec/31252/Audi-A5-Right-Front-Three-Quarter-165509.jpg?wm=0&q=80',
    bannerImage: 'https://news-site-za.s3.af-south-1.amazonaws.com/images/2024/05/RS-e-tron-GT-1-scaled.jpg',
    title: ' Cartenatex – A TRUSTED AUDI SERVICE CENTER IN south africa',
    description: 'You and your Audi make a dream team together. Leave us in charge of making sure this team always stays together. We provide the care that you and your car deserve. At  cartenatex, we strongly believe in brand specialization because every car brand today requires specialized expertise and tools.',
    services: [
      'Audi Engine Repair',
      'Audi Gearbox Repair',
      'Audi Suspension Repair',
      'Audi Transmission Repair',
      'Audi Touchless Wheel Alignment',
      'Audi Engine Refurbishment',
      'Audi Software Programming',
      'Audi AC Repair',
      'Audi Engine Cooling System Repair',
      'Audi Brake Repair',
      'Audi Camera/Radar Calibration',
      'Audi Pre-Purchase Inspection'
    ],
    faqs: [
      { question: 'Why is there some noise coming from the front suspension in my Audi?', answer: 'This could be due to worn-out bushings or control arms. Our specialized diagnostic tools can pinpoint the exact cause.' },
      { question: 'Why does the petrol shut off automatically during the fueling in my Audi?', answer: 'This is often caused by a blockage in the EVAP system or a faulty vent valve.' },
      { question: 'What does it mean when the "transmission fault" signifies on my Audi dashboard?', answer: 'It indicates a potential issue with the gearbox sensors, fluid levels, or internal components requiring immediate attention.' },
      { question: 'At which kilometer is my Audi due for the major service?', answer: 'Major service is typically recommended every 30,000 to 40,000 km, but check your owner\'s manual for the specific model schedule.' }
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes',
    image: 'data:image/jpeg;base64,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',
    bannerImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1200',
    title: 'TRUSTED MERCEDES SERVICE CENTER – EXPERT MAINTENANCE & REPAIR',
    description: 'Surely, your Mercedes Benz reflects your finer taste in life. So what if it has some problems or needs care. Relax, we\'ve got your back. You don\'t just drive a car; you Drive a Legend. We endeavor to follow every recommended step to ensure you get dealer quality service.',
    services: [
      'Mercedes Engine Repair',
      'Mercedes Gearbox Repair',
      'Mercedes Suspension Repair',
      'Mercedes Transmission Repair',
      'Mercedes Touchless Wheel Alignment',
      'Mercedes Engine Refurbishment',
      'Mercedes Software Programming',
      'Mercedes AC Repair',
      'Mercedes Engine Cooling System Repair',
      'Mercedes Brake Repair',
      'Mercedes Camera/Radar Calibration',
      'Mercedes Pre-Purchase Inspection'
    ],
    faqs: [
      { question: 'How often should I service my Mercedes?', answer: 'Mercedes recommends service every 10,000 miles or 1 year, whichever comes first, alternating between Service A and Service B.' },
      { question: 'Do you use genuine Mercedes parts?', answer: 'Yes, we use OEM (Original Equipment Manufacturer) parts to ensure the longevity and performance of your vehicle.' },
      { question: 'Can you fix the Mercedes air suspension?', answer: 'Absolutely. We specialize in Airmatic suspension repairs and calibration.' },
      { question: 'What is included in Service A?', answer: 'Service A typically includes oil change, filter replacement, fluid checks, tire inflation check, and brake inspection.' }
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    image: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://gpmotorworks.co.za/wp-content/uploads/2020/03/BMW-M4-F33-front-view2-600w_rs.jpg',
    title: 'PREMIUM BMW SERVICE CENTER IN South africa',
    description: 'The Ultimate Driving Machine deserves the ultimate care. Our certified technicians understand the complex engineering of BMW vehicles. From routine maintenance to complex engine diagnostics, we ensure your BMW performs at its peak.',
    services: [
      'BMW Engine Repair',
      'BMW Gearbox Repair',
      'BMW Suspension Repair',
      'BMW Transmission Repair',
      'BMW Touchless Wheel Alignment',
      'BMW Engine Refurbishment',
      'BMW Software Programming',
      'BMW AC Repair',
      'BMW Cooling System Repair',
      'BMW Brake Repair',
      'BMW ECU Tuning',
      'BMW Battery Replacement'
    ],
    faqs: [
      { question: 'Why is my BMW overheating?', answer: 'Common causes include a failing water pump, thermostat issues, or coolant leaks. Immediate inspection is advised.' },
      { question: 'What is the difference between BMW Service Inclusive and standard service?', answer: 'Our packages offer comprehensive coverage similar to dealership standards but at more competitive rates.' },
      { question: 'Do you handle BMW oil leaks?', answer: 'Yes, oil leaks are common in older models (like the valve cover gasket), and we expertly repair them.' }
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    image: 'https://hermes.carsalesportal.co.za/storage/make/TOYOTA/C-HR/GGRoLpKcTITdZrUafKyacDD4fn6FrnBopi0J5l2W.webp',
    bannerImage: 'https://images.unsplash.com/photo-1582236166099-63798993f3c3?auto=format&fit=crop&q=80&w=1200',
    title: 'RELIABLE TOYOTA SERVICE & REPAIR IN South Africa',
    description: 'Toyota is synonymous with reliability. Keep it that way with our specialized maintenance services. Whether it\'s a Land Cruiser, Camry, or Corolla, our team ensures your vehicle remains road-ready and safe.',
    services: [
      'Toyota Engine Diagnostics',
      'Toyota Transmission Repair',
      'Toyota Brake Service',
      'Toyota Suspension Repair',
      'Toyota Oil Change',
      'Toyota AC Repair',
      'Toyota Battery Replacement',
      'Toyota Wheel Alignment',
      'Toyota Body Shop',
      'Toyota Electrical Repair'
    ],
    faqs: [
      { question: 'How often should I change the oil in my Toyota?', answer: 'Every 5,000 to 10,000 km, depending on the oil type (synthetic vs. conventional) and driving conditions.' },
      { question: 'Do you service Hybrid Toyotas?', answer: 'Yes, we have technicians trained in hybrid battery and system maintenance.' }
    ]
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    image: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_600,h_400,q_auto,c_fill,f_auto,fl_lossy/auto-client/d1c016ccfa146507138ad65a7b4f57ca/cfao_800x400_vw_polo.jpg',
    bannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12Lbv_L7yq2RJRIDowmviDf4n8HrT_y8XXQ&s',
    title: 'SPECIALIZED VOLKSWAGEN GARAGE IN South Africa',
    description: 'German engineering requires precision. We provide dealer-level service for your Golf, Passat, Tiguan, or Touareg using the latest diagnostic tools and genuine parts.',
    services: [
      'VW DSG Gearbox Repair',
      'VW Engine Repair',
      'VW Suspension Service',
      'VW Brake Repair',
      'VW AC Repair',
      'VW Timing Belt Replacement',
      'VW Electrical Diagnostics',
      'VW Cooling System Repair',
      'VW Oil Change',
      'VW Wheel Alignment'
    ],
    faqs: [
      { question: 'My VW is jerking when accelerating, what is it?', answer: 'This is a common sign of DSG transmission issues or mechatronic unit failure, which we specialize in repairing.' },
      { question: 'When should I replace the timing belt?', answer: 'Usually between 60,000 and 100,000 km. Failure to do so can cause severe engine damage.' }
    ]
  },
  {
    id: 'ford',
    name: 'Ford',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1582255776652-3d9200427329?auto=format&fit=crop&q=80&w=1200',
    title: 'EXPERT FORD REPAIR & MAINTENANCE',
    description: 'Built Tough. We ensure your Ford stays that way. From Mustangs to F-150s and Explorers, our technicians are well-versed in American automotive engineering.',
    services: [
      'Ford Engine Repair',
      'Ford Transmission Service',
      'Ford Brake Repair',
      'Ford Suspension Repair',
      'Ford AC Service',
      'Ford Electrical Diagnostics',
      'Ford Oil Change',
      'Ford Battery Replacement',
      'Ford Power Steering Repair',
      'Ford Exhaust System Repair'
    ],
    faqs: [
      { question: 'Why is my check engine light on?', answer: 'It could range from a loose gas cap to a catalytic converter issue. We perform full computer diagnostics to find out.' },
      { question: 'Do you work on Ford EcoBoost engines?', answer: 'Yes, we are experienced with the specific maintenance needs of EcoBoost turbo engines.' }
    ]
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    image: 'https://cdn.hyundai.co.za/i20_Executive_Thumbnail_png_1719910104New_webp_1720006912.webp',
    bannerImage: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=1200',
    title: 'CERTIFIED HYUNDAI SERVICE CENTER',
    description: 'Modern, efficient, and reliable. Your Hyundai needs regular care to maintain its efficiency. We offer comprehensive service packages for all Hyundai models.',
    services: [
      'Hyundai Engine Diagnostics',
      'Hyundai Transmission Repair',
      'Hyundai Brake Service',
      'Hyundai AC Repair',
      'Hyundai Suspension Repair',
      'Hyundai Oil & Filter Change',
      'Hyundai Electrical Repair',
      'Hyundai Battery Replacement',
      'Hyundai Wheel Alignment'
    ],
    faqs: [
      { question: 'How much does a Hyundai service cost?', answer: 'We offer competitive fixed-price servicing. Contact us for a quote based on your specific model.' },
      { question: 'Do you fix Hyundai AC issues?', answer: 'Yes, AC compressor and condenser issues are common in this region, and we fix them daily.' }
    ]
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    image: 'https://www.suzukiauto.co.za/hubfs/Swift%20Sport%20Thumbs-1.png',
    bannerImage: 'https://driverdigest.co.za/top-car-brands-in-south-africa/',
    title: 'TRUSTED SUZUKI SERVICE & REPAIR',
    description: 'Compact, reliable, and fun. Keep your Suzuki running smoothly with our expert maintenance services. We handle everything from the Swift to the Jimny.',
    services: [
      'Suzuki Engine Repair',
      'Suzuki Gearbox Repair',
      'Suzuki Brake Service',
      'Suzuki AC Repair',
      'Suzuki Suspension Service',
      'Suzuki Oil Change',
      'Suzuki Electrical Diagnostics',
      'Suzuki Clutch Replacement',
      'Suzuki Wheel Alignment'
    ],
    faqs: [
      { question: 'My Suzuki Jimny has a steering wobble, can you fix it?', answer: 'Yes, the "death wobble" is a known issue often related to kingpin bearings or steering dampers, which we can resolve.' },
      { question: 'Do you have parts for older Suzuki models?', answer: 'We source genuine and high-quality aftermarket parts for a wide range of models.' }
    ]
  }
];