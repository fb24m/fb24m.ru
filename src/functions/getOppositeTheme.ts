import { isLightTheme } from "./isLightTheme";

export const getOppositeTheme = (): string => isLightTheme() ? 'dark' : 'light'; 