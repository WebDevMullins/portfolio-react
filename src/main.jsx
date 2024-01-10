import ReactDOM from 'react-dom/client'

import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'

import App from './App'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/Error'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import Layout from './components/ui/Layout'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={
				<>
					<App />
					{['/portfolio', '/contact', '/resume'].includes(window.location.pathname) ? null : <Navigate to="/aboutme" replace />}
				</>
			}
			errorElement={<ErrorPage />}>
			<Route path='aboutme' element={<About />} />
			<Route path='*' element={<ErrorPage />} />

			<Route element={<Layout />} errorElement={<ErrorPage />}>
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/resume' element={<Resume />} />
			</Route>
		</Route>
	)
)

// Using ReactDOM.createRoot to render the app in the 'root' element
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
