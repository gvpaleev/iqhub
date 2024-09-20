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

  useEffect(() => {
    const section = document.getElementById('section4'); // Получаем элемент с id sectionFix

    if (!section) return; // Если элемент не найден, не продолжаем выполнение

    function snapToSection() {
      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const distance = Math.abs(sectionTop - scrollTop);

      // Прокручиваем к секции, если она ближе к текущей позиции прокрутки
      if (distance < window.innerHeight / 2) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    window.addEventListener('scroll', () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(snapToSection, 200); // Дебаунс для плавной работы
    });

    window.addEventListener('resize', snapToSection); // Пересчитываем при изменении размера окна

    // Начальная прокрутка при загрузке страницы
    snapToSection();

    // Очистка обработчиков событий при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', snapToSection);
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
