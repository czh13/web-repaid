<template>
	<footer class="footer">
		<div class="footer-main">
			<div>
				<div class="footer-tab">
					<img src="~/assets/images/logo.png" alt="logo" />
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
				<div class="footer-tip">
					<div>
						<p>© C 2024 Repaid Limits. All rights reserved</p>
						<p>Registered at XXXXXXXXXXXXXX</p>
					</div>
					<p>
						Repaid, operates as a licensed third-party payment institution. Our premier product, Repaid, represents an innovative solution for global payments,
						specifically tailored to deliver efficient and secure localized payment services to our esteemed business clients worldwide. Through Repaid, our
						steadfast commitment lies in eliminating payment barriers that exist between businesses and users across diverse countries and regions, thereby
						facilitating seamless business expansion and fostering sustainable growth opportunities for our valued clients. We are a global company with a
						presence in Latin America, Aisa, and Africa.
					</p>
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
		border-bottom: 0.08rem solid;
		border-image: linear-gradient(90deg, #77e8e9 0%, #3ab33b 100%);
		border-image-slice: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		> div {
			max-width: 10.8rem;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.6rem;
			padding: 0.94rem 0 0.4rem;
			.footer-tab {
				width: 100%;
				display: flex;
				align-items: flex-start;
				justify-content: space-between;

				gap: 0.7rem;
				> img {
					width: 1.66rem;
					height: 0.36rem;
				}

				.items {
					flex: 1;
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					> div {
						display: flex;
						flex-direction: column;
						gap: 0.2rem;
						> div:nth-of-type(1) {
							font-size: 0.12rem;
							color: #999;
							line-height: 0.24rem;
						}
						> div:nth-of-type(2) {
							display: flex;
							flex-direction: column;
							gap: 0.16rem;
							> p {
								font-size: 0.13rem;
								color: #000;
								line-height: 0.23rem;
								cursor: pointer;
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
									width: 1.02rem;
									height: 1.02rem;
								}
								> span {
									font-size: 0.12rem;
									color: #999999;
								}
							}
						}
					}
				}
			}
			.footer-tip {
				border-top: 0.02rem solid;
				border-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #ebebeb 50%, rgba(235, 235, 235, 0) 100%);
				border-image-slice: 1;

				width: 100%;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				padding-top: 0.22rem;
				gap: 0.22rem;
				> div {
					display: flex;
					justify-content: space-between;
				}
				p {
					font-size: 0.12rem;
					line-height: 0.23rem;
					color: #999;
				}
			}
		}
	}
}
</style>
