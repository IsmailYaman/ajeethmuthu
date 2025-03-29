import React from "react";
import Image from "next/image";
import { AboutProps } from "@/app/types/data";
import Section from "./Section";

interface AboutSectionProps {
	data: AboutProps["data"];
	imageFirst?: boolean;
	background?: "white" | "sky";
	id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data, imageFirst = false, background = "white", id }) => {
	// Function to split text into paragraphs
	const renderParagraphs = (text: string) => {
		return text.split("\n\n").map((paragraph, index) => (
			<p key={index} className={`text-lg md:text-xl leading-relaxed text-gray-600 ${index > 0 ? "mt-4" : ""}`}>
				{paragraph}
			</p>
		));
	};

	// Create text content section
	const textContent = (
		<div className="flex flex-col justify-center space-y-4 md:w-1/2">
			<h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight">{data.title}</h2>
			{renderParagraphs(data.description)}
		</div>
	);

	// Create image section
	const imageContent = (
		<Section animationType="slideLeft" className="flex justify-center items-start w-full md:w-1/2">
			<Image
				src={data.image}
				alt={data.title}
				width={600}
				height={400}
				className="rounded-lg object-cover w-full h-auto max-w-lg"
			/>
		</Section>
	);

	const bgColor = background === "sky" ? "bg-sky-100" : "";

	return (
		<Section animationType="slideLeft" amount={0.3}>
			<section id={id} className={`text-stone-950 sm:h-screen h-fit w-full sm:sticky sm:top-0 ${bgColor}`}>
				<div className="max-w-7xl flex items-center sm:h-screen h-fit mx-auto p-4">
					<div className="w-full gap-8 py-12">
						{/* Mobile layout - always image first */}
						<div className="flex flex-col md:hidden w-full gap-8">
							{imageContent}
							{textContent}
						</div>

						{/* Desktop layout - respects imageFirst prop */}
						<div className="hidden md:flex md:flex-row w-full gap-8">
							{imageFirst ? (
								<>
									{imageContent}
									{textContent}
								</>
							) : (
								<>
									{textContent}
									{imageContent}
								</>
							)}
						</div>
					</div>
				</div>
			</section>
		</Section>
	);
};

export default AboutSection;
