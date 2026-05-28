import type { APIRoute } from 'astro';
import { getMangaEpisodes } from '../lib/mangaData';

export const prerender = true;

export const GET: APIRoute = () => {
	return new Response(JSON.stringify(getMangaEpisodes()), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
};
