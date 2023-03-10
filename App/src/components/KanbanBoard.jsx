import React, { useContext } from "react"
import { useDrag } from "react-dnd"
import { ItemTypes } from "../constants/ItemTypes"
import Ticket from "./Ticket"
import { TicketDataContext  } from "../App"

export default function KanbanBoard(prop) {

	const { ticketData } = useContext(TicketDataContext )
	const { tickets, categories, priorities } = ticketData

	return (
		<div>
			<h3 className="text-xl font-bold">{prop.status}</h3>
			{tickets.map(ticket => (
				<Ticket
					key={ticket.id}
					id={ticket.id}
					label={ticket.label}
					category={categories[ticket.category].label}
					priorityColor={priorities[ticket.priority].color}
				/>
			))}
		</div>
	)
}
