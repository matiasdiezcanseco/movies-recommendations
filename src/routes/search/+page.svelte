<script lang="ts">
	import SearchForm from '$lib/components/search-form.svelte';
	import MovieCard from '$lib/components/movie-card.svelte';
	import type { PageData } from './$types.js';
	export let data: PageData;
</script>

<SearchForm />
{#if data?.movies && data?.movies.length > 0}
	<ul class="grid grid-cols-3 gap-4">
		{#each data.movies as movie}
			<li>
				<MovieCard {...movie} />
			</li>
		{/each}
	</ul>
{/if}
