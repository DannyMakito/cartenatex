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
    image: 'public/images/xtool.webp',
    description: 'The XTOOL D8 is a professional automotive diagnostic tool with ECU coding, bi-directional control, OE-level full system diagnostics, and 38+ service functions.',
    features: ['ECU Coding', 'Bi-Directional Control', '38+ Service Functions', '3-Year Free Updates']
  },
  {
    id: '2',
    name: 'XTool MK808S',
    category: 'Tablet Scanner',
    price: 11850,
    image: 'https://gtsupplies.co.za/cdn/shop/files/GT-CRP919-1_600x.png?v=1710154359',
    description: 'Autel MaxiCOM MK808S is an advanced tablet scan tool based on the Android operating system. It consists of the MaxiCOM MK808S and the MaxiVCI Mini.',
    features: ['Android 11 OS', 'Full System Diagnostics', '28+ Service Functions', 'Injector Coding']
  },
  {
    id: '3',
    name: 'XTOOL IP900 ',
    category: 'Heavy Duty',
    price: 14200,
    image: 'public/images/xtool3.jpg',
    description: 'XTOOL IP900 V+ is a 10.1-inch advanced automotive diagnostic tool with heavy-duty module compatibility.',
    features: ['Active Test', 'ECU Coding', 'Key Programming', 'Wireless Bluetooth']
  },
  {
    id: '4',
    name: 'XTOOL Anyscan A30M',
    category: 'Handheld',
    price: 1200,
    image: 'public/images/xtool2.webp',
    description: 'Empower yourself with dealership level data. The XTOOL Anyscan A30M provides special bidirectional control functions.',
    features: ['RepairSolutions2 App', 'Live Data', 'Smog Check', 'ABS/SRS Support']
  },
  {
    id: '5',
    name: 'XTOOL Pro2',
    category: 'Bluetooth Scanner',
    price: 1600,
    image: 'public/images/xtool_pro2.webp',
    description: 'Wireless diagnostics at its best. The XTOOL Pro2 offers lifetime free updates and full system diagnostics.',
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
    image: 'https://eroadworthygeelong.com.au/wp-content/uploads/2024/06/Auto-Electrical-Services-01.jpg',
    items: ['AC Repair', 'Comfort System Repair']
  },
  {
    title: 'Diagnostics toool',
    image: 'https://th.bing.com/th/id/OIP.yJFYmsrWH2RUZ74Q4_-Q2gHaEo?w=315&h=196&c=7&r=0&o=7&pid=1.7&rm=3',
    items: ['smart scanner ', 'heavey duty/ hand held']
  },
  {
    title: 'Engine Repair Services',
    image: 'https://th.bing.com/th/id/R.4bf8de62ea3700e181111f81375b92db?rik=3BjzA3z%2b%2bvtFYQ&riu=http%3a%2f%2fwww.cometoyouautorepairs.com%2fwp-content%2fuploads%2f2020%2f03%2fengine-repair-mechanic.jpg&ehk=vJwxndrwM61zcslES1PYGMGnvKn9kD84Hf0UZOJ%2fDUw%3d&risl=&pid=ImgRaw&r=0',
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
    image: 'https://www.mercedes-benz.co.za/content/dam/hq/passengercars/cars/amg-gt/amg-gt-63-s-e-performance-c192/overview/equipment/03-2024/images/mercedes-amg-gt-63-se-perf-c192-equipment-exterior-carbon-package-764x573-03-2024.jpg/1740019818779.jpg?im=Crop,rect=(0,0,764,573);Resize=(512,384)',
    bannerImage:'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtle9tsd2HVcUfpr6XGEundJ0lVohOB2sBObApvnRI5uL5qQC3ak1kzNITum7jQGohKVP09%25vqeIkyLRsSyYaxCX8rH1qM%25n8wRQfoiZeIQM6oY2ul7ZkzNU%25Nm7jscWhKVzYt%25vqEwLyLRaGmYaxH08rH18BRn8wiz2oiZ4kIM4FgRrTg735wrcldu637fzm9P9Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVDFjH6icWf4NfCQR=&BKGND=9&IMGT=W27&POV=BE040&width=820&uni=c&crop=100,186,1820,942&im=Trim%2Cfuzz%3D0.3%2Cpadding%3D9',
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