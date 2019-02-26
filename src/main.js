// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "animate.css/animate.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "@~/js/bootstrap"
import layer from "vue-layer"
import Vue from "vue"
import App from "./App"
import router from "./router"
import "../static/css/main.css"

Vue.prototype.layer = layer(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: {App},
	template: "<App/>"
})
