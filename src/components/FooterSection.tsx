const FooterSection = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-display text-xl uppercase tracking-wider text-foreground">
        Do Básico ao Avançado
      </p>
      <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default FooterSection;
