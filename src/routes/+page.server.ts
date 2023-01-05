/** @type {import('./$types').PageServerLoad} */
export function load() {
	console.log('GET: / (sveltekit)')

	return {
		catName: 'MIDNA',
	}
}
