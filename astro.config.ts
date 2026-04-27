import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

const FONT_WEIGHT_BOLD = 700;
const FONT_WEIGHT_NORMAL = 400;

export default defineConfig({
	fonts: [
		{
			cssVariable: '--font-sora',
			name: 'Sora',
			provider: fontProviders.google(),
			weights: [
				FONT_WEIGHT_BOLD,
				FONT_WEIGHT_NORMAL,
			],
		},
	],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
});
