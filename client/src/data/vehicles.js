// ─── All MiChe Vehicles ────────────────────────────────────────────────────
// NOTE: EV bike images → copy EV folder to client/public/images/ev/
// Folder structure needed:
//   client/public/images/ev/SU8/
//   client/public/images/ev/Tank/
//   client/public/images/ev/Vmax-2/
//   client/public/images/ev/Apache/
//   client/public/images/ev/Mohsen/

export const vehicles = [
  // ─── REAL MC SU8 ───────────────────────────────────────────────────────────
  {
    id: "mc-su8",
    type: "electric-bike",
    group: "Electric Bikes",
    name: "MC SU8",
    price: "Contact Showroom",
    image: "/images/ev/SU8/12668bbc5ce7bf818fc0ebbfb465aa5.png",
    gallery: [
      "/images/ev/SU8/12668bbc5ce7bf818fc0ebbfb465aa5.png",
      "/images/ev/SU8/9e29f6513c069aef42dfe8e976f5f1c.png",
      "/images/ev/SU8/e6698a73c4a054345012724012feabc.png",
    ],
    summary:
      "The flagship MC SU8 — 4000W motor with 10800W peak power, 280km range per charge, and 100km/h top speed. Built for serious riders.",
    stats: {
      "Battery Range": "280km",
      "Top Speed": "100km/h",
      Charging: "8 Hours",
    },
    specs: {
      Motor: "4000W / 10800W peak",
      Battery: "72V 100AH Lithium",
      Controller: "150A",
      Brakes: "CBS Disc (FR & RR)",
      Instrument: "TFT Display",
      Tyres: "FR 110/80-17 | RR 120/80-16",
      Dimensions: "2170×760×1140mm",
      Weight: "180kg",
    },
    features: [
      "3 Speed Modes (40/70/100 km/h)",
      "TFT Display",
      "LED Headlights",
      "CBS Disc Brakes",
      "Burglar Alarm",
      "Aluminum Alloy Rims",
    ],
    colors: ["#050505", "#ff6600", "#d8e0ea"],
    emi: "Contact showroom for EMI options",
  },

  // ─── REAL MC TANK ──────────────────────────────────────────────────────────
  {
    id: "mc-tank",
    type: "electric-bike",
    group: "Electric Bikes",
    name: "MC Tank",
    price: "Contact Showroom",
    image: "/images/ev/Tank/00846.png",
    gallery: [
      "/images/ev/Tank/00846.png",
      "/images/ev/Tank/00852.png",
      "/images/ev/Tank/TANK 4-2.png",
    ],
    summary:
      "MC Tank — 3000W motor, 120km range, USB charging port, and digital display. Perfect urban electric scooter for daily Kathmandu commute.",
    stats: {
      "Battery Range": "120km",
      "Top Speed": "80km/h",
      Charging: "8 Hours",
    },
    specs: {
      Motor: "3000W / 7800W peak",
      Battery: "72V 40AH Lithium",
      Controller: "100A",
      Brakes: "Disc (FR & RR)",
      Instrument: "Digital Display",
      Tyres: "FR 120/70-12 | RR 120/70-12",
      Dimensions: "1910×705×1210mm",
      Weight: "128kg",
    },
    features: [
      "3 Speed Modes (40/60/80 km/h)",
      "Digital Display",
      "USB Port",
      "LED Headlights",
      "Burglar Alarm",
      "Aluminum Alloy Rims",
    ],
    colors: ["#050505", "#ff6600", "#d8e0ea"],
    emi: "Contact showroom for EMI options",
  },

  // ─── REAL MC VMAX ──────────────────────────────────────────────────────────
  {
    id: "mc-vmax",
    type: "electric-bike",
    group: "Electric Bikes",
    name: "MC Vmax",
    price: "Contact Showroom",
    image: "/images/ev/Vmax-2/20250411161753.png",
    gallery: [
      "/images/ev/Vmax-2/20250411161753.png",
      "/images/ev/Vmax-2/7c358f27516ef0c3a60d0ed89acf0f0.png",
      "/images/ev/Vmax-2/d0df8da9c4261cd69c86077385a73f6.png",
    ],
    summary:
      "MC Vmax — maxi-scooter style with 3000W motor, 120km range, and premium highway riding comfort. USB port and burglar alarm included.",
    stats: {
      "Battery Range": "120km",
      "Top Speed": "80km/h",
      Charging: "8 Hours",
    },
    specs: {
      Motor: "3000W / 7800W peak",
      Battery: "72V 40AH Lithium",
      Controller: "100A",
      Brakes: "Disc (FR & RR)",
      Instrument: "Digital Display",
      Tyres: "FR 130/60-13 | RR 130/60-13",
      Dimensions: "1970×715×1320mm",
      Weight: "140kg",
    },
    features: [
      "3 Speed Modes (40/60/80 km/h)",
      "Digital Display",
      "USB Port",
      "LED Headlights",
      "Burglar Alarm",
      "Aluminum Alloy Rims",
    ],
    colors: ["#808080", "#d8e0ea", "#050505"],
    emi: "Contact showroom for EMI options",
  },

  // ─── REAL MC APACHE ────────────────────────────────────────────────────────
  {
    id: "mc-apache",
    type: "electric-bike",
    group: "Electric Bikes",
    name: "MC Apache",
    price: "Contact Showroom",
    image: "/images/ev/Apache/1e72cff5bbb67a28f8b2e2678b18ff7.png",
    gallery: [
      "/images/ev/Apache/1e72cff5bbb67a28f8b2e2678b18ff7.png",
      "/images/ev/Apache/3da0343722e97d3c57dd9d0add2cc7d.png",
      "/images/ev/Apache/f62b423467ca9b7c68c13fbf0090793.png",
    ],
    summary:
      "MC Apache — practical electric bike with front basket, 120km range, USB port. Ideal for cargo and daily city use in Nepal.",
    stats: {
      "Battery Range": "120km",
      "Top Speed": "80km/h",
      Charging: "8 Hours",
    },
    specs: {
      Motor: "3000W / 7800W peak",
      Battery: "72V 40AH Lithium",
      Controller: "100A",
      Brakes: "Disc (FR & RR)",
      Instrument: "Digital Display",
      Tyres: "FR 90/90-14 | RR 90/90-12",
      Dimensions: "1930×700×1140mm",
      Weight: "115kg",
    },
    features: [
      "Front Basket Included",
      "3 Speed Modes (40/60/80 km/h)",
      "Digital Display",
      "USB Port",
      "LED Headlights",
      "Burglar Alarm",
    ],
    colors: ["#808080", "#050505", "#d8e0ea"],
    emi: "Contact showroom for EMI options",
  },

  // ─── REAL MC MOHSEN ────────────────────────────────────────────────────────
  {
    id: "mc-mohsen",
    type: "electric-bike",
    group: "Electric Bikes",
    name: "MC Mohsen",
    price: "Contact Showroom",
    image: "/images/ev/Mohsen/01066.png",
    gallery: [
      "/images/ev/Mohsen/01066.png",
      "/images/ev/Mohsen/01083.png",
      "/images/ev/Mohsen/03160.png",
    ],
    summary:
      "MC Mohsen — retro-style electric scooter with NFC dashboard, ultra-soft comfort seat, Graphene battery, and mobile USB charging port.",
    stats: {
      "Battery Range": "Varies",
      "Top Speed": "60km/h",
      Charging: "Varies",
    },
    specs: {
      Motor: "2000W / 5200W peak",
      Battery: "Chaowei Graphene 72V 26AH",
      Controller: "18-transistor 72V60A",
      Brakes: "Front & Rear Disc",
      Instrument: "Digital Dashboard with NFC",
      Tyres: "110/70-12 (FR & RR)",
      Dimensions: "1850×690×1170mm",
      Seat: "Ultra-Soft Comfort Seat",
    },
    features: [
      "NFC Dashboard",
      "Ultra-Soft Comfort Seat",
      "Mobile USB Charging",
      "Front & Rear Disc Brakes",
      "Graphene Battery",
      "Retro Style Design",
    ],
    colors: ["#00bcd4", "#ffffff", "#050505"],
    emi: "Contact showroom for EMI options",
  },

  // ─── PETROL BIKES (Unsplash images — real photos not uploaded yet) ──────────

  {
    id: "mc-woliao",
    type: "petrol-bike",
    group: "Petrol Bikes",
    name: "MC Woliao",
    price: "Contact Showroom",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1500&q=90",
    ],
    summary:
      "MC Woliao — GY6 Air-Cooled 125/150CC engine with EFI, Euro IV certified, front disc brake, and USB port. Full vehicle certification included.",
    stats: {
      "Engine CC": "125/150cc",
      "Fuel System": "EFI",
      Emission: "Euro IV",
    },
    specs: {
      Engine: "GY6 Air-Cooled 150CC",
      "Fuel System": "Electronic Fuel Injection",
      Emission: "Euro IV",
      Brakes: "Front Disc / Rear Drum",
      Tyres: "Front 100/80-14 | Rear 120/70-14",
      Suspension: "Lucheng Front & Rear",
      Frame: "Electroplated",
      Paint: "ABS with PU Coating",
    },
    features: [
      "EFI Engine",
      "Euro IV Emission",
      "USB Port",
      "Xiongxin Rearview Mirrors",
      "Zhuochi Exhaust",
      "Full Vehicle Certification",
    ],
    colors: ["#808080", "#050505", "#d8e0ea"],
    emi: "Contact showroom for EMI options",
  },

  {
    id: "mc-moying",
    type: "petrol-bike",
    group: "Petrol Bikes",
    name: "MC Moying",
    price: "Contact Showroom",
    image:
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1500&q=90",
    ],
    summary:
      "MC Moying — LiuGong 150CC engine, Euro III headlight with integrated instrument cluster, large folding footrest, and K5 muffler.",
    stats: { "Engine CC": "150cc", Emission: "Euro III", Tires: "Deep-Tread" },
    specs: {
      Engine: "LiuGong 150CC",
      Emission: "Euro III",
      Tyres: "Front 2.75-18 | Rear 3.00-18",
      Headlight: "Euro III Compliant",
      Instrument: "Integrated Cluster",
      Footrest: "Large Folding",
      Muffler: "K5 Muffler",
      "Luggage Rack": "Small",
    },
    features: [
      "LiuGong Engine",
      "Euro III Headlight",
      "Integrated Instrument Cluster",
      "Large Folding Footrest",
      "K5 Muffler",
      "Deep-Tread Tires",
    ],
    colors: ["#1565c0", "#ff244f", "#050505"],
    emi: "Contact showroom for EMI options",
  },

  {
    id: "mc-ak",
    type: "petrol-bike",
    group: "Petrol Bikes",
    name: "MC AK",
    price: "Contact Showroom",
    image:
      "https://images.unsplash.com/photo-1558981001-7926b987cfe6?auto=format&fit=crop&w=1500&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1558981001-7926b987cfe6?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
    ],
    summary:
      "MC AK — Tianyi 150/200CC engine with EFI, front & rear disc brakes, AK aluminum wheels, LCD display, and USB port.",
    stats: {
      "Engine CC": "150/200cc",
      "Fuel System": "EFI",
      Brakes: "Disc FR & RR",
    },
    specs: {
      Engine: "Tianyi 150CC / 200CC",
      "Fuel System": "EFI",
      Brakes: "Front & Rear Disc",
      Wheels: "AK Aluminum (FR & RR)",
      Tyres: "Front 90/90-17 | Rear 120/80-17",
      Display: "LCD",
      "Rear Handlebar": "Grab Rail",
      Muffler: "Image Muffler",
    },
    features: [
      "EFI Engine",
      "Front & Rear Disc Brakes",
      "AK Aluminum Wheels",
      "LCD Display",
      "USB Port",
      "Full Certification",
    ],
    colors: ["#00bcd4", "#050505", "#d8e0ea"],
    emi: "Contact showroom for EMI options",
  },

  {
    id: "mc-dr",
    type: "petrol-bike",
    group: "Petrol Bikes",
    name: "MC DR",
    price: "Contact Showroom",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1500&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1500&q=90",
    ],
    summary:
      "MC DR — LiuGong 150/200CC EFI engine, front & rear disc brakes, aluminum rear rack, LED headlight, LCD display, and central rear suspension.",
    stats: {
      "Engine CC": "150/200cc",
      "Fuel System": "EFI",
      Suspension: "Central Rear",
    },
    specs: {
      Engine: "LiuGong 150CC / 200CC",
      "Fuel System": "EFI",
      Brakes: "Front & Rear Disc",
      Wheels: "AK 17-inch Disc",
      Tyres: "Front 100/80-17 | Rear 110/80-17",
      Display: "LCD",
      Headlight: "LED",
      "Rear Rack": "Aluminum",
    },
    features: [
      "EFI Engine",
      "Front & Rear Disc Brakes",
      "Aluminum Rear Rack",
      "LED Headlight",
      "LCD Display",
      "USB Port",
      "Full Certification",
    ],
    colors: ["#76ff03", "#050505", "#d8e0ea"],
    emi: "Contact showroom for EMI options",
  },

  // ─── SPORTS BIKES ──────────────────────────────────────────────────────────

  {
    id: "mc-500rr",
    type: "sports-bike",
    group: "Sports Bikes",
    name: "MC Modeway 500RR",
    price: "Contact Showroom",
    image:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1500&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1500&q=90",
    ],
    summary:
      "MC Modeway 500RR — 494cc water-cooled SOHC, 150km/h top speed, 0-100 in 6 seconds, TFT LCD display, and front inverted forks.",
    stats: {
      "Top Speed": "150km/h",
      "0-100km/h": "6 sec",
      Displacement: "494cc",
    },
    specs: {
      Engine: "Water-cooled 4-stroke SOHC",
      Displacement: "494cc",
      "Max Power": "31 kW @ 8500 RPM",
      "Max Torque": "41 Nm @ 6500 RPM",
      "Top Speed": "150 km/h",
      Transmission: "6-speed",
      "Front Brake": "320mm dual disc 4-piston",
      "Rear Brake": "260mm disc",
      "Front Tyre": "120/70ZR17",
      "Rear Tyre": "180/55ZR17",
      Weight: "201kg",
      Emission: "China IV",
    },
    features: [
      "Water-Cooled SOHC Engine",
      "6-Speed Gearbox",
      "TFT LCD Display",
      "Front Inverted Forks",
      "Rear Single-Sided Air Suspension",
      "Port Fuel Injection",
    ],
    colors: ["#ff244f", "#050505", "#ffffff"],
    emi: "Contact showroom for EMI options",
  },

  {
    id: "mc-800rr",
    type: "sports-bike",
    group: "Sports Bikes",
    name: "MC Modeway 800RR",
    price: "Contact Showroom",
    image:
      "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1500&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1500&q=90",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
    ],
    summary:
      "MC Modeway 800RR — 777cc inline-4 DOHC, 240km/h top speed, 115.6HP, 0-100 in 3.6 seconds. Dual ABS, TCS, TPMS, dashcam, heated handlebars.",
    stats: {
      "Top Speed": "240km/h",
      "0-100km/h": "3.6 sec",
      Horsepower: "115.6 HP",
    },
    specs: {
      Engine: "Inline 4-cylinder water-cooled DOHC",
      Displacement: "777cc",
      "Max Power": "86 kW (115.6 HP) @ 11500 RPM",
      "Max Torque": "83 Nm @ 9500 RPM",
      "Top Speed": "240 km/h",
      Transmission: "6-speed",
      ABS: "Dual-channel",
      TCS: "Yes",
      TPMS: "Yes",
      "Front Tyre": "120/70ZR17",
      "Rear Tyre": "190/50ZR17",
      Weight: "216kg",
    },
    features: [
      "Inline 4-Cylinder DOHC",
      "Dual-Channel ABS",
      "TCS Traction Control",
      "TPMS",
      "Heated Handlebars",
      "Electronic Quick Shifter",
      "Built-in Dashcam",
      "TFT Navigation Display",
    ],
    colors: ["#ff244f", "#050505", "#ffffff"],
    emi: "Contact showroom for EMI options",
  },
];

// ─── Blog / News Data ─────────────────────────────────────────────────────────

export const blogs = [
  {
    title: "MiChe International (Tonglu Miche Technology Co., Ltd.)",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    body: "Driving Innovation Across Industries",
    bullets: [
      "Established April 6, 2023",
      "Registered Capital: RMB 10 Million",
      "Headquarters in Hangzhou, Zhejiang, China",
      "Software, automotive, EV expansion, machinery, consulting, logistics, and sustainable innovation",
    ],
    link: "https://www.mc-carworld.com/abouts.html",
  },
  {
    title: "MiChe Headquarters Building",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    body: "D-8, Tianxi Road 278, Fenshui Town, Tonglu County, Hangzhou, Zhejiang Province, China",
    bullets: [
      "Premium office showcase",
      "Corporate building gallery",
      "Elegant business presentation",
    ],
  },
  {
    title: "Hangzhou Office",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    body: "Intelligent Information Industrial Park, No. 108 Xiangyuan Road, Gongshu District, Hangzhou, Zhejiang, China",
    bullets: [
      "Technology office",
      "Innovation strategy",
      "Business growth support",
    ],
    link: "https://www.mc-carworld.com/abouts.html",
  },
  {
    title: "Hong Kong Office",
    image:
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1000&q=85",
    body: "HONG KONG VERSATILE TRADING CO., LIMITED, Rm 1607, Trend Centre, 29-31 Cheung Lee Street, Chai Wan, Hong Kong",
    bullets: [
      "International trading",
      "Regional business presence",
      "Corporate network",
    ],
  },
  {
    title: "Zhejiang Office",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1000&q=85",
    body: "D-8, Tianxi Road 278 and Intelligent Information Industrial Park, No. 108 Xiangyuan Road, Hangzhou, Zhejiang, China",
    bullets: [
      "Dual office locations",
      "Manufacturing and technology coordination",
      "Sustainable innovation",
    ],
  },
  {
    title: "Dubai Office",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
    body: "MICHE TRADING FZCO, LB05121, Jebel Ali Free Zone, Dubai, United Arab Emirates",
    bullets: [
      "Middle East business base",
      "Logistics and support services",
      "Global business growth",
    ],
  },
];

// ─── Category Definitions ─────────────────────────────────────────────────────

export const categories = [
  {
    title: "Electric Bikes",
    type: "electric-bike",
    desc: "Premium EV motorcycles with instant torque and long battery life.",
    path: "/ev",
  },
  {
    title: "Petrol Bikes",
    type: "petrol-bike",
    desc: "Refined engines, powerful stance, and reliable highway performance.",
    path: "/petrol",
  },
  {
    title: "Sports Bikes",
    type: "sports-bike",
    desc: "High-performance sports motorcycles — 500RR and 800RR.",
    path: "/petrol",
  },
];

// // ─── All 12 MiChe Vehicles ────────────────────────────────────────────────────

// export const vehicles = [
//   {
//     id: "thunder-ev",
//     type: "electric-bike",
//     group: "Electric Bikes",
//     name: "MiChe Thunder EV",
//     price: "NPR 4,50,000",
//     image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A premium electric street motorcycle with muscular stance, instant torque, and long-range lithium battery confidence.",
//     stats: { "Battery Range": "150km", "Top Speed": "110km/h", Charging: "3 Hours" },
//     specs: { Battery: "72V lithium-ion", Motor: "9kW peak BLDC", Brakes: "Dual disc CBS", Suspension: "USD front, mono rear", Display: "Smart TFT meter", Weight: "145kg" },
//     features: ["Fast charging", "Ride modes", "LED projector headlamp", "Regenerative braking", "Smart anti-theft", "Mobile charging port"],
//     colors: ["#050505", "#19d7ff", "#d8e0ea", "#33ff99"],
//     emi: "EMI from NPR 12,900/month",
//   },
//   {
//     id: "nova-rx",
//     type: "electric-bike",
//     group: "Electric Bikes",
//     name: "MiChe Nova RX",
//     price: "NPR 3,95,000",
//     image: "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A refined EV commuter for riders who want premium road presence with low running cost.",
//     stats: { "Battery Range": "130km", "Top Speed": "95km/h", Charging: "3.5 Hours" },
//     specs: { Battery: "60V lithium-ion", Motor: "7kW peak BLDC", Brakes: "Disc / drum CBS", Suspension: "Telescopic front", Display: "Digital meter", Weight: "132kg" },
//     features: ["Eco and sport modes", "Reverse assist", "LED lighting", "Comfort seat", "USB port", "Remote lock"],
//     colors: ["#101820", "#ffffff", "#ff244f", "#19d7ff"],
//     emi: "EMI from NPR 11,400/month",
//   },
//   {
//     id: "aero-x",
//     type: "electric-bike",
//     group: "Electric Bikes",
//     name: "MiChe Aero X",
//     price: "NPR 5,20,000",
//     image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981033-0f0309284409?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A high-performance electric bike with aerodynamic bodywork and premium highway stability.",
//     stats: { "Battery Range": "180km", "Top Speed": "120km/h", Charging: "3 Hours" },
//     specs: { Battery: "80V lithium-ion", Motor: "11kW peak BLDC", Brakes: "Dual channel ABS", Suspension: "Sport-tuned mono shock", Display: "Connected TFT", Weight: "154kg" },
//     features: ["ABS braking", "Connected display", "Fast charging", "High torque motor", "LED DRL signature", "Premium split seat"],
//     colors: ["#020304", "#d8e0ea", "#19d7ff", "#ff244f"],
//     emi: "EMI from NPR 14,800/month",
//   },
//   {
//     id: "city-spark",
//     type: "electric-scooter",
//     group: "Electric Scooters",
//     name: "MiChe City Spark",
//     price: "NPR 2,20,000",
//     image: "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1623079404546-6b45e0577893?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A smart electric scooter for quiet Kathmandu commutes, smooth acceleration, and everyday charging ease.",
//     stats: { "Battery Range": "110km", "Top Speed": "75km/h", Charging: "4 Hours" },
//     specs: { Battery: "60V lithium-ion", Motor: "4kW hub motor", Brakes: "Disc / drum CBS", Storage: "Under-seat utility", Display: "Digital cluster", Weight: "98kg" },
//     features: ["Portable charger", "Reverse mode", "LED headlamp", "Anti-theft alarm", "USB charging", "Comfort floorboard"],
//     colors: ["#ffffff", "#050505", "#33ff99", "#19d7ff"],
//     emi: "EMI from NPR 6,800/month",
//   },
//   {
//     id: "metro-glide",
//     type: "electric-scooter",
//     group: "Electric Scooters",
//     name: "MiChe Metro Glide",
//     price: "NPR 2,65,000",
//     image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1623079404546-6b45e0577893?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A premium city EV scooter with polished styling, practical range, and confident braking.",
//     stats: { "Battery Range": "125km", "Top Speed": "82km/h", Charging: "3.8 Hours" },
//     specs: { Battery: "64V lithium-ion", Motor: "5kW hub motor", Brakes: "Front disc CBS", Storage: "24L boot", Display: "Color digital meter", Weight: "104kg" },
//     features: ["Fast charger support", "Riding modes", "LED signature", "Large storage", "Keyless start", "Side-stand sensor"],
//     colors: ["#d8e0ea", "#101820", "#19d7ff", "#ff244f"],
//     emi: "EMI from NPR 7,900/month",
//   },
//   {
//     id: "elegance-e",
//     type: "electric-scooter",
//     group: "Electric Scooters",
//     name: "MiChe Elegance E",
//     price: "NPR 3,10,000",
//     image: "https://images.unsplash.com/photo-1623079404546-6b45e0577893?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1623079404546-6b45e0577893?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A luxury EV scooter with premium details, smooth urban control, and an executive finish.",
//     stats: { "Battery Range": "140km", "Top Speed": "88km/h", Charging: "3.2 Hours" },
//     specs: { Battery: "72V lithium-ion", Motor: "5.8kW hub motor", Brakes: "Disc CBS", Storage: "Premium utility boot", Display: "Smart TFT", Weight: "112kg" },
//     features: ["Smart display", "Fast charging", "Premium seat", "LED indicators", "Hill hold assist", "Remote key"],
//     colors: ["#050505", "#ffffff", "#d8e0ea", "#33ff99"],
//     emi: "EMI from NPR 9,200/month",
//   },
//   {
//     id: "storm-250",
//     type: "petrol-bike",
//     group: "Petrol Bikes",
//     name: "MiChe Storm 250",
//     price: "NPR 3,35,000",
//     image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A confident petrol bike with refined throttle response, premium stance, and strong daily reliability.",
//     stats: { "Engine CC": "250cc", Mileage: "42km/l", "Fuel Tank": "14L" },
//     specs: { Engine: "250cc FI", Power: "18.5HP", Brakes: "Disc CBS", Suspension: "Telescopic front", Transmission: "5-speed", Weight: "148kg" },
//     features: ["Fuel injection", "LED headlamp", "Comfort seat", "Digital meter", "Tubeless tires", "CBS braking"],
//     colors: ["#050505", "#ff244f", "#d8e0ea", "#19d7ff"],
//     emi: "EMI from NPR 9,900/month",
//   },
//   {
//     id: "titan-400",
//     type: "petrol-bike",
//     group: "Petrol Bikes",
//     name: "MiChe Titan 400",
//     price: "NPR 5,75,000",
//     image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A muscular mid-capacity petrol motorcycle for highway riding and premium showroom presence.",
//     stats: { "Engine CC": "400cc", Mileage: "35km/l", "Fuel Tank": "16L" },
//     specs: { Engine: "400cc liquid cooled", Power: "32HP", Brakes: "Dual disc ABS", Suspension: "USD fork", Transmission: "6-speed", Weight: "172kg" },
//     features: ["Dual channel ABS", "Liquid cooling", "LED lighting", "Sport tires", "Premium exhaust", "Split seat"],
//     colors: ["#020304", "#d8e0ea", "#ff244f", "#19d7ff"],
//     emi: "EMI from NPR 16,400/month",
//   },
//   {
//     id: "rider-150",
//     type: "petrol-bike",
//     group: "Petrol Bikes",
//     name: "MiChe Rider 150",
//     price: "NPR 2,45,000",
//     image: "https://images.unsplash.com/photo-1558981001-7926b987cfe6?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1558981001-7926b987cfe6?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A premium commuter petrol bike with efficient mileage, sharp design, and easy city handling.",
//     stats: { "Engine CC": "150cc", Mileage: "48km/l", "Fuel Tank": "12L" },
//     specs: { Engine: "150cc DTS", Power: "13.5HP", Brakes: "Front disc CBS", Suspension: "Hydraulic rear", Transmission: "5-speed", Weight: "132kg" },
//     features: ["High mileage tuning", "LED DRL", "Digital speedometer", "Tubeless tires", "Comfort suspension", "Low maintenance"],
//     colors: ["#ffffff", "#050505", "#ff244f", "#19d7ff"],
//     emi: "EMI from NPR 7,300/month",
//   },
//   {
//     id: "swift-125",
//     type: "petrol-scooter",
//     group: "Petrol Scooters",
//     name: "MiChe Swift 125",
//     price: "NPR 2,15,000",
//     image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1623079404546-6b45e0577893?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A practical petrol scooter with elegant design, strong mileage, and comfortable daily mobility.",
//     stats: { "Engine CC": "125cc", Mileage: "52km/l", "Fuel Tank": "5.5L" },
//     specs: { Engine: "125cc air cooled", Power: "8.7HP", Brakes: "CBS", Storage: "21L under-seat", Transmission: "CVT", Weight: "106kg" },
//     features: ["CVT smoothness", "Front utility hook", "LED lamp", "CBS braking", "Large floorboard", "External fuel lid"],
//     colors: ["#ffffff", "#050505", "#d8e0ea", "#ff244f"],
//     emi: "EMI from NPR 6,500/month",
//   },
//   {
//     id: "royal-150",
//     type: "petrol-scooter",
//     group: "Petrol Scooters",
//     name: "MiChe Royal 150",
//     price: "NPR 2,70,000",
//     image: "https://images.unsplash.com/photo-1623079404546-6b45e0577893?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1623079404546-6b45e0577893?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A premium petrol scooter with stronger engine feel, classic proportions, and high comfort.",
//     stats: { "Engine CC": "150cc", Mileage: "45km/l", "Fuel Tank": "6L" },
//     specs: { Engine: "150cc FI", Power: "10.8HP", Brakes: "Front disc CBS", Storage: "22L boot", Transmission: "CVT", Weight: "118kg" },
//     features: ["Fuel injection", "Premium seat", "LED indicators", "Disc brake", "Chrome accents", "Digital analog cluster"],
//     colors: ["#050505", "#d8e0ea", "#ffffff", "#19d7ff"],
//     emi: "EMI from NPR 8,100/month",
//   },
//   {
//     id: "urban-110",
//     type: "petrol-scooter",
//     group: "Petrol Scooters",
//     name: "MiChe Urban 110",
//     price: "NPR 1,85,000",
//     image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1500&q=90",
//     gallery: [
//       "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1500&q=90",
//       "https://images.unsplash.com/photo-1623079404546-6b45e0577893?auto=format&fit=crop&w=1500&q=90",
//     ],
//     summary: "A lightweight petrol scooter tuned for fuel efficiency, easy parking, and simple ownership.",
//     stats: { "Engine CC": "110cc", Mileage: "58km/l", "Fuel Tank": "5L" },
//     specs: { Engine: "110cc air cooled", Power: "7.6HP", Brakes: "Drum CBS", Storage: "18L boot", Transmission: "CVT", Weight: "96kg" },
//     features: ["Best mileage tuning", "Lightweight body", "Easy start", "CBS braking", "Comfort seat", "Low service cost"],
//     colors: ["#ffffff", "#050505", "#33ff99", "#ff244f"],
//     emi: "EMI from NPR 5,700/month",
//   },
// ];

// // ─── Blog / News Data ─────────────────────────────────────────────────────────

// export const blogs = [
//   {
//     title: "MiChe International (Tonglu Miche Technology Co., Ltd.)",
//     image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
//     body: "Driving Innovation Across Industries",
//     bullets: ["Established April 6, 2023", "Registered Capital: RMB 10 Million", "Headquarters in Hangzhou, Zhejiang, China", "Software, automotive, EV expansion, machinery, consulting, logistics, and sustainable innovation"],
//     link: "https://www.mc-carworld.com/abouts.html",
//   },
//   {
//     title: "MiChe Headquarters Building",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
//     body: "D-8, Tianxi Road 278, Fenshui Town, Tonglu County, Hangzhou, Zhejiang Province, China",
//     bullets: ["Premium office showcase", "Corporate building gallery", "Elegant business presentation"],
//   },
//   {
//     title: "Hangzhou Office",
//     image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
//     body: "Intelligent Information Industrial Park, No. 108 Xiangyuan Road, Gongshu District, Hangzhou, Zhejiang, China",
//     bullets: ["Technology office", "Innovation strategy", "Business growth support"],
//     link: "https://www.mc-carworld.com/abouts.html",
//   },
//   {
//     title: "Hong Kong Office",
//     image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1000&q=85",
//     body: "HONG KONG VERSATILE TRADING CO., LIMITED, Rm 1607, Trend Centre, 29-31 Cheung Lee Street, Chai Wan, Hong Kong",
//     bullets: ["International trading", "Regional business presence", "Corporate network"],
//   },
//   {
//     title: "Zhejiang Office",
//     image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1000&q=85",
//     body: "D-8, Tianxi Road 278 and Intelligent Information Industrial Park, No. 108 Xiangyuan Road, Hangzhou, Zhejiang, China",
//     bullets: ["Dual office locations", "Manufacturing and technology coordination", "Sustainable innovation"],
//   },
//   {
//     title: "Dubai Office",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
//     body: "MICHE TRADING FZCO, LB05121, Jebel Ali Free Zone, Dubai, United Arab Emirates",
//     bullets: ["Middle East business base", "Logistics and support services", "Global business growth"],
//   },
// ];

// // ─── Category Definitions ─────────────────────────────────────────────────────

// export const categories = [
//   { title: "Electric Bikes", type: "electric-bike", desc: "Premium EV motorcycles with instant torque and long battery life.", path: "/ev" },
//   { title: "Electric Scooters", type: "electric-scooter", desc: "Fast charging city scooters for efficient daily Nepal mobility.", path: "/ev" },
//   { title: "Petrol Bikes", type: "petrol-bike", desc: "Refined engines, powerful stance, and reliable highway performance.", path: "/petrol" },
//   { title: "Petrol Scooters", type: "petrol-scooter", desc: "Comfortable, efficient scooters with premium practicality.", path: "/petrol" },
// ];
