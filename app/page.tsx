import Image from "next/image";
import { MainSection } from "./sections/mainSection/ui";
import classNames from "classnames";
import styles from './page.module.css'
export default function Home() {
  return (<>

    <MainSection />
    <MainSection />
  </>);
}
