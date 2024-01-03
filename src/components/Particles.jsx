import { useEffect, useMemo, useState } from 'react'

import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const Particle = () => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	const particlesLoaded = (container) => {
		console.log(container)
	}

	const options = useMemo(
		() => ({
			detectRetina: true,
			fullScreen: { enable: false },
			fpsLimit: 120,
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: 'repulse'
					},
					resize: true
				},
				modes: {
					repulse: {
						distance: 100,
						duration: 0.4
					}
				}
			},
			particles: {
				color: {
					value: '#EE0F0F'
				},
				links: {
					color: '#EE0F0F',
					distance: 175,
					enable: true,
					opacity: 0.5,
					width: 2
				},
				collisions: {
					enable: true
				},
				move: {
					enable: true,
					direction: 'top-left',
					outModes: {
						default: 'bounce'
					},
					random: true,
					straight: false,
					speed: 1
				},
				number: {
					density: {
						enable: true,
						area: 800
					},
					value: 250
				},
				opacity: {
					value: .4
				},
				shape: {
					type: 'circle'
				},
				size: {
					value: { min: 0, max: 5 }
				}
			},
		}),
		[]
	)

	if (init) {
		return <Particles className='h-screen' loaded={particlesLoaded} options={options} />
	}

	return <></>
}

export default Particle
