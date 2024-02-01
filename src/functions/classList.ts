export const classList = (...args: Array<string | undefined>): { className: string } => {
	return { className: args.filter(arg => arg).join(' ') }
}
