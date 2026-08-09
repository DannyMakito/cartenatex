import { NavItem, ServiceItem, BenefitItem, FAQItem, ServiceDetailData, BrandData, Product } from './types';

type XtoolSeed = {
  id: string;
  name: string;
  category: Product['category'];
  slug: string;
};

const xtoolImageUrl = (slug: string) => `https://en.xtooltech.com/uploads/images/${slug}.webp`;

const xtoolDescription = (name: string, category: string) =>
  `Official XTOOL ${name} from the ${category} range.`;

const xtoolFeatures = (name: string, category: string) => [
  `Official XTOOL ${name}`,
  `Listed under ${category} in the official XTOOL catalog`,
  'Manual verification of image and media URLs recommended'
];

const XTOOL_MISSING_PRIMARY_IMAGES: Record<string, string> = {
  'v1000': 'https://www.xtooltech.com/uploads/image/20260721/V1000_1_20260721180225.jpg',
  'at02': 'https://www.xtooltech.com/uploads/image/20260724/AT02_20260724110909.jpg',
  'a30x': 'https://www.xtooltech.com/uploads/images/obd2-code-reader-a30x-manufacturers_1763459723.webp',
  'a80': 'https://www.xtooltech.com/uploads/images/A80-0.webp',
  'ip616-2024': 'https://www.xtooltech.com/uploads/images/ip616-2024.webp',
  'ip819-2024': 'https://www.xtooltech.com/uploads/images/ip819-2024.webp',
  'ip900': 'https://www.xtooltech.com/uploads/images/ip900-2026041901.webp',
  'ip900-bt': 'https://www.xtooltech.com/uploads/images/IP900-BT.webp',
  'ip900s': 'https://www.xtooltech.com/uploads/images/ip900s-2026041901.webp',
  'ip919-max': 'https://www.xtooltech.com/uploads/images/IP919-MAX.webp',
  'ip919-pro': 'https://www.xtooltech.com/uploads/images/IP919-PRO.webp',
  'ip919': 'https://www.xtooltech.com/uploads/images/ip919-2026041901.webp',
  'ip500-djc': 'https://www.xtooltech.com/uploads/images/ip500-djc-202604190160441.webp',
  'ip500-bmr': 'https://www.xtooltech.com/uploads/images/IP500-BMR-0.webp',
  'ip500-bcc': 'https://www.xtooltech.com/uploads/images/IP500-BCC-0.webp',
  'ip500-tls': 'https://www.xtooltech.com/uploads/images/IP500-TLS-0.webp',
  'ip819tp': 'https://www.xtooltech.com/uploads/images/d9ev-2026041901.webp',
  'ip508': 'https://www.xtooltech.com/uploads/images/online-product-ip508-2026041901.webp',
  'ip508s': 'https://www.xtooltech.com/uploads/images/online-product-ip508s-2026041901.webp',
  'ip608': 'https://www.xtooltech.com/uploads/images/online-product-ip608-2026041901.webp',
  'd9s': 'https://www.xtooltech.com/uploads/images/d9s-0.webp',
  'd9ev': 'https://www.xtooltech.com/uploads/images/d9ev-2026041902-1.webp',
  'd9s-pro': 'https://www.xtooltech.com/uploads/images/d9spro.webp',
  'd9-max': 'https://www.xtooltech.com/uploads/images/d9max.webp',
  'd8-2026': 'https://www.xtooltech.com/uploads/images/D8-0.webp',
  'd8bt-2026': 'https://www.xtooltech.com/uploads/images/D8BT2026-0.webp',
  'd8s': 'https://www.xtooltech.com/uploads/images/D8S-00.webp',
  'd8w': 'https://www.xtooltech.com/uploads/images/D8W-00.webp',
  'd7': 'https://www.xtooltech.com/uploads/images/diagnostic-tools-d7-00.webp',
  'd7bt-2025': 'https://www.xtooltech.com/uploads/images/d7bt-2025-0.webp',
  'd7s': 'https://www.xtooltech.com/uploads/images/D7S-00.webp',
  'd7w': 'https://www.xtooltech.com/uploads/images/diagnostic-tools-d7w-00.webp',
  'd7x-2026': 'https://www.xtooltech.com/uploads/images/D7X-0.webp',
  'd6': 'https://www.xtooltech.com/uploads/images/diagnostic-tools-d5-00.webp',
  'd6s': 'https://www.xtooltech.com/uploads/images/diagnostic-tools-d5-00.webp',
  'd5': 'https://www.xtooltech.com/uploads/images/diagnostic-tools-d5-00.webp',
  'd5s': 'https://www.xtooltech.com/uploads/images/diagnostic-tools-d5-00.webp',
  'a30': 'https://www.xtooltech.com/uploads/images/A30-00.webp',
  'a30d': 'https://www.xtooltech.com/uploads/images/diagnostic-tools-a30-00.webp',
  'ad20': 'https://www.xtooltech.com/uploads/images/diagnostic-tools-ad20-00.webp',
  'ad20-pro': 'https://www.xtooltech.com/uploads/images/obd2-code-reader-ad20pro_1763459539.webp',
  'a80pro': 'https://www.xtooltech.com/uploads/images/A80Pro-0.webp',
  'a80pro-master': 'https://www.xtooltech.com/uploads/images/A80Pro-0.webp',
  'ps701pro': 'https://www.xtooltech.com/uploads/images/PS701pro-0.webp',
  'tp580': 'https://www.xtooltech.com/uploads/images/tp580.webp',
  'tp500': 'https://www.xtooltech.com/uploads/images/tp500.webp',
  'tp380': 'https://www.xtooltech.com/uploads/images/tp380.webp',
  'tp300': 'https://www.xtooltech.com/uploads/images/tp300.webp',
  'tp150': 'https://www.xtooltech.com/uploads/images/tp300.webp',
  'ts100': 'https://www.xtooltech.com/uploads/images/TS100-000.webp',
  'ts100pro': 'https://www.xtooltech.com/uploads/images/TS100-000.webp',
  'ik618-2024': 'https://www.xtooltech.com/uploads/images/IK618-2024.webp',
  'x100pro2': 'https://www.xtooltech.com/uploads/images/X100PRO2-0.webp',
  'x100pad3-2024': 'https://www.xtooltech.com/uploads/images/X100PAD3-2024-0.webp',
  'x100-pads': 'https://www.xtooltech.com/uploads/images/X100-PADS-00.webp',
  'x100max': 'https://www.xtooltech.com/uploads/image/20260725/key-programmers-x100max.webp',
  'x100max-2': 'https://www.xtooltech.com/uploads/image/20260725/key-programmers-x100max2.webp'
};

const XTOOL_MISSING_SEEDS: XtoolSeed[] = [
  { id: 'xtool-100', name: 'V1000', category: 'EV Diagnostic', slug: 'v1000' },
  { id: 'xtool-101', name: 'AT02', category: 'EV Diagnostic', slug: 'at02' },
  { id: 'xtool-102', name: 'A30X', category: 'OBD2 Code Reader', slug: 'a30x' },
  { id: 'xtool-103', name: 'A80', category: 'Key Programmer', slug: 'a80' },
  { id: 'xtool-104', name: 'IP616 (2024)', category: 'Key Programmer', slug: 'ip616-2024' },
  { id: 'xtool-105', name: 'IP819 (2024)', category: 'Key Programmer', slug: 'ip819-2024' },
  { id: 'xtool-106', name: 'IP900', category: 'Key Programmer', slug: 'ip900' },
  { id: 'xtool-107', name: 'IP900 BT', category: 'Key Programmer', slug: 'ip900-bt' },
  { id: 'xtool-108', name: 'IP900S', category: 'Key Programmer', slug: 'ip900s' },
  { id: 'xtool-109', name: 'IP919 MAX', category: 'Key Programmer', slug: 'ip919-max' },
  { id: 'xtool-110', name: 'IP919 Pro', category: 'Key Programmer', slug: 'ip919-pro' },
  { id: 'xtool-111', name: 'IP919', category: 'Key Programmer', slug: 'ip919' },
  { id: 'xtool-112', name: 'IP500 DJC', category: 'Key Programmer', slug: 'ip500-djc' },
  { id: 'xtool-113', name: 'IP500 BMR', category: 'Key Programmer', slug: 'ip500-bmr' },
  { id: 'xtool-114', name: 'IP500-BCC', category: 'Key Programmer', slug: 'ip500-bcc' },
  { id: 'xtool-115', name: 'IP500-TLS', category: 'Key Programmer', slug: 'ip500-tls' },
  { id: 'xtool-116', name: 'IP819TP', category: 'TPMS Tools', slug: 'ip819tp' },
  { id: 'xtool-117', name: 'IP508', category: 'Key Programmer', slug: 'ip508' },
  { id: 'xtool-118', name: 'IP508S', category: 'Key Programmer', slug: 'ip508s' },
  { id: 'xtool-119', name: 'IP608', category: 'Key Programmer', slug: 'ip608' },
  { id: 'xtool-120', name: 'D9S', category: 'Diagnostic Tools', slug: 'd9s' },
  { id: 'xtool-121', name: 'D9EV', category: 'EV Diagnostic', slug: 'd9ev' },
  { id: 'xtool-122', name: 'D9S Pro', category: 'Diagnostic Tools', slug: 'd9s-pro' },
  { id: 'xtool-123', name: 'D9 MAX', category: 'Diagnostic Tools', slug: 'd9-max' },
  { id: 'xtool-124', name: 'D8(2026)', category: 'Diagnostic Tools', slug: 'd8-2026' },
  { id: 'xtool-125', name: 'D8BT(2026)', category: 'Diagnostic Tools', slug: 'd8bt-2026' },
  { id: 'xtool-126', name: 'D8S', category: 'Diagnostic Tools', slug: 'd8s' },
  { id: 'xtool-127', name: 'D8W', category: 'Diagnostic Tools', slug: 'd8w' },
  { id: 'xtool-128', name: 'D7', category: 'Diagnostic Tools', slug: 'd7' },
  { id: 'xtool-129', name: 'D7BT (2025)', category: 'Diagnostic Tools', slug: 'd7bt-2025' },
  { id: 'xtool-130', name: 'D7S', category: 'Diagnostic Tools', slug: 'd7s' },
  { id: 'xtool-131', name: 'D7W', category: 'Diagnostic Tools', slug: 'd7w' },
  { id: 'xtool-132', name: 'D7X(2026)', category: 'Diagnostic Tools', slug: 'd7x-2026' },
  { id: 'xtool-133', name: 'D6', category: 'Diagnostic Tools', slug: 'd6' },
  { id: 'xtool-134', name: 'D6S', category: 'Diagnostic Tools', slug: 'd6s' },
  { id: 'xtool-135', name: 'D5', category: 'Diagnostic Tools', slug: 'd5' },
  { id: 'xtool-136', name: 'D5S', category: 'Diagnostic Tools', slug: 'd5s' },
  { id: 'xtool-137', name: 'A30', category: 'Diagnostic Tools', slug: 'a30' },
  { id: 'xtool-138', name: 'A30D', category: 'Diagnostic Tools', slug: 'a30d' },
  { id: 'xtool-139', name: 'AD20', category: 'OBD2 Code Reader', slug: 'ad20' },
  { id: 'xtool-140', name: 'AD20 Pro', category: 'OBD2 Code Reader', slug: 'ad20-pro' },
  { id: 'xtool-141', name: 'A80Pro', category: 'Key Programmer', slug: 'a80pro' },
  { id: 'xtool-142', name: 'A80Pro MASTER', category: 'Key Programmer', slug: 'a80pro-master' },
  { id: 'xtool-143', name: 'PS701pro', category: 'Key Programmer', slug: 'ps701pro' },
  { id: 'xtool-144', name: 'TP580', category: 'TPMS Tools', slug: 'tp580' },
  { id: 'xtool-145', name: 'TP500', category: 'TPMS Tools', slug: 'tp500' },
  { id: 'xtool-146', name: 'TP380', category: 'TPMS Tools', slug: 'tp380' },
  { id: 'xtool-147', name: 'TP300', category: 'TPMS Tools', slug: 'tp300' },
  { id: 'xtool-148', name: 'TP150', category: 'TPMS Tools', slug: 'tp150' },
  { id: 'xtool-149', name: 'TS100', category: 'TPMS Tools', slug: 'ts100' },
  { id: 'xtool-150', name: 'TS100 Pro', category: 'TPMS Tools', slug: 'ts100pro' },
  { id: 'xtool-151', name: 'IK618 (2024)', category: 'Key Programmer', slug: 'ik618-2024' },
  { id: 'xtool-152', name: 'X100PRO2', category: 'Key Programmer', slug: 'x100pro2' },
  { id: 'xtool-153', name: 'X100PAD3 (2024)', category: 'Key Programmer', slug: 'x100pad3-2024' },
  { id: 'xtool-154', name: 'X100PADS', category: 'Key Programmer', slug: 'x100-pads' },
  { id: 'xtool-155', name: 'X100MAX', category: 'Key Programmer', slug: 'x100max' },
  { id: 'xtool-156', name: 'X100MAX 2', category: 'Key Programmer', slug: 'x100max-2' }
];

const XTOOL_MISSING_PRODUCTS: Product[] = XTOOL_MISSING_SEEDS.map((item) => {
  const image = XTOOL_MISSING_PRIMARY_IMAGES[item.slug] ?? xtoolImageUrl(item.slug);

  return {
    id: item.id,
    name: item.name,
    category: item.category,
    price: 0,
    image,
    gallery: [image],
    description: xtoolDescription(item.name, item.category),
    features: xtoolFeatures(item.name, item.category),
    packingList: [],
    techSpecs: [],
    reviewVideo: '',
    detailLink: `https://www.xtooltech.com/products/${item.slug}/`
  };
});

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
    name: 'D9HD',
    category: 'Diesel Diagnostic',
    price: 40063,
    image: 'https://en.xtooltech.com/uploads/images/diesel-diagnostic-tool-d9hd-bulk.webp',
    description: 'D9HD is the ultimate dual-use diagnostic tablet for both 12V cars and 24V heavy-duty trucks, ideal for workshops, service centers, and mobile technicians. Running Android 10, it boasts a 9.7″ HD touchscreen, a quad-core 1.8 GHz CPU, 2GB RAM, and 128GB storage, paired with a 10,000 mAh battery and 8MP rear camera. It delivers full-system diagnostics, online/offline ECU coding, topology mapping, bi-directional controls, key programming, and over 40+ special service functions. Enjoy 3 years of free software updates and extensive coverage spanning 10,000+ models—professional-grade, yet truly portable.',
   
    features: [
        'Compatible with both 12V cars and 24V heavy-duty trucks, covering multiple vehicle types',
        'Android 10 OS with quad-core 1.8 GHz CPU ensures smooth and responsive operation',
        'Topology mapping visually presents module network structures for faster diagnostics',
        'Supports online/offline ECU coding and PMI module installation for new ECUs',
        'Bi-directional control enables remote activation of windows, pumps, motors, and other components',
        'Includes 40+ common maintenance functions, such as EPB, DPF, TPMS, and throttle matching',
        'The product from XTOOL official supports Pre/Post scan reports and brand-customizable output for professional service',
        'Three years of free software updates and coverage of 10,000+ models ensure long-term value'
    ],
    techSpecs: [
        'Processor: Quad-core or process 1.5GHz',
        'OS: Android 10',
        'Storage (RAM+ROM): 2+128G',
        'Display: 9.7\'\' 1024*768',
        'Camera (rear): 8MP',
        'Connectivity: USB Type-C',
        'Battery (mAh): 6400, 7.2V',
        'WiFi: WiFi 2.4/5 Ghz',
        'Bluetooth: BLE 5.0',
        'Working Temp.: 0~40°℃',
        'Storage Temp.: -10~50℃',
        'Vehicle Volt.: 9~36V',
        'Communication Method: WiFi, USB',
        'Free Update: 2 YEARS',
        'Warranty: 2 YEARS',
        'FCA SGW License: Support (2018 and later)',
        'Compatible Protocols: CAN FD, DoIP'
    ],
    packingList: [
        'Accessories: Color Carton, Quick Start Guide, Packing List, Certificate of Quality, Tool Case, Desiccant',
        'Main Units: Tablet, VCI Box, USB3.0 Data Cable (Connect to PC), Charger for Tablet, Power Cable US, Power Cable EU, Power Cable UK',
        'Test Connectors: DB15 Main Cable, DB15 to USB3.0 Main Cable, Battery Clamp Cable, Cigar Lighter Cable, Jumper, Jumper Adapter, OBD-R16, ECONTROLS-4, WOODWARD-3, ISUZU-3, ISUZU-20, YUCHAI-4, DENSO-12, CUMMINS-16, CUMMINS-9, HITACHI-4, HITACHI-6, CAT-9, VOLVO-8, OBD II-16, HONDA-3, BMW-20, BENZ-14, BENZ-38, TOYOTA-17, MAZDA-17R, KIA-20, HYUNDAI/KIA-10, NISSAN-14, GM/DAEWOO-12, UNIVERSAL-3, SUZUKI-3, FIAT-3, CITROEN-2, AUDI-4, MITSUBISHI-12+16'
    ],
    reviewVideo: '',
    detailLink: 'https://www.scantooldepot.com/component/eshop/xtool/n9ev?Itemid=0'
  },
  {
    id: 'xtool-2',
    name: 'XT90',
    category: 'Gasoline Diagnostic',
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
    reviewVideo: 'https://www.xtooltech.com/videos/unboxing-showing-features-explained-of-automotive-diagnostic-tool-xt90-xtool.html',
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-xt90/'
  },
  {
    id: 'xtool-3',
    name: 'XT80',
    category: 'Gasoline Diagnostic',
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
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-xt80/'
  },
  {
    id: 'xtool-4',
    name: 'XT80W',
    category: 'Gasoline Diagnostic',
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
    reviewVideo: 'https://www.xtooltech.com/videos/car-diagnosis-xt80w-unboxing-video-with-functions-introduction.html',
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-xt80w/'
  },
  {
    id: 'xtool-5',
    name: 'XT70W',
    category: 'Gasoline Diagnostic',
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
    reviewVideo: 'https://www.xtooltech.com/videos/xt70w-unboxing-overview-xtool-automotive-diagnostic-tool.html',
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-xt70w/'
  },
  {
    id: 'xtool-6',
    name: 'XT70',
    category: 'Gasoline Diagnostic',
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
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-xt70/'
  },
  {
    id: 'xtool-7',
    name: 'H6 PRO 3',
    category: 'Gasoline Diagnostic',
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
    reviewVideo: 'https://www.xtooltech.com/videos/unboxing-h6pro3-xtool-gasoline-car-diagnosis-tablet-tool.html',
    detailLink: 'https://www2.xtooltech.com/US/ProductsView/H6P3.html'
  },
  {
    id: 'xtool-8',
    name: 'Prodigy',
    category: 'Gasoline Diagnostic',
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
    reviewVideo: 'https://www.xtooltech.com/videos/xtool-prodigy-launch-2025-latest-ultra-large-smart-diagnostic-tool.html',
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-prodigy/'
  },
  {
    id: 'xtool-9',
    name: 'Compass',
    category: 'Gasoline Diagnostic',
    price: 31730,
    image: 'https://www.xtooltech.com/uploads/images/auto-compass.webp',
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
    reviewVideo: 'https://www.xtooltech.com/videos/introduce-compass-compass-master-the-guide-has-awakened.html',
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-compass-compass-master/'
  },
  {
    id: 'xtool-10',
    name: 'Compass Master',
    category: 'Gasoline Diagnostic',
    price: 33400,
    image: 'https://www.xtooltech.com/uploads/images/auto-compass.webp',
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
    reviewVideo: 'https://www.xtooltech.com/videos/compass-compass-master-unboxing-first-look-whats-inside-the-box.html',
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-usa-compass-compass-master/'
  },
  {
    id: 'xtool-11',
    name: 'D9HD',
    category: 'Diesel Diagnostic',
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
    reviewVideo: 'https://www.xtooltech.com/videos/xtool-adas-calibration-system-unboxing-video.html',
    detailLink: 'https://www.xtooltech.com/products/diesel-diagnostic-tool-d9hd/'
  },
  {
    id: 'xtool-15',
    name: 'N9EV 2',
    category: 'EV Diagnostic',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/n9ev-2-bulk.webp',
    description: 'N9EV 2 is XTOOL’s advanced EV diagnostic tool built for BEV, PHEV, and EREV platforms. It supports full-system diagnosis, battery pack detection, BMS data recovery, off-vehicle component testing, topology mapping, and continuous online upgrades for modern new energy vehicle repair.',
    features: [
      'Full NEV coverage for BEV, PHEV, and EREV models',
      'Battery pack detection and BMS data recovery',
      'Off-vehicle testing for key EV components',
      'Topology mapping for clearer diagnostic visibility',
      'Continuous online upgrades for evolving EV platforms'
    ],
    techSpecs: [
      'Tablet Model: P902',
      'Processor: Quad core 1.5GHz',
      'OS: Android 10.0',
      'Storage (RAM+ROM): 8+128G',
      'Display: 9.7 inch 1024*768',
      'Connectivity: USB Type-C',
      'Battery: 6400 mAh, 7.2V',
      'WiFi: Y',
      'Bluetooth: Y',
      'Working Temp.: 0~40℃',
      'Storage Temp.: -10~50℃',
      'Vehicle Volt.: 9~36V',
      'Communication Method: Wi-Fi, USB',
      'Free Update: 3 YEARS',
      'Warranty: 2 YEARS',
      'Compatible Protocol: CAN FD, DoIP'
    ],
    packingList: [
      'Carton',
      'Tool Case',
      'Packing List',
      'Certificate of Quality',
      'Quick Start Guide',
      'Tablet',
      'VCI Box',
      'Power Supply (PD)',
      'Charging Adapter (EU)',
      'Charging Adapter (UK)',
      'Data Cable (Type-C to Type-C)',
      'Adapter (Type-C to Type-A)',
      'Data Cable (Type-C to Type-B)',
      'PD-12V Power Cable (Type-C to DC)',
      'Cigar Lighter Cable',
      'X₂PROG Programmer',
      'M605 PCBA',
      'XTA004 Cable',
      'Charging Dock'
    ],
    reviewVideo: 'https://www.xtooltech.com/videos/that%27s-two-scan-tools-for-the-price-of-one-xtool-n9ev-scan-tool-unbox-review.html',
    detailLink: 'https://www.xtooltech.com/products/n9ev-2/'
  },
  {
    id: 'xtool-16',
    name: 'E2S',
    category: 'EV Diagnostic',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/ev-diagnostic-tools-e2-s-bulk.webp',
    description: 'The XTOOL E2S is a professional, all-in-one diagnostic platform specifically engineered to meet the needs of modern electric vehicle (EV), hybrid, and traditional internal combustion engine workshops. It provides deep diagnostics for EVs, including battery pack health (SOC/SOH), cell voltage and temperature monitoring, and fault detection across over 4,000 vehicle models.',
    features: [
      'Specialized EV Diagnostics: Beyond standard OBD2 functions, provides deep diagnostics for EVs including battery pack health.',
      'Component Testing: Supports off-vehicle testing for critical high-voltage components such as DC-DC converters, On-Board Chargers (OBC), and compressors.',
      'Advanced Maintenance: Includes 42+ special maintenance functions like BMS resets, injector coding, EPB, ABS bleeding.',
      'Technical Support Resources: Features an extensive library of over 1,600 high-definition battery pack wiring diagrams.',
      'Modern Connectivity: Supports advanced communication protocols including CAN FD and DoIP.'
    ],
    techSpecs: [
      'Operating System: Android 10.0',
      'Display: 10.1-inch IPS Touchscreen (1920x1200 resolution)',
      'Processor: 8-Core (up to 2.2 GHz)',
      'Memory: 8GB RAM + 128GB Storage',
      'Battery: 6400 mAh, 7.2V',
      'Camera: 8.0 Megapixel',
      'Connectivity: Dual-band Wi-Fi, USB Type-C',
      'Dimensions: 311 x 190 x 41 mm'
    ],
    packingList: [],
    reviewVideo: 'https://youtu.be/Z4qAbF6ngm8?si=AU3isRFiBGdHBxdX',
    detailLink: 'https://www.xtooltech.com/products/ev-diagnostic-tools-e2s/'
  },
  {
    id: 'xtool-17',
    name: 'E2 Pro',
    category: 'EV Diagnostic',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/ev-diagnostic-tools-e2-pro-bulk.webp',
    description: 'The XTOOL E2 Pro is an advanced, professional-grade diagnostic platform specifically engineered for electric, hybrid, and range-extended vehicles (BEV, PHEV, REEV), while also maintaining support for traditional gasoline and diesel vehicles. Offers dedicated diagnostic coverage for new energy vehicles, including real-time monitoring of high-voltage systems.',
    features: [
      'EV & Hybrid Specialization: Dedicated diagnostic coverage for new energy vehicles.',
      'Battery Management System (BMS) Support: Includes functions for battery pack analysis and BMS data recovery/repair.',
      'OEM-Level Capabilities: Specialized support for premium brands like Tesla, Mercedes-Benz, and BMW.',
      'Off-Vehicle Component Testing: Allows independent testing of critical components like DCDC converters, onboard chargers, compressors.',
      'Gateway Simulation: Gateway simulation to maintain communication between modules during diagnostics.',
      'Comprehensive Maintenance: Supports over 45–55+ maintenance functions.'
    ],
    techSpecs: [
      'Operating System: Android 10.0',
      'Display: 10.1" IPS Touchscreen (1920×1200 resolution)',
      'Processor: 4-Core 1.80 GHz / 8-core',
      'Memory: 8GB RAM + 256GB Storage',
      'Battery: 6480mAh / 7.2V',
      'Camera: 8.0 Megapixel (Rear)',
      'Connectivity: Dual Wi-Fi (2.4GHz/5.0GHz), USB Type-C',
      'Protocols: CANFD, DoIP',
      'Dimensions: 311 × 190 × 41 mm'
    ],
    packingList: [],
    reviewVideo: 'https://www.xtooltech.com/videos/power-up-your-ev-diagnostics-with-xtool-e2pro.html',
    detailLink: 'https://www.xtooltech.com/products/ev-diagnostic-tools-e2-pro/'
  },
  {
    id: 'xtool-18',
    name: 'XT50 (2026)',
    category: 'Gasoline Diagnostic',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/gasoline-diagnostic-tools-xt50-bulk.webp',
    description: 'The XTOOL XT50 is a compact, Linux-based smart diagnostic tool designed for individual car owners and small repair workshops. It is a portable, reliable, and high-performance device that supports comprehensive vehicle diagnostics, full-system diagnostics, and over 25+ maintenance functions.',
    features: [
      'Full-System Diagnostics: Complete system access, including reading ECU information, fault codes, live data.',
      'Maintenance Functions: Equipped with 25+ common special functions including ABS Bleeding, Injector Coding, TPMS Reset.',
      'Bi-Directional Control: Enables active tests to interact with vehicle components.',
      'Vehicle Coverage: Supports over 85 brands and 10,000+ vehicle models.',
      'Smart Features: Includes AutoScan, OBD Health Check, and support for CAN FD and FCA AutoAuth.'
    ],
    techSpecs: [
      'Operating System: Linux',
      'Display: 5.45-inch touch screen',
      'Processor: Dual-core Cortex-A7 @ 1.2GHz',
      'Storage: 64GB',
      'Battery: 3150mAh, 3.6V',
      'Connectivity: Wired (Type-C)',
      'Operating Temperature: 0~40℃'
    ],
    packingList: [],
    reviewVideo: 'https://www.xtooltech.com/videos/introducing-xt50-the-portable-smart-diagnostic-tool-from-xtool.html',
    detailLink: 'https://www.xtooltech.com/products/gasoline-diagnostic-tools-xt50/'
  },
  {
    id: 'xtool-19',
    name: 'XPortal',
    category: 'J2534',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/j2534-xportal-bulk.webp',
    description: 'The XTOOL XPortal is a professional-grade J2534 Pass-Thru VCI (Vehicle Communication Interface) device designed to bridge the gap between diagnostic tools and vehicle manufacturer (OEM) software for precise ECU programming and coding.',
    features: [
      'OEM Compatibility: Enables access to official diagnostic and programming software from over 10–15 major vehicle manufacturers.',
      'Dual Connectivity: Supports both wired (USB Type-C) and wireless (2.4 GHz Wi-Fi) communication.',
      'Wide Protocol Support: Fully compatible with modern and legacy vehicle communication protocols including DoIP, CAN-FD, Dual-CAN.',
      'System Versatility: Compatible with both 12V (gasoline) and 24V (diesel) vehicle systems.',
      'User-Friendly: Streamlined driver installation process and a portable form factor.'
    ],
    techSpecs: [
      'Processor: NXP Processor',
      'Communication: Wi-Fi (2.4 GHz) / Wired (USB Type-C)',
      'Operating System: Windows 7 or later',
      'Working Voltage: 9V – 36V',
      'Display: 0.97-inch Monochrome Display',
      'Wireless Range: Over 10 meters',
      'Working Temp: 0°C to 40°C'
    ],
    packingList: [],
    reviewVideo: '',
    detailLink: 'https://www.xtooltech.com/products/auto-diagnostic-tools-J2534-pass-thru-device-xportal/'
  },
  {
    id: 'xtool-20',
    name: 'BEC2440',
    category: 'EV Diagnostic',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/bec2440-battery-balancer-xtool_1782272310.webp',
    description: 'The XTOOL BEC2440 is a professional-grade lithium battery charge-discharge balancer designed for the maintenance and repair of electric vehicle (EV) and hybrid battery modules.',
    features: [
      'High-Efficiency Balancing: Supports up to 20A for both charging and discharging.',
      'Broad Compatibility: Compatible with various lithium battery chemistries, including NCM and LiFePO₄.',
      'Precision Maintenance: Offers high-precision voltage sampling (±1mV) and internal resistance testing (0.5% accuracy).',
      'Multi-Channel Operation: Features 24-channel simultaneous balancing.',
      'Comprehensive Protection: Multiple safety features, including reverse polarity, overvoltage, overcurrent protection.',
      'User-Friendly Interface: High-definition touchscreen LCD display.'
    ],
    techSpecs: [
      'Input Voltage: AC 220V ±15%, 50Hz',
      'Charging Current: 0.1 – 15A',
      'Discharging Current: 0.1 – 20A',
      'Balancing Voltage: 2V – 4.2V (adjustable)',
      'Voltage Sampling Accuracy: ±0.10% FS (or ±1mV)',
      'Device Weight: 13 kg',
      'Device Size: 490.75 x 314 x 341.5 mm',
      'Operating Temperature: -10°C to 40°C',
      'Power Consumption: <100W'
    ],
    packingList: [],
    reviewVideo: '',
    detailLink: 'https://www.xtooltech.com/products/bec2440-battery-balancer/'
  },
  {
    id: 'xtool-21',
    name: 'HDGURU',
    category: 'Diesel Diagnostic',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/diesel-diagnostic-tool-hdguru-bulk.webp',
    description: 'HDGURU is XTOOL’s entry-level heavy-duty diagnostic tool for small fleet mechanics. It supports Cummins ECU diagnostics, heavy-duty OBD-II functions, live data, code clearing, and more than 60 bi-directional tests.',
    features: [
      'Entry-level heavy-duty diagnostic device',
      'Linux-based 5.45-inch screen',
      'Supports Cummins ECU diagnostics',
      'Heavy-duty OBD-II scanning and live data',
      '60+ bi-directional tests for workshop use'
    ],
    techSpecs: [
      'Processor: Quad-core Cortex-A7@1.2GHz',
      'OS: Linux',
      'Storage (RAM+ROM): 128MB+64G support TFCard',
      'Display: 5.45-inch 720*1440',
      'Connectivity: USB Type-C VGA',
      'Battery: 3150, 3.6V',
      'WiFi: WiFi 2.4 Ghz',
      'Working Temp.: 0~40℃',
      'Storage Temp.: -10~50℃',
      'Vehicle Volt.: 9~36V',
      'Communication Method: Wired',
      'Free Update: Lifetime',
      'Warranty: 2 YEARS',
      'Compatible Protocols: CAN FD'
    ],
    packingList: [
      'Tablet',
      'USB Type-C Main Cable',
      'Cummins 6+9 Adapter',
      'VGA to OBDII-16 Main Cable',
      'Color Carton',
      'Packing List',
      'Certificate of Quality',
      'User Manual'
    ],
    detailLink: 'https://www.xtooltech.com/products/diesel-diagnostic-tool-hdguru-usa/'
  },
  {
    id: 'xtool-13',
    name: 'OBD2 Code Reader – AD20 Pro',
    category: 'OBD2 Code Reader',
    price: 0,
    image: 'https://en.xtooltech.com/uploads/images/obd2-code-reader-ad20pro-bulk.webp',
    description: 'Advancer AD20 Pro is a smart OBD dongle that connects via Bluetooth to your smartphone for full-system diagnostics and maintenance light reset. It can read and clear fault codes on U.S., Asian, European, and Chinese vehicles from 1996 onwards, perform smog checks, vehicle deep checks, live data viewing, and battery health checks. The tool enables trip and fuel consumption recording, features integrated driving behavior monitoring, and offers free downloadable brand-specific software—empowering both diagnostics and driver skill improvement.',
    features: [
      'Utilizes Bluetooth connection to your smartphone for a wireless diagnostic experience',
      'Reads and clears full-system fault codes from 1996+ vehicles across multiple regions',
      'Offers maintenance light reset and smog check functionality',
      'Includes live data viewing and battery health monitoring',
      'Supports trip tracking and fuel consumption recording',
      'Incorporates driving behavior monitoring to help improve driving skills',
      'The XTOOL code reader provides free downloadable, brand-specific software with no extra cost',
      'Compact and lightweight design—ideal for portable diagnostics'
    ],
    techSpecs: [
      'Processor：ARM Cortex-M4',
      'Wireless：BLE 5.0',
      'Communication Method：Bluetooth',
      'Working Voltage：9-16V',
      'Working Current：100mA @ 12V',
      'Sleeping Current：100mA @ 12V',
      'Working Temperature：-20 to 60℃',
      'Weight：~40g'
    ]
  },
  {
    id: 'xtool-14',
    name: 'A30M OBD2 Code Reader',
    category: 'OBD2 Code Reader',
    price: 0,
    image: 'https://en.xtooltech.com/uploads/images/obd2-code-reader-a30m-bulk.webp',
    description: 'XTOOL Anyscan A30M is a compact wireless OBD2 scanner designed for DIY enthusiasts and professional technicians, compatible with iOS and Android platforms. Our XTOOL A30 m provides full-system diagnostics, bi-directional control, and over 26 maintenance service functions, including oil reset, EPB, TPMS, ABS bleeding, and more. The newly added FCA AutoAuth feature supports 2018 and newer models of Jeep, Dodge, Chrysler, Porsche, Maserati, and Fiat, bypassing security restrictions for smooth diagnostics and full functionality.',
    features: [
      'Supports both iOS and Android platforms for broad compatibility',
      'Provides full-system diagnostics covering engine, transmission, ABS, SRS, and more',
      'Equipped with bi-directional control for active tests like fuel pump, injector, and A/C clutch',
      'Offers over 26 maintenance service functions, including oil reset, EPB, TPMS, ABS bleeding, etc.',
      'FCA AutoAuth supports 2018 and newer specified models for smooth diagnostics',
      'Auto VIN recognition enables quick vehicle identification',
      'The OBD2 XTOOL code reader is compact and lightweight, easy to carry and use',
      'Simple and intuitive operation for both professional technicians and DIY enthusiast'
    ],
    techSpecs: [
      'Processor：STM32',
      'Display：1\'\'',
      'Connectivity：OBD',
      'Battery (mAh)：100',
      'Bluetooth：BLE 5.2',
      'Working Temp.：0~40°℃',
      'Storage Temp.：-10~50℃',
      'Vehicle Volt.：9~36V',
      'Free Update：Lifetime',
      'Warranty：2 YEARS',
      'Compatible Protocol：CAN FD'
    ],
    reviewVideo: 'https://www.xtooltech.com/videos/master-xtool-a30-anyscan-app-a-complete-how-to-guide.html',
    detailLink: 'https://www.xtooltech.com/products/obd2-code-reader-a30m/'
  },
  {
    id: 'xtool-72',
    name: 'X₂PROG SERIES',
    category: 'Key Programmer',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/xtool-key-programmers-x2prog-series-1.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/xtool-key-programmers-x2prog-series-1.webp'],
    description: 'The X₂PROG SERIES is XTOOL’s professional ECU and key programming platform for chip-level reading, writing, cloning, and backup workflows.',
    features: [
      'Supports EEPROM and MCU reading/writing for chip-level programming tasks',
      'Enables ECU data modification, repair, and backup workflows',
      'Supports BOOT, BENCH, and OBD connection methods for flexible use',
      'Built for professional technicians handling ECU repair and key programming'
    ],
    techSpecs: [
      'Base module: X₂Prog Module ECU Programmer',
      'Expansion modules: X₂AEP, X₂CANBox, X₂TPU, X₂MBIR',
      'Power input: 5V 1A USB / 12V 1A DC',
      'Ports: USB Type-C, Port A (48PIN), Port B (32PIN), Port C (DB26)'
    ],
    packingList: [
      'X₂Prog Module ECU Programmer',
      'X₂AEP Advanced EEPROM Programmer',
      'X₂CANBox CAN Communication Interface',
      'X₂TPU Transponder Precoding Unit',
      'X₂MBIR IR Key Precoding Unit'
    ],
    reviewVideo: '',
    detailLink: 'https://www.xtooltech.com/products/key-programmers-x2prog-series/',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-73',
    name: 'X100PAD ELITE2 (2026)',
    category: 'Key Programmer',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/key-programmers-x100pad-elite2_1760945800.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/key-programmers-x100pad-elite2_1760945800.webp'],
    description: 'X100PAD Elite 2 is a professional tablet key programmer for technicians and locksmiths, supporting key programming, immobilizer work, and post-programming diagnostics.',
    features: [
      'Supports add-key and all-keys-lost programming modes',
      'Reads and modifies immobilizer data and can retrieve PIN codes',
      'Registers ECU, BCM, and dashboard modules when replacements are needed',
      'Includes diagnostic functions to clear fault codes after programming',
      'Offers 40+ maintenance functions for workshop use'
    ],
    techSpecs: [
      'Operating system: Android 10',
      'Processor: Quad-core 1.5GHz',
      'Memory: 4GB RAM, 64GB ROM',
      'Display: 8-inch 1024x768 touchscreen',
      'Connectivity: USB Type-C, VGA, WiFi 2.4/5GHz',
      'Battery: 5000mAh'
    ],
    packingList: [
      'Tablet',
      'VCI box',
      'Power supply and adapters',
      'Cables and connectors',
      'Tool case'
    ],
    reviewVideo: '',
    detailLink: 'https://www.xtooltech.com/products/key-programmers-x100pad-elite2/',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-74',
    name: 'X100PADS EV',
    category: 'Key Programmer',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/image/20260630/X100PADS_EV_1_20260630144320.jpg',
    gallery: ['https://www.xtooltech.com/uploads/image/20260630/X100PADS_EV_1_20260630144320.jpg'],
    description: 'X100PADS EV delivers anti-theft matching for new energy vehicles and gasoline cars, combining key programming, immobilizer work, and practical diagnostic service functions in one device.',
    features: [
      'Supports EV and gasoline anti-theft matching',
      'Covers leading EV brands such as BYD, Li Auto, Leapmotor, NIO, Avatr, and XPeng',
      'Handles VIN coding, immobilizer matching, and engine ECU matching',
      'Supports key matching across a wide range of vehicles',
      'Adds practical service functions such as maintenance reset and battery matching'
    ],
    reviewVideo: '',
    detailLink: 'https://www.xtooltech.com/products/x100pads-ev-key-programmer/',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-75',
    name: 'InPlus IK618E',
    category: 'Key Programmer',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/key-programmers-inplus-ik618e_1763349226.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/key-programmers-inplus-ik618e_1763349226.webp'],
    description: 'InPlus IK618E is a compact automotive key programmer that combines key programming, diagnostics, and special functions for locksmith and workshop use.',
    features: [
      'Supports key programming for add-key and all-keys-lost situations',
      'Provides OBD and bench workflow support',
      'Includes diagnostic functions for reading and clearing fault codes',
      'Offers 30+ maintenance and special functions for workshop use'
    ],
    techSpecs: [
      'Operating system: Android 10',
      'Processor: Quad-core 1.5GHz',
      'Memory: 2GB RAM, 64GB ROM',
      'Display: 7-inch 1024x600 touchscreen',
      'Connectivity: USB Type-C, VGA',
      'Battery: 2500mAh'
    ],
    reviewVideo: '',
    detailLink: 'https://www2.xtooltech.com/english/ProductsView/IK618E.html',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-76',
    name: 'KC501',
    category: 'Key Programmer',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/key-programmers-kc501_1760945740.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/key-programmers-kc501_1760945740.webp'],
    description: 'KC501 is a multi-function key and chip programmer for automotive professionals, supporting EEPROM, MCU, and Mercedes-Benz infrared key operations with compatible XTOOL tablets.',
    features: [
      'Reads and writes MCU data',
      'Reads and writes EEPROM chips',
      'Supports XTOOL tablet-based key programming workflows',
      'Specialized for Mercedes-Benz infrared key programming'
    ],
    techSpecs: [
      'Display: 320 x 480 TFT color screen',
      'Working voltage: 9V - 18V',
      'Working temperature: -10C to 60C',
      'Storage temperature: -20C to 60C',
      'Weight: 0.32 kg'
    ],
    reviewVideo: '',
    detailLink: 'https://www.xtooltech.com/products/key-programmers-kc501/',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-77',
    name: 'AnyToyo SK1',
    category: 'Key Programmer',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/key-programmers-anytoyo-sk1_1760945981.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/key-programmers-anytoyo-sk1_1760945981.webp'],
    description: 'AnyToyo SK1 is a Toyota smart key emulator and signal collector for add-key and all-keys-lost workflows on supported Toyota and Lexus vehicles.',
    features: [
      'Supports both Add Key and All Keys Lost workflows',
      'Collects immobilizer data via OBD for smart key work',
      'Allows emergency start when no key is available',
      'Connects via USB 3.0 for fast and stable communication'
    ],
    techSpecs: [
      'Port: USB 3.0',
      'Frequency: 315/433MHz RF and 125KHz LF'
    ],
    reviewVideo: '',
    detailLink: 'https://www.xtooltech.com/products/key-programmers-anytoyo-sk1/',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-78',
    name: 'InPlus IP819TP',
    category: 'TPMS Tools',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/tpms-diagnostic-inplus-ip819tp.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/tpms-diagnostic-inplus-ip819tp.webp'],
    description: 'InPlus IP819TP is an integrated TPMS diagnostic system that combines sensor detection, programming, relearning, and full vehicle diagnostics in one Android-based device.',
    features: [
      'Built-in TP module for sensor detection and diagnostics',
      'Supports XTOOL sensor programming and OEM sensor information lookup',
      'Provides relearning procedures and full OBDII functionality',
      'Covers more than 4,000 vehicle models worldwide'
    ],
    techSpecs: [
      'Operating system: Android 10',
      'Processor: 4-core 1.50GHz',
      'Display: 7-inch 1024x600 touchscreen',
      'Communication: BT 4.2, WiFi 2.4/5G, wired connection',
      'Battery: 5000mAh lithium-polymer',
      'Operating time: up to 6 hours'
    ],
    reviewVideo: '',
    detailLink: 'https://en.xtooltech.com/products/tpms-tools-inplus-ip819tp/',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-79',
    name: 'XTireProbe',
    category: 'TPMS Tools',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/tpms-tools-xtireprobe_1760946189.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/tpms-tools-xtireprobe_1760946189.webp'],
    description: 'XTireProbe is a handheld TPMS diagnostic tool that combines tire-pressure monitoring, vehicle diagnosis, and maintenance functions in a compact wireless system.',
    features: [
      'Integrates TPMS, diagnostics, and service functions',
      'Supports fast TPMS sensor triggering and relearning workflows',
      'Uses an independent VCI for wireless operation',
      'Designed for professional workshops and mobile technicians'
    ],
    techSpecs: [
      'Display: 5.45-inch touchscreen',
      'Storage: 32GB flash',
      'VCI communication: WiFi'
    ],
    reviewVideo: '',
    detailLink: 'https://en.xtooltech.com/products/tpms-tools-xtireprobe/',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-80',
    name: 'TS100 BT',
    category: 'TPMS Tools',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/xtool-auto-ts100-bt.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/xtool-auto-ts100-bt.webp'],
    description: 'TS100 BT is a Bluetooth TPMS sensor for Tesla vehicles, designed as a direct OE replacement that pairs with the XTOOL TPMS mobile app.',
    features: [
      'Designed for Tesla Model 3, Y, S, and X',
      'Connects to the XTOOL TPMS mobile app for setup and programming',
      'Supports direct OE sensor replacement without extra reprogramming',
      'Offers durable, wireless TPMS performance'
    ],
    techSpecs: [
      'Battery life: 3-5 years',
      'Operating temperature: -40C to 125C',
      'Size: 46.1 x 16.2 x 25mm',
      'Adjustment angle: 10-45 degrees',
      'Waterproof rating: IP67',
      'Pressure range: 0-900kPa'
    ],
    reviewVideo: '',
    detailLink: 'https://www.xtooltech.com/products/tpms-tools-ts100-bt/',
    badgeLabel: 'On Request'
  },
  {
    id: 'xtool-81',
    name: 'ASCT-1000',
    category: 'ADAS',
    price: 0,
    image: 'https://www.xtooltech.com/uploads/images/adas-asct-1000_1760948801.webp',
    gallery: ['https://www.xtooltech.com/uploads/images/adas-asct-1000_1760948801.webp'],
    description: 'ASCT-1000 is XTOOL’s intelligent ADAS calibration system for precise, OE-level calibration across mainstream driver-assistance platforms.',
    features: [
      'Supports ACC, LDW, AVM, BSM, and NVS calibration workflows',
      'Uses OE-level calibration parameters for broad vehicle coverage',
      'Self-centering fixture supports single-person operation',
      'Line-laser alignment improves calibration accuracy and speed'
    ],
    techSpecs: [
      'Voltage: 3-5V',
      'Operating current: 240mA',
      'Power supply: 0.51-0.57W',
      'Wavelength: 520nm',
      'Interface: DC, RJ45, OB15, USB3.0',
      'Working temperature: -20C to 65C'
    ],
    packingList: [
      'Radar calibration pattern',
      'Calibration main frame',
      'Centering clamp',
      'Calibration pattern ASCB1000-1'
    ],
    reviewVideo: '',
    detailLink: 'https://en.xtooltech.com/products/adas-calibration-system-asct-1000/',
    badgeLabel: 'On Request'
  },
  ...XTOOL_MISSING_PRODUCTS
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

export const ALL_SERVICES: ServiceDetailData[] = [
  {
    id: "ac-repair",
    title: "AC Repair",
    image: "https://swissauto.ae/wp-content/uploads/2021/04/AC-Repair-Content-Image.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2021/04/AC-Repair-Content-Image.jpg",
    shortDescription: "Is your car AC working properly? Or, Do you still feel the heat even after turning on the car AC?",
    detailedDescription: "A comfortable cabin is essential, especially during the scorching summer months. Our AC repair service covers everything from refrigerant recharge, compressor replacement, and condenser repair to evaporative core services. Our certified technicians use the latest diagnostic equipment to pinpoint leaks and ensure your air conditioning system delivers crisp, cold air exactly as the manufacturer intended. We use only high-quality, OEM-approved parts backed by a warranty for your peace of mind.",
    services: [
      "AC Compressor Repair & Replacement",
      "Condenser Repair & Replacement",
      "Evaporative Core Repair",
      "Refrigerant Recharge & Leak Detection",
      "AC System Diagnosis & Performance Testing",
      "Blower Motor & Resistor Repair",
      "Receiver/Dryer Replacement"
    ],
    faqs: [
      { question: "Why is my car AC blowing hot air?", answer: "This is typically due to low refrigerant from a leak, a failing compressor, or a clogged expansion valve." },
      { question: "How often should I service my AC system?", answer: "We recommend an annual inspection and recharge before summer to keep the system running efficiently." },
      { question: "Is a refrigerant top-up enough?", answer: "A top-up only masks a leak temporarily. We always locate and repair the root cause before recharging." }
    ],
    link: "/services/ac-repair"
  },
  {
    id: "axle-driveshaft-repair",
    title: "Axle/ Driveshaft Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Drive-Axle-Content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Drive-Axle-Content.jpg",
    shortDescription: "Do you know, four-wheel-drive refers to cars with two axles providing torque or power to all the four wheels or axle ends at the same time?",
    detailedDescription: "Your axle and driveshaft are the backbone of your vehicle's power transfer system. Whether you drive a front-wheel-drive, rear-wheel-drive, or all-wheel-drive vehicle, any damage to these components can compromise performance, safety, and fuel efficiency. At Cartenatex, our specialists handle CV joint replacement, universal joint repair, axle assembly rebuilds, and differential services using precision tools and genuine components. We ensure proper alignment and balance to restore your vehicle's original handling characteristics.",
    services: [
      "CV Joint Replacement",
      "Universal Joint Repair",
      "Axle Assembly Rebuild & Replacement",
      "Driveshaft Balancing & Alignment",
      "Differential Repair & Fluid Change",
      "Axle Shaft Seal Replacement"
    ],
    faqs: [
      { question: "What causes a clicking noise when turning?", answer: "This usually indicates a worn CV joint, commonly found on the axle shafts of front-wheel-drive vehicles." },
      { question: "Can I drive with a damaged driveshaft?", answer: "It's not safe. A failing driveshaft can cause loss of power to the wheels and may result in a serious accident." },
      { question: "How long do axles typically last?", answer: "With proper maintenance, axles can last the lifetime of the vehicle, but driving conditions affect wear." }
    ],
    link: "/services/axle-driveshaft-repair"
  },
  {
    id: "brake-repair",
    title: "Brake and clutch Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    shortDescription: "Did you know, that your vehicle brakes are the most carping requirement that ensures the safety of you & your loved ones?",
    detailedDescription: "Your brakes are the most critical safety system on your vehicle. We never compromise on quality when it comes to brake repairs. Our comprehensive service includes brake pad replacement, rotor and drum resurfacing or replacement, brake line inspection, fluid flush, and ABS system diagnostics. For manual transmissions, our clutch specialists handle everything from adjustment and hydraulic component replacement to complete clutch kit installation. We use premium OE-grade components and perform rigorous testing to ensure your brake system meets the highest safety standards.",
    services: [
      "Brake Pad & Shoe Replacement",
      "Rotor & Drum Resurfacing/Re condition",
      "Brake Fluid Flush & Replacement",
      "Brake Line Inspection & Repair",
      "ABS System Diagnosis & Repair",
      "Clutch Replacement & Adjustment",
      "Clutch Master & Slave Cylinder Repair"
    ],
    faqs: [
      { question: "How do I know when my brake pads need replacing?", answer: "Squealing, grinding noises, reduced pedal feel, or a brake warning light indicate worn pads requiring immediate attention." },
      { question: "Is it safe to drive on worn brake pads?", answer: "No. Continuing to drive can damage rotors, increase stopping distance, and cause hazardous driving conditions." },
      { question: "When should I replace my clutch?", answer: "Signs include slipping gears, a hard clutch pedal, burning smell, or difficulty shifting gears." }
    ],
    link: "/services/brake-repair"
  },
  {
    id: "camera-radar-calibration",
    title: "Camera / Radar Calibration",
    image: "https://swissauto.ae/wp-content/uploads/2021/04/Camera-and-Radar-Calibration-Content-.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2021/04/Camera-and-Radar-Calibration-Content-.jpg",
    shortDescription: "Do you know, your drive can be more comfortable if you have all the car calibration and radar at the right place?",
    detailedDescription: "Modern vehicles rely on advanced driver assistance systems (ADAS) like lane departure warnings, automatic emergency braking, and adaptive cruise control. These systems depend on cameras and radar sensors that must be precisely calibrated. At Cartenatex, we use state-of-the-art calibration equipment to ensure your sensors are correctly aligned to factory specifications. This is essential after windshield replacement, collision repairs, or suspension work. Proper calibration restores your vehicle's safety features and keeps you protected on the road.",
    services: [
      "Forward Camera Calibration",
      "Radar Sensor Calibration",
      "Lane Departure System Calibration",
      "Adaptive Cruise Control Setup",
      "Automatic Emergency Braking Calibration",
      "Blind Spot Monitoring Calibration"
    ],
    faqs: [
      { question: "Why does my car need camera calibration after a windshield replacement?", answer: "The camera is often mounted behind the windshield. Moving or replacing the glass shifts its position, requiring recalibration." },
      { question: "Is calibration covered by insurance?", answer: "Many insurance policies cover ADAS recalibration after covered repairs. We recommend checking your policy for details." },
      { question: "How long does calibration take?", answer: "The process typically takes 1-2 hours depending on the number of sensors and the vehicle model." }
    ],
    link: "/services/camera-radar-calibration"
  },
  {
    id: "car-software-repair-programming",
    title: "Car Software Repair & Programming",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Software-repair-Content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Software-repair-Content.jpg",
    shortDescription: "Have you ever observed that the control units in your car have chip lock or programs specifically designed for your car?",
    detailedDescription: "Today's vehicles are essentially computers on wheels. From engine management to infotainment systems, software faults and outdated programming can trigger warning lights, reduce performance, or disable features entirely. Our software specialists use dealer-level diagnostic tools and programming equipment to update ECU software, clear chip locks, reprogram modules, and resolve coding errors. We support a wide range of vehicles and ensure every programming session restores your vehicle's optimal functionality while preserving your personal settings.",
    services: [
      "ECU Remapping & Programming",
      "Infotainment System Updates",
      "Chip Key Programming & Immobilizer Coding",
      "Module Coding & Adaptation",
      "Software Fault Diagnosis & Repair",
      "Key Programming for Newer Models"
    ],
    faqs: [
      { question: "What happens if I drive with outdated ECU software?", answer: "Outdated software can cause poor performance, increased emissions, or trigger persistent warning lights." },
      { question: "Is programming safe for my vehicle?", answer: "Yes, when performed with proper equipment and procedures by qualified technicians, programming is safe and secure." },
      { question: "How long does ECU programming take?", answer: "Depending on the module, it can take anywhere from 30 minutes to 2 hours, including testing and verification." }
    ],
    link: "/services/car-software-repair-programming"
  },
  {
    id: "comfort-system-repair",
    title: "Comfort System Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Comfort-System-Service_content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Comfort-System-Service_content.jpg",
    shortDescription: "South africa is well known for its comfortable rides and highly equipped cars that ensures comfort to the drivers.",
    detailedDescription: "Your vehicle's comfort systems – from automatic climate control and seat adjustment to power windows, locks, and interior lighting – contribute greatly to a pleasant driving experience. When these systems malfunction, everyday driving becomes frustrating. Our electronics specialists diagnose and repair climate control modules, power accessories, interior lighting systems, and convenience features. Using advanced diagnostic scanners, we quickly identify faults and restore full comfort functionality so you can enjoy every drive.",
    services: [
      "Climate Control System Repair",
      "Power Window & Lock Repair",
      "Seat Adjustment & Heating System Repair",
      "Interior Lighting & Ambient Light Repair",
      "Central Locking System Diagnosis",
      "Sunroof & Convertible Top Repair"
    ],
    faqs: [
      { question: "Why would my power windows stop working?", answer: "Common causes include a failed switch, blown fuse, or a faulty window regulator, all of which we can diagnose and fix." },
      { question: "My AC cools but the fan speed won't change, what's wrong?", answer: "This usually points to a faulty blower motor resistor, which controls fan speeds in the climate system." },
      { question: "Can a dead battery affect my comfort settings?", answer: "Yes, loss of battery power can erase saved seat and mirror positions, requiring reprogramming or system reset." }
    ],
    link: "/services/comfort-system-repair"
  },
  {
    id: "engine-control-unit-repair",
    title: "Engine Control Unit Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-control-Unit-2.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-control-Unit-2.jpg",
    shortDescription: "Do you know, your car's control unit ensures your safety and comfort?",
    detailedDescription: "The Engine Control Unit (ECU) is the brain of your vehicle, managing fuel injection, ignition timing, emissions, and overall engine performance. A faulty ECU can cause anything from minor drivability issues to a no-start condition. Our specialists perform detailed ECU diagnostics, reflow solder joints, replace faulty components, and reprogram units to factory specifications. We also offer ECU testing services to verify functionality. Whether your ECU needs a software update or a complete rebuild, we have the tools and expertise to get your engine running optimally again.",
    services: [
      "ECU Diagnostics & Fault Code Reading",
      "ECU Reflow & Component-Level Repair",
      "ECU Programming & Remapping",
      "ECU Testing & Verification",
      "Wiring Harness Inspection & Repair"
    ],
    faqs: [
      { question: "What are the signs of a failing ECU?", answer: "Symptoms include the engine cranking but not starting, loss of power, rough idling, or the check engine light staying on." },
      { question: "Can a damaged ECU be repaired?", answer: "In many cases yes. We use specialized equipment to diagnose and repair circuit-level faults in most ECU units." },
      { question: "How long does ECU repair take?", answer: "Depending on the issue, repairs can take 1-3 days. We always provide a timeline estimate before starting work." }
    ],
    link: "/services/engine-control-unit-repair"
  },
  {
    id: "engine-cooling-system-repair",
    title: "Engine Cooling System Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-Coolent-System-content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-Coolent-System-content.jpg",
    shortDescription: "Did you know that engine overheating is one of the most common problems on the roads of Dubai?",
    detailedDescription: "An efficient cooling system is vital to prevent engine overheating and premature wear. Our cooling system specialists inspect radiators, water pumps, thermostats, hoses, and coolant reservoirs to identify leaks, blockages, or worn components. We perform flushes, pressure tests, and coolant replacements using manufacturer-recommended fluids. From minor hose repairs to complete radiator replacements, we ensure your engine stays at optimal operating temperature for performance and longevity.",
    services: [
      "Radiator Inspection & Replacement",
      "Water Pump Repair & Replacement",
      "Thermostat Repair & Replacement",
      "Cooling System Flush & Refill",
      "Hose & Clamp Inspection & Repair",
      "Coolant Leak Detection & Repair",
      "Cooling Fan & Fan Clutch Repair"
    ],
    faqs: [
      { question: "What causes my engine to overheat?", answer: "Common causes include low coolant, a stuck thermostat, a failing water pump, or a clogged radiator." },
      { question: "How often should I flush my cooling system?", answer: "Generally every 30,000 miles or 2 years, but severe driving conditions may require more frequent changes." },
      { question: "Is it safe to drive with the temperature gauge in the red?", answer: "No. Continued driving under overheating conditions can cause severe engine damage including warped heads or a blown head gasket." }
    ],
    link: "/services/engine-cooling-system-repair"
  },
  {
    id: "engine-management-system-repair",
    title: "Engine Management System Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-Management-sytem_content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Engine-Management-sytem_content.jpg",
    shortDescription: "Do you know that the engine management system is the most vital part of your car?",
    detailedDescription: "The engine management system integrates the ECU with sensors, actuators, and wiring to deliver optimal performance, fuel economy, and emissions. When sensors fail or connections degrade, your car may run poorly, consume more fuel, or emit excessive pollutants. Our advanced diagnostic service uses professional-grade scanners to read error codes, analyze live data, and identify the root cause of performance issues. We handle everything from sensor replacement to comprehensive system recalibration, ensuring your engine runs smoothly and efficiently.",
    services: [
      "Engine Management System Diagnostics",
      "Sensor Replacement (Oxygen, MAF, MAP, Knock, etc.)",
      "Actuator Testing & Replacement",
      "Emissions System Repair",
      "Performance Tuning & Calibration",
      "Ignition System Diagnosis & Repair"
    ],
    faqs: [
      { question: "What's the difference between the ECU and the engine management system?", answer: "The ECU is the control module; the engine management system is the complete network of sensors, actuators, and software that work together." },
      { question: "Why does my check engine light come on intermittently?", answer: "Intermittent faults can be caused by loose connections, failing sensors, or vapor leaks that appear only under certain conditions." },
      { question: "Can a faulty MAF sensor cause poor fuel economy?", answer: "Yes, a dirty or failing MAF sensor can send incorrect air intake readings, leading to improper fuel mixture and reduced MPG." }
    ],
    link: "/services/engine-management-system-repair"
  },
  {
    id: "gearbox-repair",
    title: "Gearbox repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Gear-Box-Content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Gear-Box-Content.jpg",
    shortDescription: "Do you know that the gearbox is the second most essential part of the car?",
    detailedDescription: "Your gearbox is responsible for transferring engine power to the wheels at the right speed and torque. Whether you drive a manual or automatic, any issue with your transmission can severely impact drivability. Our transmission specialists diagnose and repair gearboxes using state-of-the-art equipment. Services range from fluid changes and filter replacements to complete rebuilds and valve body repairs. For manual transmissions, we also handle clutch-related work. We guarantee quality workmanship and use only premium transmission fluids and components to extend the life of your gearbox.",
    services: [
      "Transmission Fluid Change & Flush",
      "Filter Replacement",
      "Valve Body Repair",
      "Torque Converter Replacement",
      "Manual Transmission Rebuild",
      "Automatic Transmission Rebuild",
      "Gearbox Diagnostics"
    ],
    faqs: [
      { question: "What color should transmission fluid be?", answer: "Healthy fluid is typically red or pink. Dark brown or black fluid indicates it needs to be changed." },
      { question: "What causes my transmission to slip?", answer: "Common causes include low fluid, worn clutches, or a failing torque converter." },
      { question: "How much does a gearbox repair cost?", answer: "Costs vary widely depending on the issue. We offer transparent pricing and always provide a quote before any work begins." }
    ],
    link: "/services/gearbox-repair"
  },
  {
    id: "suspension-repair",
    title: "Suspension Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Suspension-repair-content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Suspension-repair-content.jpg",
    shortDescription: "Do you know your car is completely useless if you are not able to control it? And from where the control comes?",
    detailedDescription: "Your suspension system ensures ride comfort, handling stability, and tire contact with the road. Worn shocks, struts, ball joints, or control arms can compromise safety and cause uneven tire wear. Our suspension specialists inspect and replace all components to restore your vehicle's original ride quality and control. We also perform four-wheel alignments using state-of-the-art equipment to ensure optimal tire life and handling performance. From routine shock replacements to complex air suspension repairs, we keep your vehicle stable and comfortable.",
    services: [
      "Shock & Strut Replacement",
      "Ball Joint & Control Arm Repair",
      "Coil Spring & Air Spring Repair",
      "Suspension Bushings Replacement",
      "Four-Wheel Alignment",
      "Air Suspension System Repair",
      "Steering Tie Rod & Linkage Repair"
    ],
    faqs: [
      { question: "How do I know if I need new shocks?", answer: "Signs include excessive bouncing, uneven tire wear, or the front of the car diving when braking." },
      { question: "What's the difference between shocks and struts?", answer: "Struts are a structural part of the suspension, while shocks are separate components that dampen movement." },
      { question: "Do I need an alignment after struts are replaced?", answer: "Yes, replacing front struts affects alignment angles, so we strongly recommend a follow-up alignment." }
    ],
    link: "/services/suspension-repair"
  },
  {
    id: "touchless-wheel-alignment",
    title: "Touchless wheel alignment",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Touchless-wheel-alighnment-Content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Touchless-wheel-alighnment-Content.jpg",
    shortDescription: "Have you ever thought of a touchless wheel alignment system that can quickly measure your car wheel's alignment?",
    detailedDescription: "Proper wheel alignment is critical for tire longevity, handling, and fuel efficiency. Our advanced touchless alignment system uses laser technology to measure all four wheels without making contact with the rim, preventing any damage. This precision allows us to adjust your vehicle's alignment angles to match the manufacturer's exact specifications. Misalignment causes uneven tire wear, pulling, and poor handling – we eliminate these issues quickly and accurately, giving you confidence on every drive.",
    services: [
      "Precision 4-Wheel Alignment",
      "Thrust Angle Correction",
      "Camber & Caster Adjustment",
      "Toe Angle Correction",
      "Alignment After Suspension Repair",
      "Tire Wear Analysis"
    ],
    faqs: [
      { question: "How often should I get an alignment?", answer: "We recommend alignment every 10,000 miles or when you notice uneven tire wear or the car pulling to one side." },
      { question: "Is touchless alignment better?", answer: "Yes, the touchless system is faster, more accurate, and protects your wheels from clamp damage." },
      { question: "Will alignment fix my steering wheel being off-center?", answer: "Yes, a proper alignment corrects the steering wheel position along with tracking and pull issues." }
    ],
    link: "/services/touchless-wheel-alignment"
  },
  {
    id: "transmission-repair",
    title: "Transmission Repair",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Transmission-Repair-Content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Transmission-Repair-Content.jpg",
    shortDescription: "Do you know the transmission is one of the most neglected parts of the car?",
    detailedDescription: "The transmission is one of the most complex and expensive components in your vehicle, transferring engine power to the wheels. Manual and automatic transmissions require specialized knowledge and equipment to repair properly. Our transmission specialists diagnose shifting problems, fluid leaks, and internal component failures. We use advanced pressure testing and diagnostic scanners to find the root cause. From fluid changes to full rebuilds, we provide reliable, long-lasting solutions backed by a warranty to keep your vehicle moving smoothly.",
    services: [
      "Transmission Fluid & Filter Change",
      "Transmission Rebuild & Repair",
      "Torque Converter Replacement",
      " solenoids Replacement",
      "Pan Replacement & Leak Repair",
      "Electronic Transmission Diagnostics"
    ],
    faqs: [
      { question: "Why is my automatic transmission shifting hard?", answer: "This can indicate low or old fluid, a failing solenoid, or internal wear. A diagnostic scan helps identify the exact cause." },
      { question: "How much does transmission repair cost?", answer: "Repair costs vary widely from a few hundred for fluid service to thousands for a rebuild. We offer flexible financing options." },
      { question: "What color is healthy transmission fluid?", answer: "It should be red and translucent. Dark, burnt-smelling fluid indicates it needs replacement." }
    ],
    link: "/services/transmission-repair"
  },
  {
    id: "fleet-maintenance",
    title: "Fleet Maintenance",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Fleet-maintenace-Content.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2023/01/Fleet-maintenace-Content.jpg",
    shortDescription: "Do you know the transmission is one of the most neglected parts of the car?",
    detailedDescription: "Managing a fleet requires reliable vehicles and minimal downtime. Our comprehensive fleet maintenance program takes the stress out of vehicle management. We offer scheduled services, emergency roadside assistance, detailed maintenance records, and bulk service discounts. Our certified technicians handle all makes and models, from light-duty vans to heavy trucks. With our dedicated fleet account managers, you can track service history, schedule appointments, and receive transparent quotes – all designed to maximize your fleet's uptime and reduce total cost of ownership.",
    services: [
      "Scheduled Preventive Maintenance",
      "Emergency Roadside Assistance",
      "Bulk Service & Tire Programs",
      "Fleet Account Management",
      "Detailed Maintenance Record Services",
      "Vehicle Inspection Reports"
    ],
    faqs: [
      { question: "What's included in fleet maintenance?", answer: "Our program covers oil changes, inspections, tire services, brake maintenance, and 24/7 emergency support." },
      { question: "Do you offer pickup and delivery for fleet vehicles?", answer: "Yes, we provide mobile fleet service and pickup/delivery options to minimize your downtime." },
      { question: "How do you help reduce fleet costs?", answer: "Through preventive maintenance, bulk pricing, and transparent reporting, we help you avoid costly breakdowns and emergency repairs." }
    ],
    link: "/services/fleet-maintenance"
  },
  {
    id: "major-service",
    title: "Major Service",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/Major-service-Content-Image.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2022/12/Major-service-Content-Image.jpg",
    shortDescription: "Major services is a full professional car service as per the manufacturer guidelines with the complete vehicle inspection with any needed repairs & replacements.",
    detailedDescription: "A major service is the most comprehensive maintenance routine for your vehicle, following manufacturer guidelines to the letter. This intensive service includes all elements of a minor service plus critical inspections and replacements such as spark plugs, air filters, cabin filters, and fluid top-ups or changes. Our certified technicians perform a complete vehicle inspection, checking brakes, steering, suspension, and exhaust systems. Any issues identified are reported with transparent pricing before any additional work begins. A major service keeps your warranty valid and your vehicle in peak condition.",
    services: [
      "Engine Oil & Filter Change",
      "Spark Plug Inspection & Replacement",
      "Air Filter & Cabin Filter Replacement",
      "Brake Inspection & Fluid Top-Up",
      "Steering & Suspension Check",
      "Exhaust System Inspection",
      "Cooling System Inspection",
      "Full Diagnostic Scan"
    ],
    faqs: [
      { question: "When should my car have a major service?", answer: "Typically every 30,000 to 60,000 km or every 2 years, depending on your vehicle and driving conditions." },
      { question: "Is a major service worth the cost?", answer: "Absolutely. A thorough major service prevents costly repairs, maintains fuel efficiency, and extends your vehicle's lifespan." },
      { question: "Will you notify me of additional repairs?", answer: "Yes, we always provide a detailed report and a price quote before performing any extra work." }
    ],
    link: "/services/major-service"
  },
  {
    id: "minor-service",
    title: "Minor Service",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/Minor-Service-Content-Image.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2022/12/Minor-Service-Content-Image.jpg",
    shortDescription: "Minor car services do not cost much but have a greater impact on your vehicle's overall health and keep away major repairs.",
    detailedDescription: "Regular minor services are the key to keeping your vehicle healthy and preventing major issues down the road. This essential service includes an oil and filter change, fluid level checks, tire inspection, and a basic diagnostic scan. Our certified technicians check the engine, brakes, lights, and other critical systems to ensure everything is functioning properly. Keeping up with minor service intervals protects your investment, maintains optimal performance, and helps prevent costly breakdowns. It's the most cost-effective way to keep your car running like new.",
    services: [
      "Engine Oil & Filter Change",
      "Fluid Level Checks & Top-Ups",
      "Tire Inspection & Pressure Check",
      "Battery & Electrical Check",
      "Brake System Inspection",
      "Basic Diagnostic Scan",
      "Light & Indicator Check"
    ],
    faqs: [
      { question: "How often should I get a minor service?", answer: "Every 5,000 to 10,000 km or every 6 months, depending on your vehicle and driving habits." },
      { question: "Is an oil change part of a minor service?", answer: "Yes, oil and filter replacement are the core components of a minor service." },
      { question: "Can I do minor service myself?", answer: "While basic checks are possible, we recommend professional service to ensure thoroughness and catch hidden issues early." }
    ],
    link: "/services/minor-service"
  },
  {
    id: "brake-caliper-painting",
    title: "Brake Caliper Painting",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/Brake-Caliber-Content-Image.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2022/12/Brake-Caliber-Content-Image.jpg",
    shortDescription: "Brake caliper painting makes your car look smart, fresh and prevents the calipers from rusting.",
    detailedDescription: "Over time, brake calipers can become rusty and unsightly. Our professional brake caliper painting service restores their appearance and protects them from future rust and corrosion. We remove the calipers, thoroughly clean and prepare the surfaces, and apply a durable ceramic-based paint in a color of your choice. This not only enhances your car's aesthetic appeal but also extends the lifespan of your brake components. Available in a wide range of colors to match or contrast your vehicle, our caliper painting gives your car a custom, high-performance look.",
    services: [
      "Caliper Removal & Cleaning",
      "Surface Preparation & Priming",
      "Ceramic-Based Paint Application",
      "Multiple Color Options",
      "Reassembly & Inspection"
    ],
    faqs: [
      { question: "How long does caliper painting take?", answer: "The process typically takes 2-3 days to allow for proper drying and curing time." },
      { question: "Will painting affect brake performance?", answer: "No, when done professionally, painting is purely cosmetic and does not affect braking performance." },
      { question: "Do you offer color matching?", answer: "Yes, we offer a wide range of standard colors and can match custom requests for an additional fee." }
    ],
    link: "/services/brake-caliper-painting"
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/ceramic-Content-Image.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2022/12/ceramic-Content-Image.jpg",
    shortDescription: "Ceramic coating ensures extreme protection to your car surface for scratches, dirt and chemical substances.",
    detailedDescription: "Ceramic coating applies a protective nanotechnology layer over your vehicle's paintwork that is far more durable than traditional wax. This liquid polymer creates a invisible barrier that repels water, protects against UV rays, scratches, bugs, and chemical stains. Unlike wax, which washes off in a few months, our high-quality ceramic coating can last for years. The result is a showroom shine that lasts, easier cleaning, and long-term protection for your vehicle's paintwork, making it an excellent investment for any car owner.",
    services: [
      "Paint Correction & Detailing",
      "Nanotechnology Coating Application",
      "Gloss & Matte Finish Options",
      "Full Vehicle Protection",
      "Maintenance Coating Kits"
    ],
    faqs: [
      { question: "How long does ceramic coating last?", answer: "High-quality coating can last 2-5 years depending on the product tier and maintenance." },
      { question: "Does ceramic coating prevent scratches?", answer: "It provides strong protection against swirl marks, light scratches, and chemical etching." },
      { question: "Is ceramic coating worth the cost?", answer: "Given its longevity and protective benefits, ceramic coating pays for itself by reducing the need for frequent detailing and repairs." }
    ],
    link: "/services/ceramic-coating"
  },
  {
    id: "car-dip-color-service",
    title: "Car dip color service",
    image: "https://swissauto.ae/wp-content/uploads/2022/12/CAR-DIP-COLOR-SERVICE-Content-Image.jpg",
    bannerImage: "https://swissauto.ae/wp-content/uploads/2022/12/CAR-DIP-COLOR-SERVICE-Content-Image.jpg",
    shortDescription: "Quality dip color paint services when done with greater care provides a unique finish to your vehicle.",
    detailedDescription: "Car dip is a temporary or semi-permanent paint job applied using specialized vinyl-like coating. Unlike traditional paint, car dip can be easily removed without damaging your original paintwork, making it perfect for seasonal changes or custom looks. Our skilled technicians apply premium plasti-dip products in a pristine, dust-free environment. We offer a wide selection of colors, finishes including matte, gloss, and metallic options. Whether you want to test a new color before committing to a full paint job or give your vehicle a unique personal touch, our car dip service delivers professional results.",
    services: [
      "Custom Color Selection",
      "Matte, Gloss & Metallic Finishes",
      "Full Vehicle Dip Application",
      "Partial Dip Accents",
      "Professional Removal Service"
    ],
    faqs: [
      { question: "How long does car dip last?", answer: "Properly applied dip can last 2-5 years, depending on exposure and maintenance." },
      { question: "Can car dip be removed?", answer: "Yes, it peels off easily and can be removed without harming the original paint underneath." },
      { question: "Is car dip cheaper than painting?", answer: "It's considerably more affordable than a full paint job and removable, offering flexibility." }
    ],
    link: "/services/car-dip-color-service"
  },
  {
    id: "roadworthy-booking",
    title: "Roadworthy Booking",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    bannerImage: "https://www.njcleanair.com/images/car-inspection.jpg",
    shortDescription: "Book your vehicle's roadworthy inspection online with certified technicians who verify that your vehicle meets all safety standards before you hit the road.",
    detailedDescription: "A roadworthy certificate confirms that your vehicle is roadworthy and safe to drive. At Cartenatex, we make booking your roadworthy inspection hassle-free. Our certified inspectors perform comprehensive checks covering brakes, suspension, tires, lights, steering, and all safety-critical components. We use professional-grade equipment and follow national standards for vehicle condition. Once your vehicle passes inspection, we issue a legitimate roadworthy certificate. Booking online saves you time, and we provide transparent pricing with no hidden costs. Schedule your appointment and drive with confidence.",
    services: [
      "Online Roadworthy Booking",
      "Comprehensive Safety Inspection",
      "Brake System Check",
      "Suspension & Steering Inspection",
      "Tire & Wheel Inspection",
      "Lighting & Electrical Systems Check"
    ],
    faqs: [
      { question: "How long does a roadworthy inspection take?", answer: "Most inspections are completed within 30-60 minutes once your vehicle is in the bay." },
      { question: "Do I need to book an appointment?", answer: "Yes, we recommend booking in advance to minimize wait times and guarantee availability." },
      { question: "What happens if my vehicle fails?", answer: "We'll provide a detailed report of any issues. You can opt to fix them with us and we'll re-inspect at no extra booking fee." }
    ],
    link: "/services/roadworthy-booking",
    category: "natis",
    icon: "CalendarCheck"
  },
  {
    id: "roadworthy-testing",
    title: "Roadworthy Testing",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    bannerImage: "https://www.njcleanair.com/images/car-inspection.jpg",
    shortDescription: "Professional roadworthy testing services that assess your vehicle's mechanical and safety condition against national roadworthiness standards.",
    detailedDescription: "Our roadworthy testing service is conducted by trained, certified inspectors using the latest diagnostic tools and checklists aligned with national roadworthiness requirements. We thoroughly examine every safety-critical system including the braking system, steering and suspension components, tires and wheels, lights, indicators, seatbelts, and structural integrity. Each test produces a detailed report identifying any defects or areas requiring attention. Whether you need testing before selling, transferring ownership, or periodic compliance checks, our service ensures your vehicle is safe and legally roadworthy.",
    services: [
      "Full Roadworthy Vehicle Test",
      "Brake & Suspension Assessment",
      "Tire Condition & Tread Depth Check",
      "Lighting & Electrical Systems Test",
      "Steering & Alignment Check",
      "Detailed Test Report & Certificate"
    ],
    faqs: [
      { question: "What vehicles require a roadworthy test?", answer: "Generally, vehicles being sold, transferred, or re-registered, and those displaying a defect warning light." },
      { question: "How often do I need a roadworthy test?", answer: "In many regions, vehicles over a certain age require annual or bi-annual roadworthy testing." },
      { question: "Will I get the certificate on the same day?", answer: "Yes, upon successful completion you receive your roadworthy certificate immediately." }
    ],
    link: "/services/roadworthy-testing",
    category: "natis",
    icon: "ClipboardCheck"
  },
  {
    id: "roadworthy-issuing",
    title: "Roadworthy Issuing",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    bannerImage: "https://www.njcleanair.com/images/car-inspection.jpg",
    shortDescription: "Obtain your official roadworthy certificate through our licensed and authorized service center, accepted by all licensing authorities.",
    detailedDescription: "Once your vehicle passes the roadworthy test, we issue an official, legally recognized roadworthy certificate that is accepted by national and provincial licensing authorities. Our certified inspectors are authorized to issue valid certificates for registration, transfer, and compliance purposes. The certificate is processed digitally with instant issuance where applicable, and we also provide hard-copy versions upon request. We maintain records of all certificates issued and can provide renewal reminders so you never miss a compliance deadline.",
    services: [
      "Official Roadworthy Certificate Issuing",
      "Digital & Physical Certificate Options",
      "License Authority Accepted Certificates",
      "Certificate Renewal Reminders",
      "Transfer & Registration Support"
    ],
    faqs: [
      { question: "Is your roadworthy certificate legally accepted?", answer: "Yes, our certificates are issued by certified inspectors and accepted by all licensing authorities." },
      { question: "How long is a roadworthy certificate valid?", answer: "Validity periods vary by region, typically ranging from 30 to 90 days from the date of issue." },
      { question: "Can I get a duplicate certificate?", answer: "Yes, we can reprint or re-issue lost certificates for a small processing fee." }
    ],
    link: "/services/roadworthy-issuing",
    category: "natis",
    icon: "Award"
  },
  {
    id: "police-clearance",
    title: "Police Clearance",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    bannerImage: "https://www.njcleanair.com/images/car-inspection.jpg",
    shortDescription: "Convenient police clearance and vehicle theft checks to verify that your car has no outstanding legal issues before sale or registration.",
    detailedDescription: "A police clearance verifies that a vehicle has no reported theft, no outstanding law enforcement holds, and no major violation records. This is an essential document when selling, buying, or registering a vehicle. Our service works with local authorities to process your police clearance efficiently. We verify vehicle identity, check national databases, and confirm no pending legal encumbrances exist. Once verified, we provide you with the official police clearance documentation required for transfers and registration. Our streamlined process minimizes delays and gives you the paperwork you need quickly.",
    services: [
      "Police Clearance Certificate Processing",
      "Vehicle Theft Status Verification",
      "Law Enforcement Database Check",
      "Identity & Ownership Verification",
      "Expedited Certificate Issuance",
      "Transfer Documentation Support"
    ],
    faqs: [
      { question: "How long does a police clearance take?", answer: "Typically 1-3 business days, depending on authority processing times." },
      { question: "Is a police clearance required to sell a vehicle?", answer: "Yes, most transfers require a valid police clearance to confirm a clean ownership history." },
      { question: "What documents do I need?", answer: "A valid ID, ownership documents, and proof of residence are typically required." }
    ],
    link: "/services/police-clearance",
    category: "natis",
    icon: "BadgeCheck"
  },
  {
    id: "vehicle-licensing",
    title: "Vehicle Licensing",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    bannerImage: "https://www.njcleanair.com/images/car-inspection.jpg",
    shortDescription: "Complete vehicle licensing and renewal services, ensuring your car remains legally registered and compliant with national transit authorities.",
    detailedDescription: "Vehicle licensing must be renewed annually or as required by law. Our licensing desk handles all registration and renewal paperwork on your behalf, including new registrations, annual renewals, duplicate licenses, and cross-border compliance. We verify that your vehicle has valid insurance and roadworthiness certification where required, fill out all forms accurately, and submit them to the licensing authority. We keep you updated on renewal deadlines and can process payments for applicable fees. With our service, you avoid long queues and ensure your vehicle remains fully compliant and road-legal.",
    services: [
      "New Vehicle Registration",
      "Annual License Renewal",
      "Duplicate License Issuance",
      "Cross-Border Licensing Compliance",
      "Registration Transfer Assistance",
      "Tax & Fee Processing"
    ],
    faqs: [
      { question: "How often do I need to renew my license?", answer: "Renewal periods vary by region, commonly annually or every 2-3 years." },
      { question: "Can you renew a license if it has expired?", answer: "Yes, often with a small late fee. We handle expired renewals as well." },
      { question: "What if I just bought a new vehicle?", answer: "We can process a new registration for you and handle all necessary documentation." }
    ],
    link: "/services/vehicle-licensing",
    category: "natis",
    icon: "FileText"
  },
  {
    id: "vehicle-change-of-ownership",
    title: "Vehicle Change of Ownership",
    image: "https://swissauto.ae/wp-content/uploads/2023/01/Brake-repair_content.jpg",
    bannerImage: "https://www.njcleanair.com/images/car-inspection.jpg",
    shortDescription: "Streamlined change of ownership transfer services for buying or selling a vehicle, including all paperwork, verification, and licensing authority submission.",
    detailedDescription: "Changing ownership when selling or buying a vehicle involves multiple forms, signatures, ID verification, and licensing authority submission. Our change of ownership service manages the entire process end-to-end. We verify seller and buyer identities, prepare and witness all required transfer forms, confirm a valid roadworthy certificate and insurance, process the transfer at the licensing authority, and issue the new registration documents. We also handle any applicable transfer taxes and fees. Whether you're selling or buying, our service ensures a smooth, legally compliant transfer without hassle.",
    services: [
      "Complete Ownership Transfer",
      "Seller & Buyer Identity Verification",
      "Transfer Form Preparation & Witnessing",
      "Licensing Authority Submission",
      "New Registration Document Issuance",
      "Tax & Fee Processing"
    ],
    faqs: [
      { question: "How long does a change of ownership take?", answer: "Usually processed within the same day or 1-2 business days depending on authority workload." },
      { question: "Do I need a roadworthy certificate to transfer ownership?", answer: "Yes, a valid roadworthy certificate is typically required for ownership transfers." },
      { question: "What documents do I need to bring?", answer: "Both parties' IDs, proof of residence, current registration, insurance proof, and the vehicle." }
    ],
    link: "/services/vehicle-change-of-ownership",
    category: "natis",
    icon: "ArrowLeftRight"
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
