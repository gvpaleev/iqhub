'use client'
import classNames from "classnames";
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import styles from './mainSection.module.css'
import { useEffect, useState } from "react";
import { Stamp } from "./components/stamp";

export function MainSection() {
  const [showInput, setShowButton] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let isMobil = +(window.innerWidth) < 768;


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
          <motion.a href="#home">Программы</motion.a>
          <motion.a href="#about">Стоимость</motion.a>
          <motion.a href="#services">О нас</motion.a>
          <motion.a href="#contact">Контакты</motion.a>
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

            <motion.img
              src="/instagram.svg"
              alt="Sample Image"
            />
            <motion.img
              src="/telegram.svg"
              alt="Sample Image"
            />
            <motion.img
              src="/vk.svg"
              alt="Sample Image"
            />
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
        className={classNames(styles.iconIqHub)}
        src="/iqHub.svg"
        alt="Sample Image"
      />
      <nav className={classNames(styles.menu)}
      >
        <motion.a href="#home">Программы</motion.a>
        <motion.a href="#about">Стоимость</motion.a>
        <motion.a href="#services">О нас</motion.a>
        <motion.a href="#contact">Контакты</motion.a>
      </nav>
      <div className={classNames(styles.hrefIcons)}
      >
        <motion.img
          src="/instagram.svg"
          alt="Sample Image"
        />
        <motion.img
          src="/telegram.svg"
          alt="Sample Image"
        />
        <motion.img
          src="/vk.svg"
          alt="Sample Image"
        />
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
        onMouseEnter={() => { if (!isMobil) setShowButton(false) }} // Показываем поле ввода при наведении
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
            <input type="text"
              placeholder={(!isMobil ? "+79211234567 или t.me/IQHub" : '+79211234567')}
            /> <button>записаться</button>
          </motion.div>



        )

        }
      </motion.div>
      <Stamp className={styles.stamp} controlH2={controlH2} />


    </section >
  )
}
