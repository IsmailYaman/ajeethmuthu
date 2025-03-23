"use client";
import ScrollBaseAnimation from "@/components/motion/ScrollBasedAnimation";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const Contact = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		try {
			// In a real app, you would send this data to your server
			// await fetch('/api/contact', {
			//   method: 'POST',
			//   headers: { 'Content-Type': 'application/json' },
			//   body: JSON.stringify(formData)
			// });

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setSubmitted(true);
			setFormData({ name: "", email: "", message: "" });
		} catch (err) {
			setError("Something went wrong. Please try again later.");
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<div className="flex gap-12 h-[50vh] max-w-7xl mx-auto">
				{/* Contact Information */}
				<div className="w-1/2">
					<h2 className="text-3xl text-stone-950 font-bold mb-6">Contact</h2>
					<p className="mb-6 text-stone-950 max-w-md">
						Heb je vragen of wil je meer weten over mijn werk? Neem gerust contact met me op! Ik beantwoord
						graag al je vragen en denk graag mee over hoe ik je verder kan helpen.
					</p>

					<div className="space-y-4">
						<div className="flex items-start">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-green-400 mr-3 mt-0.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<div>
								<a
									href="mailto:contact@ajeethmuthu.nl"
									className="text-stone-950 hover:text-green-400 transition-colors"
								>
									contact@ajeethmuthu.nl
								</a>
							</div>
						</div>

						<div className="flex items-start">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-green-400 mr-3 mt-0.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<div>
								<p className="text-stone-950">Den Haag, Nederland</p>
							</div>
						</div>
					</div>

					<div className="mt-8">
						<h3 className="text-xl text-stone-950 font-semibold mb-4">Socials</h3>
						<div className="flex space-x-4">
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="h-10 w-10 rounded-full flex items-center justify-center bg-white hover:bg-green-400  hover:text-white transition-colors"
							>
								<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="h-10 w-10 rounded-full flex items-center justify-center bg-white hover:bg-green-400  hover:text-white transition-colors"
							>
								<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="h-10 w-10 rounded-full flex items-center justify-center bg-white hover:bg-green-400  hover:text-white transition-colors"
							>
								<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className="w-1/2">
					<h2 className="text-3xl text-stone-950 font-bold mb-6">Laten we babbelen!</h2>

					{submitted ? (
						<div className="bg-green-400 flex flex-col gap-2 rounded-lg p-6 text-center">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-12 w-12 mx-auto text-white mb-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<h3 className="text-xl text-white font-semibold mb-2">Bedankt!</h3>
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-white">
									Je bericht is succesvol verzonden. Ik zal zo snel mogelijk reageren.
								</p>
								<Button
									onClick={() => setSubmitted(false)}
									className="rounded-full cursor-pointer px-8 py-6 text-base font-medium bg-white hover:bg-green-200 text-stone-950"
								>
									Stuur nog een bericht
								</Button>
							</div>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-4">
							{error && (
								<div className="bg-red-900 border border-red-800 text-white p-3 rounded-md">
									{error}
								</div>
							)}

							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-1"></label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 bg-white placeholder-stone-700 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
									placeholder="Naam"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-1"></label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 bg-white border placeholder-stone-700 border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
									placeholder="E-mail"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-1"></label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className="w-full px-4 py-2 bg-white border placeholder-stone-700 border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
									placeholder="Bericht"
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={`w-full py-3 px-6 rounded-full cursor-pointer text-white font-medium transition-colors ${
									isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-green-400 hover:bg-green-500"
								}`}
							>
								{isSubmitting ? "Bezig met versturen..." : "Verstuur bericht"}
							</button>
						</form>
					)}
				</div>
			</div>
			<div className="absolute bottom-0">
				<ScrollBaseAnimation
					// delay={500}
					baseVelocity={-1}
					scrollDependent={true}
					clasname="font-bold text-sm text-stone-950 tracking-[-0.07em] leading-[90%]"
				>
					Ajeeth Muthu •
				</ScrollBaseAnimation>
			</div>
			<div className="text-stone-300 absolute bottom-0 left-0 right-0 text-center">
				Made with ❤️ by{" "}
				<a href="https://www.yamotion.com" target="_blank" className="hover:text-green-400">
					YAMOTION
				</a>
			</div>
		</>
	);
};

export default Contact;
