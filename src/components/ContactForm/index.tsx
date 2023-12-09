import { Box, Input } from '@/ui/components'
import type { ReactNode } from 'react'

export const ContactForm = (): ReactNode => {
	return (
		<Box direction="column">
			<Input
				required
				name='name'
				icon="account_circle"
				placeholder='Ваше имя'
				autoComplete='name'
			/>
			<Input
				required
				name='contact'
				icon="alternate_email"
				placeholder='Email или Telegram'
				autoComplete='email'
			/>
			<Input
				required
				name='message'
				icon="comment"
				placeholder='Комментарий'
			/>
		</Box>
	)
}
