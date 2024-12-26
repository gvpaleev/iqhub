'use client'
import classNames from "classnames";
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import styles from './mainSection.module.css'
import { useEffect, useRef, useState } from "react";
import { Stamp } from "./components/stamp";
import { sendMessage } from "@/app/helpers/tg";

export function MainSection() {
  const [showInput, setShowButton] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // let isMobil = +(window.innerWidth) < 768;
  const inputRef = useRef(null);

  const controlH2 = useAnimation();

  return (
    <section className={classNames(styles.item)}>

      <AnimatePresence>
        {isMenuOpen && (<motion.div className={styles.menuMobil}
          initial={{ opacity: 0, x: 300 }} // Начальная позиция
          animate={{ opacity: 1, x: 0 }} // Появление
          exit={{ opacity: 0, x: 300 }} // Исчезновение
          transition={{ duration: 0.5 }}
        >
          <motion.a href="#section4">Программы</motion.a>
          <motion.a href="#section7">Стоимость</motion.a>
          <motion.a href="#section2">О нас</motion.a>
          <motion.a href="#section8">Вопросы</motion.a>
          <motion.img
            className={classNames(styles.neuronsMenuMobil)}
            src="/1/neuronsMenu.svg"
            alt="Sample Image"

          />
          <motion.img
            className={classNames(styles.iconIqHubWhite)}
            src="/iqHubWhith.svg"
            alt="Sample Image"
          />
          <motion.img
            className={classNames(styles.closeMenu)}
            src="/1/closeIcon.svg"
            alt="Sample Image"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div>

            <a href="https://www.instagram.com/mar.yanap?igsh=MTl1dTluNWh0cmg0cw%3D%3D&utm_source=qr">
              <motion.img
                src="/instagram.svg"
                alt="Sample Image"
              />
            </a>
            <a href="https://t.me/Maranap502">
              <motion.img
                src="/telegram.svg"
                alt="Sample Image"
              /></a>
            <a href="https://vk.com/iqhubonline">

              <motion.img
                src="/vk.svg"
                alt="Sample Image"
              />
            </a>

            <motion.img
              src="/whatsapp.svg"
              alt="Sample Image"
            />
          </div>
        </motion.div>
        )}</AnimatePresence>
      <motion.img
        src="/1/iconMenu.svg"
        alt="Sample Image"
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={classNames(styles.iconMenu)}
      />
      <motion.img
        src="/1/neuronsLeftMobil.svg"
        alt="Sample Image"
        className={classNames(styles.neuronsLeftMobil)}
      />     <motion.img
        src="/1/neuronsLeft.svg"
        alt="Sample Image"
        className={classNames(styles.neuronsLeft)}
      />
      <motion.img
        className={classNames(styles.neuronsRigth)}

        src="/1/neuronsRigth.svg"
        alt="Sample Image"
      />
      <motion.img
        className={classNames(styles.neuronsRigthMobil)}

        src="/1/neuronsRigthMobil.svg"
        alt="Sample Image"
      />
      <motion.img
        className={classNames(styles.iconIqHub)}
        src="/iqHub.svg"
        alt="Sample Image"
      />
      <nav className={classNames(styles.menu)}
      >
        <motion.a href="#section4">Программы</motion.a>
        <motion.a href="#section7">Стоимость</motion.a>
        <motion.a href="#section2">О нас</motion.a>
        <motion.a href="#section8">Вопросы</motion.a>
      </nav>
      <div className={classNames(styles.hrefIcons)}
      >
        <a href="https://www.instagram.com/mar.yanap?igsh=MTl1dTluNWh0cmg0cw%3D%3D&utm_source=qr">
          <motion.img
            src="/instagram.svg"
            alt="Sample Image1"
          />
        </a>
        <a href="https://t.me/Maranap502">
          <motion.img
            src="/telegram.svg"
            alt="Sample Image"
          /></a>
        <a href="https://vk.com/iqhubonline">

          <motion.img
            src="/vk.svg"
            alt="Sample Image"
          />
        </a>
        <motion.img
          src="/whatsapp.svg"
          alt="Sample Image"
        />
      </div>

      <motion.h2
        className={styles.h2Line}
        initial={{ opacity: 0 }}
        animate={controlH2}
      >Онлайн занятия для дошкольников</motion.h2>



      <motion.div
        className={styles.button}
      // onMouseEnter={() => { if (!isMobil) setShowButton(false) }} // Показываем поле ввода при наведении
      // onMouseLeave={() => setShowButton(true)} // Скрываем поле ввода при уходе курсора

      >
        {showInput ? (<motion.button
          className={styles.buttonForHaver}
          initial={{ opacity: 0, scale: 1 }}  // Начальные стили для исчезновения
          animate={{ opacity: 1, scale: 0.8 }} // Анимация исчезновения
          exit={{ opacity: 1, scale: 1 }}    // Анимация появления
          transition={{ duration: 0.5 }}
          onClick={() => { setShowButton(false) }}// Длительность анимации
        >
          записаться
        </motion.button>


        ) : (
          <motion.div
            className={styles.formForSend}

            initial={{ opacity: 0, scale: 0.8 }} // Начальные стили для появления
            animate={{ opacity: 1, scale: 1 }}  // Анимация появления
            exit={{ opacity: 0, scale: 0.8 }}   // Анимация исчезновения
            transition={{ duration: 0.5 }}      //
          >
            <input ref={inputRef} type="text"
              placeholder={"+79315094422"}
            /> <button onClick={() => {
              sendMessage(inputRef.current.value);
              inputRef.current.value = 'Ожидайте звонка.'
              setTimeout(() => {
                inputRef.current.value = ''

                setShowButton(true)
              }, 2000)
            }} >записаться</button>
          </motion.div>



        )

        }
      </motion.div>
      <Stamp className={styles.stamp} controlH2={controlH2} />


    </section >
  )
}
