import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Fuel, Settings, Car as CarIcon } from "lucide-react";
import { mockCars } from "@/data/mockData";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useToast } from "@/hooks/use-toast";

const CarBooking = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { checkIn, checkOut } = location.state || {};
  const car = mockCars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">السيارة غير موجودة</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            العودة للرئيسية
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const calculateDays = () => {
    if (!checkIn || !checkOut) return 1;
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, diffDays);
  };

  const days = calculateDays();
  const totalPrice = car.price * days;

  const handleBooking = () => {
    toast({
      title: "تم إرسال طلب الحجز!",
      description: `تم إرسال طلب حجز ${car.name}. سيتم التواصل معك قريباً.`,
    });

    navigate("/payment", {
      state: {
        type: "car",
        item: car,
        checkIn,
        checkOut,
        days,
        totalPrice
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Car Header */}
          <div className="mb-8">
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="h-64 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <CarIcon className="w-24 h-24 text-primary" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    {car.type}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-semibold">الموقع</div>
                    <div className="text-muted-foreground">{car.city}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Fuel className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-semibold">نوع الوقود</div>
                    <div className="text-muted-foreground">{car.fuelType}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-semibold">ناقل الحركة</div>
                    <div className="text-muted-foreground">{car.transmission}</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-lg">{car.rating}</span>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-muted-foreground">تقييم العملاء</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-center">مميزات السيارة</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {car.features.map((feature, index) => (
                      <Badge key={index} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Details */}
          {checkIn && checkOut && (
            <Card className="mb-8 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">تفاصيل الحجز</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-semibold">من</div>
                    <div className="text-muted-foreground">{checkIn}</div>
                  </div>
                  <div>
                    <div className="font-semibold">إلى</div>
                    <div className="text-muted-foreground">{checkOut}</div>
                  </div>
                  <div>
                    <div className="font-semibold">عدد الأيام</div>
                    <div className="text-muted-foreground">{days} يوم</div>
                  </div>
                  <div>
                    <div className="font-semibold">السعر الإجمالي</div>
                    <div className="text-primary text-xl font-bold">{totalPrice} جنيه</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Pricing */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">تفاصيل الأسعار</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>{car.price} جنيه × {days} يوم</span>
                  <span>{totalPrice} جنيه</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
                  <span>المجموع الكلي</span>
                  <span className="text-primary">{totalPrice} جنيه</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Button */}
          <div className="text-center">
            <Button 
              onClick={handleBooking}
              className="px-12 py-3 text-lg"
              size="lg"
            >
              احجز الآن - {totalPrice} جنيه
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CarBooking;