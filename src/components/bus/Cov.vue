<template>
	<section class="cov">
		<div class="cov-main">
			<div class="title">
				<BaseTitleMain>
					<template #one>Coverage</template>
					<template #two>Get More Value from Every Transaction Anywhere in The World</template>
				</BaseTitleMain>
			</div>
			<div class="covs">
				<div>
					<template v-for="cov in covs" :key="cov.name">
						<div class="cov-bgc">
							<ClientOnly>
								<img :src="cov.bgcImg" :alt="cov.name" />
							</ClientOnly>
							<div class="cov-desc">
								<p>{{ cov.name }}</p>
								<div></div>
								<span>{{ cov.text }}</span>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import CovBgcOne from '@/assets/images/cov_bgc_one.png'
import CovBgcTwo from '@/assets/images/cov_bgc_two.png'
import CovBgcThr from '@/assets/images/cov_bgc_thr.png'

import CovBgcOnePH from '@/assets/images/cov_bgc_one_phone.png'
import CovBgcTwoPH from '@/assets/images/cov_bgc_two_phone.png'
import CovBgcThrPH from '@/assets/images/cov_bgc_thr_phone.png'

import CovBgcOneIP from '@/assets/images/cov_bgc_one_ipad.png'
import CovBgcTwoIP from '@/assets/images/cov_bgc_two_ipad.png'
import CovBgcThrIP from '@/assets/images/cov_bgc_thr_ipad.png'
const covs = ref([
	{
		name: 'LATIN AMERICA',
		text: 'Spurred by growing demand for online banking solutions, favorable demographics, and a large underserved population, fintech activity is expanding in Latin America. Latin America has about 450 million mobile phone subscribers and is expected to reach 484 million by 2025. Of those 450 million users, nearly 80% access the Internet through mobile phones. Brazil contributes about 42% of B2C retail transactions in Latin America. Due to the rise of new banks, e-wallets, etc., the increasing demand by consumers and businesses is driving the growth of digital payments and the relevant solutions.',
		bgcImg: CovBgcOne,
	},
	{
		name: 'ASIA',
		text: 'With 77% of Asian consumers choosing to shop on their mobile phones, the highest percentage in the world, these groups are also placing higher demands on new payment solutions. With its demographic dividend and open market, the Philippines offers more possibilities for emerging digital payments. As the Covid-19 has changed the habits of Filipinos and more people are are open to digital banking, the adoption and use of GCash solutions has surged.',
		bgcImg: CovBgcTwo,
	},
	{
		name: 'AFRICA',
		text: "In 2022, African e-commerce turnover was about $32.5 billion, and it is expected to rise to $60 billion by 2027. The number of e-commerce consumers is expected to increase from 388 million in 2022 to 610 million in 2027. With the development of diversified payment methods, the digital payment industry in Africa will be more dynamic. Nigeria's emergence as a country with the fintech sector has its unique social context and is as indispensable as government support for the digital economy. As Africa's largest economy, Nigeria has actively promoted the diversification of its economic structure, and regards the digital economy as the future of sustainable economic growth",
		bgcImg: CovBgcThr,
	},
])

const checkDevice = () => {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera
	if (/android/i.test(userAgent) || /iPhone/.test(userAgent)) {
		covs.value[0].bgcImg = CovBgcOnePH
		covs.value[1].bgcImg = CovBgcTwoPH
		covs.value[2].bgcImg = CovBgcThrPH
	} else if (/iPad|iPod/.test(userAgent) && !window.MSStream) {
		covs.value[0].bgcImg = CovBgcOneIP
		covs.value[1].bgcImg = CovBgcTwoIP
		covs.value[2].bgcImg = CovBgcThrIP
	} else {
	}
}

const updateWindowSize = () => {
	if (window.innerWidth <= 767) {
		covs.value[0].bgcImg = CovBgcOnePH
		covs.value[1].bgcImg = CovBgcTwoPH
		covs.value[2].bgcImg = CovBgcThrPH
	} else if (window.innerWidth > 1280) {
		covs.value[0].bgcImg = CovBgcOne
		covs.value[1].bgcImg = CovBgcTwo
		covs.value[2].bgcImg = CovBgcThr
	} else {
		covs.value[0].bgcImg = CovBgcOneIP
		covs.value[1].bgcImg = CovBgcTwoIP
		covs.value[2].bgcImg = CovBgcThrIP
	}
}

onMounted(() => {
	checkDevice()
	window.addEventListener('resize', updateWindowSize)
})

onUnmounted(() => {
	window.removeEventListener('resize', updateWindowSize)
})
</script>

<style lang="scss" scoped>
.cov {
	width: 100vw;
	background: #fafafa;

	.cov-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.2rem 0;
		.title {
			text-align: center;
			margin-bottom: 0.6rem;
		}
		.covs {
			> div {
				display: flex;
				align-items: flex-start;
				.cov-bgc {
					width: 4.8rem;
					height: 5.86rem;
					border-radius: 0.08rem;
					cursor: pointer;
					overflow: hidden;
					position: relative;
					&:hover {
						.cov-desc {
							top: 0;
							transition: top 0.3s ease;
						}
					}
					> img {
						width: 100%;
						height: 100%;
					}
					.cov-desc {
						background: #0000008a;
						padding: 0.2rem 0.4rem 0.34rem;
						color: #fff;
						display: flex;
						flex-direction: column;
						gap: 0.2rem;
						border-radius: 0.08rem;
						border-top: 0.08rem solid #3ab33b;
						box-sizing: border-box;
						height: 100%;
						position: absolute;
						top: 100%;
						left: 0;

						transition: top 0.3s ease;
						> p {
							font-size: 0.26rem;
							font-weight: 400;
							line-height: 0.36rem;
						}
						> div {
							height: 0.01rem;
							width: 100%;
							background: #fff;
						}
						> span {
							font-size: 0.18rem;
							line-height: 0.28rem;
						}
					}
				}
			}
		}
	}
}

@media (min-width: 1280px) and (max-width: 1439px) {
	.cov {
		.cov-main {
			.covs {
				> div {
					.cov-bgc {
						width: 3.6rem;
						height: 6.68rem;
					}
				}
			}
		}
	}
}

@media (min-width: 768px) and (max-width: 1280px) {
	.cov {
		.cov-main {
			padding: 0.8rem;
			.title {
				margin-bottom: 0.6rem;
			}
			.covs {
				> div {
					display: flex;
					flex-direction: column;
					gap: 0.6rem;
					align-items: flex-start;
					.cov-bgc {
						width: 6.08rem;
						height: 4.31rem;
						border-radius: 0.08rem;
						cursor: pointer;
						overflow: hidden;
						position: relative;
						&:hover {
							.cov-desc {
								top: 0;
								transition: top 0.3s ease;
							}
						}
						> img {
							width: 100%;
							height: 100%;
						}
						.cov-desc {
							background: #0000008a;
							padding: 0.2rem 0.15rem 0;
							gap: 0.15rem;
							border-radius: 0.08rem;
							border-top: 0.06rem solid #3ab33b;

							transition: top 0.3s ease;
							> p {
								font-size: 0.3rem;
								line-height: 0.28rem;
							}
						}
					}
				}
			}
		}
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.cov {
		.cov-main {
			padding: 0.6rem 0.16rem;
			.title {
				margin-bottom: 0.4rem;
			}
			.covs {
				> div {
					display: flex;
					flex-direction: column;
					gap: 0.12rem;
					align-items: flex-start;
					.cov-bgc {
						width: 3.43rem;
						height: 6.68rem;
						border-radius: 0.08rem;
						cursor: pointer;
						overflow: hidden;
						position: relative;
						&:hover {
							.cov-desc {
								top: 0;
								transition: top 0.3s ease;
							}
						}
						> img {
							width: 100%;
							height: 100%;
						}
						.cov-desc {
							background: #0000008a;
							padding: 0.2rem 0.15rem 0;
							gap: 0.15rem;
							border-radius: 0.08rem;
							border-top: 0.06rem solid #3ab33b;

							transition: top 0.3s ease;
							> p {
								font-size: 0.22rem;
								line-height: 0.28rem;
							}
						}
					}
				}
			}
		}
	}
}
</style>
