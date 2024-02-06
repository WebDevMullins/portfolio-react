import { NextUIProvider } from '@nextui-org/react'
import { inject } from '@vercel/analytics'
import { Outlet, useNavigate } from 'react-router-dom'

import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'

function App() {
	// React Router hook for programmatic navigation
	const navigate = useNavigate()
	inject()

	return (
		<>
			{/* NextUIProvider to provide the NextUI theme and navigation context */}
			<NextUIProvider navigate={navigate}>
				<Header />
				<Outlet />
				<Footer />
			</NextUIProvider>
		</>
	)
}

export default App
