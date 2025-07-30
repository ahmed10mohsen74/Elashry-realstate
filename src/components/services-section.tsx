import { Hotel, Car, Shield, CreditCard, Headphones, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroHotel from "@/assets/hero-hotel.jpg";
import heroCars from "@/assets/hero-cars.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Hotel,
      title: "حجز الفنادق",
      description: "اختر من بين أفضل الفنادق في المنطقة مع أسعار تنافسية وخدمة متميزة",
      features: ["إلغاء مجاني", "دفع آمن", "تأكيد فوري"],
      image: heroHotel
    },
    {
      icon: Car,
      title: "استئجار السيارات",
      description: "سيارات حديثة ونظيفة مع تأمين شامل وخدمة توصيل",
      features: ["تأمين شامل", "توصيل مجاني", "دعم 24/7"],
      image: heroCars
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "حماية وأمان",
      description: "نضمن أمان معلوماتك وحجوزاتك مع أفضل معايير الحماية"
    },
    {
      icon: CreditCard,
      title: "دفع آمن",
      description: "وسائل دفع متعددة وآمنة تناسب جميع العملاء"
    },
    {
      icon: Headphones,
      title: "دعم متواصل",
      description: "فريق دعم متخصص متاح 24/7 لمساعدتك في أي وقت"
    },
    {
      icon: Star,
      title: "جودة مضمونة",
      description: "نختار شركاء موثوقين لضمان أفضل تجربة لعملائنا"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Services Cards */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            خدماتنا المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نوفر لك أفضل الخيارات للسفر والإقامة مع خدمة استثنائية وأسعار منافسة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-right">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-right leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 justify-end">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                   <Link to={service.title === "حجز الفنادق" ? "/hotels" : "/cars"}>
                     <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                       {service.title === "حجز الفنادق" ? "احجز فندقك" : "استأجر سيارة"}
                     </Button>
                   </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">لماذا تختار EasyRent؟</h3>
          <p className="text-muted-foreground">نحن نلتزم بتقديم أفضل تجربة سفر لعملائنا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300 group animate-slide-up">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;