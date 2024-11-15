import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Target, Zap, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const LandingPage = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight - windowHeight;
			const scrolled = window.scrollY;
			setScrollProgress((scrolled / documentHeight) * 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			{/* Progress Bar */}
			<div
				className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 z-50"
				style={{ width: `${scrollProgress}%` }}
			/>

			{/* Navigation */}
			<nav className="fixed w-full bg-white/70 backdrop-blur-md z-40 border-b border-blue-100">
				<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
					<div className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
						distk
					</div>
					<div className="flex gap-8 text-sm items-center">
						<a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
						<a href="#success" className="hover:text-blue-600 transition-colors">Success Stories</a>
						<a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
						<div className="flex gap-4">
							<a
								href="https://linkedin.com/company/distk"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-600 transition-colors"
							>
								<Linkedin size={20} />
							</a>
							<a
								href="https://twitter.com/distk"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-600 transition-colors"
							>
								<Twitter size={20} />
							</a>
						</div>
						<button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-200">
							Contact
						</button>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="min-h-screen pt-20 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />

				<div className="relative max-w-7xl mx-auto px-6 pt-16">
					<div className="text-center max-w-4xl mx-auto mb-16">
						<div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
							For Startups & SMEs
						</div>
						<h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-blue-900 to-purple-900 text-transparent bg-clip-text mb-6">
							Sell Better & Market More Effectively
						</h1>
						<p className="text-xl text-slate-600 mb-8">
							We help startups and SMEs build and execute end-to-end GTM strategies, improve their sales processes, and enable effective marketing - driving real revenue growth.
						</p>
						<div className="flex gap-4 justify-center mb-16">
							<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1">
								Schedule a Call
								<ArrowRight className="inline ml-2" size={16} />
							</button>
							<button className="px-8 py-4 border border-blue-200 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300">
								View Our Results
							</button>
						</div>
					</div>

					{/* Stats Section */}
					<div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
						<div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50 group">
							<div className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
								40%+
							</div>
							<div className="text-slate-600">Revenue Growth</div>
						</div>
						<div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50 group">
							<div className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
								180+
							</div>
							<div className="text-slate-600">Clients Enabled</div>
						</div>
						<div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50 group">
							<div className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
								500+
							</div>
							<div className="text-slate-600">Teams Trained</div>
						</div>
						<div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50 group">
							<div className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
								3x
							</div>
							<div className="text-slate-600">Average ROI</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-32 px-6 bg-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30" />
				<div className="max-w-7xl mx-auto space-y-16 relative">
					<div className="text-center space-y-4">
						<h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
							How We Help You Grow
						</h2>
						<p className="text-slate-600 max-w-2xl mx-auto">
							End-to-end solutions to boost your revenue and market presence
						</p>
					</div>
					<div className="grid grid-cols-3 gap-8">
						{[
							{
								icon: <Globe className="text-blue-600" size={24} />,
								title: "GTM Strategy & Execution",
								description: "We build and execute comprehensive go-to-market strategies tailored for your business goals"
							},
							{
								icon: <Target className="text-purple-600" size={24} />,
								title: "Sales Team Enablement",
								description: "Transform your sales team with our proven methodologies and hands-on training"
							},
							{
								icon: <Zap className="text-blue-600" size={24} />,
								title: "Marketing Excellence",
								description: "Optimize your marketing efforts to generate qualified leads and drive conversions"
							}
						].map((service, i) => (
							<div key={i} className="group p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent">
								<div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
									{service.icon}
								</div>
								<h3 className="text-xl font-semibold mb-2 text-slate-800">
									{service.title}
								</h3>
								<p className="text-slate-600">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Stories Section */}
			<section id="success" className="py-32 px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
				<div className="max-w-7xl mx-auto space-y-16">
					<div className="text-center space-y-4">
						<h2 className="text-4xl font-bold">Real Results, Real Growth</h2>
						<p className="text-blue-200 max-w-2xl mx-auto">
							See how we've helped businesses like yours achieve their goals
						</p>
					</div>
					<div className="grid grid-cols-3 gap-8">
						{[
							{
								client: "Tech Startup",
								result: "185% Revenue Growth",
								description: "Complete GTM strategy implementation and sales team training"
							},
							{
								client: "E-commerce SME",
								result: "3x Lead Generation",
								description: "Marketing optimization and sales process improvement"
							},
							{
								client: "B2B Service Provider",
								result: "60% Conversion Rate",
								description: "Sales enablement and team training program"
							}
						].map((story, i) => (
							<div key={i} className="group p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
								<h3 className="text-xl font-semibold mb-2 text-blue-300">
									{story.client}
								</h3>
								<div className="text-2xl font-bold mb-4 text-white">
									{story.result}
								</div>
								<p className="text-blue-200">
									{story.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-32 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
				<div className="max-w-7xl mx-auto text-center space-y-8">
					<h2 className="text-4xl font-bold">Ready to Grow Your Business?</h2>
					<p className="text-blue-100 max-w-xl mx-auto">
						Let's discuss how we can help you improve your sales and marketing performance
					</p>
					<div className="flex justify-center gap-8 mt-8">
						<a href="mailto:contact@distk.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
							<Mail size={20} />
							contact@distk.in
						</a>
						<a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
							<Phone size={20} />
							+1 (234) 567-890
						</a>
					</div>
					<div className="pt-8">
						<button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-lg hover:shadow-blue-700/20 transition-all duration-300 transform hover:-translate-y-1">
							Schedule a Strategy Call
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-4 gap-8">
						<div>
							<div className="text-2xl font-semibold mb-4">distk</div>
							<p className="text-slate-400">Enabling better sales and marketing performance for startups and SMEs</p>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Services</h3>
							<ul className="space-y-2 text-slate-400">
								<li>GTM Strategy</li>
								<li>Sales Enablement</li>
								<li>Marketing Excellence</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Company</h3>
							<ul className="space-y-2 text-slate-400">
								<li>About Us</li>
								<li>Careers</li>
								<li>Contact</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Connect</h3>
							<div className="flex gap-4">
								<a
									href="https://linkedin.com/company/distk"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-blue-400 transition-colors"
								>
									<Linkedin size={24} />
								</a>
								<a
									href="https://twitter.com/distk"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-blue-400 transition-colors"
								>
									<Twitter size={24} />
								</a>
							</div>
						</div>
					</div>
					<div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
						<p>© 2024 Distk. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
