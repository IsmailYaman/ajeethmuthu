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
export interface About {
	title: string;
	description: string;
	image: string;
}

export interface AboutProps {
  data: About;
  imageFirst?: boolean;
  backgroundColor?: string;
  containerClassName?: string;
  textContainerClassName?: string;
  imageContainerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
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

export interface ExperienceContent {
	items: {
		title: string;
		company: string;
		description: string;
		year: string;
	}[];
}

export interface AboutProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
  containerClassName?: string;
  textContainerClassName?: string;
  imageContainerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
}
// export interface ExpertiseContent {
// 	// Define expertise structure when needed
// }

// export interface ContactContent {
// 	// Define contact structure when needed
// }
