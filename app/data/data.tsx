import { Intro, ExperienceContent, NavigationContent, About, SkillsContent } from "../types/data";

export const intro: Intro = {
	greeting: "👋 Hi, Ajeeth hier.",
	introduction: "Ik ben een",
	profession: ["Data Scientist", "Data Steward", "Business Analist", "Informatie Analist"],
	description:
		"Met passie voor machine learning en AI, transformeer ik complexe data in waardevolle inzichten. Mijn expertise ligt in het ontwikkelen van modellen die bedrijven helpen datagedreven beslissingen te nemen en innovatieve oplossingen te creëren.",
	socialLinks: [
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/ajeethmuthu",
			isPrimary: true,
		},
		{
			name: "Contact",
			url: "#contact",
			isPrimary: false,
		},
	],
};
export const about: About[] = [
	{
		title: "Ik ben een echte zoetekauw 🍭",
		description: `Als er iets is waar je me altijd blij mee kunt maken, dan is het wel iets zoets. Van jongs af aan ben ik al gek op alles wat met chocolade, taart of versgebakken koekjes te maken heeft. Mijn favoriete moment van de dag? Een kop koffie met een goed stuk cheesecake of een warme stroopwafel. \n\nIk vind het ook leuk om zelf de keuken in te duiken en nieuwe recepten uit te proberen. Of het nu gaat om het perfectioneren van de ultieme brownie of het maken van mijn eigen karamel, ik geniet van het hele proces – en natuurlijk van het eindresultaat. \n\nWaar je me ’s nachts voor wakker kunt maken? Zonder twijfel de San Sebastian cheesecake van Şerifoglu!`,
		image: "/img/overmij1.jpg",
	},
	{
		title: "Ik ben een plasmadonor 🏥",
		description:
			"Bloedplasma doneren is iets waar ik bewust voor heb gekozen, omdat ik graag een steentje bijdraag aan de gezondheid van anderen. Met een kleine moeite kan ik levens redden en mensen helpen die afhankelijk zijn van medicijnen op basis van plasma. Het mooie is dat mijn lichaam het plasma zelf weer aanvult, waardoor ik regelmatig kan doneren zonder dat het me iets kost – behalve een klein beetje tijd. \n\nElke donatie voelt als een waardevolle bijdrage, en het geeft me een goed gevoel om te weten dat mijn plasma wordt gebruikt voor mensen met afweerstoornissen, bloedziekten of ernstige brandwonden. Het is een kleine daad met een grote impact.",
		image: "/img/overmij2.jpg",
	},
	{
		title: "Ik hou van reizen ✈️",
		description:
			"Nieuwe plekken ontdekken, andere culturen ervaren en even loskomen van de dagelijkse routine – dat is waarom ik van reizen hou. Of het nu gaat om een stedentrip naar een bruisende metropool of een rustige vakantie in de natuur, ik geniet van de vrijheid en het avontuur dat reizen met zich meebrengt. \n\nElke reis brengt iets unieks met zich mee. De ene keer proef ik lokale gerechten op een markt in een onbekende stad, de andere keer bewonder ik adembenemende landschappen die ik alleen van foto’s kende. Reizen verruimt mijn blik en laat me telkens weer nieuwe perspectieven ontdekken. \n\nMijn favoriete bestemmingen zijn die waar cultuur, natuur en gastronomie samenkomen. Of ik nu door smalle straatjes in een historisch centrum wandel of een zonsopgang bewonder vanaf een bergtop, het zijn die momenten die het reizen zo speciaal maken.",
		image: "/img/overmij3.jpg",
	},
];

export const navigation: NavigationContent = {
	logo: {
		text: "Ajeeth",
		highlight: "Muthu",
	},
	links: [
		{ name: "Ervaring", href: "#ervaring" },
		{ name: "Expertise", href: "#expertise" },
		{ name: "Over mij", href: "#over-mij" },
		{ name: "Contact", href: "#contact" },
	],
};

export const experience: ExperienceContent = {
	title: "Ervaring",
	education: [
		{
			title: "Bachelor HBO-ICT Business & Data Management",
			name: "De Haagse Hogeschool",
			description:
				"Mijn studie aan De Haagse Hogeschool omvatte een breed scala aan vakken, gericht op het begrijpen en verbeteren van bedrijfsprocessen, het toepassen van IT-strategieën, het uitvoeren van onderzoek, het vertalen van IT-vraagstukken naar gerichte oplossingen, het bouwen van dashboards en het analyseren van data. \n\nTijdens deze vakken heb ik verschillende projecten uitgevoerd voor echte bedrijven, zoals Gillz, Kinetic en KLM. Deze projecten waren niet alleen interessant om aan te werken, maar hebben me ook waardevolle praktijkervaring opgeleverd.",
			year: "2018",
			image: "/img/hh.png",
		},
		{
			title: "MBO 4 Applicatieontwikkelaar",
			name: "ROC Mondriaan",
			description:
				"Mijn opleiding aan ROC Mondriaan heeft me voorzien van een solide basis in zowel front-end als back-end ontwikkeling. Tijdens de opleiding heb ik het volledige proces doorlopen, van het initiële idee van de klant tot de uiteindelijke website. \n\nDit proces bestond niet alleen uit het bouwen en opmaken van webpagina’s, maar ook uit het modelleren en opzetten van databases. Daarnaast heb ik gewerkt met diverse programmeertalen, waaronder HTML5, CSS3, JavaScript, PHP en SQL.",
			year: "2015",
			image: "/img/roc.png",
		},
	],
	work: [
		{
			title: "Data Engineer",
			name: "Sogeti",
			description: `Tekst over Sogeti`,
			year: "2025",
            image: "/img/sogeti.webp",
		},
		{
			title: "Data Steward",
			name: "Gemeente Den Haag",
			description: `Tijdens mijn stage bij de Gemeente Den Haag heb ik een project mogen uitvoeren dat gericht was op het verbeteren van de datakwaliteit binnen de Jeugdgezondheidszorg (JGZ). De centrale vraag van het project was: "Welke stappen zijn vereist om het monitoren en rapporteren van de datakwaliteit te implementeren binnen de JGZ?" \n\nDe opdrachtgever wilde inzicht krijgen in de kansen op het gebied van data en hoe deze optimaal benut kunnen worden. Om hier antwoord op te geven, heb ik een uitgebreid onderzoeksrapport met aanbevelingen opgeleverd aan de JGZ. \n\nGedurende het project heb ik diverse technieken en methodieken toegepast, waaronder stakeholderanalyse, probleemanalyse, DMA-DMBOK (NORA Online), het Data Maturity Model, de LEAN-methode en het Veranderkompas.`,
			year: "2023",
            image: "/img/gdh.png",
		},
		{
			title: "Data (Migratie) Analist",
			name: "De Volksbank",
			description: `Tijdens mijn tijd bij de Volksbank werkte ik aan een project met de hoofdvraag: "Hoe kan de migratie van SAS BI naar Tableau succesvol worden uitgevoerd?" De Volksbank wilde SAS BI al geruime tijd volledig uitfaseren, maar dit bleek niet haalbaar vanwege het grote aantal rapportages dat nog steeds in SAS BI stond. \n\nOm dit doel te bereiken, moesten alle rapportages worden geïdentificeerd en overgebracht naar Tableau. Daarom heb ik een uitgebreid onderzoeksrapport en een gedetailleerd migratieplan opgesteld. \n\nGedurende het project heb ik verschillende technieken toegepast, waaronder stakeholderanalyse, probleemanalyse, het OCAI-model, weerstandsanalyse, het Business Maturity Model, de Data Matrix en risicoanalyse. Uiteindelijk leverde ik een uitvoerbaar migratieplan en een roadmap op om de transitie soepel te laten verlopen.`,
			year: "2020",
            image: "/img/vb.png",
		},
		{
			title: " Applicatieontwikkelaar",
			name: "Installatietechniek Haaglanden",
			description:
				"Bij Installatietechniek Haaglanden lag mijn focus voornamelijk op webontwikkeling en IT-ondersteuning. Ik ontwikkelde een concept voor de website van Installatietechniek Haaglanden en bouwde een prototype voor een voorraadbeheersysteem. Deze websites heb ik gerealiseerd met behulp van HTML5, CSS3, JavaScript, PHP en WordPress. \n\nDaarnaast was ik het aanspreekpunt voor IT-vraagstukken binnen het bedrijf en bood ik ondersteuning bij incidentele IT-problemen.",
			year: "2017",
            image: "/img/ih.jpeg",
		},
		{
			title: "Applicatieontwikkelaar",
			name: "Armand IT Services",
			description:
				"Tijdens mijn stage bij Armand IT Services speelde ik een leidende rol als projectleider in een team van mede-stagiairs. Samen ontwikkelden we meerdere websites met HTML5, CSS3, JavaScript, PHP en WordPress. Een van deze websites was intern gericht op het bijhouden van de uren van medewerkers. \n\nDaarnaast droeg ik bij aan het oplossen van digitale vraagstukken voor klanten en bood ik ondersteuning bij de reparatie van computers, laptops en mobiele telefoons.",
			year: "2017",
            image: "/img/ais.jpeg",
		},
	],
};

export const skills: SkillsContent = {
	title: "Expertise",
	soft_skills: [
		{
			title: "Analytisch",
			level: "Gevorderd",
			icon: "BarChart2",
		},
		{
			title: "Creatief",
			level: "Gevorderd",
			icon: "Lightbulb",
		},
		{
			title: "Lean Methode",
			level: "Gevorderd",
			icon: "Workflow",
		},
		{
			title: "Proces Innovatie",
			level: "Gevorderd",
			icon: "Sparkles",
		},
		{
			title: "Change Management",
			level: "Gevorderd",
			icon: "RefreshCw",
		},
		{
			title: "Research",
			level: "Basis",
			icon: "Search",
		},
		{
			title: "Scrum",
			level: "Basis",
			icon: "Trello",
		},
		{
			title: "Project Management",
			level: "Basis",
			icon: "ClipboardList",
		},
		{
			title: "Risk Management",
			level: "Basis",
			icon: "Shield",
		},
	],
	hard_skills: [
		{
			title: "BPMN Model",
			level: "Gevorderd",
			icon: "GitBranch",
		},
		{
			title: "Python",
			level: "Basis",
			icon: "Code",
		},
		{
			title: "SQL",
			level: "Basis",
			icon: "Database",
		},
		{
			title: "Power BI",
			level: "Basis",
			icon: "PieChart",
		},
		{
			title: "Tableau",
			level: "Basis",
			icon: "BarChart",
		},
		{
			title: "ArchiMate",
			level: "Basis",
			icon: "Layers",
		},
		{
			title: "BiSL",
			level: "Basis",
			icon: "FileText",
		},
		{
			title: "HTML5",
			level: "Basis",
			icon: "FileCode",
		},
		{
			title: "CSS3",
			level: "Basis",
			icon: "Palette",
		},
		{
			title: "JavaScript",
			level: "Basis",
			icon: "Braces",
		},
		{
			title: "PHP",
			level: "Basis",
			icon: "Server",
		},
	],
};
