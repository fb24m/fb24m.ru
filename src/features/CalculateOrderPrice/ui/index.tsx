'use client'

import Card from '@/shared/ui/components/Card'
import { useState, type Dispatch, type SetStateAction, type ReactNode, useEffect } from 'react'
import styles from './CalculateOrderPrice.module.scss'
import { CheckList } from '@/shared/ui/components/CheckList'
import { calculatePrice } from '@/features/CalculateOrderPrice/model/calculatePrice'

export const Calculator = (props: {
	setMessage?: Dispatch<SetStateAction<string>>
	setIsReady?: Dispatch<SetStateAction<boolean>>
}): ReactNode => {
	const appType = useState('')
	const [pagesCount, setPagesCount] = useState(0)
	const [blocksCount, setBlocksCount] = useState(0)
	const framework = useState('')

	useEffect(() => {
		if (framework[0] !== '') {
			props?.setMessage?.(`Количество страниц: ${pagesCount};\n Количество блоков: ${blocksCount};\n Фреймворк: ${framework[0]};\n Цена: ${calculatePrice(pagesCount, blocksCount, framework[0]).toLocaleString('ru-RU')} рублей.`)
		}

		props?.setIsReady?.(((pagesCount === 1 && blocksCount >= 1) || pagesCount > 1) && framework[0] !== '')
	}, [pagesCount, blocksCount, framework])

	return (
		<Card>
			<div className={styles.block}>
				<p className={styles.checkListLabel}>Мне надо сделать</p>
				<CheckList variants={['Сайт', 'Веб-приложение']} state={appType} />
			</div>

			{appType[0] !== '' &&
				<div className={styles.block}>
					<p>На</p>
					<input type="range" className={styles.range} defaultValue={0} min={1} max={20} onInput={(e) => { setPagesCount(+(e.target as HTMLInputElement).value) }} />
					{pagesCount}
					<p>страниц{pagesCount === 1 && 'у,'}</p>
				</div>
			}

			{pagesCount === 1 &&
				<div className={styles.block}>
					<p className={styles.checkListLabel}>на которой</p>
					<input type="range" className={styles.range} defaultValue={0} min={1} max={20} onInput={(e) => { setBlocksCount(+(e.target as HTMLInputElement).value) }} />
					{blocksCount}
					<p>блоков</p>
				</div>
			}

			{((pagesCount > 1) || (pagesCount > 0 && blocksCount > 0)) && appType[0] === 'Сайт' &&
				<div className={styles.block}>
					<p className={styles.checkListLabel}>используя</p>
					<CheckList variants={['jQuery', 'Bootstrap', 'Tailwind', 'Без фреймворка', 'Не знаю / другое']} state={framework} />
				</div>
			}

			{((pagesCount > 1) || (pagesCount > 0 && blocksCount > 0)) && appType[0] === 'Веб-приложение' &&
				<div className={styles.block}>
					<p className={styles.checkListLabel}>используя</p>
					<CheckList variants={['React', 'Next.js', 'Tailwind', 'Bootstrap']} state={framework} />
				</div>
			}

			{pagesCount >= 1 && framework[0] !== '' && <>
				Это будет стоить: ~{calculatePrice(pagesCount, blocksCount, framework[0])} рублей
			</>
			}
		</Card>
	)
}
