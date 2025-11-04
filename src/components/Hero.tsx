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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-subtle">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <img
          src={heroImage}
          alt="Materials Innovation"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16 animate-fade-in">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-foreground">Centre for</span>
              <span className="block mt-2 gradient-primary bg-clip-text text-transparent">
                Materials Innovation
              </span>
              <span className="block mt-2 text-foreground/80 text-3xl md:text-5xl lg:text-6xl font-medium">
                and Product Development
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Bridging industry and academia through cutting-edge research and innovation
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group px-10 py-6 text-lg glow-primary"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="glass rounded-2xl p-8 shadow-glass hover:shadow-elevated transition-smooth group">
              <h3 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-3">Expert</h3>
              <p className="text-muted-foreground text-lg">Consultancy Services</p>
            </div>
            <div className="glass rounded-2xl p-8 shadow-glass hover:shadow-elevated transition-smooth group">
              <h3 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-3">Advanced</h3>
              <p className="text-muted-foreground text-lg">R&D Facilities</p>
            </div>
            <div className="glass rounded-2xl p-8 shadow-glass hover:shadow-elevated transition-smooth group">
              <h3 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-3">Industry</h3>
              <p className="text-muted-foreground text-lg">Academia Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
