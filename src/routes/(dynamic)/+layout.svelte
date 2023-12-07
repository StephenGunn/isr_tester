<script lang="ts">
	import { test_store } from '../../lib/store.js';
	export let data;

	$: $test_store = data.layoutnumber;
</script>

<slot />

<p>test store: {$test_store}</p>
