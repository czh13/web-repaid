<template>
	<footer class="footer">
		<div class="footer-main">
			<div class="fm-top">
				<div>
					<img class="logo" src="~/assets/images/logo.png" alt="logo" />
					<div class="items">
						<div class="legal">
							<div>Legal</div>
							<div>
								<p>Privacy</p>
								<p>Terms of Service</p>
							</div>
						</div>
						<div class="questions">
							<div>General questions</div>
							<div>
								<p>business@repaidlimits.com</p>
							</div>
						</div>
						<div class="follow">
							<div>Follow Us</div>
							<div class="follow-qrcode">
								<div>
									<img src="@/assets/images/fakecode.png" alt="" />
									<span>Telegram</span>
								</div>
								<div>
									<img src="@/assets/images/fakecode.png" alt="" />
									<span>WhatsApp</span>
								</div>
								<div>
									<img src="@/assets/images/fakecode.png" alt="" />
									<span>Twitter</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="fm-bottom">
				<div>
					<p>© C 2024 Repaid Limits. All rights reserved</p>
					<p>Registered at XXXXXXXXXXXXXX</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
	width: 100vw;
	.footer-main {
		.fm-top {
			padding: 0.96rem 2rem;
			> div {
				display: flex;
				align-items: flex-start;
				gap: 0.44rem;

				.logo {
					> img {
						width: 2.5rem;
						height: 0.54rem;
					}
				}

				.items {
					display: flex;
					align-items: flex-start;
					gap: 0.92rem;
					> div {
						display: flex;
						flex-direction: column;
						gap: 0.32rem;
						> div:nth-of-type(1) {
							font-size: 0.18rem;
							color: #999;
							line-height: 0.36rem;
						}
						> div:nth-of-type(2) {
							display: flex;
							flex-direction: column;
							gap: 0.24rem;
							> p {
								font-size: 0.2rem;
								color: #000;
								line-height: 0.36rem;
							}
						}

						.follow-qrcode {
							display: flex;
							flex-direction: row !important;
							align-items: center;
							> div {
								display: flex;
								flex-direction: column;
								gap: 0.1rem;
								> img {
									width: 1.54rem;
									height: 1.54rem;
								}
								> span {
									font-size: 0.14rem;
									color: #999999;
								}
							}
						}
					}
				}
			}
		}
		.fm-bottom {
			border-bottom: 0.08rem solid;
			border-image: linear-gradient(90deg, #77e8e9 0%, #39b54a 100%);
			border-image-slice: 1;

			> div {
				border-top: 0.02rem solid;
				border-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #ebebeb 50%, rgba(235, 235, 235, 0) 100%);
				border-image-slice: 1;

				padding: 0.34rem 0.88rem 0.72rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				> p {
					font-size: 0.17rem;
					line-height: 0.35rem;
					color: #999;
				}
			}
		}
	}
}
</style>
