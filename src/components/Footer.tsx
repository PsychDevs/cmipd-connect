import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-muted/50 border-t border-border py-12 md:px-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[3fr_1fr_1fr] gap-16 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About CMIPD</h3>
            <p className="text-sm text-muted-foreground line-spacing-">
              Centre for Materials Innovation and Product Development at the
              Department of Materials Science and Engineering, University of
              Moratuwa. <br /> <br />
              We provide expert consultancy, research collaboration, and
              advanced materials characterization services to bridge academia
              and industry.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://uom.lk/materials/test-home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth flex items-center"
                >
                  Department Website
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://uom.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth flex items-center"
                >
                  University of Moratuwa
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Our Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:head-materials@uom.lk"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  head-materials@uom.lk
                </a>
              </li>
              <li>
                <a
                  href="tel:+94112640440"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  +94 11 264 0440
                </a>
              </li>
              <li className="text-muted-foreground pt-2">
                University of Moratuwa
                <br />
                Katubedda, Moratuwa 10400
                <br />
                Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Centre for Materials Innovation and
            Product Development | Developed by{" "}
            <a
              href="https://www.linkedin.com/in/lasith-dissanayake/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline hover:underline-offset-4"
            >
              Lasith
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
