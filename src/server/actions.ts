import { redirect } from '@sveltejs/kit';

export const validateSearchAction = async ({ request }: { request: Request }) => {
	const data = await request.formData();
	const description = data.get('description') as string;
	redirect(302, `/search?description=${encodeURIComponent(description)}`);
};
