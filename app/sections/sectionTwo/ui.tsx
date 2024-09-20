'use client'
import { useRef } from 'react';
import styles from './sectionTwo.module.css'

import { motion } from 'framer-motion';

const data = [{
  'title': "Живые онлайн уроки",
  'text': "Педагог и ребёнок во время занятия общаются между собой. Задания и игры педагог показывает прямо на вашем экране."
},
{
  'title': "Методики уже доказавшие свою эффективность",
  'text': "Мы отобрали  лучшие методики дошкольного образования и адаптировали их под онлайн формат."
},
{
  'title': "Индивидуальный подхо",
  'text': "В нашей школе занимаются билингвы, дети с ОВЗ, и просто те ребята, кому нужно особое внимание педагога. Наши преподаватели стараются найти индивидуальный подход к каждому ребёнку."
},
{
  'title': "Учитель, который подойдёт именно вам",
  'text': "Вы можете выбирать опытного педагога или молодого учителя и в любом случае получить отличный результат. А все потому, что кураторы школы обучают молодых преподавателей и прикрепляют опытного методиста к каждому учителю."
},
{
  'title': "Бесплатные материалы",
  'text': "Отправляем игры, квесты, воркбуки нашим ученикам каждый месяц"
},
{
  'title': "Развитие познавательных способностей на каждом занятии",
  'text': "ребенок на занятии не только овладевает определенными умениями и знаниями, но и развивает память, мышление, внимание, воображение"
},
{
  'title': "Смена деятельности",
  'text': "не пыхтим над заданием весь урок. Предлагаем разнообразие заданий и игровой подход"
}



]
export function SectionTwo() {
  const scrollRef = useRef<HTMLDivElement>(null); // Создаем ссылку на div

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' }); // Прокрутка влево
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 430, behavior: 'smooth' }); // Прокрутка вправо
    }
  };
  return (
    <section id="section2" className={styles.item}>
      <motion.img
        className={styles.neuronus}
        src="/2/neurons.svg"
        alt="Sample Image"
      />
      <motion.img
        className={styles.brain}

        src="/2/brain.svg"
        alt="Sample Image"
      />
      <h1>Интересные факты о нас</h1>
      <div ref={scrollRef}
        className={styles.cardsBlock}

      >

        {data.map((item, i) => {
          return (
            <div key={i}
              className={styles.card}
            >
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <motion.img
                className={styles.snake}

                src="/2/snake.svg"
                alt="Sample Image"
              />
            </div>
          )
        })}

      </div>
      <div
        className={styles.buttons}
      >
        <button onClick={scrollLeft} />
        <button onClick={scrollRight} />
      </div>
    </section >
  )

}
