export const solutionsInformatiques = {
  slug: 'solutions-informatiques',

  navLabel: 'Solutions Informatiques',

  title: 'Solutions Informatiques',

  heroTagline:
    'Des solutions informatiques fiables et adaptées aux enjeux de votre organisation.',

  heroImage:
    // 'https://cdn.magicpatterns.com/patterns/generated-images/4ad2b2d1-2111-4314-a28c-dd88d3a5ac51.jpg',
    '../../images/solutions/solution_HD.png',

  heroImageAlt:
    'Deux ingénieurs iTechnologie intervenant sur une baie de serveurs en salle technique',

  introLabel: 'Solutions informatiques',

  introTitle:
    'Des technologies au service de votre performance',

  introParagraphs: [
    'Des infrastructures et solutions informatiques pensées pour accompagner durablement votre organisation. Serveurs, postes de travail, stockage, virtualisation et logiciels métiers : iTechnologie conçoit, déploie et exploite l’ensemble de la chaîne technique sur laquelle repose votre activité quotidienne.',

    'La plupart des organisations que nous accompagnons font face aux mêmes contraintes : un parc hétérogène accumulé au fil des années, des serveurs sous-dimensionnés, des sauvegardes non vérifiées et une dépendance forte à quelques machines critiques. Ces situations génèrent des interruptions de service, des pertes de données et des coûts de maintenance difficiles à maîtriser.',

    'Nous intervenons par un audit de l’existant, la définition d’une architecture cible réaliste, puis un déploiement planifié pour limiter l’impact sur vos utilisateurs. Nos équipes assurent ensuite la maintenance, la supervision et l’évolution de l’infrastructure, avec des engagements de service clairs et un interlocuteur dédié.',
  ],

  approachParagraph:
    'De l’inventaire du parc existant à la mise en production, nous pilotons chaque phase du projet : dimensionnement, acquisition du matériel, installation, migration des données et transfert de compétences vers vos équipes internes.',

  services: [
    {
      number: '01',

      title: 'Infrastructure & Systèmes',

      description:
        'Nous concevons et déployons les serveurs, systèmes d’exploitation, baies de stockage et postes de travail qui constituent le socle de votre système d’information. Chaque architecture est dimensionnée selon vos charges réelles et vos perspectives de croissance.',

      items: [
        'Serveurs physiques, châssis et baies',
        'Postes de travail et environnements utilisateurs',
        'Systèmes Windows Server et Linux',
        'Stockage SAN, NAS et volumétries évolutives',
      ],

      image:
        //'https://cdn.magicpatterns.com/patterns/generated-images/7e227641-535a-470b-acd1-5434b84f80c2.jpg',
        '../../images/solutions/OIP.webp',
      imageAlt:
        'Baies de serveurs d’entreprise avec câblage structuré',
    },

    {
      number: '02',

      title: 'Datacenter',

      description:
        'De la salle technique au datacenter complet, nous prenons en charge l’infrastructure d’accueil : cheminement, énergie, refroidissement, câblage et organisation des baies, pour une exploitation sûre et documentée.',

      items: [
        'Aménagement de salles techniques et baies',
        'Alimentation secourue et onduleurs',
        'Refroidissement et confinement des allées',
        'Exploitation et documentation d’infrastructure',
      ],

      image:
        //'https://cdn.magicpatterns.com/patterns/generated-images/78a4f63f-1ad7-40b0-9b94-5a08f844775b.jpg',
        '../../images/solutions/datacenter.jpg',

      imageAlt:
        'Allée froide d’un datacenter avec baies de serveurs alignées',
    },

    // {
    //   number: '03',

    //   title: 'Virtualisation',

    //   description:
    //     'La virtualisation permet de consolider vos serveurs, de réduire l’empreinte matérielle et de gagner en souplesse d’exploitation. Nous déployons des clusters robustes et outillons vos équipes pour les administrer sereinement.',

    //   items: [
    //     'Consolidation et migration de serveurs',
    //     'Clusters à haute disponibilité',
    //     'Virtualisation du poste de travail',
    //     'Optimisation des ressources et du licensing',
    //   ],

    //   image:
    //     'https://cdn.magicpatterns.com/patterns/generated-images/c07ce929-3ce5-4ad2-9892-f4598e155543.jpg',

    //   imageAlt:
    //     'Administrateur système gérant des machines virtuelles sur plusieurs écrans',
    // },

    {
      number: '03',

      title: 'Sauvegarde & Continuité',

      description:
        'Une sauvegarde n’a de valeur que si la restauration est testée. Nous mettons en place des politiques de sauvegarde, de réplication et de reprise d’activité alignées sur vos objectifs de perte de données et de temps d’indisponibilité.',

      items: [
        'Politiques de sauvegarde et rétention',
        'Réplication de site à site',
        'Plans de reprise et de continuité d’activité',
        'Tests de restauration réguliers',
      ],

      image:
        //'https://cdn.magicpatterns.com/patterns/generated-images/98f32582-4e57-45a5-9feb-de6cc648a9e0.jpg',
        '../../images/solutions/backup.png',

      imageAlt:
        'Technicien manipulant un disque dans une baie de stockage',
    },

    {
      number: '04',

      title: 'Solutions logicielles',

      description:
        'Nous intégrons et déployons les solutions logicielles professionnelles dont vos métiers ont besoin, en assurant l’interopérabilité avec votre système d’information et la formation des utilisateurs.',

      items: [
        'Intégration d’applications métiers',
        'Messagerie et environnements collaboratifs',
        'Déploiement et gestion des licences',
        'Formation et accompagnement des utilisateurs',
      ],

      image:
        //'https://cdn.magicpatterns.com/patterns/generated-images/1352ccc9-9536-4403-b82b-d8b0653ff7a7.jpg',
        '../../images/solutions/developpement_HD.png',

      imageAlt:
        'Équipe de consultants travaillant sur un déploiement logiciel',
    },

    // {
    //   number: '06',

    //   title: 'Maintenance informatique',

    //   description:
    //     'Contrats de maintenance préventive et corrective, gestion des incidents et support utilisateurs : nous maintenons votre parc en condition opérationnelle avec des délais d’intervention contractualisés.',

    //   items: [
    //     'Maintenance préventive planifiée',
    //     'Interventions correctives sur site',
    //     'Gestion du parc et des garanties',
    //     'Support utilisateurs à distance',
    //   ],

    //   image:
    //     'https://cdn.magicpatterns.com/patterns/generated-images/b1585a19-10be-4371-8ab1-0be5b2bfa500.jpg',

    //   imageAlt:
    //     'Technicien réparant un ordinateur sur un poste d’atelier',
    // },
  ],
}