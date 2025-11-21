import { Card, CardContent } from "@/components/ui/card";
import metallurgyImage from "@/assets/expertise_areas/metallurgy.webp";
import polymerImage from "@/assets/expertise_areas/plastic-pellets-colored.webp";
import ceramicImage from "@/assets/expertise_areas/ceramic_materials.webp";
import nanomaterialsImage from "@/assets/expertise_areas/nanomaterials.webp";
import advancedMaterialsImage from "@/assets/expertise_areas/advanced_materials_characterization.webp";
import compositeMaterialsImage from "@/assets/expertise_areas/composite_materials.webp";
import biomaterialsImage from "@/assets/expertise_areas/Biomaterials_Bioengineering.webp";
import multiphysicsImage from "@/assets/expertise_areas/FEA.webp";

const Staff = () => {
  return (
    <section
      id="staff"
      className="py-24 bg-muted/30"
      aria-labelledby="expertise-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              id="expertise-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Expertise Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive materials science capabilities spanning multiple
              disciplines
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Advanced Materials Characterization",
                image: advancedMaterialsImage,
                alt: "Advanced materials characterization equipment including electron microscopy, spectroscopy, and analysis tools at CMIPD laboratory",
              },
              {
                title: "Polymer Science & Engineering",
                image: polymerImage,
                alt: "Colorful polymer pellets representing polymer science and engineering research capabilities in plastics and synthetic materials",
              },
              {
                title: "Metallurgy & Metal Processing",
                image: metallurgyImage,
                alt: "Metallurgical analysis and metal processing expertise including alloy development and heat treatment studies",
              },
              {
                title: "Ceramic Materials",
                image: ceramicImage,
                alt: "Ceramic materials research and development for industrial and technical applications at University of Moratuwa",
              },
              {
                title: "Composite Materials",
                image: compositeMaterialsImage,
                alt: "Composite materials engineering showing fiber-reinforced materials and advanced composite structures",
              },
              {
                title: "Biomaterials & Bioengineering",
                image: biomaterialsImage,
                alt: "Hip replacement implant demonstrating biomaterials research for medical devices and tissue engineering applications",
              },
              {
                title: "Nanomaterials & Nanotechnology",
                image: nanomaterialsImage,
                alt: "Nanomaterials and nanotechnology research including nanoparticles and nanoscale materials characterization",
              },
              {
                title: "Multiphysics Simulations and Finite Element Analysis",
                image: multiphysicsImage,
                alt: "Finite Element Analysis (FEA) simulation showing stress distribution and computational materials modeling",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur"
              >
                <CardContent className="p-0">
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width="300"
                      height="160"
                    />
                  </div>
                  <div className="px-6 pb-6 pt-4 text-center bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                    <h4 className="font-semibold text-sm leading-snug text-foreground transition-colors group-hover:text-primary">
                      {area.title}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
