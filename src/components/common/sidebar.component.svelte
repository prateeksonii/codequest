<script lang="ts">
	export let items: any[] = [];
</script>

<aside class="min-h-[calc(100vh-4rem)] bg-gray-900">
	<ul>
		{#each items as item}
			<li class="py-2 px-4 transition-all hover:bg-gray-600">
				<a href={item.url}>{item.label}</a>
			</li>
		{/each}
	</ul>
</aside>
