import styles from './sectionFive.module.css'


export function SectionFive() {


  return (
    <section className={styles.item}>
      <div>
        <h1>Скидка <span>30%</span></h1>
        <h1>для братьев и сестер</h1>
        <h4>Если два и более детей из одной семьи занимаются у нас</h4>
        <p>Оставьте телефон, ссылку на соц. сети или почту</p>
        <div>
          <input /> <button>Отправить</button>
        </div>
      </div>
    </section>
  )
}
