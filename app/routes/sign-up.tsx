import Button from '../components/Button.jsx'
import { Form } from '@remix-run/react'

export default function Signup() {
	return (
		<div className="flex justify-center px-2 pt-20">
			<Form
				method="post"
				className="flex w-full min-w-min max-w-md flex-col gap-2 rounded-md bg-slate-200 p-4 shadow-lg"
			>
				<div>
					<h1 className="text-3xl font-bold">Sign up</h1>
				</div>
				<div className="flex flex-col ">
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" />
				</div>
				<div className="flex flex-col ">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
				</div>
				<div className="flex justify-center">
					<Button label="Sign up" />
				</div>
			</Form>
		</div>
	)
}
