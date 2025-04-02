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
			className="p-4 border border-transparent bg-sky-200 hover:border hover:border-sky-500 rounded-lg transition-all cursor-pointer h-full"
			onClick={() => onClick(item)}
		>
			<div className="flex gap-4">
				{/* Image container with fixed width that doesn't shrink */}
				<div className="flex-shrink-0 xs:block sm:hidden lg:block">
					<div className="w-[100px] h-[100px] bg-white flex items-center justify-center">
						<img 
							src={item.image} 
							alt={item.title} 
							className="max-w-[90px] max-h-[90px] object-contain"
						/>
					</div>
				</div>
				
				{/* Text content that wraps properly */}
				<div className="flex flex-col overflow-hidden">
					<h4 className="text-md sm:text-xl font-bold group-hover:font-light break-words">{item.title}</h4>
					<p className="text-md sm:text-xl text-stone-950 break-words">{item.name}</p>
					<p className="mt-2">{item.year}</p>
				</div>
			</div>
		</div>
	);
};