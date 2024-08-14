<template>
	<div class="baseDiv" :class="{ animated: isAnimate }" @animationend="onAnimationEnd">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
const isAnimate = defineModel()

const onAnimationEnd = () => {
	isAnimate.value = false
}
</script>

<style scoped>
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.baseDiv {
	width: 100%;
	height: 100%;
}

.animated {
	animation: fadeIn 0.5s ease-in-out;
}
</style>
