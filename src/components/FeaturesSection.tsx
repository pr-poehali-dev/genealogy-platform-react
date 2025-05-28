import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🌳",
      title: "Интерактивные древа",
      description:
        "Создавайте красивые визуальные генеалогические древа с drag-and-drop редактором и анимированными переходами",
    },
    {
      icon: "📱",
      title: "Мобильная версия",
      description:
        "Работайте с семейной историей в любом месте благодаря полностью адаптивному дизайну",
    },
    {
      icon: "🤝",
      title: "Совместное редактирование",
      description:
        "Приглашайте родственников для совместной работы над древом в режиме реального времени",
    },
    {
      icon: "💾",
      title: "GEDCOM экспорт",
      description:
        "Экспортируйте данные в стандартном формате GEDCOM для совместимости с другими программами",
    },
    {
      icon: "📸",
      title: "Медиаархив",
      description:
        "Сохраняйте фотографии, документы и аудиозаписи, связанные с каждым членом семьи",
    },
    {
      icon: "🎓",
      title: "Обучающие квесты",
      description:
        "Изучайте генеалогию через интерактивные задания и образовательные материалы",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Всё для вашей генеалогии
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные инструменты для сохранения и изучения семейной истории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
