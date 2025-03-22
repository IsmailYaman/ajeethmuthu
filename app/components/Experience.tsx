"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data/data";
import { ExperienceContent } from "../types/data"; // Import your existing interface
import Section from "./Section";

const Experience = () => {
	return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

	return (
		<section ref={targetRef} className="relative h-[400vh]">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<h1 className="absolute top-40 left-10 text-4xl font-bold text-stone-950 z-10">Mijn Ervaring</h1>
				<motion.div style={{ x }} className="flex gap-8 pl-8">
					{experience.items.map((item, index) => {
						return <ExperienceCard item={item} key={index} />;
					})}
				</motion.div>
			</div>
		</section>
	);
};

const ExperienceCard = ({ item }: { item: ExperienceContent["items"][0] }) => {
	return (
		<Section>
			<div className="group relative h-[500px] w-[450px] overflow-hidden bg-stone-950/80 rounded-xl shadow-xl">
				<div className="absolute inset-0 z-10 p-8 flex flex-col">
					<div className="mb-2">
						<span className="text-white/70 text-xl">{item.year}</span>
					</div>
					<h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
					<h4 className="text-xl text-white/90 font-medium mb-4">{item.company}</h4>

					<div className="flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
						<p className="text-white/80 leading-relaxed">{item.description}</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Experience;
