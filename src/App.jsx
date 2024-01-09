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
	const navigate = useNavigate()

	return (
		<>
			<NextUIProvider navigate={navigate}>
				<Header />
				<Routes>
					<Route path='/' element={<Navigate to='aboutme' />} />
					<Route path='aboutme' element={<About />} />

					<Route element={<Layout />}>
						<Route path='portfolio' element={<Portfolio />} />
						<Route path='contact' element={<Contact />} />
						<Route path='resume' element={<Resume />} />
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
				<Footer />
			</NextUIProvider>
		</>
	)
}

export default App
