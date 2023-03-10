import React, { useContext } from "react"
import { useDrag } from "react-dnd"
import { ItemTypes } from "../constants/ItemTypes"
import KanbanBoard from "./KanbanBoard"
import { TicketDataContext  } from "../App"

export default function Kanban(prop) {

	const { ticketData } = useContext(TicketDataContext );

	console.log(ticketData, ticketData.statuses)
	// const tickets = prop.tickets
	// const priorities = prop.priorities
	// const categories = prop.categories
	// const statuses = prop.statuses
	// console.log(tickets)

	return Object.keys(ticketData.statuses).map(statusKey => (
		console.log(statusKey),
		<KanbanBoard>
			key={statusKey}
			status={ticketData.statuses[statusKey].label}
		</KanbanBoard>
	))
}
