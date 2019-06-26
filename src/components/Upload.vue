<template>
    <div>
        <div id="fileList2" class="uploader-list">
            <div id="WU_FILE_0" class="file-item thumbnail" fid="1850691494485985.jpg"><img src="data:image/jpeg;base64,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"><div class="file-info">1850691494485985.jpg</div><div class="file-panel"><span class="state"></span><span class="cancel glyphicon glyphicon-trash"></span></div></div>
        </div>
        <div id="picker">选择文件</div>
    </div>
</template>

<script>
	import webupload from "@~/js/webupload"

	export default {
		name: "Upload",
		data () {
			return {
				/*pick: {
					id: "#picker",
					label: "", // 请采用 innerHTML 代替
					innerHTML: "", // 指定按钮文字
					multiple: true // 是否开起同时选择多个文件能力
				},
				headers: {
					token: self.token || sessionStorage.token || "noToken"
				},
				accept: {
					title: "Images", // 文字描述
					extensions: "gif,jpg,jpeg,bmp,png", // 允许的文件后缀，不带点，多个用逗号分割。
					mimeTypes: "image/!*" // 多个用逗号分割。
				},
				fileSize: 2*/
			}
		},
		computed: {},
		mounted () {
			let self = this
			webupload({
				pick: {id: "#picker"},
				imageList: "#fileList2"
			})
			/*let upload = new WebUploader.create({
				swf: "/static/js/webuploader/Uploader.swf",
				server: "http://www.js.me/demo/data.php?action=all",
				pick: self.Pick || self.pick,
				resize: false, // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
				auto: true,
				headers: self.Headers || self.headers,
				accept: self.Accept || self.accept,
				formData: self.FormData || {},
				fileVal: "file",
				method: "POST",
				fileNumLimit: undefined, // 验证文件总数量
				fileSizeLimit: undefined, // 验证文件总大小是否超出限制
				fileSingleSizeLimit: 1024 * 1024 * (self.FileSize || self.fileSize) // 验证单个文件大小是否超出限制
			})

			// 当有文件添加进来的时候
			upload.on("fileQueued", function (file) {
				let $li = $(
					"<div id=\"" + file.id + "\" class=\"file-item thumbnail\" fid='" + file.name + "''>" +
					"<img>" +
					"<div class=\"file-info\">" + file.name + "</div>" +
					"<div class=\"file-panel\"><span class=\"state\"></span><span class=\"cancel glyphicon glyphicon-trash\"></span></div>" +
					"</div>"
					),
					$img = $li.find("img")

				// $list为容器jQuery实例
				$("#fileList").append($li)

				// 创建缩略图
				// 如果为非图片文件，可以不用调用此方法。
				// thumbnailWidth x thumbnailHeight 为 100 x 100
				upload.makeThumb(file, function (error, src) {
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

			// 文件上传过程中创建进度条实时显示。
			upload.on("uploadProgress", function (file, percentage) {
				let $li = $("#" + file.id),
					$percent = $li.find(".progress .progress-bar")

				// 避免重复创建
				if (!$percent.length) {
					$percent = $("<div class=\"progress\">" +
						"<div class=\"progress-bar\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%\">" +
						"</div>" +
						"</div>").appendTo($li).find(".progress-bar")
				}
				$li.find("p.state").text("上传中")
				$percent.css("width", percentage * 100 + "%")
				$percent.html(percentage * 100 + "%")
			})

			upload.on("uploadSuccess", function (file) {
				$("#" + file.id).find(".state").text("已上传")
			})

			upload.on("uploadError", function (file) {
				$("#" + file.id).find(".state").text("上传出错")
			})

			upload.on("uploadComplete", function (file) {
				$("#" + file.id).find(".progress").fadeOut()
			})*/
		},
		methods: {}
	}
</script>

<style lang="scss">

</style>
