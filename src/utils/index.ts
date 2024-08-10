// 千分位
export const toThousandths = (num: number) => num.toLocaleString(navigator.language)

export const getImageUrl = (name: string) => {
	const assets = import.meta.glob('/assets/Images/*', { eager: true, import: 'default' })
	return assets[`/assets/Images/${name}`] as string
}

export const setMinHeight = (boxes: NodeListOf<HTMLDivElement>) => {
	let maxHeight = 0

	boxes.forEach(function (box) {
		let boxHeight = box.clientHeight

		if (boxHeight > maxHeight) {
			maxHeight = boxHeight
		}
	})

	boxes.forEach(function (box) {
		box.style.height = maxHeight + 'px'
	})
}

export const getScrollTop = (sections: HTMLCollection, sliceNum: number = 0) => {
	const moduleScrolls = useModuleScrolls()
	Array.from(sections)
		.slice(sliceNum)
		.forEach(sec => {
			const top = sec.getBoundingClientRect().top
			const classname = sec.className
			moduleScrolls.value[classname as keyof typeof moduleScrolls.value] = top
		})
}
