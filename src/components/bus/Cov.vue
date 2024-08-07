<template>
	<section class="cov">
		<div class="cov-main">
			<div class="title">
				<BaseTitleMain>
					<template #one>Coverage</template>
					<template #two>Global Businesses Pay and Get Paid</template>
				</BaseTitleMain>
			</div>
			<div class="covs">
				<div>
					<template v-for="cov in covs" :key="cov.name">
						<div class="cov-bgc">
							<img :src="cov.bgcImg" :alt="cov.name" />
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
const covs = [
	{
		name: 'LATIN AMERICA',
		text: 'Quickly launch and grow recurring revenue witha unified platform for payments, subscriptions,invoicing, tax, accounting, and more.By 2025, mobile commerce sales in Latin America are expected to make up 55.5% of total retail sales, and sales will be worth almost $107 billion. Online sales are expected to account for 20% of all retail purchases in 2026. Latin Americans are becoming quick adopters of instant and alternative payment methods, with Pix leading the way.',
		bgcImg: getImageUrl('cov_bgc_one.png'),
	},
	{
		name: 'ASIA',
		text: 'Quickly launch and grow recurring revenue witha unified platform for payments, subscriptions,invoicing, tax, accounting, and more.By 2025, mobile commerce sales in Latin America are expected to make up 55.5% of total retail sales, and sales will be worth almost $107 billion. Online sales are expected to account for 20% of all retail purchases in 2026. Latin Americans are becoming quick adopters of instant and alternative payment methods, with Pix leading the way.',
		bgcImg: getImageUrl('cov_bgc_two.png'),
	},
	{
		name: 'AFRICA',
		text: 'Quickly launch and grow recurring revenue witha unified platform for payments, subscriptions,invoicing, tax, accounting, and more.By 2025, mobile commerce sales in Latin America are expected to make up 55.5% of total retail sales, and sales will be worth almost $107 billion. Online sales are expected to account for 20% of all retail purchases in 2026. Latin Americans are becoming quick adopters of instant and alternative payment methods, with Pix leading the way.',
		bgcImg: getImageUrl('cov_bgc_thr.png'),
	},
]
</script>

<style lang="scss" scoped>
.cov {
	width: 100vw;
	background: #fafafa;

	.cov-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 120px 0;
		.title {
			text-align: center;
			margin-bottom: 60px;
		}
		.covs {
			> div {
				display: flex;
				align-items: flex-start;
				.cov-bgc {
					width: 480px;
					height: 416px;
					border-radius: 8px;
					cursor: default;
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
						background: #000000cc;
						padding: 20px 40px 30px;
						color: #fff;
						display: flex;
						flex-direction: column;
						gap: 20px;
						border-radius: 8px;
						border-top: 8px solid #3ab33b;
						box-sizing: border-box;

						position: absolute;
						top: 416px;
						left: 0;

						transition: top 0.3s ease;
						> p {
							font-size: 26px;
							font-weight: 500;
							line-height: 36px;
						}
						> div {
							height: 1px;
							width: 100%;
							background: #fff;
						}
						> span {
							font-size: 18px;
							line-height: 28px;
						}
					}
				}
			}
		}
	}
}
</style>
