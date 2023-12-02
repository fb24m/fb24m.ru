'use client'

import { CustomPopupProps } from '@/interfaces/CustomPopup.props'

import React, { ReactNode, useState } from 'react'
import { ContactFormPopup } from './ContactForm.popup'

export const ContactPopup = (props: CustomPopupProps) => {
	const [page, setPage] = useState<ReactNode | false>(false);

	return (<ContactFormPopup setPage={setPage} page={page} {...props} />)
}