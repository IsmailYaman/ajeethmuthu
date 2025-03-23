import React from "react";
import { skills } from "../data/data";

const Skills = () => {
	return (
		<div className="py-24 flex flex-col gap-8 w-full">
			<h2 className="text-7xl font-bold">{skills.title}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <h2 className="text-4xl text-orange-400 font-bold">🚧 Komt er aan 🚧</h2>
				{/* <ExperienceSection title="Studies" itesms={skills.soft_skills}  />
				<ExperienceSection title="Werkervaring" items={skills.hard_skills}/> */}
			</div>
		</div>
	);
};

export default Skills;
