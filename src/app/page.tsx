"use client";
import NextMetaLogo from '../assets/nextmeta-logo.webp';
import MGLogoAnimate from '../assets/mg-logo.gif';
import MGLogo from '../assets/mglogo.webp';
import Footer from '../components/ui/footer';
import Header from '../components/ui/header';
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation"
import ExpandableCards from '../components/blocks/expandable-card-grid';
import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type Card = {
  description: string
  title: string
  src: StaticImageData
  ctaText: string
  ctaLink: string
  content: () => ReactNode
  contain?: boolean

}

const cards = [
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
];
function Home() {
  return (
    <BackgroundGradientAnimation className="-z-100 pointer-events-auto">
      <Header className="glass sticky top-0 z-10" />
      <ExpandableCards {...{ cards }} className="pt-20"/>
      <Footer/>
    </BackgroundGradientAnimation>
  );
}
export default Home;
