<template>
	<section class="adv">
		<div class="adv-main">
			<div class="title">
				<BaseTitleMain>
					<template #one>Advantages</template>
					<template #two>Global opportunities through professional localization</template>
				</BaseTitleMain>
			</div>
			<div class="advs">
				<template v-for="adv in advs" :key="adv.title">
					<div class="advItem">
						<img :src="adv.pic" :alt="adv.title" />
						<div>
							<p>{{ adv.title }}</p>
							<div>
								<div v-for="s in adv.spans" :key="s">
									<img src="@/assets/images/round.png" alt="" />
									<span>{{ s }}</span>
								</div>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import AdvImgOne from '@/assets/images/adv_img_one.png'
import AdvImgTwo from '@/assets/images/adv_img_two.png'
import AdvImgThr from '@/assets/images/adv_img_thr.png'
const advs = [
	{
		title: 'INTELLIGENT ACCEPTANCE',
		pic: AdvImgOne,
		spans: ['Periodic system and performance optimization', 'Combine AI and Big Data to Increase Revenue', 'Provide 24/7 Support'],
	},
	{
		title: 'STABILIZED AND HIGH-STANDARD',
		pic: AdvImgTwo,
		spans: ['Intelligent Multichannel Routing', 'Safeguarded'],
	},
	{
		title: 'ALL ASPECTS SECURED',
		pic: AdvImgThr,
		spans: ['Ultimate Data Encryption', 'Fraud Protection', 'Robust Account Protection'],
	},
]
onMounted(() => {
	let boxes = document.querySelectorAll('.advItem') as NodeListOf<HTMLDivElement>
	setMinHeight(boxes)
})
</script>

<style lang="scss" scoped>
.adv {
	width: 100vw;
	.adv-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.2rem 0;
		.title {
			text-align: center;
			margin-bottom: 0.6rem;
		}
		.advs {
			display: flex;
			align-items: flex-start;
			gap: 0.12rem;
			.advItem {
				border: 0.01rem solid #d1d1d1;
				border-radius: 0.12rem;
				padding: 0.12rem;
				box-sizing: border-box;
				box-shadow: 0px 53px 32px 0px #00000005;
				transform: translateY(0);
				transition: transform 0.2s linear;
				&:hover {
					transform: translateY(-0.1rem);
					transition: transform 0.2s linear;
				}
				> img {
					width: 4.48rem;
					height: 1.64rem;
				}
				> div {
					margin-left: 0.28rem;
					> p {
						font-size: 0.18rem;
						font-weight: 500;
						line-height: 0.2rem;
						margin-bottom: 0.17rem;
					}
					> div {
						display: flex;
						flex-direction: column;
						gap: 0.2rem;
						> div {
							display: flex;
							align-items: center;
							gap: 0.08rem;
							> img {
								width: 0.16rem;
								height: 0.16rem;
							}
							> span {
								font-size: 0.16rem;
								line-height: 0.19rem;
								color: #8f8f8f;
							}
						}
					}
				}
			}
			.advItem:nth-of-type(1) {
				border-radius: 0.12rem 0.12rem 0.12rem 0.48rem;
			}
			.advItem:nth-of-type(3) {
				border-radius: 0.12rem 0.12rem 0.48rem 0.12rem;
			}
		}
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.adv {
		.adv-main {
			padding: 0.6rem 0.16rem;
			.title {
				margin-bottom: 0.4rem;
			}
			.advs {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 0.12rem;
				.advItem {
					border: 0.01rem solid #d1d1d1;
					border-radius: 0.12rem;
					padding: 0.08rem;
					height: 100% !important;
					&:hover {
						transform: none;
					}
					> img {
						width: 3.26rem;
						height: 1.23rem;
					}
					> div {
						margin-left: 0.22rem;
						margin-bottom: 0.22rem;
						> div {
							> div {
								display: flex;
								align-items: flex-start;
								gap: 0.08rem;
								> img {
									width: 0.16rem;
									height: 0.16rem;
								}
							}
						}
					}
				}
				.advItem:nth-of-type(1) {
					border-radius: 0.12rem;
				}
				.advItem:nth-of-type(3) {
					border-radius: 0.12rem;
				}
			}
		}
	}
}
</style>
