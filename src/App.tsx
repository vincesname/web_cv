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

const links = {
  email: 'vincent.mangel.pro@gmail.com',
  phone: '+33637369836',
  displayPhone: '06 37 36 98 36',
  linkedin: 'https://www.linkedin.com/in/vincent-mangel/',
  calendar: 'https://calendar.app.google/XC6aZDmUYNm9w3Hm9',
  cv: '/CV_Vincent_Mangel.pdf',
};

const recentTransitions = [
  {
    client: 'Legrand',
    period: 'Nov. 2025 — févr. 2026',
    from: 'Données métier',
    to: 'PLM',
    note: 'Scripts de traitement et de conversion de données pour un outil PLM',
  },
  {
    client: 'CNR',
    period: 'Juil. 2025 — févr. 2026',
    from: 'WPF',
    to: 'Application web',
    note: 'Ateliers utilisateurs et définition de l’architecture cible',
  },
  {
    client: 'Private GPT',
    period: 'Juil. 2025 — oct. 2025',
    from: 'Blazor',
    to: 'React',
    note: 'Architecture front-end et accompagnement de l’équipe de développement',
  },
];

const expertise = [
  {
    number: '01',
    title: 'Architecture',
    text: 'J’analyse l’existant, cadre les choix techniques et définis une architecture cible adaptée aux contraintes métier.',
    proof: 'CNR · Refonte WPF vers une application web',
    skills: 'Cadrage · architecture logicielle · modernisation',
  },
  {
    number: '02',
    title: 'Leadership technique',
    text: 'Ateliers, coordination des choix techniques, revues de code et accompagnement des développeurs : j’interviens au quotidien auprès des équipes.',
    proof: 'Ayming · Trois projets menés en parallèle',
    skills: 'Équipe · delivery · mentorat · agilité',
  },
  {
    number: '03',
    title: 'Développement',
    text: 'Je travaille sur l’interface, les API et les données, en restant impliqué dans le code.',
    proof: 'Private GPT · Architecture et réalisation front-end',
    skills: 'C# / .NET · React · Angular · TypeScript · Azure',
  },
];

const experienceGroups: ExperienceGroup[] = [
  {
    company: 'Exakis-Nelite',
    period: 'Oct. 2023 — aujourd’hui',
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
        period: 'Nov. 2025 — févr. 2026',
        summary: 'Chez Legrand, j’ai traité et migré des données pour un outil de Product Lifecycle Management.',
        details: 'J’ai maintenu et écrit des scripts pour traiter, calculer et convertir les données entre bases, puis documenté l’existant dans un contexte métier et technique contraint.',
        stack: ['PowerShell', 'Python', 'Excel', 'PLM'],
      },
      {
        title: 'Architecte technique · CNR',
        period: 'Juil. 2025 — févr. 2026',
        summary: 'Chez CNR, j’ai cadré la refonte d’une application métier critique, de WPF vers le web.',
        details: 'Après avoir analysé le besoin, j’ai rédigé le cadrage technique et défini l’architecture cible. Les ateliers avec les utilisateurs m’ont permis d’intégrer les contraintes métier et techniques.',
        stack: ['C#', 'WPF', 'Angular', 'Telerik', 'SQL Server', 'Oracle'],
      },
      {
        title: 'Tech Lead front-end · Projet Private GPT',
        period: 'Juil. 2025 — oct. 2025',
        summary: 'Pour Private GPT, j’ai piloté la refonte front-end de Blazor vers React.',
        details: 'J’ai défini l’architecture front-end, choisi le socle technique et posé les bonnes pratiques, puis coordonné et accompagné les développeurs. Mon périmètre couvrait le front-end ; une autre équipe gérait le back-end et l’infrastructure.',
        stack: ['React', 'Blazor', 'LLM locaux', 'MUI', 'C#', 'Azure Cosmos DB', 'Azure AI', 'App Service'],
      },
      {
        title: 'Responsable équipe technique · Ayming',
        period: 'Oct. 2023 — juin 2025',
        summary: 'Chez Ayming, j’ai été Lead développeur full stack sur trois projets aux objectifs et équipes différents.',
        details: 'J’ai modernisé des applications, mené des migrations Angular et Angular Material, maintenu le code et les bases, pris des décisions d’architecture, revu des pull requests et accompagné les développeurs. Nous travaillions par sprints de deux semaines.',
        stack: ['Angular', 'Angular Material', '.NET Core', 'SQL Server', 'Oracle', 'Azure DevOps'],
      },
    ],
  },
  {
    company: 'Apollo SSC',
    period: 'Janv. 2019 — sept. 2023',
    context: 'Ingénieur d’études et développement · Lyon et périphérie',
    items: [
      {
        title: 'Développeur full stack · Stanley Security France',
        period: 'Mai 2021 — sept. 2023',
        summary: 'Chez Stanley Security France, j’ai fait évoluer un extranet client et modernisé une application de suivi en temps réel.',
        details: 'Après mon intervention sur l’application ASP / C# existante, j’ai rejoint l’équipe chargée de sa nouvelle version. J’y ai développé le front-end, le back-end et la base de données, animé des ateliers techniques, revu le code, testé les évolutions et accompagné les développeurs.',
        stack: ['Angular', 'TypeScript', 'D3.js', 'RxJS', 'C#', 'API REST', 'SQL Server'],
      },
      {
        title: 'Analyste technique · Groupe APICIL',
        period: 'Juil. 2020 — mars 2021',
        summary: 'Au Groupe APICIL, j’ai traduit des besoins fonctionnels complexes en spécifications pour les équipes de développement.',
        details: 'J’ai échangé avec les analystes fonctionnels, suivi la qualification, réalisé les tests et documenté un environnement applicatif historique.',
        stack: ['RPG', 'AS/400', 'Oracle', 'Data Modeler', 'SoapUI'],
      },
      {
        title: 'Lead Developer puis chef de projet · SMERRA',
        period: 'Avr. 2019 — juin 2020',
        summary: 'Chez SMERRA, j’ai maintenu et fait évoluer une application WinForms, transmis les connaissances et piloté le projet.',
        details: 'J’ai formé les développeurs et suivi le projet, tout en participant au passage vers Azure DevOps, aux sprints agiles et à la montée de version .NET.',
        stack: ['C#', 'WinForms', '.NET Framework', 'SQL Server', 'Azure DevOps'],
      },
      {
        title: 'Développeur logiciel · INDESO',
        period: 'Janv. 2019 — mars 2019',
        summary: 'Pour INDESO, j’ai développé une application métier avec WPF.',
        details: 'J’ai conçu et développé une application interne avec Entity Framework et SQL Server, puis partagé sa documentation.',
        stack: ['C#', 'WPF', 'Entity Framework', 'SQL Server', 'Confluence'],
      },
    ],
  },
  {
    company: 'Exo Partners',
    period: 'Sept. 2015 — oct. 2018',
    context: 'Développeur full stack · alternance',
    items: [
      {
        title: 'Applications comptables et hôtelières',
        period: '2015 — 2018',
        summary: 'Pendant mon alternance chez Exo Partners, j’ai développé, maintenu et modernisé plusieurs applications métier.',
        details: 'J’ai contribué à la refonte d’une application Silverlight vers ASP.NET / C#. Mon travail couvrait aussi la gestion des données, la Business Intelligence, la rédaction de spécifications et l’accompagnement d’autres développeurs.',
        stack: ['C#', 'ASP.NET', 'Silverlight', 'SQL Server', 'WPF', 'VB.NET', 'Excel', 'Access'],
      },
    ],
  },
];

const esnEmployers = ['Exakis-Nelite', 'Apollo SSC', 'Exo Partners'];
const clientOrganizations = [
  'Watts',
  'Legrand',
  'CNR',
  'Ayming',
  'Stanley Security France',
  'Groupe APICIL',
  'SMERRA',
  'INDESO',
];

// Distinct role labels across client missions; the same title is counted once.
const distinctRoles = [
  'Tech Lead',
  'Responsable technique',
  'Architecte technique',
  'Tech Lead front-end',
  'Responsable équipe technique',
  'Développeur full stack',
  'Analyste technique',
  'Lead Developer',
  'Chef de projet',
  'Développeur logiciel',
];

// Counts cover unique technologies shown in the mission stacks, grouped by use.
const frontendTechnologies = [
  'React',
  'Tailwind CSS',
  'WPF',
  'Angular',
  'Telerik',
  'Blazor',
  'MUI',
  'Angular Material',
  'TypeScript',
  'D3.js',
  'RxJS',
  'WinForms',
  'Silverlight',
];
const backendTechnologies = [
  'C#',
  'API REST',
  'PowerShell',
  'Python',
  'SQL Server',
  'Oracle',
  'Azure Cosmos DB',
  '.NET Core',
  'RPG',
  'AS/400',
  'Entity Framework',
  '.NET Framework',
  'ASP.NET',
  'VB.NET',
];

const now = new Date();
const yearsOfExperience = now.getFullYear() - 2015 - (now.getMonth() < 8 ? 1 : 0);

const proofItems = [
  {
    label: 'ESN employeurs',
    value: esnEmployers.length,
    note: esnEmployers.join(' · '),
  },
  {
    label: 'Clients',
    value: clientOrganizations.length,
    note: 'Watts · Legrand · CNR…',
  },
  {
    label: 'Années d’expérience',
    value: yearsOfExperience,
    note: 'Depuis septembre 2015',
  },
  {
    label: 'Rôles distincts',
    value: distinctRoles.length,
    note: 'Intitulés relevés dans les missions',
  },
  {
    label: 'Technologies front-end',
    value: frontendTechnologies.length,
    note: 'Interfaces · React · Angular · WPF…',
  },
  {
    label: 'Technologies back-end',
    value: backendTechnologies.length,
    note: 'Services et données · C# · .NET · SQL…',
  },
];

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className="site-header" id="top">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Vincent Mangel, accueil">Vincent Mangel</a>
          <nav className="primary-nav" aria-label="Navigation principale">
            <a href="#expertises">Expertises</a>
            <a href="#experience">Expérience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cv" href={links.cv} download="CV_Vincent_Mangel.pdf">CV PDF <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <main id="main">
        <section className="hero page-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-role">Tech Lead <span>·</span> Architecte logiciel <span>·</span> Lyon</p>
            <h1 id="hero-title">Architecture, modernisation et leadership technique.</h1>
            <p className="hero-intro">J’interviens sur des applications métier à faire évoluer : analyse de l’existant, choix d’architecture, migration et réalisation avec les équipes. Mon parcours de développeur full stack me garde proche du code.</p>
            <p className="availability">À l’écoute de nouvelles opportunités <span>· Sur site ou hybride</span></p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${links.email}?subject=${encodeURIComponent('Échange professionnel')}`}>Me contacter <span aria-hidden="true">→</span></a>
              <a className="button button-text" href={links.cv} download="CV_Vincent_Mangel.pdf">Télécharger mon CV <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="recent-work" aria-labelledby="recent-work-title">
            <h2 id="recent-work-title">Refontes & migrations</h2>
            <ol>
              {recentTransitions.map((mission) => (
                <li key={mission.client}>
                  <div className="mission-meta"><strong>{mission.client}</strong><span>{mission.period}</span></div>
                  <p className="transition"><span>{mission.from}</span><span className="transition-arrow" aria-hidden="true">→</span><span>{mission.to}</span></p>
                  <p className="mission-note">{mission.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="proof-band" aria-label="Repères du parcours">
          <div className="page-wrap proof-grid">
            {proofItems.map((item) => (
              <dl className="proof-item" key={item.label}>
                <dt>{item.label}</dt>
                <dd><strong>{item.value}</strong><span>{item.note}</span></dd>
              </dl>
            ))}
          </div>
          <p className="page-wrap proof-note">Je compte les technologies citées dans mes missions ; les bases de données, dont Cosmos DB, sont incluses côté back, mais pas les plateformes et outils cloud ou métier.</p>
        </section>

        <section className="expertise-section page-wrap" id="expertises" aria-labelledby="expertise-title">
          <div className="section-heading">
            <div><h2 id="expertise-title">01 / EXPERTISES</h2><p>Je relie les choix techniques aux besoins métier, du cadrage à la réalisation.</p></div>
          </div>
          <div className="expertise-grid">
            {expertise.map((area) => (
              <article className="expertise-item" key={area.number}>
                <span className="expertise-number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <p className="expertise-proof">{area.proof}</p>
                <p className="expertise-skills">{area.skills}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="page-wrap">
            <div className="section-heading experience-heading">
              <div><h2 id="experience-title">02 / EXPÉRIENCE</h2><p>Je présente mes missions de la plus récente à la plus ancienne. Cliquez sur une ligne pour voir le contexte et l’environnement technique.</p></div>
            </div>
            <div className="timeline">
              {experienceGroups.map((group) => (
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
                          <p className="stack-line"><strong>Environnement</strong><span>{item.stack.join(' · ')}</span></p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials-section page-wrap" aria-labelledby="credentials-title">
          <div className="section-heading credentials-heading">
            <div><h2 id="credentials-title">03 / FORMATION & REPÈRES</h2></div>
          </div>
          <div className="credentials-body">
            <div className="education-list">
              <article><span>2015 — 2018</span><div><h3>Expert en Systèmes d’Information</h3><p>ISITECH Lyon · Master</p></div></article>
              <article><span>2013 — 2015</span><div><h3>BTS Services Informatiques aux Organisations</h3><p>ICOF Lyon · option développement</p></div></article>
            </div>
            <div className="credentials-meta">
              <div><h3>Certifications</h3><ul><li>AZ-900 · Azure</li><li>GH-300 · GitHub Copilot</li><li>IA-901 · Intelligence artificielle</li></ul></div>
              <div><h3>Langues</h3><ul><li>Français · langue maternelle</li><li>Anglais · professionnel</li><li>Allemand · notions</li></ul></div>
            </div>
          </div>
          <aside className="personal-note" aria-label="Transmission et centres d’intérêt">
            <p className="personal-note-label">Transmission & curiosité</p>
            <div>
              <p className="personal-note-statement"><strong>Je suis membre du jury de soutenance en BTS SIO à l’ICOF depuis 2024.</strong></p>
              <p className="personal-note-interest">Je m’intéresse aussi à l’art, aux expositions et aux ateliers créatifs.</p>
            </div>
          </aside>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-wrap contact-wrap">
            <div className="contact-copy">
              <p className="section-index">04 / CONTACT</p>
              <h2 id="contact-title">Échangeons sur votre besoin.</h2>
              <p>Je suis ouvert à un poste de Tech Lead ou d’architecte logiciel, ainsi qu’à une mission de modernisation applicative à Lyon.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-link" href={`mailto:${links.email}`}><span className="contact-label">E-mail</span><strong>{links.email}</strong><span className="contact-arrow" aria-hidden="true">→</span></a>
              <a className="contact-link" href={`tel:${links.phone}`}><span className="contact-label">Téléphone</span><strong>{links.displayPhone}</strong><span className="contact-arrow" aria-hidden="true">→</span></a>
              <a className="contact-link" href={links.calendar} target="_blank" rel="noreferrer"><span className="contact-label">Rendez-vous</span><strong>Choisir un créneau (Google Agenda)</strong><span className="contact-arrow" aria-hidden="true">→</span></a>
              <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer"><span className="contact-label">Profil</span><strong>LinkedIn</strong><span className="contact-arrow" aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-inner"><a href="#top">Vincent Mangel</a><p>Tech Lead & Architecte logiciel · Lyon</p><a href={links.cv} download="CV_Vincent_Mangel.pdf">CV PDF ↓</a></div>
      </footer>
    </>
  );
}

export default App;
