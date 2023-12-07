<script lang="ts">
	export let data;
</script>

<h1>ISR Static Rendered</h1>
<p>This page is statically rendered via ISR in the +page.server.ts</p>
<h3>page data: {data.number ?? 999999999}</h3>
<h3>layout data: {data.layoutnumber ?? 88888888888}</h3>

<a href="/dynamic">go to dynamic rendered content</a>
