<template>
    <div>
        <div id="fileList" class="uploader-list"></div>
        <div id="picker">选择文件</div>
        <!--<Upload :Pick="Pick" :Headers="Headers" :Accept="Accept" :FileSize="FileSize"/>-->
    </div>
</template>

<script>
	window.jQuery = require("jquery")
	let WebUploader = require("@@/js/webuploader/webuploader")

	export default {
		name: "Upload",
		props: ["Pick", "Headers", "Accept", "FileSize", "FormData"],
		data () {
			return {
				pick: {
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
					mimeTypes: "image/*" // 多个用逗号分割。
				},
				fileSize: 2
			}
		},
		computed: {},
		mounted () {
			let self = this
			let upload = new WebUploader.create({
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
			})
		},
		methods: {}
	}
</script>

<style lang="scss">
    @import "../../static/js/webuploader/webuploader.scss";
</style>