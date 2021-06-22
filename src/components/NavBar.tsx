import Image from 'next/image';
import Link from 'next/link';
import { MdArrowBack, MdMenu } from 'react-icons/md';

export const NavBar = (): JSX.Element => (
	<nav
		className="z-10 shadow-md fixed h-[50px] w-full bg-white flex justify-between items-center"
	>
		<span
			className="cursor-pointer flex items-center text-purple-700 font-bold hover:bg-gray-50 h-full px-2"
		>
			<MdArrowBack
				className="mr-2"
				size={20}
			/>
			<Link
				href="/"
			>
				<a>Back to my boards</a>
			</Link>
		</span>
		<Image
			src="/kanban.png"
			width={100}
			height={50}
		/>
		<button
			className="cursor-pointer mr-2 hover:bg-gray-100 focus:outline-none ring-purple-300 focus:ring-2 rounded-sm p-1"
		>
			<MdMenu
				size={25}
				className="text-purple-700"
			/>
		</button>
	</nav>
);
