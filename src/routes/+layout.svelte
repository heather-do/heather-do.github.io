<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header class="sticky top-0 z-10 max-desktop:pt-4">
	<nav
		class="grid border-b-2 max-desktop:top-0 max-desktop:h-24 max-desktop:grid-rows-2 desktop:h-32 desktop:grid-cols-2"
	>
		<div id="home" class="flex items-center max-desktop:justify-center">
			<a class="text-3xl font-semibold" href="/">Hang (Heather) Do</a>
		</div>
		<div id="menu" class="flex max-desktop:justify-center desktop:justify-end">
			<ul
				class="flex flex-row max-desktop:gap-8 max-desktop:text-xl desktop:gap-16 desktop:text-2xl"
			>
				<li><a href="/about">About</a></li>
				<li><a href="/research">Research</a></li>
				<li><a target="_blank" href="/cv.pdf">CV</a></li>
				<li id="logo">
					<a
						class="-translate-y-0.5 max-desktop:h-6 max-desktop:w-6 desktop:h-8 desktop:w-8"
						target="_blank"
						href="https://www.linkedin.com/in/heathertdo/"
						aria-label="Heather Do's LinkedIn profile"
						><svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"
							><g fill="none" fill-rule="evenodd"
								><path
									class="logo-rec"
									d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
									fill="#884E41"
								/><path
									d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
									fill="#fff5ec"
								/></g
							></svg
						></a
					>
				</li>
			</ul>
		</div>
	</nav>
</header>

<main>
	{@render children()}
</main>

<style>
	header {
		background-color: var(--color-background);
	}

	nav {
		padding: 0 clamp(0px, calc(100vw - var(--desktop-min-width)), 12.5rem);
		border-bottom-color: var(--color-text-primary);
	}

	li {
		display: flex;
		align-items: center;
	}

	.logo-rec {
		fill-opacity: 0.7;
	}

	#logo a:hover .logo-rec {
		fill-opacity: 1;
	}
</style>
