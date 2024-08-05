'use client'
import classNames from "classnames";
import { motion } from 'framer-motion';

import styles from './mainSection.module.css'
import { Header } from "./components/header/ui";
import { Menu } from "./components/manu/ui";
import { Stamp } from "./components/Stamp/ui";
import Image from "next/image";
export function MainSection() {
  return (
    <section className={classNames(styles.item)}>
      <motion.img
        src="/iqHub.svg"
        alt="Sample Image"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ borderRadius: '8px' }}
      />

      <nav>
        <motion.a href="#home">Программы</motion.a>
        <motion.a href="#about">Стоимость</motion.a>
        <motion.a href="#services">О нас</motion.a>
        <motion.a href="#contact">Контакты</motion.a>
      </nav>
      <motion.div>
        <motion.img
          src="/instagram.svg"
          alt="Sample Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '8px' }}
        />
        <motion.img
          src="/telegram.svg"
          alt="Sample Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '8px' }}
        />
        <motion.img
          src="/vk.svg"
          alt="Sample Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '8px' }}
        />
        <motion.img
          src="/whatsapp.svg"
          alt="Sample Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '8px' }}
        /></motion.div>

      <div>
        <motion.img
          src="/1/brain.svg"
          alt="Sample Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '8px' }}
        />
        <h1>В <span>игре</span> учимся</h1>
        <motion.img
          src="/1/neuron.svg"
          alt="Sample Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div>
        <motion.img
          src="/1/neuronsLeftOne.svg"
          alt="Sample Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '8px' }}
        />
        <h1>любить <span>знания</span></h1>
        <motion.img

          src="/1/neuronsRigthOne.svg"

          alt="Sample Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ borderRadius: '8px' }}
        />

      </div>

      <h2 >Онлайн занятия для дошкольников</h2>
      <button>записаться</button>
      {/* <Header /> */}
      {/* {/* < . ц> */}
      {/**/}
      {/* <Stamp /> */}
      {/* <h2 >Онлайн занятия для дошкольников</h2> */}
      {/* <Image src='/neuronsLeft.svg' alt="neuronsLeft" width={1250} height={950} className={classNames(styles.neuronsLeft, styles.logsFont)} /> */}
      {/* <Image src='/neuronsRight.svg' alt="neuronsLeft" width={1250} height={950} className={classNames(styles.neuronsRight, styles.logsFont)} /> */}
      {/* <button>записаться</button> */}
    </section >
  )
}
