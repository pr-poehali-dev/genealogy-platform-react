import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Icon name="TreePine" size={32} className="text-primary" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-tree-bark rounded-full border-2 border-background"></div>
            </div>
            <h1 className="font-playfair text-2xl font-bold text-primary">
              Семейные корни
            </h1>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Возможности
            </a>
            <a
              href="#education"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Обучение
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Тарифы
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              О нас
            </a>
          </nav>

          {/* Кнопки действий */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary hidden sm:inline-flex"
            >
              Войти
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105">
              Начать бесплатно
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-tree-bark text-tree-bark hover:bg-tree-bark hover:text-white"
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
