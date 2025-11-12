import { Card, CardContent } from "@/components/ui/card";
import semImage from "@/assets/SEM.png";
import researchImage from "@/assets/Students.png";
import consultancyImage from "@/assets/consultancy.jpg";
import collaborationImage from "@/assets/collaboration.jpg";
import heroImage from "@/assets/hero-image.jpg";


const Staff = () => {
	const staffMembers = [
		{
			name: "Prof. Senior Faculty Member",
			role: "Materials Characterization",
			specialization: "Advanced Materials, Nanotechnology",
			email: "faculty1@materials.mrt.ac.lk",
			initials: "SF",
		},
		{
			name: "Dr. Research Lead",
			role: "Composite Materials",
			specialization: "Polymer Composites, Manufacturing",
			email: "faculty2@materials.mrt.ac.lk",
			initials: "RL",
		},
		{
			name: "Dr. Technical Expert",
			role: "Metallurgy & Alloys",
			specialization: "Metal Processing, Corrosion",
			email: "faculty3@materials.mrt.ac.lk",
			initials: "TE",
		},
		{
			name: "Dr. Innovation Director",
			role: "Biomaterials",
			specialization: "Biomedical Applications, Tissue Engineering",
			email: "faculty4@materials.mrt.ac.lk",
			initials: "ID",
		},
	];

	return (
		<section id="staff" className="py-24 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="mt-16 max-w-5xl mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise Areas</h2>
						<p className="text-lg text-muted-foreground">
							Comprehensive materials science capabilities spanning multiple disciplines
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
						{[
							{ title: "Advanced Materials Characterization", image: semImage },
							{ title: "Polymer Science & Engineering", image: researchImage },
							{ title: "Metallurgy & Metal Processing", image: consultancyImage },
							{ title: "Ceramic Materials", image: collaborationImage },
							{ title: "Composite Materials", image: heroImage },
							{ title: "Biomaterials & Bioengineering", image: researchImage },
							{ title: "Nanomaterials & Nanotechnology", image: semImage },
							{
								title: "Multiphysics Simulations and Finite Element Analysis",
								image: consultancyImage,
							},
						].map((area, index) => (
							<Card
								key={index}
								className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
							>
								<CardContent className="p-0">
									<div className="relative h-40 w-full overflow-hidden">
										<img
											src={area.image}
											alt={area.title}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
