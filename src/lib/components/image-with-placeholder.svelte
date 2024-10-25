<script lang="ts">
	let {
		src = '',
		alt = '',
		className = '',
		height = 320,
		width = 210,
		placeholder = '/blur-img.webp'
	}: {
		src: string;
		alt: string;
		placeholder?: string;
		className?: string;
		height: number;
		width: number;
	} = $props();

	let isLoaded = $state(false);
</script>

<div>
	{#if !isLoaded}
		<img src={placeholder} alt="Loading..." {height} {width} class={className} />
	{/if}
	<img
		{src}
		{alt}
		{height}
		{width}
		class={className}
		onload={() => (isLoaded = true)}
		style:display={isLoaded ? 'block' : 'none'}
	/>
</div>
