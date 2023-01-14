<script lang="ts">
	const meta = import.meta.glob('./+page.svx', { import: 'metadata', eager: true }) as any;
</script>

<svelte:head>
	<title>{meta['./+page.svx'].title}</title>
</svelte:head>

<slot />
