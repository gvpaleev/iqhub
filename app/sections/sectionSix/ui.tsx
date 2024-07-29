import VideoPlayer from './components/VideoPlayer/ui'
import styles from './setctorSix.module.css'


export function SectionSix() {


  return (
    <section className={styles.item}>
      <h1>Как проходят наши занятия</h1>

      {/* <p> */}
      {/*   Интерактивная доска для занятий */}
      {/* </p> */}
      <VideoPlayer />
      {/* <p> */}
      {/*   Видеочат с педагогом */}
      {/* </p> */}
    </section>
  )
}
