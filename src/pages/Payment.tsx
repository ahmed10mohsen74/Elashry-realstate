import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Banknote, Smartphone } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  const { type, item, room, checkIn, checkOut, guests, days, totalPrice } = location.state || {};

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">خطأ في بيانات الحجز</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            العودة للرئيسية
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "يرجى ملء جميع البيانات المطلوبة",
        variant: "destructive"
      });
      return;
    }

    if (paymentMethod === "card" && (!formData.cardNumber || !formData.expiryDate || !formData.cvv)) {
      toast({
        title: "يرجى ملء بيانات البطاقة",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "تم الدفع بنجاح!",
      description: `تم تأكيد حجزك. ستصلك رسالة تأكيد على ${formData.email}`,
    });

    navigate("/booking-confirmation", {
      state: {
        type,
        item,
        room,
        checkIn,
        checkOut,
        guests,
        days,
        totalPrice,
        paymentMethod,
        customerInfo: formData
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">إتمام الدفع</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>ملخص الحجز</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-muted-foreground">{item.city}</p>
                  {room && <p className="text-muted-foreground">{room.type}</p>}
                </div>
                
                <div className="space-y-2">
                  {checkIn && (
                    <div className="flex justify-between">
                      <span>تاريخ الوصول:</span>
                      <span>{checkIn}</span>
                    </div>
                  )}
                  {checkOut && (
                    <div className="flex justify-between">
                      <span>تاريخ {type === "hotels" ? "المغادرة" : "الإرجاع"}:</span>
                      <span>{checkOut}</span>
                    </div>
                  )}
                  {guests && (
                    <div className="flex justify-between">
                      <span>عدد الأشخاص:</span>
                      <span>{guests}</span>
                    </div>
                  )}
                  {days && (
                    <div className="flex justify-between">
                      <span>عدد الأيام:</span>
                      <span>{days}</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>المجموع الكلي:</span>
                    <span className="text-primary">{totalPrice} جنيه</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle>بيانات الدفع</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Info */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">البيانات الشخصية</h3>
                    
                    <div>
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="text-right"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">رقم الهاتف *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="text-right"
                        required
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">طريقة الدفع</h3>
                    
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            بطاقة ائتمان/خصم
                          </div>
                        </SelectItem>
                        <SelectItem value="bank">
                          <div className="flex items-center gap-2">
                            <Banknote className="w-4 h-4" />
                            تحويل بنكي
                          </div>
                        </SelectItem>
                        <SelectItem value="cash">
                          <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4" />
                            الدفع عند الوصول
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Card Details */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <h3 className="font-semibold">بيانات البطاقة</h3>
                      
                      <div>
                        <Label htmlFor="cardNumber">رقم البطاقة *</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">تاريخ الانتهاء *</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">تفاصيل التحويل البنكي</h4>
                      <p className="text-sm text-muted-foreground">
                        سيتم إرسال تفاصيل التحويل البنكي إلى بريدك الإلكتروني بعد التأكيد
                      </p>
                    </div>
                  )}

                  {paymentMethod === "cash" && (
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2">الدفع عند الوصول</h4>
                      <p className="text-sm text-muted-foreground">
                        يمكنك الدفع نقداً عند الوصول أو الاستلام
                      </p>
                    </div>
                  )}

                  <Button type="submit" className="w-full text-lg py-3">
                    تأكيد الدفع - {totalPrice} جنيه
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Payment;