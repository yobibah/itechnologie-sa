import ExpertiseBarnner from "../../components/ui/home/expertise-barnner";
import HomeBarnner from "../../components/ui/home/home-barnner";
import PartenairesBanner from "../../components/ui/home/partenaire-barnaire";
import SolutionBarner from "../../components/ui/home/solution-barnner";
import UsBarnner from "../../components/ui/home/us-barnner";
export default function Home() {
  return (
    <>
      <HomeBarnner />
      <PartenairesBanner/>
      <SolutionBarner/>
      {/* <UsBarnner/> */}
      <ExpertiseBarnner/>
    </>
  );
}
