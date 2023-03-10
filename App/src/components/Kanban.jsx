import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants/ItemTypes";
import KanbanBoard from "./KanbanBoard";

export default function Kanban(prop) {
	const tickets = prop.tickets;
	const priorities = prop.priorities;
	const categories = prop.categories;
	const statuses = prop.statuses;
	console.log(tickets);

	return (
		Object.keys(statuses).map(statusKey => (
			<KanbanBoard
				key={statusKey}
				priorities={priorities}
				categories={categories}
				tickets={tickets}
				status={statuses[statusKey].label}
			/>
		))
	)

}