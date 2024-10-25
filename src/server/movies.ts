import type { Movie } from '$lib/types';
import { db } from './db';

export const getMovies = async ({ limit = 20 }: { limit?: number }) => {
	const movies = await db.collection<Movie>('movies').find({}).limit(limit).toArray();
	return movies;
};

export const getMoviesByDescription = async ({
	description
}: {
	limit?: number;
	description: string;
}) => {
	const movies = await db
		.collection<Movie>('movies')
		.find({}, { vectorize: description, limit: 12 })
		.toArray();

	return movies;
};

export const getMovieById = async ({ id }: { id: string }) => {
	const movie = await db
		.collection<Movie>('movies')
		.findOne({ _id: id }, { projection: { $vectorize: true, $vector: true } });
	return movie;
};

export const getRecommendedMoviesByVector = async ({ vector }: { vector: number[] }) => {
	const movies = await db
		.collection<Movie>('movies')
		.find({}, { sort: { $vector: vector }, includeSimilarity: true })
		.limit(7)
		.toArray();

	return movies;
};
