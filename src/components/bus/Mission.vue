<template>
	<section class="mission">
		<div class="mission-main">
			<BaseTitleMain>
				<template #one>Our Mission</template>
				<template #two>
					Helping your business thrive in the
					<br />
					digital economy
				</template>
			</BaseTitleMain>
			<div class="mission-content">
				<div>
					<img src="@/assets/images/dash.png" alt="" />
					<span>Always Customer Demands Come First</span>
				</div>
				<div>
					<img src="@/assets/images/dash.png" alt="" />
					<span>Always Strive Secure And Stable</span>
				</div>
				<div>
					<img src="@/assets/images/dash.png" alt="" />
					<span>Always Strive Secure And Stable</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.mission {
	background: url('~/assets/images/mission_bgc.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
	box-sizing: border-box;
	padding: 2.12rem 0 1.85rem 3.56rem;
	.mission-main {
		.mission-content {
			margin-top: 0.48rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			> div {
				display: flex;
				align-items: center;
				gap: 0.1rem;
				> img {
					width: 0.27rem;
					height: 0.27rem;
				}
				> span {
					font-size: 0.22rem;
					font-weight: 400;
					line-height: 0.3rem;
				}
			}
		}
	}
}
</style>
