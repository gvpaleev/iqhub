'use client'
import { motion, useAnimation } from 'framer-motion';
// import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic';


// Динамический импорт компонента с отключенной поддержкой серверного рендеринга
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


import VideoPlayer from './components/VideoPlayer/ui'
import styles from './setctorSix.module.css'
import { useRef, useState, useEffect } from 'react';


export function SectionSix() {
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playerKey, setPlayerKey] = useState<number>(0); // Ключ для принудительного перерисовывания
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  let videosrc = "/iqHubVidoe.mp4";

  return (
    <section className={styles.item}>
      <motion.img
        className={styles.neuronus}
        src="/6/neuronus.svg"
        alt="Sample Image"
      />

      <h1 className={styles.header}>Как проходят наши занятия</h1>

      <div ref={playerContainerRef}
        className={styles.board}
      >
        <p className={styles.pTop}>
          Интерактивная доска для занятий
        </p>
        <p className={styles.pLeft}>
          Видеочат с педагогом
        </p>


        <ReactPlayer
          key={playerKey}
          width="100%"
          height="100%"
          url={videosrc}
          controls={false} // Убирает элементы управления
          light={false}   // Отключает предварительный просмотр
          pip={false}     // Отключает режим "картинка в картинке"
          playing={isPlaying} // Запускает воспроизведение, если `true`
          // Дополнительные параметры 
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload nofullscreen noremoteplayback',
              },
            },
          }}
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            border: 'none',
          }}
        />
        <button
          onClick={handlePlayPause}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)', /* Полупрозрачный черный фон */
            border: 'none',
            color: 'white',
            fontSize: '48px', /* Размер иконок */
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0, /* Скрыть кнопку по умолчанию */
            transition: 'opacity 0.3s ease', /* Плавное появление/исчезновение */
          }}
        >
        </button>
      </div>

    </section >
  )
}
