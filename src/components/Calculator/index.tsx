'use client'

import Card from '@/ui/components/Card'
import { useState, type ReactNode, type Dispatch, type SetStateAction } from 'react'
import styles from './Calculator.module.scss'
import clsx from 'clsx'

const CheckList = (props: {
	variants: string[]
	state: [string, Dispatch<SetStateAction<string>>]
}): ReactNode => {
	const [appType, setAppType] = props.state
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div className={styles.select}>
			<div className={clsx(styles.preview, appType !== '' && styles.visible)} onClick={() => { setIsOpened(!isOpened) }}>{appType}</div>
			<ul className={clsx(styles.list, appType !== '' && styles.shrinked, isOpened && styles.opened)} onClick={() => { setIsOpened(false) }}>
				{props.variants.map(variant =>
					<li key={variant} onClick={() => { setAppType(variant) }} title={variant}>{variant}</li>
				)}
			</ul>
		</div>
	)
}

export const Calculator = (): ReactNode => {
	const appType = useState('')
	const [pagesCount, setPagesCount] = useState(0)
	const [blocksCount, setBlocksCount] = useState(0)
	const framework = useState('')

	const getMultiplier = (framework: string): number =>
		framework === 'React'
			? 200
			: framework === 'Next.js'
				? 500
				: framework === 'jQuery'
					? 300
					: framework === 'Bootstrap'
						? 300
						: framework === 'Tailwind'
							? 100
							: framework === 'html / другое'
								? 0
								: 0

	return (
		<Card>
			<div className={styles.block}>
				<p>Мне надо сделать</p>
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
					<p>на которой</p>
					<input type="range" className={styles.range} defaultValue={0} min={1} max={20} onInput={(e) => { setBlocksCount(+(e.target as HTMLInputElement).value) }} />
					{blocksCount}
					<p>блоков</p>
				</div>
			}

			{((pagesCount > 1) || (pagesCount > 0 && blocksCount > 0)) &&
				<div className={styles.block}>
					Используя
					<CheckList variants={['React', 'Next.js', 'jQuery', 'Bootstrap', 'Tailwind', 'html / другое']} state={framework} />
				</div>
			}

			{pagesCount >= 1 && <>
				Это будет стоить: ~{pagesCount === 1
					? blocksCount * 500 + getMultiplier(framework[0])
					: ((pagesCount - 1) * (1000 + getMultiplier(framework[0]))) + 6000} рублей
			</>
			}

		</Card>
	)
}
