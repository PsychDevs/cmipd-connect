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
				<img src={heroImage} alt="Materials Innovation" className="w-full h-full object-cover opacity-10" />
			</div>

			<div className="container mx-auto px-4 py-24 relative z-10">
				<div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
						<span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
							Center for Materials Innovation and Product Development
						</span>
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Bridging the gap between industry and academia through cutting-edge materials research, innovation, and expert
						consultancy services.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
						<Button size="lg" onClick={scrollToContact} className="group">
							Request Consultation
						</Button>
						<Button
							size="lg"
							variant="outline"
							onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
						>
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
