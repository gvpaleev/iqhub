import classNames from "classnames";
import styles from './mainSection.module.css'
import { Header } from "./components/header/ui";
import { Menu } from "./components/manu/ui";
import { Stamp } from "./components/Stamp/ui";
import Image from "next/image";
export function MainSection() {
  return (
    <section className={classNames(styles.item)}>
      <Header />
      {/* < . ц> */}

      <Stamp />
      <h2 >Онлайн занятия для дошкольников</h2>
      {/* Фон нейронов  */}
      {/* <Image src='/neuronsLeft.svg' alt="neuronsLeft" width={1250} height={950} className={classNames(styles.neuronsLeft, styles.logsFont)} /> */}
      {/* <Image src='/neuronsRight.svg' alt="neuronsLeft" width={1250} height={950} className={classNames(styles.neuronsRight, styles.logsFont)} /> */}
      <button>записаться</button>
    </section>
  )
}
