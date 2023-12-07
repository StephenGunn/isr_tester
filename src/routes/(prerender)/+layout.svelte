<script lang="ts">
	import { test_store } from '../../lib/store';
</script>

<slot />

<p>
	test store: {$test_store}
</p>
