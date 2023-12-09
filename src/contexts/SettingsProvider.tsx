import { type ReactNode, type ReactElement, createContext } from 'react'
import { Wordpress } from '../services/Wordpress'

const defaultSettings = { name: '...', description: '...', site_icon_url: '...' }

export const SettingsContext = createContext(defaultSettings)

export const SettingsProvider = async (props: { children: ReactNode }): Promise<ReactElement> => {
	const settings = await Wordpress.getSettings()

	return (
		<SettingsContext.Provider value={settings}>{props.children}</SettingsContext.Provider>
	)
}
