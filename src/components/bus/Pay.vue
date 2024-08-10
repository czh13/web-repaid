<template>
	<section class="pay">
		<div class="pay-main">
			<div class="pay-tab">
				<div :class="{ activeTab: currentType === 'ins' }" @click="handleClick('ins')">
					<div class="pay-icon">
						<img src="@/assets/images/pay_in_icon.png" alt="" />
					</div>
					<div class="pay-type">
						<p>CORE PRODUCT - PAY-INS</p>
						<span>Accept local payment methods and boost conversion rates</span>
					</div>
				</div>
				<div :class="{ activeTab: currentType === 'outs' }" @click="handleClick('outs')">
					<div class="pay-icon">
						<img src="@/assets/images/pay_outs_icon.png" alt="" />
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
		console.log('🚀 ~ handleClick ~ content:', content?.getBoundingClientRect())
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
		max-width: 1620px;
		width: 100%;
		.pay-tab {
			display: flex;
			align-items: center;
			> div {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;

				gap: 20px;
				padding: 40px 0;
				border: 1px solid #eeeeee;
				border-top: 2px solid #eee;
				box-sizing: border-box;
				.pay-icon {
					border: 1px solid #eeeeee;
					border-radius: 50%;
					box-shadow: 0px 0px 0px 1px #ebebeb;
					box-shadow: 0px 1.33px 4px 0px #8f8f8f33;
					box-shadow: 0px -3.2px 0px 0px #3e3e3e0a inset;
					display: flex;
					align-items: center;
					justify-content: center;
					> img {
						width: 24px;
						height: 24px;
						padding: 15px;
					}
				}
				.pay-type {
					display: flex;
					flex-direction: column;
					gap: 6px;
					cursor: pointer;
					> p {
						font-size: 20px;
						font-weight: 500;
						line-height: 26px;
						color: #8f8f8f;
					}
					> span {
						font-size: 16px;
						font-weight: 400;
						line-height: 20px;
						color: #8f8f8f;
						white-space: nowrap;
					}
				}
			}
			> div:nth-of-type(2) {
				margin-left: -1px;
			}
			.activeTab {
				border-top: 2px solid rgba(62, 197, 98, 0.8);
			}
		}
		.pay-content {
			width: calc(100% - 2px);
			height: 0;
			border-left: 1px solid #eeeeee;
			border-right: 1px solid #eeeeee;
			overflow: hidden;
			transition: height 0.5s ease;
			box-sizing: border-box;
			> div {
				box-shadow: 0px 22px 49px 0px #3030300f;
				padding: 36px 122px;
				border-radius: 16px;
				height: 100%;
				box-sizing: border-box;
			}
		}

		.activeHeight {
			height: 700px;
			padding: 30px;
		}
	}
}
</style>
