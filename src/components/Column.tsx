import clsx from 'clsx';
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';

interface ColumnProps {
	title: string
	subtitle?: string | JSX.Element
	isDraggingOver?: boolean
	passRef: (element: HTMLElement | null) => any
	handleAddCard: React.MouseEventHandler<HTMLSpanElement>
}

export const Column: React.FC<ColumnProps> = ({
	title, subtitle = '', isDraggingOver, children, passRef, handleAddCard, ...props
}) => {
	const [input, setTitle] = useState(title);

	return (
		<div
			ref={passRef}
			{...props}
			className={clsx(!isDraggingOver && 'bg-gray-600', 'p-2 pb-4 m-2 mb-6 w-72 rounded-sm bg-white h-full min-w-[300px]')}
		>
			<header
				className="flex flex-row mb-2 justify-center items-center"
			>
				<input
					onChange={(e): void => setTitle(e.target.value)}
					className=" w-11/12 cursor-pointer px-2 border-2 rounded-sm border-white focus:ring-2 ring-gray-200 focus:bg-gray-100 focus:border-gray-300 font-bold text-2xl text-gray-900 py-0.5 focus:outline-none"
					type="text"
					value={input}
				/>
				<button
					className="rounded-sm p-2 ml-2 hover:bg-gray-300 focus:outline-none h-8 w-8 flex justify-center items-center"
				>
					<HiDotsVertical />
				</button>
			</header>
			{subtitle}
			{children}
			<button
				className="p-1 border-2 hover:bg-gray-200 bg-gray-100 active:border-gray-200 w-full rounded-sm focus:outline-none flex items-center justify-start"
				onClick={handleAddCard}
			>
				<MdAdd
					className="mx-2 text-gray-700"
				/>
				<p
					className="text-gray-700"
				>
					Add new card
				</p>
			</button>
		</div>
	);
};
