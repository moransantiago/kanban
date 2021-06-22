import { MdAdd } from 'react-icons/md';
import { BiColumns } from 'react-icons/bi';

export const NewColumn = (): JSX.Element => (
	<div
		className="p-2 pb-4 mx-2 w-72 rounded-sm mt-2 bg-white h-full min-w-[300px]"
	>
		<button
			className="p-1 border-2 hover:bg-gray-200 bg-gray-100 active:border-gray-200 w-full rounded-sm focus:outline-none flex items-center justify-start"
			onClick={(): void => {}}
		>
			<MdAdd
				className="mx-2 text-gray-700"
			/>
			<p
				className="text-gray-700"
			>
					Add new column
			</p>
			<BiColumns
				className="mx-2 text-gray-700"
			/>
		</button>
	</div>
);
