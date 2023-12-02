'use client';

import styles from './page.module.css';

import { Welcome } from '@/components/Home/welcome';
import { About } from '@/components/Home/About';
import { Contact } from '@/components/Home/Contact';
import { Portfolio } from '@/components/Home/Portfolio';
import { ReviewsBlock } from '@/components/Home/Reviews';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    let observedElements: NodeListOf<Element> | undefined = document.querySelectorAll('.observe');

    const observer = new IntersectionObserver((items) => {
      items.forEach((item, index) => {
        if (item.isIntersecting) {
          setTimeout(() => item.target.classList.add('visible'), 120 * index);
        }
      })
    });

    observedElements.forEach((element) => {
      observer.observe(element);
    })

    return () => {
      observedElements = undefined;
    }
  }, [])

  return (
    <main className={styles.main}>
      <Welcome />
      <About />
      <Portfolio />
      <ReviewsBlock />
      <Contact />
    </main>
  )
}
