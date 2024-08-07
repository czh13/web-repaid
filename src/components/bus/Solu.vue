<template>
	<section class="solu">
		<div class="cov-main">
			<div class="title">
				<BaseTitleMain>
					<template #one>Solutions</template>
					<template #two>Global Businesses Pay and Get Paid</template>
				</BaseTitleMain>
			</div>
			<div></div>
		</div>
	</section>
</template>

<script setup lang="ts">
const solus = [
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

<style scoped></style>
