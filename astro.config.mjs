// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jmurilloch.dev',
	integrations: [mdx(), sitemap()],
	vite: {
		server: {
			allowedHosts: ['jmurilloch.dev', 'localhost', '127.0.0.1', '0.0.0.0'],
			// El bind mount de Docker no propaga eventos inotify de forma fiable:
			// sin polling el dev server sirve modulos viejos tras editar un archivo.
			// Solo afecta a `astro dev`, no al build de produccion.
			watch: {
				usePolling: true,
				interval: 300,
			},
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
