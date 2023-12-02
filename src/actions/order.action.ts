'use server'

import { Telegram } from "@/services/Telegram";

export const order = async (formData: FormData) => {
	Telegram.sendMessage(`Заказ от ${formData.get('name')}. Контакт: ${formData.get('contact')}. Сообщение: ${formData.get('message')}`)
}