import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, GraduationCap, Microscope, Layers, Hammer, Amphora, Dna, Computer, Atom, Dribbble } from "lucide-react";

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
							{ icon: Microscope, title: "Advanced Materials Characterization", gradient: "from-blue-500 to-cyan-500" },
							{ icon: Dribbble, title: "Polymer Science & Engineering", gradient: "from-purple-500 to-pink-500" },
							{ icon: Hammer, title: "Metallurgy & Metal Processing", gradient: "from-orange-500 to-red-500" },
							{ icon: Amphora, title: "Ceramic Materials", gradient: "from-amber-500 to-yellow-500" },
							{ icon: Layers, title: "Composite Materials", gradient: "from-green-500 to-emerald-500" },
							{ icon: Dna, title: "Biomaterials & Bioengineering", gradient: "from-teal-500 to-cyan-500" },
							{ icon: Atom, title: "Nanomaterials & Nanotechnology", gradient: "from-indigo-500 to-purple-500" },
							{
								icon: Computer,
								title: "Multiphysics Simulations and Finite Element Analysis",
								gradient: "from-pink-500 to-rose-500",
							},
						].map((area, index) => {
							const Icon = area.icon;
							return (
								<Card
									key={index}
									className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card/50 backdrop-blur"
								>
									<CardContent className="p-6 flex flex-col items-center text-center">
										<div
											className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${area.gradient} mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
										>
											<Icon className="h-6 w-6 text-white" />
										</div>
										<h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
											{area.title}
										</h4>
									</CardContent>
									<div
										className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
									/>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Staff;
