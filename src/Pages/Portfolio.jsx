import Project from '../components/ui/Project'
import { projects } from '../lib/projects'

const Portfolio = () => {
	return (
		<section className='flex flex-col items-center justify-center max-w-screen-xl px-4 gap-10 my-28 lg:my-0'>
			<h1 className='text-3xl md:text-5xl font-extrabold capitalize text-center'>Have a Look at My Work</h1>
			{/* Grid layout for displaying project cards */}
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{/* Mapping over the projects array to render Project components */}
				{projects.map((project, index) => (
					<Project key={index} title={project.title} github={project.github} href={project.href} img={project.img} />
				))}
			</div>
		</section>
	)
}

export default Portfolio
