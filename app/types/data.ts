export interface SocialLink {
    name: string;
    url: string;
    isPrimary: boolean;
  }
  
  export interface AboutMeContent {
    greeting: string;
    introduction: string;
    profession: string;
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
  
  export interface ExperienceContent {
    // Define experience structure when needed
  }
  
  export interface ExpertiseContent {
    // Define expertise structure when needed
  }
  
  export interface ContactContent {
    // Define contact structure when needed
  }