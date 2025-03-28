"use client";
import React, { useState } from "react";
import { skills } from "../../data/data";
import { SkillsItem } from "../../types/data";

import { SkillsModal } from "./Modal";
import Section from "../Section";
import { SkillsSection } from "./Section";

const Skills = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<SkillsItem | null>(null);


	return (
        <Section animationType="slideLeft" className="w-full" amount={0.5}>
		<div className="py-24 mx-4 flex flex-col gap-8">
			<h2 className="text-7xl font-bold">{skills.title}</h2>
			<div className="flex flex-col sm:flex-row w-full gap-8 ">
				<SkillsSection title="Studies" items={skills.hard_skills} />
				<SkillsSection title="Werkervaring" items={skills.soft_skills} />
			</div>

			<SkillsModal isOpen={modalOpen} setIsOpen={setModalOpen} item={selectedItem} />
		</div>
        </Section>
	);
};

export default Skills;
