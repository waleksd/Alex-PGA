import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  Users, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin,
  CirclePlay,
  Circle,
  ChevronDown
} from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Clinics", href: "#services" },
    { name: "Booking", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white py-4 border-b border-[rgba(27,67,50,0.1)] shadow-sm" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 text-golf-green group">
          <div className="flex flex-col items-center -space-y-1 transition-transform group-hover:scale-110">
            <Circle size={18} strokeWidth={1.5} className="fill-golf-gold/10 text-golf-gold" />
            <ChevronDown size={12} strokeWidth={2} className="text-golf-gold" />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold tracking-[3px] uppercase leading-none mb-1">
              Alexander Duncan
            </span>
            <span className="text-[9px] tracking-[2px] uppercase font-medium opacity-60">
              PGA of Canada Professional
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[11px] uppercase tracking-[2px] font-medium transition-colors ${scrolled ? "text-stone-500 hover:text-golf-green" : "text-golf-green/70 hover:text-golf-green"}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-golf-green text-white px-8 py-3 text-[11px] uppercase tracking-[2px] font-bold hover:bg-golf-gold transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-golf-green"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-0 left-0 w-full h-screen bg-golf-green text-white z-[60] py-20 px-10 flex flex-col gap-10"
          >
            <button className="absolute top-8 right-10" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex items-center gap-4 text-white">
              <div className="flex flex-col items-center -space-y-1">
                <Circle size={22} strokeWidth={1.5} className="fill-white/10 text-white" />
                <ChevronDown size={14} strokeWidth={2} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-[4px] uppercase mb-1">Alexander Duncan</span>
                <span className="text-[10px] tracking-[2px] uppercase opacity-50">PGA of Canada Professional</span>
              </div>
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-4xl font-light tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-auto bg-white text-golf-green py-5 text-center font-bold tracking-widest uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 px-6 sm:px-10 lg:px-20 flex items-center justify-center bg-golf-cream overflow-hidden">
      <div className="relative w-full max-w-6xl h-[640px] bg-white grid lg:grid-cols-2 geometric-border shadow-2xl relative">
        {/* Geometric Accent */}
        <div className="absolute -bottom-5 -right-5 w-24 h-24 border border-golf-gold hidden lg:block" />
        
        {/* Left Panel */}
        <div className="bg-golf-green text-white p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <div className="text-[11px] tracking-[4px] uppercase opacity-70 mb-10">PGA OF CANADA PROFESSIONAL</div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl sm:text-7xl font-light mb-4 leading-[1.1]"
            >
              Alexander<br />Duncan
            </motion.h1>
            <div className="text-[13px] tracking-[3px] uppercase text-golf-gold font-bold mb-8">
              Golf Lessons in the GTA
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs font-light">
              Specialized instruction for beginner and intermediate golfers by a certified PGA of Canada Professional.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-12 lg:p-16 flex flex-col justify-center gap-10">
          <p className="text-lg text-stone-500 font-light leading-relaxed">
            Expert golf instruction designed for the discerning player. Tailored coaching programs that bridge the gap between mechanical understanding and on-course performance.
          </p>
          
          <div className="space-y-4">
            <a 
              href="#services" 
              className="w-full sm:w-fit bg-golf-green text-white px-10 py-5 text-[12px] uppercase tracking-[2px] font-bold inline-block text-center hover:bg-golf-gold transition-colors"
            >
              Explore Instruction
            </a>
            <div className="flex gap-6 text-[12px] text-stone-400 font-medium">
              <span>alex@duncangolf.ca</span>
              <span>Copper Creek G.C.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const privateLessons = [
    {
      name: "Private Lesson",
      description: "One-on-one 45-minute coaching session. Includes initial skill assessment at the start of your first lesson and tailored practice drills to go.",
      pricing: [
        { label: "Single Lesson", price: "$100" },
        { label: "Series of 3", price: "$300" },
        { label: "Series of 5", price: "$475" },
        { label: "Series of 10", price: "$900" }
      ]
    }
  ];

  const playingLessons = [
    {
      name: "9-Hole Playing Lesson",
      description: "On-course tactical management and decision-making session focused on playing to your strengths. All prices are per player.",
      pricing: [
        { label: "1 Player", price: "$250" },
        { label: "2 Players", price: "$200" },
        { label: "3 Players", price: "$150" }
      ]
    }
  ];

  const semiPrivateLessons = [
    {
      name: "Semi-Private: Single Lesson",
      description: "60-minute session for 2-4 students. Ideal for couples or friends aiming to improve in a fun, relaxed environment.",
      pricing: [
        { label: "2 Students", price: "$90" },
        { label: "3 Students", price: "$80" },
        { label: "4 Students", price: "$80" }
      ]
    },
    {
      name: "Semi-Private: Series of 3",
      description: "Strategic three-session development plan targeting the specific needs of your group.",
      pricing: [
        { label: "2 Students", price: "$250" },
        { label: "3 Students", price: "$240" },
        { label: "4 Students", price: "$160" }
      ]
    },
    {
      name: "Semi-Private: Series of 5",
      description: "Comprehensive five-session track providing consistent development and supervised practice drills.",
      pricing: [
        { label: "2 Students", price: "$350" },
        { label: "3 Students", price: "$300" },
        { label: "4 Students", price: "$240" }
      ]
    }
  ];

  const renderServiceSection = (title: string, items: any[]) => (
    <div className="mb-24">
      <h2 className="text-4xl font-light mb-10 text-deep-navy">{title}</h2>
      <div className="space-y-0 border-t border-[rgba(27,67,50,0.15)]">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className="group grid md:grid-cols-[1fr_auto] gap-8 py-12 border-b border-[rgba(27,67,50,0.15)] transition-colors hover:bg-white/50"
          >
            <div>
              <h3 className="text-2xl font-medium mb-3 text-deep-navy group-hover:text-golf-green transition-colors">{item.name}</h3>
              <p className="text-sm text-stone-400 font-light max-w-xl">{item.description}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {item.pricing.map((p: any, pIdx: number) => (
                  <div key={pIdx} className="contents">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold self-center">{p.label}</span>
                    <span className="text-sm font-mono text-golf-green font-bold text-right">{p.price} <span className="text-[9px] text-stone-300 ml-1">+ HST</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="services" className="section-padding">
      <div className="max-w-2xl mb-20">
        <div className="text-[11px] tracking-[3px] uppercase text-golf-gold font-bold mb-4">The Academy at Copper Creek</div>
        <h1 className="text-6xl font-light mb-6 text-deep-navy">Program Rates</h1>
        <p className="text-stone-500 font-light leading-relaxed text-lg">
          Customized instruction packages designed to target individual strengths and weaknesses. All prices are per student and subject to HST.
        </p>
      </div>

      {renderServiceSection("Private Lessons", privateLessons)}
      {renderServiceSection("Playing Lessons", playingLessons)}
      {renderServiceSection("Semi-Private Lessons", semiPrivateLessons)}
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white py-32 border-y border-[rgba(27,67,50,0.1)]">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[3/4] geometric-border relative z-10 overflow-hidden bg-golf-cream">
            <img 
              src="https://picsum.photos/seed/golfpro/800/1000" 
              alt="Alexander Duncan" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border border-golf-gold/30 -z-0" />
        </div>

        <div className="space-y-10">
          <div>
            <div className="text-[11px] tracking-[3px] uppercase text-golf-gold font-bold mb-4">Philosophies</div>
            <h2 className="text-5xl font-light mb-8 text-deep-navy">Precision Mentality</h2>
            <div className="space-y-6 text-stone-500 font-light leading-relaxed">
              <p>
                Alexander Duncan is a dedicated member of the PGA of Canada and a professional at Copper Creek Golf Club. He specializes in helping beginner and intermediate players understand the mechanics of the game in simple, actionable terms.
              </p>
              <p>
                Whether you are picking up a club for the first time or looking to break 90, Alexander provides a roadmap that is as unique as your swing. Lessons can be held at Copper Creek or at selected driving ranges and simulators across the Toronto area.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-10 pt-10 border-t border-[rgba(27,67,50,0.1)]">
            <div>
              <div className="text-3xl font-light text-golf-green mb-1">PGA</div>
              <div className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Canada Professional</div>
            </div>
            <div>
              <div className="text-3xl font-light text-golf-green mb-1">10k+</div>
              <div className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">Lessons Given</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="bg-white geometric-border p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-[rgba(27,67,50,0.05)]" />
        
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-light mb-8 text-deep-navy">Inquire for Lessons</h2>
            <p className="text-stone-500 font-light mb-12 leading-relaxed">
              Ready to redefine your game? Contact Alexander to discuss your goals and book your first lesson at Copper Creek.
            </p>
            
            <div className="space-y-6 text-[11px] uppercase tracking-[2px] font-bold text-golf-green">
              <div className="flex items-center gap-4">
                <Mail size={16} /> alex@duncangolf.ca
              </div>
              <div className="flex items-center gap-4">
                <Phone size={16} /> 647-624-8797
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={16} /> Copper Creek G.C. / Toronto, ON
              </div>
            </div>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3 border-b border-stone-100 pb-2">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full bg-transparent border-none p-0 text-stone-900 focus:ring-0 placeholder:text-stone-200" placeholder="John" />
              </div>
              <div className="space-y-3 border-b border-stone-100 pb-2">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full bg-transparent border-none p-0 text-stone-900 focus:ring-0 placeholder:text-stone-200" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-3 border-b border-stone-100 pb-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Lesson Type</label>
              <select className="w-full bg-transparent border-none p-0 text-stone-900 focus:ring-0 appearance-none">
                <option>Private Lesson</option>
                <option>9-Hole Playing Lesson</option>
                <option>Semi-Private Lesson</option>
                <option>Custom Package Inquiry</option>
              </select>
            </div>
            <div className="space-y-3 border-b border-stone-100 pb-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Message</label>
              <textarea rows={3} className="w-full bg-transparent border-none p-0 text-stone-900 focus:ring-0 placeholder:text-stone-200" placeholder="Describe your current game..." />
            </div>
            <button className="w-full bg-golf-green text-white py-6 text-xs uppercase tracking-[3px] font-bold hover:bg-golf-gold transition-colors">
              Request Lesson
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-10 bg-golf-green text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <div className="text-[11px] font-bold tracking-[4px] uppercase mb-4">ALEXANDER DUNCAN</div>
          <p className="text-[10px] uppercase tracking-widest text-white/40">
            Professional PGA of Canada Instruction
          </p>
        </div>

        <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-golf-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-golf-gold transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-golf-gold transition-colors">Copper Creek G.C.</a>
        </div>
        
        <div className="text-[9px] uppercase tracking-[2px] text-white/30 font-medium">
          © 2026 DUNCAN GOLF<br />PGA OF CANADA PROFESSIONAL
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
