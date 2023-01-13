<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<div class="container mx-auto flex min-h-screen flex-col items-center justify-center">
	<h1 class="text-6xl font-extrabold">Learn everything about programming</h1>
	<button on:click={() => signIn('github')}>Sign in with Github</button>

	{#if $page.data.session}
		ok
	{/if}
</div>
