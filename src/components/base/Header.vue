<template>
	<header class="header">
		<div class="header-main">
			<img src="@/assets/images/logo.png" alt="" />
			<nav>
				<div>
					<template v-for="nav in navs" :key="nav.title">
						<div>
							<div class="title-text">{{ nav.title }}</div>
							<div class="title-solid"></div>
						</div>
					</template>
				</div>
				<div>
					<div></div>
					<div>Contact Us</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup lang="ts">
const navs = [
	{ scroll: 0, path: '', title: 'Products & Solutions' },
	{ scroll: 0, path: '', title: 'Coverage' },
	{ scroll: 0, path: '', title: 'Our Mission' },
	{ scroll: 0, path: '', title: 'Our Advantages' },
	{ scroll: 0, path: '', title: 'About' },
]

const isLeaveTop = ref(false)
const lastScrollTop = ref(0)

const handleScroll = () => {
	const currentScroll = window.pageYOffset || document.documentElement.scrollTop
	isLeaveTop.value = currentScroll > lastScrollTop.value && currentScroll > 50
	lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header {
	width: 100vw;
	.header-main {
		max-width: 1600px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 60px;
		> img {
			width: 140px;
			height: 28px;
		}
		> nav {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			> div {
				display: flex;
				align-items: center;
				.title-text {
					font-size: 14px;
					line-height: 20px;
				}
			}
		}
	}
}
</style>
