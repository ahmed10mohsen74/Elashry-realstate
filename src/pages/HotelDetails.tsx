import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Wifi, Car as CarIcon, Waves, Dumbbell } from "lucide-react";
import { mockHotels, Room } from "@/data/mockData";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useToast } from "@/hooks/use-toast";

const HotelDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  
  const { checkIn, checkOut, guests } = location.state || {};
  const hotel = mockHotels.find(h => h.id === id);

  if (!hotel) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">الفندق غير موجود</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            العودة للرئيسية
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleRoomSelect = (room: Room) => {
    if (!room.available) {
      toast({
        title: "غير متاح",
        description: "هذه الغرفة غير متاحة حاليًا",
        variant: "destructive"
      });
      return;
    }
    setSelectedRoom(room);
  };

  const handleBooking = () => {
    if (!selectedRoom) {
      toast({
        title: "يرجى اختيار غرفة",
        description: "يجب اختيار غرفة أولاً لإتمام الحجز",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "تم إرسال طلب الحجز!",
      description: `تم إرسال طلب حجز ${selectedRoom.type} في ${hotel.name}. سيتم التواصل معك قريباً.`,
    });

    // Navigate to payment
    navigate("/payment", {
      state: {
        type: "hotel",
        item: hotel,
        room: selectedRoom,
        checkIn,
        checkOut,
        guests,
        totalPrice: selectedRoom.price
      }
    });
  };

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("واي فاي")) return <Wifi className="w-4 h-4" />;
    if (amenity.includes("مسبح")) return <Waves className="w-4 h-4" />;
    if (amenity.includes("جيم")) return <Dumbbell className="w-4 h-4" />;
    if (amenity.includes("موقف")) return <CarIcon className="w-4 h-4" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hotel Header */}
        <div className="mb-8">
          <div className="h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary mb-2">{hotel.name}</h1>
              <div className="flex items-center gap-2 justify-center mb-2">
                <span className="text-muted-foreground">{hotel.city}</span>
                <MapPin className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-lg">{hotel.rating}</span>
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6 text-center">{hotel.description}</p>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {hotel.amenities.map((amenity, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-2">
                {getAmenityIcon(amenity)}
                {amenity}
              </Badge>
            ))}
          </div>

          {/* Booking Info */}
          {checkIn && checkOut && (
            <Card className="mb-8 bg-primary/5">
              <CardContent className="p-4">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">تفاصيل الحجز</h3>
                  <div className="flex justify-center gap-4 text-sm">
                    <span>من: {checkIn}</span>
                    <span>إلى: {checkOut}</span>
                    {guests && <span>الأشخاص: {guests}</span>}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Available Rooms */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">الغرف المتاحة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotel.rooms.map((room) => (
              <Card 
                key={room.id} 
                className={`cursor-pointer transition-all ${
                  selectedRoom?.id === room.id 
                    ? "ring-2 ring-primary shadow-lg" 
                    : "hover:shadow-lg"
                } ${!room.available ? "opacity-60" : ""}`}
                onClick={() => handleRoomSelect(room)}
              >
                <CardHeader>
                  <CardTitle className="text-right flex justify-between items-center">
                    <div>
                      {!room.available && (
                        <Badge variant="destructive" className="ml-2">غير متاح</Badge>
                      )}
                      {selectedRoom?.id === room.id && (
                        <Badge variant="default" className="ml-2">مختار</Badge>
                      )}
                    </div>
                    <span>{room.type}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-sm">{room.capacity} أشخاص</span>
                      <Users className="w-4 h-4" />
                    </div>
                    
                    <div className="space-y-1">
                      {room.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs mr-1">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between items-center">
                  <Button 
                    variant={selectedRoom?.id === room.id ? "default" : "outline"} 
                    size="sm"
                    disabled={!room.available}
                  >
                    {selectedRoom?.id === room.id ? "مختار" : "اختر"}
                  </Button>
                  <div className="text-left">
                    <div className="text-xl font-bold text-primary">{room.price} جنيه</div>
                    <div className="text-sm text-muted-foreground">/ ليلة</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Button */}
        <div className="text-center">
          <Button 
            onClick={handleBooking}
            className="px-12 py-3 text-lg"
            disabled={!selectedRoom}
          >
            احجز الآن - {selectedRoom ? `${selectedRoom.price} جنيه` : "اختر غرفة"}
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HotelDetails;