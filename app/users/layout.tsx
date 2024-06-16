// Layout props
interface LayoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex flex-col w-full">
			{/* Navbar */}
			<div className="w-full text-center bg-red-500 text-white">
				Navbar inside the layout of &apos;/users&apos; route
			</div>

			{/* Children of the layout */}
			{children}
		</div>
	);
};

export default layout;
