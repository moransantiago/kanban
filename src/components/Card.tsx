import { motion } from 'framer-motion';

import { User } from '../types';

interface CardProps {
	id: number
	title: string
	subtitle?: string
	creator: User
	passRef?: (element: HTMLElement | null) => any
	onClick?: () => any
}

export const Card = ({
	id,
	title,
	subtitle = '',
	creator,
	passRef,
	...props
}: CardProps): JSX.Element => (
	<div
		ref={passRef}
		{...props}
		className="mb-2 w-full"
	>
		<motion.div
			drag
			transition={{ duration: 0.1 }}
			whileTap={{
				scale: 1.02,
				rotate: 4,
				opacity: 0.6
			}}
			layoutId={id.toString()}
			className="relative p-3 rounded-sm bg-gray-200 cursor-pointer"
		>
			<motion.p
				className="font-bold text-lg"
			>
				{title}
			</motion.p>
			<motion.p
				className="text-md mb-2"
			>
				{subtitle}
			</motion.p>
			<motion.span
				whileHover={{
					scale: 1.1,
					rotate: '10deg'
				}}
				style={{ backgroundColor: creator.color }}
				className="rounded-full p-1 text-white w-8 h-8 flex justify-center items-center"
			>
				{creator.firstName[0].toLocaleUpperCase() + creator.lastName[0].toLocaleUpperCase()}
			</motion.span>
		</motion.div>
	</div>
);
