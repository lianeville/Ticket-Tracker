import React from "react"
import { useDrag, useDrop } from "react-dnd"
import { ItemTypes } from "../constants/ItemTypes";

export default function Ticket({id, label, category, priorityColor, isDragging, text}) {

	const [{ opacity }, dragRef] = useDrag(
		() => ({
			type: ItemTypes.CARD,
			item: { text },
			collect: (monitor) => ({
				opacity: monitor.isDragging() ? 0.5 : 1
			})
		}),
		[]
	)

	return (
		<div className='p-1'>
			<div className="flex border p-2 rounded-md shadow-md bg-white" style={{ opacity }} ref={dragRef} >
				<div className={`${priorityColor} w-2 rounded mr-1`}></div>
				<div>
					<span>{label}</span>
					<div className='flex'>
						<span className="font-bold mr-1">#{id}</span>
						<span>{category}</span>
					</div>
				</div>
			</div>
		</div>
	)
}