import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export function GET() {
	const data = {
		name: 'midna',
		status: 'adorable',
	}

	return json(data)
}
