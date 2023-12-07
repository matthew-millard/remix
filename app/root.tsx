import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	LiveReload,
	Link,
} from '@remix-run/react'
import faviconUrlAsset from './assets/favicons/remix-favicon.svg'
import LogoUrlAsset from './assets/logos/remix-logo.svg'
import fontStylesheetUrl from './styles/fonts.css'
import stylesheet from './styles/tailwind.css'

export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
			href: faviconUrlAsset,
			type: 'image/svg+xml',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900&display=swap',
		},
		{
			rel: 'stylesheet',
			href: fontStylesheetUrl,
		},
		{
			rel: 'stylesheet',
			href: stylesheet,
		},
	]
}

export const meta: MetaFunction = () => {
	return [
		{
			title: 'Remix Playground',
		},
		{
			name: 'description',
			content: 'Personal playground for learning the Remix framework',
		},
	]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Matt Millard" />
				<Meta />
				<Links />
			</head>
			<body>
				<header className="flex h-24  bg-slate-200 pl-8 pr-16 shadow-[0_1px_5px_5px_rgba(0,0,0,0.2)]">
					<span className="flex h-full items-center">
						<Link to="/">
							<img src={LogoUrlAsset} alt="Remix logo" />
						</Link>
					</span>
					<nav className="  flex h-full w-full items-center justify-end  ">
						<ul className="flex  gap-8 ">
							<Link to="/sign-up">
								<li>Sign Up</li>
							</Link>
							<Link to="/sign-in">
								<li>Sign In</li>
							</Link>
							<Link to="my-account">
								<li>My Account</li>
							</Link>
						</ul>
					</nav>
				</header>
				<div>
					<Outlet />
				</div>
				<footer></footer>
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
