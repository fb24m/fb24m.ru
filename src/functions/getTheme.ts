'use client';

export const getTheme = (): string => localStorage.getItem('color-theme') ? localStorage.getItem('color-theme')! : 'dark';