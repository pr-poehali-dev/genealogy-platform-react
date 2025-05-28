import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

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
                  {/* Современная визуализация древа */}

                  {/* Главная персона (Вы) - центр */}
                  <div className="absolute left-1/2 bottom-[15%] transform -translate-x-1/2">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-0.5 shadow-2xl animate-pulse">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                            alt="Вы"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <Icon name="User" size={12} className="text-blue-600" />
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold mt-2 text-gray-700">
                      Вы
                    </p>
                  </div>

                  {/* Родители */}
                  <div className="absolute left-[25%] bottom-[45%] transform -translate-x-1/2">
                    <div className="relative">
                      <div className="w-18 h-18 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-xl">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=72&h=72&fit=crop&crop=face"
                            alt="Папа"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white shadow flex items-center justify-center">
                        <Icon name="User" size={10} className="text-blue-600" />
                      </div>
                    </div>
                    <p className="text-center text-xs font-medium mt-1 text-gray-600">
                      Папа
                    </p>
                  </div>

                  <div className="absolute left-[75%] bottom-[45%] transform -translate-x-1/2">
                    <div className="relative">
                      <div className="w-18 h-18 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 p-0.5 shadow-xl">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=72&h=72&fit=crop&crop=face"
                            alt="Мама"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white shadow flex items-center justify-center">
                        <Icon
                          name="UserX"
                          size={10}
                          className="text-pink-600"
                        />
                      </div>
                    </div>
                    <p className="text-center text-xs font-medium mt-1 text-gray-600">
                      Мама
                    </p>
                  </div>

                  {/* Дедушки и бабушки */}
                  <div className="absolute left-[15%] bottom-[75%] transform -translate-x-1/2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <div className="text-emerald-700 font-bold text-xs">
                          ДП
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-[35%] bottom-[75%] transform -translate-x-1/2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <div className="text-rose-700 font-bold text-xs">
                          БП
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-[65%] bottom-[75%] transform -translate-x-1/2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <div className="text-emerald-700 font-bold text-xs">
                          ДМ
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-[85%] bottom-[75%] transform -translate-x-1/2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 p-0.5 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <div className="text-rose-700 font-bold text-xs">
                          БМ
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Современные SVG-соединения */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: 1 }}
                  >
                    <defs>
                      <linearGradient
                        id="connectionGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8B5CF6"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="50%"
                          stopColor="#A855F7"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor="#9333EA"
                          stopOpacity="0.8"
                        />
                      </linearGradient>
                    </defs>

                    {/* Соединения от детей к родителям */}
                    <path
                      d={`M 50% 85% Q 37.5% 65% 25% 55%`}
                      stroke="url(#connectionGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M 50% 85% Q 62.5% 65% 75% 55%`}
                      stroke="url(#connectionGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />

                    {/* Соединения к бабушкам и дедушкам */}
                    <path
                      d={`M 25% 55% Q 20% 35% 15% 25%`}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                    <path
                      d={`M 25% 55% Q 30% 35% 35% 25%`}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                    <path
                      d={`M 75% 55% Q 70% 35% 65% 25%`}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                    <path
                      d={`M 75% 55% Q 80% 35% 85% 25%`}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>

                  {/* Декоративные элементы */}
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Icon name="TreePine" size={24} />
                  </div>
                  <div className="absolute bottom-4 left-4 text-secondary/20">
                    <Icon name="Heart" size={20} />
                  </div>
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
