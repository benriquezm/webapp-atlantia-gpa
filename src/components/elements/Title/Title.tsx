import { TitlePrincipalStyle, TitleSectionsStyle } from './styles';

interface ITitleProps {
	title: string;
	isPrincipal: boolean;
	width: string;
	height: string;
	left: string;
	top: string;
}

const Title = (props: ITitleProps) => {
	const { title, isPrincipal, width, height, left, top } = props;
	return (
		<>
			{isPrincipal ? (
				<TitlePrincipalStyle width={width} height={height} left={left} top={top}>
					{title}
				</TitlePrincipalStyle>
			) : (
				<TitleSectionsStyle width={width} height={height} left={left} top={top}>
					{title}
				</TitleSectionsStyle>
			)}
		</>
	);
};

export default Title;
