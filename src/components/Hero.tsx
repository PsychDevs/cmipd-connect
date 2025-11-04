import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Materials Innovation"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Centre for Materials Innovation
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              and Product Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between industry and academia through cutting-edge materials research, 
            innovation, and expert consultancy services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border">
              <h3 className="text-3xl font-bold text-primary mb-2">Expert</h3>
              <p className="text-muted-foreground">Consultancy Services</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border">
              <h3 className="text-3xl font-bold text-primary mb-2">Advanced</h3>
              <p className="text-muted-foreground">R&D Facilities</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft border border-border">
              <h3 className="text-3xl font-bold text-primary mb-2">Industry</h3>
              <p className="text-muted-foreground">Academia Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
