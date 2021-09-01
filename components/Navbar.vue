<template>
	<nav :class="headerClassList" class="fixed w-full z-30 top-0">
		<div
			class="
				container
				flex flex-wrap
				w-full
				mx-auto
				py-1
				items-center
				justify-between
			"
		>
			<div class="flex items-center pl-4 md:pl-0">
				<!-- <logo :isStickable="true" :isSticky="isSticky" /> -->
				<h1 class="font-bold text-2xl">Dr. Machine</h1>
			</div>
			<div class="block lg:hidden pr-4">
				<button
					class="
						flex
						p-1
						items-center
						text-white
						hover:text-dogegreen
					"
					@click.prevent.stop="onToggleClick"
				>
					<svg
						class="fill-current h-6 w-6"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>

			<div
				:class="navContentClassList"
				class="
					flex-grow
					w-full
					z-20
					mt-2
					p-4
					bg-white
					text-white
					lg:flex
					lg:w-auto
					lg:block
					lg:bg-transparent
					lg:mt-0
					lg:p-0
					lg:items-center
				"
			>
				<ul class="list-reset lg:flex justify-end flex-1 items-center">
					<li class="mr-3">
						<a
							class="
								px-4
								py-2
								inline-block
								text-white
								hover:text-dogegreen
							"
							href="#"
							>Services</a
						>
					</li>
					<li class="mr-3" @click="scrollTo('team')">
						<a
							class="
								px-4
								py-2
								cursor-pointer
								inline-block
								text-white
								hover:text-dogegreen
							"
							>Team</a
						>
					</li>
					<li class="mr-3">
						<a
							class="
								px-4
								py-2
								inline-block
								text-white
								hover:text-dogegreen
							"
							href="#"
							>Pricing</a
						>
					</li>
					<li class="mr-3">
						<a
							class="
								px-4
								py-2
								inline-block
								text-white
								hover:text-dogegreen
							"
							href="#"
							>Contact</a
						>
					</li>
				</ul>
				<a href="/login">
					<button
						:class="navActionClassList"
						class="
							mx-auto
							px-4
							py-2
							rounded-lg
							text-md text-white
							border-2 border-dogegreen
							focus:text-white
							focus:bg-dogeblue-secondary
							focus:border-dogeblue-secondary
							lg:mt-0
						"
					>
						Log in
					</button>
				</a>
			</div>
		</div>
		<hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
	</nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
	name: 'Navbar',
	components: {
		logo: Logo,
	},
	data() {
		return {
			scrollY: 0,
			isOpen: false,
		}
	},
	computed: {
		isSticky() {
			return this.scrollY > 10
		},
		headerClassList() {
			return this.isSticky ? 'bg-dogeblue-primary' : ''
		},
		navActionClassList() {
			return this.isSticky
				? 'bg-dogegreen text-dogeblue-primary hover:text-white hover:bg-dogeblue-primary'
				: 'bg-dogeblue-primary text-white hover:text-dogeblue-primary hover:bg-dogegreen'
		},
		navContentClassList() {
			let classList = this.isSticky
				? 'bg-dogeblue-secondary'
				: 'bg-dogeblue-secondary'
			if (!this.isOpen) {
				classList += ` hidden`
			}
			return classList
		},
	},
	methods: {
		onClick() {
			this.isOpen = false
		},
		onScroll() {
			this.scrollY = window.scrollY
		},
		onToggleClick() {
			this.isOpen = !this.isOpen
		},
		scrollTo(id) {
			var element = document.getElementById(id)
			element.scrollIntoView({ behavior: 'smooth' })
		},
	},
	mounted() {
		this.scrollY = window.scrollY
		document.addEventListener('click', this.onClick)
		document.addEventListener('scroll', this.onScroll)
	},
	beforeDestroy() {
		document.removeEventListener('click', this.onClick, true)
		document.removeEventListener('scroll', this.onScroll, true)
	},
}
</script>
