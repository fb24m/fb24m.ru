'use client'

import { order } from "@/actions/order.action"
import { ContactForm } from "@/components/ContactForm"
import { Popup } from "@/components/Popup/Popup.component"
import { PopupBody } from "@/components/PopupBody/PopupBody.component"
import { PopupFooter } from "@/components/PopupFooter/PopupFooter.component"
import { CustomPopupProps } from "@/interfaces/CustomPopup.props"
import { Telegram } from "@/services/Telegram"
import { Button } from "@/ui/components"
import { Spinner } from "@/ui/components/Spinner/Spinner.component"
import { revalidatePath } from "next/cache"
import { useFormState, useFormStatus } from "react-dom"

import styles from './ContactForm.module.scss'

interface ContactFormPopupProps extends CustomPopupProps {
}

const SendButton = () => {
	const formStatus = useFormStatus()

	return (
		<Button className={`${styles.sendButton}`} type="submit" appearance="Primary">
			{formStatus.pending ? <Spinner size={20} /> : 'Отправить'}
		</Button>
	)
}

export const ContactFormPopup = (props: ContactFormPopupProps) => {
	return (<form action={order}>
		<Popup trigger={props.trigger}>
			<PopupBody>
				<ContactForm />
			</PopupBody>
			<PopupFooter>
				<SendButton />
			</PopupFooter>

		</Popup>
	</form>
	)
}