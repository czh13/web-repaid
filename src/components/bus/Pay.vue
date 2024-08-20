<template>
	<section class="pay" :style="{ borderBottom: currentType ? 'none' : '' }">
		<div class="pay-main">
			<div class="pay-tab" :style="{ borderBottom: currentType ? '0.01rem solid #eee' : '' }">
				<div :class="{ activeTab: currentType === 'ins' }" @click="handleClick('ins')">
					<div class="pay-icon">
						<div>
							<NuxtIcon name="pay_in_icon" filled></NuxtIcon>
						</div>
					</div>
					<div class="pay-type">
						<p>CORE PRODUCT - PAY-INS</p>
						<span>Stride into new markets with the support of local payment methods</span>
					</div>
					<div class="solu-box solu-topleft"></div>
					<div class="solu-box solu-topright"></div>
					<div class="solu-box solu-bottomleft"></div>
					<div class="solu-box solu-bottomright"></div>
				</div>
				<div id="pays" :class="{ activeTab: currentType === 'outs' }" @click="handleClick('outs')">
					<div class="pay-icon">
						<div>
							<NuxtIcon name="pay_outs_icon" filled></NuxtIcon>
						</div>
					</div>
					<div class="pay-type">
						<p>CORE PRODUCT - PAYOUTS</p>
						<span>Seamlessly send payouts with infrastructure built to elevate the local customer experience</span>
					</div>
					<div class="solu-box solu-topleft"></div>
					<div class="solu-box solu-topright"></div>
					<div class="solu-box solu-bottomleft"></div>
					<div class="solu-box solu-bottomright"></div>
				</div>
			</div>
			<div id="contents">
				<BaseAnimateOp v-model="isAnimate">
					<div class="pay-content" :class="{ activeHeight: !!currentType }">
						<div>
							<div class="spans">
								<div>
									<span v-for="s in typeSpans[currentType as keyof typeof typeSpans]" :key="s">{{ s }}</span>
								</div>
							</div>
							<div class="shows">
								<img src="@/assets/images/pay-code.png" alt="" />
								<img src="@/assets/images/pay-cashier.png" alt="" />
							</div>
						</div>
					</div>
				</BaseAnimateOp>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const currentType = ref('')
const isAnimate = defineModel()

const typeSpans = {
	ins: [
		'Increase acceptance rates automatically with Repaid formatting payments to fit the preferences of each merchant and customer',
		'Strive local business and diversified payment methods. Receive payments in local currencies, settle funds fast, and gain valuable insights',
	],
	outs: [
		'Fast payout methods to transform customer local payment experiences',
		'Make payouts to bank accounts using local clearing methods',
		'Funds arrive directly and quickly in the same business day',
	],
}

const handleClick = (type: string) => {
	isAnimate.value = true
	currentType.value = type

	window.innerWidth <= 1280 && handleShowTab(type)

	nextTick(() => {
		const moduleScrolls = useModuleScrolls()
		const contentsDom = document.getElementById('contents') as HTMLElement
		const height = contentsDom.offsetHeight

		for (const key in moduleScrolls.value) {
			moduleScrolls.value[key] = moduleScrolls.value[key] + height
		}
	})
}

const handleShowTab = (type: string) => {
	const newContentsDom = document.getElementById('newContents')
	newContentsDom?.remove()

	const contentsDom = document.getElementById('contents') as HTMLElement
	const paysDom = document.getElementById('pays')

	nextTick(() => {
		const cloneContentsDom = contentsDom.cloneNode(true) as HTMLElement
		cloneContentsDom.id = 'newContents'
		cloneContentsDom.style.display = 'block'
		type === 'ins' && paysDom?.parentNode?.insertBefore(cloneContentsDom, paysDom)
		type === 'outs' && paysDom?.parentNode?.appendChild(cloneContentsDom)
		contentsDom.style.display = 'none'
	})
}
</script>

<style lang="scss" scoped>
.pay {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 0.01rem solid #eeeeee;
	.pay-main {
		max-width: 16.2rem;
		width: 100%;

		.pay-tab {
			display: flex;
			align-items: center;
			> div {
				// width: 90%;

				position: relative;
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.2rem;

				padding: 0.4rem 0;
				padding-left: 1rem;
				box-sizing: border-box;

				max-height: 1.34rem;
				height: 100%;
				border: 0.01rem solid #eeeeee;
				border-top: none;
				border-bottom: none;

				.pay-icon {
					border: 0.01rem solid #eeeeee;
					border-radius: 50%;
					box-shadow: 0px -3.2px 0px 0px #3e3e3e0a inset;
					display: flex;
					align-items: center;
					justify-content: center;
					> div {
						width: 0.24rem;
						height: 0.24rem;
						padding: 0.15rem;
						:deep(.nuxt-icon svg) {
							color: #8f8f8f;
						}
					}
				}
				.pay-type {
					display: flex;
					flex-direction: column;
					gap: 0.06rem;
					cursor: pointer;
					> p {
						font-size: 0.2rem;
						font-weight: 500;
						line-height: 0.26rem;
						color: #8f8f8f;
					}
					> span {
						font-size: 0.16rem;
						font-weight: 400;
						line-height: 0.2rem;
						color: #8f8f8f;

						display: block;
						// width: 99%;
						// white-space: nowrap;
					}
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
					top: -0.08rem;
					right: -0.08rem;
				}
				.solu-bottomleft {
					bottom: -0.07rem;
					left: -0.07rem;
				}
				.solu-bottomright {
					bottom: -0.07rem;
					right: -0.08rem;
				}
			}
			> div:nth-of-type(2) {
				margin-left: -0.01rem;
			}
			.activeTab {
				border-top: 0.02rem solid rgba(62, 197, 98, 0.8);
				.pay-icon {
					> div {
						:deep(.nuxt-icon svg) {
							color: #3ab33b;
						}
					}
				}
				.pay-type {
					> p {
						color: #000;
					}
				}
			}
		}
		.pay-content {
			width: calc(100% - 0.02rem);
			height: 0;
			border-left: 0.01rem solid #eeeeee;
			border-right: 0.01rem solid #eeeeee;
			overflow: hidden;
			transition: height 0.5s ease;
			box-sizing: border-box;
			> div {
				box-shadow: 0 0 49px 0px #3030300f;
				padding: 0.36rem 0.52rem;
				border-radius: 0.16rem;
				height: 6.34rem;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				gap: 0.44rem;
				.spans {
					width: 38%;
					> div {
						display: flex;
						flex-direction: column;
						gap: 0.52rem;
						align-self: center;
						> span {
							font-family: Alibaba PuHuiTi 2;
							font-size: 0.25rem;
							line-height: 0.39rem;
							color: #8f8f8f;
							display: block;
							font-weight: normal;
						}
					}
				}
				.shows {
					align-self: normal;
					position: relative;
					> img:nth-of-type(1) {
						width: 6.88rem;
						height: 3.44rem;
					}
					> img:nth-of-type(2) {
						position: absolute;
						z-index: 10;
						right: -1rem;
						bottom: 0;
						width: 2.72rem;
						height: 4.75rem;
					}
				}
			}
		}

		.activeHeight {
			height: 7rem;
			padding: 0.3rem;
		}
	}
}

@media (min-width: 1280px) and (max-width: 1439px) {
	.pay {
		padding: 0 1rem;
		box-sizing: border-box;
		.pay-main {
			max-width: 100%;
			width: 100%;

			.pay-tab {
				> div {
					padding-left: 0.1rem;
					.pay-type {
						> span {
							white-space: normal;
						}
					}
				}
			}
			.pay-content {
				> div {
					height: 4.22rem;

					.spans {
						width: 38%;
						> div {
							> span {
								font-size: 0.18rem;
								line-height: 0.28rem;
							}
						}
					}
					.shows {
						> img:nth-of-type(1) {
							width: 4.58rem;
							height: 2.29rem;
						}
						> img:nth-of-type(2) {
							position: absolute;
							z-index: 10;
							right: -1rem;
							bottom: 0;
							width: 1.81rem;
							height: 3.17rem;
						}
					}
				}
			}
			.activeHeight {
				height: 100%;
				padding: 0.3rem;
			}
		}
	}
}

@media (min-width: 767px) and (max-width: 1280px) {
	.pay {
		flex-direction: column;
		padding: 0 0.8rem;
		box-sizing: border-box;
		.pay-main {
			max-width: 100vw;
			width: 100%;
			.pay-tab {
				flex-direction: column;
				width: 100%;

				> div {
					width: 100%;
					gap: 0.2rem;
					padding: 0.2rem 0.5rem;
					max-height: 100%;
					border: 0.01rem solid #eeeeee;
					border-top: none;
					border-bottom: 0.01rem solid #eeeeee;
					justify-content: flex-start;

					.pay-icon {
						> div {
							width: 0.21rem;
							height: 0.21rem;
							padding: 0.13rem;
						}
					}
					.pay-type {
						margin-bottom: 0;
						> p {
							font-size: 0.18rem;
							font-weight: 500;
							line-height: 0.26rem;
							color: #8f8f8f;
						}
						> span {
							white-space: normal;
						}
					}
				}
			}
			.pay-content {
				height: 0;
				border-radius: 0 0 0.16rem 0.16rem;
				border: none;
				> div {
					box-shadow: none;
					padding: 0.2rem 0.12rem 0.8rem;
					height: 100%;
					display: flex;
					align-items: center;
					flex-direction: column;
					gap: 0.44rem;
					.spans {
						width: 100%;
						> div {
							gap: 0.2rem;
							align-self: center;
							> span {
								font-size: 0.16rem;
								line-height: 0.28rem;
							}
						}
					}
					.shows {
						> img:nth-of-type(1) {
							width: 2.74rem;
							height: 1.37rem;
						}
						> img:nth-of-type(2) {
							position: absolute;
							z-index: 10;
							right: -0.2rem;
							bottom: -0.7rem;
							width: 1.08rem;
							height: 1.89rem;
						}
					}
				}
			}

			.activeHeight {
				height: 100%;
				padding: 0.1rem;
			}
		}
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.pay {
		flex-direction: column;
		padding: 0 0.16rem;
		box-sizing: border-box;
		.pay-main {
			max-width: 100vw;
			.pay-tab {
				flex-direction: column;
				> div {
					flex: none;
					flex-direction: column;

					gap: 0.2rem;
					padding: 0.12rem;
					max-height: 100%;
					border: 0.01rem solid #eeeeee;
					border-top: none;
					border-bottom: 0.01rem solid #eeeeee;

					.pay-icon {
						> div {
							width: 0.21rem;
							height: 0.21rem;
							padding: 0.13rem;
						}
					}
					.pay-type {
						text-align: center;
						margin-bottom: 0.2rem;
						> p {
							font-size: 0.18rem;
							font-weight: 500;
							line-height: 0.26rem;
							color: #8f8f8f;
						}
						> span {
							white-space: normal;
						}
					}
				}
			}
			.pay-content {
				height: 0;
				border-radius: 0 0 0.16rem 0.16rem;
				border: none;
				> div {
					box-shadow: none;
					padding: 0.2rem 0.12rem 0.8rem;
					height: 100%;
					display: flex;
					align-items: center;
					flex-direction: column;
					gap: 0.44rem;
					.spans {
						width: 100%;
						> div {
							gap: 0.2rem;
							align-self: center;
							> span {
								font-size: 0.16rem;
								line-height: 0.28rem;
							}
						}
					}
					.shows {
						> img:nth-of-type(1) {
							width: 2.74rem;
							height: 1.37rem;
						}
						> img:nth-of-type(2) {
							position: absolute;
							z-index: 10;
							right: -0.2rem;
							bottom: -0.7rem;
							width: 1.08rem;
							height: 1.89rem;
						}
					}
				}
			}

			.activeHeight {
				height: 100%;
				padding: 0.1rem;
			}
		}
	}
}
</style>
