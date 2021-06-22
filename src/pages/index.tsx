import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, resetServerContext } from 'react-beautiful-dnd';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { GetStaticProps } from 'next';
import { BsCardHeading } from 'react-icons/bs';

import { Card as CardComp } from '../components/Card';
import { Column } from '../components/Column';
import { BigCard } from '../components/BigCard';
import { NewColumn } from '../components/NewColumn';
import { NavBar } from '../components/NavBar';

import MyBoards from '../lib/mock/boards.json';
import { Board, Card } from '../types';

const index = (): JSX.Element => {
	const [board, setBoard] = useState<Board>(MyBoards[0]);
	const [openedCard, setOpenedCard] = useState<Card | null>(null);

	const handleAddCard = (columnIndex: number): void => {
		setBoard((prevBoard) => {
			const board = { ...prevBoard };
			const card = {
				id: 17,
				title: 'Loren ipsum',
				subtitle: 'Dolor sit amet',
				description: '',
				creator: {
					id: 2,
					email: 'lorem@a.net',
					firstName: 'Charlie',
					lastName: 'Simmons',
					username: 'nisi',
					color: '#7f32a8'
				}
			};

			board.columns[columnIndex].cards.push(card);

			return board;
		});
	};

	const orderCards = (cardList: Card[], startIndex: number, endIndex: number): Card[] => {
		const result = [...cardList];
		const [removed] = result.splice(startIndex, 1);

		result.splice(endIndex, 0, removed);

		return result;
	};

	const onDragEnd = ({ source, destination }: DropResult): void => {
		if (!destination) {
			return;
		}

		setBoard((prevBoard) => {
			const board = { ...prevBoard };
			const indexOfSourceColumn = parseInt(source.droppableId);
			const indexOfTargetedColumn = parseInt(destination.droppableId);
			const sourceColumn = board.columns[indexOfSourceColumn];
			const destinationColumn = board.columns[indexOfTargetedColumn];

			if (sourceColumn !== destinationColumn) {
				destinationColumn.cards = [sourceColumn.cards[source.index], ...destinationColumn.cards];
				sourceColumn.cards.splice(source.index, 1);
				source.index = 0;
			}

			const orderedCards = orderCards(destinationColumn.cards, source.index, destination.index);

			board.columns[indexOfTargetedColumn].cards = orderedCards;

			return board;
		});
	};

	return (
		<>
			<NavBar />
			<div
				className="flex bg-purple-200 min-h-screen min-w-min h-full w-full pt-[50px]"
			>
				<AnimateSharedLayout
					type="crossfade"
				>
					<DragDropContext
						onDragEnd={onDragEnd}
					>
						{board.columns.map((column, index) => (
							<Droppable
								key={column.id}
								droppableId={index.toString()}
							>
								{(provided, snapshot): React.ReactElement<HTMLElement> => (
									<Column
										{...provided.droppableProps}
										title={column.title}
										subtitle={
											<span
												className="flex items-center w-full mb-2 text-gray-600"
											>
												<p>{column.cards.length}</p>
												<BsCardHeading
													className="mx-2 text-gray-700"
												/>
											</span>
										}
										passRef={provided.innerRef}
										isDraggingOver={snapshot.isDraggingOver}
										handleAddCard={(): void => handleAddCard(index)}
									>
										{column.cards.map((card, index) => (
											<Draggable
												key={card.id}
												draggableId={card.id.toString()}
												index={index}
											>
												{(provided): React.ReactElement => (
													<CardComp
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														id={card.id}
														title={card.title}
														subtitle={card.subtitle}
														creator={card.creator}
														passRef={provided.innerRef}
														onClick={(): void => setOpenedCard(card)}
													/>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</Column>
								)}
							</Droppable>
						))}
						<NewColumn />
					</DragDropContext>
					<AnimatePresence>
						{openedCard && (
							<BigCard
								Card={openedCard}
								onClose={(): void => setOpenedCard(null)}
							/>
						)}
					</AnimatePresence>
				</AnimateSharedLayout>
			</div>
		</>
	);
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
	resetServerContext();

	return { props: {} };
};
