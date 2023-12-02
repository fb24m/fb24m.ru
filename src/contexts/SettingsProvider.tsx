import { ReactNode, createContext } from 'react';
import { Wordpress } from '../services/Wordpress';

const defaultSettings = { name: '...', description: '...', site_icon_url: '...' }

export const SettingsContext = createContext(defaultSettings);

export const SettingsProvider = async (props: { children: ReactNode }) => {
	const settings = await Wordpress.getSettings()

	if (!settings) return <SettingsContext.Provider value={defaultSettings}>{props.children}</SettingsContext.Provider>

	return (
		<SettingsContext.Provider value={settings}>{props.children}</SettingsContext.Provider>
	);
};