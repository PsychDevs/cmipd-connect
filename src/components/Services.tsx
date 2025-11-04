import { Microscope, BookOpen, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import consultancyImage from "@/assets/consultancy.jpg";
import researchImage from "@/assets/research.jpg";

const Services = () => {
  const services = [
    {
      icon: Microscope,
      title: "Materials Characterization",
      description: "Advanced testing and analysis of material properties using state-of-the-art equipment",
    },
    {
      icon: BookOpen,
      title: "Technical Consultation",
      description: "Expert guidance on materials selection, processing, and application for your projects",
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Specialized training for industry professionals on latest materials technologies",
    },
    {
      icon: Zap,
      title: "Product Development",
      description: "Collaborative product development from concept to prototype using innovative materials",
    },
  ];

  return (
    <section id="services" className="py-32 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h2>
          <p className="text-xl text-muted-foreground font-light">
            Comprehensive materials science solutions tailored to industry needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <Card className="overflow-hidden glass shadow-glass hover:shadow-elevated transition-smooth border-0">
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-10" />
              <img
                src={consultancyImage}
                alt="Consultancy Services"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="p-8">
              <CardTitle className="text-3xl mb-2">Consultancy Services</CardTitle>
              <CardDescription className="text-lg">
                Expert advisory services for materials-related challenges
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our experienced faculty members provide specialized consultancy services to address 
                complex materials science and engineering challenges faced by industries.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Materials selection and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Failure analysis and troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Process development and improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Quality control and assurance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden glass shadow-glass hover:shadow-elevated transition-smooth border-0">
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 gradient-primary opacity-10" />
              <img
                src={researchImage}
                alt="Research & Development"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="p-8">
              <CardTitle className="text-3xl mb-2">Research & Development</CardTitle>
              <CardDescription className="text-lg">
                Cutting-edge research facilities for materials innovation
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Access world-class research facilities and collaborate with our expert team to develop 
                innovative materials solutions for your specific applications.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Novel materials development</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Advanced characterization techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Prototype testing and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Collaborative research projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center glass shadow-glass hover:shadow-elevated transition-smooth border-0 group">
                <CardHeader className="p-6">
                  <div className="mx-auto gradient-primary rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-4 glow-primary group-hover:scale-110 transition-smooth">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
