<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	$: console.log($page);
	// $: if ($page.data.session) {
	// 	goto('/dashboard');
	// }
</script>

<div class="container mx-auto flex flex-col items-center justify-center min-h-screen">
	<h1 class="text-6xl font-extrabold">Learn everything about programming</h1>
	<button on:click={() => signIn('github')}>Sign in with Github</button>

	{#if $page.data.session}
		ok
	{/if}
</div>
