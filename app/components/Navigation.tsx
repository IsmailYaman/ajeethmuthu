"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../types/data";
import { navigation } from "../data/data";
import Section from "./Section";

// Props interface
interface NavItemProps {
	item: NavLink;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Navigation() {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [showNav, setShowNav] = useState<boolean>(true);
	const [activeSection, setActiveSection] = useState<string>("");
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	useEffect(() => {
		const checkScreenSize = (): void => {
			setIsMobile(window.innerWidth < 640);
		};

		const handleScroll = (): void => {
			const currentScrollY = window.scrollY;
			
			// Determine if we're scrolling up or down
			if (currentScrollY > lastScrollY) {
				// Scrolling down - hide the nav
				setShowNav(false);
			} else {
				// Scrolling up - show the nav
				setShowNav(true);
			}
			
			// Update the last scroll position
			setLastScrollY(currentScrollY);

			// Always update the active section on all devices
			updateActiveSection();
		};

		// Function to determine the active section based on scroll position
		const updateActiveSection = (): void => {
			const sections = Array.from(document.querySelectorAll("section[id]"));
			const scrollPosition = window.scrollY + 100; // Add offset to determine section earlier

			// Find the last section that starts before current scroll position
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				const sectionTop = (section as HTMLElement).offsetTop;

				if (scrollPosition >= sectionTop) {
					setActiveSection(section.id);
					break;
				}
			}
		};

		checkScreenSize();
		handleScroll(); // Check initial scroll position

		window.addEventListener("resize", checkScreenSize);
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	// New approach: force scroll to reset before scrolling to target
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute("href");

		if (href?.startsWith("#")) {
			// Get target section ID
			const targetId = href.substring(1);

			// Get all sections with IDs in the order they appear in the DOM
			const sections = Array.from(document.querySelectorAll("section[id]"));

			// Find the target section and all sections
			const targetSection = sections.find((section) => section.id === targetId);
			if (!targetSection) return;

			// Find current active section index and target section index
			const currentIndex = sections.findIndex((section) => section.id === activeSection);
			const targetIndex = sections.findIndex((section) => section.id === targetId);

			if (targetIndex !== -1) {
				// If clicking on a section that's BEFORE the current one, we first need to scroll up
				// before we can properly navigate to it (due to sticky positioning)
				if (targetIndex < currentIndex) {
					// First scroll up to reset sticky positions
					window.scrollTo({
						top: 0,
						behavior: "auto", // Use instant scroll to reset
					});

					// Wait a brief moment to ensure the scroll reset is complete
					setTimeout(() => {
						// Now scroll to the target section
						window.scrollTo({
							top: (targetSection as HTMLElement).offsetTop,
							behavior: "smooth",
						});
					}, 50);
				} else {
					// For sections after current position or current section, just scroll normally
					window.scrollTo({
						top: (targetSection as HTMLElement).offsetTop,
						behavior: "smooth",
					});
				}
			}
		}
	};

	return (
		<>
			{/* Navigation that shows/hides based on scroll direction */}
			<AnimatePresence>
				{showNav && (
					<motion.div
						className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -100, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						{isMobile ? (
							<MobileNavigation handleNavClick={handleNavClick} activeSection={activeSection} />
						) : (
							<DesktopNavigation handleNavClick={handleNavClick} activeSection={activeSection} />
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

function DesktopNavigation({
	handleNavClick,
	activeSection,
}: {
	handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	activeSection: string;
}) {
	const navItems = navigation.links;
	const midpoint = Math.ceil(navItems.length / 2);

	return (
		<nav className="flex items-center rounded-full bg-stone-950/80 px-6 py-2 backdrop-blur-sm">
			<div className="flex items-center space-x-6">
				{navItems.slice(0, midpoint).map((item) => (
					<NavItem
						key={item.name}
						item={item}
						onClick={handleNavClick}
						isActive={activeSection === item.href.substring(1)}
					/>
				))}
			</div>

			<div className="mx-6 flex items-center">
				<Link href="#home" className="text-xl font-bold">
					<span className="text-white">{navigation.logo.text}</span>
					<span className="text-sky-500">{navigation.logo.highlight}</span>
				</Link>
			</div>

			<div className="flex items-center space-x-6">
				{navItems.slice(midpoint).map((item) => (
					<NavItem
						key={item.name}
						item={item}
						onClick={handleNavClick}
						isActive={activeSection === item.href.substring(1)}
					/>
				))}
			</div>
		</nav>
	);
}

function MobileNavigation({
	handleNavClick,
	activeSection,
}: {
	handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	activeSection: string;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Section animationType="slideLeft" delay={0.3} className="w-full">
			<nav className="flex w-full items-center justify-between rounded-full bg-stone-950/80 px-4 py-2 backdrop-blur-sm">
				<Link href="#home" className="text-lg font-bold">
					<span className="text-white">{navigation.logo.text}</span>
					<span className="text-sky-500">{navigation.logo.highlight}</span>
				</Link>

				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="text-white">
							<Menu className="h-5 w-5" />
							<span className="sr-only">Open menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="border-none bg-white p-0">
						<motion.div
							className="flex h-full flex-col justify-center p-8"
							initial={{ x: -300, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -300, opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							<AnimatePresence>
								{isOpen && (
									<motion.div
										className="flex flex-col space-y-8"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
									>
										{navigation.links.map((item, index) => (
											<motion.div
												key={item.name}
												initial={{ opacity: 0, x: -50 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.2 + index * 0.1 }}
											>
												<Link
													href={item.href}
													className={`text-3xl font-bold transition-colors ${
														activeSection === item.href.substring(1)
															? "text-sky-500"
															: "text-sky-300 hover:text-sky-500"
													}`}
													onClick={(e) => {
														handleNavClick(e);
														setIsOpen(false);
													}}
												>
													{item.name}
												</Link>
											</motion.div>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					</SheetContent>
				</Sheet>
			</nav>
		</Section>
	);
}

function NavItem({ item, onClick, isActive = false }: NavItemProps & { isActive?: boolean }) {
	return (
		<Link
			href={item.href}
			className={cn(
				"text-sm font-medium transition-colors",
				isActive ? "text-sky-500" : "text-white hover:text-sky-500"
			)}
			onClick={onClick}
		>
			{item.name}
		</Link>
	);
}