<template>
	<div class="base-button" :style="{ '--color': color, '--bg-color': bgColor }">
		<button :class="[`text-${size}`, `px-${px}`, `py-${py}`]">
			<slot></slot>
		</button>
	</div>
</template>

<script setup lang="ts">
defineProps({
	px: { type: Number, default: 5 },
	py: { type: Number, default: 2 },
	color: { type: String, default: '#3ab12c' },
	bgColor: { type: String, default: '#fff' },
	size: { type: Number, default: 5.5 },
})
</script>

<style lang="scss" scoped>
.base-button {
	--color: #3ab12c;
	--bg-color: #fff;
	button {
		position: relative;
		display: block;
		padding: 0.06rem 0.16rem;
		text-align: center;
		font-size: 0.14rem;
		text-decoration: none;
		color: #3ab12c;
		background: transparent;
		cursor: pointer;
		transition: ease-out 0.5s;
		border: 0.02rem solid #3ab12c;
		border-radius: 0.08rem;
		box-shadow: inset 0 0 0 0 #3ab12c;
		white-space: nowrap;
	}

	button:hover {
		color: white;
		box-shadow: inset 0 -1rem 0 0 #3ab12c;
	}

	button:active {
		transform: scale(0.9);
	}
}

@media (min-width: 375px) and (max-width: 767px) {
	.base-button {
		button {
			padding: 0.06rem;
			font-size: 0.14rem;
		}
	}
}
</style>
