import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { getMoviesByDescription } from '../../server/movies';
import { validateSearchAction } from '../../server/actions';

export const load: PageServerLoad = async (data) => {
	const description = data.url.searchParams.get('description') || '';
	const movies = await getMoviesByDescription({ description });
	return {
		movies
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		await validateSearchAction({ request });
	}
};
