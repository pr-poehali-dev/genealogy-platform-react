import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Эффект для отслеживания прокрутки
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Обновленные навигационные ссылки с современными иконками
  const navLinks = [
    { to: "/", text: "Главная", icon: "Home" },
    { to: "/create", text: "Создать древо", icon: "GitBranch" },
    { to: "/templates", text: "Шаблоны", icon: "Layers3" },
    { to: "/gallery", text: "Галерея", icon: "Images" },
    { to: "/help", text: "Помощь", icon: "CircleHelp" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200
      ${
        scrolled
          ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "border-transparent bg-background/0"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Логотип */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-xl font-bold hover:text-primary transition-colors"
        >
          <Icon name="TreePine" size={24} className="text-primary" />
          <span>FamilyTree</span>
        </NavLink>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`
              }
              onClick={closeMenu}
            >
              <Icon name={link.icon} size={16} />
              <span>{link.text}</span>
            </NavLink>
          ))}
        </nav>

        {/* Мобильное меню */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col space-y-4 mt-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg text-base transition-colors
                    ${
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`
                  }
                  onClick={closeMenu}
                >
                  <Icon name={link.icon} size={20} />
                  <span>{link.text}</span>
                </NavLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
