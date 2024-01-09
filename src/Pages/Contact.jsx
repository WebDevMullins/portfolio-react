import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useDisclosure } from '@nextui-org/react'
import Form from '../components/ui/Form'
import FormModal from '../components/ui/Modal'
import { useState } from 'react'

const formSchema = z.object({
	name: z.string().min(4, 'Name must be at least 4 characters'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(8, 'Message must be at least 8 characters'),
	company: z.string().min(3, 'Company must be at least 3 characters')
})

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset
	} = useForm({
		mode: 'onBlur',
		resolver: zodResolver(formSchema)
	})

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [formData, setFormData] = useState(null)
	const onSubmit = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		console.log(data)
		setFormData(data)
		reset()
		onOpen(isSubmitSuccessful)
	}

	return (
		<main className="flex w-full h-dvh flex-col items-center justify-center mx-auto px-8 bg-cover bg-[url('/images/bg-blur.png')]">
			<div className='flex flex-col items-center gap-y-10'>
				<h1 className='text-2xl md:text-5xl'>Contact</h1>
				<p className='flex text-3xl md:text-6xl font-extrabold capitalize'>Get in touch with me</p>
				<Form
					register={register}
					handleSubmit={handleSubmit}
					errors={errors}
					isSubmitting={isSubmitting}
					onSubmit={onSubmit}
				/>
			</div>
			<FormModal isOpen={isOpen} onClose={onClose} data={formData} />
		</main>
	)
}

export default Contact
