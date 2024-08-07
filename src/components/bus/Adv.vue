<template>
	<section class="adv">
		<div class="adv-main">
			<div class="title">
				<BaseTitleMain>
					<template #one>Our Advantages</template>
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
const advs = [
	{
		title: 'INTELLIGENT ACCEPTANCE',
		pic: getImageUrl('adv_img_one.png'),
		spans: ['Automatic Performance Optimization', 'Combine AI and Big Data to Increase Revenue', 'Provide 24/7 Support'],
	},
	{
		title: 'STABILIZED AND HIGH-STANDARD',
		pic: getImageUrl('adv_img_two.png'),
		spans: ['Intelligent Multichannel Routing', 'Safeguarded'],
	},
	{
		title: 'ALL ASPECTS SECURED',
		pic: getImageUrl('adv_img_thr.png'),
		spans: ['Ultimate Data Encryption', 'Fraud Protection', 'Robust Account Protection'],
	},
]
onMounted(() => {
	setMinHeight('.advItem')
})
</script>

<style lang="scss" scoped>
.adv {
	width: 100vw;
	.adv-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 120px 0;
		.title {
			text-align: center;
			margin-bottom: 60px;
		}
		.advs {
			display: flex;
			align-items: flex-start;
			gap: 12px;
			.advItem {
				border: 1px solid #d1d1d1;
				border-radius: 12px;
				padding: 12px 12px 20px;
				box-sizing: border-box;
				box-shadow: 0px 53px 32px 0px #00000005;

				> img {
					width: 448px;
					height: 164px;
				}
				> div {
					margin-left: 28px;
					> p {
						font-size: 18px;
						font-weight: 500;
						line-height: 20px;
						margin-bottom: 17px;
					}
					> div {
						display: flex;
						flex-direction: column;
						gap: 20px;
						> div {
							display: flex;
							align-items: center;
							gap: 8px;
							> img {
								width: 16px;
								height: 16px;
							}
							> span {
								font-size: 16px;
								line-height: 19px;
								color: #00000099;
							}
						}
					}
				}
			}
			.advItem:nth-of-type(1) {
				border-radius: 12px 12px 12px 48px;
			}
			.advItem:nth-of-type(3) {
				border-radius: 12px 12px 48px 12px;
			}
		}
	}
}
</style>
