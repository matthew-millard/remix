export default function Button({ type = 'Submit', label = 'Send' }) {
	return (
		<button
			className="flex items-center justify-center rounded bg-green-600 px-5 py-2 text-white"
			type={type}
		>
			{label}
		</button>
	)
}
