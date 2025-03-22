"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { about } from "@/app/data/data";
import AboutCard from "./AboutCard";

const About: React.FC = () => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	return (
		<section id="about" className="relative">
			<div ref={container} className="h-[400vh] relative">
				{about.map((item, i) => {
					const targetScale = 1 - (about.length - i) * 0.05;
					return (
                        //show a h1 title on top of only the first card.
						<AboutCard
							key={item.title}
							item={item}
							i={i}
							progress={scrollYProgress}
							range={[i * 0.25, 1]}
							targetScale={targetScale}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default About;
