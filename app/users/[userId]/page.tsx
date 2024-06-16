// Params in Nextjs routing

// Props type
interface UserIdPageProps {
	params: {
		// Name of the folder containing the params - [userId]
		userId: string;
	};
}

// Page Section
const Page = ({ params }: UserIdPageProps) => {
	return (
		<div>
			<h4>Params: {params.userId}</h4>
		</div>
	);
};

export default Page;
