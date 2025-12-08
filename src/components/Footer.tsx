import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-purple/20 to-neon-blue/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Konsultasikan kebutuhan website Anda dengan tim kami secara gratis
          </p>
          <Button variant="gold" size="lg" className="group">
            <MessageCircle className="w-5 h-5" />
            Konsultasi Gratis via WhatsApp
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple to-neon-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-xl font-bold text-white">Yukti</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Jasa pembuatan website profesional dengan desain modern dan performa tinggi.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                hello@yukti.id
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                +62 812 3456 7890
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                Jakarta, Indonesia
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-3">
              {["Pembuatan Website", "Maintenance", "Google Ads", "SEO Optimization"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-sm hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {["Tentang Kami", "Portfolio", "Blog", "Karir"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-sm hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Refund Policy", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 text-sm hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Yukti. All rights reserved.
          </p>
          
          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
          >
            Kembali ke Atas
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
