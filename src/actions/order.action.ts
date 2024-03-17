'use server'

import { telegram } from '@/services/Telegram'

export const order = async (formData: FormData): Promise<void> => {
	const rawData = {
		name: formData.get('name') as string,
		contact: formData.get('contact') as string,
		message: formData.get('message') as string
	}

	try {
		const send = await telegram.sendMessage(`Заказ от ${rawData.name}. Контакт: ${rawData.contact}. Сообщение: ${rawData.message}`)

		if (send.ok) {
			const response = await send.json()

			console.log(response)
		}
	} catch {
		console.log('[Order Server Action] Catch error')
	}
}
