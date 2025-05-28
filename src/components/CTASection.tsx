import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Начните прямо сейчас
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Присоединяйтесь к тысячам семей, которые уже сохраняют свою историю
            для будущих поколений. Первое древо — бесплатно!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              🚀 Создать бесплатное древо
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg transition-all duration-300"
            >
              📞 Связаться с нами
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            ✨ Без рекламы • 🔒 Приватность гарантирована • 💯 30 дней возврата
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
