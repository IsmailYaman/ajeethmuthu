"use client";
import React, { useState } from "react";
import { experience } from "../data/data";
import { FramerModal, ModalContent } from "@/components/ui/modal";
import { ExperienceItem } from "../types/data";

const Experience = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

	const handleItemClick = (item: ExperienceItem) => {
		setSelectedItem(item);
		setModalOpen(true);
	};

	return (
		<div className="py-10">
			<h2 className="text-7xl font-bold mb-8">Ervaring</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h3 className="text-2xl font-semibold mb-6">Studies</h3>
					<div className="space-y-6">
						{experience.education.map((education, index) => (
							<div
								key={index}
								className="p-4 border border-transparent bg-green-100 hover:border hover:border-green-500 rounded-lg transition-all cursor-pointer"
								onClick={() => handleItemClick(education)}
							>
								<h4 className="text-xl font-medium">{education.title}</h4>
								<p className="text-gray-600 dark:text-gray-300">{education.name}</p>
								<p className="mt-2">{education.year}</p>
							</div>
						))}
					</div>
				</div>
				<div>
					<h3 className="text-2xl font-semibold mb-6">Werkervering</h3>
					<div className="space-y-6">
						{experience.work.map((work, index) => (
							<div
								key={index}
								className="p-4 border border-transparent bg-green-100 hover:border hover:border-green-500 rounded-lg transition-all cursor-pointer"
								onClick={() => handleItemClick(work)}
							>
								<h4 className="text-xl font-medium">{work.title}</h4>
								<p className="text-gray-600 dark:text-gray-300">{work.name}</p>
								<p className="mt-2">{work.year}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Modal */}
			<FramerModal open={modalOpen} setOpen={setModalOpen}>
				<ModalContent>
					{selectedItem && (
						<div className="flex flex-col space-y-4">
							<div className="flex flex-col space-y-1.5">
								<h2 className="text-2xl font-semibold leading-none tracking-tight">
									{selectedItem.title}
								</h2>
								<p className="text-lg text-muted-foreground">{selectedItem.name}</p>
								<p className="text-sm text-muted-foreground">{selectedItem.year}</p>
							</div>
							<div className="py-4">
								<h3 className="text-lg font-medium mb-2">Description</h3>
								<p className="text-sm text-muted-foreground">
									{selectedItem.description || "No description available."}
								</p>
							</div>
							<div className="mt-4">
								<button
									onClick={() => setModalOpen(false)}
									className="w-full p-3 bg-black dark:bg-white text-white dark:text-black rounded-md"
									type="button"
								>
									Close
								</button>
							</div>
						</div>
					)}
				</ModalContent>
			</FramerModal>
		</div>
	);
};

export default Experience;
