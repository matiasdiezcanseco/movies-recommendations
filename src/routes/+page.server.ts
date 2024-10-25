import type { PageServerLoad, Actions } from './$types.js';
import { getMovies } from '../server/movies.js';
import { validateSearchAction } from '../server/actions.js';

export const load: PageServerLoad = async () => {
	return {
		movies: await getMovies({})
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		await validateSearchAction({ request });
	}
};
