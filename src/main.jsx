import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		errorElement: <ErrorPage />,
// 		children: [
// 			{
// 				path: 'about',
// 				element: <About />
// 			},
// 			{
// 				path: 'contact',
// 				element: <Contact />
// 			},
// 			{
// 				path: 'portfolio',
// 				element: <Portfolio />
// 			},
// 			{
// 				path: 'resume',
// 				element: <Resume />
// 			}
// 		]
// 	}
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App className='h-screen' />
		</BrowserRouter>
	</React.StrictMode>
)
