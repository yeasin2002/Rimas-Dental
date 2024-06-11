interface SingleServicesProps {
	params: {
		id: string;
	};
}

const SingleServices = ({ params }: SingleServicesProps) => {
	return (
		<div>
			SingleServices
			<p>Params :{params.id}</p>
		</div>
	);
};

export default SingleServices;
