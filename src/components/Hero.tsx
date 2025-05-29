import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import TreeVisualization from "./TreeVisualization";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Откройте историю{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                своей семьи
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Сервис «Семейные корни» поможет вам создать подробное семейное
              древо, сохранить важные воспоминания и открыть новые страницы
              истории вашего рода.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/create-tree">
                  Построить древо
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/30 hover:bg-primary/5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/archives">
                  <Icon name="Archive" size={20} className="mr-2" />
                  Найти предка
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square md:aspect-[4/5] relative">
              {/* Современный фон с градиентом */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm"></div>

              <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="family-tree-visual w-full h-full relative bg-gradient-to-br from-white/90 to-white/70 rounded-2xl p-6 shadow-2xl border border-white/20">
                  <TreeVisualization
                    showDemo={true}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Современные декоративные элементы */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-secondary/10 to-pink-500/10 rounded-full filter blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full filter blur-2xl -z-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Hero;
