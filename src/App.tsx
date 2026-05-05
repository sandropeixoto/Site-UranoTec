import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from './components/SEO';
import { 
  Menu, X, ChevronRight, Play, 
  MonitorSmartphone, Eye, Lightbulb, 
  TrendingUp, Users, DollarSign, 
  Award, Settings, Image as ImageIcon, 
  MousePointerClick, Mail, Calendar, 
  Wrench
} from 'lucide-react';

function VideoModal({ isOpen, onClose, videoId }: { isOpen: boolean, onClose: () => void, videoId: string }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`}
              title="YouTube video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary selection:text-surface">
      <SEO 
        title="Urano Inteligência & Tecnologia | Tours Virtuais 360º"
        description="Transformamos espaços físicos em experiências digitais imersivas utilizando tecnologia de ponta em captura e modelagem 3D."
        canonicalUrl="https://urano.tec.br"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Urano Inteligência & Tecnologia",
          "url": "https://urano.tec.br",
          "logo": "https://urano.tec.br/favicon.svg",
          "description": "Transformamos espaços físicos em experiências digitais imersivas.",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contato@urano.tec.br",
            "contactType": "customer service"
          }
        }}
      />
      <VideoModal 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoId={activeVideo || ''} 
      />
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="./favicon.svg" alt="Urano Logo" className="w-8 h-8" />
            <div className="text-2xl font-black tracking-[4px] text-primary uppercase font-headline">Urano</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-widest uppercase text-[10px]">Sobre</a>
            <a href="#servicos" className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-widest uppercase text-[10px]">Serviços</a>
            <a href="#beneficios" className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-widest uppercase text-[10px]">Benefícios</a>
            <a href="#portfolio" className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-widest uppercase text-[10px]">Portfólio</a>
            <a href="#plataforma" className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-widest uppercase text-[10px]">Plataforma</a>
            <a href="#contato" className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-widest uppercase text-[10px]">Contato</a>
          </div>

          <button className="hidden md:block bg-primary text-surface px-6 py-3 rounded-md font-bold font-headline text-xs uppercase tracking-widest hover:opacity-90 transition-all duration-300">
            Fale Conosco
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-on-surface" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant hover:text-primary font-headline">Sobre</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant hover:text-primary font-headline">Serviços</a>
            <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant hover:text-primary font-headline">Benefícios</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant hover:text-primary font-headline">Portfólio</a>
            <a href="#plataforma" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant hover:text-primary font-headline">Plataforma</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant hover:text-primary font-headline">Contato</a>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <FadeIn className="z-10 flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary mb-6">
                <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary">Tecnologia & Inteligência</span>
              </div>
              <h1 className="font-headline text-5xl md:text-6xl font-light tracking-tight text-on-surface leading-[1.1] mb-8">
                Transformamos <b className="font-black text-primary">Espaços Físicos</b> <br/> em Experiências Digitais
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
                Tours virtuais 360º de alto impacto para marketing, vendas e integração de equipes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#contato" className="bg-primary text-surface px-6 py-3 rounded-md font-bold font-headline text-xs uppercase tracking-widest hover:opacity-90 transition-all">
                  AGENDAR DEMONSTRAÇÃO
                </a>
                <a href="#portfolio" className="bg-transparent text-on-surface px-6 py-3 rounded-md font-bold font-headline text-xs uppercase tracking-widest border border-outline-variant hover:bg-surface-container-high transition-all">
                  VER PORTFÓLIO
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative lg:h-[400px] flex items-center justify-center bg-white/5 rounded-[20px] border border-dashed border-outline-variant overflow-hidden group">
              <button 
                onClick={() => setActiveVideo('pT7bQAd4hD0')}
                className="absolute z-20 w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(38,166,136,0.3)] after:content-['PLAY'] after:text-[10px] after:tracking-[2px] after:text-primary after:font-bold cursor-pointer group-hover:scale-110 transition-transform"
              ></button>
              <img 
                src="https://i.ytimg.com/vi/pT7bQAd4hD0/maxresdefault.jpg" 
                alt="Urano Inteligência & Tecnologia - Tour Virtual 360" 
                className="relative z-10 w-full h-full object-cover opacity-50"
              />
              <div className="absolute bottom-5 left-5 text-left z-20">
                <div className="font-bold text-sm text-white">Urano Inteligência & Tecnologia</div>
                <div className="text-[11px] text-on-surface-variant mt-1">Transformamos espaços físicos em experiências digitais imersivas.</div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(38,166,136,1)]"></div>
                <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px]">Sobre a Urano</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface mb-6">Inovação em cada detalhe.</h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8">
                A Urano Inteligência & Tecnologia é uma empresa especializada em inovação digital, oferecendo soluções de tours virtuais 360º para empresas que desejam apresentar seus espaços de forma moderna e acessível. 
              </p>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8">
                Nosso objetivo é proporcionar uma experiência imersiva e interativa, utilizando tecnologia de ponta para conectar clientes e negócios de forma inovadora.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="relative rounded-3xl overflow-hidden aspect-video border border-outline-variant/20 group">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-surface/40 flex items-center justify-center">
                <button 
                  onClick={() => setActiveVideo('pT7bQAd4hD0')}
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-surface hover:scale-110 transition-transform shadow-[0_0_30px_rgba(38,166,136,0.5)]"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-24 px-6">
          <FadeIn className="max-w-7xl mx-auto text-center mb-20 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(38,166,136,1)]"></div>
              <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px]">Nossos Serviços</span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface max-w-3xl mx-auto leading-tight">
              O Tour Virtual 360° é um investimento inteligente
            </h2>
          </FadeIn>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <FadeIn className="relative rounded-3xl overflow-hidden aspect-video border border-outline-variant/20 group">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-surface/40 flex items-center justify-center">
                <button 
                  onClick={() => setActiveVideo('XNsdZ6B76Zw')}
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-surface hover:scale-110 transition-transform shadow-[0_0_30px_rgba(38,166,136,0.5)]"
                >
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col justify-center">
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-6">
                Ele atua como uma plataforma estratégica que gera valor em todas as frentes da sua organização. Para o mercado externo, cria um ambiente de transparência que gera credibilidade imediata, permitindo que investidores e clientes explorem suas instalações com um nível de detalhe impressionante.
              </p>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                Internamente, o "gêmeo digital" do seu espaço se torna uma poderosa ferramenta para gestão, reduzindo custos com deslocamentos e agilizando planejamentos. Por fim, valoriza seu maior patrimônio — as pessoas — ao possibilitar processos de integração e treinamento inovadores.
              </p>
            </FadeIn>
          </div>

          {/* Pacotes */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="bg-surface/70 backdrop-blur-md p-6 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">PUCK</h3>
              <span className="text-primary text-[10px] font-label uppercase tracking-widest mb-4 block">Básico</span>
              <p className="font-body text-sm text-on-surface-variant">Até 10 pontos de vista com interatividade digital.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-surface/70 backdrop-blur-md p-6 rounded-xl border border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-surface text-[9px] font-bold px-2 py-1 rounded-bl uppercase tracking-widest">Mais Popular</div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">OBERON</h3>
              <span className="text-primary text-[10px] font-label uppercase tracking-widest mb-4 block">Médio</span>
              <p className="font-body text-sm text-on-surface-variant">11 a 20 pontos de vista, experiência completa.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-surface/70 backdrop-blur-md p-6 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">TITÂNIA</h3>
              <span className="text-primary text-[10px] font-label uppercase tracking-widest mb-4 block">Avançado</span>
              <p className="font-body text-sm text-on-surface-variant">21 a 30 pontos de vista, máximo nível de imersão.</p>
            </FadeIn>
          </div>
        </section>

        {/* Benefícios Section */}
        <section id="beneficios" className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-20 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(38,166,136,1)]"></div>
                <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px]">Vantagens</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface">Benefícios Exclusivos</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Eye, title: "Experiência Imersiva", desc: "Permita que seus clientes explorem virtualmente os ambientes e detalhes de cada espaço, como se estivessem fisicamente presentes." },
                { icon: MonitorSmartphone, title: "Acessibilidade", desc: "Torne seu espaço acessível a qualquer pessoa, em qualquer lugar e a qualquer hora, diretamente de computadores, smartphones ou tablets." },
                { icon: Lightbulb, title: "Transparência", desc: "Apresente sua estrutura completa com uma clareza que transmite profissionalismo instantâneo e fortalece a confiança." },
                { icon: TrendingUp, title: "Marketing Diferenciado", desc: "Transforme seu tour virtual na peça central do seu marketing digital. Crie posts e anúncios imersivos para redes sociais." },
                { icon: Users, title: "Atração de Novos Clientes", desc: "Conquiste clientes muito além da sua localização física. Apresente seu empreendimento 24 horas por dia para um novo público." },
                { icon: DollarSign, title: "Redução de Custos", desc: "Elimine visitas presenciais improdutivas. Otimize a agenda da sua equipe e reduza custos operacionais com deslocamentos." },
                { icon: Award, title: "Diferenciação Competitiva", desc: "Enquanto concorrentes usam apenas fotos, ofereça uma experiência imersiva inesquecível que encanta e conquista o público." },
                { icon: Settings, title: "Inovação", desc: "Mostre de forma transparente a solidez e a qualidade do seu negócio através de tecnologia de ponta." }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.05} className="bg-surface/70 backdrop-blur-md p-6 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors group">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline text-sm font-bold text-on-surface mb-2 pl-3 border-l border-primary">{item.title}</h4>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed pl-3">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Portfólio Section */}
        <section id="portfolio" className="py-24 px-6">
          <FadeIn className="max-w-7xl mx-auto mb-16 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(38,166,136,1)]"></div>
              <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px]">Showcase</span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface">Alguns de Nossos Trabalhos</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "CABOCA", desc: "Matterport 3D Showcase", url: "https://my.matterport.com/show/?m=gAyKQv25SbW", img: "https://my.matterport.com/api/v2/player/models/gAyKQv25SbW/thumb/" },
              { title: "Condomínio Jardins do Lago", desc: "Matterport 3D Showcase", url: "https://my.matterport.com/show/?m=rJmuyLNPLyy", img: "https://my.matterport.com/api/v2/player/models/rJmuyLNPLyy/thumb/" },
              { title: "Associação Comercial do Pará - ACP", desc: "Matterport 3D Showcase", url: "https://my.matterport.com/show/?m=5fcFQbQQ6kV", img: "https://my.matterport.com/api/v2/player/models/5fcFQbQQ6kV/thumb/" },
              { title: "Centro de Cirurgia Instituto Face", desc: "Matterport 3D Showcase", url: "https://my.matterport.com/show/?m=vcQycyqev4K", img: "https://my.matterport.com/api/v2/player/models/vcQycyqev4K/thumb/" },
              { title: "AGJ HOSPITAL SAÚDE CENTER", desc: "Hospital de Alta Complexidade 24h em Capanema", url: "https://my.matterport.com/show/?m=xFJ43zUYq6U", img: "https://my.matterport.com/api/v2/player/models/xFJ43zUYq6U/thumb/" },
              { title: "Tour virtual Caixa Pará", desc: "Virtual Tour", url: "https://urano360.com.br/caixa-para/", img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop" }
            ].map((work, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="group block">
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="relative h-[320px] rounded-xl overflow-hidden border border-outline-variant">
                    <img src={work.img} alt={work.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent p-6 flex flex-col justify-end">
                      <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-surface transition-colors">
                        <Eye className="w-4 h-4" />
                      </div>
                      <h4 className="font-headline text-lg font-bold text-on-surface mb-1">{work.title}</h4>
                      <p className="font-body text-sm text-on-surface-variant line-clamp-2 mb-3">{work.desc}</p>
                      <span className="font-label text-primary text-[10px] uppercase tracking-widest flex items-center gap-1">
                        Explorar Tour <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Plataforma Section */}
        <section id="plataforma" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(38,166,136,1)]"></div>
                  <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px]">Tecnologia</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface">Sobre nossa Plataforma</h2>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={0.1} className="md:col-span-2 bg-surface/70 backdrop-blur-md p-8 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors group relative overflow-hidden">
                <span className="text-primary mb-6 block"><Settings className="w-8 h-8" /></span>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Software Avançado</h3>
                <p className="font-body text-sm text-on-surface-variant mb-6 max-w-xl leading-relaxed">
                  Utilizamos as plataformas mais poderosas do mundo para a criação de tours virtuais. Diferente de soluções padronizadas, elas nos permitem um controle criativo total para personalizar cada detalhe — da interface com as cores e logo da sua marca até a inclusão de vídeos, gamificação e hotspots informativos.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2} className="bg-surface/70 backdrop-blur-md p-8 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors group">
                <span className="text-primary mb-6 block"><ImageIcon className="w-8 h-8" /></span>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Alta Resolução</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Mais do que ver: sentir. A altíssima resolução dos nossos tours permite uma imersão total, com uma riqueza de detalhes que torna a experiência virtual surpreendentemente real.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3} className="md:col-span-3 bg-surface/70 backdrop-blur-md p-8 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors group flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="text-primary mb-6 block"><MousePointerClick className="w-8 h-8" /></span>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Recursos Interativos</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-3xl">
                    Transformamos cada tour em uma experiência rica e participativa. Imagine poder clicar em um objeto e assistir a um vídeo de demonstração, abrir uma galeria de fotos, baixar um catálogo em PDF ou ser direcionado para uma página de compra. Nossa tecnologia permite embutir esses e outros elementos.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-24 px-6">
          <FadeIn className="max-w-5xl mx-auto bg-surface/70 backdrop-blur-md rounded-2xl p-10 md:p-16 border border-outline-variant relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(38,166,136,1)]"></div>
                  <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px]">Contato</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface mb-6">Entre em contato</h2>
                <p className="font-body text-on-surface-variant text-base mb-12">
                  Entre em contato conosco para saber mais sobre nossos serviços e como podemos transformar seu negócio.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface text-sm">Email</h4>
                      <a href="mailto:contato@urano.tec.br" className="text-xs text-on-surface-variant hover:text-primary transition-colors">contato@urano.tec.br</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-primary shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface text-sm">Agende uma demonstração</h4>
                      <p className="text-xs text-on-surface-variant">Veja na prática como nossos tours virtuais podem transformar seu negócio.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-primary shrink-0">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface text-sm">Personalize sua solução</h4>
                      <p className="text-xs text-on-surface-variant">Desenvolvemos um projeto específico para atender às necessidades da sua empresa.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-8 rounded-xl border border-outline-variant">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-2">Nome</label>
                    <input type="text" className="w-full bg-black/20 border border-outline-variant rounded px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-2">Email</label>
                    <input type="email" className="w-full bg-black/20 border border-outline-variant rounded px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-2">Mensagem</label>
                    <textarea rows={4} className="w-full bg-black/20 border border-outline-variant rounded px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <button className="w-full bg-primary text-surface font-bold font-headline py-3 rounded text-xs uppercase tracking-widest hover:opacity-90 transition-opacity mt-4">
                    ENVIAR MENSAGEM
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-on-surface-variant uppercase tracking-widest pb-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <img src="./favicon.svg" alt="Urano Logo" className="w-8 h-8" />
              <div className="text-lg font-black text-primary tracking-[4px]">URANO</div>
            </div>
            <p className="text-center md:text-left">
              Urano Inteligência & Tecnologia LTDA - 47.062.979/0001-96<br/>
              Belém – Pará
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="mailto:contato@urano.tec.br" className="hover:text-primary transition-colors">contato@urano.tec.br</a>
            <a href="https://instagram.com/URANOTECBR" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              IG: @URANOTECBR
            </a>
          </div>
        </div>

        <div className="flex justify-center pt-8 border-t border-outline-variant/30 text-[11px] uppercase">
          <a 
            href="https://nano.net.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-bold tracking-wider inline-block transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(38,166,136,0.5)]"
          >
            Desenvolvido por NANO
          </a>
        </div>
      </footer>
    </div>
  );
}
