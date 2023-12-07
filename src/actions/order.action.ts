'use server'

import { Telegram } from "@/services/Telegram";

export const order = async (formData: FormData) => {
	try {
		const send = await Telegram.sendMessage(`Заказ от ${formData.get('name')}. Контакт: ${formData.get('contact')}. Сообщение: ${formData.get('message')}`)
		if (send.ok) {
			const response = await send.json()
			console.log(response)
		}
	}
	catch {
		console.log('ooh')
	}

}