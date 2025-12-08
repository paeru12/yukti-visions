import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
  {
    title: "Toko Online",
    description: "Toko online dengan sistem e-commerce lengkap dan modern",
    category: "E-Commerce",
    color: "from-purple to-neon-purple",
  },
  {
    title: "Website Company Profile",
    description: "Profile perusahaan dengan desain profesional dan elegan",
    category: "Corporate",
    color: "from-neon-blue to-purple",
  },
  {
    title: "Website Undangan Pernikahan",
    description: "Undangan digital dengan fitur RSVP dan galeri foto",
    category: "Wedding",
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "Sistem Dashboard",
    description: "Dashboard admin dengan analytics dan management tools",
    category: "Dashboard",
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Landing Page Startup",
    description: "Landing page modern dengan konversi tinggi",
    category: "Landing Page",
    color: "from-gold to-gold-light",
  },
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple font-semibold text-sm uppercase tracking-wider mb-4">
            Portfolio Website
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Karya Terbaik{" "}
            <span className="text-gradient-purple">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Beberapa contoh website yang telah kami kerjakan untuk klien dari berbagai industri
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:shadow-xl hover:border-purple/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-border flex items-center justify-center hover:shadow-xl hover:border-purple/30 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Cards Container */}
          <div className="grid md:grid-cols-3 gap-6 overflow-hidden">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % portfolioItems.length;
              const item = portfolioItems[index];
              return (
                <Card 
                  key={`${index}-${offset}`}
                  variant="gold" 
                  className="group cursor-pointer overflow-hidden"
                >
                  {/* Preview Area */}
                  <div className={`h-52 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Decorative Browser Frame */}
                    <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-t-lg p-2">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 bg-muted rounded-md h-5" />
                      </div>
                    </div>

                    {/* Content Preview Placeholder */}
                    <div className="absolute top-16 left-4 right-4 bottom-4 bg-white/70 backdrop-blur-sm rounded-b-lg p-3">
                      <div className="h-4 w-3/4 bg-muted rounded mb-2" />
                      <div className="h-3 w-1/2 bg-muted rounded mb-4" />
                      <div className="h-12 w-full bg-muted rounded" />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white rounded-full p-4 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Category */}
                    <span className="inline-block text-xs font-semibold text-purple bg-purple/10 px-3 py-1 rounded-full mb-3">
                      {item.category}
                    </span>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-purple transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 mt-4 text-purple font-semibold text-sm group-hover:gap-3 transition-all">
                      Kunjungi Website
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "w-8 bg-gradient-to-r from-purple to-neon-purple" 
                  : "bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
