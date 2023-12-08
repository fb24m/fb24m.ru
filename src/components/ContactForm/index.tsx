import { Box, Icon, Input } from '@/ui/components';


export const ContactForm = () => {
	return (
		<Box direction="column">
			<Input
				required
				name='name'
				icon={<Icon name="account_circle" />}
				placeholder='Ваше имя'
				autoComplete='name'
			/>
			<Input
				required
				name='contact'
				icon={<Icon name="alternate_email" />}
				placeholder='Email или Telegram'
				autoComplete='email'
			/>
			<Input
				required
				name='message'
				icon={<Icon name="comment" />}
				placeholder='Комментарий'
			/>
		</Box>
	);
};