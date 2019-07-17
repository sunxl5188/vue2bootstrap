<template>
    <div>
        <FullCalendar
                ref="fullCalendar"
                defaultView="dayGridMonth"
                locale="zh-cn"
                :header="{
                    left: 'today',
                    center: 'prev title next',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }"
                :views="{
                    timeGrid: {
                      eventLimit: 6
                    }
                }"
                :eventLimit="true"
                :plugins="calendarPlugins"
                :weekends="calendarWeekends"
                :selectable="true"
                :editable="false"
                :events="calendarEvents"
                :buttonText="buttonText"
                @select="select"
                @eventClick="handleEventClick"
        />

    </div>
</template>

<script>
	import FullCalendar from "@fullcalendar/vue"
	import dayGridPlugin from "@fullcalendar/daygrid"
	import timeGridPlugin from "@fullcalendar/timegrid"
	import interactionPlugin from "@fullcalendar/interaction"

	export default {
		name: "Calendar2",
		data () {
			return {
				buttonText: {
					today: "今天",
					month: "月",
					week: "周",
					day: "天",
					list: "列表"
				},
				calendarPlugins: [
					dayGridPlugin,
					timeGridPlugin,
					interactionPlugin
				],
				calendarWeekends: true,
				calendarEvents: [
					{title: "今天会议今天会议今天会议今天会议", start: "2019-07-23"},
					{title: "1212", start: new Date()},
					{title: "3435", start: new Date()},
					{title: "464646", start: new Date()},
					{title: "dgdg", start: new Date()},
					{title: "fjfgj", start: new Date()},
					{title: "fhfh", start: new Date()},
					{title: "zxdgdxh", start: new Date()},
					{title: "dfhbf", start: new Date()},
					{title: "xfbxcnb", start: new Date()},
					{title: "x cn bvc xn", start: new Date()},
					{title: "今天会议2", start: "2019-07-10T10:30:00", end: "2019-07-12T12:30:00"},
					{title: "All Day Event", start: "2019-07-01"},
					{title: "Long Event", start: "2019-07-07", end: "2019-07-10"},
					{groupId: "999", title: "Repeating Event", start: "2019-07-09T16:00:00+00:00"},
					{groupId: "999", title: "Repeating Event", start: "2019-07-16T16:00:00+00:00"},
					{title: "Conference", start: "2019-07-16", end: "2019-07-18"},
					{title: "Meeting", start: "2019-07-17T10:30:00+00:00", end: "2019-07-17T12:30:00+00:00"},
					{title: "Lunch", start: "2019-07-17T12:00:00+00:00"},
					{title: "Birthday Party", start: "2019-07-18T07:00:00+00:00"},
					{url: "http://google.com/", title: "Click for Google", start: "2019-07-28"},
					{title: "Meeting", start: "2019-07-17T14:30:00+00:00"},
					{title: "Happy Hour", start: "2019-07-17T17:30:00+00:00"},
					{title: "Dinner", start: "2019-07-17T20:00:00+00:00"}
				]
			}
		},
		computed: {},
		mounted () {
			let self = this
					setTimeout(function () {
											$('#example').popover()
					}, 1000)
		},
		methods: {
			toggleWeekends () {
				this.calendarWeekends = !this.calendarWeekends // update a property
			},
			gotoPast () {
				let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
				calendarApi.gotoDate("2000-01-01") // call a method on the Calendar object
			},
			/*handleDateClick (arg) {
				if (confirm("您想要添加活动吗" + arg.dateStr + " ?")) {
					this.calendarEvents.push({ // add new event data
						title: "New Event",
						start: arg.date,
						allDay: arg.allDay
					})
				}
			},*/
			select: function (info) {
				alert("选择了 " + info.startStr + " to " + info.endStr)
			},
			// 用户点击事件触发
			handleEventClick (info) {
				console.log(info)
			}
		},
		components: {FullCalendar},
		watch: {},
		errorCaptured (err, vm, info) {}
	}
</script>

<style>
    @import "../../node_modules/@fullcalendar/core/main.min.css";
    @import '../../node_modules/@fullcalendar/daygrid/main.css';
    @import '../../node_modules/@fullcalendar/timegrid/main.css';
</style>
<style lang="scss">
    .fc-center {
        & h2 {display:inline-block;vertical-align:middle;}
        & button {
            padding:0;border:none;background-color:transparent;color:#666;vertical-align:middle;
            .fc-icon {margin-top:-2px;}
        }
    }
    .fc-button-group {
        & button {
            &.fc-button-primary {
            }
        }
    }
</style>
