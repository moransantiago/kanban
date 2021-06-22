export type User = {
	id: number
	email: string
	firstName: string
	lastName: string
	username: string
	color: string
}

export type Card = {
	id: number
	title: string
	subtitle: string
	description: string
	creator: User
}

export type Column = {
	id: number
	title: string
	cards: Card[]
}

export type Board = {
	id: number
	owner: number
	columns: Column[]
}
