import styles from './page.module.css'

import { Welcome } from '@/components/welcome';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Portfolio } from '@/components/Portfolio';
import { ReviewsBlock } from '@/components/Reviews';

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
