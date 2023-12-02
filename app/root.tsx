import type { LinksFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, LiveReload } from '@remix-run/react'
import faviconUrlAsset from './assets/favicons/remix-favicon.svg'

export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
			href: faviconUrlAsset,
			type: 'image/svg+xml',
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
				<h1>Hello World!</h1>

				<Outlet />

				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
