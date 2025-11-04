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
    <section id="staff" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resource Persons</h2>
          <p className="text-lg text-muted-foreground">
            Our expert faculty members bring decades of combined experience in materials science and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffMembers.map((staff, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24 border-4 border-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                      {staff.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-lg">{staff.name}</CardTitle>
                <CardDescription className="font-medium text-primary">{staff.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <GraduationCap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{staff.specialization}</p>
                </div>
                <div className="flex items-center space-x-2">
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

        <div className="mt-16 max-w-2xl mx-auto bg-card rounded-xl p-8 shadow-soft border border-border">
          <h3 className="text-xl font-semibold mb-4 text-center">Expertise Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Advanced Materials Characterization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Polymer Science & Engineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Metallurgy & Metal Processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Ceramic Materials</span>
              </li>
            </ul>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Composite Materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Biomaterials & Bioengineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Nanomaterials & Nanotechnology</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Surface Engineering & Coatings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
