<template>
	<div>
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
