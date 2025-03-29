"use client";
import React from "react";
import { SkillsItem as SkillsItemType } from "@/app/types/data";

interface SkillsItemProps {
	item: SkillsItemType;
}

export const SkillsItemSolo: React.FC<SkillsItemProps> = ({ item }) => {
	return (
		<div className="p-4 border border-transparent bg-sky-200 hover:border hover:border-sky-500 rounded-lg transition-all">
            <h4 className="text-md sm:text-xl font-bold group-hover:font-light">{item.title}</h4>
			<p className="text-md sm:text-xl text-stone-950">{item.level}</p>
		</div>
	);
};
