import SolutionHero from '../../../../components/ui/solutions/SolutionHero'
import SolutionIntro from '../../../../components/ui/solutions/SolutionIntro'
import SolutionApproach from '../../../../components/ui/solutions/SolutionApproach'
import SolutionServices from '../../../../components/ui/solutions/SolutionServices'


import { energieBatiment } from '../../../../data/solutions/energie'

export default function EnergieTechnologieBatimentPage() {
  const solution = energieBatiment

  return (
    <main>
      <SolutionHero
        title={solution.title}
        tagline={solution.heroTagline}
        image={solution.heroImage}
        imageAlt={solution.heroImageAlt}
      />

      <SolutionIntro
        label={solution.introLabel}
        title={solution.introTitle}
        paragraphs={solution.introParagraphs}
      />

      <SolutionApproach
        paragraph={solution.approachParagraph}
      />

      <SolutionServices
        services={solution.services}
      />
    </main>
  )
}