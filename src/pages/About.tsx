import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "هدفنا",
      description: "توفير تجربة حجز سهلة ومريحة لجميع عملائنا في الشرق الأوسط"
    },
    {
      icon: Users,
      title: "فريقنا",
      description: "فريق محترف من المتخصصين في مجال السياحة والتكنولوجيا"
    },
    {
      icon: Award,
      title: "التميز",
      description: "نسعى لتقديم أفضل الخدمات وأعلى معايير الجودة"
    },
    {
      icon: Heart,
      title: "شغفنا",
      description: "نحب مساعدة الناس في إنشاء ذكريات لا تُنسى"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            من نحن
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            نحن منصة EasyRent، رائدة في مجال حجز الفنادق واستئجار السيارات في الشرق الأوسط
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">قصتنا</h2>
            <p className="text-lg leading-relaxed mb-8">
              بدأت رحلتنا من فكرة بسيطة: جعل السفر أسهل وأكثر متعة للجميع. في عام 2024، أطلقنا منصة EasyRent 
              لتكون الوجهة الأولى للمسافرين في مصر والشرق الأوسط للبحث عن أفضل الفنادق والسيارات بأسعار تنافسية.
            </p>
            <p className="text-lg leading-relaxed">
              اليوم، نفخر بخدمة آلاف العملاء وتوفير شراكات قوية مع أفضل الفنادق وشركات تأجير السيارات في المنطقة.
              نواصل رحلتنا لنكون الخيار الأول والأفضل لكل مسافر.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
              <p className="text-muted-foreground">عميل راضٍ</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">فندق شريك</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
              <p className="text-muted-foreground">شركة سيارات</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">15</h3>
              <p className="text-muted-foreground">محافظة مصرية</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;