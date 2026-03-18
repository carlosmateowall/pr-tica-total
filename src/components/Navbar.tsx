const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-5 bg-background/88 backdrop-blur-xl border-b border-border">
    <div className="font-display text-[1.4rem] tracking-[3px] text-foreground">
      MG <span className="text-primary">×</span> IF
    </div>
    <ul className="hidden md:flex items-center gap-8 list-none">
      <li><a href="#professores" className="text-[0.8rem] text-muted-foreground tracking-wider hover:text-foreground transition-colors">Professores</a></li>
      <li><a href="#modulos" className="text-[0.8rem] text-muted-foreground tracking-wider hover:text-foreground transition-colors">Módulos</a></li>
      <li><a href="#para-quem" className="text-[0.8rem] text-muted-foreground tracking-wider hover:text-foreground transition-colors">Para quem</a></li>
      <li>
        <a href="#preco" className="bg-primary text-primary-foreground font-bold text-[0.78rem] tracking-[1.5px] uppercase px-5 py-2.5 rounded-sm hover:brightness-90 transition-all">
          Quero me inscrever
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
