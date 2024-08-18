<template>
	<section class="solu">
		<div class="solu-main">
			<div class="title">
				<BaseTitleMain>
					<template #one>Solutions</template>
					<template #two>Global Businesses Pay and Get Paid</template>
				</BaseTitleMain>
			</div>
			<div class="solus">
				<div>
					<template v-for="solu in solus" :key="solu.title">
						<div class="solu-desc">
							<div>
								<NuxtIcon :name="solu.icon" filled></NuxtIcon>
							</div>
							<p>{{ solu.title }}</p>
							<span>{{ solu.sec }}</span>
							<span>{{ solu.spans }}</span>
							<div class="solu-box solu-topleft"></div>
							<div class="solu-box solu-topright"></div>
							<div class="solu-box solu-bottomleft"></div>
							<div class="solu-box solu-bottomright"></div>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const solus = [
	{
		title: 'E-commerce',
		sec: 'Retail, fashion, consumer goods, digital services',
		spans: `For ecommerce offers intuitive software, international capabilities and innovative protection`,
		icon: 'solu_icon_one',
	},
	{
		title: 'Digital media, entertainment',
		sec: 'Online entertainment, live streaming',
		spans: 'Diverse and localized payment methods. Provide a online and mobile checkout experience',
		icon: 'solu_icon_two',
	},
	{
		title: 'Online gaming',
		sec: 'Sports, e-sports, streaming, VR, simulation game',
		spans: 'The expertise and processing capabilities to allow gaming companies to make the right business decisions',
		icon: 'solu_icon_thr',
	},
	{
		title: 'Finance facilitators',
		sec: 'Fintech and financial service providers',
		spans: 'Subscription or software platforms with Repaid Integrated Payments solution that supports you at scale',
		icon: 'solu_icon_four',
	},
	{
		title: 'Payroll and rewards',
		sec: 'Local firm payroll, divide accounts and the profits',
		spans: 'Optimal performance, fast settlement to delight your customers and partners',
		icon: 'solu_icon_five',
	},
	{
		title: 'Cryptos and exchange',
		sec: 'Exchanges and wallets',
		spans: 'Full flexibility, get paid in fiat and settled in stablecoin. The funding flows are built for your needs no matter where you are in the world',
		icon: 'solu_icon_six',
	},
]
</script>

<style lang="scss" scoped>
.solu {
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	.solu-main {
		padding: 1.2rem 0;
		.title {
			text-align: center;
			margin-bottom: 0.6rem;
		}
		.solus {
			width: 100%;
			position: relative;
			width: 100vw;
			border: 0.01rem solid #eee;
			display: flex;
			align-items: center;
			justify-content: center;
			> div {
				display: grid;
				grid-template-columns: repeat(3, 4.8rem);
				grid-template-rows: repeat(2, 1fr);

				.solu-desc {
					display: flex;
					flex-direction: column;
					padding: 0.42rem 0 0.2rem 0.45rem;
					border: 0.01rem solid #eee;
					box-sizing: border-box;
					position: relative;
					border-bottom: none;
					border-top: none;
					&:hover {
						background: #3ab33b;
						cursor: pointer;
						color: #fff;
						> div {
							:deep(.nuxt-icon svg) {
								color: #fff;
							}
						}
					}
					> div {
						width: 0.32rem;
						height: 0.32rem;
						:deep(.nuxt-icon svg) {
							color: #3ab33b;
						}
					}
					> p {
						font-size: 0.2rem;
						font-weight: 500;
						line-height: 0.22rem;
						margin-top: 0.3rem;
					}
					> span {
						font-size: 0.18rem;
						font-weight: 300;
						line-height: 26x;
						margin-top: 0.2rem;
					}

					.solu-box {
						width: 0.12rem;
						height: 0.12rem;
						border: 0.01rem solid #ebebeb;
						position: absolute;
						z-index: 11;
						background: #fff;
					}
					.solu-topleft {
						top: -0.07rem;
						left: -0.07rem;
					}
					.solu-topright {
						top: -0.07rem;
						right: -0.09rem;
					}
					.solu-bottomleft {
						bottom: -0.07rem;
						left: -0.07rem;
					}
					.solu-bottomright {
						bottom: -0.07rem;
						right: -0.09rem;
					}
				}
			}
		}
		.solus::after {
			content: '';
			display: block;
			height: 0.01rem;
			width: 100%;
			background: #eee;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}
}

@media (min-width: 1280px) and (max-width: 1439px) {
	.solu {
		.solu-main {
			.solus {
				> div {
					grid-template-columns: repeat(3, 3.6rem);

					.solu-desc {
						padding: 0.42rem 0.2rem 0.4rem 0.45rem;
					}
				}
			}
		}
	}
}

@media (min-width: 768px) and (max-width: 1280px) {
	.solu {
		.solu-main {
			padding: 0.6rem 0.16rem;
			.title {
				margin-bottom: 0.4rem;
			}
			.solus {
				width: 100%;
				position: relative;
				border: none;
				display: flex;
				align-items: center;
				justify-content: center;
				> div {
					display: grid;
					flex-direction: column;
					grid-template-columns: repeat(2, 3rem);
					grid-template-rows: repeat(3, 1fr);

					.solu-desc {
						display: flex;
						flex-direction: column;
						padding: 0.24rem;
						border: 0.01rem solid #eee;
					}
				}
			}
			.solus::after {
				display: none;
			}
		}
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.solu {
		.solu-main {
			padding: 0.6rem 0.16rem;
			.title {
				margin-bottom: 0.4rem;
			}
			.solus {
				width: 100%;
				position: relative;
				border: 0.01rem solid #eee;
				display: flex;
				align-items: center;
				justify-content: center;
				> div {
					display: flex;
					flex-direction: column;

					grid-template-columns: repeat(3, 4.8rem);
					grid-template-rows: repeat(2, 1fr);

					.solu-desc {
						display: flex;
						flex-direction: column;
						padding: 0.24rem;
						border: 0.01rem solid #eee;
						border-bottom: 0.01rem solid #eee;
						border-top: 0.01rem solid #eee;

						.solu-box {
							display: none;
						}
					}
				}
			}
			.solus::after {
				display: none;
			}
		}
	}
}
</style>
