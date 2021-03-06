import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import List from "@/components/List"
import Draggable from "@/components/Draggable"
import Upload from "@/components/Upload"
import Calendar from "@/components/Calendar"
import Calendar2 from "@/components/Calendar2"
import Error from "@/components/Error"

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{ path: "/", name: "Home", component: Home },
		{ path: "/List", name: "List", component: List },
		{ path: "/draggable", name: "draggable", component: Draggable },
		{ path: "/upload", name: "upload", component: Upload },
		{ path: "/calendar", name: "calendar", component: Calendar },
		{ path: "/calendar2", name: "calendar2", component: Calendar2 },
		{ path: "*", name: "Error", component: Error }
	]
})
