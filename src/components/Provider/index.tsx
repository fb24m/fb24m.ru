'use client'

import { SettingsProvider } from '@/contexts/SettingsProvider';
import React from 'react';

export const Provider = ({ children }: { children: React.ReactNode }): React.ReactElement => (
	<SettingsProvider>

		{children}
	</SettingsProvider>
);
