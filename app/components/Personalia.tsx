"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { intro } from "../data/data";
import Section from "./Section";

export default function Personalia() {
	return (
		<Section id="home" amount={0.3}>
			<section className="relative flex min-h-screen w-full items-center py-24 justify-center">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center mx-4">
					<div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
						<h1 className="mb-4 text-5xl font-extrabold text-stone-950 md:text-6xl">{intro.greeting}</h1>
						<p className="mb-6 text-4xl text-stone-950">
							{intro.introduction}{" "}
							<span className="text-sky-500 h-8 inline-block font-extrabold relative">Data Steward</span>
						</p>
						<p className="mb-8 text-lg text-stone-800">{intro.description}</p>
						<div className="flex flex-wrap justify-center gap-4 md:justify-start">
							{intro.socialLinks.map((link, index) => (
								<Link
									key={index}
									href={link.url}
									target={link.url.startsWith("http") ? "_blank" : undefined}
								>
									<Button
										variant={link.isPrimary ? "default" : "outline"}
										className={`rounded-full cursor-pointer px-8 py-6 text-base font-medium ${
											link.isPrimary
												? "bg-sky-500 hover:bg-sky-600"
												: "border-sky-400 text-sky-500 hover:text-sky-500 hover:bg-sky-500/10"
										}`}
									>
										{link.name}
									</Button>
								</Link>
							))}
						</div>
					</div>

					{/* Right Content - Image */}
					<div className="order-1 flex justify-center md:justify-end md:order-2">
						<div className="relative h-[300px] w-[300px] rounded-full shadow-lg overflow-hidden md:h-[600px] md:w-[600px]">
							<Image src="/img/ajeeth.jpg" alt="Ajeeth Muthu" fill className="object-cover" priority />
						</div>
					</div>
				</div>
			</section>
		</Section>
	);
}
