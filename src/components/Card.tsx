import { motion } from 'framer-motion';

interface CardProps {
	id: number
	title: string
	subtitle?: string
	body?: string
	passRef?: (element: HTMLElement | null) => any
	onClick?: () => any
}

export const Card = ({
	id,
	title,
	subtitle = '',
	body = '',
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
			className="shadow-md p-2 rounded-sm bg-gray-200 cursor-pointer"
		>
			<motion.h2
				className="font-bold text-lg"
			>
				{title}
			</motion.h2>
			<motion.p
				className="text-md"
			>
				{subtitle}
			</motion.p>
			<motion.p>{body}</motion.p>
		</motion.div>
	</div>
);
