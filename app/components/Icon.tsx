import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { icon, library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSunBright } from '@fortawesome/pro-light-svg-icons'

library.add(faBars, faSunBright)

type Size =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl'

type Props = {
	name: IconName
	prefix?: IconPrefix
	size?: Size
}

const Icon = ({ name, prefix = 'fal', size = 'base' }: Props) => {
	const iconHTML = icon({ prefix, iconName: name }).html
	const iconSize = size ? `text-${size}` : ''

	return (
		<span
			dangerouslySetInnerHTML={{ __html: iconHTML[0] }}
			className={iconSize}
		/>
	)
}

export default Icon
