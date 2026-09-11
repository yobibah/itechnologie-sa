import SolutionHero from '../../../../components/ui/solutions/SolutionHero'
import SolutionIntro from '../../../../components/ui/solutions/SolutionIntro'
import SolutionApproach from '../../../../components/ui/solutions/SolutionApproach'
import SolutionServices from '../../../../components/ui/solutions/SolutionServices'


import { telecomData } from '../../../../data/solutions/telecom'

export default function TelecommunicationsDataPage() {
  const solution = telecomData

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