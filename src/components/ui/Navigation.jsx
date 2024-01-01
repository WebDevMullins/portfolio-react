import { useState } from 'react'

import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle
} from '@nextui-org/react'
import { Computer, Github, Linkedin, Mail } from 'lucide-react'

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const menuItems = ['About Me', 'Portfolio', 'Contact', 'Resume']
	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
				<NavbarBrand className='gap-2'>
					<Computer/>
					<p className='font-bold text-inherit'>Brandon Mullins</p>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				<NavbarItem>
					<Link color='foreground' href='#'>
						About Me
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href='#' aria-current='page'>
						Portfolio
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Contact
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Resume
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='flex'>
					<Link href='https://github.com/WebDevMullins'>
						<Github />
					</Link>
				</NavbarItem>
				<NavbarItem className='flex'>
					<Link href='https://www.linkedin.com/in/brandon-mullins/'>
						<Linkedin />
					</Link>
				</NavbarItem>
				<NavbarItem className='flex'>
					<Link href='mailto:brandon@webdevmullins.com'>
						<Mail />
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link color={'foreground'} className='w-full' href='#' size='lg'>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}

export default Navigation
