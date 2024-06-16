// Simple Routes
const page = () => {
	return (
		<div>
			<h4>Test Page</h4>
			<ul>
				<li>
					(test) - hide the &apos;/test&apos; but it will show the subroute inside the folder. This
					is good for organizing your routes folder structure
				</li>
				<li>
					_test - completely hide the routes inside of it. Best for internally used components or
					just personalized for specific paage.
				</li>
			</ul>
		</div>
	);
};

export default page;
