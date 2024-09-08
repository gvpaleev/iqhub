
'use client'
import { useState, useRef, useEffect } from 'react';
import styles from './sectionEight.module.css'
import { motion } from 'framer-motion';
import { Footer } from './component/footer/ui';

export function SectionEight() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentH1Refs = useRef<(HTMLDivElement | null)[]>([]);

  const data = [
    {
      'title': "Что нужно, чтобы начать учиться у вас?",
      "text": "Всё очень просто — оставьте свои контакты, с вами свяжется менеджер, чтобы уточнить образовательные цели и назначить вводный урок с репетитором. На первом бесплатном занятии ученик знакомится с преподавателем и проходит тестирование."
    },
    {
      'title': "Какие требования к компьютеру или планшету?",
      "text": "Для занятий с репетитором вам понадобится устройство с доступом в интернет и возможность подключения микрофона и камеры. Рекомендуется использовать современный браузер (Google Chrome, Firefox, Safari) для наилучшего качества связи."
    },
    {
      'title': "Как проходят занятия?",
      "text": "Занятия проходят в формате онлайн-видеоконференций. Ученик и репетитор могут общаться, использовать виртуальную доску, обмениваться файлами и многое другое, что делает обучение максимально удобным и продуктивным."
    },
    {
      'title': "Можно ли получить запись занятия?",
      "text": "Да, вы можете получить запись занятия для повторения материала или в случае, если не смогли присутствовать на уроке. Записи хранятся в вашем личном кабинете."
    }
  ]

  useEffect(() => {
    // contentRefs.current = contentRefs.current.slice(0, data.length);
  }, [data.length]);

  return (
    <section className={styles.item}>
      <motion.img
        className={styles.neuronusLeft}
        src='/8/neuronus.svg' />

      <h1>Вопросы и ответы</h1>
      {data.map((item, i) => {
        let isOpen = expandedIndex === i;
        return (
          <motion.div
            key={i}
            // initial={false}
            animate={{ height: isOpen ? '200px' : '80px' }} // Высота по умолчанию для свёрнутого состояния
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              overflow: 'hidden',
              cursor: 'pointer',
              // marginBottom: '10px', // Пример отступа между элементами
            }}
            onClick={() => setExpandedIndex(isOpen ? null : i)} // Открываем/закрываем по клику
          >
            {isOpen ? (<motion.img animate={{ rotate: 0 }} transition={{ duration: 0.1, ease: 'easeInOut' }} src='/8/icon.svg' />
            ) : (
              <motion.img animate={{ rotate: 0 }} transition={{ duration: 0.1, ease: 'easeInOut' }} src='/8/icon1.svg' />)}
            <h1
              ref={(el) => { if (el) { contentH1Refs.current[i] = el } }}

            >{item.title}</h1>
            <motion.div
              ref={(el) => { if (el) { contentRefs.current[i] = el } }}
              initial={{ opacity: 0, display: 'none' }} // Начальная непрозрачность
              animate={{
                opacity: isOpen ? 1 : 0,
                // paddingBottom: isOpen ? 35 : 0,
                display: isOpen ? 'block' : 'none'
              }} // Анимация прозрачности
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {item.text}
            </motion.div>
          </motion.div>
        )
      })}
      <footer>
        <motion.img
          src='/8/neuronusFooter.svg' />
        <motion.img
          src='/8/iqHub.svg' />
        <nav>
          <a href='#'>Программы</a>
          <a href='#'>Стоимость</a>
          <a href='#'>О нас</a>

        </nav>
        <div
          className={styles.contacts}
        >
          <h1>Контакты</h1>
          <h4>тел. +7 921 123 45 67</h4>
          <h4>почта IQHub@gmai.com</h4>
          <div>          <motion.img
            src='/8/instagram.svg' />
            <motion.img
              src='/8/telegram.svg' />
            <motion.img
              src='/8/vk.svg' />
            <motion.img
              src='/8/whatsapp.svg' />
          </div>

        </div>
      </footer>
    </section>
  )
}

