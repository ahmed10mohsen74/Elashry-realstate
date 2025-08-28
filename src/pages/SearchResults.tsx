import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Car as CarIcon, Hotel as HotelIcon, Users, Fuel, Settings } from "lucide-react";
import { mockHotels, mockCars, type Hotel, type Car } from "@/data/mockData";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filteredResults, setFilteredResults] = useState<(Hotel | Car)[]>([]);
  
  const type = searchParams.get("type") || "hotels";
  const city = searchParams.get("city") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = searchParams.get("guests") || "";
  const carType = searchParams.get("carType") || "";

  useEffect(() => {
    if (type === "hotels") {
      const filtered = mockHotels.filter(hotel => 
        !city || hotel.city === city
      );
      setFilteredResults(filtered);
    } else {
      const filtered = mockCars.filter(car => 
        (!city || car.city === city) &&
        (!carType || car.type === carType)
      );
      setFilteredResults(filtered);
    }
  }, [type, city, carType]);

  const handleItemClick = (item: Hotel | Car) => {
    if (type === "hotels") {
      navigate(`/hotel/${item.id}`, {
        state: { checkIn, checkOut, guests }
      });
    } else {
      navigate(`/car-booking/${item.id}`, {
        state: { checkIn, checkOut }
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            نتائج البحث عن {type === "hotels" ? "الفنادق" : "السيارات"}
          </h1>
          <div className="flex flex-wrap gap-2 text-muted-foreground">
            {city && <Badge variant="secondary">المدينة: {city}</Badge>}
            {checkIn && <Badge variant="secondary">من: {checkIn}</Badge>}
            {checkOut && <Badge variant="secondary">إلى: {checkOut}</Badge>}
            {guests && <Badge variant="secondary">الأشخاص: {guests}</Badge>}
            {carType && <Badge variant="secondary">نوع السيارة: {carType}</Badge>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleItemClick(item)}>
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                  {type === "hotels" ? (
                    <HotelIcon className="w-16 h-16 text-primary" />
                  ) : (
                    <CarIcon className="w-16 h-16 text-primary" />
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 text-right">{item.name}</CardTitle>
                
                <div className="flex items-center gap-2 mb-2 justify-end">
                  <span className="text-sm text-muted-foreground">{item.city}</span>
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <div className="flex items-center gap-2 mb-3 justify-end">
                  <span className="text-sm">{item.rating}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>

                {type === "cars" && (
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 justify-end text-sm">
                      <span>{(item as Car).fuelType}</span>
                      <Fuel className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-2 justify-end text-sm">
                      <span>{(item as Car).transmission}</span>
                      <Settings className="w-4 h-4" />
                    </div>
                  </div>
                )}

                {"amenities" in item && (
                  <div className="space-y-1 mb-3">
                    {item.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs mr-1">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                )}

                {"features" in item && (
                  <div className="space-y-1 mb-3">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs mr-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Button variant="outline" size="sm">
                  {type === "hotels" ? "عرض الغرف" : "احجز الآن"}
                </Button>
                <div className="text-left">
                  <div className="text-2xl font-bold text-primary">{item.price} جنيه</div>
                  <div className="text-sm text-muted-foreground">
                    {type === "hotels" ? "/ ليلة" : "/ يوم"}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg">
              لا توجد نتائج مطابقة لبحثك
            </div>
            <Button 
              onClick={() => navigate("/")} 
              className="mt-4"
              variant="outline"
            >
              العودة للبحث
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;