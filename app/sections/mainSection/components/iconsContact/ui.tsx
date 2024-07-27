import classNames from "classnames";

import styles from './icons.module.css'
import Image from "next/image";
export function IconsContact() {
  return (
    <div className={classNames(styles.item)}>

      <Image src='/instagram.svg' alt="logo" width={49} height={49} className={classNames(styles.logo)} />
      <Image src='/telegram.svg' alt="logo" width={49} height={49} className={classNames(styles.logo)} />
      <Image src='/vk.svg' alt="logo" width={49} height={49} className={classNames(styles.logo)} />
      <Image src='/whatsapp.svg' alt="logo" width={49} height={49} className={classNames(styles.logo)} />
    </div>
  )
}
