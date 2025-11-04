import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      title: "Математика",
      image: "https://cdn.poehali.dev/projects/a21cfe53-de4e-4407-837b-5a8f7b8d3a5b/files/50eebdc4-8840-427a-b94f-2c4dbc46b7d8.jpg",
      students: "2,450",
      level: "8 класс"
    },
    {
      title: "Физика",
      image: "https://cdn.poehali.dev/projects/a21cfe53-de4e-4407-837b-5a8f7b8d3a5b/files/557be8b3-be18-4db6-8c33-bdf3cc167c77.jpg",
      students: "1,890",
      level: "8 класс"
    },
    {
      title: "Русский язык",
      image: "https://cdn.poehali.dev/projects/a21cfe53-de4e-4407-837b-5a8f7b8d3a5b/files/e541810b-1834-4a5a-ab1c-a9e823f39c6d.jpg",
      students: "3,120",
      level: "8 класс"
    }
  ];

  const stats = [
    { value: "15,000+", label: "Учеников", icon: "Users" },
    { value: "150+", label: "Курсов", icon: "BookOpen" },
    { value: "98%", label: "Результат", icon: "TrendingUp" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduSpace
            </span>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold px-8">
            Войти
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
                ✨ Образовательная платформа №1
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Учись ярко,
                </span>
                <br />
                <span className="text-foreground">
                  достигай больше
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Современная платформа для учеников 8 класса с интерактивными курсами
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-white font-semibold px-8 text-lg h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-105">
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 text-lg h-14 rounded-full">
                  Смотреть курсы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a21cfe53-de4e-4407-837b-5a8f7b8d3a5b/files/e541810b-1834-4a5a-ab1c-a9e823f39c6d.jpg"
                alt="Обучение"
                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <Card 
                key={idx} 
                className="p-8 text-center bg-white/60 backdrop-blur-sm border-2 border-purple-100 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-up rounded-3xl"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name={stat.icon as any} className="text-white" size={32} />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium text-lg">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
              🎯 Популярные курсы
            </Badge>
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Выбери свой курс
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <Card 
                key={idx}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white rounded-3xl animate-scale-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge className="absolute top-4 right-4 bg-white/95 text-foreground font-semibold px-3 py-1">
                    {course.level}
                  </Badge>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{course.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Users" size={18} />
                    <span className="font-medium">{course.students} учеников</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold h-12 rounded-xl transition-all group-hover:shadow-lg">
                    Открыть курс
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Готов начать?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Присоединяйся к тысячам учеников и начни своё образовательное путешествие
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold px-12 text-xl h-16 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
            Зарегистрироваться бесплатно
            <Icon name="Sparkles" className="ml-2" size={24} />
          </Button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-purple-100 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={18} />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduSpace
            </span>
          </div>
          <p className="font-medium">© 2024 EduSpace. Образовательная платформа для 8 класса</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
