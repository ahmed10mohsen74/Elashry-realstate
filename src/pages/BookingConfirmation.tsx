import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail, Phone } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { 
    type, 
    item, 
    room, 
    checkIn, 
    checkOut, 
    guests, 
    days, 
    totalPrice, 
    paymentMethod, 
    customerInfo 
  } = location.state || {};

  if (!item || !customerInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">خطأ في بيانات التأكيد</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            العودة للرئيسية
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const bookingId = `${type.toUpperCase()}-${Date.now()}`;

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case "card": return "بطاقة ائتمان/خصم";
      case "bank": return "تحويل بنكي";
      case "cash": return "الدفع عند الوصول";
      default: return method;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-600 mb-2">تم تأكيد الحجز بنجاح!</h1>
            <p className="text-muted-foreground">
              شكراً لك! تم إرسال تفاصيل الحجز إلى بريدك الإلكتروني
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  تفاصيل الحجز
                  <span className="text-sm font-normal bg-primary/10 px-2 py-1 rounded">
                    #{bookingId}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-muted-foreground">{item.city}</p>
                  {room && <p className="text-sm bg-muted px-2 py-1 rounded mt-1">{room.type}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {checkIn && (
                    <div>
                      <span className="font-semibold block">تاريخ الوصول</span>
                      <span className="text-muted-foreground">{checkIn}</span>
                    </div>
                  )}
                  {checkOut && (
                    <div>
                      <span className="font-semibold block">تاريخ {type === "hotels" ? "المغادرة" : "الإرجاع"}</span>
                      <span className="text-muted-foreground">{checkOut}</span>
                    </div>
                  )}
                  {guests && (
                    <div>
                      <span className="font-semibold block">عدد الأشخاص</span>
                      <span className="text-muted-foreground">{guests}</span>
                    </div>
                  )}
                  {days && (
                    <div>
                      <span className="font-semibold block">عدد الأيام</span>
                      <span className="text-muted-foreground">{days}</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">طريقة الدفع:</span>
                    <span>{getPaymentMethodText(paymentMethod)}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold mt-2">
                    <span>المجموع المدفوع:</span>
                    <span className="text-green-600">{totalPrice} جنيه</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Info */}
            <Card>
              <CardHeader>
                <CardTitle>بيانات العميل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-semibold block">الاسم الكامل</span>
                  <span className="text-muted-foreground">{customerInfo.name}</span>
                </div>
                
                <div>
                  <span className="font-semibold block">البريد الإلكتروني</span>
                  <span className="text-muted-foreground">{customerInfo.email}</span>
                </div>
                
                <div>
                  <span className="font-semibold block">رقم الهاتف</span>
                  <span className="text-muted-foreground">{customerInfo.phone}</span>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">خطوات مهمة:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• احتفظ برقم الحجز للمراجعة</li>
                    <li>• ستصلك رسالة تأكيد على البريد الإلكتروني</li>
                    <li>• يمكنك الاتصال بنا لأي استفسارات</li>
                    {paymentMethod === "cash" && (
                      <li>• يرجى إحضار هوية شخصية عند {type === "hotels" ? "الوصول" : "الاستلام"}</li>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              تحميل تأكيد الحجز
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              إرسال نسخة إضافية
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              اتصل بنا
            </Button>
          </div>

          {/* Contact Info */}
          <Card className="mt-8 bg-primary/5">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">هل تحتاج مساعدة؟</h3>
              <p className="text-muted-foreground mb-4">
                فريق خدمة العملاء متاح 24/7 لمساعدتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <span>📞 01234567890</span>
                <span>📧 support@easyrent.com</span>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button onClick={() => navigate("/")} size="lg">
              العودة للرئيسية
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingConfirmation;