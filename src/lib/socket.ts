import { Server } from 'socket.io'
import type { PluginOption, ViteDevServer } from 'vite'

export function configure(server: ViteDevServer) {
	if (!server.httpServer) throw new Error('No Vite Http Server.')

	const io = new Server(server.httpServer)

	io.on('connection', (socket) => {
		socket.emit('eventFromServer', 'Hello, World 👋 from a websocket')

		socket.on('eventFromClient', (message) => {
			console.log('socket message:', message)

			socket.emit('eventFromServer', 'A user said ' + message)
		})
	})

	console.log('Socket.io ready.')
}

const vitePlugin: PluginOption = {
	name: 'webSocketServer',
	configureServer: configure,
	configurePreviewServer: configure,
}

export default vitePlugin
