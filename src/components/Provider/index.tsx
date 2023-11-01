'use client'

import { SettingsProvider } from '@/contexts/SettingsProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export const Provider = ({ children }: { children: React.ReactNode }): React.ReactElement => {

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<SettingsProvider>

				{children}

			</SettingsProvider>
		</QueryClientProvider>
	);
};