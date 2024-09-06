'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { Cards } from './componetnts/cards/ui'
import styles from './sectionSeven.module.css'
import classNames from 'classnames'


export function SectionSeven() {
  const data = [{
    'header': "Подготовка к школе",
    'cards': [
      ["1 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"]
      , ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"]
      , ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"]
    ]
  },
  {
    'header': "Английский язык",

    'cards': [
      ["2 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"]
    ]
  },
  {
    'header': "Занятия с логопедом",

    'cards': [
      ["3 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"]
    ]
  },
  {
    'header': "Обучение чтению",

    'cards': [
      ["4 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"]
    ]
  },
  {
    'header': "Математическая логика",

    'cards': [
      ["5 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"]
    ]
  },
  {
    'header': "Общее развитие",

    'cards': [
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"],
      ["6 занятий", "с опытным специалистом", "6600 руб", "(стоимость одного занятия 1100руб)", "с молодым специалистом", "4800 руб", "(стоимость одного занятия 1100руб)"]
    ]
  }


  ]
  const [itemMenu, setItemMenu] = useState<number>(2);
  // const controlsBlock = [useAnimation(), useAnimation(), useAnimation()]
  // const controls = useAnimation();
  const itemMenuRefs = useRef<(HTMLHeadingElement)[]>([]);
  const itemCardRefs = useRef<(HTMLHeadingElement)[]>([]);
  const [hoveredIndexCard, setHoveredIndexCard] = useState<number | null>(null);

  const [activeItemWidth, setActiveItemWidth] = useState<number>(0);
  useEffect(() => {

    if (itemMenu !== null && itemMenuRefs.current[itemMenu]) {
      // Получаем ширину активного элемента
      // 
      const width = itemMenuRefs.current[itemMenu]?.offsetWidth || 0;
      setActiveItemWidth(width);
      console.log(width)
    }
  }, [itemMenu]);



  return (
    <section className={styles.item}>
      <h1>Стоимость</h1>
      <motion.nav
      >
        <motion.div
          className={styles.backgroundItemMenu}
          style={{
            width: itemMenu !== null ? `${activeItemWidth}px` : '0%',
            left: itemMenu !== null ? `${itemMenuRefs.current[itemMenu]?.offsetLeft}px` : '0%'
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        {data.map((item, i) => {

          return (
            <motion.h1
              onClick={() => { setItemMenu(i) }}
              className={classNames({ [styles.actionItemMenu]: i == itemMenu })}
              key={i}
              ref={(el) => {
                if (el) itemMenuRefs.current[i] = el;
              }}
            >
              {
                item.header
              }
            </motion.h1>)
        })}
      </motion.nav>
      <motion.div

        className={styles.cardsBlock}
      >


        {data[itemMenu].cards.map((item, i) => {
          return (<motion.div
            onHoverStart={() => setHoveredIndexCard(i)}  // Устанавливаем индекс при наведении
            onHoverEnd={() => setHoveredIndexCard(null)}
            ref={(el) => {
              if (el) itemCardRefs.current[i] = el;
            }}
            className={classNames(

              styles.card, {
              [styles.cardLR]: i != 1,

              [styles.cardCenter]: i == 1,
              [styles.min]: hoveredIndexCard != null && hoveredIndexCard != 1,
            })}
            whileHover={{ scale: (i == 1 ? 1.1 : 1.2) }} // Увеличение блока при наведении
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            key={i} >
            <h2>{item[0]}</h2>
            <h3>{item[1]}<br />{item[2]}</h3>
            <h4>{item[3]}</h4>
            <h3>{item[4]}</h3>
            <h2>{item[5]}</h2>
            <h4>{item[6]}</h4>
            {hoveredIndexCard === i ? (
              <motion.div
                className={classNames(styles.formForSend, { [styles.inputLR]: i != 1 })}


                initial={{ opacity: 0, scale: 0.8 }} // Начальные стили для появления
                animate={{ opacity: 1, scale: 1 }}  // Анимация появления
                exit={{ opacity: 0, scale: 0.8 }}   // Анимация исчезновения
                transition={{ duration: 0.5 }}      //
              >
                <input type="text"
                  placeholder="+79211234567"
                /> <button>записаться</button>
              </motion.div>

            ) : (
              <button>заказать</button>
            )}
          </motion.div>)
        })}

      </motion.div>

    </section >
  )
}
