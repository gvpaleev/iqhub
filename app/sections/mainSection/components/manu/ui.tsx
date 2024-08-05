import classNames from "classnames";
import styles from './menu.module.css'
export function Menu() {
  return (<div className={classNames(styles.item)}>
    <a href="#" >Программы</a>
    <a href="#"  >Стоимость</a>
    <a href="#"  >О нас</a>
    <a href="#"  >Контакты</a>
  </div >)
}


<nav>
  <ul>
    <li><a href="#home">Программы</a></li>
    <li><a href="#about">Стоимость</a></li>
    <li><a href="#services">О нас</a></li>
    <li><a href="#contact">Контакты</a></li>
  </ul>
</nav>
