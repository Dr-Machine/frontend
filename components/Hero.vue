<template>
	<div class="h-screen py-24 bg-dogeblue-primary">
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
			<h1 class="my-4 leading-tight text-6xl font-bold">Dr. Machine</h1>
			<p class="mb-8 leading-tight text-2xl text-gray-400">
				Intelligent Medical Imaging
			</p>

			<button
				class="
					mx-auto
					my-4
					px-6
					py-3
					font-semibold
					rounded-lg
					bg-dogegreen
					text-md text-dogeblue-primary
					border-2 border-dogegreen
					hover:text-white
					hover:bg-dogeblue-primary
					hover:border-dogegreen
					focus:text-white
					focus:bg-dogeblue-secondary
					focus:border-dogeblue-secondary
					lg:mx-0
				"
			>
				Get started!
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Hero',
}
</script>
