export const scrollTo = (el: string) => {
	document.querySelector(el) ? document.querySelector(el)!.scrollIntoView({ behavior: 'smooth' }) : '';
}