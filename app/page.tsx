'use client'
import Image from "next/image";
import { MainSection } from "./sections/mainSection/ui";
import classNames from "classnames";
import styles from './page.module.css'
import { SectionTwo } from "./sections/sectionTwo/ui";
import { SectionThree } from "./sections/sectionThree/ui";
import { SectionFour } from "./sections/sectorFour/ui";
import { SectionFive } from "./sections/sectorFive/ui";
import { SectionSix } from "./sections/sectionSix/ui";
import { SectionSeven } from "./sections/sectorSeven/ui";
import { SectionEight } from "./sections/sectorEigh/ui";
import { useEffect } from "react";
export default function Home() {

  interface CustomWindow extends Window {
    scrollTimeout?: number;
  }
  useEffect(() => {
    const customWindow = window as CustomWindow;

    const section = document.getElementById('section4'); // Получаем элемент с id sectionFix

    if (!section) return; // Если элемент не найден, не продолжаем выполнение

    function snapToSection() {
      const scrollTop = window.scrollY;
      const sectionTop = section!.offsetTop; // Так как секция уже проверена
      const distance = Math.abs(sectionTop - scrollTop);

      // Прокручиваем к секции, если она ближе к текущей позиции прокрутки
      if (distance < window.innerHeight / 2) {
        section!.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    function handleScroll() {
      clearTimeout(customWindow.scrollTimeout);
      customWindow.scrollTimeout = window.setTimeout(snapToSection, 200); // Дебаунс для плавной работы
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', snapToSection); // Пересчитываем при изменении размера окна

    // Начальная прокрутка при загрузке страницы
    snapToSection();

    // Очистка обработчиков событий при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll); // Удаляем именно handleScroll
      window.removeEventListener('resize', snapToSection);
    };
  }, []);

  return (<>

    <MainSection />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
  </>);
}
