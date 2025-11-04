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
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About CMIPD</h2>
          <p className="text-lg text-muted-foreground">
            The Department of Materials Science and Engineering recognized the urgent need for a dedicated 
            platform to bridge gaps between industry and academia. CMIPD addresses pressing industrial challenges 
            while providing valuable services to students in need of materials-related expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
              Industries often face significant challenges in addressing materials science and engineering-related 
              issues due to the absence of specialized infrastructure, communication lapses, and a lack of coordination. 
              CMIPD serves as a dedicated hub to overcome these barriers.
            </p>
            <p className="text-muted-foreground">
              Establishing this Centre will not only address pressing industrial challenges but also provide valuable 
              services to undergraduate and postgraduate students in need of materials-related expertise.
            </p>
          </div>
          <div className="relative">
            <img
              src={collaborationImage}
              alt="Industry-Academia Collaboration"
              className="rounded-2xl shadow-medium w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-smooth"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{objective.title}</h4>
                    <p className="text-muted-foreground">{objective.description}</p>
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
