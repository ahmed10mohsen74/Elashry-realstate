import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, UtensilsCrossed, Waves } from "lucide-react";
import { mockHotels } from "@/data/mockData";
import { Link } from "react-router-dom";

const AllHotels = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            جميع الفنادق المتاحة
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            استكشف مجموعة رائعة من الفنادق المميزة في أجمل الوجهات السياحية
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline">جميع الفنادق</Button>
            <Button variant="outline">⭐⭐⭐⭐⭐</Button>
            <Button variant="outline">⭐⭐⭐⭐</Button>
            <Button variant="outline">⭐⭐⭐</Button>
            <Button variant="outline">القاهرة</Button>
            <Button variant="outline">الغردقة</Button>
            <Button variant="outline">شرم الشيخ</Button>
            <Button variant="outline">الإسكندرية</Button>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover-scale">
                <div className="relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    5 نجوم
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm mr-1">{hotel.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 ml-1" />
                    {hotel.city}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => {
                      const icons = {
                        'واي فاي مجاني': Wifi,
                        'موقف سيارات': Car,
                        'مطعم': UtensilsCrossed,
                        'حمام سباحة': Waves
                      };
                      const Icon = icons[amenity as keyof typeof icons] || Wifi;
                      return (
                        <div key={index} className="flex items-center text-xs bg-accent/50 px-2 py-1 rounded">
                          <Icon className="w-3 h-3 ml-1" />
                          {amenity}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{hotel.price} جنيه</span>
                      <span className="text-sm text-muted-foreground">/ليلة</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      متاح للحجز
                    </span>
                  </div>

                  <Link to={`/hotel/${hotel.id}`}>
                    <Button className="w-full bg-gradient-primary">
                      عرض التفاصيل
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllHotels;