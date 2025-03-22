"use client";
import { ExperienceItem } from "@/app/types/data";
import React from "react";
import { ExperienceItemSolo } from "./Item";

interface ExperienceSectionProps {
	title: string;
	items: ExperienceItem[];
	onItemClick: (item: ExperienceItem) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, items, onItemClick }) => {
	return (
		<div>
			<h3 className="text-2xl font-semibold mb-6">{title}</h3>
			<div className="space-y-6">
				{items.map((item, index) => (
					<ExperienceItemSolo key={index} item={item} onClick={onItemClick} />
				))}
			</div>
		</div>
	);
};
