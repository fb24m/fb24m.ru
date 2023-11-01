export const formatDate = (date: string): string => (
	`${date.split('T')[0].split('-')[2]}.${date.split('T')[0].split('-')[1]}.${date.split('T')[0].split('-')[0]}`
)