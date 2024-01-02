import { useState } from 'react'
import { useLocation } from 'react-router-dom'

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
	const path = useLocation().pathname
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const menuItems = ['About Me', 'Portfolio', 'Contact', 'Resume']
	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}
		classNames={{
			item: [
				"flex",
				"relative",
				"h-10",
				"items-center",
				"data-[active=true]:after:content-['']",
				"data-[active=true]:after:absolute",
				"data-[active=true]:after:bottom-0",
				"data-[active=true]:after:left-0",
				"data-[active=true]:after:right-0",
				"data-[active=true]:after:h-[2px]",
				"data-[active=true]:after:rounded-[2px]",
				"data-[active=true]:after:bg-primary",
			],
			menuItem: [
				"flex",
				"relative",
				"h-10",
				"items-center",
				"data-[active=true]:after:content-['']",
				"data-[active=true]:after:absolute",
				"data-[active=true]:after:bottom-0",
				"data-[active=true]:after:left-0",
				"data-[active=true]:after:right-0",
				"data-[active=true]:after:h-[2px]",
				"data-[active=true]:after:w-[85px]",
				"data-[active=true]:after:rounded-[2px]",
				"data-[active=true]:after:bg-primary",
			],
		}}
		>
			<NavbarContent>
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
				<NavbarBrand className='gap-2'>
					<Computer />
					<Link className='font-bold text-inherit' href='/' aria-current='page'>
						Brandon Mullins
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				{menuItems.map((item, index) => (
					<NavbarItem key={`${item}-${index}`} isActive={path === `/${item}`.split(' ').join('').toLowerCase()}>
						<Link color={'foreground'} className='w-full' href={`/${item}`.split(' ').join('').toLowerCase()} size='lg'>
							{item}
						</Link>
					</NavbarItem>
				))}
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
					<NavbarMenuItem key={`${item}-${index}`} isActive={path === `/${item}`.split(' ').join('').toLowerCase()}>
						<Link color={'foreground'} className='w-full' href={`/${item}`.split(' ').join('').toLowerCase()} size='lg'>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}

export default Navigation
