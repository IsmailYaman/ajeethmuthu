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
			className="p-4 border border-transparent bg-green-100 hover:border hover:border-green-500 rounded-lg transition-all cursor-pointer"
			onClick={() => onClick(item)}
		>
			<h4 className="text-xl font-medium">{item.title}</h4>
			<p className="text-gray-600 dark:text-gray-300">{item.name}</p>
			<p className="mt-2">{item.year}</p>
		</div>
	);
};
