import { Shorts } from './component/shorts/ui'
import styles from './sectionEight.module.css'


export function SectionEight() {


  return (
    <section className={styles.item}>
      <h1>Отзывы</h1>
      <Shorts />
    </section>
  )
}
