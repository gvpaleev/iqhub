'use client'
import ReactPlayer from 'react-player';
import styles from './shorts.module.css';

// Определение интерфейса для пропсов
const data = [
  '/shorts1.mp4',
  '/shorts2.mp4',
  '/shorts3.mp4',
  '/shorts4.mp4',
  '/shorts5.mp4'
]
// Использование интерфейса Props для типизации пропсов компонента
export function Shorts() {
  return (
    <div className={styles.item}>

      {data.map((item, i) => {
        return (
          <ReactPlayer
            key={i}
            width="323px"
            height="519px"
            url={item}
            controls={true}
            // light is usefull incase of dark mode
            light={false}
            // picture in picture
            pip={true}
          />
        )
      })}



    </div>
  );
}

<div>
</div>

