import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import consultancyImage from "@/assets/hero-section/consultancy.png";
import researchImage from "@/assets/hero-section/girl_microscope.png";
import metallurgyImage from "@/assets/hero-section/microscopeView.png";
import studentsImage from "@/assets/hero-section/Postgraduate.png";
import teachingImage from "@/assets/hero-section/teaching.png";
import SEMImage from "@/assets/hero-section/SEM.png";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "advanced-materials",
    image: researchImage,
    alt: "Advanced materials research equipment and laboratory facilities at CMIPD",
  },
  {
    id: "knowledge-sharing",
    image: consultancyImage,
    alt: "Expert materials science consultancy and knowledge sharing services",
  },
  {
    id: "domain-expertise",
    image: metallurgyImage,
    alt: "Metallurgy and materials characterization expertise at University of Moratuwa",
  },
  {
    id: "students-support",
    image: studentsImage,
    alt: "Postgraduate students conducting materials science research at CMIPD",
  },
  {
    id: "teaching-training",
    image: teachingImage,
    alt: "Educational workshops and training sessions on materials science and engineering topics",
  },
  {
    id: "materials-characterization",
    image: SEMImage,
    alt: "State-of-the-art microscopy and materials characterization equipment",
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
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 h-screen" aria-hidden="true">
        <Carousel
          className="h-full w-full pointer-events-none"
          opts={{ loop: true }}
          setApi={setCarouselApi}
          aria-label="Hero image carousel"
        >
          <CarouselContent className="h-screen">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="h-screen">
                <div className="relative h-screen w-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="h-screen w-full object-cover"
                    loading="eager"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50 md:from-background/95 md:via-background/60 md:to-transparent" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-1/2 right-[-60px] h-80 w-80 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/2 h-[440px] w-[1100px] -translate-x-1/2 bg-gradient-to-t from-background/75 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-28">
        <div className="max-w-4xl space-y-10 animate-fade-in text-center md:text-left">
          <div className="relative">
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
            >
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Center for Materials Innovation and Product Development
              </span>
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-lg text-black md:mx-0 md:text-xl">
            Bridging the gap between industry and academia through expert
            consultancy, joint research and innovations.
          </p>

          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row md:items-start">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group w-auto px-8"
            >
              Request Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-auto px-8"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About CMIPD
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-6 md:justify-start">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === currentSlide
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
                onClick={() => carouselApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
