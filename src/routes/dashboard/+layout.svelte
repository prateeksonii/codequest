<script>
	import Nav from '@components/common/nav.component.svelte';
	import Sidebar from '@components/common/sidebar.component.svelte';
</script>

<Nav />
<main class="grid grid-cols-[1fr_4fr] gap-8">
	<Sidebar />
	<slot />
</main>
