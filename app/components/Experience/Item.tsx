"use client";
import React from "react";
import { ExperienceItem as ExperienceItemType } from "@/app/types/data";
import Image from "next/image";

interface ExperienceItemProps {
	item: ExperienceItemType;
	onClick: (item: ExperienceItemType) => void;
}

export const ExperienceItemSolo: React.FC<ExperienceItemProps> = ({ item, onClick }) => {
	return (
		<div
			className="p-4 border border-transparent bg-sky-200 hover:border hover:border-sky-500 rounded-lg transition-all cursor-pointer"
			onClick={() => onClick(item)}
		>
			<div className="flex gap-4">
				<div className="flex items-center justify-center">
					<div className="min-w-[100px] min-h-[100px] bg-white flex items-center justify-center sm:hidden lg:flex">
						<img width={"100px"} height={"auto"} src={item.image} alt={item.title} />
					</div>
				</div>
				<div>
					<h4 className="text-md sm:text-xl font-bold group-hover:font-light">{item.title}</h4>
					<p className="text-md sm:text-xl text-stone-950">{item.name}</p>
					<p className="mt-2">{item.year}</p>
				</div>
			</div>
		</div>
	);
};