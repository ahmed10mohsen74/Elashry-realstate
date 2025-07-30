import { useState } from "react";
import { Menu, X, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "الفنادق", href: "/hotels" },
    { name: "السيارات", href: "/cars" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Elashry
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" size="sm">
              <Globe className="w-4 h-4 ml-2" />
              العربية
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 ml-2" />
              تسجيل الدخول
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              إنشاء حساب
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent text-center block">
                  EasyRent
                </Link>
                
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-lg text-right py-2 px-4 hover:bg-accent rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button variant="ghost" className="justify-start">
                    <Globe className="w-4 h-4 ml-2" />
                    العربية
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <User className="w-4 h-4 ml-2" />
                    تسجيل الدخول
                  </Button>
                  <Button className="bg-gradient-primary">
                    إنشاء حساب
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;