import { NextUIProvider } from '@nextui-org/react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/ui/Layout'

function App() {
	// React Router hook for programmatic navigation
	const navigate = useNavigate()

	return (
		<>
			{/* NextUIProvider to provide the NextUI theme and navigation context */}
			<NextUIProvider navigate={navigate}>
				<Header />
				<Routes>
					{/* Default route redirects to 'aboutme' */}
					<Route path='/' element={<Navigate to='aboutme' />} />
					<Route path='aboutme' element={<About />} />

					{/* Route for pages that share a common layout (portfolio, contact, resume) */}
					<Route element={<Layout />}>
						<Route path='portfolio' element={<Portfolio />} />
						<Route path='contact' element={<Contact />} />
						<Route path='resume' element={<Resume />} />
						{/* Catch-all route for any undefined paths, showing an error page */}
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
				<Footer />
			</NextUIProvider>
		</>
	)
}

export default App
