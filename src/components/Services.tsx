import { Microscope, BookOpen, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import researchImage from "@/assets/Students.png";
import consultancyImage from "@/assets/Consultancy_1.png";

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
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive materials science and engineering solutions tailored to industry needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="overflow-hidden shadow-medium border-border">
            <div className="relative h-80">
              <img
                src={consultancyImage}
                alt="Consultancy Services"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Consultancy Services</CardTitle>
              <CardDescription className="text-base">
                Expert advisory services for materials-related challenges
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Our experienced faculty members provide specialized consultancy services to address 
                complex materials science and engineering challenges faced by industries.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Materials selection and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Failure analysis and troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Process development and improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Quality control and assurance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-medium border-border">
            <div className="relative h-80">
              <img
                src={researchImage}
                alt="Research & Development"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Research & Development</CardTitle>
              <CardDescription className="text-base">
                Cutting-edge research facilities for materials innovation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Access world-class research facilities and collaborate with our expert team to develop 
                innovative materials solutions for your specific applications.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Novel materials development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Advanced characterization techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Prototype testing and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Collaborative research projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth border-border">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
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
