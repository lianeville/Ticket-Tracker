import React, { createContext, useState } from "react"
import reactLogo from "./assets/react.svg"
import Ticket from "./components/Ticket"
import Kanban from "./components/Kanban"
import "./App.css"

export const TicketDataContext  = createContext()

const initialTicketData = {
	priorities: {
		0: { label: "Low", color: "bg-green-400" },
		1: { label: "Medium", color: "bg-yellow-400" },
		2: { label: "High", color: "bg-orange-500" },
		3: { label: "Urgent", color: "bg-red-500" },
	}, statuses: {
		0: { label: "In Progress" },
		1: { label: "In Review" },
		2: { label: "Merged" },
	}, categories: {
		0: { label: "Bug" },
		1: { label: "Feature" },
		2: { label: "Security Vulnerability" },
	}, tickets: [
		{
			id: 0,
			label: "Fix email rendering in company profile page",
			status: 0,
			priority: 0,
			category: 0,
		},
		{
			id: 1,
			label: "Fix Password Login Bypass",
			status: 0,
			priority: 3,
			category: 0,
		},
		{
			id: 2,
			label: "Implement dark mode feature",
			status: 1,
			priority: 1,
			category: 1,
		},
		{
			id: 3,
			label: "Improve password reset page",
			status: 1,
			priority: 0,
			category: 1,
		},
		{
			id: 4,
			label: "Fix XSS vulnerability in search page",
			status: 0,
			priority: 3,
			category: 2,
		},
	]
}

const MyProvider = ({ children }) => {
	const [ticketData, setTicketData] = useState(initialTicketData)

	return (
		<TicketDataContext .Provider value={{ ticketData, setTicketData }}>
			{children}
		</TicketDataContext .Provider>
	)
}

function App() {

	return (
		<div className="App">
			<div className="flex">
				<MyProvider>
					<Kanban />
				</MyProvider>
			</div>
		</div>
	)
}

export default App
