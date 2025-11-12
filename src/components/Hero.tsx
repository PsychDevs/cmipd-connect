import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import collaborationImage from "@/assets/collaboration.jpg";
import consultancyImage from "@/assets/Consultancy.png";
import researchImage from "@/assets/Students.png";
import discussionImage from "@/assets/discussion.png";
import metallurgyImage from "@/assets/metallurgyDisplay.png";
import teachingImage from "@/assets/teaching.png";
import equipmentImage from "@/assets/equipmentElectric.png";
import microscopyImage from "@/assets/microscopeView.png";
import { cn } from "@/lib/utils";

const slides = [
	{
		id: "advanced-materials",
		image: researchImage,
	},
	{
		id: "knowledge-sharing",
		image: consultancyImage,
	},
	{
		id: "product-development",
		image: equipmentImage,
	},
	{
		id: "domain-expertise",
		image: metallurgyImage,
	},
];

const Hero = () => {
	const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		if (!carouselApi) {
			return;
		}

		const onSelect = () => {
			setCurrentSlide(carouselApi.selectedScrollSnap());
		};

		onSelect();
		carouselApi.on("select", onSelect);

		return () => {
			carouselApi.off("select", onSelect);
		};
	}, [carouselApi]);

	useEffect(() => {
		if (!carouselApi) {
			return;
		}

		const autoplay = window.setInterval(() => {
			carouselApi.scrollNext();
		}, 5000);

		return () => {
			window.clearInterval(autoplay);
		};
	}, [carouselApi]);

	return (
		<section id="home" className="relative min-h-screen flex items-center gradient-hero">
			<div className="container mx-auto px-4 py-24">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center">
					<div className="space-y-8 animate-fade-in text-left">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
							<span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								Center for Materials Innovation and Product Development
							</span>
						</h1>

						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
							Bridging the gap between industry and academia through cutting-edge materials research, innovation, and expert
							consultancy services.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button size="lg" onClick={scrollToContact} className="group w-full sm:w-auto">
								Request Consultation
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="w-full sm:w-auto"
								onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
							>
								Learn More
							</Button>
						</div>
					</div>

					<div className="relative w-full lg:max-w-xl lg:justify-self-end">
						<div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/15 via-secondary/10 to-primary/5 blur-3xl" />
						<Carousel className="relative z-10" opts={{ loop: true }} setApi={setCarouselApi}>
							<CarouselContent className="h-full">
								{slides.map((slide) => (
									<CarouselItem key={slide.id}>
										<div className="relative overflow-hidden rounded-3xl border bg-background shadow-medium">
											<img src={slide.image} alt={slide.title} className="h-[22rem] w-full object-cover" />
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
						<div className="mt-6 flex flex-col items-center gap-3">
							<div className="flex items-center gap-2">
								{slides.map((_, index) => (
									<button
										key={index}
										type="button"
										className={cn(
											"h-2 rounded-full transition-all",
											index === currentSlide ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40",
										)}
										aria-label={`Go to slide ${index + 1}`}
										aria-current={index === currentSlide}
										onClick={() => carouselApi?.scrollTo(index)}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
