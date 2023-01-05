# SvelteSocket

A small test repo playing with different ways to integrate sveltekit with various other techs like ExpressJs and Socket.io.


# Experiments
1. Express as Vite Middleware
Right now, we're playing with `vite-plugin-mix` which takes the `app` object from an express server and transforms it into Vite middleware. It currently has a bug during the build step, so we're waiting on that.

2. Typescript Websockets
`Socket.io` plays nicely as Vite plugin already. See `$lib/socket.ts`. 

3. Sveltekit as Express middleware, but without having to build during dev
Haven't dug into this part much yet. Ideas/questions:
* Can we import `handler` from the `.svelte-kit` folder in dev?
* Can we extend nodemon's watch directory so it restarts when changes are made in sveltekit?

# Dev
```bash
yarn install

yarn dev
```

# Building

```bash
# This currently throws an error. TODO: I'll find the github issue later.
yarn build 
```