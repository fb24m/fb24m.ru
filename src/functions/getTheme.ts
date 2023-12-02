import { cookies } from 'next/headers';

export const getTheme = (): string => cookies().get('color-theme') ? cookies().get('color-theme')?.value! : 'dark';