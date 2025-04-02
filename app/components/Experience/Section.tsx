"use client";
import { ExperienceItem } from "@/app/types/data";
import React from "react";
import { ExperienceItemSolo } from "./Item";
import Section from "../Section";

interface ExperienceSectionProps {
	title: string;
	items: ExperienceItem[];
	onItemClick: (item: ExperienceItem) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, items, onItemClick }) => {
	return (
		<div className="w-full bg-sky-50 rounded-lg p-6 h-fit">
			<h3 className="text-3xl font-semibold mb-6">{title}</h3>
			<div className="space-y-6">
				{items.map((item, index) => (
					<Section animationType="slideLeft" amount={0.3} key={index}>
						<ExperienceItemSolo key={index} item={item} onClick={onItemClick} />
					</Section>
				))}
			</div>
		</div>
	);
};
