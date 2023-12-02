'use client'

import { Telegram } from '@/services/Telegram'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export const DataSend = ({ send }: { send: Function }) => {
	const params = useSearchParams()

	send(`Переход на  из ${params.get('source')}`)

	return <></>
}