<template>
	<section class="pay">
		<div class="pay-main">
			<p class="pay-title">
				Payment Solutions
				<span>Across Industries and</span>
				Requirements
			</p>
			<div class="pay-tab">
				<div :class="{ activeTab: currentType === 'ins' }" @click="handleClick('ins')">
					<div class="pay-icon">
						<div>
							<NuxtIcon name="pay_in_icon" filled></NuxtIcon>
						</div>
					</div>
					<div class="pay-type">
						<p>CORE PRODUCT - PAY-INS</p>
						<span>Accept local payment methods and boost conversion rates</span>
					</div>
				</div>
				<div :class="{ activeTab: currentType === 'outs' }" @click="handleClick('outs')">
					<div class="pay-icon">
						<div>
							<NuxtIcon name="pay_outs_icon" filled></NuxtIcon>
						</div>
					</div>
					<div class="pay-type">
						<p>CORE PRODUCT - PAYOUTS</p>
						<span>Send funds within the framework required by laws in the local market</span>
					</div>
				</div>
			</div>
			<div class="pay-content" :class="{ activeHeight: !!currentType }">
				<div></div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const currentType = ref('')

const handleClick = (type: string) => {
	currentType.value = type

	nextTick(() => {
		const content = document.querySelector('.pay-content')
		const moduleScrolls = useModuleScrolls()
		for (const key in moduleScrolls.value) {
			moduleScrolls.value[key] = moduleScrolls.value[key] + 700
		}
	})
}
</script>

<style lang="scss" scoped>
.pay {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	.pay-main {
		max-width: 16.2rem;
		width: 100%;
		.pay-title {
			font-family: Alibaba PuHuiTi 2;
			font-size: 0.4rem;
			font-weight: 600;
			line-height: 0.64rem;
			text-align: center;
			padding: 0.38rem 0;
			color: #3ab33b;
			> span {
				color: #000;
			}
		}
		.pay-tab {
			display: flex;
			align-items: center;
			> div {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;

				gap: 20px;
				padding: 0.4rem 0;
				border: 0.01rem solid #eeeeee;
				border-top: 0.02rem solid #eee;
				box-sizing: border-box;
				.pay-icon {
					border: 0.01rem solid #eeeeee;
					border-radius: 50%;
					box-shadow: 0px 0px 0px 1px #ebebeb;
					box-shadow: 0px 1.33px 4px 0px #8f8f8f33;
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
						white-space: nowrap;
					}
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
				box-shadow: 0px 22px 49px 0px #3030300f;
				padding: 0.36rem 1.22rem;
				border-radius: 0.16rem;
				height: 100%;
				box-sizing: border-box;
			}
		}

		.activeHeight {
			height: 7rem;
			padding: 0.3rem;
		}
	}
}
</style>
