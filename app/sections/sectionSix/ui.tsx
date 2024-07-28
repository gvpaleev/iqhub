import VideoPlayer from './components/VideoPlayer/ui'
import styles from './setctorSix.module.css'


export function SectionSix() {


  return (
    <section className={styles.item}>
      <div>
        <h1>Как проходят наши занятия</h1>
        <p>Как проходят наши занятия</p>
      </div>
      <div>
        <VideoPlayer />
        <p>Как проходят наши занятия</p>
      </div>
    </section>
  )
}
