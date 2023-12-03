import type { LinksFunction } from '@remix-run/node'
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	LiveReload,
	Link,
} from '@remix-run/react'
import faviconUrlAsset from './assets/favicons/remix-favicon.svg'
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

export default function App() {
	return (
		<html>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<header className="h-24  bg-slate-200 px-8">
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
				<div className="bg-teal-400">
					<Outlet />
				</div>
				<footer></footer>
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
