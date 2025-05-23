"use client";
import React, { useState } from "react";
import { experience } from "../../data/data";
import { ExperienceItem } from "../../types/data";
import { ExperienceSection } from "./Section";
import { ExperienceModal } from "./Modal";

const Experience = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

	const handleItemClick = (item: ExperienceItem) => {
		setSelectedItem(item);
		setModalOpen(true);
	};

	return (
		<div className="py-24 mx-4 flex flex-col gap-8">
			<h2 className="text-5xl sm:text-7xl font-bold">{experience.title}</h2>
			<div className="flex flex-col sm:flex-row w-full gap-8 ">
				<ExperienceSection title="Studies" items={experience.education} onItemClick={handleItemClick} />
				<ExperienceSection title="Werkervaring" items={experience.work} onItemClick={handleItemClick} />
			</div>
			<ExperienceModal isOpen={modalOpen} setIsOpen={setModalOpen} item={selectedItem} />
		</div>
	);
};

export default Experience;
