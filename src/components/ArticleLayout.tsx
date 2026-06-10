import { ReactNode } from "react";
import { Calendar, Clock, User, Share2, BookmarkPlus } from "lucide-react";

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  children: ReactNode;
  ctaUrl?: string;
  ctaText?: string;
  ctaClassName?: string;
}

export const ArticleLayout = ({
  title,
  subtitle,
  author,
  publishDate,
  readTime,
  category,
  children,
  ctaUrl = "#",
  ctaText = "Saiba Mais",
  ctaClassName = ""
}: ArticleLayoutProps) => {
  return (
    <article className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-12">
      {/* Article Header */}
      <header className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-news-primary text-news-primary-foreground px-3 py-1 text-sm font-semibold tracking-wide rounded">
            {category}
          </span>
          <span className="breaking-badge">
            Exclusivo
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-headline-primary leading-tight mb-4">
          {title}
        </h1>

        {subtitle && (
          <h2 className="text-xl md:text-2xl text-headline-secondary font-medium leading-relaxed mb-6">
            {subtitle}
          </h2>
        )}

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-section-divider">
          <div className="flex items-center gap-2 article-meta">
            <User className="w-4 h-4" />
            <span className="font-medium">{author}</span>
          </div>
          
          <div className="flex items-center gap-2 article-meta">
            <Calendar className="w-4 h-4" />
            <span>{publishDate}</span>
          </div>
          
          <div className="flex items-center gap-2 article-meta">
            <Clock className="w-4 h-4" />
            <span>{readTime} de leitura</span>
          </div>

          {/* Social Actions */}
          <div className="ml-auto flex items-center gap-3">
            <button className="flex items-center gap-1 text-meta-text hover:text-body-text transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Compartilhar</span>
            </button>
            <button className="flex items-center gap-1 text-meta-text hover:text-body-text transition-colors">
              <BookmarkPlus className="w-4 h-4" />
              <span className="text-sm">Salvar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg md:prose-xl max-w-none">
        <div className="text-body-text leading-relaxed space-y-6 md:space-y-8 text-base md:text-lg">
          {children}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 p-8 bg-gradient-to-r from-article-bg to-background rounded-lg border border-border-light">
        <div className="text-center">
          <h3 className="text-2xl font-headline font-semibold text-headline-primary mb-4">
            Interessado em saber mais?
          </h3>
          <p className="text-body-text mb-6 max-w-2xl mx-auto">
            Acesse o site oficial para obter informações completas e detalhadas sobre esta descoberta médica.
          </p>
          <a 
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block cta-button ${ctaClassName}`}
          >
            {ctaText}
          </a>
        </div>
      </div>

      {/* Article Footer */}
      <footer className="mt-8 pt-6 border-t border-section-divider">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="article-meta">
            <p>Fonte: Portal Saúde em Foco • Verificado por especialistas médicos</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="article-meta">Artigo #{Math.floor(Math.random() * 1000) + 5000}</span>
            <span className="article-meta">ISSN: 2789-{Math.floor(Math.random() * 9999) + 1000}</span>
          </div>
        </div>
      </footer>
    </article>
  );
};