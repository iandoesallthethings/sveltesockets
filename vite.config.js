import { sveltekit } from '@sveltejs/kit/vite'
import socket from './src/lib/socket'
import mix from 'vite-plugin-mix'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		// @ts-expect-error - vite-plugin-mix doesn't properly export its default value. See: https://github.com/egoist/vite-plugin-mix/issues/41
		mix.default({ handler: './src/express/app.ts' }),
		socket,
	],
	build: {},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
}

export default config
