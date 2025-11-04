import { ExternalLink } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-muted/50 border-t border-border py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8 mb-8">
					<div>
						<h3 className="font-semibold text-lg mb-4">About CMIPD</h3>
						<p className="text-sm text-muted-foreground">
							Centre for Materials Innovation and Product Development at the Department of Materials Science and Engineering,
							University of Moratuwa.
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
								<a href="#staff" className="text-muted-foreground hover:text-primary transition-smooth">
									Resource Persons
								</a>
							</li>
							<li>
								<a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
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
									href="mailto:cmipd@materials.mrt.ac.lk"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									cmipd@materials.mrt.ac.lk
								</a>
							</li>
							<li>
								<a href="tel:+94112650301" className="text-muted-foreground hover:text-primary transition-smooth">
									+94 11 265 0301
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
					<p>© {new Date().getFullYear()} Centre for Materials Innovation and Product Development. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
