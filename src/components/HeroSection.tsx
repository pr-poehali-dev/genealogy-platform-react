import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted/50 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-tree-bark rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Сохраните историю
            <span className="block text-accent">вашей семьи</span>
            <span className="block text-tree-bark text-4xl md:text-5xl">
              для будущих поколений
            </span>
          </h1>

          <p className="font-opensans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Создавайте интерактивные генеалогические древа, храните семейные
            архивы и делитесь историями в современной цифровой платформе
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-full"
            >
              🌳 Начать бесплатно
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-tree-bark text-tree-bark hover:bg-tree-bark hover:text-white px-8 py-4 text-lg transition-all duration-300 rounded-full"
            >
              📖 Демо-режим
            </Button>
          </div>
        </div>

        {/* Статистика */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="text-center">
            <div className="font-playfair text-3xl font-bold text-accent mb-2">
              50,000+
            </div>
            <div className="font-opensans text-muted-foreground">
              Семейных древ
            </div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-3xl font-bold text-accent mb-2">
              2M+
            </div>
            <div className="font-opensans text-muted-foreground">
              Сохраненных архивов
            </div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-3xl font-bold text-accent mb-2">
              15
            </div>
            <div className="font-opensans text-muted-foreground">
              Поколений глубины
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
