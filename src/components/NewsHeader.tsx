import { Calendar, Clock, User } from "lucide-react";
export const NewsHeader = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return <header className="news-header">
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between text-sm text-news-primary-foreground/80 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="capitalize">{currentDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Atualizado agora</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Edição Digital</span>
            <span>•</span>
            <span>Portal de Saúde</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-news-primary-foreground">
              Saúde em Foco
            </h1>
            <p className="text-news-primary-foreground/90 text-sm mt-1">
              Portal de Informações Médicas e Bem-estar
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="breaking-badge">
              ÚLTIMA HORA
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 pt-4 border-t border-news-primary-foreground/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-news-primary-foreground/90">
              <a href="#" className="hover:text-news-primary-foreground transition-colors font-medium">
                Início
              </a>
              <a href="#" className="hover:text-news-primary-foreground transition-colors">
                Saúde
              </a>
              <a href="#" className="hover:text-news-primary-foreground transition-colors">
                Medicina
              </a>
              <a href="#" className="hover:text-news-primary-foreground transition-colors">
                Pesquisas
              </a>
              
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-news-primary-foreground/80">
              <User className="w-4 h-4" />
              <span className="text-sm">Dr. Ricardo Santos, Editor Médico</span>
            </div>
          </div>
        </nav>
      </div>
    </header>;
};