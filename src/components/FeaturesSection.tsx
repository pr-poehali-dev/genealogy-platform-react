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
      icon: "TreePine",
      title: "Конструктор древ",
      description:
        "Интуитивный редактор с поддержкой фото, видео и документов. Создавайте красивые визуальные родословные с анимированными переходами",
    },
    {
      icon: "FolderOpen",
      title: "Цифровой архив",
      description:
        "Облачное хранилище с шифрованием данных. Сохраняйте семейные фотографии, документы и видеозаписи навсегда",
    },
    {
      icon: "Users",
      title: "Совместная работа",
      description:
        "Приглашайте родственников для совместного редактирования древа в режиме реального времени с чатом и комментариями",
    },
    {
      icon: "Shield",
      title: "Приватность",
      description:
        "Настраиваемые уровни доступа: публичное, приватное или по ссылке. Ваши данные под надежной защитой",
    },
    {
      icon: "Trophy",
      title: "Геймификация",
      description:
        "Изучайте генеалогию через квесты и достижения. Получайте награды за исследование семейной истории",
    },
    {
      icon: "Download",
      title: "GEDCOM экспорт",
      description:
        "Экспортируйте данные в стандартном формате GEDCOM для совместимости с другими генеалогическими программами",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Всё для вашей генеалогии
          </h2>
          <p className="font-opensans text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные инструменты для сохранения и изучения семейной истории в
            одной платформе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 animate-slide-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon
                      name={feature.icon}
                      size={32}
                      className="text-tree-bark"
                    />
                  </div>
                </div>
                <CardTitle className="font-playfair text-xl font-semibold text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-opensans text-center text-muted-foreground leading-relaxed">
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
