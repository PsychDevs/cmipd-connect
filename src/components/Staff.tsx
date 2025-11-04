import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, GraduationCap } from "lucide-react";

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
    <section id="staff" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Resource Persons</h2>
          <p className="text-xl text-muted-foreground font-light">
            Our expert faculty members bring decades of combined experience in materials science and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {staffMembers.map((staff, index) => (
            <Card key={index} className="glass shadow-glass hover:shadow-elevated transition-smooth border-0 group">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 gradient-primary opacity-20 blur-xl rounded-full" />
                    <Avatar className="h-28 w-28 border-4 border-primary/20 relative">
                      <AvatarFallback className="bg-gradient-primary text-white text-2xl font-semibold">
                        {staff.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <CardTitle className="text-lg mb-1">{staff.name}</CardTitle>
                <CardDescription className="font-medium gradient-primary bg-clip-text text-transparent">{staff.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-8">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{staff.specialization}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${staff.email}`}
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {staff.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 shadow-glass">
          <h3 className="text-3xl font-semibold mb-8 text-center">Expertise Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                <span className="leading-relaxed">Advanced Materials Characterization</span>
              </li>
              <li className="flex items-start">
                <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                <span className="leading-relaxed">Polymer Science & Engineering</span>
              </li>
              <li className="flex items-start">
                <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                <span className="leading-relaxed">Metallurgy & Metal Processing</span>
              </li>
              <li className="flex items-start">
                <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                <span className="leading-relaxed">Ceramic Materials</span>
              </li>
            </ul>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                <span className="leading-relaxed">Composite Materials</span>
              </li>
              <li className="flex items-start">
                <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                <span className="leading-relaxed">Biomaterials & Bioengineering</span>
              </li>
              <li className="flex items-start">
                <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                <span className="leading-relaxed">Nanomaterials & Nanotechnology</span>
              </li>
              <li className="flex items-start">
                <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                <span className="leading-relaxed">Surface Engineering & Coatings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
