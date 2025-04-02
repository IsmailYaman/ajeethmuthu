import React from "react";
import { skills } from "../../data/data";
import { SkillsSection } from "./Section";

const Skills = () => {
	return (
		<div className="py-24 mx-4 flex flex-col  overflow-y-scroll gap-8">
			<h2 className="text-5xl sm:text-7xl font-bold">{skills.title}</h2>
			<div className="flex flex-col xs:flex-row w-full gap-8">
				<SkillsSection title="Hard skills" items={skills.hard_skills} />
				<SkillsSection title="Soft skills" items={skills.soft_skills} />
			</div>
		</div>
	);
};

export default Skills;
