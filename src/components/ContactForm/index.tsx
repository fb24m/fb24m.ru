import { Box, Input } from '@/ui/components'
import type { ReactNode } from 'react'

export const ContactForm = ({ idPrefix }: { idPrefix: string }): ReactNode => {
	return (
		<Box direction="column">
			<Input
				required
				id={`${idPrefix}-name`}
				name='name'
				icon="account_circle"
				placeholder='Ваше имя'
				autoComplete='name'
			/>
			<Input
				required
				id={`${idPrefix}-contact`}
				name='contact'
				icon="alternate_email"
				placeholder='Email или Telegram'
				autoComplete='email'
			/>
			<Input
				required
				id={`${idPrefix}-message`}
				name='message'
				icon="comment"
				placeholder='Комментарий'
			/>
		</Box>
	)
}
