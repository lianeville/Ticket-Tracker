import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants/ItemTypes";
import Ticket from "./Ticket";

export default function KanbanBoard(prop) {
	const tickets = prop.tickets;
	const priorities = prop.priorities;
	const categories = prop.categories;
	console.log('aa', tickets);

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
	);
}
