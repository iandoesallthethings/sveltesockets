<script lang="ts">
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'
	import { io } from 'socket.io-client'
	import { dev } from '$app/environment'

	// TODO: Figure out how automatic typing works
	/** @type {import('./$types').PageData} */
	export let data

	let asyncData: any
	onMount(async () => {
		const response = await fetch('/test')
		asyncData = await response.json()

		console.log(asyncData)
	})

	const port = dev ? 5173 : 4173
	const socket = io(`http://localhost:${port}`)

	socket.on('eventFromServer', (message) => {
		console.log(message)
		$webhookResponse = message
	})

	const store = writable(0)

	const webhookResponse = writable('')

	$: {
		console.debug('emitting eventFromClient', $store)
		socket.emit('eventFromClient', $store)
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>cat name from +page.server.ts: {data.catName}</p>
<p>info from async fetch: {JSON.stringify(asyncData)}</p>

<button on:click={() => ($store = $store + 1)}>+</button>

{$store}

<p>Webhook Response: {$webhookResponse}</p>

<a href="/express" rel="external">Go to express app</a>
