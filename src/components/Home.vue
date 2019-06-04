<template>
    <div class="container">
        <a href="javascript:void(0);" class="linkCss3">css3</a>
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

		},
		methods: {},
		components: {}
	}
</script>
<style lang="scss">
    .linkCss3 {
        width:200px;height:40px;line-height:40px;border:1px solid #ededed;display:block;position:relative;
        &:after {
            content:'';width:0;height:0;position:absolute;border:1px solid transparent;box-sizing:border-box;
            transition:width 0.2s ease-out, height 0.2s ease-out 0.2s;
        }
        &:before {
            content:'';width:0;height:0;position:absolute;border:1px solid transparent;box-sizing:border-box;
            transition:border-color 0s ease-out 0.4s, width 0.2s ease-out, height 0.2s ease-out 0.6s;right:0;bottom:0;
        }
        &:hover {
            &:before {
                /*width:100%;height:100%;border-top-color:#f00;border-right-color:#f00;*/
            }
            &:after {
                width:100%;height:100%;border-bottom-color:#f00;border-left-color:#f00;
            }
        }
    }
</style>

