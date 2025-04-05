import { NavLink } from "@/app/types/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
// Props interface
interface NavItemProps {
    item: NavLink;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}


export function NavItem({ item, onClick, isActive = false }: NavItemProps & { isActive?: boolean }) {
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