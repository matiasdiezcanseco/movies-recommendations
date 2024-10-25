import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';
import { getMovieById, getRecommendedMoviesByVector } from '../../../server/movies.js';

export const prerender = true;

export const load: PageServerLoad = async ({ params, depends }) => {
	const id = params.id;
	depends(`movie:${id}`);

	const movie = await getMovieById({ id });

	if (!movie) error(404, '/');

	const recommendedMovies = await getRecommendedMoviesByVector({ vector: movie.$vector });
	recommendedMovies.shift();

	return {
		movie,
		recommendedMovies
	};
};
