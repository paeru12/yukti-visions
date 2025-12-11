import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const faqs = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    answer: "Waktu pengerjaan website bervariasi tergantung kompleksitas proyek. Untuk website landing page sederhana biasanya 3-5 hari kerja, website company profile 1-2 minggu, dan untuk e-commerce atau aplikasi web custom bisa memakan waktu 3-8 minggu. Kami selalu memberikan timeline yang jelas di awal proyek.",
  },
  {
    question: "Apakah website yang dibuat sudah mobile-friendly?",
    answer: "Ya, semua website yang kami buat sudah 100% responsive dan mobile-friendly. Kami menggunakan pendekatan mobile-first design untuk memastikan website Anda tampil sempurna di semua perangkat - smartphone, tablet, laptop, hingga desktop.",
  },
  {
    question: "Apakah saya bisa mengedit konten website sendiri?",
    answer: "Tentu saja! Kami menyediakan panel admin yang mudah digunakan dengan CMS (Content Management System) seperti WordPress. Kami juga memberikan pelatihan gratis agar Anda bisa mengelola konten website secara mandiri tanpa perlu keahlian coding.",
  },
  {
    question: "Bagaimana dengan keamanan website saya?",
    answer: "Keamanan adalah prioritas kami. Semua website dilengkapi dengan SSL certificate gratis, backup rutin, protection terhadap malware, dan update keamanan berkala. Untuk proyek enterprise, kami juga menawarkan fitur keamanan tambahan seperti WAF dan monitoring 24/7.",
  },
  {
    question: "Apakah ada biaya maintenance bulanan?",
    answer: "Kami menawarkan paket maintenance opsional yang mencakup hosting, backup, update keamanan, minor edits, dan support teknis. Biayanya tergantung kompleksitas website, mulai dari Rp 500.000/bulan. Namun ini opsional - Anda juga bisa mengelola website sendiri setelah handover.",
  },
  {
    question: "Bisakah website diintegrasikan dengan payment gateway?",
    answer: "Ya, kami dapat mengintegrasikan website Anda dengan berbagai payment gateway populer di Indonesia seperti Midtrans, Xendit, DOKU, atau payment gateway internasional seperti Stripe dan PayPal. Ini memungkinkan website Anda menerima pembayaran online dengan aman.",
  },
  {
    question: "Apakah Yukti menyediakan jasa SEO?",
    answer: "Ya, kami menawarkan layanan SEO sebagai add-on. Semua website yang kami buat sudah dioptimasi dengan SEO on-page dasar. Untuk hasil yang lebih maksimal, kami juga menyediakan paket SEO lengkap yang mencakup keyword research, content optimization, link building, dan reporting bulanan.",
  },
  {
    question: "Bagaimana proses pembayarannya?",
    answer: "Kami menerapkan sistem pembayaran bertahap: 50% DP di awal untuk memulai proyek, dan 50% sisanya setelah website selesai dan siap diluncurkan. Kami menerima pembayaran via transfer bank, e-wallet, atau kartu kredit.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-purple/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-neon-blue/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pertanyaan yang{" "}
            <span className="text-gradient-purple">Sering Ditanyakan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan jawaban untuk pertanyaan umum seputar layanan pembuatan website kami
          </p>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50 px-6 shadow-soft hover:shadow-medium transition-shadow duration-300 data-[state=open]:shadow-medium data-[state=open]:border-purple/20"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-purple hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Masih punya pertanyaan lain?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-purple text-white px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all duration-300"
          >
            Hubungi Kami
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQSection;
