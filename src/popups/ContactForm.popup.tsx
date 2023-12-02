'use client'

import { order } from "@/actions/order.action"
import { ContactForm } from "@/components/ContactForm"
import { Popup } from "@/components/Popup/Popup.component"
import { PopupBody } from "@/components/PopupBody/PopupBody.component"
import { PopupFooter } from "@/components/PopupFooter/PopupFooter.component"
import { CustomPopupProps } from "@/interfaces/CustomPopup.props"
import { Button } from "@/ui/components"
import { ReactNode } from "react"

interface ContactFormPopupProps extends CustomPopupProps {
	setPage: Function;
	page: ReactNode;
}

export const ContactFormPopup = (props: ContactFormPopupProps) => {


	return (<form action={order}>
		<Popup trigger={props.trigger}>
			<PopupBody>
				<ContactForm />
			</PopupBody>
			<PopupFooter>
				<Button type="submit" appearance="Primary" onClick={() => alert('Форма отправлена')}>Отравить</Button>
			</PopupFooter>

		</Popup>
	</form>
	)
}