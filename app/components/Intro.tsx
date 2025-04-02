"use client";

import React from "react";
import ScrollBaseAnimation from "@/components/motion/ScrollBasedAnimation";

export default function Intro() {
	return (
		<>
			<div className="h-1/2 z-0 grid place-content-center">
				<ScrollBaseAnimation
					// delay={500}
					baseVelocity={1}
					scrollDependent={true}
					clasname="font-bold text-stone-950 tracking-[-0.07em] leading-[1.3]"
				>
					Ajeeth • Ajeeth •
				</ScrollBaseAnimation>
			</div>
			<div className="h-1/2 grid place-content-center">
				<ScrollBaseAnimation
					// delay={500}
					baseVelocity={-1}
					scrollDependent={true}
					clasname="font-bold tracking-[-0.07em] leading-[100%] text-sky-500"
				>
					Muthu • Muthu •
				</ScrollBaseAnimation>
			</div>
		</>
	);
}
