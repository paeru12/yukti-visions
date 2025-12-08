import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    category: "Teknologi",
    title: "Tren Teknologi Web Terbaru 2025: Apa Saja yang Lagi Hits?",
    excerpt: "Pelajari teknologi web terbaru yang akan mendominasi tahun 2025 untuk website Anda.",
    date: "5 Des 2025",
    color: "from-purple to-neon-purple",
  },
  {
    category: "WordPress",
    title: "Apa yang Baru di WordPress 6.9? Fitur Lengkap & Update",
    excerpt: "WordPress 6.9 hadir dengan fitur-fitur baru yang memudahkan pengelolaan website.",
    date: "3 Des 2025",
    color: "from-neon-blue to-purple",
  },
  {
    category: "AI & Bisnis",
    title: "Cara Membuat Chatbot AI untuk Website Bisnis Online 24/7",
    excerpt: "Panduan lengkap membuat chatbot AI untuk meningkatkan layanan pelanggan.",
    date: "1 Des 2025",
    color: "from-gold to-gold-light",
  },
  {
    category: "SEO",
    title: "Bora dan Nano Banana: Pro Google Dihujani Kritik, Jadi Mereka...",
    excerpt: "Strategi SEO terbaru yang perlu Anda ketahui untuk optimasi website.",
    date: "28 Nov 2025",
    color: "from-emerald-500 to-teal-400",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple font-semibold text-sm uppercase tracking-wider mb-4">
            Yukti Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Wawasan Terbaru{" "}
            <span className="text-gradient-purple">Seputar Digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan artikel terbaru tentang teknologi, desain, dan strategi bisnis digital
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              variant="glossy" 
              className="group cursor-pointer overflow-hidden"
            >
              {/* Thumbnail Placeholder */}
              <div className={`h-40 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full" />
              </div>

              <CardHeader className="pb-2">
                <h3 className="font-bold text-base leading-tight group-hover:text-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  
                  <span className="flex items-center gap-1 text-xs font-semibold text-purple group-hover:gap-2 transition-all">
                    Baca
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-purple font-semibold hover:gap-3 transition-all group">
            Lihat Semua Artikel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
