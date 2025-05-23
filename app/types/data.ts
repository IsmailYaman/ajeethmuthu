// Basic content types
export interface About {
	title: string;
	description: string;
	image: string;
}

export interface SocialLink {
	name: string;
	url: string;
	isPrimary: boolean;
}

export interface Intro {
	greeting: string;
	introduction: string;
	profession: string[];
	description: string;
	socialLinks: SocialLink[];
}

export interface LogoContent {
	text: string;
	highlight: string;
}

export interface NavLink {
	name: string;
	href: string;
}

export interface NavigationContent {
	logo: LogoContent;
	links: NavLink[];
}

export interface ExperienceItem {
	title: string;
	name: string;
	description: string;
	year: string;
    image: string;
}

export interface ExperienceContent {
    title: string;
	education: ExperienceItem[];
	work: ExperienceItem[];
}
export interface SkillsItem {
	title: string;
	level: string;
}

export interface SkillsContent {
    title: string;
	hard_skills: SkillsItem[];
	soft_skills: SkillsItem[];
}

// Component props interfaces
export interface BaseComponentProps {
	containerClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
}

// About component props
export interface AboutProps extends BaseComponentProps {
	data: About;
	imageFirst?: boolean;
	textContainerClassName?: string;
	imageContainerClassName?: string;
	imageClassName?: string;
}

export interface SkillsItem {
    title: string;
    level: string;
    icon?: string; // Name of the Lucide icon
}
export interface SkillsContent extends BaseComponentProps {
    title: string;
    soft_skills: SkillsItem[];
    hard_skills: SkillsItem[];
}