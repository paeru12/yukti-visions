import { ShieldCheck, Lock, Server } from "lucide-react";
import { FadeIn, ScaleIn } from "./ScrollAnimations";

const SecuritySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {/* Diagonal Light Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/5 to-transparent skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple/5 to-transparent -skew-x-12" />

      {/* Floating Glow */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <FadeIn direction="right">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Keamanan Terjamin
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Lebih Aman dengan{" "}
              <span className="text-gradient-gold">Enkripsi SSL/HTTPS</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              SSL (Secure Sockets Layer) mengamankan data website Anda dengan sistem enkripsi mutakhir. 
              Melindungi informasi sensitif pelanggan dan meningkatkan kepercayaan pengunjung terhadap bisnis Anda.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                { icon: Lock, text: "Enkripsi data end-to-end 256-bit" },
                { icon: ShieldCheck, text: "Proteksi terhadap serangan cyber" },
                { icon: Server, text: "Server hosting Indonesia premium" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right - HTTPS Visual */}
          <ScaleIn delay={0.2} className="relative flex items-center justify-center">
            {/* Glow Background */}
            <div className="absolute w-80 h-80 bg-gradient-to-br from-neon-blue/20 to-purple/20 rounded-full blur-3xl animate-glow" />
            
            {/* Main HTTPS Badge */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <div className="text-center">
                {/* Lock Icon with Glow */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-neon-blue/30 rounded-full blur-2xl animate-glow" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue to-purple flex items-center justify-center shadow-glow-blue">
                    <Lock className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* HTTPS Text */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">HTTPS://</span>
                </div>

                <p className="text-white/60 text-sm">
                  Website Anda Terlindungi
                </p>

                {/* Security Badge */}
                <div className="mt-6 inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span className="text-gold text-sm font-medium">SSL Verified</span>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
