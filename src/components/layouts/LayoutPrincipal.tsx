import Header from '../modules/Header/Header';

//  TODO show separate Interfaces props
interface ILayoutProps {
	children: React.ReactNode;
}

const LayoutPrincipal = (props: ILayoutProps) => {
	return (
		<>
			<base href='/' />
			<Header />
			<main>{props.children}</main>
		</>
	);
};

export default LayoutPrincipal;
