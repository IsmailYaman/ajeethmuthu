"use client";
import { SkillsItem } from "@/app/types/data";
import React from "react";
import { SkillsItemSolo } from "./Item";
import Section from "../Section";

interface SkillsSectionProps {
	title: string;
	items: SkillsItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ title, items }) => {
	return (
		<div className="w-full bg-sky-50 rounded-lg p-6 h-fit">
			<h3 className="text-3xl font-semibold mb-6">{title}</h3>
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
				{items.map((item, index) => (
					<Section animationType="slideLeft" amount={0.5} key={index}>
						<SkillsItemSolo key={index} item={item} />
					</Section>
				))}
			</div>
		</div>
	);
};
