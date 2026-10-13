import { useRef, useState } from 'react';

const links = {
  email: 'vincent.mangel.pro@gmail.com',
  phone: '+33637369836',
  displayPhone: '06 37 36 98 36',
  linkedin: 'https://www.linkedin.com/in/vincent-mangel/',
  calendar: 'https://calendar.app.google/XC6aZDmUYNm9w3Hm9',
  cv: '/CV_Vincent_Mangel.pdf',
};

const areas = [
  {
    id: 'architecture',
    label: 'Architecture',
    title: 'Rendre l’existant compréhensible, puis le faire évoluer.',
    text: 'Cadrage technique, analyse d’applications complexes et définition d’architectures cibles : je relie les contraintes métier aux choix de conception et au chemin de migration.',
    proof: 'CNR · Cadrage d’une refonte de WPF vers une application web',
    skills: ['Architecture de solution', 'Modernisation', 'Cadrage technique', 'Spécifications', 'Migration'],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    title: 'Donner un cadre de travail clair et faire progresser l’équipe.',
    text: 'J’accompagne les développeurs au quotidien, facilite les décisions, relis les changements et diffuse des pratiques qui rendent l’équipe plus autonome.',
    proof: 'Ayming · Coordination de trois projets et de leurs équipes métier et techniques',
    skills: ['Mentorat', 'Revue de code', 'Décisions techniques', 'Agile', 'Transmission'],
  },
  {
    id: 'delivery',
    label: 'Développement & cloud',
    title: 'Rester proche du code, du front à la donnée.',
    text: 'Mon parcours de développeur full stack nourrit mon approche d’architecte : je peux entrer dans le détail, construire un socle technique et accompagner sa mise en œuvre.',
    proof: 'Watts · Architecture full stack et réécriture d’un portail d’administration',
    skills: ['C# / .NET', 'React', 'Angular', 'TypeScript', 'Azure', 'SQL Server'],
  },
];

const filters = [
  { id: 'all', label: 'Tout le parcours' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'delivery', label: 'Développement' },
];

const experienceGroups = [
  {
    company: 'Exakis-Nelite',
    period: 'Oct. 2023 — aujourd’hui',
    context: 'Tech Lead · Lyon · hybride',
    items: [
      {
        title: 'Tech Lead · Watts',
        period: 'Depuis juin 2026',
        summary: 'Refonte d’un portail d’administration, de l’analyse de l’existant au nouvel applicatif.',
        details: 'Définition de l’architecture full stack, réécriture iso-fonctionnelle et accompagnement de l’équipe de développement.',
        stack: ['React', 'Tailwind CSS', 'C#', 'API REST', 'Bicep'],
        categories: ['architecture', 'leadership', 'delivery'],
      },
      {
        title: 'Responsable technique · Legrand',
        period: 'Nov. 2025 — févr. 2026',
        summary: 'Traitement et migration de données pour un outil de Product Lifecycle Management.',
        details: 'Maintenance et création de scripts de traitement, calcul et conversion entre bases. Rétro-documentation de l’existant dans un contexte métier et technique contraint.',
        stack: ['PowerShell', 'Python', 'Excel', 'PLM'],
        categories: ['architecture', 'leadership', 'delivery'],
      },
      {
        title: 'Architecte technique · CNR',
        period: 'Juil. 2025 — févr. 2026',
        summary: 'Cadrage d’une refonte d’application métier critique, de WPF vers le web.',
        details: 'Analyse du besoin, rédaction du cadrage technique et définition de l’architecture cible. Ateliers avec les utilisateurs et prise en compte des contraintes métier et techniques.',
        stack: ['C#', 'WPF', 'Angular', 'Telerik', 'SQL Server', 'Oracle'],
        categories: ['architecture', 'leadership'],
      },
      {
        title: 'Tech Lead front-end · Projet Private GPT',
        period: 'Juil. 2025 — oct. 2025',
        summary: 'Réécriture de l’interface d’une application multi-LLM, de Blazor vers React.',
        details: 'Définition de l’architecture front, du socle technique et des bonnes pratiques, puis coordination et accompagnement des développeurs. Le périmètre de la mission était le front-end ; l’infrastructure et le back-end étaient pris en charge par une autre équipe.',
        stack: ['React', 'Blazor', 'LLM locaux', 'MUI'],
        categories: ['architecture', 'leadership', 'delivery'],
      },
      {
        title: 'Responsable équipe technique · Ayming',
        period: 'Oct. 2023 — juin 2025',
        summary: 'Lead développeur full stack sur trois projets aux objectifs et équipes différents.',
        details: 'Modernisation d’applications, migrations Angular et Angular Material, maintenance du code et des bases, décisions d’architecture, revues de pull requests et accompagnement des développeurs. Équipes organisées en sprints de deux semaines.',
        stack: ['Angular', 'Angular Material', '.NET Core', 'SQL Server', 'Oracle', 'Azure DevOps'],
        categories: ['architecture', 'leadership', 'delivery'],
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
        summary: 'Évolution d’un extranet client et modernisation d’une application de suivi en temps réel.',
        details: 'D’abord intervenu sur une application ASP / C# existante, j’ai ensuite rejoint l’équipe de la nouvelle version. Développement front, back et base de données, ateliers techniques, revues de code, tests et accompagnement des développeurs.',
        stack: ['Angular', 'TypeScript', 'D3.js', 'RxJS', 'C#', 'API REST', 'SQL Server'],
        categories: ['leadership', 'delivery'],
      },
      {
        title: 'Analyste technique · Groupe APICIL',
        period: 'Juil. 2020 — mars 2021',
        summary: 'Traduction de besoins fonctionnels complexes en spécifications pour les équipes de développement.',
        details: 'Échanges et ateliers avec les analystes fonctionnels, suivi de qualification, tests et documentation dans un environnement applicatif historique.',
        stack: ['RPG', 'AS/400', 'Oracle', 'Data Modeler', 'SoapUI'],
        categories: ['architecture', 'leadership'],
      },
      {
        title: 'Lead Developer puis chef de projet · SMERRA',
        period: 'Avr. 2019 — juin 2020',
        summary: 'Maintenance et évolution d’une application WinForms, avec transfert de connaissances et pilotage.',
        details: 'Accompagnement et formation de développeurs, suivi du projet, évolution vers Azure DevOps et adoption de sprints agiles. Participation à la montée de version .NET.',
        stack: ['C#', 'WinForms', '.NET Framework', 'SQL Server', 'Azure DevOps'],
        categories: ['leadership', 'delivery'],
      },
      {
        title: 'Développeur logiciel · INDESO',
        period: 'Janv. 2019 — mars 2019',
        summary: 'Développement d’une application métier WPF.',
        details: 'Conception et développement d’une application interne avec Entity Framework, SQL Server et une documentation de projet partagée.',
        stack: ['C#', 'WPF', 'Entity Framework', 'SQL Server', 'Confluence'],
        categories: ['delivery'],
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
        period: '3 ans en alternance',
        summary: 'Développement, maintenance et modernisation de plusieurs applications métier.',
        details: 'Participation à la refonte d’une application Silverlight vers ASP.NET / C#, gestion de données et Business Intelligence, rédaction de spécifications et accompagnement des autres développeurs.',
        stack: ['C#', 'ASP.NET', 'Silverlight', 'SQL Server', 'WPF', 'VB.NET', 'Excel', 'Access'],
        categories: ['architecture', 'leadership', 'delivery'],
      },
    ],
  },
];

function Icon({ name, className = '' }) {
  const paths = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    external: <><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3H5a2 2 0 0 0-2 2c0 8.84 7.16 16 16 16a2 2 0 0 0 2-2v-2l-4.3-1.2-2 2a14 14 0 0 1-6.5-6.5l2-2L11 5H7Z" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h3M8 17h6" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
  };
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function ApproachMap() {
  return (
    <figure className="approach-map" aria-labelledby="approach-map-title">
      <figcaption>
        <span id="approach-map-title" className="map-title">Du système à l’équipe</span>
        <span className="map-caption">Une démarche de bout en bout</span>
      </figcaption>
      <div className="map-origin">
        <span className="map-pin" aria-hidden="true" />
        <span><strong>Un existant</strong><small>à comprendre</small></span>
      </div>
      <div className="map-route" aria-hidden="true"><span /><span /><span /></div>
      <ol className="map-stages">
        <li><span className="stage-number">01</span><strong>Comprendre</strong><small>le besoin et les contraintes</small></li>
        <li><span className="stage-number">02</span><strong>Structurer</strong><small>une cible et son chemin</small></li>
        <li><span className="stage-number">03</span><strong>Transmettre</strong><small>pour que l’équipe avance</small></li>
      </ol>
      <div className="map-destination">
        <span className="map-check" aria-hidden="true"><Icon name="check" /></span>
        <span><strong>Un logiciel durable</strong><small>et une équipe autonome</small></span>
      </div>
    </figure>
  );
}

function DomainPanel({ area }) {
  return (
    <div className="domain-panel" role="tabpanel" id="domain-panel" aria-labelledby={`domain-tab-${area.id}`}>
      <div className="domain-copy">
        <p className="domain-proof">{area.proof}</p>
        <h3>{area.title}</h3>
        <p>{area.text}</p>
      </div>
      <div className="domain-skills">
        <span className="skills-label">Repères</span>
        <ul>{area.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </div>
    </div>
  );
}

function App() {
  const [activeArea, setActiveArea] = useState(areas[0].id);
  const [activeFilter, setActiveFilter] = useState('all');
  const tabRefs = useRef([]);
  const selectedArea = areas.find((area) => area.id === activeArea);

  function moveTab(event, index) {
    const nextKey = event.key;
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(nextKey)) return;
    event.preventDefault();
    const nextIndex = nextKey === 'Home'
      ? 0
      : nextKey === 'End'
        ? areas.length - 1
        : (index + (nextKey === 'ArrowRight' ? 1 : -1) + areas.length) % areas.length;
    setActiveArea(areas[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  const visibleGroups = experienceGroups
    .map((group) => ({
      ...group,
      items: activeFilter === 'all'
        ? group.items
        : group.items.filter((item) => item.categories.includes(activeFilter)),
    }))
    .filter((group) => group.items.length > 0);

  const visibleCount = visibleGroups.reduce((total, group) => total + group.items.length, 0);

  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">VM<span /></span>
            <span className="brand-copy"><strong>Vincent Mangel</strong><small>Tech Lead & Architecte</small></span>
          </a>
          <nav className="primary-nav" aria-label="Navigation principale">
            <a href="#expertises">Expertises</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cv" href={links.cv} download="CV_Vincent_Mangel.pdf">
            CV PDF <Icon name="download" />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero page-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="availability"><span className="availability-dot" />À l’écoute de nouvelles opportunités <span className="availability-place">· Lyon, sur site ou hybride</span></p>
            <h1 id="hero-title">Faire évoluer l’existant.<br />Donner de l’élan aux équipes.</h1>
            <p className="hero-intro">Tech Lead & Architecte logiciel, j’accompagne les refontes d’applications complexes — du cadrage technique à la progression des équipes de développement.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${links.email}?subject=${encodeURIComponent('Échange professionnel')}`}>
                Échanger avec moi <Icon name="arrow" />
              </a>
              <a className="button button-text" href={links.cv} download="CV_Vincent_Mangel.pdf">
                Télécharger le CV <span>PDF · 98 Ko</span>
              </a>
            </div>
            <p className="hero-footnote">Basé à Lyon · mobilité sur site ou hybride</p>
          </div>
          <div className="hero-visual"><ApproachMap /></div>
        </section>

        <section className="proof-band" aria-label="Repères du parcours">
          <div className="page-wrap proof-grid">
            <div className="proof-intro"><p>Un parcours qui relie</p><h2>la vision<br />au quotidien</h2></div>
            <dl className="proof-item"><dt>années d’expérience<br />depuis 2015</dt><dd>10<span>+</span></dd></dl>
            <dl className="proof-item"><dt>leviers d’intervention<br />du cadrage à la livraison</dt><dd>4</dd></dl>
            <dl className="proof-item"><dt>écosystèmes front<br />Angular & React</dt><dd>2</dd></dl>
          </div>
        </section>

        <section className="expertise-section page-wrap" id="expertises" aria-labelledby="expertise-title">
          <div className="section-heading">
            <div><p className="section-overline">Domaines d’intervention</p><h2 id="expertise-title">Architecture et leadership,<br />au service du produit.</h2></div>
            <p className="section-aside">Des systèmes historiques aux socles web modernes, avec une attention constante aux personnes qui les font vivre.</p>
          </div>
          <div className="domain-browser">
            <div className="domain-tabs" role="tablist" aria-label="Choisir un domaine d’intervention">
              {areas.map((area, index) => (
                <button
                  key={area.id}
                  className="domain-tab"
                  id={`domain-tab-${area.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeArea === area.id}
                  aria-controls="domain-panel"
                  tabIndex={activeArea === area.id ? 0 : -1}
                  onClick={() => setActiveArea(area.id)}
                  onKeyDown={(event) => moveTab(event, index)}
                  ref={(node) => { tabRefs.current[index] = node; }}
                >
                  <span className="tab-marker" aria-hidden="true" />{area.label}
                </button>
              ))}
            </div>
            <DomainPanel area={selectedArea} />
          </div>

          <div className="capability-ledger">
            <div className="ledger-heading"><h3>Technologies & méthodes</h3><p>Choisies selon le contexte, au service d’une solution maintenable.</p></div>
            <div className="ledger-row"><h4>Conception</h4><p>Analyse de l’existant · Architecture de solution · Cadrage technique · Spécifications · Migrations · Modernisation</p></div>
            <div className="ledger-row"><h4>Développement</h4><p>C# · .NET / ASP.NET Core · TypeScript · Angular · React · Blazor · SQL Server · Oracle</p></div>
            <div className="ledger-row"><h4>Plateforme & IA</h4><p>Azure · Azure DevOps · Bicep · PowerShell · Python · Django · LLM locaux · API REST</p></div>
          </div>
        </section>

        <section className="journey-section" id="parcours" aria-labelledby="journey-title">
          <div className="page-wrap">
            <div className="section-heading journey-heading">
              <div><p className="section-overline">Parcours professionnel</p><h2 id="journey-title">Des contextes différents.<br />Le même fil conducteur.</h2></div>
              <p className="section-aside">Comprendre le métier, clarifier les choix techniques et faire avancer le collectif — en restant proche du terrain.</p>
            </div>

            <div className="experience-controls">
              <div className="filter-list" aria-label="Filtrer les expériences">
                {filters.map((filter) => (
                  <button key={filter.id} className="filter-button" type="button" aria-pressed={activeFilter === filter.id} onClick={() => setActiveFilter(filter.id)}>
                    {filter.label}
                  </button>
                ))}
              </div>
              <p className="filter-count" aria-live="polite">{visibleCount} expériences affichées</p>
            </div>

            <div className="timeline">
              {visibleGroups.map((group) => (
                <section className="timeline-group" key={group.company} aria-label={`${group.company}, ${group.period}`}>
                  <div className="timeline-company">
                    <span className="timeline-node" aria-hidden="true" />
                    <p className="timeline-date">{group.period}</p>
                    <h3>{group.company}</h3>
                    <p>{group.context}</p>
                  </div>
                  <div className="timeline-roles">
                    {group.items.map((item) => (
                      <details className="experience-entry" key={item.title}>
                        <summary>
                          <span className="experience-summary-main"><strong>{item.title}</strong><small>{item.summary}</small></span>
                          <span className="experience-period">{item.period}<Icon name="chevron" /></span>
                        </summary>
                        <div className="experience-detail">
                          <p>{item.details}</p>
                          <ul className="tag-list" aria-label="Technologies et méthodes">
                            {item.stack.map((skill) => <li key={skill}>{skill}</li>)}
                          </ul>
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
          <div className="credentials-heading"><p className="section-overline">Formation & repères</p><h2 id="credentials-title">Des bases solides,<br />une curiosité entretenue.</h2></div>
          <div className="credentials-body">
            <div className="education-list">
              <article><span>2015 — 2018</span><div><h3>Expert en Systèmes d’Information</h3><p>ISITECH Lyon · Master</p></div></article>
              <article><span>2013 — 2015</span><div><h3>BTS Services Informatiques aux Organisations</h3><p>ICOF Lyon · option développement</p></div></article>
            </div>
            <div className="credentials-meta">
              <div><h3>Certifications</h3><ul className="plain-list"><li>AZ-900 · Azure</li><li>GH-300 · GitHub Copilot</li><li>IA-901 · Intelligence artificielle</li></ul></div>
              <div><h3>Langues</h3><ul className="plain-list"><li>Français · langue maternelle</li><li>Anglais · professionnel</li><li>Allemand · notions</li></ul></div>
              <p className="personal-note">En dehors des projets, je cultive l’art, les expositions et les ateliers créatifs. Je suis aussi membre du jury de soutenance BTS SIO à l’ICOF depuis 2024.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-wrap contact-wrap">
            <div className="contact-copy">
              <p className="section-overline">Entrons en contact</p>
              <h2 id="contact-title">Un projet à cadrer,<br />une équipe à faire grandir ?</h2>
              <p>Je suis à l’écoute de nouvelles opportunités à Lyon, sur site ou en hybride. Pour un échange approfondi, vous pouvez choisir un créneau dans mon agenda.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-link contact-link-primary" href={`mailto:${links.email}`}><Icon name="mail" /><span><small>Écrire un message</small><strong>{links.email}</strong></span><Icon name="arrow" /></a>
              <a className="contact-link" href={`tel:${links.phone}`}><Icon name="phone" /><span><small>M’appeler</small><strong>{links.displayPhone}</strong></span><Icon name="arrow" /></a>
              <a className="contact-link" href={links.calendar} target="_blank" rel="noreferrer"><Icon name="calendar" /><span><small>Entretien long</small><strong>Choisir un créneau</strong></span><Icon name="external" /></a>
              <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer"><span className="linkedin-mark" aria-hidden="true">in</span><span><small>Profil complet</small><strong>LinkedIn</strong></span><Icon name="external" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-inner"><a href="#top" className="footer-name">Vincent Mangel</a><p>Tech Lead & Architecte logiciel · Lyon</p><a href={links.cv} download="CV_Vincent_Mangel.pdf">Télécharger le CV <Icon name="download" /></a></div>
      </footer>
    </>
  );
}

export default App;
