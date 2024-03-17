import type { ReactNode } from 'react'
import styles from './page.module.css'

import dynamic from 'next/dynamic'
import Button from '@/shared/ui/components/Button'
import { Container } from '@/shared/ui/components/Container'

const Welcome = dynamic(() => import('@/components/Home/welcome'))
const About = dynamic(() => import('@/components/Home/About'))
const Contact = dynamic(() => import('@/components/Home/Contact'))
const Portfolio = dynamic(() => import('@/components/Home/Portfolio'))

const Home = (): ReactNode => {
  return (
    <>
      <div className={styles.homeHeader}>
        <Container className={styles.homeHeaderContainer}>
          <Button appearance="Link" as="a" href="#about">Обо мне</Button>
          <Button appearance="Link" as="a" href="#portfolio">Портфолио</Button>
          <Button appearance="Link" as="a" href="#contact">Связаться</Button>
        </Container>
      </div>
      <div className={styles.main}>
        <Welcome />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>

  )
}

export default Home
