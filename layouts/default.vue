<template>
	<div class="leading-normal tracking-normal text-white gradient">
		<Navbar />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		Navbar,
		Footer,
	},
}
</script>
