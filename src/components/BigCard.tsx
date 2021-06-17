import React from 'react';
import { motion } from 'framer-motion';

import { Card } from '../types';

interface BigCardProps {
	Card: Card
	onClose: () => any
}

export const BigCard = ({ Card, onClose }: BigCardProps): JSX.Element => (
	<div
		className="fixed bg-opacity-80 w-full h-full bg-gray-900 flex items-center justify-center"
		onClick={onClose}
	>
		<motion.div
			onClick={(e): void => e.stopPropagation()}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.15,
					delay: 0.15
				}
			}}
			transition={{
				duration: 0.15,
				delay: 0.15
			}}
			className="p-3 rounded-sm bg-gray-200 relative md:w-4/6 md:h-3/5 sm:w-10/12 sm:h-3/4 flex flex-row lg:w-3/6 lg:h-2/5"
			layoutId={Card.id.toString()}
		>
			<div
				className="w-3/4 flex flex-col"
			>
				<motion.input
					className="p-3 mb-2 font-bold text-xl focus:outline-none bg-gray-300 w-full rounded-md"
					type="text"
					value={Card.title}
				/>
				<motion.input
					className="p-2 mb-2 text-md focus:outline-none bg-gray-300 w-full rounded-md"
					type="text"
					value={Card.subtitle}
				/>
				<label
					className="font-semibold mb-2"
				>
Description
				</label>
				<textarea
					className="resize-none h-full p-2 rounded-md text-md focus:outline-none bg-gray-300 w-full"
					value={Card.description}
				/>
			</div>
			<div
				className="w-[2px] bg-gray-400 rounded-xl mx-4"
			/>
			<div
				className="w-1/4 rounded-md bg-gray-300 p-2 mr-2"
			>
Info
			</div>
			<motion.button
				onClick={onClose}
				className="rounded-md p-2 hover:bg-gray-300 focus:outline-none h-8 w-8 flex justify-center items-center"
			>
x
			</motion.button>
		</motion.div>
	</div>
);
