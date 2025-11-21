import { Microscope, BookOpen, Users, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import researchImage from "@/assets/Students-min.webp";
import consultancyImage from "@/assets/consultancy_services-min.webp";

const Services = () => {
  const services = [
    {
      icon: Microscope,
      title: "Materials Characterization",
      description:
        "State-of-the-art facilities for advanced material testing and analysis",
    },
    {
      icon: BookOpen,
      title: "Technical Consultation",
      description:
        "Expert guidance on materials selection, processing, and application for industry needs",
    },
    {
      icon: Users,
      title: "Training Programs",
      description:
        "Specialized training for industry professionals on latest materials technologies",
    },
    {
      icon: Zap,
      title: "Product Development",
      description:
        "Product development starting from basic concepts to prototype through collaborative research",
    },
  ];

  return (
    <section id="services" className="py-24" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive materials science and engineering solutions tailored
            to industry needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="overflow-hidden shadow-medium border-border">
            <div className="relative h-80">
              <img
                src={consultancyImage}
                alt="Materials science consultancy services - expert faculty providing technical guidance on materials selection, failure analysis, and process optimization for Sri Lankan industries"
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="320"
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
                Our qualified faculty members provide specialized consultancy
                services to address complex materials science and engineering
                related challenges faced by the industries.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Product Development and Optimizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Failure Analysis and Expert Solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Quality Assuarance, Control, and Enhancement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-medium border-border">
            <div className="relative h-80">
              <img
                src={researchImage}
                alt="Research and development facilities - postgraduate students and researchers using advanced materials characterization equipment and testing facilities at CMIPD laboratories"
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="320"
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
                Access world-class research facilities and collaborate with our
                expert team to develop innovative materials solutions for your
                specific requirements.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Collaborative Research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Novel Materials Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Advanced Materials Characterization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Prototype Testing and Validation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="text-center shadow-soft hover:shadow-medium transition-smooth border-border"
              >
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
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
