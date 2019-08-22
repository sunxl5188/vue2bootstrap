<template>
    <div class="container">
        <div id="fileList" class="webUploader"></div>
        <input type="hidden" name="file_id" v-model="file_id.join(',')"/>
        <div id="picker">选择文件</div>
    </div>
</template>

<script>
	import layer from "layui-layer"
	import webupload from "@~/js/webupload"

	export default {
		name: "Upload",
		data () {
			return {
				file_id: []
			}
		},
		computed: {},
		mounted () {
			let self = this
			webupload(self.file_id, {fileList:{id:"#fileList",type:"image"}})
		},
		methods: {}
	}
</script>

<style lang="scss">

</style>
