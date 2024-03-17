'use client'

import dynamic from 'next/dynamic'

import { order } from '@/actions/order.action'
import { useFormStatus } from 'react-dom'

import type { CustomPopupProps } from '@/interfaces/CustomPopup.props'

import styles from './ContactForm.module.scss'
import type { ReactNode } from 'react'

const Spinner = dynamic(() => import('@/shared/ui/components/Spinner/Spinner.component'))

const Popup = dynamic(() => import('@/shared/ui/components/Popup/Popup.component'))
const PopupBody = dynamic(() => import('@/shared/ui/components/PopupBody/PopupBody.component'))
const PopupFooter = dynamic(() => import('@/shared/ui/components/PopupFooter/PopupFooter.component'))

const Button = dynamic(() => import('@/shared/ui/components/Button'))

const ContactForm = dynamic(() => import('@/components/ContactForm'))

const SendButton = (): ReactNode => {
	const formStatus = useFormStatus()

	return (
		<Button className={`${styles.sendButton}`} type="submit" appearance="Primary">
			{formStatus.pending ? <Spinner size={20} /> : 'Отправить'}
		</Button>
	)
}

const ContactPopup = (props: CustomPopupProps): ReactNode => {
	return (<>
		<form action={order}>
			<Popup trigger={props.trigger}>
				<PopupBody>
					<ContactForm idPrefix="contact-popup" />
				</PopupBody>
				<PopupFooter>
					<SendButton />
				</PopupFooter>
			</Popup>
		</form>
	</>
	)
}

export default ContactPopup
