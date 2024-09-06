'use client'
import styles from './sectionTrhee.module.css'

import { motion, useAnimation } from 'framer-motion';

export function SectionThree() {


  return (
    <section className={styles.item}>
      <div className={styles.container}>
        <motion.img
          className={styles.neuronsLeft}
          src="/3/neuronsLeft.svg"
          alt="Sample Image"
        />
        <motion.img
          className={styles.neuronsRigth}

          src="/3/neuronsRigth.svg"
          alt="Sample Image"
        />

        <h1

          className={styles.word1}

        >Дарим </h1>
        <span

          className={styles.word2}
        >первый урок</span>
        <h1
          className={styles.word3}
        >с преподавателем</h1><span
          className={styles.word4}
        >бесплатно</span>
        <h4
          className={styles.word5}
        >Мы ответим на все вопросы и подберём подходящий под ваш запрос формат занятий</h4>
        <p
          className={styles.word6}>Оставьте телефон, ссылку на соц. сети или почту</p>
        <div
          className={styles.button}
        >
          <input
            placeholder="+79211234567 или t.me/IQHub"
          />
          <button>Отправить</button>
        </div>
      </div>
    </section>
  )
}
