import { useState } from "react";
import { Search, Calendar, MapPin, Users, Car, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { egyptianCities, carTypes } from "@/data/mockData";
import heroHotel from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"hotels" | "cars">("hotels");
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestsOrCarType, setGuestsOrCarType] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!city) {
      alert("يرجى اختيار المدينة");
      return;
    }

    const searchParams = new URLSearchParams({
      type: activeTab,
      city,
      checkIn: checkIn || "",
      checkOut: checkOut || "",
      [activeTab === "hotels" ? "guests" : "carType"]: guestsOrCarType || "",
    });

    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroHotel})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            مرحباً بك في
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              SmartRent
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            اكتشف أفضل الفنادق والسيارات في مصر والشرق الأوسط بأسعار منافسة
            وخدمة استثنائية
          </p>
        </div>

        {/* Search Card */}
        <Card className="max-w-4xl mx-auto p-8 shadow-elegant backdrop-blur-sm bg-white/95 animate-slide-up">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={activeTab === "hotels" ? "default" : "ghost"}
                onClick={() => setActiveTab("hotels")}
                className="flex items-center gap-2 px-6 py-3"
              >
                <Hotel className="w-5 h-5" />
                الفنادق
              </Button>
              <Button
                variant={activeTab === "cars" ? "default" : "ghost"}
                onClick={() => setActiveTab("cars")}
                className="flex items-center gap-2 px-6 py-3"
              >
                <Car className="w-5 h-5" />
                السيارات
              </Button>
            </div>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="pr-12 h-12 text-right">
                  <SelectValue placeholder="اختر المدينة" />
                </SelectTrigger>
                <SelectContent>
                  {egyptianCities.map((cityName) => (
                    <SelectItem key={cityName} value={cityName}>
                      {cityName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
              <Input
                type="date"
                placeholder="من"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="pr-12 h-12"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
              <Input
                type="date"
                placeholder="إلى"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="pr-12 h-12"
              />
            </div>

            <div className="relative">
              <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
              {activeTab === "hotels" ? (
                <Input
                  placeholder="عدد الأشخاص"
                  value={guestsOrCarType}
                  onChange={(e) => setGuestsOrCarType(e.target.value)}
                  className="pr-12 h-12 text-right"
                />
              ) : (
                <Select
                  value={guestsOrCarType}
                  onValueChange={setGuestsOrCarType}
                >
                  <SelectTrigger className="pr-12 h-12 text-right">
                    <SelectValue placeholder="نوع السيارة" />
                  </SelectTrigger>
                  <SelectContent>
                    {carTypes.map((carType) => (
                      <SelectItem key={carType} value={carType}>
                        {carType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>

          <Button
            onClick={handleSearch}
            className="w-full md:w-auto px-12 py-4 text-lg bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Search className="w-5 h-5 ml-2" />
            ابحث الآن
          </Button>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              1000+
            </div>
            <div className="text-white/80">فندق مميز</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              500+
            </div>
            <div className="text-white/80">سيارة متاحة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              50+
            </div>
            <div className="text-white/80">مدينة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              10K+
            </div>
            <div className="text-white/80">عميل سعيد</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
