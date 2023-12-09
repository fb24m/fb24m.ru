import type { ReactNode } from 'react'
import styles from './page.module.css'

import dynamic from 'next/dynamic'

const Welcome = dynamic(() => import('@/components/Home/welcome'))
const About = dynamic(() => import('@/components/Home/About'))
const Contact = dynamic(() => import('@/components/Home/Contact'))
const Portfolio = dynamic(() => import('@/components/Home/Portfolio'))

const Home = (): ReactNode => {
  return (
    <main className={styles.main}>
      <Welcome />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Home
