import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Fuel, Settings } from "lucide-react";
import { mockCars } from "@/data/mockData";
import { Link } from "react-router-dom";

const AllCars = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            جميع السيارات المتاحة
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            اختر من بين مجموعة واسعة من السيارات المتميزة والمناسبة لجميع احتياجاتك
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline">جميع السيارات</Button>
            <Button variant="outline">اقتصادية</Button>
            <Button variant="outline">متوسطة</Button>
            <Button variant="outline">فاخرة</Button>
            <Button variant="outline">عائلية</Button>
            <Button variant="outline">رياضية</Button>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover-scale">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    {car.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm mr-1">{car.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{car.type}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                      <Users className="w-4 h-4 ml-1" />
                      4 مقاعد
                    </div>
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 ml-1" />
                      {car.fuelType}
                    </div>
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 ml-1" />
                      {car.transmission}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{car.price} جنيه</span>
                      <span className="text-sm text-muted-foreground">/يوم</span>
                    </div>
                  </div>

                  <Link to={`/car-booking/${car.id}`}>
                    <Button className="w-full bg-gradient-primary">
                      احجز الآن
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

export default AllCars;