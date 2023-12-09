export const isDefined = (variable: unknown): boolean => {
	if (typeof variable !== 'undefined') {
		return true
	} else {
		return false
	}
}
