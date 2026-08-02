<template>
  <div class="vintage-viewer-content">
    <p v-if="episode">
      <template v-for="(src, index) in episode.ImageUrl" :key="`${episode.Index}-${index}`">
        <img
          :src="src"
          :alt="`${episode.Title} ${index + 1}`"
          decoding="async"
          loading="eager"
        /><br v-if="index < episode.ImageUrl.length - 1" />
      </template>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import type { MangaEpisode } from '../lib/mangaData';
import { findEpisodeByPage, readPageParamFromLocation } from '../lib/viewerPage';

const props = defineProps<{
  mangaEpisodes: MangaEpisode[];
}>();

const pageParam = ref(readPageParamFromLocation());
const pages = computed(() => props.mangaEpisodes ?? []);
const episode = computed(() => findEpisodeByPage(pageParam.value, pages.value));

watch(
  episode,
  (current) => {
    if (typeof document === 'undefined' || !current) return;
    document.title = `第${current.Index}話 ${current.Title} | 桃色CODE`;
  },
  { immediate: true },
);

function syncPageParam() {
  pageParam.value = readPageParamFromLocation();
}

onMounted(() => {
  window.addEventListener('popstate', syncPageParam);
});

onUnmounted(() => {
  window.removeEventListener('popstate', syncPageParam);
});

defineOptions({
  name: 'VintageViewerContent',
});
</script>

<style scoped>
.vintage-viewer-content {
  padding: 0;
}

.vintage-viewer-content p {
  margin: 0;
}

.vintage-viewer-content img {
  width: auto;
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}
</style>
