import { TrendingUp, Users, Award, Clock } from "lucide-react";

export const Sidebar = () => {
  const trendingArticles = [
    { title: "Nova descoberta garante rejuvenescimento articular e o fim das dores", link: "https://gregoverde.fun/gene?utm_source=Advertorial%20Prostata" },
    { title: "Neurologista descobre método simples que acaba com a insônia em 3 dias", link: "https://almalivre.fun/neuro?utm_source=Advertorial%20Prostata" },
    { title: "Pesquisa comprova eficácia de tratamento revolucionário", link: "#" },
    { title: "Especialistas recomendam nova abordagem terapêutica", link: "#" }
  ];

  const stats = [
    { label: "Leitores ativos", value: "847.392", icon: Users },
    { label: "Artigos publicados", value: "2.847", icon: Award },
    { label: "Especialistas", value: "156", icon: TrendingUp },
  ];

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Trending Articles */}
      <div className="news-article p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-news-secondary" />
          <h3 className="font-semibold text-headline-primary">Mais Lidas</h3>
        </div>
        <div className="space-y-4">
          {trendingArticles.map((article, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-news-primary text-news-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <a href={article.link} className="news-link text-sm leading-snug group-hover:text-link-hover">
                  {article.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portal Stats */}
      <div className="news-article p-6">
        <h3 className="font-semibold text-headline-primary mb-4">Portal em Números</h3>
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-news-primary/10 rounded-lg flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-news-primary" />
              </div>
              <div>
                <div className="font-semibold text-headline-primary">{stat.value}</div>
                <div className="text-sm text-meta-text">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="news-article p-6 bg-gradient-to-br from-news-primary/5 to-news-primary/10">
        <h3 className="font-semibold text-headline-primary mb-3">Newsletter Médica</h3>
        <p className="text-sm text-body-text mb-4">
          Receba as últimas descobertas médicas diretamente no seu email.
        </p>
        <div className="space-y-3">
          <input 
            type="email" 
            placeholder="Seu melhor email"
            className="w-full px-3 py-2 border border-border-light rounded focus:outline-none focus:ring-2 focus:ring-news-primary/50"
          />
          <button className="w-full bg-news-primary text-news-primary-foreground py-2 rounded font-medium hover:opacity-90 transition-opacity">
            Inscrever-se
          </button>
        </div>
        <div className="flex items-center gap-1 mt-3 text-xs text-meta-text">
          <Clock className="w-3 h-3" />
          <span>Envios semanais • Sem spam</span>
        </div>
      </div>

    </aside>
  );
};