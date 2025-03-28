"use client";
import React from "react";
import { ExperienceItem as ExperienceItemType } from "@/app/types/data";

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
            <h4 className="text-xl font-medium group-hover:font-light">{item.title}</h4>
			<p className="text-stone-950">{item.name}</p>
			<p className="mt-2">{item.year}</p>
		</div>
	);
};
