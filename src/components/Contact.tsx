import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const openConsultationForm = () => {
    // Replace with actual Google Form URL when available
    window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
  };

  return (
    <section id="contact" className="py-32 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-xl text-muted-foreground font-light">
            Ready to collaborate? Request a consultation or reach out to us directly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="glass shadow-glass border-0">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl mb-2">Request Consultation</CardTitle>
              <CardDescription className="text-lg">
                Fill out our consultation form and we'll get back to you within 24-48 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Our consultation request form allows you to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Describe your materials science challenge or project</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Specify the type of expertise you need</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Request specific faculty members or service areas</span>
                </li>
                <li className="flex items-start">
                  <span className="gradient-primary bg-clip-text text-transparent mr-3 font-bold">•</span>
                  <span>Schedule an initial consultation meeting</span>
                </li>
              </ul>
              <Button 
                onClick={openConsultationForm} 
                className="w-full group glow-primary"
                size="lg"
              >
                Open Consultation Form
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="glass shadow-glass border-0">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl mb-2">Contact Information</CardTitle>
              <CardDescription className="text-lg">
                Reach out to us directly through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary rounded-xl p-3 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Department of Materials Science and Engineering<br />
                      Faculty of Engineering<br />
                      University of Moratuwa<br />
                      Katubedda, Moratuwa 10400<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-primary rounded-xl p-3 mt-1">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+94112650301"
                      className="text-sm text-primary hover:underline"
                    >
                      +94 11 265 0301
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-primary rounded-xl p-3 mt-1">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:cmipd@materials.mrt.ac.lk"
                      className="text-sm text-primary hover:underline"
                    >
                      cmipd@materials.mrt.ac.lk
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="font-semibold mb-2">Office Hours</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monday - Friday: 8:00 AM - 4:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
