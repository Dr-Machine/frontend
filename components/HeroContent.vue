<template>
	<div class="h-screen py-24">
		<div
			class="
				h-full
				flex flex-col
				justify-center
				items-center
				text-center
				md:text-center
			"
		>
			<h1 class="my-4 text-5xl font-bold leading-tight">Dr. Machine</h1>
			<p class="leading-tight text-2xl mb-8">
				Intelligent Medical Imaging
			</p>

			<button
				class="
					mx-auto
					lg:mx-0
					hover:underline
					bg-white
					text-gray-800
					font-bold
					rounded-full
					mb-8
					py-4
					px-8
					shadow-lg
				"
			>
				Get started!
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeroContent',
}
</script>
