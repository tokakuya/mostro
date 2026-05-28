/** `20-3.jpg` → 話数 20、ページキー `3` / `18.jpg` → 話数 18、ページキーなし */
export const MANGA_FILE_PATTERN = /^(\d+)(?:-(.+))?$/;

export function parsePageKey(suffix: string | undefined): number[] {
	if (!suffix) return [0];
	return suffix.split('-').map((part) => Number.parseInt(part, 10) || 0);
}

export function comparePageKeys(a: number[], b: number[]): number {
	const len = Math.max(a.length, b.length);
	for (let i = 0; i < len; i++) {
		const diff = (a[i] ?? 0) - (b[i] ?? 0);
		if (diff !== 0) return diff;
	}
	return 0;
}

export function parseMangaFilename(
	filename: string,
): { episodeId: number; pageKey: number[] } | null {
	if (filename === 'sp.jpg') return null;

	const base = filename.replace(/\.jpg$/i, '');
	const match = base.match(MANGA_FILE_PATTERN);
	if (!match) return null;

	return {
		episodeId: Number.parseInt(match[1], 10),
		pageKey: parsePageKey(match[2]),
	};
}
