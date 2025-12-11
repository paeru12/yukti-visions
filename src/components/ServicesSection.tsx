import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Wrench, TrendingUp, ShieldCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const services = [
  {
    icon: Globe,
    title: "Jasa Pembuatan Website",
    description: "Website profesional dengan desain modern, responsif, dan optimasi SEO untuk meningkatkan visibilitas bisnis Anda.",
    price: "Mulai Rp 900.000",
    color: "from-purple to-neon-purple",
    glowColor: "shadow-glow-purple",
  },
  {
    icon: Wrench,
    title: "Maintenance Website",
    description: "Layanan pemeliharaan berkala untuk memastikan website Anda selalu update, aman, dan berjalan optimal.",
    price: "Rp 250.000/bulan",
    color: "from-neon-blue to-purple",
    glowColor: "shadow-glow-blue",
  },
  {
    icon: TrendingUp,
    title: "Jasa Iklan Google Ads",
    description: "Tingkatkan penjualan dengan iklan Google Ads yang tertarget. ROI tinggi dan konversi maksimal.",
    price: "Rp 100.000/hari",
    color: "from-gold to-gold-light",
    glowColor: "shadow-glow-gold",
  },
  {
    icon: ShieldCheck,
    title: "SSL & Keamanan",
    description: "Proteksi website dengan sertifikat SSL premium dan sistem keamanan terkini untuk melindungi data.",
    price: "Termasuk Gratis",
    color: "from-emerald-500 to-teal-400",
    glowColor: "shadow-glow-blue",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple font-semibold text-sm uppercase tracking-wider mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Solusi Digital{" "}
            <span className="text-gradient-purple">Premium</span> untuk Bisnis Anda
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami menyediakan layanan lengkap untuk membangun dan mengembangkan 
            kehadiran digital bisnis Anda dengan standar tertinggi.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card 
                variant="premium" 
                className="group relative overflow-hidden h-full"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardHeader className="pb-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${service.glowColor}`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-purple transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  
                  {/* Price Tag */}
                  <div className="pt-4 border-t border-border">
                    <p className={`font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
