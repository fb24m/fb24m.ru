import { Calculator } from '@/components/Calculator'
import { Body1 } from '@/ui/components'
import { Container } from '@/ui/components/Container'
import Title1 from '@/ui/components/Title1'
import type { ReactElement } from 'react'

const Price = async (): Promise<ReactElement> => {
	return (
		<Container>
			<Title1>Калькулятор цены</Title1>
			<Body1>Поможет быстро рассчитать примерную цену разработки</Body1>
			<Calculator></Calculator>
		</Container>
	)
}

export default Price
