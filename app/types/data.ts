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
}

export interface ExperienceContent {
    title: string;
	education: ExperienceItem[];
	work: ExperienceItem[];
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

export interface Skill {
    title: string;
    level: string;
}

export interface SkillsContent extends BaseComponentProps {
    title: string;
    soft_skills: Skill[];
    hard_skills: Skill[];
}

// export interface ContactProps extends BaseComponentProps {
//   // Define contact props when needed
// }
