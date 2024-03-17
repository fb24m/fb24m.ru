import Card from '@/shared/ui/components/Card'
import Input from '@/shared/ui/components/Input'
import type { ReactNode } from 'react'
import type { OrderFormProps } from './OrderForm.props'
import Title3 from '@/shared/ui/components/Title3'
import styles from './OrderForm.module.scss'
import { send } from '../model/send'
import { useFormState } from 'react-dom'
import { SubmitButton } from '@/shared/ui/components/SubmitButton'
import { Body1 } from '@/shared/ui/components'
import { Body2 } from '@/shared/ui/components/Body2'

export const OrderForm = ({ message, ...props }: OrderFormProps): ReactNode => {
	const [state, action] = useFormState(send, { ok: false, status: 0, message: '', contact: '' })

	return (
		<Card {...props}>
			<Title3>Отправить заявку</Title3>
			{!state.ok
				? <form action={action} className={styles.form}>
					<Input icon="person" placeholder="Ваше имя" name="name" type="text" id="orderform-email" required />
					<Input icon="alternate_email" placeholder="Email или Telegram" name="contact" type="text" id="orderform-name" required />
					<Input icon="message" placeholder="Сообщение (не обязательно)" name="message" type="text" id="orderform-message" />
					<Body2>
						В сообщении можете указать ссылку на макет, информацию о вашем проекте или любые другие данные
					</Body2>
					<input defaultValue={message} name="order-message" style={{ display: 'none' }} />
					<SubmitButton appearance="Primary" icon="send">Отправить</SubmitButton>
				</form>
				: <>
					<Body1>
						Заявка успешно отправлена! В течение дня отвечу на контакт {state.contact}
					</Body1>
					<Body1>
						Если в рассчете цены вы выбрали неправильную информацию, на создавайте новую заявку, я уточню информацию еще раз.
					</Body1>
				</>
			}

		</Card>
	)
}
