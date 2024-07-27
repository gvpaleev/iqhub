import classNames from "classnames";
import styles from './mainSection.module.css'
import { Header } from "./components/header/ui";
import { Menu } from "./components/manu/ui";
export function MainSection() {
  return (
    <section className={classNames(styles.item)}>
      <Header />
    </section>
  )
}
