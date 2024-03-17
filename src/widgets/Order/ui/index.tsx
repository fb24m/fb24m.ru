'use client'

import { useState, type ReactNode } from 'react'
import styles from './Order.module.scss'
import { Calculator } from '@/features/CalculateOrderPrice/ui'
import { OrderForm } from '@/features/OrderForm/ui'
import clsx from 'clsx'
import Button from '@/shared/ui/components/Button'

export const Order = (): ReactNode => {
	const [message, setMessage] = useState('')
	const [isReady, setIsReady] = useState(false)
	const [skipCalculating, setSkipCalculating] = useState(false)

	return (
		<div className={styles.order}>
			{!skipCalculating && <Calculator setMessage={setMessage} setIsReady={setIsReady} />}

			{(isReady || skipCalculating) && <OrderForm className={clsx()} message={message} />}

			{!isReady &&
				<div onClick={() => { setSkipCalculating(!skipCalculating) }}>
					<Button appearance="Link">
						{skipCalculating
							? 'Я хочу рассчитать примерную цену сайта'
							: 'Я хочу просто связаться'
						}
					</Button>
				</div>}
		</div>
	)
}
