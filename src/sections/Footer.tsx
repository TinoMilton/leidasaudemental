import { Link, useLocation } from 'react-router-dom';
import { Brain, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Sobre a Lei', href: '#sobre' },
  { label: 'Requisitos', href: '#requisitos' },
  { label: 'Adequação', href: '#adequacao' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
];

const resources = [
  { label: 'Guia de Adequação', href: '#' },
  { label: 'Checklist de Requisitos', href: '#' },
  { label: 'Modelos de Documentos', href: '#' },
  { label: 'Perguntas Frequentes', href: '#faq' },
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
];

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      if (isHomePage) {
        e.preventDefault();
        scrollToSection(href);
      }
      // Se não estiver na home, o Link vai redirecionar para / com a âncora
    }
  };

  return (
    <footer className="bg-[#2D4A3A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 rounded-lg bg-[#4A7C59] flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">
                Lei da Saúde <span className="text-[#8FBC8F]">Mental</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Especialistas em adequação à Lei 14.831/2024. Ajudamos empresas a
              criarem ambientes de trabalho mais saudáveis e produtivos.
            </p>
            {/* Social Links 
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-[#4A7C59] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={`/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/70 hover:text-[#8FBC8F] transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-[#8FBC8F] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Recursos</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.href.startsWith('#') ? `/${resource.href}` : resource.href}
                    onClick={(e) => handleNavClick(e, resource.href)}
                    className="text-white/70 hover:text-[#8FBC8F] transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-[#8FBC8F] transition-all duration-300 group-hover:w-3" />
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter 
          <div>
            <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Receba atualizações sobre saúde mental no trabalho e novidades da
              legislação.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-[#4A7C59] text-white font-semibold text-sm hover:bg-[#3d6b4a] transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
          */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Lei da Saúde Mental. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacidade"
                className="text-white/50 hover:text-white/70 text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <a
                href="#"
                className="text-white/50 hover:text-white/70 text-sm transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
