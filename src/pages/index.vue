<template>
	<main ref="mainRef">
		<BusBanner />
		<BusPay :key="reLoadKey" />
		<BusSolu />
		<BusCov />
		<BusMission />
		<BusAdv />
		<BusAbout />
	</main>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Repaid, a secure, convenient and efficient payment experience',
})

const mainRef = ref<HTMLElement | null>(null)
const reLoadKey = ref(0)

onMounted(() => {
	window.addEventListener('resize', updateWindowSize)

	nextTick(() => {
		if (mainRef.value) {
			const sections = mainRef.value.children
			getScrollTop(sections, 2)
		}
	})
})

const updateWindowSize = () => {
	if (window.innerWidth > 767) {
		reLoadKey.value = window.innerWidth
	}
}

onUnmounted(() => {
	window.removeEventListener('resize', updateWindowSize)
})
</script>

<style lang="scss" scoped></style>
