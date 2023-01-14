import type { Load } from '@sveltejs/kit';

export const load: Load = () => {
	return {
		sidebarMenu: {
			learn: {
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
			},
			practice: {
				items: [
					{
						label: '0 - HTML Basics',
						url: '/dashboard/practice/0'
					}
				]
			}
		}
	};
};
