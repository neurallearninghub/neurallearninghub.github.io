import { BrainCircuit, Mail, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <BrainCircuit className="w-6 h-6 text-primary" />
              </div>
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
              <li className="hover:text-primary transition-colors cursor-pointer">Applied AI (NLP)</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Applied AI (Multi-modal)</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Corporate Training</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Case Studies</li>
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
                <span className="text-green-500">WhatsApp Support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Neural Learning Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
