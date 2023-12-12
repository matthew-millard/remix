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
import fontStylesheetUrl from './styles/fonts.css'
import stylesheet from './styles/tailwind.css'
import Icon from './components/Icon.tsx'

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
				<header className="flex h-24 items-center justify-between bg-slate-100  px-6  shadow-[0px_1px_10px_3px_rgba(0,0,0,0.2)]">
					<Link
						to="/"
						className="flex h-full flex-shrink-0 items-center justify-start "
					>
						<span className="text-2xl font-bold">Matt Millard</span>
					</Link>

					<div className="flex items-center justify-between gap-6">
						<Icon name="sun-bright" prefix="fal" size="2xl" />
						<Icon name="bars" prefix="fal" size="2xl" />
					</div>
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
