import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    "الفنادق",
    "السيارات",
    "العروض الخاصة",
    "من نحن",
    "شروط الاستخدام",
    "سياسة الخصوصية",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-secondary">SmartRent</div>
            <p className="text-primary-foreground/80 leading-relaxed">
              منصة حجز الفنادق والسيارات الرائدة في مصر والشرق الأوسط. نوفر لك
              أفضل الخيارات بأسعار تنافسية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-primary-foreground/10 hover:bg-secondary p-2 rounded-full transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  +20 127 973 4467
                </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  <a href="mailto:ahmed10mohsen740@gmail.com">
                    ahmed10mohsen740@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">القاهرة، مصر</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">
              النشرة الإخبارية
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              اشترك لتحصل على أحدث العروض والأخبار
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary">
                اشتراك
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-center md:text-right">
              Elashry جميع الحقوق محفوظة
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                شروط الاستخدام
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                سياسة الخصوصية
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
