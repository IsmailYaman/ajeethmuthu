import React, { createContext, useState, useEffect, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalContextProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface FramerModalProps {
	children: ReactNode;
	open?: boolean;
	setOpen?: (open: boolean) => void;
}

export function FramerModal({ children, open: controlledOpen, setOpen: controlledSetOpen }: FramerModalProps) {
	const [internalOpen, setInternalOpen] = useState(false);
	const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
	const setOpen = controlledSetOpen !== undefined ? controlledSetOpen : setInternalOpen;
	useEffect(() => {
		if (open) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [open]);
	return (
		<ModalContext.Provider value={{ open, setOpen }}>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed p-4 inset-0 z-20 top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen justify-center bg-white/10 backdrop-blur-sm  border border-sky-500"
						onClick={() => setOpen(false)}
					>
						<motion.div
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 8 }}
							onClick={(e) => e.stopPropagation()}
							className=" w-full max-w-4xl rounded-xl bg-white px-8 py-9 backdrop-blur-2xl border border-sky-500"
						>
							<button
								className="cursor-pointer absolute top-4 right-4 bg-sky-100 p-2 rounded-full hover:text-sky-500"
								onClick={() => setOpen(false)}
							>
								<X />
							</button>
							{children}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</ModalContext.Provider>
	);
}

export function ModalContent({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
