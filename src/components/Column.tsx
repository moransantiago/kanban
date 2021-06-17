import clsx from 'clsx';
import { useState } from 'react';

interface ColumnProps {
	title: string
	isDraggingOver?: boolean
	passRef: (element: HTMLElement | null) => any
	handleAddCard: React.MouseEventHandler<HTMLSpanElement>
}

export const Column: React.FC<ColumnProps> = ({
	title, isDraggingOver, children, passRef, handleAddCard, ...props
}) => {
	const [input, setTitle] = useState(title);

	return (
		<div
			ref={passRef}
			{...props}
			className={clsx(!isDraggingOver && 'bg-gray-600', 'border-2 border-gray-500 p-2 pb-4 mx-2 w-72 rounded-sm mt-2 bg-gray-500 h-full min-w-[300px]')}
		>
			<input
				onChange={(e): void => setTitle(e.target.value)}
				className={clsx(!isDraggingOver && 'bg-gray-600', 'mb-2 cursor-pointer font-bold text-xl rounded text-gray-100 bg-gray-500 hover:bg-gray-700 px-2 py-1 focus:outline-none w-full')}
				type="text"
				value={input}
			/>
			{children}
			<button
				className="p-1 cursor-pointer focus:border-dashed w-full active:shadow-md rounded-md bg-blue-500 active:bg-blue-600 focus:outline-none"
				onClick={handleAddCard}
			>
				<p
					className="text-white"
				>
					Add a new card
				</p>
			</button>
		</div>
	);
};
