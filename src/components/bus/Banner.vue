<template>
	<section class="Banner">
		<div class="Banner-main">
			<h3>
				<span>Repaid,</span>
				a secure, convenient and efficient payment experience
			</h3>
			<p>
				Repaid sees a gap in the payments industry in emerging markets. Repaid brings safe, convenient and efficient solutions and payment products. Provide
				collection and payment capabilities for online retail, gaming, digital media and entertainment industries in emerging markets.
			</p>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.Banner {
	width: 100vw;
	background: linear-gradient(180deg, #f1fff1 70%, #ffffff);
	display: flex;
	flex-direction: column;
	align-items: center;
	.Banner-main {
		padding: 1.95rem 0 0.82rem;
		width: 60%;
		box-sizing: border-box;
		> h3 {
			font-size: 0.6rem;
			font-weight: 600;
			line-height: 0.72rem;
			margin-bottom: 0.24rem;
			color: #000;
			text-align: center;
			> span {
				color: #3ab33b;
			}
		}
		> p {
			color: #000;
			font-size: 0.18rem;
			font-weight: 400;
			line-height: 0.24rem;
			text-align: center;
		}
	}
}

@media (min-width: 1280px) and (max-width: 1439px) {
	.Banner {
		.Banner-main {
			width: 80%;
		}
	}
}

@media (min-width: 768px) and (max-width: 1280px) {
	.Banner {
		.Banner-main {
			width: 86%;
			padding: 1.94rem 0.16rem 0.24rem;
			> h3 {
				font-size: 0.52rem;
				font-weight: 600;
				line-height: 0.72rem;
				margin-bottom: 0.2rem;
				text-align: center;

				> span {
					color: #3ab33b;
				}
			}
			> p {
				font-size: 0.18rem;
				text-align: center;
			}
		}
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.Banner {
		.Banner-main {
			width: 97%;
			padding: 0.84rem 0.16rem 0.24rem;
			> h3 {
				font-size: 0.4rem;
				font-weight: 600;
				line-height: 0.42rem;
				margin-bottom: 0.2rem;
				text-align: left;

				> span {
					color: #3ab33b;
				}
			}
			> p {
				font-size: 0.14rem;
				text-align: left;
			}
		}
	}
}
</style>
