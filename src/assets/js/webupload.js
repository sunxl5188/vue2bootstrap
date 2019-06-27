import webuploader from "webuploader"

export default function webUpload (options, vue) {
	let config = {
		auto: true,
		swf: "/static/Uploader.swf",
		server: "http://www.js.me/demo/data.php?action=upload",
		imageList: "", // 上传时的图片列表 ID
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
				"<div id=\"" + file.id + "\" class=\"file-item thumbnail\" fid=''>" +
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
				uploader.removeFile(file)
				console.log($li.attr("fid"))
			})
		})

		uploader.on("uploadComplete", function (file) {
			$("#" + file.id).find(".progress").fadeOut()
		})
	}

	// 上传文件时进度条
	uploader.on("uploadProgress", function (file, percentage) {
		console.log(percentage * 100)
	})

	// 上传成功
	uploader.on("uploadSuccess", function (file, response) {
		vue.$data.file_id.push(response.data.id)
		$("#" + file.id).find(".state").text("已上传")
		$("#" + file.id).attr("fid", response.data.id)
	})

	// 上传出错时
	uploader.on("uploadError", function (file) {
		$("#" + file.id).find(".state").text("上传出错")
	})

	// 返回错误信息
	uploader.on("error", function (error) {
		if (error === "F_EXCEED_SIZE") {
			vue.layer.alert("文件超出指定大小", {icon: 2})
		}
		if (error === "Q_TYPE_DENIED") {
			vue.layer.alert("文件类型不正确！", {icon: 2})
		}
		if (error === "Q_EXCEED_NUM_LIMIT") {
			vue.layer.alert("文件超出个数！", {icon: 2})
		}
	})

}
