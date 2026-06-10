const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-brand-dark via-brand-dark/98 to-brand-dark backdrop-blur-md border-b border-brand-gold/20">
      <div className="container mx-auto px-4 py-5 md:py-5 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-brand-dark-foreground text-2xl md:text-3xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">Vita</span>{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-accent bg-clip-text text-transparent">Flux</span>
          </h1>
          <p className="text-brand-gold/80 text-xs md:text-sm font-medium tracking-wider">SUPLEMENTO ALIMENTAR</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
