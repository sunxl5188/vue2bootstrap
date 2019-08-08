let arr =[0,7,2]
function findIndex(l, o) {
	let objStr = JSON.stringify(o)
	return l.reduce((index, ele, i) => {
		if (JSON.stringify(ele) === objStr) {
			return i
		} else {
			return index
		}
	}, -1)
}

console.log(findIndex(arr, 7))
