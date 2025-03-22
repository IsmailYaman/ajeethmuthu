"use client";

import React from "react";
import Section from "./Section";
import ScrollBaseAnimation from "@/components/motion/ScrollBasedAnimation";

export default function Intro() {
	return (
		<Section className="w-full" fullHeight>
			<div className="h-1/2 grid place-content-center">
				<ScrollBaseAnimation
					baseVelocity={3}
					scrollDependent={true}
					clasname="font-bold text-stone-950 tracking-[-0.07em] leading-[90%]"
				>
					Ajeeth • Ajeeth •
				</ScrollBaseAnimation>
			</div>
			<div className="h-1/2 grid place-content-center">
				<ScrollBaseAnimation
					baseVelocity={-3}
					scrollDependent={true}
					clasname="font-bold tracking-[-0.07em] leading-[90%] text-green-500"
				>
					Muthu • Muthu •
				</ScrollBaseAnimation>
			</div>
		</Section>
	);
}