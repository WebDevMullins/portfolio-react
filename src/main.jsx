import React from 'react'
import ReactDOM from 'react-dom/client'
// BrowserRouter from React Router for handling client-side routing
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

// Using ReactDOM.createRoot to render the app in the 'root' element
ReactDOM.createRoot(document.getElementById('root')).render(
	// Wrapping the entire app in React.StrictMode for additional development features
	<React.StrictMode>
		{/* BrowserRouter to provide client-side routing functionality */}
		<BrowserRouter>
			{/* Main App component that defines the structure of the application */}
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
