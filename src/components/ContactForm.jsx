import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Replace with your Google Form URL (get this from the form's "Send" button)
			const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSca2p7yNSmIUP6rLZHoqdR7gfwvwcECxhhgISEujULKBsHpcw/viewform?usp=sf_link';

			await fetch(formUrl, {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					// Replace entry.XXXXXX with your actual form field IDs
					'entry.2015786922': formData.name,
					'entry.1042595298': formData.email,
					'entry.1952300250': formData.phone,
					'entry.1218471565': formData.company,
					'entry.1508085688': formData.message,
				})
			});

	  setSubmitStatus('Thanks! We will get back to you soon.');
      setFormData({
				name: '',
				email: '',
				phone: '',
				company: '',
				message: ''
			});
		} catch (error) {
			setSubmitStatus('Error submitting form. Please try again.');
		}

		setIsSubmitting(false);
	};

	return (
		<div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<input
						type="text"
						placeholder="Your Name*"
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						required
					/>
				</div>
				<div>
					<input
						type="email"
						placeholder="Email Address*"
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={formData.email}
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						required
					/>
				</div>
				<div>
					<input
						type="tel"
						placeholder="Phone Number"
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={formData.phone}
						onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Company Name"
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={formData.company}
						onChange={(e) => setFormData({ ...formData, company: e.target.value })}
					/>
				</div>
				<div>
					<textarea
						placeholder="Your Message*"
						rows="4"
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={formData.message}
						onChange={(e) => setFormData({ ...formData, message: e.target.value })}
						required
					/>
				</div>
				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
				>
					{isSubmitting ? 'Sending...' : 'Send Message'}
				</button>
				{submitStatus && (
					<p className={`text-sm text-center ${submitStatus.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
						{submitStatus}
					</p>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
