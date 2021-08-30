<!-- component -->
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
<style>
.cursor-grab {
	cursor: grab;
}
</style>

<template>
	<div
		class="
			min-w-screen min-h-screen
			bg-indigo-500
			flex
			items-center
			justify-center
			px-5
			py-5
		"
	>
		<div
			class="
				w-full
				mx-auto
				rounded-3xl
				shadow-lg
				bg-white
				px-10
				pt-16
				pb-10
				text-gray-600
			"
			style="max-width: 350px"
			x-data="app()"
		>
			<div class="overflow-hidden relative mb-10">
				<div
					class="overflow-hidden relative cursor-grab relative"
					@pointerdown="
						;(touchstartX = $event.screenX),
							(touchstartY = $event.screenY)
					"
					@pointerup="
						;(touchendX = $event.screenX),
							(touchendY = $event.screenY),
							$nextTick(() => handleSwipe())
					"
				>
					<template x-for="(item,index) in slides">
						<div
							class="
								w-full
								overflow-hidden
								text-center
								select-none
							"
							x-show="item.show"
							x-transition:enter="transition duration-300 transform ease"
							:x-transition:enter-start="currentTransition.start"
							:x-transition:enter-end="currentTransition.end"
							x-transition:leave="absolute top-0 left-0 transition duration-300 transform ease"
							:x-transition:leave-start="previousTransition.start"
							:x-transition:leave-end="previousTransition.end"
						>
							<div
								class="
									w-64
									h-64
									border
									rounded-full
									mx-auto
									mb-10
									overflow-hidden
									bg-cover bg-center
								"
								:style="`background-image:url(${item.img})`"
							></div>
							<h2
								x-text="item.title"
								class="font-bold text-xl text-indigo-500 mb-3"
							></h2>
							<p
								x-text="item.body"
								class="text-sm leading-tight h-16"
							></p>
						</div>
					</template>
				</div>
			</div>
			<div class="flex justify-center">
				<template x-for="(item,index) in slides">
					<span
						:id="`slideDot${index}`"
						class="w-2 h-2 rounded-full mx-1"
						:class="{
							'bg-indigo-500': index == currentIndex,
							'bg-gray-200': index !== currentIndex,
						}"
					></span>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
function app() {
	return {
		touchstartX: 0,
		touchstartY: 0,
		touchendX: 0,
		touchendY: 0,
		previousIndex: 0,
		currentIndex: 0,
		previousTransition: {
			start: null,
			end: null,
		},
		currentTransition: {
			start: null,
			end: null,
		},
		slides: [
			{
				show: true,
				title: 'Lorem ipsum',
				body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			},
			{
				title: 'Dolor sit amet',
				body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			},
			{
				title: 'Consectetur',
				body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],
		handleSwipe: function () {
			// Stop
			if (
				this.touchstartX - this.touchendX > -20 &&
				this.touchstartX - this.touchendX < 20
			)
				return
			// Set previous index
			this.previousIndex = this.currentIndex
			// Swipe
			if (this.touchendX < this.touchstartX) {
				// Swipe left
				this.currentIndex = Math.min(
					this.slides.length - 1,
					this.currentIndex + 1
				)
				this.previousTransition.start = 'translate-x-none opacity-1'
				this.previousTransition.end = '-translate-x-1/4 opacity-0'
				this.currentTransition.start = 'translate-x-1/4 opacity-0'
				this.currentTransition.end = 'translate-x-none opacity-1'
			} else {
				// Swipe right
				this.currentIndex = Math.max(0, this.currentIndex - 1)
				this.previousTransition.start = 'translate-x-none opacity-1'
				this.previousTransition.end = 'translate-x-1/4 opacity-0'
				this.currentTransition.start = '-translate-x-1/4 opacity-0'
				this.currentTransition.end = 'translate-x-none opacity-1'
			}
			// Check previous index
			if (this.previousIndex !== this.currentIndex) {
				this.showSlide()
			}
		},
		showSlide: function () {
			for (let i = 0; i < this.slides.length; i++) {
				this.slides[i].show = i == this.currentIndex
			}
		},
	}
}
</script>
