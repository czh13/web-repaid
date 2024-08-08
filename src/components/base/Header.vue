<template>
	<header class="header" :class="{ 'header-hidden': isLeaveTop }">
		<div class="header-main">
			<img src="@/assets/images/logo.png" alt="" />
			<nav>
				<div class="navs">
					<template v-for="nav in navs" :key="nav.title">
						<div>
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
	isLeaveTop.value = currentScroll > lastScrollTop.value && currentScroll > 112
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
.header-hidden {
	transform: translateY(-100%);
}
.header {
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f2fff3;
	border-bottom: 1px solid #ecf4ec;

	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.5s ease;
	z-index: 99;
	.header-main {
		max-width: 1600px;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 60px;
		padding: 40px 8px;
		box-sizing: border-box;
		> img {
			width: 140px;
			height: 28px;
		}
		> nav {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.navs {
				display: flex;
				align-items: center;
				gap: 60px;
				padding: 0 16px;
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
						font-size: 14px;
						line-height: 20px;
						white-space: nowrap;
						cursor: pointer;
						color: #000;
						padding: 6px 0;
					}
					.title-solid {
						height: 2px;
						position: absolute;
						bottom: 0;
						display: none;
						width: 100%;
						border-radius: 2px;
						background: #39b54a;
					}
				}
			}
			.contactBtn {
				.contact {
					cursor: pointer;
					background: #39b54a;
					font-family: PingFang SC;
					font-size: 14px;
					font-weight: 500;
					padding: 6px 16px;
					color: #fff;
					border-radius: 8px;
					white-space: nowrap;
				}
			}
		}
	}
}
</style>
