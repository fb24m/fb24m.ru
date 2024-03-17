import { Body1 } from '@/shared/ui/components'
import { Container } from '@/shared/ui/components/Container'
import Title1 from '@/shared/ui/components/Title1'
import { Order } from '@/widgets/Order/ui'
import type { ReactElement } from 'react'

const Price = async (): Promise<ReactElement> => {
	return (
		<Container>
			<Title1>Калькулятор цены</Title1>
			<Body1>Поможет быстро рассчитать примерную цену разработки</Body1>
			<Order></Order>
		</Container>
	)
}

export default Price
