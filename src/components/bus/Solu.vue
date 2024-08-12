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
							<span>{{ solu.spans }}</span>
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
		spans: `Enhance your customers' shopping experience through integrated payment solutions`,
		icon: 'solu_icon_one',
	},
	{
		title: 'Digital media, entertainment',
		spans: 'Seamlessly embrace global payments with versatile online checkout',
		icon: 'solu_icon_two',
	},
	{
		title: 'Gaming',
		spans: 'Sports, esports, game streaming, virtual reality, simulation gaming',
		icon: 'solu_icon_thr',
	},
	{
		title: 'Payment Facilitators',
		spans: 'Local entities to process payments in different countries.',
		icon: 'solu_icon_four',
	},
	{
		title: 'Payroll',
		spans: 'Scale effortlessly with competitive, real-time payments, and direct debit options',
		icon: 'solu_icon_five',
	},
	{
		title: 'Students',
		spans: 'A valuable resource for students improving their design skills and understanding design systems.',
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
			max-width: 14.54rem;
			width: 100%;
			> div {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: repeat(2, 1fr);
				.solu-desc {
					display: flex;
					flex-direction: column;
					padding: 0.42rem 0 0.2rem 0.45rem;
					border: 0.01rem solid #eee;
					box-sizing: border-box;
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
						font-weight: 400;
						line-height: 26x;
						margin-top: 0.2rem;
					}
				}
			}
		}
	}
}
</style>
