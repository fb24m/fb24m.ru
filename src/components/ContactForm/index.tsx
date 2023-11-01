'use client'

import styles from './index.module.scss';
import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { PopupFooter } from '@/ui/components/PopupFooter';
import { PopupBody } from '@/ui/components/PopupBody';
import { Popup } from '@/ui/components/Popup';
import { Title3, Alignment, Box, Button, Icon, Input } from '@/ui/components';

interface ContactFormInputs {
	name: string
	contact: string
	message: string
}

interface ContactFormProps {
	buttonsJustify: Alignment
	buttons?: React.ReactElement
	bind?: string
	as?: 'popup' | 'card'
}

const sendForm: SubmitHandler<ContactFormInputs> = (data) => {
	const result = `Заявка от ${data.name}. Контакт: ${data.contact}. Комментарий: ${data.message}`;
	fetch(`https://api.telegram.org/bot6338485097:AAGW9HW5F5tv_ZNq-0wTFjK-ERdDfcUQghM/sendMessage?chat_id=872777347&text=${result}`);
}

export const ContactForm = (props: ContactFormProps): React.ReactElement => {
	const { register, handleSubmit } = useForm<ContactFormInputs>();

	const defaultProps = {
		register: register,
		required: true,
		className: 'observe'
	}

	const inputs =
		<div className={styles.inputs}>
			<Input {...defaultProps}
				name='name'
				icon={<Icon name="account_circle" />}
				placeholder='Ваше имя'
				autoComplete='name'
			/>
			<Input {...defaultProps}
				name='contact'
				icon={<Icon name="alternate_email" />}
				placeholder='Email или Telegram'
				autoComplete='email'
			/>
			<Input {...defaultProps}
				name='message'
				icon={<Icon name="comment" />}
				placeholder='Комментарий'
			/>
		</div>

	const buttons =
		<Box justify={props.buttonsJustify}>
			{props.buttons}
			<Button type='submit' icon={<Icon name="phone_enabled" />} appearance='Primary'>Отправить</Button>
		</Box>

	return (
		<form className={styles.form} onSubmit={handleSubmit(sendForm)}>
			{props.as === 'popup' ?
				<Popup bind={props.bind!}>
					<PopupBody>
						<Title3 className={styles.title}>Обратная связь</Title3>
						{inputs}
					</PopupBody>
					<PopupFooter>
						{buttons}
					</PopupFooter>
				</Popup> :
				<>{inputs}{buttons}</>}
		</form >
	);
};