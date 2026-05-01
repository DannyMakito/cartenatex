import { NavItem, ServiceItem, BenefitItem, FAQItem, DetailedServiceItem, BrandData, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Offers', href: '/#offers' },
  { label: 'Brands', href: '/brands' },
  { label: 'Services', href: '/services' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'xtool-1',
    name: 'N9EV',
    category: 'EV Diagnostic',
    price: 40063,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/N9EV-350x350.jpg',
    description: 'N9EV is a professional EV smart diagnostic system. Equipped with a 9.7-inch high-performance long-lasting tablet. The system supports Bluetooth communication, DoIP protocol, and CAN-FD protocol. N9EV supports most EV models in the market, and all the software including APP, diagnostic software, and operating system support online updates.',
    features: [
      'Full-System Diagnostic: Perform OE-Level diagnosis on all available systems',
      'Bi-Directional Control: Active tests on various components',
      '40+ Maintenance Functions: ABS Bleeding, Key Programming, etc.',
      'Tesla Battery Pack Detection & Diagnostics',
      'DoIP & CAN-FD Protocol Support'
    ],
    techSpecs: [
      'Operating System：Android 10',
      'Processor：Rock chip 4 Core 1.80GHz',
      'Display：9.7 inch capacitive touch screen with 1024×768P resolution',
      'Communication Method： BT 4.2 | WIFI 2.4/5G',
      'Connectivity：DB15 TO VAG | USB 3.0',
      'Camera： Rear camera, 8.0 Megapixel, AF with Flashlight',
      'Sensors： Gravity Accelerometer, Ambient Light Sensor',
      'Working Voltage：3.6 to 4.2V',
      'Working hours：12 hours',
      'Operating Temperature：-10 to 40℃',
      'Storage Temperature：-40 to 60℃',
      'Humidity：<90%'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'Tool Case',
      'Quick Guide',
      'P901 Tablet',
      'VCI BOX',
      'Charger DC 12V-3A',
      'Charger cable',
      'DB15 to OBD2-16 Main Cable',
      'USB3.0 To Type_B Main Cable',
      'USB3.0 Data Cable (Connect to PC)',
      'TESLA battery pack Adapter J1E04',
      'TESLA Adapter 1-L1E02',
      'TESLA Adapter 2-L1E03',
      'Universal jumper cables',
      'Universal jumper adapter cables',
      'Battery Clamp Wire',
      'Cigar Lighter Cable'
    ],
    reviewVideo: 'https://www.youtube.com/watch?v=H8SlOViHJyY',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/n9ev?Itemid=0'
  },
  {
    id: 'xtool-2',
    name: 'XT90',
    category: 'Advanced Diagnostic',
    price: 24198,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/xt90-350x350.jpg',
    description: 'XT90 is an advanced automotive diagnostic system featuring a large 9.7-inch screen and dual WIFI modules for stable data transfer between the tablet and VCI. It provides full-system automotive diagnostics, live data, Bi-directional control tests, ECU coding and programming.',
    features: [
      'Full-System Diagnostic: Perform OE-Level diagnosis on all available systems. Support ECU information, read and clear DTC, live data and freeze frame and special function under system menus',
      'Online & Offline Programming: Support Online Programming for Volkswagen, Audi, BMW, Mercedes-Benz and programmable module installation for Ford and Mazda',
      'Topology Mapping Supported: Provides a visual representation of the communication status of each system in the vehicle during automatic scanning.',
      '40+ Maintenance Functions: Include top popular maintenance functions, like ABS Bleeding, Key Programing, Injector Coding, Oil Reset, EPB, etc.'
    ],
    techSpecs: [
      'Operating System： Android 10',
      'Processor：4 Core 1.50GHz',
      'Memory：4G RAM, 128 ROM',
      'Display：9.7 inch capacitive touch screen with 1024×768P resolution',
      'Communication：WIFI',
      'Connectivity：WIFI 2.4/5 GHZ | USB 2.0',
      'Camera： Rear camera, 8.0 Megapixel, AF with Flashlight.',
      'Sensors： Gravity Accelerometer, Ambient Light Sensor',
      'Auto Input/Output： Microphone/ Speaker',
      'Working Voltage：3.6 to 4.2V',
      'Operating Temperature：-10 to 40℃',
      'Storage Temperature：-40 to 60℃',
      'Humidity：<90%',
      'Dimension (L×W×H)：313X218X30 mm',
      'Protocol compatibility： CANFD, DoIP'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Tool Case',
      'Desiccant',
      'Quick Start Guide',
      'XV100 Endoscope (Separate packaging)',
      'Tablet',
      'VCI Box',
      'USB To Type_B Main Cable',
      'Charger for Tablet',
      'Power Cable US',
      'Power Cable EU',
      'Power Cable UK',
      'Battery Cable',
      'Cigar Lighter Cable',
      'USB Data Cable (Connect to PC)',
      'HONDA-3', 'TOYOTA-17', 'BMW-20', 'KIA-20', 'MAZDA-17R', 'NISSAN-14', 'GM/DAEWOO-12', 'SUZUKI-3', 'FIAT-3', 'HYUNDAI/KIA-10', 'AUDI-4', 'MITSUBISHI-12+16', 'UNIVERSAL-3', 'CITROEN-2', 'BENZ-38', 'BENZ-14', 'OBD II-16', 'DB15 Main Cable'
    ],
    reviewVideo: 'https://www.youtube.com/watch?v=sDbdvvBiTmo',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/xt90?Itemid=0'
  },
  {
    id: 'xtool-3',
    name: 'XT80',
    category: 'Smart Diagnostic',
    price: 11690,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/xt80-350x350.jpg',
    description: 'XT80 is an automotive smart diagnostic system with 8 inches LCD display, which is designed for mechanics, electricians, and car maintenance shops. It supports full OBDII function and automotive diagnostics for full-system.',
    features: [
      'Bi-Directional Control: Receive information and send the commands to the system/components to perform active tests like EVAP Test, Fuel Pump Test, Fuel Injector Test, Cycling A/C Clutch On/Off, Cooling Fan Test, etc.',
      'Full-System Diagnostic: Perform OE-Level diagnosis on all available systems. Support ECU information, read and clear DTC, live data and freeze frame and special function under system menus',
      'Offline Programming Supported: Support programmable module installation for Ford, Lincoln and Mazda',
      '35+ Maintenance Functions: Include top popular maintenance functions, like ABS Bleeding, Key Programing, Injector Coding, Oil Reset, EPB, etc.'
    ],
    techSpecs: [
      'Operating System：Android 10',
      'Processor：4 Core 1.50GHz',
      'Memory：4G RAM, 64 ROM',
      'Display：8-inch capacitive touch screen with 1024×768P resolution',
      'Communication Method：Wired',
      'Connectivity：WIFI 2.4/5G | DB15 to VAG USB',
      'Camera：Rear camera, 8.0 Megapixel, AF with Flashlight',
      'Sensors：Gravity Accelerometer, Ambient Light Sensor',
      'Auto Input/Output：Microphone, Speaker',
      'Working Voltage：3.6 to 4.2V',
      'Operating Temperature：-10 to 40℃',
      'Storage Temperature：-40 to 60℃',
      'Humidity：<90%',
      'Dimension (L×W×H)：274.0×175.0×33.8 mm',
      'Protocol：CANFD, DOIP'
    ],
    packingList: [
      'Tool kit',
      'Certificate of Quality',
      'Packing List',
      'Quick Start Guide',
      'Carton',
      'XV100 Endoscope (Separate packaging)',
      'Power adapter',
      'US power cable',
      'EU power cable',
      'UK power cable',
      'P804 tablet',
      'USB cable',
      'OBDII-16 Adapter',
      'DB15 Main Cable'
    ],
    reviewVideo: '',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/xt80?Itemid=0'
  },
  {
    id: 'xtool-4',
    name: 'XT80W',
    category: 'Wireless Diagnostic',
    price: 12525,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/xt80w-350x350.jpg',
    description: 'XT80W is an automotive smart diagnostic system with 8 inches LCD display, featuring wireless VCI Connectivity in a Compact Scan Tool.',
    features: [
      'Bi-Directional Control: Receive information and send the commands to the system/components to perform active tests like EVAP Test, Fuel Pump Test, Fuel Injector Test, Cycling A/C Clutch On/Off, Cooling Fan Test, etc.',
      'Full-System Diagnostic: Perform OE-Level diagnosis on all available systems. Support ECU information, read and clear DTC, live data and freeze frame and special function under system menus',
      'Offline Programming Supported: Support programmable module installation for Ford, Lincoln and Mazda',
      '35+ Maintenance Functions: Include top popular maintenance functions, like ABS Bleeding, Key Programing, Injector Coding, Oil Reset, EPB, etc.'
    ],
    techSpecs: [
      'Operating System： Android 10',
      'Processor：4 Core 1.50GHz',
      'Memory：4G RAM, 64 ROM',
      'Display：8-inch capacitive touch screen with 1024×768P resolution',
      'Communication Method： Wired',
      'Connectivity：WIFI 2.4/5G | DB15 to VAG USB',
      'Camera：Rear camera, 8.0 Megapixel, AF with Flashlight',
      'Sensors： Gravity Accelerometer, Ambient Light Sensor',
      'Auto Input/Output： Microphone, Speaker',
      'Working Voltage：3.6 to 4.2V',
      'Operating Temperature：-10 to 40℃',
      'Storage Temperature：-40 to 60℃',
      'Humidity：<90%',
      'Dimension (L×W×H)：274.0×175.0×33.8 mm',
      'Protocol： CANFD, DOIP'
    ],
    packingList: [
      'Tool kit',
      'Certificate of Quality',
      'Packing List',
      'Quick Start Guide',
      'Carton',
      'XV100 Endoscope (Separate packaging)',
      'Power adapter',
      'US power cable',
      'EU power cable',
      'UK power cable',
      'P804 tablet',
      'USB cable',
      'OBDII-16 Adapter',
      'DB15 Main Cable'
    ],
    reviewVideo: '',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/xt80w?Itemid=0'
  },
  {
    id: 'xtool-5',
    name: 'XT70W',
    category: 'Wireless Diagnostic',
    price: 9502,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/xt70w-350x350.jpg',
    description: 'XT70W is an automotive smart diagnostic system with a 7-inch LCD display and Android 10 OS, designed for mechanics, electricians, and car maintenance shops.',
    features: [
      'Full OBD2 functions: Including DTC HELP, Read/Clear codes, Live data, Freeze rame, I/M Readiness, Read ECU information, On-Board Monitor Test, and Component Test',
      'Bi-Directional Control: Receive information and send the commands to the system/components to perform active tests like EVAP Test, Fuel Pump Test, Fuel Injector Test, Cycling A/C Clutch On/Off, Cooling Fan Test, etc.',
      'Full-System Diagnostic: Perform OE-Level diagnosis on all available systems. Support ECU information, read and clear DTC, live data, freeze frame and special function under system menus',
      '30+ Maintenance Functions: Include top popular maintenance functions, like ABS Bleeding, Injector Coding, Oil Reset, EPB, etc.'
    ],
    techSpecs: [
      'Operating System： Android 10',
      'Processor：Quad-core processor 1.5GHz',
      'Memory：2G RAM, 64 ROM',
      'Display：7.0-inch touch screen with 1024×600 resolution',
      'Communication Method：WIFI 2.4',
      'Connectivity：WIFI 2.4/5GHz | USB 2.0',
      'Sensors：Gravity Accelerometer, Ambient Light Sensor',
      'Auto Input/Output：Microphone, Speaker',
      'Working Voltage：9 to 18V',
      'Operating Temperature：-10 to 40℃',
      'Storage Temperature：-40 to 60℃',
      'Humidity：<90%',
      'Protocol compatibility：CANFD, DOIP'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'Tool Case',
      'Quick Start Guide',
      'P720 Tablet',
      'Charger for Tablet',
      'Charger US Adapter',
      'Charger EU Adapter',
      'Charger UK Adapter',
      'USB Cable'
    ],
    reviewVideo: 'https://www.youtube.com/watch?v=wyEu-hxWA2Y',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/xt70w?Itemid=0'
  },
  {
    id: 'xtool-6',
    name: 'XT70',
    category: 'Smart Diagnostic',
    price: 7348,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/xt70-350x350.jpg',
    description: 'XT70 is an automotive smart diagnostic system with a 7-inch LCD display and Android 10 OS. It supports diagnostics for full-system.',
    features: [
      'Full-System Diagnosis: Read/clear codes for all available systems',
      'Advanced Data Review: Display live data in text & graph for easy data review',
      'Data Export: Export the data streams over a certain period of time as CSV files',
      'Active Test: Support active test and special functions under system menu',
      'ABS Bleeding: Perform to bleed the brake system to restore ABS brake sensitivity',
      'DPF Regeneration: Clear Particulate Matter from the DPF filter through continuous combustion oxidation mode to stabilize filter performance',
      'Injector Coding: Write injector actual code or rewrite code in the ECU to the corresponding cylinder for accurate injection control',
      'Expandable: Compatible with Videoscope with optional purchase',
      'Modern Protocols: V113 wireless Wi-Fi vehicle communication interface supporting the latest communication protocols, including CANFD and DoIP'
    ],
    techSpecs: [
      'Operating System: Android 10',
      'Processor: 4 Core 1.50GHz Processor',
      'Memory: 2G RAM, 64G ROM',
      'Display: 7 inch 1024×600P',
      'Communication Method: Wired',
      'Connectivity: Type C USB 3.0',
      'Battery: 2500mAh 7.2V',
      'Auto Input Output: Microphone Speaker',
      'Working Voltage: 9 to 32V',
      'Operating Temperature: 0 to 40℃',
      'Storage Temperature: -10 to 50℃',
      'Humidity: less than 90 percent',
      'Compatible Protocol: CANFD, DOIP',
      'Dimension: 234.6 × 31.0 × 149.0 mm',
      'Camera: 8.0 Megapixel AF with Flashlight'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'Tool Case',
      'Quick Start Guide',
      'P720 Tablet',
      'USB Cable',
      'Charger for Tablet',
      'Charger US Adapter',
      'Charger UK Adapter',
      'Charger EU Adapter',
      'VGA to OBD II Main Cable'
    ],
    reviewVideo: '',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/xt70?Itemid=0'
  },
  {
    id: 'xtool-7',
    name: 'H6 PRO 3',
    category: 'Professional System',
    price: 30895,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/H6PRO3-350x350.png',
    description: 'Coverage includes U.S., European, Asian and Chinese electric, gas and diesel, and hybrid vehicles. Provides fault code guidance for VAG and BMW.',
    features: [
      'Top-Tier Performance: 10.1\' Touchscreen (1920 x 1200) powered by Android 10.0 and an Octa-core Processor (2.2GHz+1.8GHz)',
      'Advanced Memory: 8GB RAM + 128GB ROM for smooth multitasking and data storage',
      'Intelligent Diagnostics: Topology Module Mapping provides a color-coded all-system status screen for rapid fault identification',
      'Elite Programming: Supports Online coding & programming for VAG, BMW, and Mercedes-Benz; Offline programming for Ford, Lincoln, and Mazda',
      'Professional Service: Perform ADAS Systems Calibrations for cameras and radars (optional hardware required)',
      'Global Coverage: Supports U.S., European, Asian, and Chinese electric, gas, diesel, and hybrid vehicles',
      'Modern Protocols: Fully supports DoIP and CAN FD protocols for the latest vehicle communication',
      'Service Assurance: Includes 2YR Warranty & 3 YR Software Subscription'
    ],
    techSpecs: [
      'Operating System：Android 10.0',
      'Processor：2.2GHz+1.8GHz Octa-core Processor',
      'Memory：8G+128G',
      'Display：10.1-inch, 1920×1200P',
      'Camera：8.0 Megapixel, AF with Flashlight',
      'Auto Input/Output：Microphone, Speaker',
      'Dimension (L×W×H)：309.2×188.9×34.9 mm',
      'Communication Method：Wi-Fi, USB',
      'Connectivity：Type-C',
      'Working Voltage：9-36V',
      'Battery：6400 mAh, 7.2V',
      'Working Temperature：0 to 40℃',
      'Storage Temperature：-40 to 60℃',
      'Compatible Protocol：CANFD, DoIP'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'Tool Case',
      'Quick Start Guide',
      'Tablet',
      'VCI Box',
      'Type C to Type-A Data Cable',
      'Type C to Type-B Data Cable',
      'Type C to Type-C Charger Cable',
      'PD Supply Charging Adapter US',
      'Charging Adapter EU',
      'Charging Adapter UK',
      'Cigar Lighter Power Plug',
      'DB15 Main Cable',
      'OBD II-16',
      'HONDA-3', 'BMW-20', 'BENZ-14', 'BENZ-38', 'TOYOTA-17', 'MAZDA-17R', 'KIA-20', 'HYUNDAI/KIA-10', 'NISSAN-14', 'GM/DAEWOO-12', 'UNIVERSAL-3', 'SUZUKI-3', 'FIAT-3', 'CITROEN-2', 'AUDI-4', 'MITSUBISHI-12+16'
    ],
    reviewVideo: 'https://www.youtube.com/results?search_query=XTOOL+H6+Pro+3+Review',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/h6-pro-iii?Itemid=0'
  },
  {
    id: 'xtool-8',
    name: 'Prodigy',
    category: 'Flagship System',
    price: 69305,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/Prodigy%20main-350x350.png',
    description: 'Prodigy is a high-performance automotive diagnostic tool featuring a 13.3-inch touchscreen, Android 10.0, and advanced communication protocols (DoIP/CAN FD). Designed for electric, gasoline, and hybrid vehicles across global markets, it offers fast diagnostics, 50+ reset and relearn functions, ADAS calibration, and seamless ECU programming. With topology mapping and enhanced diagnostic reports, Prodigy ensures precise and efficient troubleshooting for professionals.',
    features: [
      'Industry Partnership: XTOOL\'s first device offering access to an online informatics database in partnership with Autodata',
      'Supreme Display: 13.3" HD Display (1920 × 1080) with high-performance Android 10.0 system',
      'Ultimate Processing: 2.2GHz + 1.8GHz Octa-core processor with 8GB RAM and a massive 256GB ROM',
      'Uninterrupted Diagnostics: Dual Wi-Fi modules for simultaneous internet and VCI connection, allowing reliable DoIP programming up to 10 meters wireless',
      'Tesla Expert: Perform comprehensive diagnostics on Tesla vehicles with full data access and a range of specialized functions',
      'OEM-Level Connectivity: SAE J2534 compatibility for direct OEM software connection and online coding/programming for VAG, BMW, and Mercedes-Benz',
      'Advanced Reporting: Provides enhanced PreSCAN and PostSCAN diagnostic reports with AutoAuth™ integration for FCA SGW access',
      'Service Depth: Topology module mapping, ADAS system calibration, and a 3-year software subscription included'
    ],
    techSpecs: [
      'Operating System：Android 10.0',
      'VCI Communication：Wi-Fi/Wired',
      'Processor：2.2GHz+1.8GHz Octa-core Processor',
      'Ports：USB （Type-C）',
      'Memory：256G',
      'Display：13.3-inch, 1920×1080',
      'Battery：9600 mAh, 7.2V',
      'Camera：13MP rear',
      'Working Temperature：0 to 40℃',
      'Compatible Protocol：UDS, KWP2000, K_Line/L_Line, CAN/CANFD, DoIP, SAE J1939, SAE J1708, SAE J1587, SAE J1850, etc.'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'Tool Case',
      'Quick Start Guide',
      'Tablet',
      'VCI Box',
      'Wireless Charging Dock',
      'Power Supply (5V 3A)',
      'Data Cable (Type-C to Type-C)',
      'Data Cable (Type-C to Type-B)',
      'Adapter (Type-C to Type-A)',
      'Main Cable (DB15 to OBD-II)',
      'PD-12V Power Cable (Type-C to DC)',
      'Cigar Lighter Cable',
      'BENZ-14', 'BENZ-38', 'BMW-20', 'CITROEN-2', 'FIAT-3', 'GM/DAEWOO-12', 'HONDA-3', 'KIA-20', 'KIA/HYUNDAI-10', 'MAZDA-17', 'MITSUBISHI/HYUNDAI-12+16', 'NISSAN-14', 'SUZUKI-3', 'TOYOTA-17', 'UNIVERSAL-3', 'VW/AUDI-2+2'
    ],
    reviewVideo: 'https://www.youtube.com/watch?v=eLrtHdvyOyA',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/prodigy?Itemid=0'
  },
  {
    id: 'xtool-9',
    name: 'Compass',
    category: 'Flagship System',
    price: 31730,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/Compass%20main-350x350.png',
    description: 'COMPASS is your ultimate diagnostic companion, designed for efficiency and precision. Featuring a crystal-clear 10.1" display and powerful performance.',
    features: [
      'Informatics Partnership: Offers access to an online informatics database in partnership with Autodata',
      'High-Resolution Display: 10.1-inch display (1920 x 1200) running on a high-performance Android 10.0 system',
      'Powerful Performance: Octa-core processor (2.2GHz + 1.8GHz) with 8GB RAM and 128GB internal storage',
      'Simultaneous Connectivity: Dual Wi-Fi connectivity allows simultaneous connections to the internet and the VCI',
      'Advanced Communication: Supports all standard diagnostic protocols along with DoIP and CANFD for modern vehicle communication',
      'Elite Programming: Supports offline programming for Ford, Lincoln, and Mazda, plus online coding/programming for VAG, BMW, and Mercedes-Benz',
      'Specialized Access: Tesla Diagnostics available with full data access, and fully integrated with AutoAuth™ for FCA SGW access',
      'Professional Toolkit: Includes topology module mapping, ADAS system calibrations, and a 3-year software subscription'
    ],
    techSpecs: [
      'Operating System：Android 10.0',
      'VCI Communication：Wi-Fi/Wired',
      'Processor：2.2GHz+1.8GHz Octa-core Processor',
      'Ports：USB （Type-C）',
      'Memory：128G',
      'Display：10.1-inch, 1920×1200',
      'Battery：6400 mAh, 7.2V',
      'Camera：8MP rear',
      'Working Temperature：0 to 40℃',
      'Compatible Protocol：UDS, KWP2000, K_Line/L_Line, CAN/CANFD, DoIP, SAE J1939, SAE J1708, SAE J1587, SAE J1850, etc.'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'Tool Case',
      'Quick Guide',
      'Tablet',
      'VCI Box',
      'Power Supply (PD)',
      'Charging Adapter (EU)',
      'Charging Adapter (UK)',
      'PD-12V Power Cable (Type-C to DC)',
      'Data Cable (Type-C To Type-C)',
      'Adapter (Type-C to Type-A)',
      'CITROEN-2', 'VW/AUDI-2+2', 'MITSUBISHI/HYUNDAI-12+16', 'UNIVERSAL-3', 'BENZ-14', 'BENZ-38', 'BMW-20', 'GM/DAEWOO-12', 'HONDA-3', 'TOYOTA-17', 'NISSAN-14', 'KIA-20', 'HYUNDAI/KIA-10', 'MAZDA-17', 'SUZUKI-3', 'FIAT-3'
    ],
    reviewVideo: 'https://www.youtube.com/watch?v=foPtJb1R4d4',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/compass?Itemid=0'
  },
  {
    id: 'xtool-10',
    name: 'Compass Master',
    category: 'Flagship System',
    price: 33400,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/Compass%20main-350x350.png',
    description: 'COMPASS MASTER (includes J2534 support) is your ultimate diagnostic companion. It enables OEM software connectivity for advanced diagnostics and programming.',
    features: [
      'Standard J2534 Support: Includes SAE J2534 compatibility by default for full OEM software connectivity',
      'Informatics Partnership: Offers access to an online informatics database in partnership with Autodata',
      'Elite Performance: 10.1-inch HD display (1920 x 1200) with a powerful 2.2GHz+1.8GHz Octa-core processor',
      'Advanced Memory: 8GB RAM and 128GB internal storage for heavy diagnostic workflows',
      'Tesla Diagnostics Available: Perform comprehensive diagnostics on Tesla vehicles with full data access',
      'Elite Programming: Supports online coding/programming for VAG, BMW, and Mercedes-Benz, plus offline programming for Ford and Mazda',
      'Secure Access: Fully integrated with AutoAuth™ for seamless FCA Secure Gateway (SGW) access',
      'Complete Reporting: Generates enhanced PreSCAN and PostSCAN documentation with a 3-year software subscription'
    ],
    techSpecs: [
      'Operating System：Android 10.0',
      'VCI Communication：Wi-Fi/Wired',
      'Processor：2.2GHz+1.8GHz Octa-core Processor',
      'Ports：USB （Type-C）',
      'Memory：128G',
      'Display：10.1-inch, 1920×1200',
      'Battery：6400 mAh, 7.2V',
      'Camera：8MP rear',
      'Working Temperature：0 to 40℃',
      'Compatible Protocol：UDS, KWP2000, K_Line/L_Line, CAN/CANFD, DoIP, SAE J1939, SAE J1708, SAE J1587, SAE J1850, etc.'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'Tool Case',
      'Quick Guide',
      'Tablet',
      'VCI Box',
      'SAE J2534 Interface',
      'Power Supply (PD)',
      'Charging Adapter (EU)',
      'Charging Adapter (UK)',
      'PD-12V Power Cable (Type-C to DC)',
      'Data Cable (Type-C To Type-C)',
      'Adapter (Type-C to Type-A)',
      'CITROEN-2', 'VW/AUDI-2+2', 'MITSUBISHI/HYUNDAI-12+16', 'UNIVERSAL-3', 'BENZ-14', 'BENZ-38', 'BMW-20', 'GM/DAEWOO-12', 'HONDA-3', 'TOYOTA-17', 'NISSAN-14', 'KIA-20', 'HYUNDAI/KIA-10', 'MAZDA-17', 'SUZUKI-3', 'FIAT-3'
    ],
    reviewVideo: 'https://www.youtube.com/watch?v=foPtJb1R4d4',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/compass-master?Itemid=0'
  },
  {
    id: 'xtool-11',
    name: 'D9HD',
    category: 'Heavy Duty',
    price: 31713,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/D9HD%201-350x350.png',
    description: 'D9HD is an automotive smart diagnostic system designed for passenger cars, commercial vehicles, and heavy-duty trucks.It supports full-system diagnostics for passenger cars, commercial vehicles, and heavy-duty trucks, including reading ECU version information, reading fault codes, live data, freeze frames and bi-directional control test. 42 common special functions, such as throttle matching, ABS bleed, maintenance light reset, EPB test, SAS, BMS, injector coding, DPF regeneration, and TPMS reset are supported. Under the system menu, you can also explore a wealth of special functions. 98% vehicle coverage, work on more than 85 brands, 10000 cars.',
    features: [
      'Full System Diagnostics for Passenger Cars, Commercial Vehicles, and Heavy-Duty Trucks',
      'Advanced Live Data & Freeze Frame Analysis',
      'Bi-directional Control Testing Capabilities',
      'Supports over 42 Common Special Functions',
      'Comprehensive Reset and Relearn Functions',
      'Extensive Vehicle Coverage: Works on more than 85 brands and 10,000+ vehicles',
      'High-Resolution Display and Fast Processing Speed'
    ],
    techSpecs: [
      'Operating System：Android 10',
      'Processor：Rock chip 4 Core 1.80GHz',
      'Memory：2G RAM, 128 ROM (202207 version)',
      'Display：9.7 inch capacitive touch screen with 1024×768P resolution',
      'Communication Method：BT 4.2 | WIFI 2.4/5G',
      'Connectivity：DB15 TO VAG | USB 3.0',
      'Camera：Rear camera, 8.0 Megapixel, AF with Flashlight',
      'Sensors：Gravity Accelerometer, Ambient Light Sensor',
      'Auto Input/Output：Microphone, Dual Speakers, 4-Band 3.5 mm stereo/standard headset jack',
      'Battery：10000mAh, 3.7V lithium-polymer battery',
      'Working Voltage：3.6 to 4.2V',
      'Power Voltage：DC 12V',
      'Working hours：12 hours',
      'Operating Temperature：-10 to 40℃',
      'Storage Temperature：-40 to 60℃',
      'Humidity：<90%'
    ],
    packingList: [
      'Color Carton',
      'Quick Start Guide',
      'Packing List',
      'Certificate of Quality',
      'Tool Case',
      'Desiccant',
      'Tablet',
      'VCI Box',
      'USB3.0 Data Cable (Connect to PC)',
      'Charger for Tablet',
      'Power Cable US',
      'Power Cable UK',
      'Power Cable EU',
      'DB15 Main Cable',
      'DB15 to USB3.0 Main Cable',
      'Battery Clamp Cable',
      'Cigar Lighter Cable',
      'Jumper',
      'Jumper Adapter',
      'OBD-R16', 'ECONTROLS-4', 'WOODWARD-3', 'ISUZU-3', 'ISUZU-20', 'YUCHAI-4', 'DENSO-12', 'CUMMINS-16', 'CUMMINS-9', 'HITACHI-4', 'HITACHI-6', 'CAT-9', 'VOLVO-8', 'OBD II-16', 'HONDA-3', 'BMW-20', 'BENZ-14', 'BENZ-38', 'TOYOTA-17', 'MAZDA-17R', 'KIA-20', 'HYUNDAI/KIA-10', 'NISSAN-14', 'GM/DAEWOO-12', 'UNIVERSAL-3', 'SUZUKI-3', 'FIAT-3', 'CITROEN-2', 'AUDI-4', 'MITSUBISHI-12+16'
    ],
    reviewVideo: '',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/d9hd?Itemid=0'
  },
  {
    id: 'xtool-12',
    name: 'HD Guru',
    category: 'Heavy Duty',
    price: 6680,
    image: 'https://www.scantooldepot.com/media/com_eshop/products/resized/HD%20GURU%20Main-350x350.png',
    description: 'HDGURU is XTOOLs first entry-level heavy-duty vehicle diagnostic tool, featuring a streamlined Linux system and a 5.45-inch display, ideal for small fleet mechanics. It supports comprehensive Cummins ECU and HD OBD2 generic diagnostics, offering code scanning and clearing, live data monitoring, and detailed ECU information. With over 60 bi-directional tests, 35+ Cummins Dedicated functions, and advanced feature and parameter programming across 45+ applications, HDGURU delivers professional-grade diagnostics in a compact, easy-to-use device.',
    features: [
      'Fleet Specialist: First entry-level heavy-duty diagnostic device from XTOOL, perfect for small fleet mechanics and mobile technicians',
      'Cummins Mastery: Built-in 35+ dedicated Cummins special functions and support for a wide range of Cummins ECUs',
      'Precision Control: Offers 60+ bi-directional tests for component control and 45+ feature/parameter modification functions',
      'Heavy-Duty Generic: Includes HD OBD-II generic diagnostics with MIL status checks and PID reading',
      'Compact & Rugged: 5.45-inch display with a user-friendly Linux system designed for professional portability',
      'Real-time Analysis: Displays real-time live data and freeze frame analysis for efficient troubleshooting',
      'Modern Hardware: Equipped with brand-new hardware and a streamlined user interface for high-speed stability'
    ],
    techSpecs: [
      'Operating System：Linux',
      'Communication Method：Wired',
      'Processor：Dual core Cortex-A7@1.2GHz',
      'Connectivity：Type-C',
      'Storage：32G',
      'Working Voltage：9-36V',
      'Display：5.45-inch, 1440×1440px',
      'Battery：3150mAh, 3.6V',
      'Compatible Protocol：All common protocols',
      'Working Temperature：0 to 40℃',
      'Storage Temperature：-20 to 60℃'
    ],
    packingList: [
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'Quick Start Guide',
      'Tablet',
      'USB Type-C Main Cable',
      'Cummins 6+9 Adapter',
      'VGA to OBDII-16 Main Cable'
    ],
    reviewVideo: '',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/hd-guru?Itemid=0'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Mechanical Services',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKY7NPeHhWq74BBZuMvYKTdtJogl5SDSjkQ&s',
    items: ['Axle/ Driveshaft Repair', 'Brake and clutch Repair', 'Gearbox Repair', 'Suspension Repair', 'Transmission Repair']
  },
  {
    title: 'Electrical Services',
    image: 'https://eroadworthygeelong.com.au/wp-content/uploads/2024/06/Auto-Electrical-Services-01.jpg',
    items: ['AC Repair', 'Comfort System Repair','Fault-finding','charging systems']
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
    items: ['Car Service Packages', 'Service & Warranty Packages']
  },
  {
    title: 'Extended Warranty',
    image: 'https://plus.unsplash.com/premium_photo-1661932729990-ac67192d26bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    items: ['New Cars Warranty Packages', 'Pre-Owned Cars Warranty Packages', 'Cars Warranty Packages']
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
    title: "Brake and clutch Repair",
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
    description: "South africa is well known for its comfortable rides and highly equipped cars that ensures comfort to the drivers.",
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
    question: 'How many days does cartenatex opperate ?',
    answer: 'We opperate 6 days a week.'
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
    answer: 'Our state-of-the-art facilities, expert technicians, dealership-quality equipment, and competitive pricing make us the preferred choice for car owners.'
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
