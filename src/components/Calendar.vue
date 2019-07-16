<template>
    <div>
        <full-calendar
                lang="zh"
                :events="monthData"
                @changeMonth="changeMonth"
                @eventClick="eventClick"
                @dayClick="dayClick"
                @moreClick="moreClick"
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
					},
					{
						title: "11111",
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
		methods: {
			// 选择月份
			changeMonth (start, end, current) {
				console.log("changeMonth", start, end, current)
			},
			// 点击事件
			eventClick (event, jsEvent, pos) {
				console.log("eventClick", event, jsEvent, pos)
			},
			// 点击当天
			dayClick (day, jsEvent) {
				console.log("dayClick", day, jsEvent)
			},
			// 查看更多
			moreClick (day, events, jsEvent) {
				console.log("moreCLick", day, events, jsEvent)
			},
		},
		components: {
			"full-calendar": require("vue-fullcalendar")
		},
		watch: {},
		errorCaptured (err, vm, info) {}
	}
</script>

<style lang="scss">
    .comp-full-calendar {max-width: none;}

    .full-calendar-body .dates {
        & .dates-events .events-week .events-day {
            min-height: 100px;

            & .event-box .event-item {
                &.blue {
                    background-color: #cceefe;
                    color: #135a82;
                }

                &.pink {
                    background-color: #fce5e0;
                    color: #666;
                }
            }
        }

        & .week-row .day-cell {
            position: relative;

            & .day-number {z-index: 2;position: absolute;width: 25px;height: 25px;line-height: 25px;text-align: center;right: 1px;top: 2px;}

            &.today {
                background-color: #fff;

                &:before {
                    content: ''; display: block; width: 25px; height: 25px;-webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px;background-color: #d77210;position: absolute; right: 1px;top: 2px;z-index: 1;
                }

                & .day-number {color: #fff;}
            }
        }
    }
</style>
