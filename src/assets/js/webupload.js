require("webuploader/dist/webuploader.css")
import webuploader from "webuploader"

export default function webUpload (options) {
	let config = {
		auto: true,
		swf: "/static/js/webuploader/Uploader.swf",
		server: "http://www.js.me/demo/data.php?action=all",
		pick: {
			id: "#picker",
			label: "", // 请采用 innerHTML 代替
			innerHTML: "", // 指定按钮文字
			multiple: true // 是否开起同时选择多个文件能力
		},
		resize: false, // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
		headers: {},
		accept: {
			title: "Images", // 文字描述
			extensions: "gif,jpg,jpeg,bmp,png", // 允许的文件后缀，不带点，多个用逗号分割。
			mimeTypes: "image/!*" // 多个用逗号分割。
		},
		formData: {},
		fileVal: "file",
		method: "POST",
		fileNumLimit: undefined, // 验证文件总数量
		fileSizeLimit: undefined, // 验证文件总大小是否超出限制
		fileSingleSizeLimit: 1024 * 1024 * 2 // 验证单个文件大小是否超出限制
	}
	let opts = $.extend({}, config, options)

	let uploader = new webuploader.Uploader.create(opts)

	// 显示被添加的图片列表
	if (opts.imageList) {
		uploader.on("fileQueued", function (file) {
			let $li = $(
					"<div id=\"" + file.id + "\" class=\"file-item thumbnail\" fid='" + file.name + "''>" +
				"<img>" +
				"<div class=\"file-info\">" + file.name + "</div>" +
				"<div class=\"file-panel\"><span class=\"state\"></span><span class=\"cancel glyphicon glyphicon-trash\"></span></div>" +
				"</div>"
				),
				$img = $li.find("img")

			// $list为容器jQuery实例
			$(opts.imageList).append($li)

			// 创建缩略图
			// 如果为非图片文件，可以不用调用此方法。
			// thumbnailWidth x thumbnailHeight 为 100 x 100
			uploader.makeThumb(file, function (error, src) {
				if (error) {
					$img.replaceWith("<span>不能预览</span>")
					return
				}
				$img.attr("src", src)
			}, 100, 100)
			$li.on("click", ".cancel", function () {
				console.log($li.attr("fid"))
			})
		})
	}
}
