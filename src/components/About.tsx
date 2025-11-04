import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import collaborationImage from "@/assets/collaboration.jpg";

const About = () => {
  const objectives = [
    {
      icon: Users,
      title: "Industry-Academia Collaboration",
      description: "Strengthen partnerships between industry and academia to address real-world challenges",
    },
    {
      icon: Target,
      title: "Student Development",
      description: "Support academic development of undergraduate and postgraduate students with industry exposure",
    },
    {
      icon: Lightbulb,
      title: "Interdisciplinary Innovation",
      description: "Foster collaboration across disciplines to drive materials innovation and research",
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description: "Contribute to national economic development through materials science solutions",
    },
  ];

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About CMIPD</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            The Department of Materials Science and Engineering recognized the urgent need for a dedicated 
            platform to bridge gaps between industry and academia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Industries often face significant challenges in addressing materials science and engineering-related 
              issues due to the absence of specialized infrastructure, communication lapses, and a lack of coordination. 
              CMIPD serves as a dedicated hub to overcome these barriers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Establishing this Centre will not only address pressing industrial challenges but also provide valuable 
              services to undergraduate and postgraduate students in need of materials-related expertise.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <img
              src={collaborationImage}
              alt="Industry-Academia Collaboration"
              className="relative rounded-3xl shadow-elevated w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 shadow-glass hover:shadow-elevated transition-smooth group"
              >
                <div className="flex items-start space-x-5">
                  <div className="gradient-primary rounded-xl p-3 glow-primary group-hover:scale-110 transition-smooth">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-3">{objective.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
