import { Cards } from './component/cards/ui'
import styles from './sectionTwo.module.css'


export function SectionTwo() {


  return (
    <section className={styles.item}>
      <h1>Интересные факты о нас</h1>
      <Cards />
    </section>
  )
}
