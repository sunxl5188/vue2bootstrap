<template>
    <div class="container text-right">
        <a class="btn btn-primary" role="button" tabindex="0">可消失的弹出框</a>
    </div>
</template>

<script>
	import "@~/js/VeeValidateConfig"

	export default {
		name: "Home",
		data () {
			return {
				message: "传入的值"
			}
		},
		mounted () {
            setTimeout(function () {
							$(".btn-primary").popover({
								html:true,
								trigger:"focus",
								placement:"auto",
								content:"<dd><a href='#'>创建提醒</a></dd><dd><a href='#'>创建日程</a></dd>"
							})
            }, 1000)
		},
		methods: {},
		components: {}
	}
</script>
<style lang="scss">
</style>

