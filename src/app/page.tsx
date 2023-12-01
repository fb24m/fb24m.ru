import styles from './page.module.css'

import { Welcome } from '@/components/Home/welcome';
import { About } from '@/components/Home/About';
import { Contact } from '@/components/Home/Contact';
import { Portfolio } from '@/components/Home/Portfolio';
import { ReviewsBlock } from '@/components/Home/Reviews';

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
