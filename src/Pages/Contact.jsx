import Form from '../components/ui/Form'

const Contact = () => {
	return (
		<main className="flex w-full h-dvh flex-col items-center justify-center mx-auto px-8 bg-cover bg-[url('/bg-explosion.png')]">
			<div className='flex flex-col max-w-96 items-center gap-8'>
				<h1 className='text-4xl font-bold'>Contact</h1>
				<Form />
			</div>
		</main>
	)
}

export default Contact
