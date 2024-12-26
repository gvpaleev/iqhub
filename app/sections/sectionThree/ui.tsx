'use client'
import { sendMessage } from '@/app/helpers/tg';
import styles from './sectionTrhee.module.css'

import { motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';

export function SectionThree() {

  const inputRef = useRef(null);


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
            ref={inputRef}
            placeholder="+79315094422"
          />
          <button onClick={() => {
            sendMessage(
              inputRef.current.value
            );
            inputRef.current.value = 'Ожидайте звонка.'
            setTimeout(() => {
              inputRef.current.value = ''

            }, 2000)
          }}>Отправить</button>
        </div>
      </div>
    </section>
  )
}
