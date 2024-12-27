<script lang="ts">
	import { type Publication } from './publication';

	export let publication: Publication;
</script>

<p>
	{#each publication.authors as author, i}
		<span class:font-bold={author.isMe}
			>{author.last}, {author.initials}{i === publication.authors.length - 1
				? ''
				: i === publication.authors.length - 2 && publication.authors.length > 2
					? ', & '
					: i === publication.authors.length - 2 && publication.authors.length === 2
						? ' & '
						: ', '}</span
		>
	{/each}
	{publication.year ? `(${publication.year}).` : ''}
	{publication.title}.
	{#if publication.journal}
		<em>{publication.journal.title}</em>{publication.journal.volume &&
		publication.journal.issue &&
		publication.journal.pageRange
			? `, ${publication.journal.volume}(${publication.journal.issue}), ${publication.journal.pageRange.start}-${publication.journal.pageRange.end}.`
			: '.'}
		<a class="max-desktop:hidden" target="_blank" href="https://doi.org/{publication.journal.doi}"
			>https://doi.org/{publication.journal.doi}.</a
		>
		<a class="desktop:hidden" target="_blank" href="https://doi.org/{publication.journal.doi}">🔗</a
		>
	{/if}
</p>
