import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import collaborationImage from "@/assets/collaboration.jpg";

const About = () => {
  const objectives = [
    {
      icon: Users,
      title: "Industry-Academia Collaboration",
      description: "Strengthen partnerships between industry and academia to address real-world challenges",
    },
    {
      icon: Target,
      title: "Student Development",
      description: "Support academic development of undergraduate and postgraduate students with industry exposure",
    },
    {
      icon: Lightbulb,
      title: "Interdisciplinary Innovation",
      description: "Foster collaboration across disciplines to drive materials innovation and research",
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description: "Contribute to national economic development through materials science solutions",
    },
  ];

  const stats = [
    {
      label: "Industry Partners",
      value: "45+",
    },
    {
      label: "Projects Completed",
      value: "120+",
    },
    {
      label: "Years of Expertise",
      value: "10+",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-muted/40" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Elevating Materials Innovation for Industry and Academia
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The Department of Materials Science and Engineering established CMIPD as a premium platform that connects
            industrial ambition with academic excellence. We bridge the gap between critical market needs and emerging
            research, empowering students, researchers, and partners to deliver transformative materials solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8 rounded-3xl border border-border/60 bg-card/70 p-10 shadow-2xl backdrop-blur-lg">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">Our Mission</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                CMIPD exists to remove the structural barriers that prevent industries from accessing specialized
                materials science expertise. We facilitate agile collaboration, advanced infrastructure, and
                coordinated communication to accelerate the delivery of impactful, real-world solutions.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                By cultivating a connected ecosystem, we empower undergraduate and postgraduate students with
                industry-aligned experience while enabling partners to unlock new capabilities in research, innovation,
                and economic development.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-primary/20 bg-primary/10 px-5 py-6 text-left shadow-sm"
                >
                  <div className="text-3xl font-semibold text-primary">{stat.value}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-primary/40 via-transparent to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-background via-background/80 to-muted/30 p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[26px]">
                <img
                  src={collaborationImage}
                  alt="Industry-Academia Collaboration"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
