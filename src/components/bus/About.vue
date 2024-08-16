<template>
	<section class="about">
		<div class="about-main">
			<div class="title">
				<BaseTitleMain>
					<template #one>About Us</template>
					<template #two>Interested to learn more about what Repaid can do for your business?</template>
				</BaseTitleMain>
			</div>
			<div class="contact">
				<img src="@/assets/images/about_bgc.png" alt="" />
				<div>
					<div>
						<h3>
							<span>Repaid</span>
							offers
						</h3>
						<div class="items">
							<div>
								<img src="@/assets/images/about_icon_one.png" alt="" />
								<span>Payment Products Demonstration</span>
							</div>
							<div>
								<img src="@/assets/images/about_icon_two.png" alt="" />
								<span>Design customized solutions to optimize payment performance</span>
							</div>
							<div>
								<img src="@/assets/images/about_icon_thr.png" alt="" />
								<span>Offer industry solutions and relevant pricing, volume discounts</span>
							</div>
							<div>
								<img src="@/assets/images/about_icon_four.png" alt="" />
								<span>Get started with Repaid, and experience efficient implementation and services</span>
							</div>
						</div>
						<div class="aboutBtn" @click="handleGoEmail">
							<span>Send an email</span>
							<img src="@/assets/images/right.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const handleGoEmail = () => {
	window.location.href = 'mailto:business@repaidhq.com?subject=Ask for more infomation about Repaid'
}
</script>

<style lang="scss" scoped>
.about {
	width: 100vw;
	background: #fafafa;
	.about-main {
		padding-top: 1.2rem;
		.title {
			text-align: right;
			margin-right: 1.6rem;
			margin-bottom: 0.6rem;
		}
		.contact {
			position: relative;
			z-index: 50;
			> img {
				width: 100%;
				height: 3.4rem;
				position: absolute;
				top: 1.8rem;
				z-index: -1;
			}
			> div {
				padding: 0 2.6rem;
				> div {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 0.8rem 0 0.66rem;
					border-radius: 0.16rem 0.16rem 0rem 0rem;

					box-shadow: 0px 1px 3px 0px #8f8f8f33;
					backdrop-filter: blur(20px);
					-webkit-backdrop-filter: blur(20px);

					> h3 {
						text-align: center;
						font-family: Alibaba PuHuiTi 2;
						font-size: 0.8rem;
						line-height: 0.8rem;
						color: #000;
						margin-bottom: 0.92rem;
						font-weight: 700;
						> span {
							color: #3ab33b;
						}
					}

					.items {
						display: grid;
						grid-template-columns: repeat(12, 1fr);
						grid-template-rows: repeat(2, 1fr);
						gap: 0.6rem;
						margin-bottom: 0.94rem;
						> div {
							display: flex;
							align-items: center;
							gap: 0.12rem;
							> img {
								height: 0.38rem;
								width: 0.38rem;
							}
							> span {
								font-size: 0.18rem;
								font-weight: 500;
								line-height: 0.24rem;
								color: #000;
							}
						}
						> div:nth-of-type(1) {
							grid-column: 2 / 6;
							grid-row: 1 / 2;
						}
						> div:nth-of-type(2) {
							grid-column: 4 / 7;
							grid-row: 2 / 3;
						}
						> div:nth-of-type(3) {
							grid-column: 7 / 11;
							grid-row: 1 / 2;
						}
						> div:nth-of-type(4) {
							grid-column: 9 / 13;
							grid-row: 2 / 3;
						}
					}
					.aboutBtn {
						display: flex;
						align-items: center;
						gap: 0.08rem;
						width: fit-content;
						cursor: pointer;
						box-shadow: 0px 2.67px 5.33px -2.67px #0000001a;
						box-shadow: 0px 5.33px 8px -1.33px #0000001a;
						padding: 0.1rem 0.16rem;
						border-radius: 0.18rem;
						background: #000000;
						transition: background 0.2s ease;

						> span {
							font-size: 0.24rem;
							font-weight: 500;
							line-height: 0.3rem;
							color: #ffffff;
						}
						> img {
							width: 0.2rem;
							height: 0.2rem;
							transition: transform 0.2s ease;
						}

						&:hover {
							background: #3ab33b;
							> img {
								transform: rotate(180deg);
							}
						}
					}
				}
			}
		}
	}
}

@media (min-width: 767px) and (max-width: 1280px) {
	.about {
		width: 100vw;
		background: #fafafa;
		.about-main {
			padding-top: 1.2rem;
			.title {
				text-align: right;
				margin-right: 1.6rem;
				margin-bottom: 0.6rem;
			}
			.contact {
				position: relative;
				z-index: 50;
				> img {
					width: 100%;
					height: 3.4rem;
					position: absolute;
					top: 1.8rem;
					z-index: -1;
				}
				> div {
					padding: 0 1rem;
					> div {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: 0.8rem 0 0.66rem;
						border-radius: 0.16rem 0.16rem 0rem 0rem;

						box-shadow: 0px 1px 3px 0px #8f8f8f33;
						backdrop-filter: blur(20px);
						-webkit-backdrop-filter: blur(20px);

						.items {
							display: grid;
							grid-template-columns: repeat(12, 1fr);
							grid-template-rows: repeat(2, 1fr);
							gap: 0.6rem;
							margin-bottom: 0.94rem;
							> div {
								display: flex;
								align-items: center;
								gap: 0.12rem;
								> img {
									height: 0.38rem;
									width: 0.38rem;
								}
								> span {
									font-size: 0.18rem;
									font-weight: 500;
									line-height: 0.24rem;
									color: #000;
								}
							}
						}
					}
				}
			}
		}
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.about {
		.about-main {
			padding: 0.6rem 0.16rem;
			.title {
				text-align: center;
				margin-right: 0;
				margin-bottom: 0.4rem;
			}
			.contact {
				> img {
					display: none;
				}
				> div {
					padding: 0;
					background: #ffffffd4;
					border-radius: 0.16rem;
					> div {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: 0.24rem;
						border-radius: 0.16rem;
						backdrop-filter: none;

						> h3 {
							font-size: 0.4rem;
							line-height: 0.5rem;
							margin-bottom: 0.24rem;
						}

						.items {
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 0.24rem;
							margin-bottom: 0.24rem;
							> div {
								display: flex;
								align-items: flex-start;
								gap: 0.08rem;
								align-self: flex-start;
								> img {
									height: 0.24rem;
									width: 0.24rem;
								}
								> span {
									font-size: 0.14rem;
									line-height: 0.16rem;
								}
							}
						}

						.items::before {
							display: block;
							content: '';
							height: 0.02rem;
							width: 1.2rem;
							background: #000000;
						}

						.items::after {
							display: block;
							content: '';
							height: 0.02rem;
							width: 1.2rem;
							background: #000000;
						}

						.aboutBtn {
							padding: 0.08rem;
							border-radius: 0.12rem;

							> span {
								font-size: 0.16rem;
								line-height: 0.2rem;
							}
							> img {
								width: 0.12rem;
								height: 0.12rem;
								transition: transform 0.2s ease;
							}
						}
					}
				}
			}
		}
	}
}
</style>
