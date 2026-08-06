export type HeroImage = { src: string; width: number; height: number };

export function getTopHeroImage(): HeroImage | undefined {
	const heroCandidates = import.meta.glob<{ default: HeroImage }>('../assets/top/**/top.*', {
		eager: true,
	});
	const entries = Object.entries(heroCandidates).map(([path, mod]) => ({
		path,
		image: mod.default,
	}));

	return (
		entries.find((e) => e.path.endsWith('/top.webp'))?.image ??
		entries.find((e) => e.path.endsWith('/top.jpg'))?.image
	);
}
