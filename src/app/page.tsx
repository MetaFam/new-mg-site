"use client";
import NextMetaLogo from '../assets/nextmeta-logo.webp';
import MGLogoAnimate from '../assets/mg-logo.gif';
import MGLogo from '../assets/mglogo.webp';
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation"
import ExpandableCards from '../components/blocks/expandable-card-grid';


const cards = [
  {
    description: "NextMeta media content of MG",
    title: "NextMeta",
    src: NextMetaLogo,
    ctaText: "Listen",
    ctaLink: "https://pods.media/nextmeta",
    content: () => {
      return (
        <p>
          NextMeta is media outlet for MG... Collect on pods.media..
        </p>
      );
    },
  },

  {
    description: "MetaGame",
    title: "Guilds",
    src: MGLogo,
    contain: true,
    ctaText: "Join Frens",
    ctaLink: "https://metagame.wtf",
    content: () => {
      return (
        <p>
          MG is the best ...
        </p>
      );
    },
  },
  {
    description: "MetaGame playbooks and MetaLibrary",
    title: "dAcademy",
    src: MGLogoAnimate,
    contain: true,
    ctaText: "Learn",
    ctaLink: "https://metagame.wtf/academy",
    content: () => {
      return (
        <p>
          dAcademy is for playbooks ...
        </p>
      );
    },
  },
];
export function Home() {
  return (
    <BackgroundGradientAnimation className="-z-100">
      <ExpandableCards {...{ cards }}/>
    </BackgroundGradientAnimation>
  );
}
export default Home;
