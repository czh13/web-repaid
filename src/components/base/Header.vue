<template>
	<header class="header" :class="{ 'header-hidden': isLeaveTop }">
		<div class="header-main">
			<img src="@/assets/images/logo.png" alt="" />
			<nav>
				<div class="navs" :class="{ showNavs: isShowTab }">
					<template v-for="nav in navs" :key="nav.title">
						<div @click="handleTab(nav.path)">
							<div class="title-text">{{ nav.title }}</div>
							<div class="title-solid"></div>
						</div>
					</template>
				</div>
				<div class="contactBtn">
					<!-- <div class="contact" @click="handleTheme">切换</div> -->
					<BaseButton :color="'#3ab12c'" :bg-color="'#fff'" @click="handleTab('about')">Contact Us</BaseButton>
					<img src="@/assets/images/header_tab_icon.png" alt="" @click="handlShow" />
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
const isShowTab = ref(false)

const handleScroll = () => {
	const currentScroll = window.pageYOffset || document.documentElement.scrollTop
	isLeaveTop.value = currentScroll > lastScrollTop.value && currentScroll > 112
	lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll
	isShowTab.value = false
}

const handleTab = (module: string) => {
	isShowTab.value = false
	const moduleScrolls = useModuleScrolls()
	window.scrollTo({
		top: moduleScrolls.value[module],
		behavior: 'smooth',
	})
}

const handlShow = () => {
	isShowTab.value = !isShowTab.value
}

const handleTheme = () => {
	const root = document.documentElement
	root.classList.toggle('dark-mode')
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
	background: #f0ffef;
	border-bottom: 0.01rem solid #ecf4ec;
	box-sizing: border-box;

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
							color: #3ab33b;
						}
						.title-solid {
							transform: scaleX(1);
							transform-origin: bottom left;
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
						width: 100%;
						border-radius: 0.02rem;
						background: #3ab33b;
						transform: scaleX(0);
						transform-origin: bottom right;
						transition: transform 0.25s ease-out;
					}
				}
			}
			.contactBtn {
				.contact {
					cursor: pointer;
					background: #3ab33b;
					font-family: PingFang SC;
					font-size: 0.14rem;
					font-weight: 500;
					padding: 0.06rem 0.16rem;
					color: #fff;
					border-radius: 0.08rem;
					white-space: nowrap;
				}
				> img {
					display: none;
				}
			}
		}
	}
}

@media (min-width: 1280px) and (max-width: 1439px) {
	.header {
		.header-main {
			gap: 0.4rem;
			padding: 0.4rem 1rem;
			box-sizing: border-box;
			> nav {
				.navs {
					display: flex;
					align-items: center;
					gap: 0.6rem;
					padding: 0 0.16rem;
				}
			}
		}
	}
}

@media (min-width: 767px) and (max-width: 1279px) {
	.header {
		z-index: 99;
		.header-main {
			max-width: 100vw;
			width: 100%;
			gap: 0;
			padding: 0.32rem 0.2rem 0.32rem 1rem;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;

			> img {
				width: 1.48rem;
				height: 0.32rem;
			}
			> nav {
				flex: 0;
				align-items: center;
				justify-content: normal;

				.showNavs {
					display: none;
				}
				.navs {
					gap: 0.4rem;
					padding: 0.2rem 0.16rem;

					box-sizing: border-box;
					position: fixed;
					top: 1.16rem;
					left: 0;
					z-index: 66;
					width: 100vw;
					height: 100vh;
					background: rgba(241, 255, 241);
					flex-direction: column;
					transition: height 0.2s ease;
					> div {
						position: relative;
						.title-text {
							font-size: 0.18rem;
							line-height: 0.2rem;
							padding: 0.06rem 0;
						}
						.title-solid {
							display: none;
						}
					}
				}
				.contactBtn {
					display: flex;
					align-items: center;
					gap: 0.36rem;
					.contact {
						font-size: 0.14rem;
						font-weight: 400;
						padding: 0.08rem 0.06rem;
						border-radius: 0.08rem;
					}
					> img {
						display: block;
						width: 0.48rem;
						height: 0.48rem;
					}
				}
			}
		}
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.header {
		z-index: 999;
		.header-main {
			max-width: 100vw;
			width: 100%;
			gap: 0;
			padding: 0.12rem 0.1rem 0.12rem 0.48rem;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;

			> img {
				width: 1.48rem;
				height: 0.32rem;
			}
			> nav {
				flex: 0;
				align-items: center;
				justify-content: normal;

				.showNavs {
					opacity: 1 !important;
					display: flex !important;
				}
				.navs {
					gap: 0.4rem;
					padding: 0.2rem 0.16rem;
					display: none;
					box-sizing: border-box;
					position: fixed;
					top: 0.58rem;
					left: 0;
					z-index: 66;
					width: 100vw;
					height: 100vh;
					background: rgba(241, 255, 241);
					flex-direction: column;
					transition: opacity 0.2s ease;
					opacity: 0;

					> div {
						position: relative;
						.title-text {
							font-size: 0.14rem;
							line-height: 0.2rem;
							padding: 0.06rem 0;
						}
						.title-solid {
							display: none;
						}
					}
				}
				.contactBtn {
					display: flex;
					align-items: center;
					gap: 0.15rem;
					.contact {
						font-size: 0.14rem;
						font-weight: 400;
						padding: 0.08rem 0.06rem;
						border-radius: 0.08rem;
					}
					> img {
						display: block;
						width: 0.24rem;
						height: 0.24rem;
					}
				}
			}
		}
	}
}
</style>
