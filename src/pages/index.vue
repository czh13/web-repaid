<template>
	<main ref="mainRef">
		<BusBanner />
		<BusPay />
		<BusSolu />
		<BusCov />
		<BusMission />
		<BusAdv />
		<BusAbout />
	</main>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'A LEADING PAYMENT SOLUTION PROVIDER BUILD FOR SUCCESS IN EMERGING MARKETS',
})

const mainRef = ref<HTMLElement | null>(null)
onMounted(() => {
	nextTick(() => {
		if (mainRef.value) {
			const sections = mainRef.value.children
			getScrollTop(sections, 2)
		}
	})
})
</script>

<style lang="scss" scoped></style>
