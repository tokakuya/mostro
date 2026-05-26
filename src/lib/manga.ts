import type { ImageMetadata } from 'astro';

const mangaImages = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/manga/*.jpg',
	{ eager: true },
);

/** `20-3.jpg` → 話数 20、ページキー `3` / `18.jpg` → 話数 18、ページキーなし */
const FILE_PATTERN = /^(\d+)(?:-(.+))?$/;

export type MangaPage = {
	filename: string;
	pageKey: number[];
	image: ImageMetadata;
};

export type MangaEpisode = {
	id: number;
	pages: MangaPage[];
};

function parsePageKey(suffix: string | undefined): number[] {
	if (!suffix) return [0];
	return suffix.split('-').map((part) => Number.parseInt(part, 10) || 0);
}

function comparePageKeys(a: number[], b: number[]): number {
	const len = Math.max(a.length, b.length);
	for (let i = 0; i < len; i++) {
		const diff = (a[i] ?? 0) - (b[i] ?? 0);
		if (diff !== 0) return diff;
	}
	return 0;
}

function parseMangaFilename(filename: string): { episodeId: number; pageKey: number[] } | null {
	const base = filename.replace(/\.jpg$/i, '');
	const match = base.match(FILE_PATTERN);
	if (!match) return null;
	return {
		episodeId: Number.parseInt(match[1], 10),
		pageKey: parsePageKey(match[2]),
	};
}

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
