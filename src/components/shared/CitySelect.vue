<template>
    <div class="form-inline">
        <select name="" class="form-control">
            <option value=""> 请选择</option>
        </select>
        <select name="" class="form-control">
            <option value=""> 请选择</option>
        </select>
        <select name="" class="form-control">
            <option value=""> 请选择</option>
        </select>
    </div>
</template>

<script>
	import cityList from "@@/json/cityjson"

	export default {
		name: "city",
		data () {
			return {}
		},
		computed: {},
		mounted () {
			let self = this
		},
		methods: {},
		components: {},
		watch: {},
		errorCaptured (err, vm, info) {}
	}
</script>

<style scoped>

</style>
