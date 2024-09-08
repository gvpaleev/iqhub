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
    const sections = document.querySelectorAll('section');

    function snapToSection() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      let closestSection = null;
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const distance = Math.abs(sectionTop - scrollTop);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        closestSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    window.addEventListener('scroll', () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(snapToSection, 200);
    });

    window.addEventListener('resize', snapToSection);

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
