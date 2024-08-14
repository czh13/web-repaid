<template>
	<div class="titleMain">
		<div class="one">
			<slot name="one"></slot>
		</div>
		<div class="two">
			<slot name="two"></slot>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.titleMain {
	display: flex;
	flex-direction: column;
	gap: 0.32rem;
	font-family: Alibaba PuHuiTi 2;
	.one {
		font-size: 0.54rem;
		font-weight: 600;
		line-height: 0.75rem;
		color: #000;
	}
	.two {
		font-size: 0.32rem;
		line-height: 0.44rem;
		color: #999;
		font-weight: 400;
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.titleMain {
		gap: 0.2rem;
		.one {
			font-size: 0.28rem;
			line-height: 0.32rem;
		}
		.two {
			font-size: 0.2rem;
			line-height: 0.28rem;
		}
	}
}
</style>
