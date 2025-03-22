"use client";
import React from "react";
import { FramerModal, ModalContent } from "@/components/ui/modal";
import { ExperienceItem } from "@/app/types/data";

interface ExperienceModalProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	item: ExperienceItem | null;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, setIsOpen, item }) => {
	if (!item) return null;

	return (
		<FramerModal open={isOpen} setOpen={setIsOpen}>
			<ModalContent>
				<div className="flex flex-col space-y-4">
					<div className="flex flex-col space-y-1.5">
						<h2 className="text-2xl font-semibold leading-none tracking-tight">{item.title}</h2>
						<p className="text-lg text-muted-foreground">{item.name}</p>
						<p className="text-sm text-muted-foreground">{item.year}</p>
					</div>
					<div className="py-4">
						<h3 className="text-lg font-medium mb-2">Description</h3>
						<p className="text-sm text-muted-foreground">
							{item.description || "No description available."}
						</p>
					</div>
					<div className="mt-4">
						<button
							onClick={() => setIsOpen(false)}
							className="w-full p-3 bg-black dark:bg-white text-white dark:text-black rounded-md"
							type="button"
						>
							Close
						</button>
					</div>
				</div>
			</ModalContent>
		</FramerModal>
	);
};
