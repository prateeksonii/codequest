import type { Load } from '@sveltejs/kit';

export const load: Load = () => {
	return {
		sidebarMenu: {
			items: [
				{
					label: 'Getting Started',
					url: '/dashboard/learn/getting-started'
				},
				{
					label: 'Roadmap',
					url: '/dashboard/learn/roadmap'
				}
			]
		}
	};
};
