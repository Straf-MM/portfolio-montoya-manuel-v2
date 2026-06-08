// Manuel Montoya - Portfolio Data
export const manuelData = {
  personal: {
    name: "Manuel Montoya",
    title: "Étudiant BTS SIO - Option SISR",
    city: "Horbourg-Wihr 68180",
    email: "pro.manuel.montoya@gmail.com",
    phone: "07 71 01 03 87",
    github: "https://github.com/Straf-MM",
    school: "Lycée Camille Sée, Colmar",
    formation: "BTS SIO - Option SISR (2023-2025 )",
  },

  about: {
    intro:
      "Je suis actuellement en deuxième année de BTS SIO (Services Informatiques aux Organisations), une formation qui me permet de développer mes compétences en développement informatique, administration système et cybersécurité.",
    passion:
      "Passionné par les nouvelles technologies et l'informatique, je m'investis pleinement dans mes projets académiques et professionnels. Mon objectif est de devenir un professionnel compétent et polyvalent dans le domaine de l'informatique.",
    portfolio:
      "Ce portfolio présente mes réalisations, mes expériences en stage, ainsi que ma veille technologique sur les backdoors et les malwares, un sujet qui me passionne particulièrement dans le domaine de la cybersécurité.",
  },

  bts: {
    definition:
      "Le BTS SIO (Services Informatiques aux Organisations) a été créé à la rentrée 2011 et remplace le BTS \"Informatique de Gestion\". Le but : former en deux ans des étudiants à la mise en place de solutions informatiques dans les entreprises et les administrations.",
    options:
      "Ce BTS comprend deux options : l'option SISR : \"Solutions d'Infrastructures, Systèmes et Réseaux\" et l'option SLAM : \"Solutions Logicielles et Applications Métiers\".",
    stages:
      "Au cours de sa formation de deux ans, l'étudiant en BTS SIO doit obligatoirement réaliser deux stages. (durée totale : 10 semaines ou plus).",

    sisr: {
      title: "SISR - Solutions d'Infrastructures, Systèmes et Réseaux",
      description:
        "L'étudiant en BTS SIO Spécialité « Solutions d'Infrastructures, Systèmes et Réseaux » apprend à installer, administrer et gérer la maintenance des équipements et des réseaux informatiques. En entreprise, sa mission sera d'intégrer, sécuriser et configurer les serveurs, les postes clients et tous les équipements d'interconnexion. Il aura également la tâche de prévoir les besoins d'évolution de l'infrastructure, de veiller au maintien de la qualité des services informatiques et de proposer des solutions pour faire évoluer les services.",
      roles: [
        "Technicien d'infrastructure",
        "Technicien systèmes et réseaux",
        "Technicien de production",
        "Technicien micro et réseaux",
        "Technicien réseaux – télécoms",
        "Administrateur systèmes et réseaux",
        "Informaticien support et déploiement",
        "Pilote d'exploitation",
        "Support systèmes et réseaux",
      ],
    },

    slam: {
      title: "SLAM - Solutions Logicielles et Applications Métiers",
      description:
        "L'étudiant en BTS SIO Spécialité « Solutions Logicielles et Applications Métiers » va apprendre à créer des solutions logicielles et applicatives. En entreprise, sa mission sera de participer à toutes les phases de la production des solutions logicielles : définition du cahier des charges qui va tenir compte des besoins et des contraintes de l'entreprise cliente, choix des solutions techniques, réalisation et mise en place des applications logicielles, assistance aux utilisateurs.",
      roles: [
        "Programmeur d'applications",
        "Développeur d'applications informatiques",
        "Analyste d'applications",
        "Analyste d'études",
        "Analyste programmeur",
        "Programmeur analyste",
        "Chargé d'études informatiques",
        "Informaticien d'études",
        "Responsable des services applicatifs",
        "Technicien d'études informatiques",
      ],
    },
  },

  internships: [
    {
      id: 1,
      title: "Stage de Première Année",
      company: "Liebherr Mining Equipment Colmar SAS",
      location: "Colmar, France",
      period: "13 mai - 21 juin 2024",
      duration: "6 semaines",
      description:
        "Durant ce premier stage, j'ai eu l'opportunité de découvrir le monde professionnel et de mettre en pratique mes connaissances acquises en première année de BTS SIO.",
      missions: [
        "Assistance technique aux utilisateurs",
        "Maintenance et dépannage de postes de travail",
        "Installation et configuration de logiciels",
        "Gestion de l'inventaire informatique",
        "Documentation des procédures techniques",
      ],
      skills: [
        "Support technique",
        "Windows",
        "Réseau",
        "Communication",
        "Résolution de problèmes",
      ],
      achievements: [
        "Résolution de plus de 50 tickets d'assistance",
        "Mise en place d'une documentation technique",
        "Amélioration du processus d'inventaire",
      ],
    },
    {
      id: 2,
      title: "Stage de Deuxième Année",
      company: "Liebherr Mining Equipment Colmar SAS",
      location: "Colmar, France",
      period: "02 mars - 10 avril 2026",
      duration: "6 semaines",
      description:
        "Ce second stage m'a permis d'approfondir mes compétences en développement et en administration système, tout en travaillant sur des projets plus complexes et stratégiques.",
      missions: [
        "Support technique et maintenance des RSPL (Spare Parts Lists)",
        "Réingénierie de l'arborescence et structure du serveur NAS",
        "Automatisation par développement de macros VBA",
        "Vision Business Intelligence et interconnexion des flux",
        "Gestion de la base de données et requêtes SQL",
      ],
      skills: [
        "SQL",
        "VBA",
        "NAS Administration",
        "Business Intelligence",
        "Data Management",
        "Linux",
        "MySQL",
        "Sécurité",
      ],
      achievements: [
        "Modernisation complète du glossaire technique [NAS]",
        "Automatisation de tâches répétitives",
        "Amélioration de la performance des requêtes SQL",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "AP 1 - Infrastructure Réseau et Services",
      category: "Infrastructure & Systèmes",
      description:
        "Projet complet d'infrastructure incluant virtualisation, gestion de stockage, répertoire actif et déploiement de postes.",
      technologies: ["TrueNAS", "Windows Server", "Active Directory", "Clonezilla", "GLPI"],
      phases: [
        "Phase 2 : Configuration TrueNAS",
        "Phase 3 : Stratégies de Groupe (GPO)",
        "Phase 4.1 : Installation GLPI",
        "Phase 4.2 : Configuration GLPI",
        "Phase 5 : Déploiement de poste via Clonezilla",
      ],
    },
    {
      id: 2,
      title: "AP 2 - Infrastructure Sécurisée et Services",
      category: "Sécurité & Réseau",
      description:
        "Mise en place d'une infrastructure sécurisée avec pare-feu, authentification, services de messagerie et supervision.",
      technologies: ["pfSense", "NextCloud", "Zabbix", "Postfix", "Linux"],
      phases: [
        "Partie 1 : Infrastructure Réseau et Mise en œuvre de pfSense",
        "Partie 2 : Authentification et Portail captif",
        "Phase 3 : Courrier électronique et NextCloud",
        "Phase 4 : Supervision avec Zabbix",
      ],
    },
  ],

  skills: {
    infrastructure: [
      "Virtualisation (VMware ESXi, Proxmox)",
      "Administration serveurs (Linux, Windows)",
      "Gestion du stockage (RAID, SAN, TrueNAS)",
      "Configuration réseau avancée",
      "Sécurité informatique (PKI, SSL/TLS)",
    ],
    support: [
      "Support à distance (RustDesk, TeamViewer)",
      "Déploiement d'applications",
      "Gestion des incidents",
      "Documentation technique",
      "Formation utilisateurs",
    ],
    tools: [
      "Alpine Linux, Debian, Windows Server",
      "Docker & Conteneurisation",
      "Scripting (Bash, Python, VBA)",
      "Gestion de configuration",
      "Monitoring & Logs (Zabbix, ELK)",
    ],
    softSkills: [
      "Communication technique",
      "Travail en équipe",
      "Résolution de problèmes",
      "Gestion de projet",
      "Autonomie & Rigueur",
    ],
  },

  progression: {
    year1: {
      title: "1ère année : Fondamentaux",
      description:
        "Acquisition des bases en administration système, réseau et support utilisateur.",
      skills: [
        "Windows Server",
        "Active Directory",
        "Réseau TCP/IP",
        "Support Utilisateur",
        "Virtualisation Basique",
      ],
    },
    year2: {
      title: "2ème année : Spécialisation SISR",
      description:
        "Approfondissement en infrastructure, sécurité et déploiement de solutions souveraines.",
      skills: [
        "Alpine Linux",
        "RustDesk",
        "PKI/SSL-TLS",
        "VMware ESXi",
        "Sécurité Avancée",
        "Scripting",
        "Docker",
      ],
    },
  },

  techWatch: {
    title: "Veille Technologique - Les Backdoors",
    introduction:
      "Les backdoors représentent une menace majeure dans le paysage informatique actuel. Cette veille technologique explore les différentes formes de backdoors, leurs risques spécifiques dans l'industrie et les stratégies de défense appropriées.",
    definition:
      "Une backdoor (ou porte dérobée) est un moyen d'accès non autorisé à un système informatique, contournant les mécanismes de sécurité normaux. Elle permet à un attaquant de maintenir un accès persistant à un système compromis.",
    types: [
      {
        name: "Backdoors Logiciels",
        description: "Intégrées dans le code source ou installées via des vulnérabilités",
        examples: ["Trojans", "Rootkits", "Spyware"],
      },
      {
        name: "Backdoors Réseau",
        description: "Exploitant les protocoles réseau et services exposés",
        examples: ["SSH non sécurisé", "Services RDP", "Ports ouverts"],
      },
      {
        name: "Backdoors Matérielles",
        description: "Intégrées au niveau du matériel ou du firmware",
        examples: ["Firmware compromis", "Chipsets malveillants"],
      },
    ],
    risks: [
      "Vol de données sensibles et propriétaires",
      "Interruption de service et downtime",
      "Compromission de la chaîne d'approvisionnement",
      "Espionnage industriel et concurrence déloyale",
      "Perte de confiance client et réputation",
    ],
    defenses: [
      "Mises à jour régulières et patches de sécurité",
      "Segmentation réseau et pare-feu avancé",
      "Monitoring et détection d'anomalies",
      "Chiffrement des données en transit et au repos",
      "Audits de sécurité et tests de pénétration",
    ],
  },
};
