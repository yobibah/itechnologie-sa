import Contactbarnner from "../../components/ui/home/contact-barnner";
import ExpertiseBarnner from "../../components/ui/home/expertise-barnner";
import HomeBarnner from "../../components/ui/home/home-barnner";
import PartenairesBanner from "../../components/ui/home/partenaire-barnaire";
import RepresentationBarnner from "../../components/ui/home/representation-barnner";
import SolutionBarner from "../../components/ui/home/solution-barnner";
import UsBarnner from "../../components/ui/home/us-barnner";
export default function Home() {
  return (
    <>
      <HomeBarnner />
      <PartenairesBanner />
      <SolutionBarner />
      <ExpertiseBarnner />
      <UsBarnner />
      <RepresentationBarnner/>
      <Contactbarnner/>
    </>
  );
}
