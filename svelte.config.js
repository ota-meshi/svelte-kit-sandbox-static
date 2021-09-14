import staticAdapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: '/foo'
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		adapter: staticAdapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
	}
};

export default config;
