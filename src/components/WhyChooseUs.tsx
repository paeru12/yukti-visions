import { Zap, Shield, Clock, Headphones, Code, Award } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const features = [
  {
    icon: Zap,
    title: "Ultra Cepat",
    description: "Website dengan loading time < 2 detik untuk pengalaman pengguna terbaik.",
  },
  {
    icon: Shield,
    title: "100% Aman",
    description: "Dilengkapi SSL premium dan proteksi keamanan tingkat enterprise.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Proyek selesai sesuai deadline yang disepakati, tanpa kompromi.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Tim support selalu siap membantu kapanpun Anda butuhkan.",
  },
  {
    icon: Code,
    title: "Kode Bersih",
    description: "Clean code dan best practices untuk performa maksimal.",
  },
  {
    icon: Award,
    title: "Bergaransi",
    description: "Garansi maintenance dan revisi untuk kepuasan Anda.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple font-semibold text-sm uppercase tracking-wider mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Keunggulan yang{" "}
            <span className="text-gradient-purple">Membedakan</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami berkomitmen memberikan layanan terbaik dengan standar kualitas tinggi
          </p>
        </FadeIn>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="group flex gap-5 p-6 rounded-2xl bg-white border border-border hover:border-purple/20 hover:shadow-lg transition-all duration-300 h-full">
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple/10 to-neon-blue/10 flex items-center justify-center group-hover:from-purple group-hover:to-neon-purple transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-purple group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Underline Effect */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-purple to-neon-purple mt-3 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
