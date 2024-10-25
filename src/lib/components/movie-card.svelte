<script lang="ts">
	import type { Movie } from '$lib/types';
	import ImageWithPlaceholder from './image-with-placeholder.svelte';
	let { Poster, Title, Genre, _id }: Movie = $props();
</script>

<a href={`/movie/${_id}`}>
	<ImageWithPlaceholder
		alt={Title}
		src={Poster}
		className="rounded-lg h-[320px] w-[210px]"
		height={320}
		width={210}
	/>
	<h3 class="font-semibold">{Title}</h3>
	<p>{Genre}</p>
</a>
