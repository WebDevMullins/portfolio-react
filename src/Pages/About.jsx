import { Image } from '@nextui-org/react'
import Particle from '../components/Particles'

const About = () => {
	return (
		<main className="flex items-center h-screen relative bg-cover bg-[url('assets/bg-explosion.png')]">
			<div className='absolute right-0 h-full w-[80%] z-[2]'>
				<Particle />
			</div>
			<div className='absolute right-10 md:right-40 bottom-0 z-[10]'>
				<Image
					src='src/assets/avatar.png'
					alt='Avatar pic'
					width={560}
					height={560}
					className='w-[300] h-[300] z-[1] md:w-[560] md:h-[560]'
				/>
			</div>
		</main>
	)
}

export default About
