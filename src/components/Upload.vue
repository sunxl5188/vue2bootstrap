<template>
    <div class="container">
        <div id="fileList2" class="uploader-list">
            <div id="WU_FILE_0" class="file-item" fid="">
                <img src="../../static/images/700_0.jpeg">
                <div class="file-title">20140716023921_u3juM.thumb.700_0.jpeg</div>
                <div class="file-panel">
                    <span class="state">已上传</span>
                    <span class="cancel glyphicon glyphicon-trash"></span>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                        <span class="sr-only">40% Complete (success)</span>
                    </div>
                </div>
            </div>
        </div>
        <input type="hidden" name="file_id" v-model="file_id.join(',')"/>
        <div id="picker">选择文件</div>
        <div class="progress">
            <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                <span class="sr-only">45% Complete</span>
            </div>
        </div>

        <div class="fileProgress">
            <span></span>
        </div>
    </div>
</template>

<script>
	import layer from "layui-layer"
	import webupload from "@~/js/webupload"

	export default {
		name: "Upload",
		data () {
			return {
				file_id: [2, 3, 4, 5]
			}
		},
		computed: {},
		mounted () {
			let self = this
			webupload({
				pick: {id: "#picker"},
				imageList: "#fileList2"
			}, self)
		},
		methods: {}
	}
</script>

<style lang="scss">

</style>
