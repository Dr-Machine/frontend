<template>
	<div>
		<client-only>
			<back-to-top text="Back to top" visibleoffset="100"></back-to-top>
		</client-only>
		<hero />
		<features />
		<team />
		<prices />
		<call-to-action />
	</div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'
import Team from '@/components/Team'

export default {
	name: 'LandingPage',
	components: {
		hero: Hero,
		features: Features,
		teasers: Teasers,
		prices: Prices,
		team: Team,
		'call-to-action': CallToAction,
	},
}
</script>
