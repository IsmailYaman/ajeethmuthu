"use client";

import React from "react";
import ScrollBaseAnimation from "@/components/motion/ScrollBasedAnimation";
import Section from "./Section";

export default function Intro() {
	return (
		<Section animationType="fadeIn" className="h-screen">
			<div className="h-1/2 justify-content- grid place-content-center">
				<ScrollBaseAnimation
					// delay={500}
					baseVelocity={3}
					scrollDependent={true}
					clasname="font-bold text-stone-950 tracking-[-0.07em] leading-[90%]"
				>
					Ajeeth • Ajeeth •       
				</ScrollBaseAnimation>
			</div>
			<div className="h-1/2 grid place-content-center">
				<ScrollBaseAnimation
					// delay={500}
					baseVelocity={-3}
					scrollDependent={true}
					clasname="font-bold tracking-[-0.07em] leading-[90%] text-sky-500"
				>
					Muthu • Muthu • 
				</ScrollBaseAnimation>
			</div>
		</Section>
	);
}
