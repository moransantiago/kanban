export interface Card {
	id: number
	title: string
	subtitle: string
	description: string
}

export interface Column {
	id: number
	title: string
	cards: Card[]
}

export interface Board {
	id: number
	owner: number
	columns: Column[]
}
