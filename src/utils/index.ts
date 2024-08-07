// 千分位
export const toThousandths = (num: number) => num.toLocaleString(navigator.language)

export const getImageUrl = (name: string) => {
	const assets = import.meta.glob('/assets/Images/*', { eager: true, import: 'default' })
	return assets[`/assets/Images/${name}`] as string
}

export const setMinHeight = (className: string) => {
	let boxes = document.querySelectorAll(className) as NodeListOf<HTMLDivElement>
	let maxHeight = 0

	// 计算最高的高度
	boxes.forEach(function (box) {
		let boxHeight = box.clientHeight
		if (boxHeight > maxHeight) {
			maxHeight = boxHeight
		}
	})

	// 将所有的div高度设置为最高的高度
	boxes.forEach(function (box) {
		box.style.height = maxHeight / 100 + 'rem'
	})
}
