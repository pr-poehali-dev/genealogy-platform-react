import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 border border-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Откройте историю
            <span className="block text-accent">вашей семьи</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Создавайте интерактивные генеалогические древа, сохраняйте семейные
            истории и делитесь ими с родными в современной цифровой платформе
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              🌳 Начать создание древа
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300"
            >
              📚 Узнать больше
            </Button>
          </div>
        </div>

        {/* Статистика */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50,000+</div>
            <div className="text-muted-foreground">Семейных древ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2M+</div>
            <div className="text-muted-foreground">Сохраненных историй</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">15</div>
            <div className="text-muted-foreground">Поколений глубины</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
