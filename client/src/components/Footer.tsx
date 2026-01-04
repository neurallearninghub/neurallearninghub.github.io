import { Link, useLocation } from "wouter";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  const [location] = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg text-white">
                Neural Learning Hub
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Supercharging careers in AI through storytelling, hands-on projects, and expert mentorship.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Programs</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="/#course-nlp"
                  onClick={(e) => handleScroll(e, "course-nlp")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Applied AI (NLP)
                </a>
              </li>
              <li>
                <a
                  href="/#course-multimodal"
                  onClick={(e) => handleScroll(e, "course-multimodal")}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Applied AI (Multi-modal)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Community</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:team@neurallearninghub.in" className="hover:text-white transition-colors">
                  team@neurallearninghub.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+91 8050 39 2223</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <a href="https://wa.me/918050392223" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Neural Learning Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white cursor-pointer transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
