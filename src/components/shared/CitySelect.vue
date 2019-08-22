<template>
    <div class="form-inline">
        <!--省市区三级联动菜单-->
        <select name="" class="form-control" v-model="province"
                @change="getCityList($event.target.selectedIndex - 1, 1)">
            <option value="">请选择</option>
            <option :value="item.area_id" v-for="item in pList">{{item.title}}</option>
        </select>
        <select name="" class="form-control" v-model="city" @change="getCityList($event.target.selectedIndex - 1, 2)"
                v-if="cList.length > 0">
            <option value="">请选择</option>
            <option :value="item.area_id" v-for="item in cList">{{item.title}}</option>
        </select>
        <select name="" class="form-control" v-model="area" @change="getCityList($event.target.selectedIndex - 1, 3)"
                v-if="aList.length > 0">
            <option value="">请选择</option>
            <option :value="item.area_id" v-for="item in aList">{{item.title}}</option>
        </select>
        <!--调用组件与赋值-->
        <!--<CitySelect p="350000" c="361003" a="361001" @cityCallback="cityCallback"></CitySelect>-->
    </div>
</template>

<script>
	import cityJson from "@@/json/cityjson"

	export default {
		name: "CitySelect",
		props: {
			p: {
				type: String,
				default: ""
			},
			c: {
				type: String,
				default: ""
			},
			a: {
				type: String,
				default: ""
			},
		},
		data () {
			return {
				province: this.p,
				city: this.c,
				area: this.a,
				pList: cityJson.cityList,
				cList: [],
				aList: []
			}
		},
		mounted () {
			let self = this
			self.$nextTick(() => {
				if (self.province) {
					let i = self.arrObjIndex(self.pList, self.province)
					self.initialList(i, 1)
				}
				if (self.city) {
					let i = self.arrObjIndex(self.cList, self.city)
					self.initialList(i, 2)
				}
			})
		},
		methods: {
			initialList (i, type) {
				let self = this
				if (type === 1) {
					self.cList = self.pList[i]["child"]
				}
				if (type === 2) {
					self.aList = self.cList[i]["child"]
				}
			},
			getCityList (i, type) {
				let self = this
				if (type === 1) {
					self.city = ""
					self.area = ""
					self.cList = []
					self.aList = []
					self.cList = self.pList[i]["child"]
				}
				if (type === 2) {
					self.area = ""
					self.aList = []
					self.aList = self.cList[i]["child"]
				}
				self.$emit("cityCallback", {
					province: self.province,
					city: self.city,
					area: self.area,
				})
			},
			arrObjIndex (obj, objStr) {
				return obj.reduce((index, ele, i) => {
					if (ele.area_id === String(objStr)) {
						return i
					} else {
						return index
					}
				}, -1)
			}
		}
	}
</script>

<style scoped>

</style>
