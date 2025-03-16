import { AboutMeContent, ContactContent, ExperienceContent, ExpertiseContent, NavigationContent } from "../types/data";


export const aboutMe: AboutMeContent = {
    greeting: "Hi, Ajeeth hier",
    introduction: "Ik ben een",
    profession: "Data Scientist",
    description: "Met passie voor machine learning en AI, transformeer ik complexe data in waardevolle inzichten. Mijn expertise ligt in het ontwikkelen van modellen die bedrijven helpen datagedreven beslissingen te nemen en innovatieve oplossingen te creëren.",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        isPrimary: true
      },
      {
        name: "Contact",
        url: "#contact",
        isPrimary: false
      }
    ]
  };
  
  export const navigation: NavigationContent = {
    logo: {
      text: "Ajeeth",
      highlight: "Muthu"
    },
    links: [
      { name: "Over mij", href: "#over-mij" },
      { name: "Ervaring", href: "#ervaring" },
      { name: "Expertise", href: "#expertise" },
      { name: "Contact", href: "#contact" }
    ]
  };
  
  export const experience: ExperienceContent = {
    // You can add experience data here when you build that section
  };
  
  export const expertise: ExpertiseContent = {
    // You can add expertise data here when you build that section
  };
  
  export const contact: ContactContent = {
    // You can add contact data here when you build that section
  };