<template>
	<div>
		<hero-content />
		<!-- <div class="relative -mt-12 lg:-mt-24">

		</div> -->
	</div>
</template>

<script>
import HeroContent from '@/components/HeroContent'

export default {
	name: 'Hero',
	components: {
		'hero-content': HeroContent,
	},
}
</script>
