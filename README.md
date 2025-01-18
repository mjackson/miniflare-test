I'm trying to get breakpoint debugging working with [Miniflare](https://developers.cloudflare.com/workers/testing/miniflare/). The [Cloudflare docs](https://developers.cloudflare.com/workers/testing/miniflare/developing/debugger/) seem to suggest it's possible.

Ideally, what I'd like to be able to do is:

1. Open `worker.js` and add a breakpoint inside the `fetch()` handler
2. Open a "JavaScript Debug Terminal" in VSCode
3. Run `node miniflare.js`
4. Pause at the breakpoint in the worker code

However, this doesn't seem to work right now :/

A nice bonus would be to be able to write everything in TypeScript, but I was trying to keep this example as minimal as possible.
