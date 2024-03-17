import styles from './index.module.scss'

import type { ReactNode } from 'react'
import { Order } from '@/widgets/Order/ui'
import Title2 from '@/shared/ui/components/Title2'
import { Container } from '@/shared/ui/components/Container'

const Contact = (): ReactNode => {
	return (
		<article id='contact'>
			<Container>
				<Title2 className={styles.title}>Узнайте цену вашего сайта</Title2>
				<Order></Order>
			</Container>
		</article>
	)
}

export default Contact
