// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "animate.css/animate.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "@@/css/main.css"
import "@@/js/bootstrap"
import VueCookies from "vue-cookies"
import layer from "layui-layer"
import laydate from "@@/js/laydate/laydate"
import Vue from "vue"
import App from "./App"
import router from "./router"
import VueDraggable from "vue-draggable"
import "vue-draggable/polyfills" // IE9

laydate.path = "//" + window.location.host + "/static/js/laydate/"
laydate.config.theme = "#547bbd"
Vue.prototype.laydate = laydate
Vue.prototype.layer = layer


Vue.use(VueCookies)
Vue.use(VueDraggable)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: {App},
	template: "<App/>",
	render: h => h(App),
	mounted () {
		document.dispatchEvent(new Event("render-event"))
	}
})
