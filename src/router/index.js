import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home"
import List from "@/components/List"
import Error from "@/components/Error"

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home
		},
		{
			path: "/List", name: "List", component: List
		},
		{
			path: "*", name: "Error", component: Error
		}
	]
})
