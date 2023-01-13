import type { Load } from '@sveltejs/kit';

export const load: Load = () => {
	return {
		sidebarMenu: {
			items: [
				{
					label: 'Getting Started',
					url: '/dashboard/getting-started'
				}
			]
		}
	};
};
