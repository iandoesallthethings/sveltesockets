import express from 'express'

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.get('/express', (req, res, next) => {
	console.log('GET: /express')

	// return res.send('Hello from Express!')
	return res.sendFile('./index.html', { root: __dirname })
})

// Not sure if we need this to hand other routes over to sveltekit
// app.get('*', (req, res, next) => {
// 	console.log('GET: * - handing off to sveltekit')
// 	return next()
// })

export const handler = app
