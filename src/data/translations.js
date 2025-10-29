// src/data/translations.js
export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Mohamed Lachgar",
      title: "Étudiant en Génie Logiciel & Développeur Full-Stack",
      subtitle:
        "Passionné par la création de solutions robustes, sécurisées et déployées sur le cloud.",
      cvButton: "Télécharger mon CV",
    },
    about: {
      title: "À propos de moi",
      bio: [
        "Jeune étudiant de 22 ans en 5ème année Génie Logiciel à l'EMSI, passionné par le développement full-stack (Java / Spring Boot, React) et l'intégration cloud (Docker, AWS, Keycloak).",
        "Je suis actuellement à la recherche d'un stage PFE (Projet de Fin d'Études) à partir de février 2026 pour relever des défis techniques et contribuer à des projets innovants.",
      ],
      interestsTitle: "Centres d'intérêt",
      interests: [
        { name: "Surf", icon: "Waves" },
        { name: "Équitation", icon: "Award" },
        { name: "Gaming", icon: "Gamepad2" },
      ],
    },
    skills: {
      title: "Compétences Techniques",
      categories: [
        {
          title: "Langages",
          items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
        },
        {
          title: "Frameworks & Outils",
          items: [
            "Spring Boot",
            "Jakarta EE",
            "React.js",
            "Angular",
            "Spring Security",
            "Spring Data JPA",
            "JWT",
            "Mantine UI",
            "Flask",
            "Streamlit",
          ],
        },
        {
          title: "DevOps & Cloud",
          items: [
            "Docker",
            "Keycloak",
            "AWS",
            "OCI",
            "Kubernetes",
            "Terraform",
            "Vault",
            "CI/CD",
            "Git",
          ],
        },
        {
          title: "Bases de données",
          items: ["PostgreSQL", "Oracle", "MongoDB", "Redis"],
        },
        {
          title: "Méthodologies",
          items: ["Agile (Scrum)", "UML", "Merise"],
        },
      ],
    },
    experience: {
      title: "Expériences Professionnelles",
      jobs: [
        {
          role: "Développeur Full-Stack (Stage)",
          company: "Omnishift",
          period: "Juillet 2025 – Septembre 2025",
          location: "Casablanca",
          tasks: [
            "Développement d'une plateforme web SAV (Service Après-Vente) intelligente et sécurisée.",
            "Conception et développement d'API REST (Spring Boot) pour la gestion des tickets et des workflows.",
            "Mise en place de l'authentification et autorisation (RBAC) avec Keycloak.",
            "Amélioration de la structure backend en adoptant une architecture 'monolithe modulaire' (Spring Modulith).",
          ],
          stack: [
            "Spring Boot",
            "React",
            "Keycloak",
            "Docker",
            "AWS",
            "PostgreSQL",
            "Mantine UI",
          ],
        },
        {
          role: "Développeur Python (Stage d'initiation)",
          company: "Sothema",
          period: "Juillet 2024",
          location: "Casablanca",
          tasks: [
            "Développement d'une application d'analyse du Bulletin Officiel marocain.",
            "Extraction et traitement automatique de PDF avec PDFMiner.",
            "Intégration d'un LLM (Mistral AI) pour l'analyse et les réponses automatisées.",
          ],
          stack: ["Python", "Flask", "Streamlit", "Mistral AI", "PDFMiner"],
        },
      ],
    },
    projects: {
      title: "Projets Académiques et Personnels",
      items: [
        {
          title: "Plateforme SAV (Stage Omnishift)",
          description:
            "Plateforme web de support client pour optimiser la gestion des tickets techniques, basée sur une architecture modulaire et sécurisée avec Keycloak.",
          stack: [
            "Spring Boot",
            "React",
            "TypeScript",
            "Keycloak",
            "Docker",
            "PostgreSQL",
          ],
          link: "https://github.com/lachgar03/omnishift-sav",
        },
        {
          title: "Plateforme de Sondages Gamifiée",
          description:
            "Application web de sondages avec gamification (XP, leaderboard, boutique) et détection de fraude. Sécurisée avec JWT (RBAC).",
          stack: ["Spring Boot", "React.js", "PostgreSQL", "JWT"],
          link: "https://github.com/lachgar03/gamified_survey",
        },
        {
          title: "Architecture CRM Microservices",
          description:
            "Conception d'une architecture CRM microservices avec support multi-tenant, gestion des métadonnées et sécurité avancée (RBAC/ABAC).",
          stack: ["Spring Boot", "React", "Docker", "Kubernetes", "PostgreSQL"],
          link: "https://github.com/lachgar03/CRM",
        },
      ],
    },
    education: {
      title: "Formation et Certifications",
      educationTitle: "Formation",
      items: [
        {
          degree: "Cycle d'Ingénieur, Génie Informatique et Réseaux (MIAGE)",
          institution: "EMSI - Ecole Marocaine des Sciences de l'Ingénieur",
          period: "2021 – Présent",
        },
        {
          degree: "Baccalauréat en Sciences Physiques (Mention Très Bien)",
          institution: "GS La Seconde Maison, Casablanca",
          period: "2021",
        },
      ],
      certsTitle: "Certifications",
      certs: [
        {
          name: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
          issuer: "Oracle University",
          date: "Octobre 2025 (Valide jusqu'en Octobre 2027)",
          icon: "Award",
        },
        {
          name: "Oracle Certified Professional: Java SE 21 Developer",
          issuer: "Oracle",
          date: "(En cours)",
          icon: "FileCode",
        },
      ],
    },
    contact: {
      title: "Contact",
      description:
        "Je suis ouvert aux opportunités et j'aimerais discuter avec vous. N'hésitez pas à me contacter par email ou via mes réseaux sociaux.",
      email: "mohammedlachgar06@gmail.com",
      phone: "0657177568",
      location: "Casablanca, Maroc",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer le message",
      },
      socials: "Retrouvez-moi sur",
    },
    footer: {
      copyright: "© 2025 Mohamed Lachgar. Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      name: "Mohamed Lachgar",
      title: "Software Engineering Student & Full-Stack Developer",
      subtitle:
        "Passionate about building robust, secure, and cloud-deployed full-stack solutions.",
      cvButton: "Download CV",
    },
    about: {
      title: "About Me",
      bio: [
        "A 22-year-old 5th-year Software Engineering student at EMSI, passionate about full-stack development (Java / Spring Boot, React) and cloud integration (Docker, AWS, Keycloak).",
        "I am currently looking for an end-of-studies internship (PFE) starting February 2026 to tackle technical challenges and contribute to innovative projects.",
      ],
      interestsTitle: "Interests",
      interests: [
        { name: "Surfing", icon: "Waves" },
        { name: "Horse Riding", icon: "Award" },
        { name: "Gaming", icon: "Gamepad2" },
      ],
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          title: "Languages",
          items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
        },
        {
          title: "Frameworks & Tools",
          items: [
            "Spring Boot",
            "Jakarta EE",
            "React.js",
            "Angular",
            "Spring Security",
            "Spring Data JPA",
            "JWT",
            "Mantine UI",
            "Flask",
            "Streamlit",
          ],
        },
        {
          title: "DevOps & Cloud",
          items: [
            "Docker",
            "Keycloak",
            "AWS",
            "OCI",
            "Kubernetes",
            "Terraform",
            "Vault",
            "CI/CD",
            "Git",
          ],
        },
        {
          title: "Databases",
          items: ["PostgreSQL", "Oracle", "MongoDB", "Redis"],
        },
        {
          title: "Methodologies",
          items: ["Agile (Scrum)", "UML", "Merise"],
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          role: "Full-Stack Developer (Intern)",
          company: "Omnishift",
          period: "July 2025 – September 2025",
          location: "Casablanca",
          tasks: [
            "Development of an intelligent and secure customer support (SAV) web platform.",
            "Design and development of REST APIs (Spring Boot) for ticket and workflow management.",
            "Implementation of authentication and authorization (RBAC) with Keycloak.",
            "Improvement of the backend structure by adopting a 'modular monolith' architecture (Spring Modulith).",
          ],
          stack: [
            "Spring Boot",
            "React",
            "Keycloak",
            "Docker",
            "AWS",
            "PostgreSQL",
            "Mantine UI",
          ],
        },
        {
          role: "Python Developer (Intern)",
          company: "Sothema",
          period: "July 2024",
          location: "Casablanca",
          tasks: [
            "Development of an analysis application for the Moroccan 'Official Bulletin'.",
            "Automatic PDF extraction and processing with PDFMiner.",
            "Integration of an LLM (Mistral AI) for analysis and automated responses.",
          ],
          stack: ["Python", "Flask", "Streamlit", "Mistral AI", "PDFMiner"],
        },
      ],
    },
    projects: {
      title: "Academic & Personal Projects",
      items: [
        {
          title: "Customer Support Platform (Omnishift Intern.)",
          description:
            "Web platform for customer support to optimize technical ticket management, based on a modular and secure architecture with Keycloak.",
          stack: [
            "Spring Boot",
            "React",
            "TypeScript",
            "Keycloak",
            "Docker",
            "PostgreSQL",
          ],
          link: "https://github.com/lachgar03/omnishift-sav",
        },
        {
          title: "Gamified Survey Platform",
          description:
            "Web survey application with gamification (XP, leaderboard, shop) and fraud detection. Secured with JWT (RBAC).",
          stack: ["Spring Boot", "React.js", "PostgreSQL", "JWT"],
          link: "https://github.com/lachgar03/gamified_survey",
        },
        {
          title: "CRM Microservices Architecture",
          description:
            "Design of a CRM microservices architecture with multi-tenant support, metadata management, and advanced security (RBAC/ABAC).",
          stack: ["Spring Boot", "React", "Docker", "Kubernetes", "PostgreSQL"],
          link: "https://github.com/lachgar03/CRM",
        },
      ],
    },
    education: {
      title: "Education and Certifications",
      educationTitle: "Education",
      items: [
        {
          degree: "Engineering Degree, Computer Science and Networks (MIAGE)",
          institution: "EMSI - Moroccan School of Engineering Sciences",
          period: "2021 – Present",
        },
        {
          degree: "Baccalaureate in Physical Sciences (High Honors)",
          institution: "GS La Seconde Maison, Casablanca",
          period: "2021",
        },
      ],
      certsTitle: "Certifications",
      certs: [
        {
          name: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
          issuer: "Oracle University",
          date: "October 2025 (Valid until October 2027)",
          icon: "Award",
        },
        {
          name: "Oracle Certified Professional: Java SE 21 Developer",
          issuer: "Oracle",
          date: "(In progress)",
          icon: "FileCode",
        },
      ],
    },
    contact: {
      title: "Contact",
      description:
        "I am open to opportunities and would love to chat. Feel free to contact me via email or my social networks.",
      email: "mohammedlachgar06@gmail.com",
      phone: "0657177568",
      location: "Casablanca, Morocco",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
      socials: "Find me on",
    },
    footer: {
      copyright: "© 2025 Mohamed Lachgar. All rights reserved.",
    },
  },
};
