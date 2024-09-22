'use client'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import styles from './sectionFour.module.css'
import { useEffect, useRef } from 'react';

const data = [{
  'title': "Подготовка к школе",
  'text': ["обучение чтению и письму, звуко-буквенному анализу",
    // "формирование элементарных математических представлений", 
    // "развитие познавательных процессов (память, мышление, внимание, восприятие, воображение, речь)", 
    "формирование познавательного интереса как мотивации к обучению"]
},
{
  'title': "Английский язык",
  'text': ["формирование навыка говорения на Английском языке", "формирование интереса к изучению Английского языка", "изучение лексики и грамматики"]
},
{
  'title': "Занятия с логопедом",
  'text': ["постановка звуков, их автоматизация и дифференциация", "развитие грамматического и лексического стороя речи", " развитие связной речи"]
},
{
  'title': "Обучение чтению",
  'text': ["ознакомление с алфавитом", "формирование умения читать", "формирование умения понимать прочитанное"]
},
{
  'title': "Математическая логика",
  'text': [
    //"формирование знания о том, что возникновение математических понятий связано с практической деятельностью человека", "развитие логико-математических представлений",
    "овладение математическими способами познания действительности: счет, измерение, простейшие вычисления"]
},
{
  'title': "Общее развитие",
  'text': ["развитие познавательных процессов", "формирование знаний и навыков в соответствии с возрастом ребёнка"]
}

]
export function SectionFour() {



  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const parentRef = useRef(null); // Реф для родителя
  const childRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '-100px 0px 0px 0px',
  //     threshold: 1.0
  //   };
  const handleButtonClick = () => {
    const targetElement = document.getElementById('section7');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-100px 0px 0px 0px',
      threshold: 1.0
    };

    // Прописываем тип для массива входных данных IntersectionObserverEntry[]
    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio < 1) {
          entry.target.classList.add(styles.sticky);
        } else {
          entry.target.classList.remove(styles.sticky);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Убедимся, что ref существует и имеет правильный тип
    if (ref.current) {
      const items = ref.current.querySelectorAll(`.${styles.item}`) as NodeListOf<HTMLDivElement>;
      items.forEach((item: HTMLDivElement) => observer.observe(item));

      const parent = ref.current;
      const child = childRef.current;

      if (parent && child) {
        const parentHeight: number = parent.clientHeight;
        const childHeight: number = child.clientHeight;

        // Вычисляем разницу между высотой родителя и дочернего элемента
        const marginBottomValue = parentHeight - childHeight - 200;

        // Применяем это значение к margin-bottom дочернего элемента
        child.style.marginBottom = `calc(${marginBottomValue}px - 10vh)`;
      } else {
        console.error('Родитель или дочерний элемент не найден');
      }

      return () => {
        items.forEach((item: HTMLDivElement) => observer.unobserve(item));
      };
    }
  }, []);
  //   const observerCallback = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.intersectionRatio < 1) {
  //         entry.target.classList.add(styles.sticky);
  //       } else {
  //         entry.target.classList.remove(styles.sticky);
  //       }
  //     });
  //   };
  //
  //   const observer = new IntersectionObserver(observerCallback, observerOptions);
  //   if (ref.current) {
  //     const items = ref.current.querySelectorAll(`.${styles.item}`);
  //     items.forEach((item) => observer.observe(item));
  //     ///////////////////////
  //     const parent = ref.current;
  //     const child = childRef.current;
  //
  //     if (parent && child) {
  //       const parentHeight = parent.clientHeight;
  //       const childHeight = child.clientHeight;
  //       debugger;
  //       // Вычисляем разницу между высотой родителя и дочернего элемента
  //       const marginBottomValue = parentHeight - childHeight - 200;
  //
  //       // Применяем это значение к margin-bottom дочернего элемента
  //       child.style.marginBottom = `calc(${marginBottomValue}px - 10vh)`;
  //     } else {
  //       console.error('Родитель или дочерний элемент не найден');
  //     }
  //
  //
  //     return () => {
  //       items.forEach((item) => observer.unobserve(item));
  //     };
  //   }
  //
  // }, []);
  return (
    <section id='section4' className={styles.item}>
      <motion.img
        className={styles.neuron}
        src="/3/neuron.svg"
        alt="Sample Image"
      />

      <h1 className={styles.header}>Программы</h1>
      <motion.img
        className={styles.brain}
        src="/3/brain.svg"
        alt="Sample Image"
      />
      <div ref={ref}
        className={styles.cardsBlock}
      >
        {data.map((item, i) => {
          return (<div key={i}
            className={styles.card}
            ref={i === 5 ? childRef : null}
          >
            <h1>{item.title}</h1>
            <ul>
              {item.text.map((elem, j) => {
                return (<li key={j}>{elem}</li>)
              })}
            </ul>
            <button onClick={() => { handleButtonClick() }}>Стоимость</button>
            <motion.img
              src={`/3/neuron${i + 1}.svg`} alt="Sample Image"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{ borderRadius: '8px' }}
            />

          </div>)
        })}

      </div>
    </section >
  )
}
