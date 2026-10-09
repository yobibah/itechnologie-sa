import pp from "../../public/images/events/pp.jpg";
import cybsec from "../../public/images/events/cybsecur.jpg";
import p1 from "../../public/images/events/p1.jpg";
import p2 from "../../public/images/events/p2.jpg";
import p4 from "../../public/images/events/p4.jpg";
import group from "../../public/images/events/group.jpg";
import res from "../../public/images/events/reseaux.jpg";

const events = [
  {
    name: "Matinale Itechnologie 2026",
    desc: `Mardi 6 octobre, 60 responsables des systèmes d'information et de la sécurité, venus de 40 organisations, ont consacré leur matinée à une question qui ne se pose plus en théorie : où tournent nos données critiques, qui y accède, et en combien de temps peut-on les remettre en service après une attaque ?

Merci à chacun d'entre vous pour la qualité des échanges et pour les questions posées, souvent les plus difficiles.

Merci à nos partenaires Codis : Computer Distribution et IBM Operated by MIBB. Cette matinée n'aurait pas eu la même valeur sans leurs équipes et leurs démonstrations.

\n

Trois choses que nous retenons, en trois verbes :

→ Voir : savoir en temps réel ce qui se passe dans son système d'information et qui accède aux données.

→ Protéger : disposer d'outils capables de bloquer une attaque, en amont comme pendant.

→ Restaurer : redémarrer avec des données intactes, parce qu'une sauvegarde ne vaut que si sa restauration a été testée.

Les supports ont été adressés aux participants. Nous rappelons en ce moment toutes les personnes ayant formulé des demandes d'approfondissement.`,
    image: p1,
    detailImg : [p4,p2,pp,group] ,
    date: 'Mardi 06 Octobre 2026',
    lieux: 'Azalaï Hôtel Ouagadougou'
  },
  // {
  //   name: "FORMATION EN CYBERSÉCURITÉ",
  //   desc: "Une formation dédiée aux bonnes pratiques de sécurité informatique, à la protection des données et à la sécurisation des infrastructures.",
  //   image: cybsec,
    //detailImg : [] 
  // },
  // {
  //   name: "FORMATION EN RÉSEAUX",
  //   desc: "Découvrez nos formations pratiques en administration et gestion des réseaux informatiques.",
  //   image: res,
  //  detailImg : [] 
  // },
  //    {
  //   name: "FORMATION EN RÉSEAUX",
  //   desc: "Découvrez nos formations pratiques en administration et gestion des réseaux informatiques.",
  //   image: res,
  //     detailImg : [] 
  // },
];
export default events;
