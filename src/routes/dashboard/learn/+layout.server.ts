import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	if (event.route.id === '/dashboard/learn') {
		throw redirect(301, '/dashboard/learn/getting-started');
	}

	return {
		session: await event.locals.getSession()
	};
};
