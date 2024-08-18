<template>
	<section class="mission">
		<div class="mission-main">
			<BaseTitleMain>
				<template #one>Our Mission</template>
				<template #two>
					Helping your digital economy
					<br />
					business
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
					<span>Always Long-term Planning, Fast Landing</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.mission {
	width: 100vw;
	background: url('@/assets/images/mission_bgc.png');
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

@media (min-width: 1280px) and (max-width: 1439px) {
	.mission {
		width: 100vw;
		background: url('@/assets/images/mission_bgc_pc.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center top;
		padding: 2.08rem 0 1.82rem 1.88rem;
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
}

@media (min-width: 768px) and (max-width: 1280px) {
	.mission {
		background: url('@/assets/images/mission_bgc_phone.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center top;
		padding: 2.08rem 0 1.82rem 1.88rem;
		.mission-main {
			.mission-content {
				gap: 0.5rem;
				> div {
					gap: 0.1rem;
					> img {
						width: 0.28rem;
						height: 0.28rem;
					}
					> span {
						font-size: 0.22em;
						font-weight: 400;
						line-height: 0.32rem;
					}
				}
			}
		}
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.mission {
		background: url('@/assets/images/mission_bgc_phone.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center top;
		padding: 0.86rem 0 0.54rem 0.64rem;
		.mission-main {
			.mission-content {
				gap: 0.2rem;
				> div {
					gap: 0.1rem;
					> img {
						width: 0.2rem;
						height: 0.2rem;
					}
					> span {
						font-size: 0.14em;
						font-weight: 400;
						line-height: 0.32rem;
					}
				}
			}
		}
	}
}
</style>
