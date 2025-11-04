import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass shadow-glass">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">CMIPD</span>
              <span className="text-xs text-muted-foreground hidden sm:block font-light">
                University of Moratuwa
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" onClick={() => scrollToSection("home")} className="text-base">
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")} className="text-base">
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("services")} className="text-base">
              Services
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("staff")} className="text-base">
              Resource Persons
            </Button>
            <Button variant="default" onClick={() => scrollToSection("contact")} className="ml-4">
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-fade-in">
            <Button
              variant="ghost"
              className="w-full justify-start text-base"
              onClick={() => scrollToSection("home")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-base"
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-base"
              onClick={() => scrollToSection("services")}
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-base"
              onClick={() => scrollToSection("staff")}
            >
              Resource Persons
            </Button>
            <Button
              variant="default"
              className="w-full justify-start"
              onClick={() => scrollToSection("contact")}
            >
              Request Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
