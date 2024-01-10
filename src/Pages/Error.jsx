import { Button, Link } from '@nextui-org/react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<main className="min-h-screen flex flex-col items-center justify-center mx-auto bg-cover bg-[url('/images/bg-blur.png')]">
			<section id='error-page' className='flex flex-col items-center gap-y-10'>
				<h1 className='text-6xl'>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
				<Button href='/' as={Link} className='bg-red-700'>
					Back to Home
				</Button>
			</section>
		</main>
	)
}
