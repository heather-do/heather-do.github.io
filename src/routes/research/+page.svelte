<script lang="ts">
	import Publication from './Publication.svelte';
	import { PUBLICATIONS_MANUSCRIPT, PUBLICATIONS_PEER_REVIEWED } from './publication';
</script>

<article class="max-desktop:mx-10 max-desktop:pt-0 desktop:pt-16">
	<div class="flex justify-center max-desktop:mt-12">
		<section class="citation">
			<span class="text-center"><h1>Research</h1></span>
			<h2>Peer-Reviewed Publications</h2>
			{#each PUBLICATIONS_PEER_REVIEWED as publication}
				<Publication {publication} />
			{/each}
			<h2 class="max-desktop:mt-12 desktop:mt-16">Manuscripts in Preparation</h2>
			{#each PUBLICATIONS_MANUSCRIPT as publication}
				<Publication {publication} />
			{/each}
		</section>
	</div>
</article>

<style>
	article {
		padding-left: clamp(0px, calc(100vw - var(--desktop-min-width)), 12.5rem);
		padding-right: clamp(0px, calc(100vw - var(--desktop-min-width)), 12.5rem);
	}

	.citation {
		max-width: 100ch;
	}
</style>
