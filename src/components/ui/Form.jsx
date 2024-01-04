import { Button, Input, Textarea } from '@nextui-org/react'
import { Mail } from 'lucide-react'
import { useState } from 'react'

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleInputChange = (field, value) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value
		}))
	}

	const handleSubmit = () => {
		console.log(formData)
		setFormData({
			name: '',
			email: '',
			message: ''
		})
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
		]
	}
	return (
		<form action='' className='flex flex-wrap gap-4'>
			<Input
				isRequired
				type='text'
				label='Name'
				labelPlacement='outside'
				placeholder='Enter your name'
				value={formData.name}
				onChange={(e) => handleInputChange('name', e.target.value)}
				classNames={options}
			/>
			<Input
				isRequired
				type='email'
				label='Email'
				labelPlacement='outside'
				placeholder='you@example.com'
				endContent={<Mail />}
				value={formData.email}
				onChange={(e) => handleInputChange('email', e.target.value)}
				classNames={options}
			/>
			<Textarea
				isRequired
				type='text'
				label='Message'
				labelPlacement='outside'
				placeholder='Enter your message'
				value={formData.message}
				onChange={(e) => handleInputChange('message', e.target.value)}
				classNames={options}
			/>
			<Button onClick={handleSubmit} className='bg-gradient-to-tl from-transparent to-red-700'>
				Submit
			</Button>
		</form>
	)
}

export default Form
