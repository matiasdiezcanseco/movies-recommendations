<script lang="ts">
	import MovieCard from '$lib/components/movie-card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="px-4 space-y-8">
	<div class="flex gap-8">
		<img class="rounded-xl" src={data.movie.Poster} alt={data.movie.Title} />
		<div class="space-y-6">
			<h2 class="text-4xl">{data.movie.Title}</h2>
			<p>{data.movie.$vectorize}</p>

			<div class="space-y-2">
				<p><strong>Genre:</strong> {data.movie.Genre}</p>
				<p><strong>Director:</strong> {data.movie.Director}</p>
				<p><strong>Actors:</strong> {data.movie.Actors}</p>
				<p><strong>Runtime:</strong> {data.movie.Runtime}</p>
				<p><strong>Rating:</strong> {data.movie.Rated}</p>
				<p><strong>Released:</strong> {data.movie.Released}</p>
				<p><strong>Awards:</strong> {data.movie.Awards}</p>
				<p>
					<strong>IMDB Rating:</strong>
					{data.movie.imdbRating} / 10 ({data.movie.imdbVotes} votes)
				</p>
				<p><strong>Box Office:</strong> {data.movie.BoxOffice}</p>
			</div>
		</div>
	</div>
	<div class="mr-auto space-y-6">
		<h3 class="text-3xl">Recommendations</h3>
		{#if data?.recommendedMovies && data?.recommendedMovies.length > 0}
			<ul class="grid grid-cols-3 gap-4">
				{#each data.recommendedMovies as movie}
					<li>
						<MovieCard {...movie} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
