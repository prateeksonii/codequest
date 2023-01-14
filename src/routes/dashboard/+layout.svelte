<script lang="ts">
	import Nav from '@components/common/nav.component.svelte';
	import Sidebar from '@components/common/sidebar.component.svelte';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	let sidebarItems: any[] = [];

	$: if ($page.route.id?.startsWith('/dashboard/learn')) {
		sidebarItems = data.sidebarMenu.learn.items;
	} else {
		sidebarItems = data.sidebarMenu.practice.items;
	}
</script>

<Nav />
<main class="grid grid-cols-[1fr_4fr] gap-8">
	<Sidebar items={sidebarItems} />

	<section class="prose prose-invert p-8">
		<slot />
	</section>
</main>
