import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight } from "lucide-react";

// Sample articles data
const articles = [
  {
    slug: "tren-teknologi-web-2025",
    category: "Teknologi",
    title: "Tren Teknologi Web Terbaru 2025: Apa Saja yang Lagi Hits?",
    excerpt: "Pelajari teknologi web terbaru yang akan mendominasi tahun 2025 untuk website Anda.",
    date: "5 Des 2025",
    readTime: "8 menit",
    author: "Tim Yukti",
    color: "from-purple to-neon-purple",
    content: `
      <p>Dunia teknologi web terus berkembang dengan pesat. Tahun 2025 membawa berbagai inovasi menarik yang akan mengubah cara kita membangun dan menggunakan website. Mari kita bahas tren-tren utama yang perlu Anda ketahui.</p>
      
      <h2>1. AI-Powered Web Development</h2>
      <p>Artificial Intelligence bukan lagi sekadar buzzword. Di tahun 2025, AI sudah menjadi bagian integral dari proses pengembangan web. Dari auto-generate code hingga smart debugging, AI membantu developer bekerja lebih efisien.</p>
      
      <h2>2. Edge Computing & Serverless Architecture</h2>
      <p>Website modern semakin banyak yang mengadopsi edge computing untuk performa yang lebih cepat. Dengan memproses data lebih dekat ke pengguna, latency bisa dikurangi secara drastis.</p>
      
      <h2>3. Progressive Web Apps (PWA) 2.0</h2>
      <p>PWA terus berevolusi dengan fitur-fitur baru seperti better offline support, push notifications yang lebih pintar, dan integrasi yang lebih mulus dengan sistem operasi perangkat.</p>
      
      <h2>4. WebAssembly Goes Mainstream</h2>
      <p>WebAssembly memungkinkan aplikasi dengan performa near-native berjalan di browser. Ini membuka pintu untuk aplikasi web yang lebih kompleks dan powerful.</p>
      
      <h2>5. Micro-Frontend Architecture</h2>
      <p>Konsep micro-frontend semakin populer, memungkinkan tim besar untuk bekerja secara independen pada bagian-bagian berbeda dari satu aplikasi.</p>
      
      <h2>Kesimpulan</h2>
      <p>Tahun 2025 adalah tahun yang exciting untuk teknologi web. Dengan mengadopsi tren-tren ini, bisnis Anda bisa tetap kompetitif dan memberikan pengalaman terbaik untuk pengguna.</p>
    `,
    relatedArticles: ["wordpress-6-9-fitur-update", "chatbot-ai-website-bisnis"],
  },
  {
    slug: "wordpress-6-9-fitur-update",
    category: "WordPress",
    title: "Apa yang Baru di WordPress 6.9? Fitur Lengkap & Update",
    excerpt: "WordPress 6.9 hadir dengan fitur-fitur baru yang memudahkan pengelolaan website.",
    date: "3 Des 2025",
    readTime: "6 menit",
    author: "Tim Yukti",
    color: "from-neon-blue to-purple",
    content: `
      <p>WordPress 6.9 telah resmi dirilis dengan berbagai peningkatan yang signifikan. Versi ini fokus pada kemudahan penggunaan dan performa yang lebih baik.</p>
      
      <h2>Block Editor yang Lebih Canggih</h2>
      <p>Gutenberg editor mendapat pembaruan besar dengan lebih banyak block patterns, global styles yang lebih fleksibel, dan pengalaman editing yang lebih smooth.</p>
      
      <h2>Performa Database yang Lebih Cepat</h2>
      <p>WordPress 6.9 menghadirkan optimasi database yang membuat website loading 20% lebih cepat dibanding versi sebelumnya.</p>
      
      <h2>Fitur Keamanan Baru</h2>
      <p>Security headers yang lebih ketat, better password policies, dan two-factor authentication yang built-in.</p>
      
      <h2>Accessibility Improvements</h2>
      <p>Komitmen WordPress terhadap aksesibilitas semakin kuat dengan perbaikan screen reader support dan keyboard navigation.</p>
    `,
    relatedArticles: ["tren-teknologi-web-2025", "seo-strategi-terbaru"],
  },
  {
    slug: "chatbot-ai-website-bisnis",
    category: "AI & Bisnis",
    title: "Cara Membuat Chatbot AI untuk Website Bisnis Online 24/7",
    excerpt: "Panduan lengkap membuat chatbot AI untuk meningkatkan layanan pelanggan.",
    date: "1 Des 2025",
    readTime: "10 menit",
    author: "Tim Yukti",
    color: "from-gold to-gold-light",
    content: `
      <p>Chatbot AI telah menjadi game-changer dalam customer service. Dengan chatbot yang tepat, bisnis Anda bisa melayani pelanggan 24/7 tanpa perlu tambahan staf.</p>
      
      <h2>Mengapa Chatbot AI Penting?</h2>
      <p>Pelanggan modern mengharapkan respons instan. Chatbot AI bisa menjawab pertanyaan umum, membantu navigasi, dan bahkan memproses transaksi sederhana.</p>
      
      <h2>Platform Chatbot Terbaik 2025</h2>
      <p>Ada banyak pilihan platform seperti ChatGPT API, Dialogflow, dan berbagai solusi lokal yang sudah terintegrasi dengan WhatsApp Business.</p>
      
      <h2>Best Practices Implementasi</h2>
      <p>Mulai dari use case yang jelas, training data yang berkualitas, dan jangan lupa human handoff untuk kasus-kasus kompleks.</p>
      
      <h2>Mengukur Keberhasilan</h2>
      <p>Track metrics seperti resolution rate, customer satisfaction, dan average handling time untuk terus mengoptimasi chatbot Anda.</p>
    `,
    relatedArticles: ["tren-teknologi-web-2025", "wordpress-6-9-fitur-update"],
  },
  {
    slug: "seo-strategi-terbaru",
    category: "SEO",
    title: "Strategi SEO Terbaru 2025: Panduan Lengkap Optimasi Website",
    excerpt: "Strategi SEO terbaru yang perlu Anda ketahui untuk optimasi website.",
    date: "28 Nov 2025",
    readTime: "12 menit",
    author: "Tim Yukti",
    color: "from-emerald-500 to-teal-400",
    content: `
      <p>SEO di tahun 2025 berbeda dari tahun-tahun sebelumnya. Dengan AI yang semakin pintar dan perubahan algoritma, strategi lama mungkin tidak lagi efektif.</p>
      
      <h2>E-E-A-T Lebih Penting dari Sebelumnya</h2>
      <p>Experience, Expertise, Authoritativeness, dan Trustworthiness menjadi faktor ranking yang semakin krusial.</p>
      
      <h2>AI-Generated Content: Friend or Foe?</h2>
      <p>Google semakin pintar mendeteksi konten AI. Kuncinya adalah menggunakan AI sebagai assistant, bukan pengganti kreativitas manusia.</p>
      
      <h2>Core Web Vitals 2.0</h2>
      <p>Metrics baru ditambahkan untuk mengukur user experience. Pastikan website Anda memenuhi standar terbaru.</p>
      
      <h2>Voice Search Optimization</h2>
      <p>Dengan semakin banyaknya pengguna voice assistant, optimasi untuk voice search menjadi keharusan.</p>
    `,
    relatedArticles: ["tren-teknologi-web-2025", "chatbot-ai-website-bisnis"],
  },
];

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Artikel tidak ditemukan</h1>
            <Link to="/#blog" className="text-purple hover:underline">
              Kembali ke Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles.filter((a) =>
    article.relatedArticles?.includes(a.slug)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Header */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          {/* Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-5`} />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-radial from-purple/10 to-transparent rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
              <Link
                to="/#blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Blog
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <span className={`inline-block bg-gradient-to-r ${article.color} text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6`}>
                {article.category}
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
                {article.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                {article.excerpt}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime} baca
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              {/* Main Content */}
              <FadeIn delay={0.2}>
                <article className="prose prose-lg max-w-none">
                  {/* Featured Image */}
                  <div className={`w-full h-64 md:h-96 bg-gradient-to-br ${article.color} rounded-3xl mb-12 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/20 rounded-2xl backdrop-blur-sm" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full" />
                  </div>

                  {/* Content */}
                  <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </article>
              </FadeIn>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-32 h-fit space-y-6">
                <FadeIn delay={0.3} direction="left">
                  {/* Share & Save */}
                  <Card className="bg-white/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Bagikan Artikel</h3>
                      <div className="flex gap-3">
                        <button className="p-3 bg-muted rounded-xl hover:bg-purple hover:text-white transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-muted rounded-xl hover:bg-purple hover:text-white transition-colors">
                          <Bookmark className="w-5 h-5" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.4} direction="left">
                  {/* Author Card */}
                  <Card className="bg-gradient-to-br from-purple/5 to-neon-blue/5 border-purple/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-purple rounded-full flex items-center justify-center text-white font-bold text-xl">
                          Y
                        </div>
                        <div>
                          <h4 className="font-semibold">Tim Yukti</h4>
                          <p className="text-sm text-muted-foreground">Digital Agency Expert</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tim profesional dengan pengalaman 10+ tahun dalam pembuatan website dan digital marketing.
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.5} direction="left">
                  {/* CTA Card */}
                  <Card variant="premium" className="overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-white mb-2">Butuh Website Profesional?</h3>
                      <p className="text-white/80 text-sm mb-4">
                        Konsultasikan kebutuhan website Anda dengan tim ahli kami.
                      </p>
                      <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 bg-white text-purple px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold hover:text-foreground transition-colors"
                      >
                        Hubungi Kami
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </FadeIn>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-bold mb-12">
                  Artikel <span className="text-gradient-purple">Terkait</span>
                </h2>
              </FadeIn>

              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related, index) => (
                  <StaggerItem key={index}>
                    <Link to={`/artikel/${related.slug}`}>
                      <Card variant="glossy" className="group cursor-pointer overflow-hidden h-full">
                        <div className={`h-40 bg-gradient-to-br ${related.color} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground px-3 py-1 rounded-full">
                              {related.category}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg mb-2 group-hover:text-purple transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {related.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
