<template>
	<section class="about">
		<div class="about-main">
			<div class="title">
				<BaseTitleMain>
					<template #one>About Us</template>
					<template #two>Ready to speed up the business with Repaid?</template>
				</BaseTitleMain>
			</div>
			<div class="contact">
				<img src="@/assets/images/about_bgc.png" alt="" />
				<div>
					<div>
						<h3>
							Get in touch with
							<span>Repaid</span>
						</h3>
						<p>
							interested to learn what we can do for your business?
							<br />
							Our team can help you:
						</p>
						<div class="items">
							<div>
								<img src="@/assets/images/about_icon_one.png" alt="" />
								<span>Demo products of interest</span>
							</div>
							<div>
								<img src="@/assets/images/about_icon_two.png" alt="" />
								<span>Demo products of interest</span>
							</div>
							<div>
								<img src="@/assets/images/about_icon_thr.png" alt="" />
								<span>Demo products of interest</span>
							</div>
							<div>
								<img src="@/assets/images/about_icon_four.png" alt="" />
								<span>Demo products of interest</span>
							</div>
						</div>
						<div class="aboutBtn">
							<span>Ask for more info</span>
							<img src="@/assets/images/right.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
	width: 100vw;
	background: #fafafa;
	.about-main {
		padding-top: 1.2rem;
		.title {
			text-align: right;
			margin-right: 1.9rem;
			margin-bottom: 0.52rem;
		}
		.contact {
			position: relative;
			z-index: 99;
			> img {
				width: 100%;
				height: 3.4rem;
				position: absolute;
				top: 1.8rem;
				z-index: -1;
			}
			> div {
				padding: 0 1.6rem;
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
						margin-bottom: 0.32rem;
						> span {
							font-weight: 500;
							color: #39b54a;
						}
					}

					> p {
						text-align: center;
						font-size: 0.24rem;
						font-weight: 500;
						line-height: 0.36rem;
						color: #8f8f8f;
						margin-bottom: 0.8rem;
					}
					.items {
						display: grid;
						grid-template-columns: repeat(4, 1fr);
						grid-template-rows: repeat(2, 1fr);
						gap: 0.6rem;
						margin-bottom: 0.6rem;
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
								color: #8f8f8f;
							}
						}
						> div:nth-of-type(1) {
							grid-column: 1 / 2;
							grid-row: 1 / 2;
						}
						> div:nth-of-type(2) {
							grid-column: 2 / 3;
							grid-row: 2 / 3;
						}
						> div:nth-of-type(3) {
							grid-column: 3 / 4;
							grid-row: 1 / 2;
						}
						> div:nth-of-type(4) {
							grid-column: 4 / 5;
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

						> span {
							font-size: 0.24rem;
							font-weight: 500;
							line-height: 0.3rem;
							color: #ffffff;
						}
						> img {
							width: 0.2rem;
							height: 0.2rem;
						}
					}
				}
			}
		}
	}
}
</style>
