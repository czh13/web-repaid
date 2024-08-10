<template>
	<header class="header" :class="{ 'header-hidden': isLeaveTop }">
		<div class="header-main">
			<img src="@/assets/images/logo.png" alt="" />
			<nav>
				<div class="navs">
					<template v-for="nav in navs" :key="nav.title">
						<div @click="handleTab(nav.path)">
							<div class="title-text">{{ nav.title }}</div>
							<div class="title-solid"></div>
						</div>
					</template>
				</div>
				<div class="contactBtn">
					<div></div>
					<div class="contact">Contact Us</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup lang="ts">
const navs = [
	{ scroll: 0, path: 'solu', title: 'Products & Solutions' },
	{ scroll: 0, path: 'cov', title: 'Coverage' },
	{ scroll: 0, path: 'mission', title: 'Our Mission' },
	{ scroll: 0, path: 'adv', title: 'Our Advantages' },
	{ scroll: 0, path: 'about', title: 'About' },
]

const isLeaveTop = ref(false)
const lastScrollTop = ref(0)

const handleScroll = () => {
	const currentScroll = window.pageYOffset || document.documentElement.scrollTop
	isLeaveTop.value = currentScroll > lastScrollTop.value && currentScroll > 112
	lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll
}

const handleTab = (module: string) => {
	const moduleScrolls = useModuleScrolls()
	window.scrollTo({
		top: moduleScrolls.value[module],
		behavior: 'smooth',
	})
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header-hidden {
	transform: translateY(-100%);
}
.header {
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f2fff3;
	border-bottom: 0.01rem solid #ecf4ec;

	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.5s ease;
	z-index: 99;
	.header-main {
		max-width: 16rem;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.4rem 0.08rem;
		box-sizing: border-box;
		> img {
			width: 1.4rem;
			height: 0.28rem;
		}
		> nav {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.navs {
				display: flex;
				align-items: center;
				gap: 0.6rem;
				padding: 0 0.16rem;
				> div {
					position: relative;
					&:hover {
						.title-text {
							color: #39b54a;
						}
						.title-solid {
							display: block;
						}
					}
					.title-text {
						font-size: 0.14rem;
						line-height: 0.2rem;
						white-space: nowrap;
						cursor: pointer;
						color: #000;
						padding: 0.06rem 0;
					}
					.title-solid {
						height: 0.02rem;
						position: absolute;
						bottom: 0;
						display: none;
						width: 100%;
						border-radius: 0.02rem;
						background: #39b54a;
					}
				}
			}
			.contactBtn {
				.contact {
					cursor: pointer;
					background: #39b54a;
					font-family: PingFang SC;
					font-size: 0.14rem;
					font-weight: 500;
					padding: 0.06rem 0.16rem;
					color: #fff;
					border-radius: 0.08rem;
					white-space: nowrap;
				}
			}
		}
	}
}
</style>
