<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	export let data;
	const inval = async () => await invalidateAll();
</script>

<h1>Dynamic Content with no ISR</h1>
<h3>page data: {data.number ?? 999999999}</h3>
<h3>layout data: {data.layoutnumber ?? 88888888888}</h3>
<a href="/">Back to static content</a>
<button on:click={inval}>InvalidateAll()</button>
