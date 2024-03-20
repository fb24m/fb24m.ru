'use client'

import dynamic from 'next/dynamic'

import type { CustomPopupProps } from '@/interfaces/CustomPopup.props'

import type { ReactNode } from 'react'
import { Order } from '@/widgets/Order/ui'

const Popup = dynamic(() => import('@/shared/ui/components/Popup/Popup.component'))
const PopupBody = dynamic(() => import('@/shared/ui/components/PopupBody/PopupBody.component'))
const PopupFooter = dynamic(() => import('@/shared/ui/components/PopupFooter/PopupFooter.component'))

const ContactPopup = (props: CustomPopupProps): ReactNode => {
	return (
		<Popup trigger={props.trigger}>
			<PopupBody>
				<Order vertical />
			</PopupBody>
			<PopupFooter>
			</PopupFooter>
		</Popup>
	)
}

export default ContactPopup
