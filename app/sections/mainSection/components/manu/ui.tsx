import classNames from "classnames";
import styles from './menu.module.css'
export function Menu() {
  return (<div className={classNames(styles.item)}>
    <a href="#" className={classNames(styles.a)}>Программы</a>
    <a href="#" className={classNames(styles.a)} >Стоимость</a>
    <a href="#" className={classNames(styles.a)} >О нас</a>
    <a href="#" className={classNames(styles.a)} >Контакты</a>
  </div >)
}
