import React from 'react';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

import { Card } from '../types';

interface BigCardProps {
	Card: Card
	onClose: () => any
}

export const BigCard = ({ Card, onClose }: BigCardProps): JSX.Element => (
	<div
		className="z-20 absolute inset-0 bg-opacity-80 bg-gray-900 flex items-center justify-center"
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
			className="p-10 rounded-sm bg-gray-200 relative lg:w-4/6 lg:h-3/5 md:w-11/12 md:h-4/5 sm:w-10/12 sm:h-3/4 flex flex-row"
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
				className="rounded-full p-2 hover:bg-gray-300 focus:outline-none h-8 w-8 flex justify-center items-center absolute top-2 right-2"
			>
				<MdClose />
			</motion.button>
		</motion.div>
	</div>
);
