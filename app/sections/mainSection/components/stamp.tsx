'use client'
import { useEffect } from 'react'; import styles from './stamp.module.css'
import { AnimationControls, motion, useAnimation } from 'framer-motion';
import classNames from 'classnames';

export function Stamp(props: { className: string, controlH2: AnimationControls }) {
  const controlBrain = useAnimation();
  const controlNeuron = useAnimation();
  const controlBrainShadow = useAnimation();
  const controlNeuronShadow = useAnimation();
  const controlH1One = useAnimation();
  const controlH1Two = useAnimation();
  // const controlH2 = useAnimation();
  const controlSpanOne = useAnimation();
  const controlSpanTwo = useAnimation();
  let isMobil = +(window.innerWidth) < 768;
  console.log(isMobil)
  useEffect(() => {

    Promise.all([
      controlH1One.start({
        rotate: [10, 0],
        opacity: [0, 1],
        transition: {
          duration: 0.4, // Длительность анимации
          ease: "easeOut" // Тип перехода
        }
      }),
      controlH1Two.start({
        rotate: [-10, 0],

        opacity: [0, 1],
        transition: {
          duration: 0.4, // Длительность анимации
          ease: "easeOut" // Тип перехода
        }
      }), props.controlH2.start({
        y: [50, 0],
        opacity: [0, 1],
        transition: {
          duration: 0.8, // Длительность анимации
          ease: "easeOut" // Тип перехода
        }

      }), controlSpanTwo.start({
        rotate: [30, 0],
        transition: {
          duration: 0.4, // Длительность анимации
          ease: "easeOut" // Тип перехода
        }
      })


    ]).then(() => {
      controlBrain.start({
        scale: [0.6, 1.1, 1], y: [100, -10, 0], transition: {
          duration: 0.6, // Длительность анимации
          ease: "easeOut" // Тип перехода
        }
      }).then(() => {
        controlSpanOne.start({
          rotate: [-10, 0],
          transition: {
            duration: 0.2, // Длительность анимации
            ease: "easeOut" // Тип перехода
          }
        })

      })
      controlNeuron.start({
        scale: [0.6, 1.1, 1], y: [100, -10, 0], transition: {
          duration: 0.6, // Длительность анимации
          ease: "easeOut" // Тип перехода
        }
      })
      controlBrainShadow.start({
        scale: [0.6, 1.1, 1],
        y: [50, -10, 0],
        opacity: [0, 1.1, 1],
        transition: {
          duration: 0.6, // Длительность анимации
          ease: "easeOut" // Тип перехода
        }
      })
      controlNeuronShadow.start({
        scale: [0.6, 1.1, 1],
        y: [50, -10, 0],
        opacity: [0, 1.1, 1],
        transition: {
          duration: 0.6, // Длительность анимации
          ease: "easeOut" // Тип перехода
        }
      })


    })


    const sequence = async () => {
      // Анимируем первый элемент
      // await controls.start({ scale: [0.8, 1.1, 1], y: [100, -10, 0] });
      // // Анимируем второй элемент после первого
      // await controls.start('visible2');
      // // Анимируем третий элемент после второго
      // await controls.start('visible3');
    };

    sequence();
  }, []);
  return (<div className={classNames(styles.item, props.className)}>
    <motion.img
      className={styles.brain}
      src="/1/brain.svg"
      alt="Sample Image"
      initial={{ scale: 0.6, y: 100 }}
      animate={controlBrain}
    />
    <motion.img
      className={styles.brainShadow}
      animate={controlBrainShadow}
      src="/1/shadow.svg"

      initial={{ scale: 0.6, y: 50, opacity: 0 }}
      alt="Sample Image"
    />

    <motion.img
      className={styles.neuron}
      src="/1/neuron.svg"
      alt="Sample Image"
      initial={{ scale: 0.6, y: 100 }}
      animate={controlNeuron}
    />
    <motion.img
      className={styles.neuronShadow}
      initial={{ scale: 0.6, y: 50, opacity: 0 }}
      animate={controlNeuronShadow}
      src="/1/shadow.svg"
      alt="Sample Image"

    />

    <motion.div

      className={styles.line1}
      initial={{ opacity: 0 }}
      animate={controlH1One}
      style={{
        transformOrigin: 'bottom right 60px' // Поворот вокруг центра элемента
      }}
    >

      <h1 className={styles.word1}
      >В</h1>
      <motion.span
        className={styles.word2}

        initial={{ rotate: -10 }}
        animate={controlSpanOne}
        style={{
          transformOrigin: 'center' // Поворот вокруг центра элемента
        }}
      >игре
        <motion.img
          src="/1/vectorPurple.svg"
          alt="Sample Image"
        />

      </motion.span>
      <h1 className={styles.word3}
      > учимся</h1>
    </motion.div>


    <motion.div
      className={styles.line2}

      initial={{ opacity: 0 }}
      animate={controlH1Two}
      style={{
        transformOrigin: 'top left' // Поворот вокруг центра элемента
      }}
    >
      <h1 className={styles.word4}
      >любить</h1>
      <motion.span animate={controlSpanTwo}
        className={styles.word5}
      >
        знания
        <motion.img
          src="/1/vectorOrange.svg"
          alt="Sample Image"
        />
      </motion.span>
    </motion.div>

  </div >
  )

}
