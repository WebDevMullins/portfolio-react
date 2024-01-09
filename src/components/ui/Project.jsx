import { Card, CardBody, CardFooter, Image, Link } from '@nextui-org/react'
import { Github } from 'lucide-react'
import PropTypes from 'prop-types'

const Project = ({ title, github, href, img }) => {
	// PropType validation for the Project component
	Project.propTypes = {
		title: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired
	}

	return (
		// Card component from NextUI for displaying a project card
		<Card shadow='sm' isPressable onPress={() => (window.location.href = href)} className='hover:scale-105'>
			{/* CardBody component for the body of the card */}
			<CardBody className='overflow-visible p-0'>
				{/* Image component for displaying the project image */}
				<Image
					shadow='sm'
					radius='lg'
					width='100%'
					alt={title}
					src={`/images/${img}`}
					className='w-full object-cover h-[200px]'
				/>
			</CardBody>
			{/* CardFooter component for the footer of the card */}
			<CardFooter className='text-small justify-between'>
				<b>{title}</b>
				<Link href={github}>
					<Github className='text-white' />
				</Link>
			</CardFooter>
		</Card>
	)
}

export default Project
