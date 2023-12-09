'use client'

import { order } from '@/actions/order.action'
import { useFormStatus } from 'react-dom'

import { ContactForm } from '@/components/ContactForm'

import { Button } from '@/ui/components'
import { Spinner } from '@/ui/components/Spinner/Spinner.component'

import type { CustomPopupProps } from '@/interfaces/CustomPopup.props'
import { Popup } from '@/components/Popup/Popup.component'
import { PopupBody } from '@/components/PopupBody/PopupBody.component'
import { PopupFooter } from '@/components/PopupFooter/PopupFooter.component'

import styles from './ContactForm.module.scss'
import type { ReactNode } from 'react'

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
