import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Target, Zap, Linkedin, Twitter, Mail, Phone, Menu, X } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import ContactForm from './components/ContactForm';


// Update ContactForm styles to match your theme:

const AnimatedBackground = () => (
	<div className="absolute inset-0 -z-10">
		<Canvas>
			<ambientLight intensity={1} />
			<directionalLight position={[2, 1, 1]} />
			<mesh>
				<Sphere args={[1, 100, 200]}>
					<MeshDistortMaterial
						color="#8b5cf6"
						attach="material"
						distort={0.5}
						speed={1.5}
						roughness={0}
					/>
				</Sphere>
			</mesh>
			<OrbitControls enableZoom={false} autoRotate />
		</Canvas>
	</div>
);
const LandingPage = () => {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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

	const closeMenu = () => {
		setIsMenuOpen(false);
	};
	const handleScheduleCall = () => {
		window.location.href = "your-google-calendar-link";
		// or for new tab:
		window.open("https://calendar.app.google/qjPRhJvWUMTNApZJA", "_blank", "noopener,noreferrer");
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			{/* Progress Bar */}
			<div
				className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 z-50"
				style={{ width: `${scrollProgress}%` }}
			/>

			{/* Navigation */}
			<nav className="fixed w-full bg-white/70 backdrop-blur-md z-40 border-b border-blue-100">
				<div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative">
					<div className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
						distk
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					{/* Desktop Navigation */}
					<div className="hidden md:flex gap-8 text-sm items-center">
						<a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
						<a href="#ai-solutions" className="hover:text-blue-600 transition-colors">AI Solutions</a>
						<a href="#success" className="hover:text-blue-600 transition-colors">Success Stories</a>
						<a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
						<div className="flex gap-4">
							<a
								href="https://www.linkedin.com/company/distk-technologies/?viewAsMember=true"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-600 transition-colors"
							>
								<Linkedin size={20} />
							</a>
							<a
								href="https://twitter.com/distktechnologies"
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

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-0.5 py-4 px-4 md:hidden">
							<div className="flex flex-col gap-4">
								<a
									href="#services"
									className="hover:text-blue-600 transition-colors py-2"
									onClick={closeMenu}
								>
									Services
								</a>
								<a
									href="#ai-solutionss"
									className="hover:text-blue-600 transition-colors py-2"
									onClick={closeMenu}
								>
									AI Solutions
								</a>
								<a
									href="#success"
									className="hover:text-blue-600 transition-colors py-2"
									onClick={closeMenu}
								>
									Success Stories
								</a>
								<a
									href="#contact"
									className="hover:text-blue-600 transition-colors py-2"
									onClick={closeMenu}
								>
									Contact
								</a>
								<div className="flex gap-4 py-2">
									<a
										href="https://www.linkedin.com/company/distk-technologies/?viewAsMember=true"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-blue-600 transition-colors"
									>
										<Linkedin size={20} />
									</a>
									<a
										href="https://twitter.com/distktechnologies"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-blue-600 transition-colors"
									>
										<Twitter size={20} />
									</a>
								</div>
								<button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-200">
									Contact
								</button>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section className="min-h-screen pt-20 relative overflow-hidden pb-32">  {/* Added pb-32 for bottom spacing */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />

				<div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16">
					<div className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
						<div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
							For Startups & SMEs
						</div>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-900 to-purple-900 text-transparent bg-clip-text mb-6 px-4 md:px-0">
							Sell Better & Market More Effectively
						</h1>
						<p className="text-lg md:text-xl text-slate-600 mb-8 px-4 md:px-0">
							We help startups and SMEs build and execute end-to-end GTM strategies, improve their sales processes, and enable effective marketing - driving real revenue growth.
						</p>
						<div className="flex flex-col md:flex-row gap-4 justify-center mb-16 px-4 md:px-0">
							<button
								onClick={() => window.open('https://calendar.app.google/qjPRhJvWUMTNApZJA', '_blank')}
								className="w-full md:w-auto px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-lg hover:shadow-blue-700/20 transition-all duration-300 transform hover:-translate-y-1"
							>
								Schedule a Strategy Call
							</button>
							<button className="w-full md:w-auto px-8 py-4 border border-blue-200 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300">
								View Our Results
							</button>
						</div>
					</div>

					{/* Stats Section with added margin */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4 md:px-0 mb-16">  {/* Added mb-16 */}
						{[
							{ number: "20%+", label: "Revenue Growth" },
							{ number: "15+", label: "Clients Enabled" },
							{ number: "20+", label: "Teams Trained" },
							{ number: "3x", label: "Average ROI" }
						].map((stat, i) => (
							<div key={i} className="p-6 md:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50 group">
								<div className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">
									{stat.number}
								</div>
								<div className="text-slate-600">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-16 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30" />
				<div className="max-w-7xl mx-auto space-y-8 md:space-y-16 relative">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
							How We Help You Grow
						</h2>
						<p className="text-slate-600 max-w-2xl mx-auto px-4">
							End-to-end solutions to boost your revenue and market presence
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
							<div key={i} className="group p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent">
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

			{/* AI Solutions Section */}
			<section id="ai-solutions" className="py-16 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30" />
				<div className="max-w-7xl mx-auto space-y-8 md:space-y-16 relative">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
							AI-Powered Solutions
						</h2>
						<p className="text-slate-600 max-w-2xl mx-auto px-4">
							Transform your business operations with cutting-edge AI implementations
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Marketing Automation Card */}
						<div className="group p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent">
							<div className="mb-4 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<svg
									className="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-slate-800">Marketing Automation</h3>
							<p className="text-slate-600 mb-4">
								Leverage AI to transform your marketing efforts and drive better results.
							</p>
							<ul className="space-y-2 text-slate-600">
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Automated content generation and optimization
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									AI-driven campaign management
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Personalized customer journey mapping
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Smart audience segmentation
								</li>
							</ul>
						</div>

						{/* Sales Automation Card */}
						<div className="group p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent">
							<div className="mb-4 h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<svg
									className="w-6 h-6 text-purple-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-slate-800">Sales Automation</h3>
							<p className="text-slate-600 mb-4">
								Enhance your sales processes with AI-powered automation and insights.
							</p>
							<ul className="space-y-2 text-slate-600">
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Intelligent lead scoring and prioritization
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Automated follow-up sequences
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Predictive sales forecasting
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Smart CRM integration
								</li>
							</ul>
						</div>

						{/* Agentic Implementation Card */}
						<div className="group p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-transparent">
							<div className="mb-4 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<svg
									className="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-slate-800">Agentic Implementation</h3>
							<p className="text-slate-600 mb-4">
								Deploy intelligent AI agents tailored to your specific business needs.
							</p>
							<ul className="space-y-2 text-slate-600">
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Custom AI agent development
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Autonomous workflow automation
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Intelligent decision support
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									24/7 automated operations
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* Success Stories Section */}
			<section id="success" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
				<div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Real Results, Real Growth</h2>
						<p className="text-blue-200 max-w-2xl mx-auto px-4">
							See how we've helped businesses like yours achieve their goals
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{[
							{
								client: "Tech Startup",
								result: "100% Revenue Growth",
								description: "Complete GTM strategy implementation and sales team training"
							},
							{
								client: "E-commerce SME",
								result: "2x Lead Generation",
								description: "Marketing optimization and sales process improvement"
							},
							{
								client: "B2B Service Provider",
								result: "30% Conversion Rate",
								description: "Sales enablement and team training program"
							}
						].map((story, i) => (
							<div key={i} className="group p-6 md:p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
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


			{/* Contact form Section */}

			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
						<p className="text-gray-600">
							We'd love to hear about your project
						</p>
					</div>
					<ContactForm />
				</div>
			</section>
			{/* Contact Section */}
			<section id="contact" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
				<div className="max-w-7xl mx-auto text-center space-y-8">
					<h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Business?</h2>
					<p className="text-blue-100 max-w-xl mx-auto px-4">
						Let's discuss how we can help you improve your sales and marketing performance
					</p>
					<div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 px-4">
						<a href="mailto:connect@distk.in" className="flex items-center justify-center gap-2 hover:text-blue-200 transition-colors">
							<Mail size={20} />
							connect@distk.in
						</a>
						{/* <a href="tel:+1234567890" className="flex items-center justify-center gap-2 hover:text-blue-200 transition-colors">
							<Phone size={20} />
							+1 (234) 567-890
						</a>*/}
					</div>
					<div className="pt-8">
						<button
							onClick={() => window.open('https://calendar.app.google/qjPRhJvWUMTNApZJA', '_blank')}
							className="w-full md:w-auto px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-lg hover:shadow-blue-700/20 transition-all duration-300 transform hover:-translate-y-1"
						>
							Schedule a Strategy Call
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
								<li>AI Solutions</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Company</h3>
							<ul className="space-y-2 text-slate-400">
								<li>About Us</li>
								<li>Success Stories</li>
								<li>Contact</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold mb-4">Connect</h3>
							<div className="flex gap-4">
								<a
									href="https://www.linkedin.com/company/distk-technologies/?viewAsMember=true"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-blue-400 transition-colors"
								>
									<Linkedin size={24} />
								</a>
								<a
									href="https://twitter.com/distktechnologies"
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
