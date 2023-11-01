import styles from './page.module.css'

import { Welcome } from '@/components/welcome';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Portfolio } from '@/components/Portfolio';

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
