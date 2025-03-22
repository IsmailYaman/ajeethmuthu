"use client";
import React from "react";
import { FramerModal, ModalContent } from "@/components/ui/modal";
import { ExperienceItem } from "@/app/types/data";
import { Button } from "@/components/ui/button";

interface ExperienceModalProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	item: ExperienceItem | null;
}

  // Function to split text into paragraphs
  const renderParagraphs = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className={`${index > 0 ? 'mt-4' : ''}`}>
        {paragraph}
      </p>
    ));
  };
export const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, setIsOpen, item }) => {
	if (!item) return null;

	return (
		<FramerModal open={isOpen} setOpen={setIsOpen}>
			<ModalContent>
				<div className="flex flex-col space-y-4">
					<div className="flex flex-col space-y-4">
						<h2 className="text-5xl font-semibold leading-none tracking-tight">{item.title}</h2>
						<p className="text-lg text-muted-foreground">{item.name}</p>
						<p className="text-sm text-muted-foreground">{item.year}</p>
					</div>
					<div className="py-4">
						<p className="text-md leading-relaxed text-muted-foreground">
							{renderParagraphs(item.description) || "No description available."}
						</p>
					</div>
				</div>
			</ModalContent>
		</FramerModal>
	);
};
