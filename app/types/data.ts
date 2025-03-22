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
  
  // Props for components that will be implemented later
  // export interface ExpertiseProps extends BaseComponentProps {
  //   // Define expertise props when needed
  // }
  
  // export interface ContactProps extends BaseComponentProps {
  //   // Define contact props when needed
  // }