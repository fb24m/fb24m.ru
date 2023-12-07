import { CustomPopupProps } from '@/interfaces/CustomPopup.props'

import React from 'react'
import { ContactFormPopup } from './ContactForm.popup'

export const ContactPopup = (props: CustomPopupProps) => {
	return (<ContactFormPopup {...props} />)
}