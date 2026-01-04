import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { name: "About", to: "about" },
  { name: "Courses", to: "courses" },
  { name: "Tutors", to: "tutors" },
  { name: "FAQ", to: "faq" },
  { name: "Contact", to: "contact" },
];

interface NavbarProps {
  hideLinks?: boolean;
}

export function Navbar({ hideLinks = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LogoContent = () => (
    <>
      <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
        Neural Learning Hub
      </span>
    </>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-white/10 py-3 shadow-lg shadow-primary/5"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer group"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <LogoContent />
        </Link>

        {/* Desktop Nav */}
        {!hideLinks && (
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                offset={-80}
                className="text-sm font-medium text-muted-foreground hover:text-white cursor-pointer transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </ScrollLink>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>
        )}

        {/* Mobile Toggle */}
        {!hideLinks && (
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-white py-2"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}
