<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Movie Recommendations</title>
</svelte:head>

<div
	class="mx-auto max-w-6xl flex flex-col items-center bg-slate-200 min-h-screen h-full space-y-6 p-6"
>
	<header class="mr-auto">
		<a class="text-3xl pl-4" href="/">MOVIE RECOMMENDATIONS</a>
	</header>
	{@render children()}
</div>
