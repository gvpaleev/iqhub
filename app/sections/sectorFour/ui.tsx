import styles from './sectionFour.module.css'


export function SectionFour() {


  return (
    <section className={styles.item}>
      <div>
        <h1>Дарим <span>первый урок</span></h1>
        <h1>с преподавателем <span>бесплатно</span></h1>
        <h4>Мы ответим на все вопросы и подберём подходящий под ваш запрос формат занятий</h4>
        <p>Оставьте телефон, ссылку на соц. сети или почту</p>
        <div>
          <input /> <button>Отправить</button>
        </div>
      </div>
    </section>
  )
}
