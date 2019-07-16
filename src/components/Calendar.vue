<template>
    <div>
        <full-calendar
                lang="zh"
                :events="monthData"
        />
    </div>
</template>

<script>
	import fullcalendar from "vue-fullcalendar"

	export default {
		name: "Calendar",
		data () {
			return {
				monthData: [
					{
						title: "eeeeeeeee",  // 事件内容
						start: "2019-07-11", // 事件开始时间
						end: "2019-07-30",   // 事件结束时间
						cssClass: "blue"     // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
					},
					{
						title: "eeeeeeeee",
						start: "2019-07-10",
						end: "2019-07-11",
						cssClass: "pink"
					}
				]
			}
		},
		computed: {},
		mounted () {
			let self = this
		},
		methods: {},
		components: {
			"full-calendar": require("vue-fullcalendar")
		},
		watch: {},
		errorCaptured (err, vm, info) {}
	}
</script>

<style lang="scss">
    .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {
        &.blue {background-color:#cceefe;color:#135a82;}
        &.pink {background-color:#fce5e0;color:#666;}
    }
</style>
