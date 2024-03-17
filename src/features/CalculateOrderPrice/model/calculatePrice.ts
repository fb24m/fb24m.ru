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

export const calculatePrice = (pagesCount: number, blocksCount: number, framework: string): number => {
	if (pagesCount === 1) {
		return blocksCount * 500 + getMultiplier(framework)
	} else {
		return 5000 + (pagesCount * (500 + getMultiplier(framework)))
	}
}
