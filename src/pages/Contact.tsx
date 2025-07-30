import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "هاتف",
      details: ["+20 100 123 4567", "+20 120 987 6543"]
    },
    {
      icon: Mail,
      title: "بريد إلكتروني",
      details: ["info@easyrent.com", "support@easyrent.com"]
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["شارع التحرير، وسط البلد", "القاهرة، مصر"]
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 9:00 - 18:00", "الجمعة - السبت: 10:00 - 16:00"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            نحن هنا لمساعدتك في أي وقت. تواصل معنا وسنكون سعداء للرد على استفساراتك
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">معلومات التواصل</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <info.icon className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="الاسم الأول" />
                    <Input placeholder="الاسم الأخير" />
                  </div>
                  <Input placeholder="البريد الإلكتروني" type="email" />
                  <Input placeholder="رقم الهاتف" />
                  <Input placeholder="موضوع الرسالة" />
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..." 
                    className="min-h-32"
                  />
                  <Button className="w-full bg-gradient-primary">
                    إرسال الرسالة
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">كيف يمكنني إلغاء الحجز؟</h3>
                <p className="text-muted-foreground">يمكنك إلغاء الحجز من خلال حسابك على المنصة أو بالتواصل مع فريق الدعم.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">هل يمكنني تعديل موعد الحجز؟</h3>
                <p className="text-muted-foreground">نعم، يمكنك تعديل موعد الحجز حسب توفر الغرف أو السيارات.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">ما هي طرق الدفع المتاحة؟</h3>
                <p className="text-muted-foreground">نقبل جميع البطاقات الائتمانية والتحويل البنكي والدفع نقداً عند الوصول.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;