import { useEffect, useState } from 'react';

type Language = 'fr' | 'en';

type ExperienceItem = {
  title: string;
  period: string;
  summary: string;
  details: string;
  stack: string[];
};

type ExperienceGroup = {
  company: string;
  period: string;
  context: string;
  items: ExperienceItem[];
};

type ExpertiseItem = {
  title: string;
  text: string;
  skills: string;
  icon: string;
};

const links = {
  email: 'vincent.mangel.pro@gmail.com',
  phone: '+33637369836',
  displayPhone: '06 37 36 98 36',
  linkedin: 'https://www.linkedin.com/in/vincent-mangel/',
  calendar: 'https://calendar.app.google/XC6aZDmUYNm9w3Hm9',
  cv: '/CV_Vincent_Mangel.pdf',
};

const expertise: ExpertiseItem[] = [
  {
    icon: 'fi-rs-blueprint',
    title: 'Architecture',
    text: 'J’analyse l’existant, cadre les choix techniques et définis une architecture cible adaptée aux contraintes métier.',
    skills: 'Cadrage · architecture logicielle · modernisation',
  },
  {
    icon: 'fi-rs-users',
    title: 'Leadership technique',
    text: 'Ateliers, coordination des choix techniques, revues de code et accompagnement des développeurs : j’interviens au quotidien auprès des équipes.',
    skills: 'Équipe · livraison · mentorat · agilité',
  },
  {
    icon: 'fi-rs-code-simple',
    title: 'Développement',
    text: 'Je travaille sur l’interface, les API et les données, en restant impliqué dans le code.',
    skills: 'C# / .NET · React · Angular · TypeScript · Azure',
  },
];

const aiPractices = [
  {
    icon: 'fi-rs-lightbulb-on',
    title: 'Philosophie',
    text: 'Considérer l’IA comme un outil incontournable du développement aujourd’hui. L’intégrer à ma pratique selon le besoin et l’ampleur du projet.',
  },
  {
    icon: 'fi-rs-comment-alt-dots',
    title: 'Prompt engineering',
    text: 'Optimiser les prompts en précisant le contexte, l’objectif et les contraintes, puis les affiner selon les réponses obtenues.',
  },
  {
    icon: 'fi-rs-workflow',
    title: 'Agentique et skills',
    text: 'Mobiliser des workflows agentiques et des skills pour structurer les tâches et adapter le contexte aux besoins du travail.',
  },
  {
    icon: 'fi-rs-brain',
    title: 'Choix multi-modèle',
    text: 'Sélectionner le modèle en fonction de la tâche, du raisonnement attendu et du format de réponse recherché.',
  },
  {
    icon: 'fi-rs-code-branch',
    title: 'Vibe coding et SDD',
    text: 'Explorer rapidement une idée avec le vibecoding. Pour un développement de plus grande ampleur, clarifier le besoin, les contraintes et les critères de réussite avant de coder avec le Spec-Driven Development (SDD).',
  },
  {
    icon: 'fi-rs-binoculars',
    title: 'Veille & exploration',
    text: 'Suivre les modèles de langage alternatifs, notamment les d-LLM, et explorer leurs approches et leurs apports possibles au développement.',
  },
];

const englishExpertise: ExpertiseItem[] = [
  {
    icon: 'fi-rs-blueprint',
    title: 'Architecture',
    text: 'I assess existing systems, frame technical decisions, and define a target architecture that fits business constraints.',
    skills: 'Scoping · software architecture · modernisation',
  },
  {
    icon: 'fi-rs-users',
    title: 'Technical leadership',
    text: 'I run workshops, coordinate technical decisions, review code, and support developers as part of day-to-day delivery.',
    skills: 'Teams · delivery · mentoring · agile methods',
  },
  {
    icon: 'fi-rs-code-simple',
    title: 'Software development',
    text: 'I work across user interfaces, APIs, and data, and stay involved in the code.',
    skills: 'C# / .NET · React · Angular · TypeScript · Azure',
  },
];

const englishAiPractices = [
  {
    icon: 'fi-rs-lightbulb-on',
    title: 'Philosophy',
    text: 'I treat AI as an essential tool in software development and adapt how I use it to each project’s needs and scope.',
  },
  {
    icon: 'fi-rs-comment-alt-dots',
    title: 'Prompt engineering',
    text: 'I improve prompts by clarifying context, goals, and constraints, then refine them based on the responses.',
  },
  {
    icon: 'fi-rs-workflow',
    title: 'Agentic workflows & skills',
    text: 'I use agentic workflows and skills to structure tasks and adapt context to the work at hand.',
  },
  {
    icon: 'fi-rs-brain',
    title: 'Choosing a model',
    text: 'I select a model based on the task, the reasoning required, and the response format.',
  },
  {
    icon: 'fi-rs-code-branch',
    title: 'Vibe coding and SDD',
    text: 'I use vibe coding to explore ideas quickly. For larger projects, I clarify the need, constraints, and success criteria before coding with Spec-Driven Development (SDD).',
  },
  {
    icon: 'fi-rs-binoculars',
    title: 'Research & exploration',
    text: 'I follow alternative language models, including d-LLMs, and explore their approaches and potential contributions to software development.',
  },
];

const technologyGroups = [
  {
    title: { fr: 'Front-end', en: 'Front end' },
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Angular', icon: 'angular' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    title: { fr: 'Back-end & données', en: 'Back end & data' },
    technologies: [
      { name: 'C# / .NET', icon: 'dotnet' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    title: { fr: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    technologies: [
      { name: 'Azure', icon: 'azure' },
      { name: 'Azure DevOps', icon: 'azure-devops' },
      { name: 'PowerShell', icon: 'powershell' },
    ],
  },
];

const experienceGroups: ExperienceGroup[] = [
  {
    company: 'Exakis-Nelite',
    period: 'oct. 2023 - aujourd’hui',
    context: 'Tech Lead · Lyon · hybride',
    items: [
      {
        title: 'Tech Lead · Watts',
        period: 'Depuis juin 2026',
        summary: 'Je mène la refonte d’un portail d’administration, de l’analyse de l’existant à la réalisation.',
        details: 'J’ai défini l’architecture full stack, réécrit l’application en conservant ses fonctionnalités et accompagné l’équipe de développement.',
        stack: ['React', 'Tailwind CSS', 'C#', 'API REST', 'Bicep'],
      },
      {
        title: 'Responsable technique · Legrand',
        period: 'nov. 2025 - févr. 2026',
        summary: 'J’ai traité et migré des données pour un outil de Product Lifecycle Management.',
        details: 'J’ai maintenu et écrit des scripts pour traiter, calculer et convertir les données entre bases, puis documenté l’existant dans un contexte métier et technique contraint.',
        stack: ['PowerShell', 'Python', 'Excel', 'PLM'],
      },
      {
        title: 'Architecte technique · CNR',
        period: 'juil. 2025 - févr. 2026',
        summary: 'J’ai cadré la refonte d’une application métier critique, de WPF vers le web.',
        details: 'Après avoir analysé le besoin, j’ai rédigé le cadrage technique et défini l’architecture cible. Les ateliers avec les utilisateurs m’ont permis d’intégrer les contraintes métier et techniques.',
        stack: ['C#', 'WPF', 'Angular', 'Telerik', 'SQL Server', 'Oracle'],
      },
      {
        title: 'Tech Lead front-end · Projet Private GPT',
        period: 'juil. 2025 - oct. 2025',
        summary: 'J’ai piloté la refonte front-end de Private GPT, de Blazor à React.',
        details: 'J’ai défini l’architecture front-end, choisi le socle technique et posé les bonnes pratiques, puis coordonné et accompagné les développeurs. Mon périmètre couvrait le front-end ; une autre équipe gérait le back-end et l’infrastructure.',
        stack: ['React', 'Blazor', 'LLM locaux', 'MUI', 'C#', 'Azure Cosmos DB', 'Azure AI', 'App Service'],
      },
      {
        title: 'Responsable équipe technique · Ayming',
        period: 'oct. 2023 - juin 2025',
        summary: 'J’ai travaillé comme Lead Developer full stack sur trois projets menés en parallèle, avec des objectifs et des équipes différents.',
        details: 'J’ai modernisé des applications, mené des migrations Angular et Angular Material, maintenu le code et les bases, pris des décisions d’architecture, revu des pull requests et accompagné les développeurs. Nous travaillions par sprints de deux semaines.',
        stack: ['Angular', 'Angular Material', '.NET Core', 'SQL Server', 'Oracle', 'Azure DevOps'],
      },
    ],
  },
  {
    company: 'Apollo SSC',
    period: 'janv. 2019 - sept. 2023',
    context: 'Ingénieur d’études et de développement · Lyon et périphérie',
    items: [
      {
        title: 'Développeur full stack · Stanley Security France',
        period: 'mai 2021 - sept. 2023',
        summary: 'J’ai fait évoluer un extranet client et modernisé une application de suivi en temps réel.',
        details: 'Après mon intervention sur l’application ASP / C# existante, j’ai rejoint l’équipe chargée de sa nouvelle version. J’y ai développé le front-end, le back-end et la base de données, animé des ateliers techniques, revu le code, testé les évolutions et accompagné les développeurs.',
        stack: ['Angular', 'TypeScript', 'D3.js', 'RxJS', 'C#', 'API REST', 'SQL Server'],
      },
      {
        title: 'Analyste technique · Groupe APICIL',
        period: 'juil. 2020 - mars 2021',
        summary: 'J’ai traduit des besoins fonctionnels complexes en spécifications pour les équipes de développement.',
        details: 'J’ai échangé avec les analystes fonctionnels, suivi la qualification, réalisé les tests et documenté un environnement applicatif historique.',
        stack: ['RPG', 'AS/400', 'Oracle', 'Data Modeler', 'SoapUI'],
      },
      {
        title: 'Lead Developer puis chef de projet · SMERRA',
        period: 'avr. 2019 - juin 2020',
        summary: 'J’ai maintenu et fait évoluer une application WinForms, transmis les connaissances et piloté le projet.',
        details: 'J’ai formé les développeurs et suivi le projet, tout en participant au passage vers Azure DevOps, aux sprints agiles et à la montée de version .NET.',
        stack: ['C#', 'WinForms', '.NET Framework', 'SQL Server', 'Azure DevOps'],
      },
      {
        title: 'Développeur logiciel · INDESO',
        period: 'janv. 2019 - mars 2019',
        summary: 'J’ai développé une application métier avec WPF.',
        details: 'J’ai conçu et développé une application interne avec Entity Framework et SQL Server, puis partagé sa documentation.',
        stack: ['C#', 'WPF', 'Entity Framework', 'SQL Server', 'Confluence'],
      },
    ],
  },
  {
    company: 'Exo Partners',
    period: 'sept. 2015 - oct. 2018',
    context: 'Développeur full stack · alternance',
    items: [
      {
        title: 'Applications comptables et hôtelières',
        period: '2015 - 2018',
        summary: 'J’ai développé, maintenu et modernisé plusieurs applications métier pendant mon alternance.',
        details: 'J’ai contribué à la refonte d’une application Silverlight vers ASP.NET / C#. Mon travail couvrait aussi la gestion des données, la Business Intelligence, la rédaction de spécifications et l’accompagnement d’autres développeurs.',
        stack: ['C#', 'ASP.NET', 'Silverlight', 'SQL Server', 'WPF', 'VB.NET', 'Excel', 'Access'],
      },
    ],
  },
];

const englishExperienceGroups: ExperienceGroup[] = [
  {
    company: 'Exakis-Nelite',
    period: 'Oct 2023 - present',
    context: 'Tech Lead · Lyon · hybrid',
    items: [
      {
        title: 'Tech Lead · Watts',
        period: 'Since Jun 2026',
        summary: 'I’m leading the redesign of an administration portal, from assessing the existing system through implementation.',
        details: 'I defined the full-stack architecture, rewrote the application while preserving its features, and supported the development team.',
        stack: ['React', 'Tailwind CSS', 'C#', 'REST API', 'Bicep'],
      },
      {
        title: 'Technical Lead · Legrand',
        period: 'Nov 2025 - Feb 2026',
        summary: 'I processed and migrated data for a Product Lifecycle Management (PLM) tool.',
        details: 'I maintained and wrote scripts to process, calculate, and convert data across databases, then documented the existing system in a demanding business and technical context.',
        stack: ['PowerShell', 'Python', 'Excel', 'PLM'],
      },
      {
        title: 'Technical Architect · CNR',
        period: 'Jul 2025 - Feb 2026',
        summary: 'I scoped the redesign of a critical business application, moving it from WPF to the web.',
        details: 'After analysing the requirements, I wrote the technical scoping document and defined the target architecture. Workshops with users helped me account for business and technical constraints.',
        stack: ['C#', 'WPF', 'Angular', 'Telerik', 'SQL Server', 'Oracle'],
      },
      {
        title: 'Front-end Tech Lead · Private GPT project',
        period: 'Jul 2025 - Oct 2025',
        summary: 'I led the front-end rewrite of Private GPT from Blazor to React.',
        details: 'I defined the front-end architecture, selected the technology stack, set development practices, and coordinated and supported developers. My scope covered the front end; another team handled the back end and infrastructure.',
        stack: ['React', 'Blazor', 'Local LLMs', 'MUI', 'C#', 'Azure Cosmos DB', 'Azure AI', 'App Service'],
      },
      {
        title: 'Technical Team Lead · Ayming',
        period: 'Oct 2023 - Jun 2025',
        summary: 'I worked as a full-stack Lead Developer across three parallel projects, each with different goals and teams.',
        details: 'I modernised applications, led Angular and Angular Material migrations, maintained code and databases, made architecture decisions, reviewed pull requests, and supported developers. We worked in two-week sprints.',
        stack: ['Angular', 'Angular Material', '.NET Core', 'SQL Server', 'Oracle', 'Azure DevOps'],
      },
    ],
  },
  {
    company: 'Apollo SSC',
    period: 'Jan 2019 - Sep 2023',
    context: 'Software Development Engineer · Lyon and surrounding area',
    items: [
      {
        title: 'Full-stack Developer · Stanley Security France',
        period: 'May 2021 - Sep 2023',
        summary: 'I enhanced a client extranet and modernised a real-time monitoring application.',
        details: 'After working on the existing ASP / C# application, I joined the team building its new version. I developed the front end, back end, and database, ran technical workshops, reviewed code, tested changes, and supported developers.',
        stack: ['Angular', 'TypeScript', 'D3.js', 'RxJS', 'C#', 'REST API', 'SQL Server'],
      },
      {
        title: 'Technical Analyst · Groupe APICIL',
        period: 'Jul 2020 - Mar 2021',
        summary: 'I translated complex functional requirements into specifications for development teams.',
        details: 'I worked with business analysts, followed qualification activities, carried out tests, and documented a legacy application environment.',
        stack: ['RPG', 'AS/400', 'Oracle', 'Data Modeler', 'SoapUI'],
      },
      {
        title: 'Lead Developer, then Project Manager · SMERRA',
        period: 'Apr 2019 - Jun 2020',
        summary: 'I maintained and enhanced a WinForms application, shared knowledge with the team, and led the project.',
        details: 'I trained developers and tracked the project while contributing to the move to Azure DevOps, agile sprints, and a .NET upgrade.',
        stack: ['C#', 'WinForms', '.NET Framework', 'SQL Server', 'Azure DevOps'],
      },
      {
        title: 'Software Developer · INDESO',
        period: 'Jan 2019 - Mar 2019',
        summary: 'I developed a business application with WPF.',
        details: 'I designed and built an internal application with Entity Framework and SQL Server, then shared its documentation.',
        stack: ['C#', 'WPF', 'Entity Framework', 'SQL Server', 'Confluence'],
      },
    ],
  },
  {
    company: 'Exo Partners',
    period: 'Sep 2015 - Oct 2018',
    context: 'Full-stack Developer · work-study programme',
    items: [
      {
        title: 'Accounting and hospitality applications',
        period: '2015 - 2018',
        summary: 'I developed, maintained, and modernised several business applications during my work-study programme.',
        details: 'I contributed to a rewrite from Silverlight to ASP.NET / C#. My work also covered data management, business intelligence, specification writing, and support for other developers.',
        stack: ['C#', 'ASP.NET', 'Silverlight', 'SQL Server', 'WPF', 'VB.NET', 'Excel', 'Access'],
      },
    ],
  },
];

const knownClientOrganizations = [
  'Watts',
  'Legrand',
  'CNR',
  'Ayming',
  'Stanley Security France',
  'Groupe APICIL',
  'SMERRA',
  'INDESO',
];
// Ayming covered three projects, adding two beyond one project per client.
// This lower bound excludes the internal Private GPT project and unnamed work.
const aymingProjectCount = 3;
const clientMissionCount = `${knownClientOrganizations.length - 1 + aymingProjectCount}+`;

// Role families group equivalent titles such as Tech Lead and Lead Developer.
const roleFamilies = [
  'Leadership technique',
  'Architecture technique',
  'Développement logiciel',
  'Analyse technique',
  'Gestion de projet',
];

// Lower bounds cover front-end skills and back-end/infrastructure together.
const frontendSkillCount = '10+';
const backendAndInfrastructureSkillCount = '15+';

const now = new Date();
const yearsOfExperience = now.getFullYear() - 2015 - (now.getMonth() < 8 ? 1 : 0);

const proofValues = [
  clientMissionCount,
  `${knownClientOrganizations.length}+`,
  yearsOfExperience,
  roleFamilies.length,
  frontendSkillCount,
  backendAndInfrastructureSkillCount,
];

type PageCopy = {
  pageTitle: string;
  pageDescription: string;
  openGraphTitle: string;
  openGraphDescription: string;
  jobTitle: string;
  skipLink: string;
  brandAria: string;
  languageSwitch: string;
  switchToFrench: string;
  switchToEnglish: string;
  navAria: string;
  navSearch: string;
  navExpertise: string;
  navAI: string;
  navExperience: string;
  navContact: string;
  heroRole: string;
  heroTitle: string;
  heroIntro: string;
  availability: string;
  emailSubject: string;
  contactCta: string;
  cvCta: string;
  approachTitle: string;
  approachSteps: { title: string; description: string }[];
  proofAria: string;
  proofLabels: string[];
  searchTitle: string;
  searchMapAlt: string;
  searchLocationLabel: string;
  searchLocation: string;
  searchRoleLabel: string;
  searchRole: string;
  searchContractLabel: string;
  searchContract: string;
  searchNoticePeriodLabel: string;
  searchNoticePeriod: string;
  searchModeLabel: string;
  searchModeDescription: string;
  searchPrinciples: { title: string; description: string }[];
  expertiseTitle: string;
  technologyStackTitle: string;
  technologyStackIntro: string;
  aiTitle: string;
  experienceTitle: string;
  environment: string;
  credentialsTitle: string;
  educationTitle: string;
  education: { date: string; title: string; institution: string }[];
  certificationsTitle: string;
  certifications: string[];
  languagesTitle: string;
  languages: string[];
  profileHighlights: { title: string; text: string }[];
  contactIndex: string;
  contactTitle: string;
  contactIntro: string;
  emailLabel: string;
  phoneLabel: string;
  cvLabel: string;
  cvDownloadLabel: string;
  meetingLabel: string;
  meetingLinkLabel: string;
  profileLabel: string;
  footerRole: string;
  flaticonAttribution: string;
};

const pageCopy: Record<Language, PageCopy> = {
  fr: {
    pageTitle: 'Vincent Mangel - Tech Lead & Architecte logiciel',
    pageDescription: 'Tech Lead et architecte logiciel en recherche active à Lyon. Je fais évoluer les applications métier, du cadrage à la livraison et dans la durée.',
    openGraphTitle: 'Vincent Mangel - Tech Lead & Architecte logiciel',
    openGraphDescription: 'Tech Lead et architecte logiciel en recherche active à Lyon. Je fais évoluer les applications métier, du cadrage à la livraison et dans la durée.',
    jobTitle: 'Tech Lead et Architecte logiciel',
    skipLink: 'Aller au contenu',
    brandAria: 'Vincent Mangel, accueil',
    languageSwitch: 'Langue du site',
    switchToFrench: 'Afficher le site en français',
    switchToEnglish: 'Afficher le site en anglais',
    navAria: 'Navigation principale',
    navSearch: 'Ma recherche',
    navExpertise: 'Expertises',
    navAI: 'IA',
    navExperience: 'Expérience',
    navContact: 'Contact',
    heroRole: 'Tech Lead · Architecte logiciel · Lyon',
    heroTitle: 'Je fais évoluer les applications métier, du cadrage à la livraison.',
    heroIntro: 'J’interviens en architecture comme en développement, au plus près des équipes.',
    availability: 'Je recherche un poste d’architecte logiciel en CDI à Lyon.',
    emailSubject: 'Échange professionnel',
    contactCta: 'Me contacter',
    cvCta: 'Télécharger mon CV',
    approachTitle: 'Ma façon d’intervenir',
    approachSteps: [
      { title: 'Cadrer', description: 'Je clarifie le besoin, l’existant et les contraintes métier.' },
      { title: 'Concevoir et réaliser', description: 'Je définis l’architecture et reste impliqué dans le développement avec l’équipe.' },
      { title: 'Livrer', description: 'Je participe aux tests et aux derniers ajustements jusqu’à la livraison.' },
    ],
    proofAria: 'Repères du parcours',
    proofLabels: ['Missions client', 'Clients', 'Années d’expérience', 'Familles de rôles', 'Compétences front-end', 'Compétences back-end et infrastructure'],
    searchTitle: '02 / MA RECHERCHE',
    searchMapAlt: 'Carte illustrée de Lyon, avec un repère au centre-ville.',
    searchLocationLabel: 'Localisation',
    searchLocation: 'Lyon',
    searchRoleLabel: 'Poste',
    searchRole: 'Architecte logiciel',
    searchContractLabel: 'Contrat',
    searchContract: 'CDI',
    searchNoticePeriodLabel: 'Préavis',
    searchNoticePeriod: '3 mois',
    searchModeLabel: 'Mode d’intervention',
    searchModeDescription: 'Pour les missions, je privilégie le forfait à la régie, avec un objectif partagé et un engagement dans la durée auprès des équipes.',
    searchPrinciples: [
      { title: 'Apprendre et transmettre', description: 'Je veux continuer à apprendre et à partager mes connaissances pour aider l’équipe à progresser.' },
      { title: 'Technique et humain', description: 'Je prends en compte les contraintes techniques et les personnes qui conçoivent, développent et utilisent les solutions.' },
    ],
    expertiseTitle: '03 / EXPERTISES',
    technologyStackTitle: 'Technologies privilégiées',
    technologyStackIntro: 'Développement full stack, avec une préférence pour le front-end.',
    aiTitle: '04 / IA & VEILLE',
    experienceTitle: '01 / EXPÉRIENCE',
    environment: 'Environnement',
    credentialsTitle: '05 / FORMATION & REPÈRES',
    educationTitle: 'Diplômes',
    education: [
      { date: '2015 - 2018', title: 'Expert en Systèmes d’Information', institution: 'ISITECH Lyon · Master' },
      { date: '2013 - 2015', title: 'BTS Services Informatiques aux Organisations', institution: 'ICOF Lyon · option SLAM (Solutions Logicielles et Applications Métiers)' },
      { date: '2013', title: 'Baccalauréat Sciences et Technologies de la Gestion (STG)', institution: 'Lycée Jean-Paul Sartre · Bron · option Mercatique' },
    ],
    certificationsTitle: 'Certifications',
    certifications: ['AZ-900 · Azure', 'GH-300 · GitHub Copilot', 'IA-901 · Intelligence artificielle'],
    languagesTitle: 'Langues',
    languages: ['Français · langue maternelle', 'Anglais · professionnel', 'Allemand · notions'],
    profileHighlights: [
      { title: 'Transmission', text: 'Membre du jury de soutenance BTS SIO à l’ICOF depuis 2024.' },
      { title: 'Intérêts & connaissances', text: 'Je m’intéresse au cinéma, à l’art, aux expositions et aux ateliers créatifs. J’ai aussi de bonnes connaissances en marketing, jeux vidéo et communication.' },
    ],
    contactIndex: '06 / CONTACT',
    contactTitle: 'Échangeons',
    contactIntro: 'Je recherche un poste d’architecte logiciel en CDI à Lyon. Je suis aussi ouvert aux missions au forfait, avec un objectif partagé.',
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    cvLabel: 'CV',
    cvDownloadLabel: 'Télécharger le CV (PDF)',
    meetingLabel: 'Rendez-vous',
    meetingLinkLabel: 'Choisir un créneau (Google Agenda)',
    profileLabel: 'Profil',
    footerRole: 'Tech Lead · Architecte logiciel · Lyon',
    flaticonAttribution: 'Icônes UIcons par Flaticon',
  },
  en: {
    pageTitle: 'Vincent Mangel - Tech Lead & Software Architect',
    pageDescription: 'I am a Tech Lead and software architect seeking a role in Lyon. I take business applications from scoping through delivery and ongoing maintenance.',
    openGraphTitle: 'Vincent Mangel - Tech Lead & Software Architect',
    openGraphDescription: 'I am a Tech Lead and software architect seeking a role in Lyon. I take business applications from scoping through delivery and ongoing maintenance.',
    jobTitle: 'Tech Lead and Software Architect',
    skipLink: 'Skip to content',
    brandAria: 'Vincent Mangel, home',
    languageSwitch: 'Site language',
    switchToFrench: 'View the site in French',
    switchToEnglish: 'View the site in English',
    navAria: 'Main navigation',
    navSearch: 'Role search',
    navExpertise: 'Expertise',
    navAI: 'AI',
    navExperience: 'Experience',
    navContact: 'Contact',
    heroRole: 'Tech Lead · Software Architect · Lyon',
    heroTitle: 'I take business applications from scoping through delivery.',
    heroIntro: 'I work across architecture and development, alongside the team.',
    availability: 'I am seeking a permanent software architect role in Lyon.',
    emailSubject: 'Professional enquiry',
    contactCta: 'Get in touch',
    cvCta: 'Download my CV (French PDF)',
    approachTitle: 'How I work',
    approachSteps: [
      { title: 'Scope', description: 'I clarify the need, the existing system, and business constraints.' },
      { title: 'Design and build', description: 'I define the architecture and stay involved in development with the team.' },
      { title: 'Deliver', description: 'I take part in testing and final adjustments through delivery.' },
    ],
    proofAria: 'Career at a glance',
    proofLabels: ['Client assignments', 'Clients', 'Years of experience', 'Role families', 'Front-end skills', 'Back-end and infrastructure skills'],
    searchTitle: '02 / ROLE SEARCH',
    searchMapAlt: 'Illustrated map of Lyon, with a marker in the city centre.',
    searchLocationLabel: 'Location',
    searchLocation: 'Lyon',
    searchRoleLabel: 'Role',
    searchRole: 'Software architect',
    searchContractLabel: 'Contract',
    searchContract: 'Permanent (CDI)',
    searchNoticePeriodLabel: 'Notice period',
    searchNoticePeriod: '3 months',
    searchModeLabel: 'Engagement model',
    searchModeDescription: 'For project work, I prefer fixed-price engagements to time and materials, with a shared goal and a long-term commitment to the team.',
    searchPrinciples: [
      { title: 'Learning and sharing', description: 'I want to keep learning and share what I know to help the team grow.' },
      { title: 'Technology and people', description: 'I consider technical constraints and the people who design, build, and use the solutions.' },
    ],
    expertiseTitle: '03 / EXPERTISE',
    technologyStackTitle: 'Preferred technologies',
    technologyStackIntro: 'Full-stack development, with a preference for front-end work.',
    aiTitle: '04 / AI & RESEARCH',
    experienceTitle: '01 / EXPERIENCE',
    environment: 'Technology stack',
    credentialsTitle: '05 / EDUCATION & PROFILE',
    educationTitle: 'Education',
    education: [
      { date: '2015 - 2018', title: 'Information Systems Expert', institution: 'ISITECH Lyon · Master’s degree' },
      { date: '2013 - 2015', title: 'BTS Services Informatiques aux Organisations (BTS SIO)', institution: 'ICOF Lyon · software development track (SLAM)' },
      { date: '2013', title: 'French Baccalauréat in Management Science and Technology (STG)', institution: 'Lycée Jean-Paul Sartre · Bron · Marketing option' },
    ],
    certificationsTitle: 'Certifications',
    certifications: ['AZ-900 · Azure', 'GH-300 · GitHub Copilot', 'IA-901 · Artificial intelligence'],
    languagesTitle: 'Languages',
    languages: ['French · native', 'English · professional', 'German · basic'],
    profileHighlights: [
      { title: 'Knowledge sharing', text: 'Member of BTS SIO oral examination panels at ICOF since 2024.' },
      { title: 'Interests & knowledge', text: 'My interests include cinema, art, exhibitions, and creative workshops. I also have a good knowledge of marketing, video games, and communications.' },
    ],
    contactIndex: '06 / CONTACT',
    contactTitle: 'Let’s talk',
    contactIntro: 'I am seeking a permanent software architect role in Lyon. I am also open to fixed-price project work with a shared goal.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    cvLabel: 'CV',
    cvDownloadLabel: 'Download the CV (PDF, in French)',
    meetingLabel: 'Meeting',
    meetingLinkLabel: 'Choose a time (Google Calendar)',
    profileLabel: 'Profile',
    footerRole: 'Tech Lead · Software Architect · Lyon',
    flaticonAttribution: 'UIcons by Flaticon',
  },
};

const languageStorageKey = 'web_cv_language';

function getInitialLanguage(): Language {
  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage === 'fr' || savedLanguage === 'en') return savedLanguage;
  } catch {
    // Browser storage can be disabled; the browser language still provides a useful default.
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const preferredLanguage = browserLanguages
    .map((locale) => locale.toLowerCase().split(/[-_]/)[0])
    .find((locale) => locale === 'en' || locale === 'fr');
  return preferredLanguage === 'en' ? 'en' : 'fr';
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = pageCopy[language];
  const currentExpertise = language === 'en' ? englishExpertise : expertise;
  const currentExperienceGroups = language === 'en' ? englishExperienceGroups : experienceGroups;
  const displayPhone = language === 'en' ? '+33 6 37 36 98 36' : links.displayPhone;
  const proofItems = copy.proofLabels.map((label, index) => ({ label, value: proofValues[index] }));

  const chooseLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    try {
      window.localStorage.setItem(languageStorageKey, nextLanguage);
    } catch {
      // The language switch still works for this page when browser storage is unavailable.
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.pageTitle;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = copy.pageDescription;

    const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (openGraphTitle) openGraphTitle.content = copy.openGraphTitle;

    const openGraphDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (openGraphDescription) openGraphDescription.content = copy.openGraphDescription;

    const openGraphLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
    if (openGraphLocale) openGraphLocale.content = language === 'en' ? 'en_GB' : 'fr_FR';

    const structuredProfile = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (structuredProfile?.textContent) {
      try {
        const profileData = JSON.parse(structuredProfile.textContent) as Record<string, unknown>;
        profileData.jobTitle = copy.jobTitle;
        structuredProfile.textContent = JSON.stringify(profileData);
      } catch {
        // Leave the original structured data intact if it cannot be parsed.
      }
    }
  }, [copy, language]);

  return (
    <>
      <a className="skip-link" href="#main">{copy.skipLink}</a>
      <header className="site-header" id="top">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label={copy.brandAria}>Vincent Mangel</a>
          <nav className="primary-nav" aria-label={copy.navAria}>
            <a href="#experience">{copy.navExperience}</a>
            <a href="#recherche">{copy.navSearch}</a>
            <a href="#expertises">{copy.navExpertise}</a>
            <a href="#ia">{copy.navAI}</a>
            <a href="#contact">{copy.navContact}</a>
          </nav>
          <div className="header-actions">
            <div className="language-switcher" role="group" aria-label={copy.languageSwitch}>
              <button type="button" lang="fr" aria-label={copy.switchToFrench} aria-pressed={language === 'fr'} onClick={() => chooseLanguage('fr')}>FR</button>
              <button type="button" lang="en" aria-label={copy.switchToEnglish} aria-pressed={language === 'en'} onClick={() => chooseLanguage('en')}>EN</button>
            </div>
            <a className="header-cv" href={links.cv} download="CV_Vincent_Mangel.pdf" aria-label={language === 'en' ? 'Download the French CV PDF' : undefined}>CV</a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero page-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-role">{copy.heroRole}</p>
            <h1 id="hero-title">{copy.heroTitle}</h1>
            <p className="hero-intro">{copy.heroIntro}</p>
            <p className="availability">{copy.availability}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{copy.contactCta}</a>
              <a className="button button-text" href={links.cv} download="CV_Vincent_Mangel.pdf">{copy.cvCta}</a>
            </div>
          </div>

          <div className="approach-summary" aria-labelledby="approach-title">
            <h2 id="approach-title">{copy.approachTitle}</h2>
            <ol className="approach-list">
              {copy.approachSteps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.description}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="proof-band" aria-label={copy.proofAria}>
          <div className="page-wrap proof-grid">
            {proofItems.map((item) => (
              <dl className="proof-item" key={item.label}>
                <dt>{item.label}</dt>
                <dd><strong>{item.value}</strong></dd>
              </dl>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="page-wrap">
            <div className="section-heading experience-heading">
              <div><h2 id="experience-title">{copy.experienceTitle}</h2></div>
            </div>
            <div className="timeline">
              {currentExperienceGroups.map((group) => (
                <section className="timeline-group" key={group.company} aria-label={`${group.company}, ${group.period}`}>
                  <div className="timeline-company">
                    <p className="timeline-period">{group.period}</p>
                    <h3>{group.company}</h3>
                    <p>{group.context}</p>
                  </div>
                  <div className="timeline-roles">
                    {group.items.map((item) => (
                      <details className="experience-entry" key={item.title}>
                        <summary>
                          <span className="experience-summary-main"><strong>{item.title}</strong><small>{item.summary}</small></span>
                          <span className="experience-period">{item.period}<span className="disclosure-indicator" aria-hidden="true">+</span></span>
                        </summary>
                        <div className="experience-detail">
                          <p>{item.details}</p>
                          <p className="stack-line"><strong>{copy.environment}</strong><span>{item.stack.join(' · ')}</span></p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="search-section page-wrap" id="recherche" aria-labelledby="search-title">
          <div className="section-heading search-heading">
            <div><h2 id="search-title">{copy.searchTitle}</h2></div>
          </div>
          <div className="search-content">
            <figure className="lyon-map">
              <div className="lyon-map-frame">
                <img src="/lyon-recherche.png" alt={copy.searchMapAlt} loading="lazy" />
              </div>
            </figure>
            <div className="search-details">
              <dl className="search-criteria">
                <div><dt>{copy.searchRoleLabel}</dt><dd>{copy.searchRole}</dd></div>
                <div><dt>{copy.searchContractLabel}</dt><dd>{copy.searchContract}</dd></div>
                <div><dt>{copy.searchNoticePeriodLabel}</dt><dd>{copy.searchNoticePeriod}</dd></div>
                <div><dt>{copy.searchLocationLabel}</dt><dd>{copy.searchLocation}</dd></div>
                <div><dt>{copy.searchModeLabel}</dt><dd>{copy.searchModeDescription}</dd></div>
              </dl>
              <ul className="search-principles">
                {copy.searchPrinciples.map((principle) => <li key={principle.title}><h3>{principle.title}</h3><p>{principle.description}</p></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="expertise-section page-wrap" id="expertises" aria-labelledby="expertise-title">
          <div className="section-heading">
            <div><h2 id="expertise-title">{copy.expertiseTitle}</h2></div>
          </div>
          <div className="expertise-grid">
            {currentExpertise.map((area) => (
              <article className="expertise-item" key={area.title}>
                <h3><i aria-hidden="true" className={`fi ${area.icon} expertise-icon`} />{area.title}</h3>
                <p>{area.text}</p>
                <p className="expertise-skills">{area.skills}</p>
              </article>
            ))}
          </div>
          <div className="technology-stack" aria-labelledby="technology-stack-title">
            <h3 id="technology-stack-title">{copy.technologyStackTitle}</h3>
            <p className="technology-stack-intro">{copy.technologyStackIntro}</p>
            <div className="technology-groups">
              {technologyGroups.map((group) => (
                <div className="technology-group" key={group.title.en}>
                  <h4>{group.title[language]}</h4>
                  <ul className="technology-items">
                    {group.technologies.map((technology) => (
                      <li key={technology.name}>
                        <span aria-hidden="true" className={`technology-mark technology-mark--${technology.icon}`} />
                        <span>{technology.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-section page-wrap" id="ia" aria-labelledby="ai-title">
          <div className="section-heading ai-heading">
            <div><h2 id="ai-title">{copy.aiTitle}</h2></div>
          </div>
          <div className="ai-practice-grid">
            {(language === 'en' ? englishAiPractices : aiPractices).map((practice) => (
              <article className="ai-practice" key={practice.title}>
                <h3><i aria-hidden="true" className={`fi ${practice.icon} ai-practice-icon`} />{practice.title}</h3>
                <p>{practice.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="credentials-section page-wrap" aria-labelledby="credentials-title">
          <div className="section-heading credentials-heading">
            <div><h2 id="credentials-title">{copy.credentialsTitle}</h2></div>
          </div>
          <div className="credentials-body">
            <div className="education-block">
              <h3 className="credentials-subtitle">{copy.educationTitle}</h3>
              <div className="education-list">
                {copy.education.map((item) => <article key={item.date}><span>{item.date}</span><div><h4>{item.title}</h4><p>{item.institution}</p></div></article>)}
              </div>
            </div>
            <div className="credentials-profile">
              <div className="credentials-meta">
                <div>
                  <h3>{copy.certificationsTitle}</h3>
                  <ul>{copy.certifications.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <h3>{copy.languagesTitle}</h3>
                  <ul>{copy.languages.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
              <div className="credentials-highlights">
                {copy.profileHighlights.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact">
          <div className="page-wrap contact-wrap">
            <div className="contact-copy">
              <p className="contact-index">{copy.contactIndex}</p>
              <h2 id="contact" tabIndex={-1}>{copy.contactTitle}</h2>
              <p>{copy.contactIntro}</p>
            </div>
            <div className="contact-actions">
              <a className="contact-link" aria-label={`${copy.emailLabel}: ${links.email}`} href={`mailto:${links.email}?subject=${encodeURIComponent(copy.emailSubject)}`}><i aria-hidden="true" className="fi fi-rs-envelope contact-icon" /><strong>{links.email}</strong></a>
              <a className="contact-link" aria-label={`${copy.phoneLabel}: ${displayPhone}`} href={`tel:${links.phone}`}><i aria-hidden="true" className="fi fi-rs-phone-call contact-icon" /><strong>{displayPhone}</strong></a>
              <a className="contact-link" aria-label={`${copy.meetingLabel}: ${copy.meetingLinkLabel}`} href={links.calendar} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fi fi-rs-calendar contact-icon" /><strong>{copy.meetingLinkLabel}</strong></a>
              <a className="contact-link" aria-label={`${copy.profileLabel}: LinkedIn`} href={links.linkedin} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fi fi-brands-linkedin contact-icon" /><strong>LinkedIn</strong></a>
              <a className="contact-link" aria-label={`${copy.cvLabel}: ${copy.cvDownloadLabel}`} href={links.cv} download="CV_Vincent_Mangel.pdf"><i aria-hidden="true" className="fi fi-rs-file-pdf contact-icon" /><strong>{copy.cvDownloadLabel}</strong></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-inner"><a href="#top">Vincent Mangel</a><p>{copy.footerRole}</p><a href="https://www.flaticon.com/uicons" target="_blank" rel="noreferrer">{copy.flaticonAttribution}</a></div>
      </footer>
    </>
  );
}

export default App;
