import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

const Input = dynamic(() => import('@/ui/components/Input'))
const Box = dynamic(() => import('@/ui/components/Box'))

const ContactForm = ({ idPrefix }: { idPrefix: string }): ReactNode => {
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

export default ContactForm
