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
		<div className="py-10 w-full">
			<h2 className="text-7xl font-bold mb-8">Ervaring</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<ExperienceSection title="Studies" items={experience.education} onItemClick={handleItemClick} />
				<ExperienceSection title="Werkervaring" items={experience.work} onItemClick={handleItemClick} />
			</div>

			<ExperienceModal isOpen={modalOpen} setIsOpen={setModalOpen} item={selectedItem} />
		</div>
	);
};

export default Experience;
