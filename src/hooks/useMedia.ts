import { useEffect, useState } from 'react'

export const useMedia = (media: string): boolean => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(media)
		setMatches(mediaQuery.matches)

		mediaQuery.addEventListener('change', () => { setMatches(mediaQuery.matches) })

		return () => {
			mediaQuery.removeEventListener('change', () => { setMatches(mediaQuery.matches) })
		}
	}, [])

	return matches
}
