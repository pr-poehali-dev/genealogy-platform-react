import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialCard = ({
  text,
  author,
  role,
  image,
}: {
  text: string;
  author: string;
  role: string;
  image?: string;
}) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <p className="mb-4 italic">{text}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={image || "/placeholder.svg"} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Отзывы наших пользователей
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Что говорят люди, которые уже сохраняют свою семейную историю
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            text="Благодаря этому сервису я смогла восстановить древо до шестого колена и найти родственников, о которых даже не знала. Интерфейс очень понятный, даже для не очень опытных пользователей."
            author="Елена Смирнова"
            role="Учитель истории"
          />
          <TestimonialCard
            text="Очень удобный интерфейс! За месяц работы удалось создать древо на 4 поколения назад. Особенно понравилась возможность добавлять фотографии и документы к каждой персоне."
            author="Михаил Петров"
            role="Инженер"
          />
          <TestimonialCard
            text="Отличный инструмент для семейного исследования. Функция поиска в архивах помогла найти информацию о прадедушке, которую мы искали много лет. Рекомендую всем, кто интересуется генеалогией."
            author="Анна Козлова"
            role="Историк"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
