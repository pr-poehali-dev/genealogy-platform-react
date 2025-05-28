import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 border border-primary-foreground/30 rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Начните сохранять историю
          </h2>
          <p className="font-opensans text-xl mb-8 opacity-90 leading-relaxed">
            Присоединяйтесь к тысячам семей, которые уже создают цифровые архивы
            для будущих поколений. Первое древо — бесплатно!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-full"
            >
              🚀 Создать бесплатное древо
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg transition-all duration-300 rounded-full"
            >
              📞 Связаться с нами
            </Button>
          </div>

          <div className="mt-8 font-opensans text-sm opacity-75">
            ✨ Без рекламы • 🔒 Приватность гарантирована • 💯 30 дней возврата
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
