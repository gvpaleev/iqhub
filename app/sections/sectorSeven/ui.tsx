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

  const handleScrollToCenter = (index) => {
    const container = document.querySelector(`.${styles.bar}`);
    const selectedItem = container.querySelectorAll('h1')[index];

    if (container && selectedItem) {
      const containerWidth = container.clientWidth;
      const selectedItemWidth = selectedItem.clientWidth;
      const selectedItemLeft = selectedItem.offsetLeft;

      // Вычисляем позицию для прокрутки, чтобы элемент оказался по центру
      const scrollPosition =
        selectedItemLeft - (containerWidth - selectedItemWidth) / 2;

      // Плавная прокрутка
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };
  const [scrollInitialized, setScrollInitialized] = useState(false);
  useEffect(() => {
    const container = document.querySelector(`.${styles.cardsBlock}`);

    if (container) {
      const cards = container.querySelectorAll(`.${styles.card}`);
      const containerWidth = container.clientWidth;

      const middleIndex = Math.floor(cards.length / 2);
      const totalWidthBeforeMiddle = Array.from(cards)
        .slice(0, middleIndex)
        .reduce((acc, card) => acc + card.clientWidth + parseFloat(getComputedStyle(card).marginRight), 0);

      const middleCardWidth = cards[middleIndex].clientWidth;
      const scrollPosition = totalWidthBeforeMiddle - (containerWidth - middleCardWidth) / 2;

      // Плавная прокрутка с помощью requestAnimationFrame
      const startScroll = container.scrollLeft;
      const targetScroll = Math.max(scrollPosition, 0);
      const duration = 500; // Длительность анимации в миллисекундах
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOut = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

        container.scrollLeft = startScroll + (targetScroll - startScroll) * easeInOut;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
    if (!scrollInitialized && data.length > 2) {
      handleScrollToCenter(2); // Прокрутить к третьему элементу
      setItemMenu(2); // Установить активный элемент как третий
      setScrollInitialized(true); // Устанавливаем флаг, чтобы больше не прокручивалось автоматически
    }
  }, []);



  // let isMobil = +(window.innerWidth) < 768;
  return (
    <section className={styles.item}>
      <h1 className={styles.header}>Стоимость</h1>

      <motion.nav
        className={styles.bar}
      >
        <motion.div
          className={styles.backgroundItemMenu}
          style={{
            width: itemMenu !== null ? `${activeItemWidth * 0.8}px` : '0%',
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
        <motion.img
          className={classNames(styles.neronusLeft)}
          src="/7/neronusLeft.svg"
          alt="Sample Image"
        />
        <motion.img
          className={classNames(styles.neronusRigth)}
          src="/7/neronusRigth.svg"
          alt="Sample Image"
        />


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
