<script lang="ts">
	import { base } from '$app/paths';
</script>

<article class="grid max-desktop:grid-rows-2 desktop:grid-cols-2">
	<section>
		<figure>
			<img alt="Heather Do's headshot" src="{base}/images/heather-min.jpg" />
		</figure>
	</section>
	<div class="flex items-center justify-end">
		<section class="max-w-prose">
			<p>
				Hello! I am a Ph.D. student in Interdisciplinary Studies in Human Development at the
				University of Pennsylvania Graduate School of Education.
			</p>
			<p>
				My research examines how risk and protective factors, along with the intersection of home,
				school, and neighborhood environments, shape child and adolescent development in global
				contexts. I aim to use research findings to create contextually relevant intervention
				programs, inform policies, and form reliable resources that support children, adolescents,
				and their families.
			</p>
			<p>
				My work has been published in top journals in the field, including <em
					>Developmental Psychology</em
				>, <em>American Journal of Psychiatry</em>, and
				<em>International Journal of Early Childhood</em>.
			</p>
			<p>
				For conversation, please reach me via email at <a
					class="underline"
					href="mailto:htdo@upenn.edu">htdo@upenn.edu</a
				>.
			</p>
		</section>
	</div>
</article>

<style>
	article {
		padding: 4rem clamp(0px, calc(100vw - var(--desktop-min-width)), 12.5rem) 0;
	}

	img {
		max-height: 42rem;
	}
</style>
