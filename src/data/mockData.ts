export const egyptianCities = [
  "القاهرة",
  "الإسكندرية", 
  "الجيزة",
  "شرم الشيخ",
  "الغردقة",
  "أسوان",
  "الأقصر",
  "طنطا",
  "المنصورة",
  "الزقازيق",
  "أسيوط",
  "الفيوم",
  "بنها",
  "الإسماعيلية",
  "دمياط",
  "كفر الشيخ",
  "قنا",
  "سوهاج",
  "المنيا",
  "بني سويف",
  "العريش",
  "مرسى مطروح",
  "السويس",
  "بورسعيد",
  "دهب",
  "نويبع",
  "رأس غارب",
  "الشلاتين"
];

export const carTypes = [
  "سيارة اقتصادية",
  "سيارة متوسطة", 
  "سيارة فاخرة",
  "سيارة رياضية",
  "سيارة عائلية (7 مقاعد)",
  "سيارة دفع رباعي",
  "حافلة صغيرة (12 مقعد)",
  "سيارة كهربائية",
  "سيارة مكشوفة",
  "سيارة تجارية"
];

export interface Hotel {
  id: string;
  name: string;
  city: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
  rooms: Room[];
}

export interface Room {
  id: string;
  type: string;
  price: number;
  available: boolean;
  capacity: number;
  features: string[];
}

export interface Car {
  id: string;
  name: string;
  type: string;
  city: string;
  price: number;
  rating: number;
  image: string;
  features: string[];
  fuelType: string;
  transmission: string;
}

export const mockHotels: Hotel[] = [
  {
    id: "1",
    name: "فندق النيل الذهبي",
    city: "القاهرة",
    price: 150,
    rating: 4.5,
    image: "/src/assets/hero-hotel.jpg",
    description: "فندق فاخر في قلب القاهرة مع إطلالة على النيل",
    amenities: ["واي فاي مجاني", "مسبح", "جيم", "سبا", "موقف سيارات"],
    rooms: [
      {
        id: "r1",
        type: "غرفة مفردة",
        price: 120,
        available: true,
        capacity: 1,
        features: ["واي فاي", "تكييف", "تلفزيون"]
      },
      {
        id: "r2", 
        type: "غرفة مزدوجة",
        price: 150,
        available: true,
        capacity: 2,
        features: ["واي فاي", "تكييف", "تلفزيون", "بلكونة"]
      },
      {
        id: "r3",
        type: "جناح ملكي",
        price: 300,
        available: false,
        capacity: 4,
        features: ["واي فاي", "تكييف", "تلفزيون", "بلكونة", "جاكوزي"]
      }
    ]
  },
  {
    id: "2",
    name: "منتجع الهرم الذهبي",
    city: "الجيزة",
    price: 200,
    rating: 4.7,
    image: "/src/assets/hero-hotel.jpg",
    description: "منتجع رائع بإطلالة على الأهرامات",
    amenities: ["واي فاي مجاني", "مسبح", "مطعم", "حديقة"],
    rooms: [
      {
        id: "r4",
        type: "غرفة عادية",
        price: 180,
        available: true,
        capacity: 2,
        features: ["واي فاي", "تكييف", "إطلالة على الأهرامات"]
      },
      {
        id: "r5",
        type: "جناح عائلي",
        price: 350,
        available: true,
        capacity: 6,
        features: ["واي فاي", "تكييف", "غرفة معيشة", "مطبخ صغير"]
      }
    ]
  },
  {
    id: "3",
    name: "فندق البحر الأحمر",
    city: "الغردقة",
    price: 120,
    rating: 4.3,
    image: "/src/assets/hero-hotel.jpg",
    description: "فندق على شاطئ البحر الأحمر مع أنشطة مائية",
    amenities: ["شاطئ خاص", "غطس", "رياضات مائية", "بار على البحر"],
    rooms: [
      {
        id: "r6",
        type: "غرفة بإطلالة بحرية",
        price: 140,
        available: true,
        capacity: 2,
        features: ["إطلالة على البحر", "بلكونة", "تكييف"]
      }
    ]
  },
  {
    id: "4",
    name: "فندق الإسكندرية الملكي",
    city: "الإسكندرية",
    price: 110,
    rating: 4.2,
    image: "/src/assets/hero-hotel.jpg",
    description: "فندق تاريخي في وسط الإسكندرية",
    amenities: ["واي فاي مجاني", "مطعم", "قاعة مؤتمرات"],
    rooms: [
      {
        id: "r7",
        type: "غرفة مزدوجة ديلوكس",
        price: 130,
        available: true,
        capacity: 2,
        features: ["تكييف", "حمام رخامي", "تلفزيون"]
      }
    ]
  },
  {
    id: "5",
    name: "منتجع شرم دريم",
    city: "شرم الشيخ",
    price: 180,
    rating: 4.6,
    image: "/src/assets/hero-hotel.jpg",
    description: "منتجع شامل في شرم الشيخ",
    amenities: ["شامل كليًا", "مسابح متعددة", "شاطئ خاص", "أنشطة ترفيهية"],
    rooms: [
      {
        id: "r8",
        type: "غرفة بإطلالة على الحديقة",
        price: 160,
        available: true,
        capacity: 2,
        features: ["بلكونة", "تكييف", "ثلاجة صغيرة"]
      },
      {
        id: "r9",
        type: "فيلا خاصة",
        price: 400,
        available: true,
        capacity: 8,
        features: ["مسبح خاص", "حديقة", "مطبخ كامل"]
      }
    ]
  }
];

export const mockCars: Car[] = [
  {
    id: "c1",
    name: "تويوتا كورولا 2023",
    type: "سيارة اقتصادية",
    city: "القاهرة",
    price: 25,
    rating: 4.4,
    image: "/src/assets/hero-cars.jpg",
    features: ["تكييف", "نظام ملاحة", "بلوتوث"],
    fuelType: "بنزين",
    transmission: "أوتوماتيك"
  },
  {
    id: "c2",
    name: "هيونداي إلنترا 2023",
    type: "سيارة متوسطة",
    city: "الإسكندرية",
    price: 35,
    rating: 4.3,
    image: "/src/assets/hero-cars.jpg",
    features: ["تكييف", "مقاعد جلد", "نوافذ كهربائية"],
    fuelType: "بنزين",
    transmission: "أوتوماتيك"
  },
  {
    id: "c3",
    name: "مرسيدس C200",
    type: "سيارة فاخرة",
    city: "القاهرة",
    price: 80,
    rating: 4.8,
    image: "/src/assets/hero-cars.jpg",
    features: ["مقاعد جلد فاخرة", "نظام صوتي متطور", "فتحة سقف"],
    fuelType: "بنزين",
    transmission: "أوتوماتيك"
  },
  {
    id: "c4",
    name: "تويوتا هايلكس",
    type: "سيارة دفع رباعي",
    city: "الغردقة",
    price: 50,
    rating: 4.5,
    image: "/src/assets/hero-cars.jpg",
    features: ["دفع رباعي", "مناسبة للصحراء", "مساحة تحميل كبيرة"],
    fuelType: "ديزل",
    transmission: "يدوي"
  },
  {
    id: "c5",
    name: "كيا كارنيفال",
    type: "سيارة عائلية (7 مقاعد)",
    city: "الجيزة",
    price: 45,
    rating: 4.2,
    image: "/src/assets/hero-cars.jpg",
    features: ["7 مقاعد", "مساحة واسعة", "أمان عالي"],
    fuelType: "بنزين",
    transmission: "أوتوماتيك"
  },
  {
    id: "c6",
    name: "BMW X3",
    type: "سيارة دفع رباعي",
    city: "شرم الشيخ",
    price: 70,
    rating: 4.7,
    image: "/src/assets/hero-cars.jpg",
    features: ["فاخرة", "دفع رباعي", "تحكم في الجر"],
    fuelType: "بنزين",
    transmission: "أوتوماتيك"
  },
  {
    id: "c7",
    name: "نيسان صني",
    type: "سيارة اقتصادية",
    city: "أسوان",
    price: 20,
    rating: 4.0,
    image: "/src/assets/hero-cars.jpg",
    features: ["اقتصادية في الوقود", "سهلة القيادة"],
    fuelType: "بنزين",
    transmission: "يدوي"
  },
  {
    id: "c8",
    name: "فورد مستانج",
    type: "سيارة رياضية",
    city: "القاهرة",
    price: 120,
    rating: 4.9,
    image: "/src/assets/hero-cars.jpg",
    features: ["محرك قوي", "تصميم رياضي", "أداء عالي"],
    fuelType: "بنزين",
    transmission: "أوتوماتيك"
  }
];