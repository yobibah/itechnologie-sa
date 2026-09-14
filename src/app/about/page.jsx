import PageBanner from "../../../components/page-barnner";
import Us from "../../../components/ui/about/us";
import Vison from "../../../components/ui/about/vision";
import ExpertiseBarnner from "../../../components/ui/home/expertise-barnner";
import serv from "../../../public/serv.png";
export default function about() {
  return (
    <>
     {/* <PageBanner titles={'Présentation ITECHNOLOGIE SA'} images={serv}  route={'about'} currentRoute={'about'}/> */}
      <Us />
      <Vison />
      <ExpertiseBarnner/>
    </>
  );
}
