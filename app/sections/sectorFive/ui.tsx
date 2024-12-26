'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './sectionFive.module.css'

import { motion, useAnimation } from 'framer-motion';
import { sendMessage } from '@/app/helpers/tg';


export function SectionFive() {
  const ref1 = useRef<HTMLImageElement>(null);
  const ref2 = useRef<HTMLImageElement>(null);
  const ref3 = useRef<HTMLImageElement>(null);
  const ref4 = useRef<HTMLImageElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const controlBrain1 = useAnimation();
  const controlBrain2 = useAnimation();
  const controlBrain3 = useAnimation();
  const controlBrain4 = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Запуск анимаций, когда элемент виден
          controlBrain1.start({ x: [0, 50], transition: { duration: 2 } });
          controlBrain2.start({ y: [0, -30], transition: { duration: 2 } });
          controlBrain3.start({ x: [0, -30], transition: { duration: 2 } });
          controlBrain4.start({ y: [0, -20], transition: { duration: 2 } });
        }
      },
      {
        threshold: 0.5 // Измените порог, если необходимо
      }
    );

    const elements = [ref1.current, ref2.current, ref3.current, ref4.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [controlBrain1, controlBrain2, controlBrain3, controlBrain4]);

  return (
    <section className={styles.item}>
      <div>
        <motion.img
          className={styles.brain1}

          ref={ref1}
          animate={controlBrain1}
          src="/5/brain1.svg"
          alt="Sample Image"
        />
        <motion.img
          ref={ref2}
          className={styles.brain2}

          animate={controlBrain2}
          src="/5/brain2.svg"
          alt="Sample Image"
        />
        <motion.img
          ref={ref3}
          className={styles.brain3}

          animate={controlBrain3}
          src="/5/brain3.svg"
          alt="Sample Image"
        />
        <motion.img
          ref={ref4}
          className={styles.brain4}

          animate={controlBrain4}
          src="/5/brain4.svg"
          alt="Sample Image"
        />
        <h1 className={styles.word1}
        >Скидка</h1>
        <span className={styles.word2}
        >
          30%
          <motion.img
            src="/5/vector.svg"
            alt="Sample Image"

          />
        </span>
        <h1 className={styles.word3}
        >для братьев и сестер</h1>
        <h4 className={styles.word4}
        >Если два и более детей из одной семьи занимаются у нас</h4>
        <p className={styles.word5}
        >Оставьте телефон, ссылку на соц. сети или почту</p>
        <div className={styles.button}>
          <input ref={inputRef}
            placeholder='+79315094422 или t.me/IQHub' />
          <button onClick={
            () => {
              sendMessage(inputRef!.current!.value);
              inputRef!.current!.value = 'Ожидайте звонка.'
              setTimeout(() => {
                inputRef!.current!.value = ''
              }, 2000)
            }
          }
          >Отправить</button>
        </div>
      </div>
    </section>
  );
}

