<template>
    <div class="container">
        <a class="btn btn-primary" role="button" tabindex="0">可消失的弹出框</a>
        <form action="" method="POST" class="form-horizontal" @submit.prevent="validateBeforeSubmit">
            <div class="form-group">
                <label class="col-sm-2 control-label">所在地区</label>
                <div class="col-sm-10">
                    <CitySelect p="230000" c="230001" a="238000" :aDisplay="true"
                                @cityCallback="cityCallback"></CitySelect>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">所在地区二</label>
                <div class="col-sm-10">
                    <CitySelect p="050011" c="050011" a="050100" :aDisplay="true"
                                @cityCallback="cityCallback"></CitySelect>
                </div>
            </div>
            <div class="form-group">
                <div class="form-group">
                    <label class="col-sm-2 control-label">多选</label>
                    <div class="col-sm-10">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="check1" v-model="check1">选项一
                            </label>
                            <label>
                                <input type="checkbox" name="check2" v-model="check2">选项二
                            </label>
                            <label>
                                <input type="checkbox" name="check3" v-model="check3">选项三
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
	window.jQuery = require("jquery")
	require("icheck")
	import "@~/js/VeeValidateConfig"
	import CitySelect from "@#/shared/CitySelect"

	export default {
		name: "Home",
		data () {
			return {
				message: "传入的值",
				check1: false,
				check2: false,
				check3: false
			}
		},
		mounted () {
			let self = this
			setTimeout(function () {
				$(".btn-primary").popover({
					html: true,
					trigger: "focus",
					placement: "auto",
					content: "<dd><a href='#'>创建提醒</a></dd><dd><a href='#'>创建日程</a></dd>"
				})
				$("[type=\"checkbox\"]").each(function (index, element) {
					/**
					 * $("input").iCheck("check")   // 将输入框的状态设置为checked
					 * $("input").iCheck("uncheck") // 移除 checked 状态
					 * $("input").iCheck("toggle")  // toggle checked state
					 * $("input").iCheck("disable") // 将输入框的状态设置为 disabled
					 * $("input").iCheck("enable")  // 移除 disabled 状态
					 * $("input").iCheck("update")  // apply input changes, which were done outside the plugin
					 * $("input").iCheck("destroy") // 移除iCheck样式
					 * 下面是参数列表及其默认值
					 * handle: '',
					 * checkboxClass: 'icheckbox',
					 * radioClass: 'iradio',
					 * checkedClass: 'checked',
					 * checkedCheckboxClass: '', checkedRadioClass: '', uncheckedClass: '', uncheckedCheckboxClass: '', uncheckedRadioClass: '', disabledClass: 'disabled', disabledCheckboxClass: '', disabledRadioClass: '', enabledClass: '', enabledCheckboxClass: '', enabledRadioClass: '', hoverClass: 'hover', focusClass: 'focus', activeClass: 'active', labelHover: true, labelHoverClass: 'hover', increaseArea: '', cursor: false, inheritClass: false, inheritID: false, insert: ''
					 * ifClicked 用户点击了自定义的输入框或与其相关联的label
					 * ifChanged 输入框的 checked 或 disabled 状态改变了
					 * ifChecked 输入框的状态变为 checked
					 * ifUnchecked checked 状态被移除
					 * ifDisabled 输入框状态变为 disabled
					 * ifEnabled disabled 状态被移除
					 * ifCreated 输入框被应用了iCheck样式
					 * ifDestroyed iCheck样式被移除
					 * $('input').on('ifChecked', function(event){ //ifCreated 事件应该在插件初始化之前绑定
					 * alert(event.type + ' callback');
					 * })
					 * */

					$(this).iCheck({
						labelHover: false,
						cursor: true,
						checkboxClass: "icheckbox_minimal-blue",
						radioClass: "iradio_minimal-blue",
						increaseArea: "20%"
					})

					$(this).on("ifChanged", function (eve) {
						self[eve.currentTarget.name] = eve.target.checked
					})

				})
			}, 1000)
		},
		methods: {
			cityCallback (data) {
				console.log(data)
			}
		},
		components: {CitySelect}
	}
</script>
<style lang="scss">
    @import "../../node_modules/icheck/skins/all.css";
</style>

