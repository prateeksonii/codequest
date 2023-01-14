<script lang="ts">
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<section class="prose prose-invert p-8">
	<slot />
</section>
