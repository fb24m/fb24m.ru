// 'use client'

import React from 'react';

import { Alignment, Box, Icon, Input } from '@/ui/components';


export const ContactForm = () => {
	return (
		<Box direction="column">
			<Input
				name='name'
				icon={<Icon name="account_circle" />}
				placeholder='Ваше имя'
				autoComplete='name'
			/>
			<Input
				name='contact'
				icon={<Icon name="alternate_email" />}
				placeholder='Email или Telegram'
				autoComplete='email'
			/>
			<Input
				name='message'
				icon={<Icon name="comment" />}
				placeholder='Комментарий'
			/>
		</Box>
	);
};