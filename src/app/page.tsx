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
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          NextMeta is blah blah
        </p>
      );
    },
  },

  {
    description: "MetaGame",
    title: "Guilds",
    src: MGLogo,
    contain: true,
    ctaText: "Visit",
    ctaLink: "https://enter.metagame.wtf",
    content: () => {
      return (
        <p>
          MG is the best
        </p>
      );
    },
  },
  {
    description: "MetaGame playbooks and MetaLibrary",
    title: "dAcademy",
    src: MGLogoAnimate,
    contain: true,
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          dAcademy is for playbooks
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
