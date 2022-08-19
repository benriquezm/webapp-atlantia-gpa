interface ITitleProps {
	title: string;
}

const Title = (props: ITitleProps) => {
	const { title } = props;
	return <div>{title}</div>;
};

export default Title;
