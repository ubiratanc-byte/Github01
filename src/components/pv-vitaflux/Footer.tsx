const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-dark via-brand-dark/98 to-brand-dark text-brand-dark-foreground py-12 md:py-20 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-blue/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center justify-center space-x-3 md:space-x-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">Vita</span>{" "}
                  <span className="bg-gradient-to-r from-brand-blue to-brand-accent bg-clip-text text-transparent">Flux</span>
                </h3>
                <p className="text-brand-gold/80 text-xs md:text-sm font-bold tracking-wider">SUPLEMENTO ALIMENTAR</p>
              </div>
            </div>
            
            <p className="text-brand-silver leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
              Fórmula 6 em 1 com ingredientes naturais cientificamente comprovados para o suporte à saúde da próstata.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-gold/20 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-brand-silver text-center md:text-left">
            <p className="text-base md:text-lg font-medium">© 2025 <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent font-bold">Vita Flux</span>. Todos os direitos reservados.</p>
            
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
              <a href="#" className="hover:text-brand-gold transition-colors font-medium text-sm md:text-lg">Termos de Uso</a>
              <a href="#" className="hover:text-brand-gold transition-colors font-medium text-sm md:text-lg">Política de Privacidade</a>
              <a href="mailto:synecaps@gmail.com" className="hover:text-brand-gold transition-colors font-medium text-sm md:text-lg">SUPORTE - synecaps@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
