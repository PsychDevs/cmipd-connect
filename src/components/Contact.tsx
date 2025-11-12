import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
	const openConsultationForm = () => {
		// Replace with actual Google Form URL when available
		window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
	};

	return (
		<section id="contact" className="py-24">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
					<p className="text-lg text-muted-foreground">
						Ready to collaborate? Request a consultation or reach out to us directly
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
					<Card className="shadow-medium border-border flex flex-col">
						<CardHeader>
							<CardTitle className="text-2xl">Request Consultation</CardTitle>
							<CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col flex-grow">
							<ul className="space-y-2 text-muted-foreground mb-6 flex-grow">
								<li className="flex items-start">
									<span className="text-primary mr-2">•</span>
									<span>Describe your materials science challenge or project</span>
								</li>
								<li className="flex items-start">
									<span className="text-primary mr-2">•</span>
									<span>Specify the type of expertise you need</span>
								</li>
								<li className="flex items-start">
									<span className="text-primary mr-2">•</span>
									<span>Request specific faculty members or service areas</span>
								</li>
								<li className="flex items-start">
									<span className="text-primary mr-2">•</span>
									<span>Schedule an initial consultation meeting</span>
								</li>
							</ul>
							<Button onClick={openConsultationForm} className="w-full group mt-auto" size="lg">
								Open Consultation Form
								<ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</CardContent>
					</Card>

					<Card className="shadow-medium border-border">
						<CardHeader>
							<CardTitle className="text-2xl">Contact Information</CardTitle>
							<CardDescription>Reach out to us directly through any of these channels</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Address</p>
										<p className="text-sm text-muted-foreground">
											Department of Materials Science and Engineering
											<br />
											Faculty of Engineering
											<br />
											University of Moratuwa
											<br />
											Katubedda, Moratuwa 10400
											<br />
											Sri Lanka
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-3">
									<Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Phone</p>
										<a href="tel:+94112650301" className="text-sm text-primary hover:underline">
											+94 11 265 0301
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-3">
									<Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
									<div>
										<p className="font-medium">Email</p>
										<a href="mailto:head-materials@uom.lk" className="text-sm text-primary hover:underline">
											head-materials@uom.lk
										</a>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Contact;
