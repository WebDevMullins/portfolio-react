// main.tsx or main.jsx
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NextUIProvider>
			<Header />
			<App />
			<Footer />
		</NextUIProvider>
	</React.StrictMode>
)
