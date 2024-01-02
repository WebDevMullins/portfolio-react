import { NextUIProvider } from '@nextui-org/react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
	const navigate = useNavigate()

	return (
		<>
			<NextUIProvider navigate={navigate}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/aboutme' element={<About />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/resume' element={<Resume />} />
				</Routes>
				<Footer />
			</NextUIProvider>
		</>
	)
}

export default App
