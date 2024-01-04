import { Card, CardFooter, Image, Link } from '@nextui-org/react'
import { Github } from 'lucide-react'
import PropTypes from 'prop-types'

const Project = ({ title, github, href, img, tech }) => {
	Project.propTypes = {
		title: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
		href: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		tech: PropTypes.string.isRequired,
	}
	return (
		<Card isFooterBlurred className='w-full h-[225px] group'>
			{/* <CardHeader className='absolute z-10 top-1 flex-col items-start'>
				<h4 className='text-white font-medium text-2xl'>Average Joes</h4>
				<p className='text-tiny text-white/60 uppercase font-bold'>New</p>
			</CardHeader> */}
			<Link href={href}>
				<Image
					removeWrapper
					alt={title}
					className='z-0 w-full h-[110%] scale-150 translate-y-8 object-cover'
					src={img}
				/>
			</Link>
			<CardFooter className='absolute md:hidden group-hover:flex h-11 bottom-0 z-10 justify-between backdrop-blur-lg inset-x-0 backdrop-saturate-150 bg-transparent'>
				<div>
					<p className='text-white text-sm'>{title}</p>
					<p className='text-white text-tiny'>{tech}</p>
				</div>
				<Link href={github}>
					<Github className='text-white' />
				</Link>
			</CardFooter>
		</Card>
	)
}

export default Project
