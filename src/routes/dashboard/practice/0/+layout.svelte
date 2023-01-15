<script lang="ts">
	import * as ace from 'ace-builds';
	import html from 'ace-builds/src-noconflict/mode-html?url';
	import oneDarkTheme from 'ace-builds/src-noconflict/theme-one_dark?url';

	let codeEl: HTMLDivElement | null = null;
	let editor: ace.Ace.Editor;

	$: if (ace) {
		ace.config.setModuleUrl('ace/mode/html', html);
		ace.config.setModuleUrl('ace/theme/one_dark', oneDarkTheme);
	}

	$: if (codeEl) {
		editor = ace.edit(codeEl, {
			enableAutoIndent: true,
			fontFamily: 'Hack',
			fontSize: 18,
			mode: 'ace/mode/html',
			theme: 'ace/theme/one_dark'
		});
		editor.on('input', () => console.log(editor.getValue()));
	}
	const meta = import.meta.glob('./+page.svx', { import: 'metadata', eager: true }) as any;
</script>

<svelte:head>
	<title>{meta['./+page.svx'].title}</title>
</svelte:head>

<div class="grid min-h-[calc(100vh-4rem)] w-full grid-cols-2">
	<article class="w-full p-8">
		<slot />
	</article>
	<div bind:this={codeEl} class="w-full" id="code" />
</div>
