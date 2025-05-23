"use client";
import React from "react";
import { FramerModal, ModalContent } from "@/components/ui/modal";
import { SkillsItem } from "@/app/types/data";

interface SkillsModalProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	item: SkillsItem | null;
}

export const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, setIsOpen, item }) => {
	if (!item) return null;

	return (
		<FramerModal open={isOpen} setOpen={setIsOpen}>
			<ModalContent>
				<div className="flex flex-col space-y-4">
					<div className="flex flex-col space-y-4">
						<h2 className="text-5xl font-semibold leading-none tracking-tight">{item.title}</h2>
						<p className="text-lg text-muted-foreground">{item.level}</p>
					</div>
				</div>
			</ModalContent>
		</FramerModal>
	);
};
