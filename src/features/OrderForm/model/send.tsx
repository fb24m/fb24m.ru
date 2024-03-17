'use server'

import type { IResponse } from '@/interfaces/IResponse.interface'
import { telegram } from '@/services/Telegram'

interface ISendOrderResponse extends IResponse {
	contact: string
}

export const send = async (prevState: IResponse, formData: FormData): Promise<ISendOrderResponse> => {
	console.log('its server!')

	const rawData = {
		name: formData.get('name') as string,
		contact: formData.get('contact') as string,
		message: formData.get('message') as string,
		orderMessage: formData.get('order-message') as string
	}

	const response = await telegram.sendMessage(`
		Заказ от ${rawData.name} на контакт ${rawData.contact}. ${rawData.message}. 
		Детали заказа: 
		${rawData.orderMessage}
	`)

	return {
		ok: response.ok,
		status: response.status,
		message: response.statusText,
		contact: rawData.contact
	}
}
