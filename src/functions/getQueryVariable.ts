export const getQueryVariable = (name: string): string => {
	const vars: string = location.search.replace('?', '');
	const varsList: string[] = vars.split('&');

	for (let i = 0; i < varsList.length; i++) {
		const varEl = varsList[i];
		const thisName = varEl.split('=')[0];
		const thisValue = varEl.split('=')[1];

		if (thisName === name) return thisValue;
	}

	return '';
}