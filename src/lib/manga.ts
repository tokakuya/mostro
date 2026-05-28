import type { ImageMetadata } from 'astro';
import { comparePageKeys, parseMangaFilename } from './mangaParse';

const mangaImages = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/manga/*/*.jpg',
	{ eager: true },
);

export type MangaPage = {
	filename: string;
	pageKey: number[];
	image: ImageMetadata;
};

export type MangaEpisode = {
	id: number;
	pages: MangaPage[];
};

function buildEpisodes(): MangaEpisode[] {
	const byEpisode = new Map<number, MangaPage[]>();

	for (const path of Object.keys(mangaImages)) {
		const filename = path.split('/').pop()!;
		const parsed = parseMangaFilename(filename);
		if (!parsed) continue;

		const image = mangaImages[path].default;
		const page: MangaPage = {
			filename,
			pageKey: parsed.pageKey,
			image,
		};

		const pages = byEpisode.get(parsed.episodeId) ?? [];
		pages.push(page);
		byEpisode.set(parsed.episodeId, pages);
	}

	return [...byEpisode.entries()]
		.map(([id, pages]) => ({
			id,
			pages: pages.sort((a, b) => comparePageKeys(a.pageKey, b.pageKey)),
		}))
		.sort((a, b) => a.id - b.id);
}

let cachedEpisodes: MangaEpisode[] | undefined;

export function getMangaEpisodes(): MangaEpisode[] {
	cachedEpisodes ??= buildEpisodes();
	return cachedEpisodes;
}

export function getMangaEpisode(id: number): MangaEpisode | undefined {
	return getMangaEpisodes().find((episode) => episode.id === id);
}

export function getAdjacentEpisodes(id: number): {
	prev: MangaEpisode | undefined;
	next: MangaEpisode | undefined;
} {
	const episodes = getMangaEpisodes();
	const index = episodes.findIndex((episode) => episode.id === id);
	return {
		prev: index > 0 ? episodes[index - 1] : undefined,
		next: index >= 0 && index < episodes.length - 1 ? episodes[index + 1] : undefined,
	};
}
