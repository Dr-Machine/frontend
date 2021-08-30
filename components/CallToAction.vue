<template>
	<div>
		<call-to-action-content />
	</div>
</template>

<script>
import CallToActionContent from '@/components/CallToActionContent'

export default {
	name: 'CallToAction',
	components: {
		'call-to-action-content': CallToActionContent,
	},
}
</script>
