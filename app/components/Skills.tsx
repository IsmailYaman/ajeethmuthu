import React from "react";
import { skills } from "../data/data";
import Section from "./Section";
import { SkillsSection } from "./Skills/Section";

const Skills = () => {
	return (
		<Section animationType="slideLeft" className="w-full" amount={0.5}>
		<div className="py-24 mx-4 flex flex-col gap-8">
			<h2 className="text-7xl font-bold">{skills.title}</h2>
			<div className="flex flex-col sm:flex-row w-full gap-8 ">
				<SkillsSection title="Hard skills" items={skills.hard_skills}/>
				<SkillsSection title="Soft skills" items={skills.soft_skills}/>
			</div>
		</div>
        </Section>
	);
};

export default Skills;
