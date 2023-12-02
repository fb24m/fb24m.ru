'use client'

import React, { useEffect } from 'react'

export const DataSend = () => {
	useEffect(() => {
		let vars: any = {}

		try {
			const queryVariables = window?.location?.search?.split('?')[1]?.split('&')
			queryVariables.forEach((variable) => {
				vars[variable.split('=')[0]] = variable.split('=')[1]
			})

			console.log(vars);

			if (Object.keys(vars).includes('source')) {
				console.log('from tenchat')
				fetch(`https://api.telegram.org/bot6338485097:AAGW9HW5F5tv_ZNq-0wTFjK-ERdDfcUQghM/sendMessage?chat_id=872777347&text=Вход+на+${location.href}+из+${vars.source}`)
				// window.location.search = ''
			}
		}
		catch { }
	}, [])

	return <></>
}