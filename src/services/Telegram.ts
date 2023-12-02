
export const TOKEN = process.env.TELEGRAM_TOKEN;
export const API = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}`;

console.log(TOKEN);

export const Telegram = {
	sendMessage: async (text: string) => { 'use server'; await fetch(`${API}&text=${text}`) }
}