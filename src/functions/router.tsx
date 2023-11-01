const getUrl = () => location.search.split('&')[0].split('?')[1];

interface RouteProps {
	url: string | undefined
	component: JSX.Element
}

export const Route = (props: RouteProps): JSX.Element => {
	const page = getUrl();

	return (<>{props.url === page ? props.component : ''} </>);
}