import type { LinksFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, LiveReload } from '@remix-run/react'
import faviconUrlAsset from './assets/favicons/remix-favicon.svg'
import fontUrl from './styles/fonts.css'

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
			href: fontUrl,
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
				<h2>Pharetra pharetra massa massa ultricies</h2>
				<h3>
					Parturient montes nascetur ridiculus mus mauris vitae ultricies leo
					integer
				</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
					est ullamcorper eget nulla facilisi etiam dignissim diam. Venenatis
					urna cursus eget nunc scelerisque viverra. Vitae et leo duis ut diam
					quam nulla. Volutpat odio facilisis mauris sit amet massa. Porta lorem
					mollis aliquam ut. Ut tellus elementum sagittis vitae et leo. Id diam
					maecenas ultricies mi. Cursus vitae congue mauris rhoncus aenean vel.
					Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.
					Magna sit amet purus gravida quis blandit turpis cursus in. Eu
					volutpat odio facilisis mauris. Dolor morbi non arcu risus quis varius
					quam quisque id. Orci a scelerisque purus semper eget duis at tellus
					at. Quis hendrerit dolor magna eget est lorem ipsum. Risus in
					hendrerit gravida rutrum quisque non. Pulvinar sapien et ligula
					ullamcorper malesuada proin libero nunc consequat.
				</p>

				<Outlet />

				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
