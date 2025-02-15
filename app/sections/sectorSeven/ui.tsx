'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { Cards } from './componetnts/cards/ui'
import styles from './sectionSeven.module.css'
import classNames from 'classnames'
import { sendMessage } from '@/app/helpers/tg';


export function SectionSeven() {

  const inputRef = useRef<HTMLInputElement>(null);
  const data = [{
    'header': "Подготовка к школе",
    'cards': [
      ["3 занятия", "Стоимость одного занятия 900 руб", "Стоимость абонемента 2700 руб"],
      ["6 занятий", "Стоимость одного занятия 850 руб", "Стоимость абонемента 5100 руб"],
      ["12 занятий", "Стоимость одного занятия 750 руб", "Стоимость абонемента 9000 руб"]
    ]
  },
  {
    'header': "Английский язык",

    'cards': [
      ["3 занятия", "Стоимость одного занятия 900 руб", "Стоимость абонемента 2700 руб"],
      ["6 занятий", "Стоимость одного занятия 850 руб", "Стоимость абонемента 5100 руб"],
      ["12 занятий", "Стоимость одного занятия 750 руб", "Стоимость абонемента 9000 руб"]
    ]
  },
  {
    'header': "Занятия с логопедом",

    'cards': [
      ["3 занятия", "Стоимость одного занятия 900 руб", "Стоимость абонемента 2700 руб"],
      ["6 занятий", "Стоимость одного занятия 850 руб", "Стоимость абонемента 5100 руб"],
      ["12 занятий", "Стоимость одного занятия 750 руб", "Стоимость абонемента 9000 руб"]

    ]
  },
  {
    'header': "Обучение чтению",

    'cards': [
      ["3 занятия", "Стоимость одного занятия 900 руб", "Стоимость абонемента 2700 руб"],
      ["6 занятий", "Стоимость одного занятия 850 руб", "Стоимость абонемента 5100 руб"],
      ["12 занятий", "Стоимость одного занятия 750 руб", "Стоимость абонемента 9000 руб"]

    ]
  },
  {
    'header': "Математическая логика",

    'cards': [
      ["3 занятия", "Стоимость одного занятия 900 руб", "Стоимость абонемента 2700 руб"],
      ["6 занятий", "Стоимость одного занятия 850 руб", "Стоимость абонемента 5100 руб"],
      ["12 занятий", "Стоимость одного занятия 750 руб", "Стоимость абонемента 9000 руб"]

    ]
  },
  {
    'header': "Общее развитие",

    'cards': [
      ["3 занятия", "Стоимость одного занятия 900 руб", "Стоимость абонемента 2700 руб"],
      ["6 занятий", "Стоимость одного занятия 850 руб", "Стоимость абонемента 5100 руб"],
      ["12 занятий", "Стоимость одного занятия 750 руб", "Стоимость абонемента 9000 руб"]

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

  const handleScrollToCenter = (index: number) => {
    const container = document.querySelector(`.${styles.bar}`);
    const selectedItem = container?.querySelectorAll('h1')[index];

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

      const animateScroll = (currentTime: number) => {
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
    <section id='section7' className={styles.item}>
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
            <h3>{item[1]}</h3>
            <h3>{item[2]}</h3>
            {hoveredIndexCard === i ? (
              <motion.div
                className={classNames(styles.formForSend, { [styles.inputLR]: i != 1 })}


                initial={{ opacity: 0, scale: 0.8 }} // Начальные стили для появления
                animate={{ opacity: 1, scale: 1 }}  // Анимация появления
                exit={{ opacity: 0, scale: 0.8 }}   // Анимация исчезновения
                transition={{ duration: 0.5 }}      //
              >
                <input type="text"
                  ref={inputRef}
                  placeholder="+79315094422"
                /> <button
                  onClick={
                    () => {
                      sendMessage(inputRef!.current!.value);
                      inputRef!.current!.value = 'Спасибо.'
                      setTimeout(() => {
                        inputRef!.current!.value = ''
                      }, 2000)
                    }
                  }

                >записаться</button>
              </motion.div>

            ) : (
              <button onClick={() => { window.scrollTo(0, 0); }} >заказать</button>
            )}
          </motion.div>)
        })}

      </motion.div>

    </section >
  )
}
