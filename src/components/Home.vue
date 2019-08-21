<template>
    <div class="container">
        <a class="btn btn-primary" role="button" tabindex="0">可消失的弹出框</a>
        <form action="" method="POST" class="form-horizontal" @submit.prevent="validateBeforeSubmit">
             <div class="form-group">
                <label class="col-sm-2 control-label">所在地区</label>
                <div class="col-sm-10">
                    <CitySelect></CitySelect>
                </div>
            </div>

        </form>

    </div>
</template>

<script>
	import "@~/js/VeeValidateConfig"
	import CitySelect from "@#/shared/CitySelect"

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
					html: true,
					trigger: "focus",
					placement: "auto",
					content: "<dd><a href='#'>创建提醒</a></dd><dd><a href='#'>创建日程</a></dd>"
				})
			}, 1000)
		},
		methods: {},
		components: {CitySelect}
	}
</script>
<style lang="scss">
</style>

