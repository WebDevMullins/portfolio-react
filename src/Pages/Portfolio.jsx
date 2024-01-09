import Project from '../components/ui/Project'

const Portfolio = () => {
	const projects = [
		{
			title: 'Average Joes',
			github: 'https://github.com/WebDevMullins/average-joes',
			href: 'https://wdm-average-joes-88b9a3337bf4.herokuapp.com/',
			img: '/projects/averagejoes.png',
			tech: 'JS / Handlebars / MySQL / Tailwind'
		},
		{
			title: 'Weather Dashboard',
			github: 'https://github.com/WebDevMullins/weather-dashboard',
			href: 'https://webdevmullins.github.io/weather-dashboard/',
			img: '/projects/weatherdashboard.png',
			tech: 'JS / API / Tailwind'
		},
		{
			title: 'Track Tracer',
			github: 'https://github.com/AndrewTullos/GroupTenProject1',
			href: 'https://andrewtullos.github.io/GroupTenProject1/',
			img: '/projects/tracktracer.png',
			tech: 'JS / APIs / Tailwind'
		},
		{
			title: 'Social Network API',
			github: 'https://github.com/WebDevMullins/social-network-api',
			href: 'https://github.com/WebDevMullins/social-network-api',
			img: '/projects/social.png',
			tech: 'JS / MongoDB / Mongoose'
		},
		{
			title: 'Tech Blog',
			github: 'https://github.com/WebDevMullins/MVC-Tech-Blog',
			href: 'https://wdm-techblog-14e8d68557e0.herokuapp.com/',
			img: '/projects/techblog.png',
			tech: 'JS / MySQL / Sequelize'
		},
		{
			title: 'PWA - Text Editor',
			github: 'https://github.com/WebDevMullins/pwa-text-editor',
			href: 'https://github.com/WebDevMullins/pwa-text-editor',
			img: '/projects/pwa.png',
			tech: 'JS / Babel / Webpack'
		}
	]
	return (
			<section className='flex flex-col items-center justify-center max-w-screen-xl px-4 gap-10 my-20 lg:my-0'>
				<h1 className='text-3xl md:text-5xl font-extrabold capitalize text-center'>Have a Look at My Work</h1>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
					{projects.map((project, index) => (
						<Project
							key={index}
							title={project.title}
							github={project.github}
							href={project.href}
							img={project.img}
							// tech={project.tech}
						/>
					))}
				</div>
			</section>
	)
}

export default Portfolio
