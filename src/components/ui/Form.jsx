import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea } from '@nextui-org/react'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	name: z.string().min(4, 'Name must be at least 4 characters'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(8, 'Message must be at least 8 characters')
})

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm({
		resolver: zodResolver(formSchema)
	})

	const onSubmit = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 5000))
		console.log(data)
		reset()
	}

	const options = {
		label: 'text-black/50 dark:text-white/90',
		input: [
			'bg-transparent',
			'text-black/90 dark:text-white/90',
			'placeholder:text-default-700/50 dark:placeholder:text-white/60'
		],
		innerWrapper: 'bg-transparent',
		inputWrapper: [
			'shadow-xl',
			'bg-default-200/50',
			'dark:bg-default/60',
			'backdrop-blur-md',
			'backdrop-saturate-200',
			'hover:bg-default-200/70',
			'dark:hover:bg-default/70',
			'group-data-[focused=true]:bg-default-200/50',
			'dark:group-data-[focused=true]:bg-default/60',
			'!cursor-text'
		],
		errorMessage: ['w-fit', 'backdrop-blur-sm', 'backdrop-saturate-200', 'rounded-xl', 'p-1', 'text-white', 'text-sm']
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap gap-4'>
			<Input
				{...register('name')}
				isRequired
				type='text'
				label='Name'
				labelPlacement='outside'
				placeholder='Enter your name'
				isInvalid={errors.name?.message}
				errorMessage={errors.name?.message}
				classNames={options}
			/>
			<Input
				{...register('email')}
				isRequired
				type='email'
				label='Email'
				labelPlacement='outside'
				placeholder='you@example.com'
				isInvalid={errors.email?.message}
				errorMessage={errors.email?.message}
				classNames={options}
			/>
			<Textarea
				{...register('message')}
				isRequired
				type='text'
				label='Message'
				labelPlacement='outside'
				placeholder='Enter your message'
				isInvalid={errors.message?.message}
				errorMessage={errors.message?.message}
				classNames={options}
			/>
			<Button
				onClick={handleSubmit(onSubmit)}
				isLoading={isSubmitting}
				endContent={<Send size={20} />}
				className='bg-gradient-to-tl from-transparent to-red-700 font-medium'>
				Submit
			</Button>
		</form>
	)
}

export default Form
