<script lang="ts">
	import { page } from '$app/stores';

	export let items: any[] = [];
</script>

<aside class="min-h-[calc(100vh-4rem)] bg-gray-900">
	<ul>
		{#each items as item}
			<li>
				<a
					class="block h-full py-2 px-4 transition-all hover:bg-gray-600"
					class:bg-sky-500={$page.route.id === item.url}
					href={item.url}
				>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
</aside>
