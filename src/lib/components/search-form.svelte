<script>
	import Button from './ui/button/button.svelte';
	import Input from './ui/input/input.svelte';
</script>

<form class="flex gap-4 items-end" method="POST">
	<label>
		Find:
		<Input class="w-96" name="description" />
	</label>
	<Button class="w-28">Search</Button>
</form>
