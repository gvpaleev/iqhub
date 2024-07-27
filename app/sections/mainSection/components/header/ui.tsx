import classNames from "classnames";
import styles from './Header.module.css'
import Image from "next/image";
import { Menu } from "../manu/ui";
import { IconsContact } from "../iconsContact/ui";
export function Header() {
  return (
    <header className={classNames(styles.item)}>
      <Image src='/iqHub.svg' alt="logo" width={92} height={44} className={classNames(styles.logo)} />
      <Menu />
      <IconsContact />

    </header>
  )
}
