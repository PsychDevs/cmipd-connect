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
		<nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-2">
						<div className="flex flex-col">
							<a href="/" className="text-lg font-bold text-primary">
								CMIPD
							</a>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						<Button variant="ghost" onClick={() => scrollToSection("home")}>
							Home
						</Button>
						<Button variant="ghost" onClick={() => scrollToSection("about")}>
							About
						</Button>
						<Button variant="ghost" onClick={() => scrollToSection("services")}>
							Services
						</Button>
						<Button variant="ghost" onClick={() => scrollToSection("staff")}>
							Resource Persons
						</Button>
						<Button variant="default" onClick={() => scrollToSection("contact")} className="ml-2">
							Request Consultation
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden pb-4 space-y-2 animate-fade-in">
						<Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection("home")}>
							Home
						</Button>
						<Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection("about")}>
							About
						</Button>
						<Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection("services")}>
							Services
						</Button>
						<Button variant="ghost" className="w-full justify-start" onClick={() => scrollToSection("staff")}>
							Resource Persons
						</Button>
						<Button variant="default" className="w-full justify-start" onClick={() => scrollToSection("contact")}>
							Request Consultation
						</Button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
