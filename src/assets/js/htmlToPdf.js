import html2Canvas from "html2canvas"
import JsPDF from "jspdf"

/**
 * html转PDF 支持远程序图片
 * @param id 要被转pdfID
 * @param filename PDF保存名
 */
export function downLoadPDF (id, filename) {
	let imgUrl = []
	let imgArr = document.all(id).getElementsByTagName("img")
	for (let i = 0; i < imgArr.length; i++) {
		imgUrl.push(imgArr[i].getAttribute("src"))
		getUrlBase64(imgArr[i].getAttribute("src"), "", "", function (base) {
			imgArr[i].setAttribute("src", base)
		})
	}
	setTimeout(function () {
		html2Canvas(document.querySelector("#" + id), {
			allowTaint: true
		}).then(function (canvas) {
			let contentWidth = canvas.width
			let contentHeight = canvas.height
			let pageHeight = contentWidth / 592.28 * 841.89
			let leftHeight = contentHeight
			let position = 0
			let imgWidth = 595.28
			let imgHeight = 592.28 / contentWidth * contentHeight
			let pageData = canvas.toDataURL("image/jpeg", 1.0)
			let PDF = new JsPDF("", "pt", "a4")
			if (leftHeight < pageHeight) {
				PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight)
			} else {
				while (leftHeight > 0) {
					PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight)
					leftHeight -= pageHeight
					position -= 841.89
					if (leftHeight > 0) {
						PDF.addPage()
					}
				}
			}
			PDF.save(filename + ".pdf")
			// 还原图片地址
			for (let i = 0; i < imgArr.length; i++) {
				imgArr[i].setAttribute("src", imgUrl[i])
			}
		})
	}, 500)
}

/**
 * 图片转base64 支持远程图片
 * @param url 图片地址
 * @param imgWidth 图片宽 为空默认原图片宽
 * @param imgHeight 图片高 为空默认原图片高
 * @param callback 回调base64编码
 */
export function getUrlBase64 (url, imgWidth, imgHeight, callback) {
	let canvas = document.createElement("canvas")   //创建canvas DOM元素
	let ctx = canvas.getContext("2d")
	let img = new Image
	img.crossOrigin = "Anonymous"
	img.src = url
	img.onload = function () {
		let width = imgWidth ? imgWidth : this.width
		let height = imgHeight ? imgHeight : this.height
		canvas.width = width //指定画板的宽度，自定义
		canvas.height = height //指定画板的高度,自定义
		ctx.drawImage(img, 0, 0, width, height) //参数可自定义
		let dataURL = canvas.toDataURL("image/")
		callback.call(this, dataURL) //回掉函数获取Base64编码
		canvas = null
	}
}