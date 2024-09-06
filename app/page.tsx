import Image from "next/image";
import { MainSection } from "./sections/mainSection/ui";
import classNames from "classnames";
import styles from './page.module.css'
import { SectionTwo } from "./sections/sectionTwo/ui";
import { SectionThree } from "./sections/sectionThree/ui";
import { SectionFour } from "./sections/sectorFour/ui";
import { SectionFive } from "./sections/sectorFive/ui";
import { SectionSix } from "./sections/sectionSix/ui";
import { SectionSeven } from "./sections/sectorSeven/ui";
import { SectionEight } from "./sections/sectorEigh/ui";
export default function Home() {

  return (<>

    {/* <MainSection /> */}
    {/* <SectionTwo /> */}
    {/* <SectionThree /> */}
    {/* <SectionFour /> */}
    {/* <SectionFive /> */}
    <SectionSix />
    {/* <SectionSeven /> */}
    {/* <SectionEight /> */}
  </>);
}
