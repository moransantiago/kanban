import { motion } from 'framer-motion';

interface CardProps {
	id: number
	title: string
	subtitle?: string
	body?: string
	isBeingDragged?: boolean
	passRef?: (element: HTMLElement | null) => any
	onClick?: () => any
}

export const Card: React.FC<CardProps> = ({
	id,
	title,
	subtitle = '',
	body = '',
	children,
	passRef,
	...props
}) => (
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
				opacity: 0.8
			}}
			layoutId={id.toString()}
			className="shadow-md p-2 rounded-sm bg-gray-200 relative"
		>
			<motion.p
				className="font-bold"
			>
				{title}
			</motion.p>
			<motion.p>{subtitle}</motion.p>
			<motion.p>{body}</motion.p>
			{children}
		</motion.div>
	</div>
);
