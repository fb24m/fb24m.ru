// 'use client';

import styles from './page.module.css';

// import { Welcome } from '@/components/Home/welcome';
import dynamic from 'next/dynamic';

const Welcome = dynamic(() => import('@/components/Home/welcome'))
const About = dynamic(() => import('@/components/Home/About'))
const Contact = dynamic(() => import('@/components/Home/Contact'))
const Portfolio = dynamic(() => import('@/components/Home/Portfolio'))
const ReviewsBlock = dynamic(() => import('@/components/Home/Reviews'))

export default function Home() {
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
