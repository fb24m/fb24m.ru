export const exists = <T = string>(str: T | undefined | null): T => str !== null && typeof str !== 'undefined' ? str : '' as T
