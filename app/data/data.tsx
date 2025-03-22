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
        image: "/img/overmij1.jpg"
    },
    {
        title: "Ik ben een plasmadonor",
        description: "Ik ben een Data Scientist met een passie voor machine learning en AI. Mijn expertise ligt in het ontwikkelen van modellen die bedrijven helpen datagedreven beslissingen te nemen en innovatieve oplossingen te creëren.",
        image: "/img/overmij2.jpg"
    },
    {
        title: "Ik hou van reizen",
        description: "Ik ben een Data Scientist met een passie voor machine learning en AI. Mijn expertise ligt in het ontwikkelen van modellen die bedrijven helpen datagedreven beslissingen te nemen en innovatieve oplossingen te creëren.",
        image: "/img/overmij3.jpg"
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
      items: [
            {
                title: "VMBO Kader Handel & Administratie",
                company: "Veurs Voorburg College",
                description: "Tijdens mijn tijd op het Veurs Voorburg College heb ik een breed scala aan administratieve vaardigheden ontwikkeld. Ik heb praktische ervaring opgedaan in het beheren en opstellen van zakelijke documenten (pakbon, vrachtbrief, etc), het organiseren van voorraad, en het opstellen van financiële overzichten. Deze taken hebben mij inzicht gegeven in de basisprincipes van bedrijfsadministratie",
                year: "2010"
            },
            {
                title: "MBO 4 Applicatieontwikkelaar",
                company: "ROC Mondriaan",
                description:"Mijn opleiding aan het ROC Mondriaan heeft me voorzien van een solide basis in zowel front-end als back-end ontwikkeling. Gedurende de opleiding heb ik het volledige proces doorlopen, van het initiële idee (van de klant) tot de uiteindelijke website. Dit proces bestond niet alleen uit het bouwen en opmaken van webpagina’s maar ook het modelleren en opzetten van databases. Daarnaast heb ik gewerkt met diverse programmeer- talen, waaronder HTML5, CSS3, JavaScript, PHP en SQL.",
                year: "2015"
            },
            {
                title: "Stage als Applicatieontwikkelaar",
                company: "Armand IT Services",
                description:"Tijdens mijn stage bij Armand IT Services speelde ik een leidende rol als projectleider in een team van mede-stagiairs. Samen hebben we meerdere websites ontwikkeld met HTML5, CSS3, JavaScript, PHP en WordPress. Een van deze websites was intern gericht op het bijhouden van de uren van medewerkers. Daarnaast heb ik bijgedragen aan het oplossen van digitale vraagstukken voor klanten en heb ik ondersteuning geboden bij de reparatie van computers, laptops en mobiele telefoons.",
                year: "2017"
            },
            {
                title: "Stage als Applicatieontwikkelaar",
                company: "Installatietechniek Haaglanden",
                description: "Bij Installatietechniek Haaglanden lag mijn focus voornamelijk op webontwikkeling en IT-ondersteuning. Ik heb een concept ontwikkeld voor de website van Installatietechniek Haaglanden en een prototype website voor voorraadbeheer. Deze websites heb ik gebouwd met behulp van HTML5, CSS3, JavaScript, PHP en WordPress. Daarnaast fungeerde ik als het aanspreekpunt voor IT-vraagstukken binnen het bedrijf en bood ik ondersteuning bij incidentele IT-problemen.",
                year: "2017"
            },
            {
                title: "Bachelor HBO-ICT Business & Data Management",
                company: "De Haagse Hogeschool",
                description: "Mijn studie aan de Haagse Hogeschool omvatte een breed scala aan vakken gericht op het begrijpen en verbeteren van bedrijfsprocessen, het toepassen van IT-strategieën, uitvoeren van een onderzoek, het vertalen van IT-vraagstukken naar gerichte oplossingen, het bouwen van dashboards en het analyseren van data. Tijdens deze vakken heb ik verschillende projecten uitgevoerd voor echte bedrijven zoals Gillz, Kinetic en KLM. Deze projecten waren leuk om uit te voeren en hebben mij waardevolle praktijkervaring opgeleverd.",
                year: "2018"    
            },
            {
                title: "Stage als Data (Migratie) Analist",
                company: "De Volksbank",
                description: `Tijdens mijn tijd bij de Volksbank werkte ik aan een project met de hoofdvraag: "Hoe kan de migratie van SAS BI naar Tableau succesvol worden uitgevoerd?" De Volksbank had al geruime tijd de wens om SAS BI volledig uit te faseren binnen hun organisatie. Echter, dit bleek niet haalbaar vanwege het grote aantal rapportages dat nog steeds in SAS BI stonden. Om dit doel te kunnen bereiken, moesten alle rapportages geïdentificeerd en overgebracht worden naar Tableau. Daarom heb ik een uitgebreid onderzoeksrapport en een gedetailleerd migratieplan opgesteld. Gedurende het project heb ik verschillende technieken toegepast, waaronder stakeholderanalyse, probleemanalyse, het OCAI-model, weerstandsanalyse, het Business Maturity Model, Data Matrix, en risicoanalyse. Uiteindelijk leverde ik een uitvoerbaar migratieplan en roadmap op om de transitie soepel te laten verlopen.`,
                year: "2020"
            },
            {
                title: "Stage Data Stewart",
                company: "Gemeente Den Haag",
                description: `Tijdens mijn stage bij de Gemeente Den Haag heb ik een project mogen uitvoeren gericht was op het verbeteren van de datakwaliteit binnen de Jeugdgezondheidszorg (JGZ). De centrale vraag van het project was: "Welke stappen zijn vereist om het monitoren en rapporteren van de datakwaliteit te implementeren binnen de JGZ?" De opdrachtgever wilde inzicht krijgen in de kansen op het gebied van data en hoe deze benut kunnen worden. Om hier antwoord op te geven heb ik een een uitgebreid onderzoeksrapport met aanbeveling opgeleverd aan de JGZ. Gedurende het project heb ik diverse technieken en methodieken toegepast, waaronder stakeholderanalyse, probleemanalyse, DMA-DMBOK (NORA Online), het Data Maturity Model, de LEAN Methode en het Veranderkompas.`,
                year: "2023"
            },
      ]
  }

  
  export const expertise: ExpertiseContent = {
    // You can add expertise data here when you build that section
  };
  
  export const contact: ContactContent = {
    // You can add contact data here when you build that section
  };