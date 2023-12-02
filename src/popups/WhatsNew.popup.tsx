import { Popup } from '@/components/Popup/Popup.component';
import { PopupBody } from '@/components/PopupBody/PopupBody.component';
import { PopupFooter } from '@/components/PopupFooter/PopupFooter.component';
import { CustomPopupProps } from '@/interfaces/CustomPopup.props';
import { Wordpress } from '@/services/Wordpress';

import React from 'react'

export const WhatsNewPopup = async (props: CustomPopupProps) => {
	const content = await Wordpress.getGlobalFileBySlug('changelog');

	if (content)
		return (<Popup trigger={props.trigger}>
			<PopupBody>
				<div className="eval" dangerouslySetInnerHTML={{ __html: content[0].content.rendered }}></div>
			</PopupBody>
			<PopupFooter></PopupFooter>
		</Popup>)
}