import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "أحمد محمد",
      avatar: "/src/assets/admin.jpg",
      rating: 5,
      comment:
        "تجربة رائعة! الموقع سهل الاستخدام والحجز كان سريع جداً. الفندق كان أفضل من المتوقع والسيارة نظيفة ومريحة.",
      date: "قبل أسبوع",
      service: "حجز فندق + سيارة",
    },
    {
      id: 2,
      name: "فاطمة علي",
      avatar: "/src/assets/admin.jpg",
      rating: 5,
      comment:
        "خدمة عملاء ممتازة! ساعدوني في اختيار أفضل الخيارات المناسبة لميزانيتي. أنصح الجميع بالتعامل معهم.",
      date: "قبل 3 أيام",
      service: "حجز فندق",
    },
    {
      id: 3,
      name: "محمود حسن",
      avatar: "/src/assets/admin.jpg",
      rating: 4,
      comment:
        "منصة ممتازة للمقارنة بين الأسعار. وفرت علي الكثير من الوقت والمال. السيارة كانت بحالة ممتازة.",
      date: "قبل 5 أيام",
      service: "استئجار سيارة",
    },
    {
      id: 4,
      name: "سارة أحمد",
      avatar: "/src/assets/admin.jpg",
      rating: 5,
      comment:
        "أفضل موقع استخدمته للحجوزات! البحث سريع والخيارات متنوعة. الدفع آمن والتأكيد فوري.",
      date: "قبل يومين",
      service: "حجز فندق + سيارة",
    },
    {
      id: 5,
      name: "عمر الشاذلي",
      avatar: "/src/assets/admin.jpg",
      rating: 5,
      comment:
        "تجربة لا تُنسى في شرم الشيخ! الفندق كان رائع والإطلالة خيالية. شكراً للفريق على المساعدة.",
      date: "قبل 4 أيام",
      service: "حجز فندق",
    },
    {
      id: 6,
      name: "نورا محمد",
      avatar: "/src/assets/admin.jpg",
      rating: 4,
      comment:
        "خدمة سريعة ومريحة. أعجبني تنوع الخيارات والشفافية في الأسعار. بالتأكيد سأستخدم الموقع مرة أخرى.",
      date: "قبل 6 أيام",
      service: "استئجار سيارة",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-accent/20 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            آراء عملائنا الكرام
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف تجارب عملائنا الإيجابية وانضم إلى آلاف العملاء الراضين عن خدماتنا
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2 space-x-reverse">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold">4.9</span>
            <span className="text-muted-foreground">من 5 (من 2,847 تقييم)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 ml-3">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${
                          star <= review.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed mb-3">
                  {review.comment}
                </p>
                
                <div className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded inline-block">
                  {review.service}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">15,000+</h3>
            <p className="text-muted-foreground">عميل راضٍ</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">4.9/5</h3>
            <p className="text-muted-foreground">متوسط التقييم</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">98%</h3>
            <p className="text-muted-foreground">نسبة الرضا</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
            <p className="text-muted-foreground">دعم العملاء</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;