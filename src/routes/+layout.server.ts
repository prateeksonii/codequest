import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.getSession();

	if (session !== null) {
		if (event.route.id !== '/dashboard') throw redirect(301, '/dashboard');
	}

	return {
		session
	};
};
