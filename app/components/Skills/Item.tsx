"use client";
import React from "react";
import { SkillsItem as SkillsItemType } from "@/app/types/data";
import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface SkillsItemProps {
	item: SkillsItemType;
}

export const SkillsItemSolo: React.FC<SkillsItemProps> = ({ item }) => {
	const IconComponent = item.icon
		? (LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<LucideProps>)
		: null;

	return (
		<div className="p-4 border border-transparent bg-sky-200 hover:border hover:border-sky-500 rounded-lg transition-all flex items-center h-full gap-3">
			{IconComponent && (
				<IconComponent size={24} className="min-h-8 min-w-8 xs:block sm:hidden lg:block text-sky-700 flex-shrink-0" />
			)}
			<div className="w-full overflow-hidden">
				<h4 className="text-md sm:text-lg font-bold group-hover:font-light break-words hyphens-auto">
					{item.title}
				</h4>
				<p className="text-md sm:text-lg break-words hyphens-auto text-stone-950">{item.level}</p>
			</div>
		</div>
	);
};