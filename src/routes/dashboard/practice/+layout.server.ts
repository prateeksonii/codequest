import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	if (event.route.id === '/dashboard/practice') {
		throw redirect(301, '/dashboard/practice/0');
	}

	return {
		session: await event.locals.getSession()
	};
};
