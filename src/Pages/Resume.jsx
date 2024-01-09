import { Image, Link } from '@nextui-org/react'
import { skills } from '../lib'
import pdf from '/resume.pdf'

const Resume = () => {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center mx-auto bg-cover bg-[url('/images/bg-blur.png')]">
			<div className='flex flex-col items-center justify-center max-w-screen-xl px-4 gap-10'>
				<h1 className='text-2xl md:text-4xl text-white'>Resume</h1>
				<p className='text-3xl md:text-5xl font-extrabold capitalize text-center'>
					Creating apps with modern technologies
				</p>
				<section className='flex flex-wrap max-w-screen-lg justify-center gap-10 pt-10 items-center'>
					{skills.map((skill, index) => (
						<Image
							key={index}
							src={`/images/skills/${skill.img}`}
							height={skill.height}
							width={skill.width}
							className='h-12 md:h-auto'
						/>
					))}
				</section>
				<Link href={pdf} download='Brandon Mullins Resume.pdf' color='foreground' isBlock size='lg' className='font-medium'>
					Download My Resume 
				</Link>
			</div>
		</main>
	)
}

export default Resume
