export const reseauCybersecurite = {
  slug: 'reseau-cybersecurite',
  navLabel: 'Réseau & Cybersécurité',
  title: 'Réseau & Cybersécurité',
  heroTagline:
    'Construire une infrastructure connectée, performante et sécurisée.',
  heroImage:
    //'https://cdn.magicpatterns.com/patterns/generated-images/dd47a8b7-708f-4e7a-9a1a-83eca56b80ac.jpg',
    '../../images/solutions/Cybersecurite.webp',
  heroImageAlt:
    'Centre d’opérations de sécurité avec analystes devant un mur d’écrans de supervision',
  introLabel: 'Réseau & cybersécurité',
  introTitle: 'Un réseau maîtrisé, une organisation protégée',
  introParagraphs: [
    'Le réseau est aujourd’hui le premier service critique d’une organisation : sans lui, ni applications, ni téléphonie, ni accès aux données. iTechnologie conçoit des infrastructures LAN, WAN et Wi-Fi performantes, puis les sécurise de la périphérie jusqu’au poste utilisateur.',
    'Les incidents que nous traitons proviennent rarement d’attaques sophistiquées : segmentation absente, règles de filtrage accumulées sans revue, postes non mis à jour, absence de journalisation. Autant de failles qui exposent vos données et paralysent l’activité en quelques heures.',
    'Notre démarche combine audit technique, remise à niveau de l’architecture et mise en place de dispositifs de détection. Nous formalisons les règles, documentons les configurations et assurons une supervision continue afin que vos équipes disposent d’une vision claire de leur exposition.',
  ],
  approachParagraph:
    'Audit de l’architecture existante, segmentation, durcissement des équipements, déploiement des dispositifs de protection puis supervision : chaque étape est documentée et validée avec vos responsables techniques.',
  services: [
    {
      number: '01',
      title: 'Réseaux informatiques',
      description:
        'Conception et déploiement de réseaux structurés, du câblage aux équipements actifs, avec une architecture lisible et évolutive pour vos sites administratifs, industriels ou commerciaux.',
      items: [
        'Câblage cuivre et fibre',
        'Commutateurs et routeurs d’entreprise',
        'Segmentation en VLAN',
        'Documentation et plans de baie',
      ],
      image:
      '../../images/solutions/reseau.jpg',
      imageAlt: 'Commutateurs réseau avec câblage ethernet dense en baie',
    },
    {
      number: '02',
      title: 'Firewall & sécurité périmétrique',
      description:
        'Déploiement et administration de pare-feu de nouvelle génération : filtrage applicatif, inspection du trafic chiffré, publication sécurisée de services et revue régulière des règles.',
      items: [
        'Pare-feu nouvelle génération',
        'Filtrage web et applicatif',
        'Publication sécurisée et reverse proxy',
        'Revue périodique des règles',
      ],
      image:
       '../../images/solutions/firewall.webp',
      imageAlt: 'Équipements de sécurité réseau installés en baie technique',
    },
    {
      number: '03',
      title: 'Sécurité des endpoints',
      description:
        'Protection des postes, serveurs et terminaux mobiles avec des solutions de détection comportementale, un durcissement des configurations et une gestion centralisée des correctifs.',
      items: [
        'Protection EDR et antivirus managé',
        'Chiffrement des disques',
        'Gestion des correctifs',
        'Contrôle des périphériques amovibles',
      ],
      image:
        '../../images/solutions/endpoint.jpg',
      imageAlt: 'Collaborateur travaillant sur un poste protégé en environnement de bureau',
    },
    {
      number: '04',
      title: 'Audit de sécurité',
      description:
        'Évaluation de votre niveau d’exposition : cartographie des actifs, tests d’intrusion, revue de configuration et plan de remédiation priorisé selon le risque et l’effort.',
      items: [
        'Cartographie et inventaire des actifs',
        'Tests d’intrusion internes et externes',
        'Revue de configuration et de comptes',
        'Plan de remédiation priorisé',
      ],
      image:
        '../../images/solutions/audit.jpg',
      imageAlt: 'Analyste de sécurité examinant des tableaux de bord de menaces',
    },
    {
      number: '05',
      title: 'Protection des données',
      description:
        'Classification, chiffrement et contrôle des accès aux données sensibles, associés à des sauvegardes isolées permettant de résister à un incident majeur ou à une attaque par rançongiciel.',
      items: [
        'Classification des données sensibles',
        'Gestion des droits et des accès',
        'Sauvegardes isolées et immuables',
        'Sensibilisation des utilisateurs',
      ],
      image:
        '../../images/solutions/protection.png',
      imageAlt: 'Revue d’une politique de sécurité documentée sur un bureau',
    },
  ],
}