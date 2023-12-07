
	import { persisted } from 'svelte-persisted-store';

	// First param `preferences` is the local storage key.
	// Second param is the initial value.
	export const test_store = persisted('tester', 5555, {
		storage: 'session'
	});