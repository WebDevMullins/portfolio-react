import { Card, CardBody, CardFooter, Image, Link } from '@nextui-org/react'
import { Github } from 'lucide-react'
import PropTypes from 'prop-types'

const Project = ({ title, github, href, img }) => {
	Project.propTypes = {
		title: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired
	}
	return (
		<Card shadow='sm' isPressable onPress={() => (window.location.href = href)} className='hover:scale-105'>
			<CardBody className='overflow-visible p-0'>
				<Image
					shadow='sm'
					radius='lg'
					width='100%'
					alt={title}
					src={`/images/${img}`}
					className='w-full object-cover h-[200px]'
				/>
			</CardBody>
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
