<template>
    <div class="container">
        <input type="text" name="mobile" class="form-control" valid="2424" data-msg="111112222" v-validate="'required|mobile:10,20'">
        <div class="validateTip" v-show="errors.has('mobile')">
            {{errors.first("mobile")}}
        </div>
        <a href="javascript:void(0);" @click="getvee">111</a>
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
		methods: {
			getvee(){
				console.log(this.$validator)
            }
        },
		components: {}
	}
</script>

