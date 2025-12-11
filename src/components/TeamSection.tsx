import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const teamMembers = [
  {
    name: "Anis Shiva",
    role: "Founder & CEO",
    description: "Visioner dengan 10+ tahun pengalaman di industri digital",
    gradient: "from-purple to-neon-purple",
  },
  {
    name: "Eka Saputra",
    role: "Lead Designer & Developer",
    description: "Expert dalam UI/UX design dan full-stack development",
    gradient: "from-neon-blue to-purple",
  },
  {
    name: "Heru Pratama",
    role: "Senior Developer & Lead Tech",
    description: "Spesialis dalam arsitektur sistem dan optimization",
    gradient: "from-gold to-gold-light",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-purple/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-purple font-semibold text-sm uppercase tracking-wider mb-4">
            Tim Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Kenalan dengan{" "}
            <span className="text-gradient-purple">Tim Profesional</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Gabungan tim profesional yang siap membantu mewujudkan website impian Anda
          </p>
        </FadeIn>

        {/* Team Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <StaggerItem key={index}>
              <Card 
                variant="glossy" 
                className="group text-center overflow-hidden"
              >
                {/* Avatar Area */}
                <div className="pt-8 pb-4 relative">
                  {/* Background Decoration */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br ${member.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  {/* Avatar */}
                  <div className="relative inline-block">
                    <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-white flex items-center justify-center">
                        <span className="text-3xl font-bold text-foreground">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                    
                    {/* Online Status */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white" />
                  </div>
                </div>

                <CardContent className="pt-0 pb-8">
                  <h3 className="font-bold text-xl mb-1 group-hover:text-purple transition-colors">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                      <button 
                        key={i}
                        className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-purple hover:text-white transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
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

export default TeamSection;
