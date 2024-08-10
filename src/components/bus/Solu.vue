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
							<!-- <img src="@/assets/images/icon.svg" :alt="solu.title" /> -->

							<img :src="solu.icon" :alt="solu.icon" />
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
		title: 'LATIN AMERICA',
		spans: 'A valuable resource for students improving their design skills and understanding design systems.',
		icon: getImageUrl('icon.svg'),
	},
	{
		title: 'LATIN AMERICA',
		spans: 'A valuable resource for students improving their design skills and understanding design systems.',
		icon: getImageUrl('solu_icon_one.png'),
	},
	{
		title: 'LATIN AMERICA',
		spans: 'A valuable resource for students improving their design skills and understanding design systems.',
		icon: getImageUrl('solu_icon_one.png'),
	},
	{
		title: 'LATIN AMERICA',
		spans: 'A valuable resource for students improving their design skills and understanding design systems.',
		icon: getImageUrl('solu_icon_one.png'),
	},
	{
		title: 'LATIN AMERICA',
		spans: 'A valuable resource for students improving their design skills and understanding design systems.',
		icon: getImageUrl('solu_icon_one.png'),
	},
	{
		title: 'LATIN AMERICA',
		spans: 'A valuable resource for students improving their design skills and understanding design systems.',
		icon: getImageUrl('solu_icon_one.png'),
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
		padding: 120px 0;
		.title {
			text-align: center;
			margin-bottom: 60px;
		}
		.solus {
			> div {
				display: grid;
				grid-template-columns: repeat(3, 480px);
				grid-template-rows: repeat(2, 1fr);
				// width: 480px;
				.solu-desc {
					display: flex;
					flex-direction: column;
					padding: 42px 0 20px 45px;
					border: 1px solid #eee;
					box-sizing: border-box;
					> img {
						width: 32px;
						height: 32px;
					}
					> p {
						font-size: 20px;
						font-weight: 500;
						line-height: 22px;
						margin-top: 30px;
					}
					> span {
						font-size: 18px;
						font-weight: 400;
						line-height: 26x;
						margin-top: 20px;
					}
				}
			}
		}
	}
}
</style>
