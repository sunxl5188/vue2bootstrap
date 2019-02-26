<template>
    <div class="container">
        <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
    </div>
</template>

<script>
	import PagInAction from "@/components/PagInAction"

	export default {
		name: "List",
		data () {
			return {
				total: 150, // 记录总条数
				display: 10, // 每页显示条数
				current: 1, // 当前的页数
			}
		},
		methods: {
			pagechange: function (currentPage) {
				console.log(currentPage)
				// ajax请求, 向后台发送 currentPage, 来获取对应的数据

			}
		},
		components: {
			"v-pagination": PagInAction
		}
	}
</script>

<style scoped>

</style>