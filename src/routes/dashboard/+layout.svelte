<script lang="ts">
	import Nav from '@components/common/nav.component.svelte';
	import Sidebar from '@components/common/sidebar.component.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Nav />
<main class="grid grid-cols-[1fr_4fr] gap-8">
	<Sidebar items={data.sidebarMenu.items} />
	<slot />
</main>
