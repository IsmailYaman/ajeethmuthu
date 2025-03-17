import { Intro, ContactContent, ExperienceContent, ExpertiseContent, NavigationContent, About } from "../types/data";


export const intro: Intro = {
    greeting: "Hi, Ajeeth hier",
    introduction: "Ik ben een",
    profession: ["Data Scientist", "Data Steward", "Business Analist", "Informatie Analist"],
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
  export const about: About[] = [
    {
        title: "Ik ben een echte zoetekauw",
        description: "Ik ben een Data Scientist met een passie voor machine learning en AI. Mijn expertise ligt in het ontwikkelen van modellen die bedrijven helpen datagedreven beslissingen te nemen en innovatieve oplossingen te creëren.",
        image: "/images/ajeeth.jpg"
    },
    {
        title: "Ik ben een plasmadonor",
        description: "Ik ben een Data Scientist met een passie voor machine learning en AI. Mijn expertise ligt in het ontwikkelen van modellen die bedrijven helpen datagedreven beslissingen te nemen en innovatieve oplossingen te creëren.",
        image: "/images/ajeeth.jpg"
    },
    {
        title: "Ik hou van reizen",
        description: "Ik ben een Data Scientist met een passie voor machine learning en AI. Mijn expertise ligt in het ontwikkelen van modellen die bedrijven helpen datagedreven beslissingen te nemen en innovatieve oplossingen te creëren.",
        image: "/images/ajeeth.jpg"
    },


];


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