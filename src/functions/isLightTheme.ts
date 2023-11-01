'use client';

export const isLightTheme = (): boolean => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('color-theme') === 'light';
	}
	return true;
}