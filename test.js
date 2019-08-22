let arr = [0, 7, 2]

function findIndex (l, o) {
	let objStr = JSON.stringify(o)
	return l.reduce((index, ele, i) => {
		if (JSON.stringify(ele) === objStr) {
			return i
		} else {
			return index
		}
	}, -1)
}

//console.log(findIndex(arr, 7))
let obj = [
	{
		"area_id": "100000",
		"title": "北京",
		"pinyin": "beijing",
		"pid": "0",
		"child": [
			{
				"area_id": "100000",
				"title": "北京市",
				"pinyin": "beijing",
				"pid": "1",
				"child": [
					{
						"area_id": "100010",
						"title": "东城区",
						"pinyin": "dongcheng",
						"pid": "2"
					},
					{
						"area_id": "100032",
						"title": "西城区",
						"pinyin": "xicheng",
						"pid": "2"
					},
					{
						"area_id": "100020",
						"title": "朝阳区",
						"pinyin": "chaoyang",
						"pid": "2"
					},
					{
						"area_id": "100071",
						"title": "丰台区",
						"pinyin": "fengtai",
						"pid": "2"
					},
					{
						"area_id": "100043",
						"title": "石景山区",
						"pinyin": "shijingshan",
						"pid": "2"
					},
					{
						"area_id": "100089",
						"title": "海淀区",
						"pinyin": "haidian",
						"pid": "2"
					},
					{
						"area_id": "102300",
						"title": "门头沟区",
						"pinyin": "mentougou",
						"pid": "2"
					},
					{
						"area_id": "102488",
						"title": "房山区",
						"pinyin": "fangshan",
						"pid": "2"
					},
					{
						"area_id": "101149",
						"title": "通州区",
						"pinyin": "tongzhou",
						"pid": "2"
					},
					{
						"area_id": "101300",
						"title": "顺义区",
						"pinyin": "shunyi",
						"pid": "2"
					},
					{
						"area_id": "102200",
						"title": "昌平区",
						"pinyin": "changping",
						"pid": "2"
					},
					{
						"area_id": "102600",
						"title": "大兴区",
						"pinyin": "daxing",
						"pid": "2"
					},
					{
						"area_id": "101400",
						"title": "怀柔区",
						"pinyin": "huairou",
						"pid": "2"
					},
					{
						"area_id": "101200",
						"title": "平谷区",
						"pinyin": "pinggu",
						"pid": "2"
					},
					{
						"area_id": "101500",
						"title": "密云县",
						"pinyin": "miyun",
						"pid": "2"
					},
					{
						"area_id": "102100",
						"title": "延庆县",
						"pinyin": "yanqing",
						"pid": "2"
					}
				]
			}
		]
	},
	{
		"area_id": "300000",
		"title": "天津",
		"pinyin": "tianjin",
		"pid": "0",
		"child": [
			{
				"area_id": "300000",
				"title": "天津市",
				"pinyin": "tianjin",
				"pid": "19",
				"child": [
					{
						"area_id": "300041",
						"title": "和平区",
						"pinyin": "heping",
						"pid": "20"
					},
					{
						"area_id": "300171",
						"title": "河东区",
						"pinyin": "hedong",
						"pid": "20"
					},
					{
						"area_id": "300202",
						"title": "河西区",
						"pinyin": "hexi",
						"pid": "20"
					},
					{
						"area_id": "300110",
						"title": "南开区",
						"pinyin": "nankai",
						"pid": "20"
					},
					{
						"area_id": "300143",
						"title": "河北区",
						"pinyin": "hebei",
						"pid": "20"
					},
					{
						"area_id": "300131",
						"title": "红桥区",
						"pinyin": "hongqiao",
						"pid": "20"
					},
					{
						"area_id": "300300",
						"title": "东丽区",
						"pinyin": "dongli",
						"pid": "20"
					},
					{
						"area_id": "300380",
						"title": "西青区",
						"pinyin": "xiqing",
						"pid": "20"
					},
					{
						"area_id": "300350",
						"title": "津南区",
						"pinyin": "jinnan",
						"pid": "20"
					},
					{
						"area_id": "300400",
						"title": "北辰区",
						"pinyin": "beichen",
						"pid": "20"
					},
					{
						"area_id": "301700",
						"title": "武清区",
						"pinyin": "wuqing",
						"pid": "20"
					},
					{
						"area_id": "301800",
						"title": "宝坻区",
						"pinyin": "baodi",
						"pid": "20"
					},
					{
						"area_id": "300451",
						"title": "滨海新区",
						"pinyin": "binhaixinqu",
						"pid": "20"
					},
					{
						"area_id": "301500",
						"title": "宁河县",
						"pinyin": "ninghe",
						"pid": "20"
					},
					{
						"area_id": "301600",
						"title": "静海县",
						"pinyin": "jinghai",
						"pid": "20"
					},
					{
						"area_id": "301900",
						"title": "蓟县",
						"pinyin": "jixian",
						"pid": "20"
					}
				]
			}
		]
	},
	{
		"area_id": "050011",
		"title": "河北省",
		"pinyin": "hebei",
		"pid": "0",
		"child": [
			{
				"area_id": "050011",
				"title": "石家庄市",
				"pinyin": "shijiazhuang",
				"pid": "37",
				"child": [
					{
						"area_id": "050011",
						"title": "长安区",
						"pinyin": "chang'an",
						"pid": "38"
					},
					{
						"area_id": "050091",
						"title": "桥西区",
						"pinyin": "qiaoxi",
						"pid": "38"
					},
					{
						"area_id": "050051",
						"title": "新华区",
						"pinyin": "xinhua",
						"pid": "38"
					},
					{
						"area_id": "050100",
						"title": "井陉矿区",
						"pinyin": "jingxingkuangqu",
						"pid": "38"
					},
					{
						"area_id": "050031",
						"title": "裕华区",
						"pinyin": "yuhua",
						"pid": "38"
					},
					{
						"area_id": "052160",
						"title": "藁城区",
						"pinyin": "gaocheng",
						"pid": "38"
					},
					{
						"area_id": "050200",
						"title": "鹿泉区",
						"pinyin": "luquan",
						"pid": "38"
					},
					{
						"area_id": "051430",
						"title": "栾城区",
						"pinyin": "luancheng",
						"pid": "38"
					},
					{
						"area_id": "050300",
						"title": "井陉县",
						"pinyin": "jingxing",
						"pid": "38"
					},
					{
						"area_id": "050800",
						"title": "正定县",
						"pinyin": "zhengding",
						"pid": "38"
					},
					{
						"area_id": "050600",
						"title": "行唐县",
						"pinyin": "xingtang",
						"pid": "38"
					},
					{
						"area_id": "050500",
						"title": "灵寿县",
						"pinyin": "lingshou",
						"pid": "38"
					},
					{
						"area_id": "051330",
						"title": "高邑县",
						"pinyin": "gaoyi",
						"pid": "38"
					},
					{
						"area_id": "052560",
						"title": "深泽县",
						"pinyin": "shenze",
						"pid": "38"
					},
					{
						"area_id": "051230",
						"title": "赞皇县",
						"pinyin": "zanhuang",
						"pid": "38"
					},
					{
						"area_id": "052460",
						"title": "无极县",
						"pinyin": "wuji",
						"pid": "38"
					},
					{
						"area_id": "050400",
						"title": "平山县",
						"pinyin": "pingshan",
						"pid": "38"
					},
					{
						"area_id": "051130",
						"title": "元氏县",
						"pinyin": "yuanshi",
						"pid": "38"
					},
					{
						"area_id": "051530",
						"title": "赵县",
						"pinyin": "zhaoxian",
						"pid": "38"
					},
					{
						"area_id": "052360",
						"title": "辛集市",
						"pinyin": "xinji",
						"pid": "38"
					},
					{
						"area_id": "052260",
						"title": "晋州市",
						"pinyin": "jinzhou",
						"pid": "38"
					},
					{
						"area_id": "050700",
						"title": "新乐市",
						"pinyin": "xinle",
						"pid": "38"
					}
				]
			},
			{
				"area_id": "063000",
				"title": "唐山市",
				"pinyin": "tangshan",
				"pid": "37",
				"child": [
					{
						"area_id": "063000",
						"title": "路南区",
						"pinyin": "lunan",
						"pid": "61"
					},
					{
						"area_id": "063000",
						"title": "路北区",
						"pinyin": "lubei",
						"pid": "61"
					},
					{
						"area_id": "063100",
						"title": "古冶区",
						"pinyin": "guye",
						"pid": "61"
					},
					{
						"area_id": "063021",
						"title": "开平区",
						"pinyin": "kaiping",
						"pid": "61"
					},
					{
						"area_id": "063300",
						"title": "丰南区",
						"pinyin": "fengnan",
						"pid": "61"
					},
					{
						"area_id": "064000",
						"title": "丰润区",
						"pinyin": "fengrun",
						"pid": "61"
					},
					{
						"area_id": "063200",
						"title": "曹妃甸区",
						"pinyin": "caofeidian",
						"pid": "61"
					},
					{
						"area_id": "063700",
						"title": "滦县",
						"pinyin": "luanxian",
						"pid": "61"
					},
					{
						"area_id": "063500",
						"title": "滦南县",
						"pinyin": "luannan",
						"pid": "61"
					},
					{
						"area_id": "063600",
						"title": "乐亭县",
						"pinyin": "laoting",
						"pid": "61"
					},
					{
						"area_id": "064300",
						"title": "迁西县",
						"pinyin": "qianxi",
						"pid": "61"
					},
					{
						"area_id": "064100",
						"title": "玉田县",
						"pinyin": "yutian",
						"pid": "61"
					},
					{
						"area_id": "064200",
						"title": "遵化市",
						"pinyin": "zunhua",
						"pid": "61"
					},
					{
						"area_id": "064400",
						"title": "迁安市",
						"pinyin": "qian'an",
						"pid": "61"
					}
				]
			},
			{
				"area_id": "066000",
				"title": "秦皇岛市",
				"pinyin": "qinhuangdao",
				"pid": "37",
				"child": [
					{
						"area_id": "066000",
						"title": "海港区",
						"pinyin": "haigang",
						"pid": "76"
					},
					{
						"area_id": "066200",
						"title": "山海关区",
						"pinyin": "shanhaiguan",
						"pid": "76"
					},
					{
						"area_id": "066100",
						"title": "北戴河区",
						"pinyin": "beidaihe",
						"pid": "76"
					},
					{
						"area_id": "066500",
						"title": "青龙满族自治县",
						"pinyin": "qinglong",
						"pid": "76"
					},
					{
						"area_id": "066600",
						"title": "昌黎县",
						"pinyin": "changli",
						"pid": "76"
					},
					{
						"area_id": "066300",
						"title": "抚宁县",
						"pinyin": "funing",
						"pid": "76"
					},
					{
						"area_id": "066400",
						"title": "卢龙县",
						"pinyin": "lulong",
						"pid": "76"
					}
				]
			},
			{
				"area_id": "056002",
				"title": "邯郸市",
				"pinyin": "handan",
				"pid": "37",
				"child": [
					{
						"area_id": "056001",
						"title": "邯山区",
						"pinyin": "hanshan",
						"pid": "84"
					},
					{
						"area_id": "056002",
						"title": "丛台区",
						"pinyin": "congtai",
						"pid": "84"
					},
					{
						"area_id": "056003",
						"title": "复兴区",
						"pinyin": "fuxing",
						"pid": "84"
					},
					{
						"area_id": "056200",
						"title": "峰峰矿区",
						"pinyin": "fengfengkuangqu",
						"pid": "84"
					},
					{
						"area_id": "056101",
						"title": "邯郸县",
						"pinyin": "handan",
						"pid": "84"
					},
					{
						"area_id": "056600",
						"title": "临漳县",
						"pinyin": "linzhang",
						"pid": "84"
					},
					{
						"area_id": "056700",
						"title": "成安县",
						"pinyin": "cheng'an",
						"pid": "84"
					},
					{
						"area_id": "056900",
						"title": "大名县",
						"pinyin": "daming",
						"pid": "84"
					},
					{
						"area_id": "056400",
						"title": "涉县",
						"pinyin": "shexian",
						"pid": "84"
					},
					{
						"area_id": "056500",
						"title": "磁县",
						"pinyin": "cixian",
						"pid": "84"
					},
					{
						"area_id": "057550",
						"title": "肥乡县",
						"pinyin": "feixiang",
						"pid": "84"
					},
					{
						"area_id": "057150",
						"title": "永年县",
						"pinyin": "yongnian",
						"pid": "84"
					},
					{
						"area_id": "057450",
						"title": "邱县",
						"pinyin": "qiuxian",
						"pid": "84"
					},
					{
						"area_id": "057350",
						"title": "鸡泽县",
						"pinyin": "jize",
						"pid": "84"
					},
					{
						"area_id": "057650",
						"title": "广平县",
						"pinyin": "guangping",
						"pid": "84"
					},
					{
						"area_id": "057750",
						"title": "馆陶县",
						"pinyin": "guantao",
						"pid": "84"
					},
					{
						"area_id": "056800",
						"title": "魏县",
						"pinyin": "weixian",
						"pid": "84"
					},
					{
						"area_id": "057250",
						"title": "曲周县",
						"pinyin": "quzhou",
						"pid": "84"
					},
					{
						"area_id": "056300",
						"title": "武安市",
						"pinyin": "wu'an",
						"pid": "84"
					}
				]
			},
			{
				"area_id": "054001",
				"title": "邢台市",
				"pinyin": "xingtai",
				"pid": "37",
				"child": [
					{
						"area_id": "054001",
						"title": "桥东区",
						"pinyin": "qiaodong",
						"pid": "104"
					},
					{
						"area_id": "054000",
						"title": "桥西区",
						"pinyin": "qiaoxi",
						"pid": "104"
					},
					{
						"area_id": "054001",
						"title": "邢台县",
						"pinyin": "xingtai",
						"pid": "104"
					},
					{
						"area_id": "054300",
						"title": "临城县",
						"pinyin": "lincheng",
						"pid": "104"
					},
					{
						"area_id": "054200",
						"title": "内丘县",
						"pinyin": "neiqiu",
						"pid": "104"
					},
					{
						"area_id": "055450",
						"title": "柏乡县",
						"pinyin": "baixiang",
						"pid": "104"
					},
					{
						"area_id": "055350",
						"title": "隆尧县",
						"pinyin": "longyao",
						"pid": "104"
					},
					{
						"area_id": "055150",
						"title": "任县",
						"pinyin": "renxian",
						"pid": "104"
					},
					{
						"area_id": "054400",
						"title": "南和县",
						"pinyin": "nanhe",
						"pid": "104"
					},
					{
						"area_id": "055550",
						"title": "宁晋县",
						"pinyin": "ningjin",
						"pid": "104"
					},
					{
						"area_id": "055250",
						"title": "巨鹿县",
						"pinyin": "julu",
						"pid": "104"
					},
					{
						"area_id": "055650",
						"title": "新河县",
						"pinyin": "xinhe",
						"pid": "104"
					},
					{
						"area_id": "054600",
						"title": "广宗县",
						"pinyin": "guangzong",
						"pid": "104"
					},
					{
						"area_id": "054500",
						"title": "平乡县",
						"pinyin": "pingxiang",
						"pid": "104"
					},
					{
						"area_id": "054700",
						"title": "威县",
						"pinyin": "weixian",
						"pid": "104"
					},
					{
						"area_id": "054800",
						"title": "清河县",
						"pinyin": "qinghe",
						"pid": "104"
					},
					{
						"area_id": "054900",
						"title": "临西县",
						"pinyin": "linxi",
						"pid": "104"
					},
					{
						"area_id": "055750",
						"title": "南宫市",
						"pinyin": "nangong",
						"pid": "104"
					},
					{
						"area_id": "054100",
						"title": "沙河市",
						"pinyin": "shahe",
						"pid": "104"
					}
				]
			},
			{
				"area_id": "071052",
				"title": "保定市",
				"pinyin": "baoding",
				"pid": "37",
				"child": [
					{
						"area_id": "071051",
						"title": "新市区",
						"pinyin": "xinshi",
						"pid": "124"
					},
					{
						"area_id": "071000",
						"title": "北市区",
						"pinyin": "beishi",
						"pid": "124"
					},
					{
						"area_id": "071001",
						"title": "南市区",
						"pinyin": "nanshi",
						"pid": "124"
					},
					{
						"area_id": "072150",
						"title": "满城县",
						"pinyin": "mancheng",
						"pid": "124"
					},
					{
						"area_id": "071100",
						"title": "清苑县",
						"pinyin": "qingyuan",
						"pid": "124"
					},
					{
						"area_id": "074100",
						"title": "涞水县",
						"pinyin": "laishui",
						"pid": "124"
					},
					{
						"area_id": "073200",
						"title": "阜平县",
						"pinyin": "fuping",
						"pid": "124"
					},
					{
						"area_id": "072550",
						"title": "徐水县",
						"pinyin": "xushui",
						"pid": "124"
					},
					{
						"area_id": "072650",
						"title": "定兴县",
						"pinyin": "dingxing",
						"pid": "124"
					},
					{
						"area_id": "072350",
						"title": "唐县",
						"pinyin": "tangxian",
						"pid": "124"
					},
					{
						"area_id": "071500",
						"title": "高阳县",
						"pinyin": "gaoyang",
						"pid": "124"
					},
					{
						"area_id": "071700",
						"title": "容城县",
						"pinyin": "rongcheng",
						"pid": "124"
					},
					{
						"area_id": "074300",
						"title": "涞源县",
						"pinyin": "laiyuan",
						"pid": "124"
					},
					{
						"area_id": "072450",
						"title": "望都县",
						"pinyin": "wangdu",
						"pid": "124"
					},
					{
						"area_id": "071600",
						"title": "安新县",
						"pinyin": "anxin",
						"pid": "124"
					},
					{
						"area_id": "074200",
						"title": "易县",
						"pinyin": "yixian",
						"pid": "124"
					},
					{
						"area_id": "073100",
						"title": "曲阳县",
						"pinyin": "quyang",
						"pid": "124"
					},
					{
						"area_id": "071400",
						"title": "蠡县",
						"pinyin": "lixian",
						"pid": "124"
					},
					{
						"area_id": "072250",
						"title": "顺平县",
						"pinyin": "shunping",
						"pid": "124"
					},
					{
						"area_id": "071300",
						"title": "博野县",
						"pinyin": "boye",
						"pid": "124"
					},
					{
						"area_id": "071800",
						"title": "雄县",
						"pinyin": "xiongxian",
						"pid": "124"
					},
					{
						"area_id": "072750",
						"title": "涿州市",
						"pinyin": "zhuozhou",
						"pid": "124"
					},
					{
						"area_id": "073000",
						"title": "定州市",
						"pinyin": "dingzhou",
						"pid": "124"
					},
					{
						"area_id": "071200",
						"title": "安国市",
						"pinyin": "anguo",
						"pid": "124"
					},
					{
						"area_id": "074000",
						"title": "高碑店市",
						"pinyin": "gaobeidian",
						"pid": "124"
					}
				]
			},
			{
				"area_id": "075000",
				"title": "张家口市",
				"pinyin": "zhangjiakou",
				"pid": "37",
				"child": [
					{
						"area_id": "075000",
						"title": "桥东区",
						"pinyin": "qiaodong",
						"pid": "150"
					},
					{
						"area_id": "075061",
						"title": "桥西区",
						"pinyin": "qiaoxi",
						"pid": "150"
					},
					{
						"area_id": "075100",
						"title": "宣化区",
						"pinyin": "xuanhua",
						"pid": "150"
					},
					{
						"area_id": "075300",
						"title": "下花园区",
						"pinyin": "xiahuayuan",
						"pid": "150"
					},
					{
						"area_id": "075100",
						"title": "宣化县",
						"pinyin": "xuanhua",
						"pid": "150"
					},
					{
						"area_id": "076450",
						"title": "张北县",
						"pinyin": "zhangbei",
						"pid": "150"
					},
					{
						"area_id": "076650",
						"title": "康保县",
						"pinyin": "kangbao",
						"pid": "150"
					},
					{
						"area_id": "076550",
						"title": "沽源县",
						"pinyin": "guyuan",
						"pid": "150"
					},
					{
						"area_id": "076750",
						"title": "尚义县",
						"pinyin": "shangyi",
						"pid": "150"
					},
					{
						"area_id": "075700",
						"title": "蔚县",
						"pinyin": "yuxian",
						"pid": "150"
					},
					{
						"area_id": "075800",
						"title": "阳原县",
						"pinyin": "yangyuan",
						"pid": "150"
					},
					{
						"area_id": "076150",
						"title": "怀安县",
						"pinyin": "huai'an",
						"pid": "150"
					},
					{
						"area_id": "076250",
						"title": "万全县",
						"pinyin": "wanquan",
						"pid": "150"
					},
					{
						"area_id": "075400",
						"title": "怀来县",
						"pinyin": "huailai",
						"pid": "150"
					},
					{
						"area_id": "075600",
						"title": "涿鹿县",
						"pinyin": "zhuolu",
						"pid": "150"
					},
					{
						"area_id": "075500",
						"title": "赤城县",
						"pinyin": "chicheng",
						"pid": "150"
					},
					{
						"area_id": "076350",
						"title": "崇礼县",
						"pinyin": "chongli",
						"pid": "150"
					}
				]
			},
			{
				"area_id": "067000",
				"title": "承德市",
				"pinyin": "chengde",
				"pid": "37",
				"child": [
					{
						"area_id": "067000",
						"title": "双桥区",
						"pinyin": "shuangqiao",
						"pid": "168"
					},
					{
						"area_id": "067001",
						"title": "双滦区",
						"pinyin": "shuangluan",
						"pid": "168"
					},
					{
						"area_id": "067200",
						"title": "鹰手营子矿区",
						"pinyin": "yingshouyingzikuangqu",
						"pid": "168"
					},
					{
						"area_id": "067400",
						"title": "承德县",
						"pinyin": "chengde",
						"pid": "168"
					},
					{
						"area_id": "067300",
						"title": "兴隆县",
						"pinyin": "xinglong",
						"pid": "168"
					},
					{
						"area_id": "067500",
						"title": "平泉县",
						"pinyin": "pingquan",
						"pid": "168"
					},
					{
						"area_id": "068250",
						"title": "滦平县",
						"pinyin": "luanping",
						"pid": "168"
					},
					{
						"area_id": "068150",
						"title": "隆化县",
						"pinyin": "longhua",
						"pid": "168"
					},
					{
						"area_id": "068350",
						"title": "丰宁满族自治县",
						"pinyin": "fengning",
						"pid": "168"
					},
					{
						"area_id": "067600",
						"title": "宽城满族自治县",
						"pinyin": "kuancheng",
						"pid": "168"
					},
					{
						"area_id": "068450",
						"title": "围场满族蒙古族自治县",
						"pinyin": "weichang",
						"pid": "168"
					}
				]
			},
			{
				"area_id": "061001",
				"title": "沧州市",
				"pinyin": "cangzhou",
				"pid": "37",
				"child": [
					{
						"area_id": "061000",
						"title": "新华区",
						"pinyin": "xinhua",
						"pid": "180"
					},
					{
						"area_id": "061001",
						"title": "运河区",
						"pinyin": "yunhe",
						"pid": "180"
					},
					{
						"area_id": "061000",
						"title": "沧县",
						"pinyin": "cangxian",
						"pid": "180"
					},
					{
						"area_id": "062650",
						"title": "青县",
						"pinyin": "qingxian",
						"pid": "180"
					},
					{
						"area_id": "061600",
						"title": "东光县",
						"pinyin": "dongguang",
						"pid": "180"
					},
					{
						"area_id": "061200",
						"title": "海兴县",
						"pinyin": "haixing",
						"pid": "180"
					},
					{
						"area_id": "061300",
						"title": "盐山县",
						"pinyin": "yanshan",
						"pid": "180"
					},
					{
						"area_id": "062350",
						"title": "肃宁县",
						"pinyin": "suning",
						"pid": "180"
					},
					{
						"area_id": "061500",
						"title": "南皮县",
						"pinyin": "nanpi",
						"pid": "180"
					},
					{
						"area_id": "061800",
						"title": "吴桥县",
						"pinyin": "wuqiao",
						"pid": "180"
					},
					{
						"area_id": "062250",
						"title": "献县",
						"pinyin": "xianxian",
						"pid": "180"
					},
					{
						"area_id": "061400",
						"title": "孟村回族自治县",
						"pinyin": "mengcun",
						"pid": "180"
					},
					{
						"area_id": "062150",
						"title": "泊头市",
						"pinyin": "botou",
						"pid": "180"
					},
					{
						"area_id": "062550",
						"title": "任丘市",
						"pinyin": "renqiu",
						"pid": "180"
					},
					{
						"area_id": "061100",
						"title": "黄骅市",
						"pinyin": "huanghua",
						"pid": "180"
					},
					{
						"area_id": "062450",
						"title": "河间市",
						"pinyin": "hejian",
						"pid": "180"
					}
				]
			},
			{
				"area_id": "065000",
				"title": "廊坊市",
				"pinyin": "langfang",
				"pid": "37",
				"child": [
					{
						"area_id": "065000",
						"title": "安次区",
						"pinyin": "anci",
						"pid": "197"
					},
					{
						"area_id": "065000",
						"title": "广阳区",
						"pinyin": "guangyang",
						"pid": "197"
					},
					{
						"area_id": "065500",
						"title": "固安县",
						"pinyin": "gu'an",
						"pid": "197"
					},
					{
						"area_id": "065600",
						"title": "永清县",
						"pinyin": "yongqing",
						"pid": "197"
					},
					{
						"area_id": "065400",
						"title": "香河县",
						"pinyin": "xianghe",
						"pid": "197"
					},
					{
						"area_id": "065900",
						"title": "大城县",
						"pinyin": "daicheng",
						"pid": "197"
					},
					{
						"area_id": "065800",
						"title": "文安县",
						"pinyin": "wen'an",
						"pid": "197"
					},
					{
						"area_id": "065300",
						"title": "大厂回族自治县",
						"pinyin": "dachang",
						"pid": "197"
					},
					{
						"area_id": "065700",
						"title": "霸州市",
						"pinyin": "bazhou",
						"pid": "197"
					},
					{
						"area_id": "065200",
						"title": "三河市",
						"pinyin": "sanhe",
						"pid": "197"
					}
				]
			},
			{
				"area_id": "053000",
				"title": "衡水市",
				"pinyin": "hengshui",
				"pid": "37",
				"child": [
					{
						"area_id": "053000",
						"title": "桃城区",
						"pinyin": "taocheng",
						"pid": "208"
					},
					{
						"area_id": "053100",
						"title": "枣强县",
						"pinyin": "zaoqiang",
						"pid": "208"
					},
					{
						"area_id": "053400",
						"title": "武邑县",
						"pinyin": "wuyi",
						"pid": "208"
					},
					{
						"area_id": "053300",
						"title": "武强县",
						"pinyin": "wuqiang",
						"pid": "208"
					},
					{
						"area_id": "053900",
						"title": "饶阳县",
						"pinyin": "raoyang",
						"pid": "208"
					},
					{
						"area_id": "053600",
						"title": "安平县",
						"pinyin": "anping",
						"pid": "208"
					},
					{
						"area_id": "053800",
						"title": "故城县",
						"pinyin": "gucheng",
						"pid": "208"
					},
					{
						"area_id": "053500",
						"title": "景县",
						"pinyin": "jingxian",
						"pid": "208"
					},
					{
						"area_id": "053700",
						"title": "阜城县",
						"pinyin": "fucheng",
						"pid": "208"
					},
					{
						"area_id": "053200",
						"title": "冀州市",
						"pinyin": "jizhou",
						"pid": "208"
					},
					{
						"area_id": "053800",
						"title": "深州市",
						"pinyin": "shenzhou",
						"pid": "208"
					}
				]
			}
		]
	},
	{
		"area_id": "030000",
		"title": "山西省",
		"pinyin": "shanxi",
		"pid": "0",
		"child": [
			{
				"area_id": "030082",
				"title": "太原市",
				"pinyin": "taiyuan",
				"pid": "220",
				"child": [
					{
						"area_id": "030032",
						"title": "小店区",
						"pinyin": "xiaodian",
						"pid": "221"
					},
					{
						"area_id": "030002",
						"title": "迎泽区",
						"pinyin": "yingze",
						"pid": "221"
					},
					{
						"area_id": "030009",
						"title": "杏花岭区",
						"pinyin": "xinghualing",
						"pid": "221"
					},
					{
						"area_id": "030023",
						"title": "尖草坪区",
						"pinyin": "jiancaoping",
						"pid": "221"
					},
					{
						"area_id": "030024",
						"title": "万柏林区",
						"pinyin": "wanbailin",
						"pid": "221"
					},
					{
						"area_id": "030025",
						"title": "晋源区",
						"pinyin": "jinyuan",
						"pid": "221"
					},
					{
						"area_id": "030400",
						"title": "清徐县",
						"pinyin": "qingxu",
						"pid": "221"
					},
					{
						"area_id": "030100",
						"title": "阳曲县",
						"pinyin": "yangqu",
						"pid": "221"
					},
					{
						"area_id": "030300",
						"title": "娄烦县",
						"pinyin": "loufan",
						"pid": "221"
					},
					{
						"area_id": "030200",
						"title": "古交市",
						"pinyin": "gujiao",
						"pid": "221"
					}
				]
			},
			{
				"area_id": "037008",
				"title": "大同市",
				"pinyin": "datong",
				"pid": "220",
				"child": [
					{
						"area_id": "037008",
						"title": "城区",
						"pinyin": "chengqu",
						"pid": "232"
					},
					{
						"area_id": "037003",
						"title": "矿区",
						"pinyin": "kuangqu",
						"pid": "232"
					},
					{
						"area_id": "037001",
						"title": "南郊区",
						"pinyin": "nanjiao",
						"pid": "232"
					},
					{
						"area_id": "037002",
						"title": "新荣区",
						"pinyin": "xinrong",
						"pid": "232"
					},
					{
						"area_id": "038100",
						"title": "阳高县",
						"pinyin": "yanggao",
						"pid": "232"
					},
					{
						"area_id": "038200",
						"title": "天镇县",
						"pinyin": "tianzhen",
						"pid": "232"
					},
					{
						"area_id": "037500",
						"title": "广灵县",
						"pinyin": "guangling",
						"pid": "232"
					},
					{
						"area_id": "034400",
						"title": "灵丘县",
						"pinyin": "lingqiu",
						"pid": "232"
					},
					{
						"area_id": "037400",
						"title": "浑源县",
						"pinyin": "hunyuan",
						"pid": "232"
					},
					{
						"area_id": "037100",
						"title": "左云县",
						"pinyin": "zuoyun",
						"pid": "232"
					},
					{
						"area_id": "037300",
						"title": "大同县",
						"pinyin": "datong",
						"pid": "232"
					}
				]
			},
			{
				"area_id": "045000",
				"title": "阳泉市",
				"pinyin": "yangquan",
				"pid": "220",
				"child": [
					{
						"area_id": "045000",
						"title": "城区",
						"pinyin": "chengqu",
						"pid": "244"
					},
					{
						"area_id": "045000",
						"title": "矿区",
						"pinyin": "kuangqu",
						"pid": "244"
					},
					{
						"area_id": "045011",
						"title": "郊区",
						"pinyin": "jiaoqu",
						"pid": "244"
					},
					{
						"area_id": "045200",
						"title": "平定县",
						"pinyin": "pingding",
						"pid": "244"
					},
					{
						"area_id": "045100",
						"title": "盂县",
						"pinyin": "yuxian",
						"pid": "244"
					}
				]
			},
			{
				"area_id": "046000",
				"title": "长治市",
				"pinyin": "changzhi",
				"pid": "220",
				"child": [
					{
						"area_id": "046011",
						"title": "城区",
						"pinyin": "chengqu",
						"pid": "250"
					},
					{
						"area_id": "046011",
						"title": "郊区",
						"pinyin": "jiaoqu",
						"pid": "250"
					},
					{
						"area_id": "047100",
						"title": "长治县",
						"pinyin": "changzhi",
						"pid": "250"
					},
					{
						"area_id": "046200",
						"title": "襄垣县",
						"pinyin": "xiangyuan",
						"pid": "250"
					},
					{
						"area_id": "046100",
						"title": "屯留县",
						"pinyin": "tunliu",
						"pid": "250"
					},
					{
						"area_id": "047400",
						"title": "平顺县",
						"pinyin": "pingshun",
						"pid": "250"
					},
					{
						"area_id": "047600",
						"title": "黎城县",
						"pinyin": "licheng",
						"pid": "250"
					},
					{
						"area_id": "047300",
						"title": "壶关县",
						"pinyin": "huguan",
						"pid": "250"
					},
					{
						"area_id": "046600",
						"title": "长子县",
						"pinyin": "zhangzi",
						"pid": "250"
					},
					{
						"area_id": "046300",
						"title": "武乡县",
						"pinyin": "wuxiang",
						"pid": "250"
					},
					{
						"area_id": "046400",
						"title": "沁县",
						"pinyin": "qinxian",
						"pid": "250"
					},
					{
						"area_id": "046500",
						"title": "沁源县",
						"pinyin": "qinyuan",
						"pid": "250"
					},
					{
						"area_id": "047500",
						"title": "潞城市",
						"pinyin": "lucheng",
						"pid": "250"
					}
				]
			},
			{
				"area_id": "048000",
				"title": "晋城市",
				"pinyin": "jincheng",
				"pid": "220",
				"child": [
					{
						"area_id": "048000",
						"title": "城区",
						"pinyin": "chengqu",
						"pid": "264"
					},
					{
						"area_id": "048200",
						"title": "沁水县",
						"pinyin": "qinshui",
						"pid": "264"
					},
					{
						"area_id": "048100",
						"title": "阳城县",
						"pinyin": "yangcheng",
						"pid": "264"
					},
					{
						"area_id": "048300",
						"title": "陵川县",
						"pinyin": "lingchuan",
						"pid": "264"
					},
					{
						"area_id": "048012",
						"title": "泽州县",
						"pinyin": "zezhou",
						"pid": "264"
					},
					{
						"area_id": "048400",
						"title": "高平市",
						"pinyin": "gaoping",
						"pid": "264"
					}
				]
			},
			{
				"area_id": "038500",
				"title": "朔州市",
				"pinyin": "shuozhou",
				"pid": "220",
				"child": [
					{
						"area_id": "036000",
						"title": "朔城区",
						"pinyin": "shuocheng",
						"pid": "271"
					},
					{
						"area_id": "038600",
						"title": "平鲁区",
						"pinyin": "pinglu",
						"pid": "271"
					},
					{
						"area_id": "036900",
						"title": "山阴县",
						"pinyin": "shanyin",
						"pid": "271"
					},
					{
						"area_id": "037600",
						"title": "应县",
						"pinyin": "yingxian",
						"pid": "271"
					},
					{
						"area_id": "037200",
						"title": "右玉县",
						"pinyin": "youyu",
						"pid": "271"
					},
					{
						"area_id": "038300",
						"title": "怀仁县",
						"pinyin": "huairen",
						"pid": "271"
					}
				]
			},
			{
				"area_id": "030600",
				"title": "晋中市",
				"pinyin": "jinzhong",
				"pid": "220",
				"child": [
					{
						"area_id": "030600",
						"title": "榆次区",
						"pinyin": "yuci",
						"pid": "278"
					},
					{
						"area_id": "031800",
						"title": "榆社县",
						"pinyin": "yushe",
						"pid": "278"
					},
					{
						"area_id": "032600",
						"title": "左权县",
						"pinyin": "zuoquan",
						"pid": "278"
					},
					{
						"area_id": "032700",
						"title": "和顺县",
						"pinyin": "heshun",
						"pid": "278"
					},
					{
						"area_id": "045300",
						"title": "昔阳县",
						"pinyin": "xiyang",
						"pid": "278"
					},
					{
						"area_id": "045400",
						"title": "寿阳县",
						"pinyin": "shouyang",
						"pid": "278"
					},
					{
						"area_id": "030800",
						"title": "太谷县",
						"pinyin": "taigu",
						"pid": "278"
					},
					{
						"area_id": "030900",
						"title": "祁县",
						"pinyin": "qixian",
						"pid": "278"
					},
					{
						"area_id": "031100",
						"title": "平遥县",
						"pinyin": "pingyao",
						"pid": "278"
					},
					{
						"area_id": "031300",
						"title": "灵石县",
						"pinyin": "lingshi",
						"pid": "278"
					},
					{
						"area_id": "032000",
						"title": "介休市",
						"pinyin": "jiexiu",
						"pid": "278"
					}
				]
			},
			{
				"area_id": "044000",
				"title": "运城市",
				"pinyin": "yuncheng",
				"pid": "220",
				"child": [
					{
						"area_id": "044000",
						"title": "盐湖区",
						"pinyin": "yanhu",
						"pid": "290"
					},
					{
						"area_id": "044100",
						"title": "临猗县",
						"pinyin": "linyi",
						"pid": "290"
					},
					{
						"area_id": "044200",
						"title": "万荣县",
						"pinyin": "wanrong",
						"pid": "290"
					},
					{
						"area_id": "043800",
						"title": "闻喜县",
						"pinyin": "wenxi",
						"pid": "290"
					},
					{
						"area_id": "043200",
						"title": "稷山县",
						"pinyin": "jishan",
						"pid": "290"
					},
					{
						"area_id": "043100",
						"title": "新绛县",
						"pinyin": "xinjiang",
						"pid": "290"
					},
					{
						"area_id": "043600",
						"title": "绛县",
						"pinyin": "jiangxian",
						"pid": "290"
					},
					{
						"area_id": "043700",
						"title": "垣曲县",
						"pinyin": "yuanqu",
						"pid": "290"
					},
					{
						"area_id": "044400",
						"title": "夏县",
						"pinyin": "xiaxian",
						"pid": "290"
					},
					{
						"area_id": "044300",
						"title": "平陆县",
						"pinyin": "pinglu",
						"pid": "290"
					},
					{
						"area_id": "044600",
						"title": "芮城县",
						"pinyin": "ruicheng",
						"pid": "290"
					},
					{
						"area_id": "044500",
						"title": "永济市",
						"pinyin": "yongji",
						"pid": "290"
					},
					{
						"area_id": "043300",
						"title": "河津市",
						"pinyin": "hejin",
						"pid": "290"
					}
				]
			},
			{
				"area_id": "034000",
				"title": "忻州市",
				"pinyin": "xinzhou",
				"pid": "220",
				"child": [
					{
						"area_id": "034000",
						"title": "忻府区",
						"pinyin": "xinfu",
						"pid": "304"
					},
					{
						"area_id": "035400",
						"title": "定襄县",
						"pinyin": "dingxiang",
						"pid": "304"
					},
					{
						"area_id": "035500",
						"title": "五台县",
						"pinyin": "wutai",
						"pid": "304"
					},
					{
						"area_id": "034200",
						"title": "代县",
						"pinyin": "daixian",
						"pid": "304"
					},
					{
						"area_id": "034300",
						"title": "繁峙县",
						"pinyin": "fanshi",
						"pid": "304"
					},
					{
						"area_id": "036700",
						"title": "宁武县",
						"pinyin": "ningwu",
						"pid": "304"
					},
					{
						"area_id": "035100",
						"title": "静乐县",
						"pinyin": "jingle",
						"pid": "304"
					},
					{
						"area_id": "036100",
						"title": "神池县",
						"pinyin": "shenchi",
						"pid": "304"
					},
					{
						"area_id": "036200",
						"title": "五寨县",
						"pinyin": "wuzhai",
						"pid": "304"
					},
					{
						"area_id": "036300",
						"title": "岢岚县",
						"pinyin": "kelan",
						"pid": "304"
					},
					{
						"area_id": "036500",
						"title": "河曲县",
						"pinyin": "hequ",
						"pid": "304"
					},
					{
						"area_id": "036600",
						"title": "保德县",
						"pinyin": "baode",
						"pid": "304"
					},
					{
						"area_id": "036400",
						"title": "偏关县",
						"pinyin": "pianguan",
						"pid": "304"
					},
					{
						"area_id": "034100",
						"title": "原平市",
						"pinyin": "yuanping",
						"pid": "304"
					}
				]
			},
			{
				"area_id": "041000",
				"title": "临汾市",
				"pinyin": "linfen",
				"pid": "220",
				"child": [
					{
						"area_id": "041000",
						"title": "尧都区",
						"pinyin": "yaodu",
						"pid": "319"
					},
					{
						"area_id": "043400",
						"title": "曲沃县",
						"pinyin": "quwo",
						"pid": "319"
					},
					{
						"area_id": "043500",
						"title": "翼城县",
						"pinyin": "yicheng",
						"pid": "319"
					},
					{
						"area_id": "041500",
						"title": "襄汾县",
						"pinyin": "xiangfen",
						"pid": "319"
					},
					{
						"area_id": "041600",
						"title": "洪洞县",
						"pinyin": "hongtong",
						"pid": "319"
					},
					{
						"area_id": "042400",
						"title": "古县",
						"pinyin": "guxian",
						"pid": "319"
					},
					{
						"area_id": "042500",
						"title": "安泽县",
						"pinyin": "anze",
						"pid": "319"
					},
					{
						"area_id": "042600",
						"title": "浮山县",
						"pinyin": "fushan",
						"pid": "319"
					},
					{
						"area_id": "042200",
						"title": "吉县",
						"pinyin": "jixian",
						"pid": "319"
					},
					{
						"area_id": "042100",
						"title": "乡宁县",
						"pinyin": "xiangning",
						"pid": "319"
					},
					{
						"area_id": "042300",
						"title": "大宁县",
						"pinyin": "daning",
						"pid": "319"
					},
					{
						"area_id": "041300",
						"title": "隰县",
						"pinyin": "xixian",
						"pid": "319"
					},
					{
						"area_id": "041400",
						"title": "永和县",
						"pinyin": "yonghe",
						"pid": "319"
					},
					{
						"area_id": "041200",
						"title": "蒲县",
						"pinyin": "puxian",
						"pid": "319"
					},
					{
						"area_id": "031500",
						"title": "汾西县",
						"pinyin": "fenxi",
						"pid": "319"
					},
					{
						"area_id": "043000",
						"title": "侯马市",
						"pinyin": "houma",
						"pid": "319"
					},
					{
						"area_id": "031400",
						"title": "霍州市",
						"pinyin": "huozhou",
						"pid": "319"
					}
				]
			},
			{
				"area_id": "033000",
				"title": "吕梁市",
				"pinyin": "lvliang",
				"pid": "220",
				"child": [
					{
						"area_id": "033000",
						"title": "离石区",
						"pinyin": "lishi",
						"pid": "337"
					},
					{
						"area_id": "032100",
						"title": "文水县",
						"pinyin": "wenshui",
						"pid": "337"
					},
					{
						"area_id": "030500",
						"title": "交城县",
						"pinyin": "jiaocheng",
						"pid": "337"
					},
					{
						"area_id": "033600",
						"title": "兴县",
						"pinyin": "xingxian",
						"pid": "337"
					},
					{
						"area_id": "033200",
						"title": "临县",
						"pinyin": "linxian",
						"pid": "337"
					},
					{
						"area_id": "033300",
						"title": "柳林县",
						"pinyin": "liulin",
						"pid": "337"
					},
					{
						"area_id": "032500",
						"title": "石楼县",
						"pinyin": "shilou",
						"pid": "337"
					},
					{
						"area_id": "033500",
						"title": "岚县",
						"pinyin": "lanxian",
						"pid": "337"
					},
					{
						"area_id": "033100",
						"title": "方山县",
						"pinyin": "fangshan",
						"pid": "337"
					},
					{
						"area_id": "033400",
						"title": "中阳县",
						"pinyin": "zhongyang",
						"pid": "337"
					},
					{
						"area_id": "032400",
						"title": "交口县",
						"pinyin": "jiaokou",
						"pid": "337"
					},
					{
						"area_id": "032300",
						"title": "孝义市",
						"pinyin": "xiaoyi",
						"pid": "337"
					},
					{
						"area_id": "032200",
						"title": "汾阳市",
						"pinyin": "fenyang",
						"pid": "337"
					}
				]
			}
		]
	},
	{
		"area_id": "010000",
		"title": "内蒙古自治区",
		"pinyin": "innermongolia",
		"pid": "0",
		"child": [
			{
				"area_id": "010000",
				"title": "呼和浩特市",
				"pinyin": "hohhot",
				"pid": "351",
				"child": [
					{
						"area_id": "010050",
						"title": "新城区",
						"pinyin": "xincheng",
						"pid": "352"
					},
					{
						"area_id": "010030",
						"title": "回民区",
						"pinyin": "huimin",
						"pid": "352"
					},
					{
						"area_id": "010020",
						"title": "玉泉区",
						"pinyin": "yuquan",
						"pid": "352"
					},
					{
						"area_id": "010020",
						"title": "赛罕区",
						"pinyin": "saihan",
						"pid": "352"
					},
					{
						"area_id": "010100",
						"title": "土默特左旗",
						"pinyin": "tumotezuoqi",
						"pid": "352"
					},
					{
						"area_id": "010200",
						"title": "托克托县",
						"pinyin": "tuoketuo",
						"pid": "352"
					},
					{
						"area_id": "011500",
						"title": "和林格尔县",
						"pinyin": "helingeer",
						"pid": "352"
					},
					{
						"area_id": "011600",
						"title": "清水河县",
						"pinyin": "qingshuihe",
						"pid": "352"
					},
					{
						"area_id": "011700",
						"title": "武川县",
						"pinyin": "wuchuan",
						"pid": "352"
					}
				]
			},
			{
				"area_id": "014025",
				"title": "包头市",
				"pinyin": "baotou",
				"pid": "351",
				"child": [
					{
						"area_id": "014040",
						"title": "东河区",
						"pinyin": "donghe",
						"pid": "362"
					},
					{
						"area_id": "014010",
						"title": "昆都仑区",
						"pinyin": "kundulun",
						"pid": "362"
					},
					{
						"area_id": "014030",
						"title": "青山区",
						"pinyin": "qingshan",
						"pid": "362"
					},
					{
						"area_id": "014070",
						"title": "石拐区",
						"pinyin": "shiguai",
						"pid": "362"
					},
					{
						"area_id": "014080",
						"title": "白云鄂博矿区",
						"pinyin": "baiyunebokuangqu",
						"pid": "362"
					},
					{
						"area_id": "014060",
						"title": "九原区",
						"pinyin": "jiuyuan",
						"pid": "362"
					},
					{
						"area_id": "014100",
						"title": "土默特右旗",
						"pinyin": "tumoteyouqi",
						"pid": "362"
					},
					{
						"area_id": "014200",
						"title": "固阳县",
						"pinyin": "guyang",
						"pid": "362"
					},
					{
						"area_id": "014500",
						"title": "达尔罕茂明安联合旗",
						"pinyin": "damaoqi",
						"pid": "362"
					}
				]
			},
			{
				"area_id": "016000",
				"title": "乌海市",
				"pinyin": "wuhai",
				"pid": "351",
				"child": [
					{
						"area_id": "016000",
						"title": "海勃湾区",
						"pinyin": "haibowan",
						"pid": "372"
					},
					{
						"area_id": "016030",
						"title": "海南区",
						"pinyin": "hainan",
						"pid": "372"
					},
					{
						"area_id": "016040",
						"title": "乌达区",
						"pinyin": "wuda",
						"pid": "372"
					}
				]
			},
			{
				"area_id": "024000",
				"title": "赤峰市",
				"pinyin": "chifeng",
				"pid": "351",
				"child": [
					{
						"area_id": "024020",
						"title": "红山区",
						"pinyin": "hongshan",
						"pid": "376"
					},
					{
						"area_id": "024076",
						"title": "元宝山区",
						"pinyin": "yuanbaoshan",
						"pid": "376"
					},
					{
						"area_id": "024005",
						"title": "松山区",
						"pinyin": "songshan",
						"pid": "376"
					},
					{
						"area_id": "025550",
						"title": "阿鲁科尔沁旗",
						"pinyin": "alukeerqinqi",
						"pid": "376"
					},
					{
						"area_id": "025450",
						"title": "巴林左旗",
						"pinyin": "balinzuoqi",
						"pid": "376"
					},
					{
						"area_id": "025150",
						"title": "巴林右旗",
						"pinyin": "balinyouqi",
						"pid": "376"
					},
					{
						"area_id": "025250",
						"title": "林西县",
						"pinyin": "linxi",
						"pid": "376"
					},
					{
						"area_id": "025350",
						"title": "克什克腾旗",
						"pinyin": "keshiketengqi",
						"pid": "376"
					},
					{
						"area_id": "024500",
						"title": "翁牛特旗",
						"pinyin": "wengniuteqi",
						"pid": "376"
					},
					{
						"area_id": "024400",
						"title": "喀喇沁旗",
						"pinyin": "kalaqinqi",
						"pid": "376"
					},
					{
						"area_id": "024200",
						"title": "宁城县",
						"pinyin": "ningcheng",
						"pid": "376"
					},
					{
						"area_id": "024300",
						"title": "敖汉旗",
						"pinyin": "aohanqi",
						"pid": "376"
					}
				]
			},
			{
				"area_id": "028000",
				"title": "通辽市",
				"pinyin": "tongliao",
				"pid": "351",
				"child": [
					{
						"area_id": "028000",
						"title": "科尔沁区",
						"pinyin": "keerqin",
						"pid": "389"
					},
					{
						"area_id": "029300",
						"title": "科尔沁左翼中旗",
						"pinyin": "keerqinzuoyizhongqi",
						"pid": "389"
					},
					{
						"area_id": "028100",
						"title": "科尔沁左翼后旗",
						"pinyin": "keerqinzuoyihouqi",
						"pid": "389"
					},
					{
						"area_id": "028400",
						"title": "开鲁县",
						"pinyin": "kailu",
						"pid": "389"
					},
					{
						"area_id": "028200",
						"title": "库伦旗",
						"pinyin": "kulunqi",
						"pid": "389"
					},
					{
						"area_id": "028300",
						"title": "奈曼旗",
						"pinyin": "naimanqi",
						"pid": "389"
					},
					{
						"area_id": "029100",
						"title": "扎鲁特旗",
						"pinyin": "zhaluteqi",
						"pid": "389"
					},
					{
						"area_id": "029200",
						"title": "霍林郭勒市",
						"pinyin": "huolinguole",
						"pid": "389"
					}
				]
			},
			{
				"area_id": "017004",
				"title": "鄂尔多斯市",
				"pinyin": "ordos",
				"pid": "351",
				"child": [
					{
						"area_id": "017000",
						"title": "东胜区",
						"pinyin": "dongsheng",
						"pid": "398"
					},
					{
						"area_id": "014300",
						"title": "达拉特旗",
						"pinyin": "dalateqi",
						"pid": "398"
					},
					{
						"area_id": "017100",
						"title": "准格尔旗",
						"pinyin": "zhungeerqi",
						"pid": "398"
					},
					{
						"area_id": "016200",
						"title": "鄂托克前旗",
						"pinyin": "etuokeqianqi",
						"pid": "398"
					},
					{
						"area_id": "016100",
						"title": "鄂托克旗",
						"pinyin": "etuokeqi",
						"pid": "398"
					},
					{
						"area_id": "017400",
						"title": "杭锦旗",
						"pinyin": "hangjinqi",
						"pid": "398"
					},
					{
						"area_id": "017300",
						"title": "乌审旗",
						"pinyin": "wushenqi",
						"pid": "398"
					},
					{
						"area_id": "017200",
						"title": "伊金霍洛旗",
						"pinyin": "yijinhuoluoqi",
						"pid": "398"
					}
				]
			},
			{
				"area_id": "021008",
				"title": "呼伦贝尔市",
				"pinyin": "hulunber",
				"pid": "351",
				"child": [
					{
						"area_id": "021000",
						"title": "海拉尔区",
						"pinyin": "hailaer",
						"pid": "407"
					},
					{
						"area_id": "021410",
						"title": "扎赉诺尔区",
						"pinyin": "zhalainuoer",
						"pid": "407"
					},
					{
						"area_id": "162750",
						"title": "阿荣旗",
						"pinyin": "arongqi",
						"pid": "407"
					},
					{
						"area_id": "162850",
						"title": "莫力达瓦达斡尔族自治旗",
						"pinyin": "moqi",
						"pid": "407"
					},
					{
						"area_id": "165450",
						"title": "鄂伦春自治旗",
						"pinyin": "elunchun",
						"pid": "407"
					},
					{
						"area_id": "021100",
						"title": "鄂温克族自治旗",
						"pinyin": "ewen",
						"pid": "407"
					},
					{
						"area_id": "021500",
						"title": "陈巴尔虎旗",
						"pinyin": "chenbaerhuqi",
						"pid": "407"
					},
					{
						"area_id": "021200",
						"title": "新巴尔虎左旗",
						"pinyin": "xinbaerhuzuoqi",
						"pid": "407"
					},
					{
						"area_id": "021300",
						"title": "新巴尔虎右旗",
						"pinyin": "xinbaerhuyouqi",
						"pid": "407"
					},
					{
						"area_id": "021400",
						"title": "满洲里市",
						"pinyin": "manzhouli",
						"pid": "407"
					},
					{
						"area_id": "022150",
						"title": "牙克石市",
						"pinyin": "yakeshi",
						"pid": "407"
					},
					{
						"area_id": "162650",
						"title": "扎兰屯市",
						"pinyin": "zhalantun",
						"pid": "407"
					},
					{
						"area_id": "022250",
						"title": "额尔古纳市",
						"pinyin": "eerguna",
						"pid": "407"
					},
					{
						"area_id": "022350",
						"title": "根河市",
						"pinyin": "genhe",
						"pid": "407"
					}
				]
			},
			{
				"area_id": "015001",
				"title": "巴彦淖尔市",
				"pinyin": "bayannur",
				"pid": "351",
				"child": [
					{
						"area_id": "015001",
						"title": "临河区",
						"pinyin": "linhe",
						"pid": "422"
					},
					{
						"area_id": "015100",
						"title": "五原县",
						"pinyin": "wuyuan",
						"pid": "422"
					},
					{
						"area_id": "015200",
						"title": "磴口县",
						"pinyin": "dengkou",
						"pid": "422"
					},
					{
						"area_id": "014400",
						"title": "乌拉特前旗",
						"pinyin": "wulateqianqi",
						"pid": "422"
					},
					{
						"area_id": "015300",
						"title": "乌拉特中旗",
						"pinyin": "wulatezhongqi",
						"pid": "422"
					},
					{
						"area_id": "015500",
						"title": "乌拉特后旗",
						"pinyin": "wulatehouqi",
						"pid": "422"
					},
					{
						"area_id": "015400",
						"title": "杭锦后旗",
						"pinyin": "hangjinhouqi",
						"pid": "422"
					}
				]
			},
			{
				"area_id": "012000",
				"title": "乌兰察布市",
				"pinyin": "ulanqab",
				"pid": "351",
				"child": [
					{
						"area_id": "012000",
						"title": "集宁区",
						"pinyin": "jining",
						"pid": "430"
					},
					{
						"area_id": "012300",
						"title": "卓资县",
						"pinyin": "zhuozi",
						"pid": "430"
					},
					{
						"area_id": "013350",
						"title": "化德县",
						"pinyin": "huade",
						"pid": "430"
					},
					{
						"area_id": "013450",
						"title": "商都县",
						"pinyin": "shangdu",
						"pid": "430"
					},
					{
						"area_id": "013650",
						"title": "兴和县",
						"pinyin": "xinghe",
						"pid": "430"
					},
					{
						"area_id": "013750",
						"title": "凉城县",
						"pinyin": "liangcheng",
						"pid": "430"
					},
					{
						"area_id": "012200",
						"title": "察哈尔右翼前旗",
						"pinyin": "chayouqianqi",
						"pid": "430"
					},
					{
						"area_id": "013550",
						"title": "察哈尔右翼中旗",
						"pinyin": "chayouzhongqi",
						"pid": "430"
					},
					{
						"area_id": "012400",
						"title": "察哈尔右翼后旗",
						"pinyin": "chayouhouqi",
						"pid": "430"
					},
					{
						"area_id": "011800",
						"title": "四子王旗",
						"pinyin": "siziwangqi",
						"pid": "430"
					},
					{
						"area_id": "012100",
						"title": "丰镇市",
						"pinyin": "fengzhen",
						"pid": "430"
					}
				]
			},
			{
				"area_id": "137401",
				"title": "兴安盟",
				"pinyin": "hinggan",
				"pid": "351",
				"child": [
					{
						"area_id": "137401",
						"title": "乌兰浩特市",
						"pinyin": "wulanhaote",
						"pid": "442"
					},
					{
						"area_id": "137800",
						"title": "阿尔山市",
						"pinyin": "aershan",
						"pid": "442"
					},
					{
						"area_id": "137423",
						"title": "科尔沁右翼前旗",
						"pinyin": "keyouqianqi",
						"pid": "442"
					},
					{
						"area_id": "029400",
						"title": "科尔沁右翼中旗",
						"pinyin": "keyouzhongqi",
						"pid": "442"
					},
					{
						"area_id": "137600",
						"title": "扎赉特旗",
						"pinyin": "zhalaiteqi",
						"pid": "442"
					},
					{
						"area_id": "137500",
						"title": "突泉县",
						"pinyin": "tuquan",
						"pid": "442"
					}
				]
			},
			{
				"area_id": "026000",
				"title": "锡林郭勒盟",
				"pinyin": "xilingol",
				"pid": "351",
				"child": [
					{
						"area_id": "011100",
						"title": "二连浩特市",
						"pinyin": "erlianhaote",
						"pid": "449"
					},
					{
						"area_id": "026021",
						"title": "锡林浩特市",
						"pinyin": "xilinhaote",
						"pid": "449"
					},
					{
						"area_id": "011400",
						"title": "阿巴嘎旗",
						"pinyin": "abagaqi",
						"pid": "449"
					},
					{
						"area_id": "011300",
						"title": "苏尼特左旗",
						"pinyin": "sunitezuoqi",
						"pid": "449"
					},
					{
						"area_id": "011200",
						"title": "苏尼特右旗",
						"pinyin": "suniteyouqi",
						"pid": "449"
					},
					{
						"area_id": "026300",
						"title": "东乌珠穆沁旗",
						"pinyin": "dongwuqi",
						"pid": "449"
					},
					{
						"area_id": "026200",
						"title": "西乌珠穆沁旗",
						"pinyin": "xiwuqi",
						"pid": "449"
					},
					{
						"area_id": "027000",
						"title": "太仆寺旗",
						"pinyin": "taipusiqi",
						"pid": "449"
					},
					{
						"area_id": "013250",
						"title": "镶黄旗",
						"pinyin": "xianghuangqi",
						"pid": "449"
					},
					{
						"area_id": "013800",
						"title": "正镶白旗",
						"pinyin": "zhengxiangbaiqi",
						"pid": "449"
					},
					{
						"area_id": "027200",
						"title": "正蓝旗",
						"pinyin": "zhenglanqi",
						"pid": "449"
					},
					{
						"area_id": "027300",
						"title": "多伦县",
						"pinyin": "duolun",
						"pid": "449"
					}
				]
			},
			{
				"area_id": "750306",
				"title": "阿拉善盟",
				"pinyin": "alxa",
				"pid": "351",
				"child": [
					{
						"area_id": "750306",
						"title": "阿拉善左旗",
						"pinyin": "alashanzuoqi",
						"pid": "462"
					},
					{
						"area_id": "737300",
						"title": "阿拉善右旗",
						"pinyin": "alashanyouqi",
						"pid": "462"
					},
					{
						"area_id": "735400",
						"title": "额济纳旗",
						"pinyin": "ejinaqi",
						"pid": "462"
					}
				]
			}
		]
	},
	{
		"area_id": "110000",
		"title": "辽宁省",
		"pinyin": "liaoning",
		"pid": "0",
		"child": [
			{
				"area_id": "110013",
				"title": "沈阳市",
				"pinyin": "shenyang",
				"pid": "466",
				"child": [
					{
						"area_id": "110001",
						"title": "和平区",
						"pinyin": "heping",
						"pid": "467"
					},
					{
						"area_id": "110011",
						"title": "沈河区",
						"pinyin": "shenhe",
						"pid": "467"
					},
					{
						"area_id": "110041",
						"title": "大东区",
						"pinyin": "dadong",
						"pid": "467"
					},
					{
						"area_id": "110031",
						"title": "皇姑区",
						"pinyin": "huanggu",
						"pid": "467"
					},
					{
						"area_id": "110021",
						"title": "铁西区",
						"pinyin": "tiexi",
						"pid": "467"
					},
					{
						"area_id": "110101",
						"title": "苏家屯区",
						"pinyin": "sujiatun",
						"pid": "467"
					},
					{
						"area_id": "110015",
						"title": "浑南区",
						"pinyin": "hunnan",
						"pid": "467"
					},
					{
						"area_id": "110121",
						"title": "沈北新区",
						"pinyin": "shenbeixinqu",
						"pid": "467"
					},
					{
						"area_id": "110141",
						"title": "于洪区",
						"pinyin": "yuhong",
						"pid": "467"
					},
					{
						"area_id": "110200",
						"title": "辽中县",
						"pinyin": "liaozhong",
						"pid": "467"
					},
					{
						"area_id": "110500",
						"title": "康平县",
						"pinyin": "kangping",
						"pid": "467"
					},
					{
						"area_id": "110400",
						"title": "法库县",
						"pinyin": "faku",
						"pid": "467"
					},
					{
						"area_id": "110300",
						"title": "新民市",
						"pinyin": "xinmin",
						"pid": "467"
					}
				]
			},
			{
				"area_id": "116011",
				"title": "大连市",
				"pinyin": "dalian",
				"pid": "466",
				"child": [
					{
						"area_id": "116001",
						"title": "中山区",
						"pinyin": "zhongshan",
						"pid": "481"
					},
					{
						"area_id": "116011",
						"title": "西岗区",
						"pinyin": "xigang",
						"pid": "481"
					},
					{
						"area_id": "116021",
						"title": "沙河口区",
						"pinyin": "shahekou",
						"pid": "481"
					},
					{
						"area_id": "116033",
						"title": "甘井子区",
						"pinyin": "ganjingzi",
						"pid": "481"
					},
					{
						"area_id": "116041",
						"title": "旅顺口区",
						"pinyin": "lvshunkou",
						"pid": "481"
					},
					{
						"area_id": "116100",
						"title": "金州区",
						"pinyin": "jinzhou",
						"pid": "481"
					},
					{
						"area_id": "116500",
						"title": "长海县",
						"pinyin": "changhai",
						"pid": "481"
					},
					{
						"area_id": "116300",
						"title": "瓦房店市",
						"pinyin": "wafangdian",
						"pid": "481"
					},
					{
						"area_id": "116200",
						"title": "普兰店市",
						"pinyin": "pulandian",
						"pid": "481"
					},
					{
						"area_id": "116400",
						"title": "庄河市",
						"pinyin": "zhuanghe",
						"pid": "481"
					}
				]
			},
			{
				"area_id": "114001",
				"title": "鞍山市",
				"pinyin": "anshan",
				"pid": "466",
				"child": [
					{
						"area_id": "114001",
						"title": "铁东区",
						"pinyin": "tiedong",
						"pid": "492"
					},
					{
						"area_id": "114013",
						"title": "铁西区",
						"pinyin": "tiexi",
						"pid": "492"
					},
					{
						"area_id": "114031",
						"title": "立山区",
						"pinyin": "lishan",
						"pid": "492"
					},
					{
						"area_id": "114041",
						"title": "千山区",
						"pinyin": "qianshan",
						"pid": "492"
					},
					{
						"area_id": "114100",
						"title": "台安县",
						"pinyin": "tai'an",
						"pid": "492"
					},
					{
						"area_id": "114300",
						"title": "岫岩满族自治县",
						"pinyin": "xiuyan",
						"pid": "492"
					},
					{
						"area_id": "114200",
						"title": "海城市",
						"pinyin": "haicheng",
						"pid": "492"
					}
				]
			},
			{
				"area_id": "113008",
				"title": "抚顺市",
				"pinyin": "fushun",
				"pid": "466",
				"child": [
					{
						"area_id": "113008",
						"title": "新抚区",
						"pinyin": "xinfu",
						"pid": "500"
					},
					{
						"area_id": "113003",
						"title": "东洲区",
						"pinyin": "dongzhou",
						"pid": "500"
					},
					{
						"area_id": "113001",
						"title": "望花区",
						"pinyin": "wanghua",
						"pid": "500"
					},
					{
						"area_id": "113006",
						"title": "顺城区",
						"pinyin": "shuncheng",
						"pid": "500"
					},
					{
						"area_id": "113006",
						"title": "抚顺县",
						"pinyin": "fushun",
						"pid": "500"
					},
					{
						"area_id": "113200",
						"title": "新宾满族自治县",
						"pinyin": "xinbin",
						"pid": "500"
					},
					{
						"area_id": "113300",
						"title": "清原满族自治县",
						"pinyin": "qingyuan",
						"pid": "500"
					}
				]
			},
			{
				"area_id": "117000",
				"title": "本溪市",
				"pinyin": "benxi",
				"pid": "466",
				"child": [
					{
						"area_id": "117000",
						"title": "平山区",
						"pinyin": "pingshan",
						"pid": "508"
					},
					{
						"area_id": "117002",
						"title": "溪湖区",
						"pinyin": "xihu",
						"pid": "508"
					},
					{
						"area_id": "117021",
						"title": "明山区",
						"pinyin": "mingshan",
						"pid": "508"
					},
					{
						"area_id": "117014",
						"title": "南芬区",
						"pinyin": "nanfen",
						"pid": "508"
					},
					{
						"area_id": "117100",
						"title": "本溪满族自治县",
						"pinyin": "benxi",
						"pid": "508"
					},
					{
						"area_id": "117200",
						"title": "桓仁满族自治县",
						"pinyin": "huanren",
						"pid": "508"
					}
				]
			},
			{
				"area_id": "118000",
				"title": "丹东市",
				"pinyin": "dandong",
				"pid": "466",
				"child": [
					{
						"area_id": "118000",
						"title": "元宝区",
						"pinyin": "yuanbao",
						"pid": "515"
					},
					{
						"area_id": "118002",
						"title": "振兴区",
						"pinyin": "zhenxing",
						"pid": "515"
					},
					{
						"area_id": "118001",
						"title": "振安区",
						"pinyin": "zhen'an",
						"pid": "515"
					},
					{
						"area_id": "118200",
						"title": "宽甸满族自治县",
						"pinyin": "kuandian",
						"pid": "515"
					},
					{
						"area_id": "118300",
						"title": "东港市",
						"pinyin": "donggang",
						"pid": "515"
					},
					{
						"area_id": "118100",
						"title": "凤城市",
						"pinyin": "fengcheng",
						"pid": "515"
					}
				]
			},
			{
				"area_id": "121000",
				"title": "锦州市",
				"pinyin": "jinzhou",
				"pid": "466",
				"child": [
					{
						"area_id": "121001",
						"title": "古塔区",
						"pinyin": "guta",
						"pid": "522"
					},
					{
						"area_id": "121000",
						"title": "凌河区",
						"pinyin": "linghe",
						"pid": "522"
					},
					{
						"area_id": "121011",
						"title": "太和区",
						"pinyin": "taihe",
						"pid": "522"
					},
					{
						"area_id": "121400",
						"title": "黑山县",
						"pinyin": "heishan",
						"pid": "522"
					},
					{
						"area_id": "121100",
						"title": "义县",
						"pinyin": "yixian",
						"pid": "522"
					},
					{
						"area_id": "121200",
						"title": "凌海市",
						"pinyin": "linghai",
						"pid": "522"
					},
					{
						"area_id": "121300",
						"title": "北镇市",
						"pinyin": "beizhen",
						"pid": "522"
					}
				]
			},
			{
				"area_id": "115003",
				"title": "营口市",
				"pinyin": "yingkou",
				"pid": "466",
				"child": [
					{
						"area_id": "115002",
						"title": "站前区",
						"pinyin": "zhanqian",
						"pid": "530"
					},
					{
						"area_id": "115004",
						"title": "西市区",
						"pinyin": "xishi",
						"pid": "530"
					},
					{
						"area_id": "115007",
						"title": "鲅鱼圈区",
						"pinyin": "bayuquan",
						"pid": "530"
					},
					{
						"area_id": "115005",
						"title": "老边区",
						"pinyin": "laobian",
						"pid": "530"
					},
					{
						"area_id": "115200",
						"title": "盖州市",
						"pinyin": "gaizhou",
						"pid": "530"
					},
					{
						"area_id": "115100",
						"title": "大石桥市",
						"pinyin": "dashiqiao",
						"pid": "530"
					}
				]
			},
			{
				"area_id": "123000",
				"title": "阜新市",
				"pinyin": "fuxin",
				"pid": "466",
				"child": [
					{
						"area_id": "123000",
						"title": "海州区",
						"pinyin": "haizhou",
						"pid": "537"
					},
					{
						"area_id": "123005",
						"title": "新邱区",
						"pinyin": "xinqiu",
						"pid": "537"
					},
					{
						"area_id": "123003",
						"title": "太平区",
						"pinyin": "taiping",
						"pid": "537"
					},
					{
						"area_id": "123006",
						"title": "清河门区",
						"pinyin": "qinghemen",
						"pid": "537"
					},
					{
						"area_id": "123000",
						"title": "细河区",
						"pinyin": "xihe",
						"pid": "537"
					},
					{
						"area_id": "123100",
						"title": "阜新蒙古族自治县",
						"pinyin": "fuxin",
						"pid": "537"
					},
					{
						"area_id": "123200",
						"title": "彰武县",
						"pinyin": "zhangwu",
						"pid": "537"
					}
				]
			},
			{
				"area_id": "111000",
				"title": "辽阳市",
				"pinyin": "liaoyang",
				"pid": "466",
				"child": [
					{
						"area_id": "111000",
						"title": "白塔区",
						"pinyin": "baita",
						"pid": "545"
					},
					{
						"area_id": "111000",
						"title": "文圣区",
						"pinyin": "wensheng",
						"pid": "545"
					},
					{
						"area_id": "111003",
						"title": "宏伟区",
						"pinyin": "hongwei",
						"pid": "545"
					},
					{
						"area_id": "111008",
						"title": "弓长岭区",
						"pinyin": "gongchangling",
						"pid": "545"
					},
					{
						"area_id": "111000",
						"title": "太子河区",
						"pinyin": "taizihe",
						"pid": "545"
					},
					{
						"area_id": "111200",
						"title": "辽阳县",
						"pinyin": "liaoyang",
						"pid": "545"
					},
					{
						"area_id": "111300",
						"title": "灯塔市",
						"pinyin": "dengta",
						"pid": "545"
					}
				]
			},
			{
				"area_id": "124010",
				"title": "盘锦市",
				"pinyin": "panjin",
				"pid": "466",
				"child": [
					{
						"area_id": "124000",
						"title": "双台子区",
						"pinyin": "shuangtaizi",
						"pid": "553"
					},
					{
						"area_id": "124010",
						"title": "兴隆台区",
						"pinyin": "xinglongtai",
						"pid": "553"
					},
					{
						"area_id": "124200",
						"title": "大洼县",
						"pinyin": "dawa",
						"pid": "553"
					},
					{
						"area_id": "124000",
						"title": "盘山县",
						"pinyin": "panshan",
						"pid": "553"
					}
				]
			},
			{
				"area_id": "112000",
				"title": "铁岭市",
				"pinyin": "tieling",
				"pid": "466",
				"child": [
					{
						"area_id": "112000",
						"title": "银州区",
						"pinyin": "yinzhou",
						"pid": "558"
					},
					{
						"area_id": "112003",
						"title": "清河区",
						"pinyin": "qinghe",
						"pid": "558"
					},
					{
						"area_id": "112000",
						"title": "铁岭县",
						"pinyin": "tieling",
						"pid": "558"
					},
					{
						"area_id": "112400",
						"title": "西丰县",
						"pinyin": "xifeng",
						"pid": "558"
					},
					{
						"area_id": "112500",
						"title": "昌图县",
						"pinyin": "changtu",
						"pid": "558"
					},
					{
						"area_id": "112700",
						"title": "调兵山市",
						"pinyin": "diaobingshan",
						"pid": "558"
					},
					{
						"area_id": "112300",
						"title": "开原市",
						"pinyin": "kaiyuan",
						"pid": "558"
					}
				]
			},
			{
				"area_id": "122000",
				"title": "朝阳市",
				"pinyin": "chaoyang",
				"pid": "466",
				"child": [
					{
						"area_id": "122000",
						"title": "双塔区",
						"pinyin": "shuangta",
						"pid": "566"
					},
					{
						"area_id": "122000",
						"title": "龙城区",
						"pinyin": "longcheng",
						"pid": "566"
					},
					{
						"area_id": "122000",
						"title": "朝阳县",
						"pinyin": "chaoyang",
						"pid": "566"
					},
					{
						"area_id": "122400",
						"title": "建平县",
						"pinyin": "jianping",
						"pid": "566"
					},
					{
						"area_id": "122300",
						"title": "喀喇沁左翼蒙古族自治县",
						"pinyin": "kalaqinzuoyi",
						"pid": "566"
					},
					{
						"area_id": "122100",
						"title": "北票市",
						"pinyin": "beipiao",
						"pid": "566"
					},
					{
						"area_id": "122500",
						"title": "凌源市",
						"pinyin": "lingyuan",
						"pid": "566"
					}
				]
			},
			{
				"area_id": "125000",
				"title": "葫芦岛市",
				"pinyin": "huludao",
				"pid": "466",
				"child": [
					{
						"area_id": "125001",
						"title": "连山区",
						"pinyin": "lianshan",
						"pid": "574"
					},
					{
						"area_id": "125003",
						"title": "龙港区",
						"pinyin": "longgang",
						"pid": "574"
					},
					{
						"area_id": "125027",
						"title": "南票区",
						"pinyin": "nanpiao",
						"pid": "574"
					},
					{
						"area_id": "125200",
						"title": "绥中县",
						"pinyin": "suizhong",
						"pid": "574"
					},
					{
						"area_id": "125300",
						"title": "建昌县",
						"pinyin": "jianchang",
						"pid": "574"
					},
					{
						"area_id": "125100",
						"title": "兴城市",
						"pinyin": "xingcheng",
						"pid": "574"
					}
				]
			},
			{
				"area_id": "116100",
				"title": "金普新区",
				"pinyin": "jinpuxinqu",
				"pid": "466",
				"child": [
					{
						"area_id": "116100",
						"title": "金州新区",
						"pinyin": "jinzhouxinqu",
						"pid": "581"
					},
					{
						"area_id": "116200",
						"title": "普湾新区",
						"pinyin": "puwanxinqu",
						"pid": "581"
					},
					{
						"area_id": "116100",
						"title": "保税区",
						"pinyin": "baoshuiqu",
						"pid": "581"
					}
				]
			}
		]
	},
	{
		"area_id": "130000",
		"title": "吉林省",
		"pinyin": "jilin",
		"pid": "0",
		"child": [
			{
				"area_id": "130022",
				"title": "长春市",
				"pinyin": "changchun",
				"pid": "585",
				"child": [
					{
						"area_id": "130022",
						"title": "南关区",
						"pinyin": "nanguan",
						"pid": "586"
					},
					{
						"area_id": "130051",
						"title": "宽城区",
						"pinyin": "kuancheng",
						"pid": "586"
					},
					{
						"area_id": "130012",
						"title": "朝阳区",
						"pinyin": "chaoyang",
						"pid": "586"
					},
					{
						"area_id": "130031",
						"title": "二道区",
						"pinyin": "erdao",
						"pid": "586"
					},
					{
						"area_id": "130062",
						"title": "绿园区",
						"pinyin": "lvyuan",
						"pid": "586"
					},
					{
						"area_id": "130600",
						"title": "双阳区",
						"pinyin": "shuangyang",
						"pid": "586"
					},
					{
						"area_id": "130500",
						"title": "九台区",
						"pinyin": "jiutai",
						"pid": "586"
					},
					{
						"area_id": "130200",
						"title": "农安县",
						"pinyin": "nong'an",
						"pid": "586"
					},
					{
						"area_id": "130400",
						"title": "榆树市",
						"pinyin": "yushu",
						"pid": "586"
					},
					{
						"area_id": "130300",
						"title": "德惠市",
						"pinyin": "dehui",
						"pid": "586"
					}
				]
			},
			{
				"area_id": "132011",
				"title": "吉林市",
				"pinyin": "jilin",
				"pid": "585",
				"child": [
					{
						"area_id": "132002",
						"title": "昌邑区",
						"pinyin": "changyi",
						"pid": "597"
					},
					{
						"area_id": "132021",
						"title": "龙潭区",
						"pinyin": "longtan",
						"pid": "597"
					},
					{
						"area_id": "132011",
						"title": "船营区",
						"pinyin": "chuanying",
						"pid": "597"
					},
					{
						"area_id": "132013",
						"title": "丰满区",
						"pinyin": "fengman",
						"pid": "597"
					},
					{
						"area_id": "132200",
						"title": "永吉县",
						"pinyin": "yongji",
						"pid": "597"
					},
					{
						"area_id": "132500",
						"title": "蛟河市",
						"pinyin": "jiaohe",
						"pid": "597"
					},
					{
						"area_id": "132400",
						"title": "桦甸市",
						"pinyin": "huadian",
						"pid": "597"
					},
					{
						"area_id": "132600",
						"title": "舒兰市",
						"pinyin": "shulan",
						"pid": "597"
					},
					{
						"area_id": "132300",
						"title": "磐石市",
						"pinyin": "panshi",
						"pid": "597"
					}
				]
			},
			{
				"area_id": "136000",
				"title": "四平市",
				"pinyin": "siping",
				"pid": "585",
				"child": [
					{
						"area_id": "136000",
						"title": "铁西区",
						"pinyin": "tiexi",
						"pid": "607"
					},
					{
						"area_id": "136001",
						"title": "铁东区",
						"pinyin": "tiedong",
						"pid": "607"
					},
					{
						"area_id": "136500",
						"title": "梨树县",
						"pinyin": "lishu",
						"pid": "607"
					},
					{
						"area_id": "130700",
						"title": "伊通满族自治县",
						"pinyin": "yitong",
						"pid": "607"
					},
					{
						"area_id": "136100",
						"title": "公主岭市",
						"pinyin": "gongzhuling",
						"pid": "607"
					},
					{
						"area_id": "136400",
						"title": "双辽市",
						"pinyin": "shuangliao",
						"pid": "607"
					}
				]
			},
			{
				"area_id": "136200",
				"title": "辽源市",
				"pinyin": "liaoyuan",
				"pid": "585",
				"child": [
					{
						"area_id": "136200",
						"title": "龙山区",
						"pinyin": "longshan",
						"pid": "614"
					},
					{
						"area_id": "136201",
						"title": "西安区",
						"pinyin": "xi'an",
						"pid": "614"
					},
					{
						"area_id": "136300",
						"title": "东丰县",
						"pinyin": "dongfeng",
						"pid": "614"
					},
					{
						"area_id": "136600",
						"title": "东辽县",
						"pinyin": "dongliao",
						"pid": "614"
					}
				]
			},
			{
				"area_id": "134001",
				"title": "通化市",
				"pinyin": "tonghua",
				"pid": "585",
				"child": [
					{
						"area_id": "134001",
						"title": "东昌区",
						"pinyin": "dongchang",
						"pid": "619"
					},
					{
						"area_id": "134003",
						"title": "二道江区",
						"pinyin": "erdaojiang",
						"pid": "619"
					},
					{
						"area_id": "134100",
						"title": "通化县",
						"pinyin": "tonghua",
						"pid": "619"
					},
					{
						"area_id": "135100",
						"title": "辉南县",
						"pinyin": "huinan",
						"pid": "619"
					},
					{
						"area_id": "135300",
						"title": "柳河县",
						"pinyin": "liuhe",
						"pid": "619"
					},
					{
						"area_id": "135000",
						"title": "梅河口市",
						"pinyin": "meihekou",
						"pid": "619"
					},
					{
						"area_id": "134200",
						"title": "集安市",
						"pinyin": "ji'an",
						"pid": "619"
					}
				]
			},
			{
				"area_id": "134300",
				"title": "白山市",
				"pinyin": "baishan",
				"pid": "585",
				"child": [
					{
						"area_id": "134300",
						"title": "浑江区",
						"pinyin": "hunjiang",
						"pid": "627"
					},
					{
						"area_id": "134700",
						"title": "江源区",
						"pinyin": "jiangyuan",
						"pid": "627"
					},
					{
						"area_id": "134500",
						"title": "抚松县",
						"pinyin": "fusong",
						"pid": "627"
					},
					{
						"area_id": "135200",
						"title": "靖宇县",
						"pinyin": "jingyu",
						"pid": "627"
					},
					{
						"area_id": "134400",
						"title": "长白朝鲜族自治县",
						"pinyin": "changbai",
						"pid": "627"
					},
					{
						"area_id": "134600",
						"title": "临江市",
						"pinyin": "linjiang",
						"pid": "627"
					}
				]
			},
			{
				"area_id": "138000",
				"title": "松原市",
				"pinyin": "songyuan",
				"pid": "585",
				"child": [
					{
						"area_id": "138000",
						"title": "宁江区",
						"pinyin": "ningjiang",
						"pid": "634"
					},
					{
						"area_id": "138000",
						"title": "前郭尔罗斯蒙古族自治县",
						"pinyin": "qianguoerluosi",
						"pid": "634"
					},
					{
						"area_id": "131500",
						"title": "长岭县",
						"pinyin": "changling",
						"pid": "634"
					},
					{
						"area_id": "131400",
						"title": "乾安县",
						"pinyin": "qian'an",
						"pid": "634"
					},
					{
						"area_id": "131200",
						"title": "扶余市",
						"pinyin": "fuyu",
						"pid": "634"
					}
				]
			},
			{
				"area_id": "137000",
				"title": "白城市",
				"pinyin": "baicheng",
				"pid": "585",
				"child": [
					{
						"area_id": "137000",
						"title": "洮北区",
						"pinyin": "taobei",
						"pid": "640"
					},
					{
						"area_id": "137300",
						"title": "镇赉县",
						"pinyin": "zhenlai",
						"pid": "640"
					},
					{
						"area_id": "137200",
						"title": "通榆县",
						"pinyin": "tongyu",
						"pid": "640"
					},
					{
						"area_id": "137100",
						"title": "洮南市",
						"pinyin": "taonan",
						"pid": "640"
					},
					{
						"area_id": "131300",
						"title": "大安市",
						"pinyin": "da'an",
						"pid": "640"
					}
				]
			},
			{
				"area_id": "133000",
				"title": "延边朝鲜族自治州",
				"pinyin": "yanbian",
				"pid": "585",
				"child": [
					{
						"area_id": "133000",
						"title": "延吉市",
						"pinyin": "yanji",
						"pid": "646"
					},
					{
						"area_id": "133100",
						"title": "图们市",
						"pinyin": "tumen",
						"pid": "646"
					},
					{
						"area_id": "133700",
						"title": "敦化市",
						"pinyin": "dunhua",
						"pid": "646"
					},
					{
						"area_id": "133300",
						"title": "珲春市",
						"pinyin": "hunchun",
						"pid": "646"
					},
					{
						"area_id": "133400",
						"title": "龙井市",
						"pinyin": "longjing",
						"pid": "646"
					},
					{
						"area_id": "133500",
						"title": "和龙市",
						"pinyin": "helong",
						"pid": "646"
					},
					{
						"area_id": "133200",
						"title": "汪清县",
						"pinyin": "wangqing",
						"pid": "646"
					},
					{
						"area_id": "133600",
						"title": "安图县",
						"pinyin": "antu",
						"pid": "646"
					}
				]
			}
		]
	},
	{
		"area_id": "150000",
		"title": "黑龙江省",
		"pinyin": "heilongjiang",
		"pid": "0",
		"child": [
			{
				"area_id": "150010",
				"title": "哈尔滨市",
				"pinyin": "harbin",
				"pid": "655",
				"child": [
					{
						"area_id": "150010",
						"title": "道里区",
						"pinyin": "daoli",
						"pid": "656"
					},
					{
						"area_id": "150006",
						"title": "南岗区",
						"pinyin": "nangang",
						"pid": "656"
					},
					{
						"area_id": "150020",
						"title": "道外区",
						"pinyin": "daowai",
						"pid": "656"
					},
					{
						"area_id": "150060",
						"title": "平房区",
						"pinyin": "pingfang",
						"pid": "656"
					},
					{
						"area_id": "150028",
						"title": "松北区",
						"pinyin": "songbei",
						"pid": "656"
					},
					{
						"area_id": "150036",
						"title": "香坊区",
						"pinyin": "xiangfang",
						"pid": "656"
					},
					{
						"area_id": "150500",
						"title": "呼兰区",
						"pinyin": "hulan",
						"pid": "656"
					},
					{
						"area_id": "150300",
						"title": "阿城区",
						"pinyin": "a'cheng",
						"pid": "656"
					},
					{
						"area_id": "150100",
						"title": "双城区",
						"pinyin": "shuangcheng",
						"pid": "656"
					},
					{
						"area_id": "154800",
						"title": "依兰县",
						"pinyin": "yilan",
						"pid": "656"
					},
					{
						"area_id": "150800",
						"title": "方正县",
						"pinyin": "fangzheng",
						"pid": "656"
					},
					{
						"area_id": "150400",
						"title": "宾县",
						"pinyin": "binxian",
						"pid": "656"
					},
					{
						"area_id": "151800",
						"title": "巴彦县",
						"pinyin": "bayan",
						"pid": "656"
					},
					{
						"area_id": "151900",
						"title": "木兰县",
						"pinyin": "mulan",
						"pid": "656"
					},
					{
						"area_id": "150900",
						"title": "通河县",
						"pinyin": "tonghe",
						"pid": "656"
					},
					{
						"area_id": "150700",
						"title": "延寿县",
						"pinyin": "yanshou",
						"pid": "656"
					},
					{
						"area_id": "150600",
						"title": "尚志市",
						"pinyin": "shangzhi",
						"pid": "656"
					},
					{
						"area_id": "150200",
						"title": "五常市",
						"pinyin": "wuchang",
						"pid": "656"
					}
				]
			},
			{
				"area_id": "161005",
				"title": "齐齐哈尔市",
				"pinyin": "qiqihar",
				"pid": "655",
				"child": [
					{
						"area_id": "161000",
						"title": "龙沙区",
						"pinyin": "longsha",
						"pid": "675"
					},
					{
						"area_id": "161006",
						"title": "建华区",
						"pinyin": "jianhua",
						"pid": "675"
					},
					{
						"area_id": "161000",
						"title": "铁锋区",
						"pinyin": "tiefeng",
						"pid": "675"
					},
					{
						"area_id": "161031",
						"title": "昂昂溪区",
						"pinyin": "angangxi",
						"pid": "675"
					},
					{
						"area_id": "161041",
						"title": "富拉尔基区",
						"pinyin": "fulaerji",
						"pid": "675"
					},
					{
						"area_id": "161046",
						"title": "碾子山区",
						"pinyin": "nianzishan",
						"pid": "675"
					},
					{
						"area_id": "161021",
						"title": "梅里斯达斡尔族区",
						"pinyin": "meilisi",
						"pid": "675"
					},
					{
						"area_id": "161100",
						"title": "龙江县",
						"pinyin": "longjiang",
						"pid": "675"
					},
					{
						"area_id": "161500",
						"title": "依安县",
						"pinyin": "yi'an",
						"pid": "675"
					},
					{
						"area_id": "162400",
						"title": "泰来县",
						"pinyin": "tailai",
						"pid": "675"
					},
					{
						"area_id": "162100",
						"title": "甘南县",
						"pinyin": "gannan",
						"pid": "675"
					},
					{
						"area_id": "161200",
						"title": "富裕县",
						"pinyin": "fuyu",
						"pid": "675"
					},
					{
						"area_id": "161600",
						"title": "克山县",
						"pinyin": "keshan",
						"pid": "675"
					},
					{
						"area_id": "164800",
						"title": "克东县",
						"pinyin": "kedong",
						"pid": "675"
					},
					{
						"area_id": "164700",
						"title": "拜泉县",
						"pinyin": "baiquan",
						"pid": "675"
					},
					{
						"area_id": "161300",
						"title": "讷河市",
						"pinyin": "nehe",
						"pid": "675"
					}
				]
			},
			{
				"area_id": "158100",
				"title": "鸡西市",
				"pinyin": "jixi",
				"pid": "655",
				"child": [
					{
						"area_id": "158100",
						"title": "鸡冠区",
						"pinyin": "jiguan",
						"pid": "692"
					},
					{
						"area_id": "158130",
						"title": "恒山区",
						"pinyin": "hengshan",
						"pid": "692"
					},
					{
						"area_id": "158150",
						"title": "滴道区",
						"pinyin": "didao",
						"pid": "692"
					},
					{
						"area_id": "158160",
						"title": "梨树区",
						"pinyin": "lishu",
						"pid": "692"
					},
					{
						"area_id": "158170",
						"title": "城子河区",
						"pinyin": "chengzihe",
						"pid": "692"
					},
					{
						"area_id": "158180",
						"title": "麻山区",
						"pinyin": "mashan",
						"pid": "692"
					},
					{
						"area_id": "158200",
						"title": "鸡东县",
						"pinyin": "jidong",
						"pid": "692"
					},
					{
						"area_id": "158400",
						"title": "虎林市",
						"pinyin": "hulin",
						"pid": "692"
					},
					{
						"area_id": "158300",
						"title": "密山市",
						"pinyin": "mishan",
						"pid": "692"
					}
				]
			},
			{
				"area_id": "154100",
				"title": "鹤岗市",
				"pinyin": "hegang",
				"pid": "655",
				"child": [
					{
						"area_id": "154100",
						"title": "向阳区",
						"pinyin": "xiangyang",
						"pid": "702"
					},
					{
						"area_id": "154101",
						"title": "工农区",
						"pinyin": "gongnong",
						"pid": "702"
					},
					{
						"area_id": "154104",
						"title": "南山区",
						"pinyin": "nanshan",
						"pid": "702"
					},
					{
						"area_id": "154102",
						"title": "兴安区",
						"pinyin": "xing'an",
						"pid": "702"
					},
					{
						"area_id": "154106",
						"title": "东山区",
						"pinyin": "dongshan",
						"pid": "702"
					},
					{
						"area_id": "154105",
						"title": "兴山区",
						"pinyin": "xingshan",
						"pid": "702"
					},
					{
						"area_id": "154200",
						"title": "萝北县",
						"pinyin": "luobei",
						"pid": "702"
					},
					{
						"area_id": "156200",
						"title": "绥滨县",
						"pinyin": "suibin",
						"pid": "702"
					}
				]
			},
			{
				"area_id": "155100",
				"title": "双鸭山市",
				"pinyin": "shuangyashan",
				"pid": "655",
				"child": [
					{
						"area_id": "155100",
						"title": "尖山区",
						"pinyin": "jianshan",
						"pid": "711"
					},
					{
						"area_id": "155120",
						"title": "岭东区",
						"pinyin": "lingdong",
						"pid": "711"
					},
					{
						"area_id": "155130",
						"title": "四方台区",
						"pinyin": "sifangtai",
						"pid": "711"
					},
					{
						"area_id": "155131",
						"title": "宝山区",
						"pinyin": "baoshan",
						"pid": "711"
					},
					{
						"area_id": "155900",
						"title": "集贤县",
						"pinyin": "jixian",
						"pid": "711"
					},
					{
						"area_id": "155800",
						"title": "友谊县",
						"pinyin": "youyi",
						"pid": "711"
					},
					{
						"area_id": "155600",
						"title": "宝清县",
						"pinyin": "baoqing",
						"pid": "711"
					},
					{
						"area_id": "155700",
						"title": "饶河县",
						"pinyin": "raohe",
						"pid": "711"
					}
				]
			},
			{
				"area_id": "163000",
				"title": "大庆市",
				"pinyin": "daqing",
				"pid": "655",
				"child": [
					{
						"area_id": "163001",
						"title": "萨尔图区",
						"pinyin": "saertu",
						"pid": "720"
					},
					{
						"area_id": "163711",
						"title": "龙凤区",
						"pinyin": "longfeng",
						"pid": "720"
					},
					{
						"area_id": "163712",
						"title": "让胡路区",
						"pinyin": "ranghulu",
						"pid": "720"
					},
					{
						"area_id": "163511",
						"title": "红岗区",
						"pinyin": "honggang",
						"pid": "720"
					},
					{
						"area_id": "163515",
						"title": "大同区",
						"pinyin": "datong",
						"pid": "720"
					},
					{
						"area_id": "166400",
						"title": "肇州县",
						"pinyin": "zhaozhou",
						"pid": "720"
					},
					{
						"area_id": "166500",
						"title": "肇源县",
						"pinyin": "zhaoyuan",
						"pid": "720"
					},
					{
						"area_id": "166300",
						"title": "林甸县",
						"pinyin": "lindian",
						"pid": "720"
					},
					{
						"area_id": "166200",
						"title": "杜尔伯特蒙古族自治县",
						"pinyin": "duerbote",
						"pid": "720"
					}
				]
			},
			{
				"area_id": "153000",
				"title": "伊春市",
				"pinyin": "yichun",
				"pid": "655",
				"child": [
					{
						"area_id": "153000",
						"title": "伊春区",
						"pinyin": "yichun",
						"pid": "730"
					},
					{
						"area_id": "153100",
						"title": "南岔区",
						"pinyin": "nancha",
						"pid": "730"
					},
					{
						"area_id": "153031",
						"title": "友好区",
						"pinyin": "youhao",
						"pid": "730"
					},
					{
						"area_id": "153025",
						"title": "西林区",
						"pinyin": "xilin",
						"pid": "730"
					},
					{
						"area_id": "153013",
						"title": "翠峦区",
						"pinyin": "cuiluan",
						"pid": "730"
					},
					{
						"area_id": "153036",
						"title": "新青区",
						"pinyin": "xinqing",
						"pid": "730"
					},
					{
						"area_id": "153021",
						"title": "美溪区",
						"pinyin": "meixi",
						"pid": "730"
					},
					{
						"area_id": "153026",
						"title": "金山屯区",
						"pinyin": "jinshantun",
						"pid": "730"
					},
					{
						"area_id": "153033",
						"title": "五营区",
						"pinyin": "wuying",
						"pid": "730"
					},
					{
						"area_id": "153011",
						"title": "乌马河区",
						"pinyin": "wumahe",
						"pid": "730"
					},
					{
						"area_id": "153037",
						"title": "汤旺河区",
						"pinyin": "tangwanghe",
						"pid": "730"
					},
					{
						"area_id": "153106",
						"title": "带岭区",
						"pinyin": "dailing",
						"pid": "730"
					},
					{
						"area_id": "153038",
						"title": "乌伊岭区",
						"pinyin": "wuyiling",
						"pid": "730"
					},
					{
						"area_id": "153035",
						"title": "红星区",
						"pinyin": "hongxing",
						"pid": "730"
					},
					{
						"area_id": "153032",
						"title": "上甘岭区",
						"pinyin": "shangganling",
						"pid": "730"
					},
					{
						"area_id": "153200",
						"title": "嘉荫县",
						"pinyin": "jiayin",
						"pid": "730"
					},
					{
						"area_id": "152500",
						"title": "铁力市",
						"pinyin": "tieli",
						"pid": "730"
					}
				]
			},
			{
				"area_id": "154002",
				"title": "佳木斯市",
				"pinyin": "jiamusi",
				"pid": "655",
				"child": [
					{
						"area_id": "154002",
						"title": "向阳区",
						"pinyin": "xiangyang",
						"pid": "748"
					},
					{
						"area_id": "154002",
						"title": "前进区",
						"pinyin": "qianjin",
						"pid": "748"
					},
					{
						"area_id": "154005",
						"title": "东风区",
						"pinyin": "dongfeng",
						"pid": "748"
					},
					{
						"area_id": "154004",
						"title": "郊区",
						"pinyin": "jiaoqu",
						"pid": "748"
					},
					{
						"area_id": "154400",
						"title": "桦南县",
						"pinyin": "huanan",
						"pid": "748"
					},
					{
						"area_id": "154300",
						"title": "桦川县",
						"pinyin": "huachuan",
						"pid": "748"
					},
					{
						"area_id": "154700",
						"title": "汤原县",
						"pinyin": "tangyuan",
						"pid": "748"
					},
					{
						"area_id": "156500",
						"title": "抚远县",
						"pinyin": "fuyuan",
						"pid": "748"
					},
					{
						"area_id": "156400",
						"title": "同江市",
						"pinyin": "tongjiang",
						"pid": "748"
					},
					{
						"area_id": "156100",
						"title": "富锦市",
						"pinyin": "fujin",
						"pid": "748"
					}
				]
			},
			{
				"area_id": "154600",
				"title": "七台河市",
				"pinyin": "qitaihe",
				"pid": "655",
				"child": [
					{
						"area_id": "154604",
						"title": "新兴区",
						"pinyin": "xinxing",
						"pid": "759"
					},
					{
						"area_id": "154600",
						"title": "桃山区",
						"pinyin": "taoshan",
						"pid": "759"
					},
					{
						"area_id": "154622",
						"title": "茄子河区",
						"pinyin": "qiezihe",
						"pid": "759"
					},
					{
						"area_id": "154500",
						"title": "勃利县",
						"pinyin": "boli",
						"pid": "759"
					}
				]
			},
			{
				"area_id": "157000",
				"title": "牡丹江市",
				"pinyin": "mudanjiang",
				"pid": "655",
				"child": [
					{
						"area_id": "157000",
						"title": "东安区",
						"pinyin": "dong'an",
						"pid": "764"
					},
					{
						"area_id": "157013",
						"title": "阳明区",
						"pinyin": "yangming",
						"pid": "764"
					},
					{
						"area_id": "157009",
						"title": "爱民区",
						"pinyin": "aimin",
						"pid": "764"
					},
					{
						"area_id": "157000",
						"title": "西安区",
						"pinyin": "xi'an",
						"pid": "764"
					},
					{
						"area_id": "157200",
						"title": "东宁县",
						"pinyin": "dongning",
						"pid": "764"
					},
					{
						"area_id": "157600",
						"title": "林口县",
						"pinyin": "linkou",
						"pid": "764"
					},
					{
						"area_id": "157300",
						"title": "绥芬河市",
						"pinyin": "suifenhe",
						"pid": "764"
					},
					{
						"area_id": "157100",
						"title": "海林市",
						"pinyin": "hailin",
						"pid": "764"
					},
					{
						"area_id": "157400",
						"title": "宁安市",
						"pinyin": "ning'an",
						"pid": "764"
					},
					{
						"area_id": "157500",
						"title": "穆棱市",
						"pinyin": "muling",
						"pid": "764"
					}
				]
			},
			{
				"area_id": "164300",
				"title": "黑河市",
				"pinyin": "heihe",
				"pid": "655",
				"child": [
					{
						"area_id": "164300",
						"title": "爱辉区",
						"pinyin": "aihui",
						"pid": "775"
					},
					{
						"area_id": "161400",
						"title": "嫩江县",
						"pinyin": "nenjiang",
						"pid": "775"
					},
					{
						"area_id": "164400",
						"title": "逊克县",
						"pinyin": "xunke",
						"pid": "775"
					},
					{
						"area_id": "164200",
						"title": "孙吴县",
						"pinyin": "sunwu",
						"pid": "775"
					},
					{
						"area_id": "164000",
						"title": "北安市",
						"pinyin": "bei'an",
						"pid": "775"
					},
					{
						"area_id": "164100",
						"title": "五大连池市",
						"pinyin": "wudalianchi",
						"pid": "775"
					}
				]
			},
			{
				"area_id": "152000",
				"title": "绥化市",
				"pinyin": "suihua",
				"pid": "655",
				"child": [
					{
						"area_id": "152000",
						"title": "北林区",
						"pinyin": "beilin",
						"pid": "782"
					},
					{
						"area_id": "152100",
						"title": "望奎县",
						"pinyin": "wangkui",
						"pid": "782"
					},
					{
						"area_id": "151500",
						"title": "兰西县",
						"pinyin": "lanxi",
						"pid": "782"
					},
					{
						"area_id": "151600",
						"title": "青冈县",
						"pinyin": "qinggang",
						"pid": "782"
					},
					{
						"area_id": "152400",
						"title": "庆安县",
						"pinyin": "qing'an",
						"pid": "782"
					},
					{
						"area_id": "151700",
						"title": "明水县",
						"pinyin": "mingshui",
						"pid": "782"
					},
					{
						"area_id": "152200",
						"title": "绥棱县",
						"pinyin": "suileng",
						"pid": "782"
					},
					{
						"area_id": "151400",
						"title": "安达市",
						"pinyin": "anda",
						"pid": "782"
					},
					{
						"area_id": "151100",
						"title": "肇东市",
						"pinyin": "zhaodong",
						"pid": "782"
					},
					{
						"area_id": "152300",
						"title": "海伦市",
						"pinyin": "hailun",
						"pid": "782"
					}
				]
			},
			{
				"area_id": "165000",
				"title": "大兴安岭地区",
				"pinyin": "daxinganling",
				"pid": "655",
				"child": [
					{
						"area_id": "165000",
						"title": "加格达奇区",
						"pinyin": "jiagedaqi",
						"pid": "793"
					},
					{
						"area_id": "165000",
						"title": "新林区",
						"pinyin": "xinlin",
						"pid": "793"
					},
					{
						"area_id": "165000",
						"title": "松岭区",
						"pinyin": "songling",
						"pid": "793"
					},
					{
						"area_id": "165000",
						"title": "呼中区",
						"pinyin": "huzhong",
						"pid": "793"
					},
					{
						"area_id": "165100",
						"title": "呼玛县",
						"pinyin": "huma",
						"pid": "793"
					},
					{
						"area_id": "165200",
						"title": "塔河县",
						"pinyin": "tahe",
						"pid": "793"
					},
					{
						"area_id": "165300",
						"title": "漠河县",
						"pinyin": "mohe",
						"pid": "793"
					}
				]
			}
		]
	},
	{
		"area_id": "200000",
		"title": "上海",
		"pinyin": "shanghai",
		"pid": "0",
		"child": [
			{
				"area_id": "200000",
				"title": "上海市",
				"pinyin": "shanghai",
				"pid": "801",
				"child": [
					{
						"area_id": "200001",
						"title": "黄浦区",
						"pinyin": "huangpu",
						"pid": "802"
					},
					{
						"area_id": "200030",
						"title": "徐汇区",
						"pinyin": "xuhui",
						"pid": "802"
					},
					{
						"area_id": "200050",
						"title": "长宁区",
						"pinyin": "changning",
						"pid": "802"
					},
					{
						"area_id": "200040",
						"title": "静安区",
						"pinyin": "jing'an",
						"pid": "802"
					},
					{
						"area_id": "200333",
						"title": "普陀区",
						"pinyin": "putuo",
						"pid": "802"
					},
					{
						"area_id": "200070",
						"title": "闸北区",
						"pinyin": "zhabei",
						"pid": "802"
					},
					{
						"area_id": "200086",
						"title": "虹口区",
						"pinyin": "hongkou",
						"pid": "802"
					},
					{
						"area_id": "200082",
						"title": "杨浦区",
						"pinyin": "yangpu",
						"pid": "802"
					},
					{
						"area_id": "201100",
						"title": "闵行区",
						"pinyin": "minhang",
						"pid": "802"
					},
					{
						"area_id": "201900",
						"title": "宝山区",
						"pinyin": "baoshan",
						"pid": "802"
					},
					{
						"area_id": "201800",
						"title": "嘉定区",
						"pinyin": "jiading",
						"pid": "802"
					},
					{
						"area_id": "200135",
						"title": "浦东新区",
						"pinyin": "pudong",
						"pid": "802"
					},
					{
						"area_id": "200540",
						"title": "金山区",
						"pinyin": "jinshan",
						"pid": "802"
					},
					{
						"area_id": "201600",
						"title": "松江区",
						"pinyin": "songjiang",
						"pid": "802"
					},
					{
						"area_id": "201700",
						"title": "青浦区",
						"pinyin": "qingpu",
						"pid": "802"
					},
					{
						"area_id": "201400",
						"title": "奉贤区",
						"pinyin": "fengxian",
						"pid": "802"
					},
					{
						"area_id": "202150",
						"title": "崇明县",
						"pinyin": "chongming",
						"pid": "802"
					}
				]
			}
		]
	},
	{
		"area_id": "210000",
		"title": "江苏省",
		"pinyin": "jiangsu",
		"pid": "0",
		"child": [
			{
				"area_id": "210008",
				"title": "南京市",
				"pinyin": "nanjing",
				"pid": "820",
				"child": [
					{
						"area_id": "210018",
						"title": "玄武区",
						"pinyin": "xuanwu",
						"pid": "821"
					},
					{
						"area_id": "210001",
						"title": "秦淮区",
						"pinyin": "qinhuai",
						"pid": "821"
					},
					{
						"area_id": "210004",
						"title": "建邺区",
						"pinyin": "jianye",
						"pid": "821"
					},
					{
						"area_id": "210009",
						"title": "鼓楼区",
						"pinyin": "gulou",
						"pid": "821"
					},
					{
						"area_id": "211800",
						"title": "浦口区",
						"pinyin": "pukou",
						"pid": "821"
					},
					{
						"area_id": "210046",
						"title": "栖霞区",
						"pinyin": "qixia",
						"pid": "821"
					},
					{
						"area_id": "210012",
						"title": "雨花台区",
						"pinyin": "yuhuatai",
						"pid": "821"
					},
					{
						"area_id": "211100",
						"title": "江宁区",
						"pinyin": "jiangning",
						"pid": "821"
					},
					{
						"area_id": "211500",
						"title": "六合区",
						"pinyin": "luhe",
						"pid": "821"
					},
					{
						"area_id": "211200",
						"title": "溧水区",
						"pinyin": "lishui",
						"pid": "821"
					},
					{
						"area_id": "211300",
						"title": "高淳区",
						"pinyin": "gaochun",
						"pid": "821"
					}
				]
			},
			{
				"area_id": "214000",
				"title": "无锡市",
				"pinyin": "wuxi",
				"pid": "820",
				"child": [
					{
						"area_id": "214001",
						"title": "崇安区",
						"pinyin": "chong'an",
						"pid": "833"
					},
					{
						"area_id": "214021",
						"title": "南长区",
						"pinyin": "nanchang",
						"pid": "833"
					},
					{
						"area_id": "214044",
						"title": "北塘区",
						"pinyin": "beitang",
						"pid": "833"
					},
					{
						"area_id": "214101",
						"title": "锡山区",
						"pinyin": "xishan",
						"pid": "833"
					},
					{
						"area_id": "214174",
						"title": "惠山区",
						"pinyin": "huishan",
						"pid": "833"
					},
					{
						"area_id": "214123",
						"title": "滨湖区",
						"pinyin": "binhu",
						"pid": "833"
					},
					{
						"area_id": "214431",
						"title": "江阴市",
						"pinyin": "jiangyin",
						"pid": "833"
					},
					{
						"area_id": "214200",
						"title": "宜兴市",
						"pinyin": "yixing",
						"pid": "833"
					}
				]
			},
			{
				"area_id": "221003",
				"title": "徐州市",
				"pinyin": "xuzhou",
				"pid": "820",
				"child": [
					{
						"area_id": "221005",
						"title": "鼓楼区",
						"pinyin": "gulou",
						"pid": "842"
					},
					{
						"area_id": "221007",
						"title": "云龙区",
						"pinyin": "yunlong",
						"pid": "842"
					},
					{
						"area_id": "221003",
						"title": "贾汪区",
						"pinyin": "jiawang",
						"pid": "842"
					},
					{
						"area_id": "221006",
						"title": "泉山区",
						"pinyin": "quanshan",
						"pid": "842"
					},
					{
						"area_id": "221106",
						"title": "铜山区",
						"pinyin": "tongshan",
						"pid": "842"
					},
					{
						"area_id": "221700",
						"title": "丰县",
						"pinyin": "fengxian",
						"pid": "842"
					},
					{
						"area_id": "221600",
						"title": "沛县",
						"pinyin": "peixian",
						"pid": "842"
					},
					{
						"area_id": "221200",
						"title": "睢宁县",
						"pinyin": "suining",
						"pid": "842"
					},
					{
						"area_id": "221400",
						"title": "新沂市",
						"pinyin": "xinyi",
						"pid": "842"
					},
					{
						"area_id": "221300",
						"title": "邳州市",
						"pinyin": "pizhou",
						"pid": "842"
					}
				]
			},
			{
				"area_id": "213000",
				"title": "常州市",
				"pinyin": "changzhou",
				"pid": "820",
				"child": [
					{
						"area_id": "213000",
						"title": "天宁区",
						"pinyin": "tianning",
						"pid": "853"
					},
					{
						"area_id": "213023",
						"title": "钟楼区",
						"pinyin": "zhonglou",
						"pid": "853"
					},
					{
						"area_id": "213025",
						"title": "戚墅堰区",
						"pinyin": "qishuyan",
						"pid": "853"
					},
					{
						"area_id": "213022",
						"title": "新北区",
						"pinyin": "xinbei",
						"pid": "853"
					},
					{
						"area_id": "213100",
						"title": "武进区",
						"pinyin": "wujin",
						"pid": "853"
					},
					{
						"area_id": "213300",
						"title": "溧阳市",
						"pinyin": "liyang",
						"pid": "853"
					},
					{
						"area_id": "213200",
						"title": "金坛市",
						"pinyin": "jintan",
						"pid": "853"
					}
				]
			},
			{
				"area_id": "215002",
				"title": "苏州市",
				"pinyin": "suzhou",
				"pid": "820",
				"child": [
					{
						"area_id": "215004",
						"title": "虎丘区",
						"pinyin": "huqiu",
						"pid": "861"
					},
					{
						"area_id": "215128",
						"title": "吴中区",
						"pinyin": "wuzhong",
						"pid": "861"
					},
					{
						"area_id": "215131",
						"title": "相城区",
						"pinyin": "xiangcheng",
						"pid": "861"
					},
					{
						"area_id": "215031",
						"title": "姑苏区",
						"pinyin": "gusu",
						"pid": "861"
					},
					{
						"area_id": "215200",
						"title": "吴江区",
						"pinyin": "wujiang",
						"pid": "861"
					},
					{
						"area_id": "215500",
						"title": "常熟市",
						"pinyin": "changshu",
						"pid": "861"
					},
					{
						"area_id": "215600",
						"title": "张家港市",
						"pinyin": "zhangjiagang",
						"pid": "861"
					},
					{
						"area_id": "215300",
						"title": "昆山市",
						"pinyin": "kunshan",
						"pid": "861"
					},
					{
						"area_id": "215400",
						"title": "太仓市",
						"pinyin": "taicang",
						"pid": "861"
					}
				]
			},
			{
				"area_id": "226001",
				"title": "南通市",
				"pinyin": "nantong",
				"pid": "820",
				"child": [
					{
						"area_id": "226001",
						"title": "崇川区",
						"pinyin": "chongchuan",
						"pid": "871"
					},
					{
						"area_id": "226001",
						"title": "港闸区",
						"pinyin": "gangzha",
						"pid": "871"
					},
					{
						"area_id": "226300",
						"title": "通州区",
						"pinyin": "tongzhou",
						"pid": "871"
					},
					{
						"area_id": "226600",
						"title": "海安县",
						"pinyin": "hai'an",
						"pid": "871"
					},
					{
						"area_id": "226400",
						"title": "如东县",
						"pinyin": "rudong",
						"pid": "871"
					},
					{
						"area_id": "226200",
						"title": "启东市",
						"pinyin": "qidong",
						"pid": "871"
					},
					{
						"area_id": "226500",
						"title": "如皋市",
						"pinyin": "rugao",
						"pid": "871"
					},
					{
						"area_id": "226100",
						"title": "海门市",
						"pinyin": "haimen",
						"pid": "871"
					}
				]
			},
			{
				"area_id": "222002",
				"title": "连云港市",
				"pinyin": "lianyungang",
				"pid": "820",
				"child": [
					{
						"area_id": "222042",
						"title": "连云区",
						"pinyin": "lianyun",
						"pid": "880"
					},
					{
						"area_id": "222003",
						"title": "海州区",
						"pinyin": "haizhou",
						"pid": "880"
					},
					{
						"area_id": "222100",
						"title": "赣榆区",
						"pinyin": "ganyu",
						"pid": "880"
					},
					{
						"area_id": "222300",
						"title": "东海县",
						"pinyin": "donghai",
						"pid": "880"
					},
					{
						"area_id": "222200",
						"title": "灌云县",
						"pinyin": "guanyun",
						"pid": "880"
					},
					{
						"area_id": "222500",
						"title": "灌南县",
						"pinyin": "guannan",
						"pid": "880"
					}
				]
			},
			{
				"area_id": "223001",
				"title": "淮安市",
				"pinyin": "huai'an",
				"pid": "820",
				"child": [
					{
						"area_id": "223001",
						"title": "清河区",
						"pinyin": "qinghe",
						"pid": "887"
					},
					{
						"area_id": "223200",
						"title": "淮安区",
						"pinyin": "huai'an",
						"pid": "887"
					},
					{
						"area_id": "223300",
						"title": "淮阴区",
						"pinyin": "huaiyin",
						"pid": "887"
					},
					{
						"area_id": "223002",
						"title": "清浦区",
						"pinyin": "qingpu",
						"pid": "887"
					},
					{
						"area_id": "223400",
						"title": "涟水县",
						"pinyin": "lianshui",
						"pid": "887"
					},
					{
						"area_id": "223100",
						"title": "洪泽县",
						"pinyin": "hongze",
						"pid": "887"
					},
					{
						"area_id": "211700",
						"title": "盱眙县",
						"pinyin": "xuyi",
						"pid": "887"
					},
					{
						"area_id": "211600",
						"title": "金湖县",
						"pinyin": "jinhu",
						"pid": "887"
					}
				]
			},
			{
				"area_id": "224005",
				"title": "盐城市",
				"pinyin": "yancheng",
				"pid": "820",
				"child": [
					{
						"area_id": "224005",
						"title": "亭湖区",
						"pinyin": "tinghu",
						"pid": "896"
					},
					{
						"area_id": "224055",
						"title": "盐都区",
						"pinyin": "yandu",
						"pid": "896"
					},
					{
						"area_id": "224600",
						"title": "响水县",
						"pinyin": "xiangshui",
						"pid": "896"
					},
					{
						"area_id": "224500",
						"title": "滨海县",
						"pinyin": "binhai",
						"pid": "896"
					},
					{
						"area_id": "224400",
						"title": "阜宁县",
						"pinyin": "funing",
						"pid": "896"
					},
					{
						"area_id": "224300",
						"title": "射阳县",
						"pinyin": "sheyang",
						"pid": "896"
					},
					{
						"area_id": "224700",
						"title": "建湖县",
						"pinyin": "jianhu",
						"pid": "896"
					},
					{
						"area_id": "224200",
						"title": "东台市",
						"pinyin": "dongtai",
						"pid": "896"
					},
					{
						"area_id": "224100",
						"title": "大丰市",
						"pinyin": "dafeng",
						"pid": "896"
					}
				]
			},
			{
				"area_id": "225002",
				"title": "扬州市",
				"pinyin": "yangzhou",
				"pid": "820",
				"child": [
					{
						"area_id": "225002",
						"title": "广陵区",
						"pinyin": "guangling",
						"pid": "906"
					},
					{
						"area_id": "225002",
						"title": "邗江区",
						"pinyin": "hanjiang",
						"pid": "906"
					},
					{
						"area_id": "225200",
						"title": "江都区",
						"pinyin": "jiangdu",
						"pid": "906"
					},
					{
						"area_id": "225800",
						"title": "宝应县",
						"pinyin": "baoying",
						"pid": "906"
					},
					{
						"area_id": "211400",
						"title": "仪征市",
						"pinyin": "yizheng",
						"pid": "906"
					},
					{
						"area_id": "225600",
						"title": "高邮市",
						"pinyin": "gaoyou",
						"pid": "906"
					}
				]
			},
			{
				"area_id": "212004",
				"title": "镇江市",
				"pinyin": "zhenjiang",
				"pid": "820",
				"child": [
					{
						"area_id": "212003",
						"title": "京口区",
						"pinyin": "jingkou",
						"pid": "913"
					},
					{
						"area_id": "212005",
						"title": "润州区",
						"pinyin": "runzhou",
						"pid": "913"
					},
					{
						"area_id": "212028",
						"title": "丹徒区",
						"pinyin": "dantu",
						"pid": "913"
					},
					{
						"area_id": "212300",
						"title": "丹阳市",
						"pinyin": "danyang",
						"pid": "913"
					},
					{
						"area_id": "212200",
						"title": "扬中市",
						"pinyin": "yangzhong",
						"pid": "913"
					},
					{
						"area_id": "212400",
						"title": "句容市",
						"pinyin": "jurong",
						"pid": "913"
					}
				]
			},
			{
				"area_id": "225300",
				"title": "泰州市",
				"pinyin": "taizhou",
				"pid": "820",
				"child": [
					{
						"area_id": "225300",
						"title": "海陵区",
						"pinyin": "hailing",
						"pid": "920"
					},
					{
						"area_id": "225321",
						"title": "高港区",
						"pinyin": "gaogang",
						"pid": "920"
					},
					{
						"area_id": "225500",
						"title": "姜堰区",
						"pinyin": "jiangyan",
						"pid": "920"
					},
					{
						"area_id": "225700",
						"title": "兴化市",
						"pinyin": "xinghua",
						"pid": "920"
					},
					{
						"area_id": "214500",
						"title": "靖江市",
						"pinyin": "jingjiang",
						"pid": "920"
					},
					{
						"area_id": "225400",
						"title": "泰兴市",
						"pinyin": "taixing",
						"pid": "920"
					}
				]
			},
			{
				"area_id": "223800",
				"title": "宿迁市",
				"pinyin": "suqian",
				"pid": "820",
				"child": [
					{
						"area_id": "223800",
						"title": "宿城区",
						"pinyin": "sucheng",
						"pid": "927"
					},
					{
						"area_id": "223800",
						"title": "宿豫区",
						"pinyin": "suyu",
						"pid": "927"
					},
					{
						"area_id": "223600",
						"title": "沭阳县",
						"pinyin": "shuyang",
						"pid": "927"
					},
					{
						"area_id": "223700",
						"title": "泗阳县",
						"pinyin": "siyang",
						"pid": "927"
					},
					{
						"area_id": "223900",
						"title": "泗洪县",
						"pinyin": "sihong",
						"pid": "927"
					}
				]
			}
		]
	},
	{
		"area_id": "310000",
		"title": "浙江省",
		"pinyin": "zhejiang",
		"pid": "0",
		"child": [
			{
				"area_id": "310026",
				"title": "杭州市",
				"pinyin": "hangzhou",
				"pid": "933",
				"child": [
					{
						"area_id": "310002",
						"title": "上城区",
						"pinyin": "shangcheng",
						"pid": "934"
					},
					{
						"area_id": "310006",
						"title": "下城区",
						"pinyin": "xiacheng",
						"pid": "934"
					},
					{
						"area_id": "310016",
						"title": "江干区",
						"pinyin": "jianggan",
						"pid": "934"
					},
					{
						"area_id": "310011",
						"title": "拱墅区",
						"pinyin": "gongshu",
						"pid": "934"
					},
					{
						"area_id": "310013",
						"title": "西湖区",
						"pinyin": "xihu",
						"pid": "934"
					},
					{
						"area_id": "310051",
						"title": "滨江区",
						"pinyin": "binjiang",
						"pid": "934"
					},
					{
						"area_id": "311200",
						"title": "萧山区",
						"pinyin": "xiaoshan",
						"pid": "934"
					},
					{
						"area_id": "311100",
						"title": "余杭区",
						"pinyin": "yuhang",
						"pid": "934"
					},
					{
						"area_id": "311500",
						"title": "桐庐县",
						"pinyin": "tonglu",
						"pid": "934"
					},
					{
						"area_id": "311700",
						"title": "淳安县",
						"pinyin": "chun'an",
						"pid": "934"
					},
					{
						"area_id": "311600",
						"title": "建德市",
						"pinyin": "jiande",
						"pid": "934"
					},
					{
						"area_id": "311400",
						"title": "富阳区",
						"pinyin": "fuyang",
						"pid": "934"
					},
					{
						"area_id": "311300",
						"title": "临安市",
						"pinyin": "lin'an",
						"pid": "934"
					}
				]
			},
			{
				"area_id": "315000",
				"title": "宁波市",
				"pinyin": "ningbo",
				"pid": "933",
				"child": [
					{
						"area_id": "315000",
						"title": "海曙区",
						"pinyin": "haishu",
						"pid": "948"
					},
					{
						"area_id": "315040",
						"title": "江东区",
						"pinyin": "jiangdong",
						"pid": "948"
					},
					{
						"area_id": "315020",
						"title": "江北区",
						"pinyin": "jiangbei",
						"pid": "948"
					},
					{
						"area_id": "315800",
						"title": "北仑区",
						"pinyin": "beilun",
						"pid": "948"
					},
					{
						"area_id": "315200",
						"title": "镇海区",
						"pinyin": "zhenhai",
						"pid": "948"
					},
					{
						"area_id": "315100",
						"title": "鄞州区",
						"pinyin": "yinzhou",
						"pid": "948"
					},
					{
						"area_id": "315700",
						"title": "象山县",
						"pinyin": "xiangshan",
						"pid": "948"
					},
					{
						"area_id": "315600",
						"title": "宁海县",
						"pinyin": "ninghai",
						"pid": "948"
					},
					{
						"area_id": "315400",
						"title": "余姚市",
						"pinyin": "yuyao",
						"pid": "948"
					},
					{
						"area_id": "315300",
						"title": "慈溪市",
						"pinyin": "cixi",
						"pid": "948"
					},
					{
						"area_id": "315500",
						"title": "奉化市",
						"pinyin": "fenghua",
						"pid": "948"
					}
				]
			},
			{
				"area_id": "325000",
				"title": "温州市",
				"pinyin": "wenzhou",
				"pid": "933",
				"child": [
					{
						"area_id": "325000",
						"title": "鹿城区",
						"pinyin": "lucheng",
						"pid": "960"
					},
					{
						"area_id": "325013",
						"title": "龙湾区",
						"pinyin": "longwan",
						"pid": "960"
					},
					{
						"area_id": "325005",
						"title": "瓯海区",
						"pinyin": "ouhai",
						"pid": "960"
					},
					{
						"area_id": "325700",
						"title": "洞头县",
						"pinyin": "dongtou",
						"pid": "960"
					},
					{
						"area_id": "325100",
						"title": "永嘉县",
						"pinyin": "yongjia",
						"pid": "960"
					},
					{
						"area_id": "325400",
						"title": "平阳县",
						"pinyin": "pingyang",
						"pid": "960"
					},
					{
						"area_id": "325800",
						"title": "苍南县",
						"pinyin": "cangnan",
						"pid": "960"
					},
					{
						"area_id": "325300",
						"title": "文成县",
						"pinyin": "wencheng",
						"pid": "960"
					},
					{
						"area_id": "325500",
						"title": "泰顺县",
						"pinyin": "taishun",
						"pid": "960"
					},
					{
						"area_id": "325200",
						"title": "瑞安市",
						"pinyin": "rui'an",
						"pid": "960"
					},
					{
						"area_id": "325600",
						"title": "乐清市",
						"pinyin": "yueqing",
						"pid": "960"
					}
				]
			},
			{
				"area_id": "314000",
				"title": "嘉兴市",
				"pinyin": "jiaxing",
				"pid": "933",
				"child": [
					{
						"area_id": "314051",
						"title": "南湖区",
						"pinyin": "nanhu",
						"pid": "972"
					},
					{
						"area_id": "314031",
						"title": "秀洲区",
						"pinyin": "xiuzhou",
						"pid": "972"
					},
					{
						"area_id": "314100",
						"title": "嘉善县",
						"pinyin": "jiashan",
						"pid": "972"
					},
					{
						"area_id": "314300",
						"title": "海盐县",
						"pinyin": "haiyan",
						"pid": "972"
					},
					{
						"area_id": "314400",
						"title": "海宁市",
						"pinyin": "haining",
						"pid": "972"
					},
					{
						"area_id": "314200",
						"title": "平湖市",
						"pinyin": "pinghu",
						"pid": "972"
					},
					{
						"area_id": "314500",
						"title": "桐乡市",
						"pinyin": "tongxiang",
						"pid": "972"
					}
				]
			},
			{
				"area_id": "313000",
				"title": "湖州市",
				"pinyin": "huzhou",
				"pid": "933",
				"child": [
					{
						"area_id": "313000",
						"title": "吴兴区",
						"pinyin": "wuxing",
						"pid": "980"
					},
					{
						"area_id": "313009",
						"title": "南浔区",
						"pinyin": "nanxun",
						"pid": "980"
					},
					{
						"area_id": "313200",
						"title": "德清县",
						"pinyin": "deqing",
						"pid": "980"
					},
					{
						"area_id": "313100",
						"title": "长兴县",
						"pinyin": "changxing",
						"pid": "980"
					},
					{
						"area_id": "313300",
						"title": "安吉县",
						"pinyin": "anji",
						"pid": "980"
					}
				]
			},
			{
				"area_id": "312000",
				"title": "绍兴市",
				"pinyin": "shaoxing",
				"pid": "933",
				"child": [
					{
						"area_id": "312000",
						"title": "越城区",
						"pinyin": "yuecheng",
						"pid": "986"
					},
					{
						"area_id": "312030",
						"title": "柯桥区",
						"pinyin": "keqiao",
						"pid": "986"
					},
					{
						"area_id": "312300",
						"title": "上虞区",
						"pinyin": "shangyu",
						"pid": "986"
					},
					{
						"area_id": "312500",
						"title": "新昌县",
						"pinyin": "xinchang",
						"pid": "986"
					},
					{
						"area_id": "311800",
						"title": "诸暨市",
						"pinyin": "zhuji",
						"pid": "986"
					},
					{
						"area_id": "312400",
						"title": "嵊州市",
						"pinyin": "shengzhou",
						"pid": "986"
					}
				]
			},
			{
				"area_id": "321000",
				"title": "金华市",
				"pinyin": "jinhua",
				"pid": "933",
				"child": [
					{
						"area_id": "321000",
						"title": "婺城区",
						"pinyin": "wucheng",
						"pid": "993"
					},
					{
						"area_id": "321000",
						"title": "金东区",
						"pinyin": "jindong",
						"pid": "993"
					},
					{
						"area_id": "321200",
						"title": "武义县",
						"pinyin": "wuyi",
						"pid": "993"
					},
					{
						"area_id": "322200",
						"title": "浦江县",
						"pinyin": "pujiang",
						"pid": "993"
					},
					{
						"area_id": "322300",
						"title": "磐安县",
						"pinyin": "pan'an",
						"pid": "993"
					},
					{
						"area_id": "321100",
						"title": "兰溪市",
						"pinyin": "lanxi",
						"pid": "993"
					},
					{
						"area_id": "322000",
						"title": "义乌市",
						"pinyin": "yiwu",
						"pid": "993"
					},
					{
						"area_id": "322100",
						"title": "东阳市",
						"pinyin": "dongyang",
						"pid": "993"
					},
					{
						"area_id": "321300",
						"title": "永康市",
						"pinyin": "yongkang",
						"pid": "993"
					}
				]
			},
			{
				"area_id": "324002",
				"title": "衢州市",
				"pinyin": "quzhou",
				"pid": "933",
				"child": [
					{
						"area_id": "324100",
						"title": "柯城区",
						"pinyin": "kecheng",
						"pid": "1003"
					},
					{
						"area_id": "324022",
						"title": "衢江区",
						"pinyin": "qujiang",
						"pid": "1003"
					},
					{
						"area_id": "324200",
						"title": "常山县",
						"pinyin": "changshan",
						"pid": "1003"
					},
					{
						"area_id": "324300",
						"title": "开化县",
						"pinyin": "kaihua",
						"pid": "1003"
					},
					{
						"area_id": "324400",
						"title": "龙游县",
						"pinyin": "longyou",
						"pid": "1003"
					},
					{
						"area_id": "324100",
						"title": "江山市",
						"pinyin": "jiangshan",
						"pid": "1003"
					}
				]
			},
			{
				"area_id": "316000",
				"title": "舟山市",
				"pinyin": "zhoushan",
				"pid": "933",
				"child": [
					{
						"area_id": "316000",
						"title": "定海区",
						"pinyin": "dinghai",
						"pid": "1010"
					},
					{
						"area_id": "316100",
						"title": "普陀区",
						"pinyin": "putuo",
						"pid": "1010"
					},
					{
						"area_id": "316200",
						"title": "岱山县",
						"pinyin": "daishan",
						"pid": "1010"
					},
					{
						"area_id": "202450",
						"title": "嵊泗县",
						"pinyin": "shengsi",
						"pid": "1010"
					}
				]
			},
			{
				"area_id": "318000",
				"title": "台州市",
				"pinyin": "taizhou",
				"pid": "933",
				"child": [
					{
						"area_id": "318000",
						"title": "椒江区",
						"pinyin": "jiaojiang",
						"pid": "1015"
					},
					{
						"area_id": "318020",
						"title": "黄岩区",
						"pinyin": "huangyan",
						"pid": "1015"
					},
					{
						"area_id": "318050",
						"title": "路桥区",
						"pinyin": "luqiao",
						"pid": "1015"
					},
					{
						"area_id": "317600",
						"title": "玉环县",
						"pinyin": "yuhuan",
						"pid": "1015"
					},
					{
						"area_id": "317100",
						"title": "三门县",
						"pinyin": "sanmen",
						"pid": "1015"
					},
					{
						"area_id": "317200",
						"title": "天台县",
						"pinyin": "tiantai",
						"pid": "1015"
					},
					{
						"area_id": "317300",
						"title": "仙居县",
						"pinyin": "xianju",
						"pid": "1015"
					},
					{
						"area_id": "317500",
						"title": "温岭市",
						"pinyin": "wenling",
						"pid": "1015"
					},
					{
						"area_id": "317000",
						"title": "临海市",
						"pinyin": "linhai",
						"pid": "1015"
					}
				]
			},
			{
				"area_id": "323000",
				"title": "丽水市",
				"pinyin": "lishui",
				"pid": "933",
				"child": [
					{
						"area_id": "323000",
						"title": "莲都区",
						"pinyin": "liandu",
						"pid": "1025"
					},
					{
						"area_id": "323900",
						"title": "青田县",
						"pinyin": "qingtian",
						"pid": "1025"
					},
					{
						"area_id": "321400",
						"title": "缙云县",
						"pinyin": "jinyun",
						"pid": "1025"
					},
					{
						"area_id": "323300",
						"title": "遂昌县",
						"pinyin": "suichang",
						"pid": "1025"
					},
					{
						"area_id": "323400",
						"title": "松阳县",
						"pinyin": "songyang",
						"pid": "1025"
					},
					{
						"area_id": "323600",
						"title": "云和县",
						"pinyin": "yunhe",
						"pid": "1025"
					},
					{
						"area_id": "323800",
						"title": "庆元县",
						"pinyin": "qingyuan",
						"pid": "1025"
					},
					{
						"area_id": "323500",
						"title": "景宁畲族自治县",
						"pinyin": "jingning",
						"pid": "1025"
					},
					{
						"area_id": "323700",
						"title": "龙泉市",
						"pinyin": "longquan",
						"pid": "1025"
					}
				]
			},
			{
				"area_id": "316000",
				"title": "舟山群岛新区",
				"pinyin": "zhoushan",
				"pid": "933",
				"child": [
					{
						"area_id": "316000",
						"title": "金塘岛",
						"pinyin": "jintang",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "六横岛",
						"pinyin": "liuheng",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "衢山岛",
						"pinyin": "qushan",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "舟山本岛西北部",
						"pinyin": "zhoushan",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "岱山岛西南部",
						"pinyin": "daishan",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "泗礁岛",
						"pinyin": "sijiao",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "朱家尖岛",
						"pinyin": "zhujiajian",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "洋山岛",
						"pinyin": "yangshan",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "长涂岛",
						"pinyin": "changtu",
						"pid": "1035"
					},
					{
						"area_id": "316000",
						"title": "虾峙岛",
						"pinyin": "xiazhi",
						"pid": "1035"
					}
				]
			}
		]
	},
	{
		"area_id": "230000",
		"title": "安徽省",
		"pinyin": "anhui",
		"pid": "0",
		"child": [
			{
				"area_id": "230001",
				"title": "合肥市",
				"pinyin": "hefei",
				"pid": "1046",
				"child": [
					{
						"area_id": "230011",
						"title": "瑶海区",
						"pinyin": "yaohai",
						"pid": "1047"
					},
					{
						"area_id": "230001",
						"title": "庐阳区",
						"pinyin": "luyang",
						"pid": "1047"
					},
					{
						"area_id": "230031",
						"title": "蜀山区",
						"pinyin": "shushan",
						"pid": "1047"
					},
					{
						"area_id": "230041",
						"title": "包河区",
						"pinyin": "baohe",
						"pid": "1047"
					},
					{
						"area_id": "231100",
						"title": "长丰县",
						"pinyin": "changfeng",
						"pid": "1047"
					},
					{
						"area_id": "231600",
						"title": "肥东县",
						"pinyin": "feidong",
						"pid": "1047"
					},
					{
						"area_id": "231200",
						"title": "肥西县",
						"pinyin": "feixi",
						"pid": "1047"
					},
					{
						"area_id": "231500",
						"title": "庐江县",
						"pinyin": "lujiang",
						"pid": "1047"
					},
					{
						"area_id": "238000",
						"title": "巢湖市",
						"pinyin": "chaohu",
						"pid": "1047"
					}
				]
			},
			{
				"area_id": "241000",
				"title": "芜湖市",
				"pinyin": "wuhu",
				"pid": "1046",
				"child": [
					{
						"area_id": "241000",
						"title": "镜湖区",
						"pinyin": "jinghu",
						"pid": "1057"
					},
					{
						"area_id": "241000",
						"title": "弋江区",
						"pinyin": "yijiang",
						"pid": "1057"
					},
					{
						"area_id": "241000",
						"title": "鸠江区",
						"pinyin": "jiujiang",
						"pid": "1057"
					},
					{
						"area_id": "241000",
						"title": "三山区",
						"pinyin": "sanshan",
						"pid": "1057"
					},
					{
						"area_id": "241100",
						"title": "芜湖县",
						"pinyin": "wuhu",
						"pid": "1057"
					},
					{
						"area_id": "241200",
						"title": "繁昌县",
						"pinyin": "fanchang",
						"pid": "1057"
					},
					{
						"area_id": "242400",
						"title": "南陵县",
						"pinyin": "nanling",
						"pid": "1057"
					},
					{
						"area_id": "238300",
						"title": "无为县",
						"pinyin": "wuwei",
						"pid": "1057"
					}
				]
			},
			{
				"area_id": "233000",
				"title": "蚌埠市",
				"pinyin": "bengbu",
				"pid": "1046",
				"child": [
					{
						"area_id": "233000",
						"title": "龙子湖区",
						"pinyin": "longzihu",
						"pid": "1066"
					},
					{
						"area_id": "233000",
						"title": "蚌山区",
						"pinyin": "bengshan",
						"pid": "1066"
					},
					{
						"area_id": "233010",
						"title": "禹会区",
						"pinyin": "yuhui",
						"pid": "1066"
					},
					{
						"area_id": "233002",
						"title": "淮上区",
						"pinyin": "huaishang",
						"pid": "1066"
					},
					{
						"area_id": "233400",
						"title": "怀远县",
						"pinyin": "huaiyuan",
						"pid": "1066"
					},
					{
						"area_id": "233300",
						"title": "五河县",
						"pinyin": "wuhe",
						"pid": "1066"
					},
					{
						"area_id": "233700",
						"title": "固镇县",
						"pinyin": "guzhen",
						"pid": "1066"
					}
				]
			},
			{
				"area_id": "232001",
				"title": "淮南市",
				"pinyin": "huainan",
				"pid": "1046",
				"child": [
					{
						"area_id": "232033",
						"title": "大通区",
						"pinyin": "datong",
						"pid": "1074"
					},
					{
						"area_id": "232000",
						"title": "田家庵区",
						"pinyin": "tianjiaan",
						"pid": "1074"
					},
					{
						"area_id": "232052",
						"title": "谢家集区",
						"pinyin": "xiejiaji",
						"pid": "1074"
					},
					{
						"area_id": "232072",
						"title": "八公山区",
						"pinyin": "bagongshan",
						"pid": "1074"
					},
					{
						"area_id": "232082",
						"title": "潘集区",
						"pinyin": "panji",
						"pid": "1074"
					},
					{
						"area_id": "232100",
						"title": "凤台县",
						"pinyin": "fengtai",
						"pid": "1074"
					}
				]
			},
			{
				"area_id": "243001",
				"title": "马鞍山市",
				"pinyin": "ma'anshan",
				"pid": "1046",
				"child": [
					{
						"area_id": "243000",
						"title": "花山区",
						"pinyin": "huashan",
						"pid": "1081"
					},
					{
						"area_id": "243071",
						"title": "雨山区",
						"pinyin": "yushan",
						"pid": "1081"
					},
					{
						"area_id": "243131",
						"title": "博望区",
						"pinyin": "bowang",
						"pid": "1081"
					},
					{
						"area_id": "243100",
						"title": "当涂县",
						"pinyin": "dangtu",
						"pid": "1081"
					},
					{
						"area_id": "238100",
						"title": "含山县",
						"pinyin": "hanshan",
						"pid": "1081"
					},
					{
						"area_id": "238200",
						"title": "和县",
						"pinyin": "hexian",
						"pid": "1081"
					}
				]
			},
			{
				"area_id": "235000",
				"title": "淮北市",
				"pinyin": "huaibei",
				"pid": "1046",
				"child": [
					{
						"area_id": "235000",
						"title": "杜集区",
						"pinyin": "duji",
						"pid": "1088"
					},
					{
						"area_id": "235000",
						"title": "相山区",
						"pinyin": "xiangshan",
						"pid": "1088"
					},
					{
						"area_id": "235000",
						"title": "烈山区",
						"pinyin": "lieshan",
						"pid": "1088"
					},
					{
						"area_id": "235100",
						"title": "濉溪县",
						"pinyin": "suixi",
						"pid": "1088"
					}
				]
			},
			{
				"area_id": "244000",
				"title": "铜陵市",
				"pinyin": "tongling",
				"pid": "1046",
				"child": [
					{
						"area_id": "244000",
						"title": "铜官山区",
						"pinyin": "tongguanshan",
						"pid": "1093"
					},
					{
						"area_id": "244000",
						"title": "狮子山区",
						"pinyin": "shizishan",
						"pid": "1093"
					},
					{
						"area_id": "244000",
						"title": "郊区",
						"pinyin": "jiaoqu",
						"pid": "1093"
					},
					{
						"area_id": "244100",
						"title": "铜陵县",
						"pinyin": "tongling",
						"pid": "1093"
					}
				]
			},
			{
				"area_id": "246001",
				"title": "安庆市",
				"pinyin": "anqing",
				"pid": "1046",
				"child": [
					{
						"area_id": "246001",
						"title": "迎江区",
						"pinyin": "yingjiang",
						"pid": "1098"
					},
					{
						"area_id": "246002",
						"title": "大观区",
						"pinyin": "daguan",
						"pid": "1098"
					},
					{
						"area_id": "246003",
						"title": "宜秀区",
						"pinyin": "yixiu",
						"pid": "1098"
					},
					{
						"area_id": "246100",
						"title": "怀宁县",
						"pinyin": "huaining",
						"pid": "1098"
					},
					{
						"area_id": "246700",
						"title": "枞阳县",
						"pinyin": "zongyang",
						"pid": "1098"
					},
					{
						"area_id": "246300",
						"title": "潜山县",
						"pinyin": "qianshan",
						"pid": "1098"
					},
					{
						"area_id": "246400",
						"title": "太湖县",
						"pinyin": "taihu",
						"pid": "1098"
					},
					{
						"area_id": "246500",
						"title": "宿松县",
						"pinyin": "susong",
						"pid": "1098"
					},
					{
						"area_id": "246200",
						"title": "望江县",
						"pinyin": "wangjiang",
						"pid": "1098"
					},
					{
						"area_id": "246600",
						"title": "岳西县",
						"pinyin": "yuexi",
						"pid": "1098"
					},
					{
						"area_id": "231400",
						"title": "桐城市",
						"pinyin": "tongcheng",
						"pid": "1098"
					}
				]
			},
			{
				"area_id": "245000",
				"title": "黄山市",
				"pinyin": "huangshan",
				"pid": "1046",
				"child": [
					{
						"area_id": "245000",
						"title": "屯溪区",
						"pinyin": "tunxi",
						"pid": "1110"
					},
					{
						"area_id": "242700",
						"title": "黄山区",
						"pinyin": "huangshan",
						"pid": "1110"
					},
					{
						"area_id": "245061",
						"title": "徽州区",
						"pinyin": "huizhou",
						"pid": "1110"
					},
					{
						"area_id": "245200",
						"title": "歙县",
						"pinyin": "shexian",
						"pid": "1110"
					},
					{
						"area_id": "245400",
						"title": "休宁县",
						"pinyin": "xiuning",
						"pid": "1110"
					},
					{
						"area_id": "245500",
						"title": "黟县",
						"pinyin": "yixian",
						"pid": "1110"
					},
					{
						"area_id": "245600",
						"title": "祁门县",
						"pinyin": "qimen",
						"pid": "1110"
					}
				]
			},
			{
				"area_id": "239000",
				"title": "滁州市",
				"pinyin": "chuzhou",
				"pid": "1046",
				"child": [
					{
						"area_id": "239000",
						"title": "琅琊区",
						"pinyin": "langya",
						"pid": "1118"
					},
					{
						"area_id": "239000",
						"title": "南谯区",
						"pinyin": "nanqiao",
						"pid": "1118"
					},
					{
						"area_id": "239200",
						"title": "来安县",
						"pinyin": "lai'an",
						"pid": "1118"
					},
					{
						"area_id": "239500",
						"title": "全椒县",
						"pinyin": "quanjiao",
						"pid": "1118"
					},
					{
						"area_id": "233200",
						"title": "定远县",
						"pinyin": "dingyuan",
						"pid": "1118"
					},
					{
						"area_id": "233100",
						"title": "凤阳县",
						"pinyin": "fengyang",
						"pid": "1118"
					},
					{
						"area_id": "239300",
						"title": "天长市",
						"pinyin": "tianchang",
						"pid": "1118"
					},
					{
						"area_id": "239400",
						"title": "明光市",
						"pinyin": "mingguang",
						"pid": "1118"
					}
				]
			},
			{
				"area_id": "236033",
				"title": "阜阳市",
				"pinyin": "fuyang",
				"pid": "1046",
				"child": [
					{
						"area_id": "236001",
						"title": "颍州区",
						"pinyin": "yingzhou",
						"pid": "1127"
					},
					{
						"area_id": "236058",
						"title": "颍东区",
						"pinyin": "yingdong",
						"pid": "1127"
					},
					{
						"area_id": "236045",
						"title": "颍泉区",
						"pinyin": "yingquan",
						"pid": "1127"
					},
					{
						"area_id": "236400",
						"title": "临泉县",
						"pinyin": "linquan",
						"pid": "1127"
					},
					{
						"area_id": "236600",
						"title": "太和县",
						"pinyin": "taihe",
						"pid": "1127"
					},
					{
						"area_id": "236300",
						"title": "阜南县",
						"pinyin": "funan",
						"pid": "1127"
					},
					{
						"area_id": "236200",
						"title": "颍上县",
						"pinyin": "yingshang",
						"pid": "1127"
					},
					{
						"area_id": "236500",
						"title": "界首市",
						"pinyin": "jieshou",
						"pid": "1127"
					}
				]
			},
			{
				"area_id": "234000",
				"title": "宿州市",
				"pinyin": "suzhou",
				"pid": "1046",
				"child": [
					{
						"area_id": "234000",
						"title": "埇桥区",
						"pinyin": "yongqiao",
						"pid": "1136"
					},
					{
						"area_id": "235300",
						"title": "砀山县",
						"pinyin": "dangshan",
						"pid": "1136"
					},
					{
						"area_id": "235200",
						"title": "萧县",
						"pinyin": "xiaoxian",
						"pid": "1136"
					},
					{
						"area_id": "234200",
						"title": "灵璧县",
						"pinyin": "lingbi",
						"pid": "1136"
					},
					{
						"area_id": "234300",
						"title": "泗县",
						"pinyin": "sixian",
						"pid": "1136"
					}
				]
			},
			{
				"area_id": "237000",
				"title": "六安市",
				"pinyin": "lu'an",
				"pid": "1046",
				"child": [
					{
						"area_id": "237005",
						"title": "金安区",
						"pinyin": "jin'an",
						"pid": "1142"
					},
					{
						"area_id": "237010",
						"title": "裕安区",
						"pinyin": "yu'an",
						"pid": "1142"
					},
					{
						"area_id": "232200",
						"title": "寿县",
						"pinyin": "shouxian",
						"pid": "1142"
					},
					{
						"area_id": "237400",
						"title": "霍邱县",
						"pinyin": "huoqiu",
						"pid": "1142"
					},
					{
						"area_id": "231300",
						"title": "舒城县",
						"pinyin": "shucheng",
						"pid": "1142"
					},
					{
						"area_id": "237300",
						"title": "金寨县",
						"pinyin": "jinzhai",
						"pid": "1142"
					},
					{
						"area_id": "237200",
						"title": "霍山县",
						"pinyin": "huoshan",
						"pid": "1142"
					}
				]
			},
			{
				"area_id": "236802",
				"title": "亳州市",
				"pinyin": "bozhou",
				"pid": "1046",
				"child": [
					{
						"area_id": "236800",
						"title": "谯城区",
						"pinyin": "qiaocheng",
						"pid": "1150"
					},
					{
						"area_id": "233600",
						"title": "涡阳县",
						"pinyin": "guoyang",
						"pid": "1150"
					},
					{
						"area_id": "233500",
						"title": "蒙城县",
						"pinyin": "mengcheng",
						"pid": "1150"
					},
					{
						"area_id": "236700",
						"title": "利辛县",
						"pinyin": "lixin",
						"pid": "1150"
					}
				]
			},
			{
				"area_id": "247100",
				"title": "池州市",
				"pinyin": "chizhou",
				"pid": "1046",
				"child": [
					{
						"area_id": "247100",
						"title": "贵池区",
						"pinyin": "guichi",
						"pid": "1155"
					},
					{
						"area_id": "247200",
						"title": "东至县",
						"pinyin": "dongzhi",
						"pid": "1155"
					},
					{
						"area_id": "245100",
						"title": "石台县",
						"pinyin": "shitai",
						"pid": "1155"
					},
					{
						"area_id": "242800",
						"title": "青阳县",
						"pinyin": "qingyang",
						"pid": "1155"
					}
				]
			},
			{
				"area_id": "242000",
				"title": "宣城市",
				"pinyin": "xuancheng",
				"pid": "1046",
				"child": [
					{
						"area_id": "242000",
						"title": "宣州区",
						"pinyin": "xuanzhou",
						"pid": "1160"
					},
					{
						"area_id": "242100",
						"title": "郎溪县",
						"pinyin": "langxi",
						"pid": "1160"
					},
					{
						"area_id": "242200",
						"title": "广德县",
						"pinyin": "guangde",
						"pid": "1160"
					},
					{
						"area_id": "242500",
						"title": "泾县",
						"pinyin": "jingxian",
						"pid": "1160"
					},
					{
						"area_id": "245300",
						"title": "绩溪县",
						"pinyin": "jixi",
						"pid": "1160"
					},
					{
						"area_id": "242600",
						"title": "旌德县",
						"pinyin": "jingde",
						"pid": "1160"
					},
					{
						"area_id": "242300",
						"title": "宁国市",
						"pinyin": "ningguo",
						"pid": "1160"
					}
				]
			}
		]
	},
	{
		"area_id": "350000",
		"title": "福建省",
		"pinyin": "fujian",
		"pid": "0",
		"child": [
			{
				"area_id": "350001",
				"title": "福州市",
				"pinyin": "fuzhou",
				"pid": "1168",
				"child": [
					{
						"area_id": "350001",
						"title": "鼓楼区",
						"pinyin": "gulou",
						"pid": "1169"
					},
					{
						"area_id": "350004",
						"title": "台江区",
						"pinyin": "taijiang",
						"pid": "1169"
					},
					{
						"area_id": "350007",
						"title": "仓山区",
						"pinyin": "cangshan",
						"pid": "1169"
					},
					{
						"area_id": "350015",
						"title": "马尾区",
						"pinyin": "mawei",
						"pid": "1169"
					},
					{
						"area_id": "350011",
						"title": "晋安区",
						"pinyin": "jin'an",
						"pid": "1169"
					},
					{
						"area_id": "350100",
						"title": "闽侯县",
						"pinyin": "minhou",
						"pid": "1169"
					},
					{
						"area_id": "350500",
						"title": "连江县",
						"pinyin": "lianjiang",
						"pid": "1169"
					},
					{
						"area_id": "350600",
						"title": "罗源县",
						"pinyin": "luoyuan",
						"pid": "1169"
					},
					{
						"area_id": "350800",
						"title": "闽清县",
						"pinyin": "minqing",
						"pid": "1169"
					},
					{
						"area_id": "350700",
						"title": "永泰县",
						"pinyin": "yongtai",
						"pid": "1169"
					},
					{
						"area_id": "350400",
						"title": "平潭县",
						"pinyin": "pingtan",
						"pid": "1169"
					},
					{
						"area_id": "350300",
						"title": "福清市",
						"pinyin": "fuqing",
						"pid": "1169"
					},
					{
						"area_id": "350200",
						"title": "长乐市",
						"pinyin": "changle",
						"pid": "1169"
					}
				]
			},
			{
				"area_id": "361003",
				"title": "厦门市",
				"pinyin": "xiamen",
				"pid": "1168",
				"child": [
					{
						"area_id": "361001",
						"title": "思明区",
						"pinyin": "siming",
						"pid": "1183"
					},
					{
						"area_id": "361026",
						"title": "海沧区",
						"pinyin": "haicang",
						"pid": "1183"
					},
					{
						"area_id": "361006",
						"title": "湖里区",
						"pinyin": "huli",
						"pid": "1183"
					},
					{
						"area_id": "361021",
						"title": "集美区",
						"pinyin": "jimei",
						"pid": "1183"
					},
					{
						"area_id": "361100",
						"title": "同安区",
						"pinyin": "tong'an",
						"pid": "1183"
					},
					{
						"area_id": "361101",
						"title": "翔安区",
						"pinyin": "xiang'an",
						"pid": "1183"
					}
				]
			},
			{
				"area_id": "351100",
				"title": "莆田市",
				"pinyin": "putian",
				"pid": "1168",
				"child": [
					{
						"area_id": "351100",
						"title": "城厢区",
						"pinyin": "chengxiang",
						"pid": "1190"
					},
					{
						"area_id": "351111",
						"title": "涵江区",
						"pinyin": "hanjiang",
						"pid": "1190"
					},
					{
						"area_id": "351100",
						"title": "荔城区",
						"pinyin": "licheng",
						"pid": "1190"
					},
					{
						"area_id": "351152",
						"title": "秀屿区",
						"pinyin": "xiuyu",
						"pid": "1190"
					},
					{
						"area_id": "351200",
						"title": "仙游县",
						"pinyin": "xianyou",
						"pid": "1190"
					}
				]
			},
			{
				"area_id": "365000",
				"title": "三明市",
				"pinyin": "sanming",
				"pid": "1168",
				"child": [
					{
						"area_id": "365000",
						"title": "梅列区",
						"pinyin": "meilie",
						"pid": "1196"
					},
					{
						"area_id": "365001",
						"title": "三元区",
						"pinyin": "sanyuan",
						"pid": "1196"
					},
					{
						"area_id": "365200",
						"title": "明溪县",
						"pinyin": "mingxi",
						"pid": "1196"
					},
					{
						"area_id": "365300",
						"title": "清流县",
						"pinyin": "qingliu",
						"pid": "1196"
					},
					{
						"area_id": "365400",
						"title": "宁化县",
						"pinyin": "ninghua",
						"pid": "1196"
					},
					{
						"area_id": "366100",
						"title": "大田县",
						"pinyin": "datian",
						"pid": "1196"
					},
					{
						"area_id": "365100",
						"title": "尤溪县",
						"pinyin": "youxi",
						"pid": "1196"
					},
					{
						"area_id": "365500",
						"title": "沙县",
						"pinyin": "shaxian",
						"pid": "1196"
					},
					{
						"area_id": "353300",
						"title": "将乐县",
						"pinyin": "jiangle",
						"pid": "1196"
					},
					{
						"area_id": "354400",
						"title": "泰宁县",
						"pinyin": "taining",
						"pid": "1196"
					},
					{
						"area_id": "354500",
						"title": "建宁县",
						"pinyin": "jianning",
						"pid": "1196"
					},
					{
						"area_id": "366000",
						"title": "永安市",
						"pinyin": "yong'an",
						"pid": "1196"
					}
				]
			},
			{
				"area_id": "362000",
				"title": "泉州市",
				"pinyin": "quanzhou",
				"pid": "1168",
				"child": [
					{
						"area_id": "362000",
						"title": "鲤城区",
						"pinyin": "licheng",
						"pid": "1209"
					},
					{
						"area_id": "362000",
						"title": "丰泽区",
						"pinyin": "fengze",
						"pid": "1209"
					},
					{
						"area_id": "362011",
						"title": "洛江区",
						"pinyin": "luojiang",
						"pid": "1209"
					},
					{
						"area_id": "362114",
						"title": "泉港区",
						"pinyin": "quangang",
						"pid": "1209"
					},
					{
						"area_id": "362100",
						"title": "惠安县",
						"pinyin": "hui'an",
						"pid": "1209"
					},
					{
						"area_id": "362400",
						"title": "安溪县",
						"pinyin": "anxi",
						"pid": "1209"
					},
					{
						"area_id": "362600",
						"title": "永春县",
						"pinyin": "yongchun",
						"pid": "1209"
					},
					{
						"area_id": "362500",
						"title": "德化县",
						"pinyin": "dehua",
						"pid": "1209"
					},
					{
						"area_id": "",
						"title": "金门县",
						"pinyin": "jinmen",
						"pid": "1209"
					},
					{
						"area_id": "362700",
						"title": "石狮市",
						"pinyin": "shishi",
						"pid": "1209"
					},
					{
						"area_id": "362200",
						"title": "晋江市",
						"pinyin": "jinjiang",
						"pid": "1209"
					},
					{
						"area_id": "362300",
						"title": "南安市",
						"pinyin": "nan'an",
						"pid": "1209"
					}
				]
			},
			{
				"area_id": "363005",
				"title": "漳州市",
				"pinyin": "zhangzhou",
				"pid": "1168",
				"child": [
					{
						"area_id": "363000",
						"title": "芗城区",
						"pinyin": "xiangcheng",
						"pid": "1222"
					},
					{
						"area_id": "363005",
						"title": "龙文区",
						"pinyin": "longwen",
						"pid": "1222"
					},
					{
						"area_id": "363300",
						"title": "云霄县",
						"pinyin": "yunxiao",
						"pid": "1222"
					},
					{
						"area_id": "363200",
						"title": "漳浦县",
						"pinyin": "zhangpu",
						"pid": "1222"
					},
					{
						"area_id": "363500",
						"title": "诏安县",
						"pinyin": "zhao'an",
						"pid": "1222"
					},
					{
						"area_id": "363900",
						"title": "长泰县",
						"pinyin": "changtai",
						"pid": "1222"
					},
					{
						"area_id": "363400",
						"title": "东山县",
						"pinyin": "dongshan",
						"pid": "1222"
					},
					{
						"area_id": "363600",
						"title": "南靖县",
						"pinyin": "nanjing",
						"pid": "1222"
					},
					{
						"area_id": "363700",
						"title": "平和县",
						"pinyin": "pinghe",
						"pid": "1222"
					},
					{
						"area_id": "363800",
						"title": "华安县",
						"pinyin": "hua'an",
						"pid": "1222"
					},
					{
						"area_id": "363100",
						"title": "龙海市",
						"pinyin": "longhai",
						"pid": "1222"
					}
				]
			},
			{
				"area_id": "353000",
				"title": "南平市",
				"pinyin": "nanping",
				"pid": "1168",
				"child": [
					{
						"area_id": "353000",
						"title": "延平区",
						"pinyin": "yanping",
						"pid": "1234"
					},
					{
						"area_id": "354200",
						"title": "建阳区",
						"pinyin": "jianyang",
						"pid": "1234"
					},
					{
						"area_id": "353200",
						"title": "顺昌县",
						"pinyin": "shunchang",
						"pid": "1234"
					},
					{
						"area_id": "353400",
						"title": "浦城县",
						"pinyin": "pucheng",
						"pid": "1234"
					},
					{
						"area_id": "354100",
						"title": "光泽县",
						"pinyin": "guangze",
						"pid": "1234"
					},
					{
						"area_id": "353500",
						"title": "松溪县",
						"pinyin": "songxi",
						"pid": "1234"
					},
					{
						"area_id": "353600",
						"title": "政和县",
						"pinyin": "zhenghe",
						"pid": "1234"
					},
					{
						"area_id": "354000",
						"title": "邵武市",
						"pinyin": "shaowu",
						"pid": "1234"
					},
					{
						"area_id": "354300",
						"title": "武夷山市",
						"pinyin": "wuyishan",
						"pid": "1234"
					},
					{
						"area_id": "353100",
						"title": "建瓯市",
						"pinyin": "jianou",
						"pid": "1234"
					}
				]
			},
			{
				"area_id": "364000",
				"title": "龙岩市",
				"pinyin": "longyan",
				"pid": "1168",
				"child": [
					{
						"area_id": "364000",
						"title": "新罗区",
						"pinyin": "xinluo",
						"pid": "1245"
					},
					{
						"area_id": "366300",
						"title": "长汀县",
						"pinyin": "changting",
						"pid": "1245"
					},
					{
						"area_id": "364100",
						"title": "永定区",
						"pinyin": "yongding",
						"pid": "1245"
					},
					{
						"area_id": "364200",
						"title": "上杭县",
						"pinyin": "shanghang",
						"pid": "1245"
					},
					{
						"area_id": "364300",
						"title": "武平县",
						"pinyin": "wuping",
						"pid": "1245"
					},
					{
						"area_id": "366200",
						"title": "连城县",
						"pinyin": "liancheng",
						"pid": "1245"
					},
					{
						"area_id": "364400",
						"title": "漳平市",
						"pinyin": "zhangping",
						"pid": "1245"
					}
				]
			},
			{
				"area_id": "352100",
				"title": "宁德市",
				"pinyin": "ningde",
				"pid": "1168",
				"child": [
					{
						"area_id": "352100",
						"title": "蕉城区",
						"pinyin": "jiaocheng",
						"pid": "1253"
					},
					{
						"area_id": "355100",
						"title": "霞浦县",
						"pinyin": "xiapu",
						"pid": "1253"
					},
					{
						"area_id": "352200",
						"title": "古田县",
						"pinyin": "gutian",
						"pid": "1253"
					},
					{
						"area_id": "352300",
						"title": "屏南县",
						"pinyin": "pingnan",
						"pid": "1253"
					},
					{
						"area_id": "355500",
						"title": "寿宁县",
						"pinyin": "shouning",
						"pid": "1253"
					},
					{
						"area_id": "355400",
						"title": "周宁县",
						"pinyin": "zhouning",
						"pid": "1253"
					},
					{
						"area_id": "355300",
						"title": "柘荣县",
						"pinyin": "zherong",
						"pid": "1253"
					},
					{
						"area_id": "355000",
						"title": "福安市",
						"pinyin": "fu'an",
						"pid": "1253"
					},
					{
						"area_id": "355200",
						"title": "福鼎市",
						"pinyin": "fuding",
						"pid": "1253"
					}
				]
			}
		]
	},
	{
		"area_id": "330000",
		"title": "江西省",
		"pinyin": "jiangxi",
		"pid": "0",
		"child": [
			{
				"area_id": "330008",
				"title": "南昌市",
				"pinyin": "nanchang",
				"pid": "1263",
				"child": [
					{
						"area_id": "330006",
						"title": "东湖区",
						"pinyin": "donghu",
						"pid": "1264"
					},
					{
						"area_id": "330009",
						"title": "西湖区",
						"pinyin": "xihu",
						"pid": "1264"
					},
					{
						"area_id": "330001",
						"title": "青云谱区",
						"pinyin": "qingyunpu",
						"pid": "1264"
					},
					{
						"area_id": "330004",
						"title": "湾里区",
						"pinyin": "wanli",
						"pid": "1264"
					},
					{
						"area_id": "330029",
						"title": "青山湖区",
						"pinyin": "qingshanhu",
						"pid": "1264"
					},
					{
						"area_id": "330200",
						"title": "南昌县",
						"pinyin": "nanchang",
						"pid": "1264"
					},
					{
						"area_id": "330100",
						"title": "新建县",
						"pinyin": "xinjian",
						"pid": "1264"
					},
					{
						"area_id": "330500",
						"title": "安义县",
						"pinyin": "anyi",
						"pid": "1264"
					},
					{
						"area_id": "331700",
						"title": "进贤县",
						"pinyin": "jinxian",
						"pid": "1264"
					}
				]
			},
			{
				"area_id": "333000",
				"title": "景德镇市",
				"pinyin": "jingdezhen",
				"pid": "1263",
				"child": [
					{
						"area_id": "333000",
						"title": "昌江区",
						"pinyin": "changjiang",
						"pid": "1274"
					},
					{
						"area_id": "333000",
						"title": "珠山区",
						"pinyin": "zhushan",
						"pid": "1274"
					},
					{
						"area_id": "333400",
						"title": "浮梁县",
						"pinyin": "fuliang",
						"pid": "1274"
					},
					{
						"area_id": "333300",
						"title": "乐平市",
						"pinyin": "leping",
						"pid": "1274"
					}
				]
			},
			{
				"area_id": "337000",
				"title": "萍乡市",
				"pinyin": "pingxiang",
				"pid": "1263",
				"child": [
					{
						"area_id": "337000",
						"title": "安源区",
						"pinyin": "anyuan",
						"pid": "1279"
					},
					{
						"area_id": "337016",
						"title": "湘东区",
						"pinyin": "xiangdong",
						"pid": "1279"
					},
					{
						"area_id": "337100",
						"title": "莲花县",
						"pinyin": "lianhua",
						"pid": "1279"
					},
					{
						"area_id": "337009",
						"title": "上栗县",
						"pinyin": "shangli",
						"pid": "1279"
					},
					{
						"area_id": "337053",
						"title": "芦溪县",
						"pinyin": "luxi",
						"pid": "1279"
					}
				]
			},
			{
				"area_id": "332000",
				"title": "九江市",
				"pinyin": "jiujiang",
				"pid": "1263",
				"child": [
					{
						"area_id": "332005",
						"title": "庐山区",
						"pinyin": "lushan",
						"pid": "1285"
					},
					{
						"area_id": "332000",
						"title": "浔阳区",
						"pinyin": "xunyang",
						"pid": "1285"
					},
					{
						"area_id": "332100",
						"title": "九江县",
						"pinyin": "jiujiang",
						"pid": "1285"
					},
					{
						"area_id": "332300",
						"title": "武宁县",
						"pinyin": "wuning",
						"pid": "1285"
					},
					{
						"area_id": "332400",
						"title": "修水县",
						"pinyin": "xiushui",
						"pid": "1285"
					},
					{
						"area_id": "330300",
						"title": "永修县",
						"pinyin": "yongxiu",
						"pid": "1285"
					},
					{
						"area_id": "330400",
						"title": "德安县",
						"pinyin": "de'an",
						"pid": "1285"
					},
					{
						"area_id": "332800",
						"title": "星子县",
						"pinyin": "xingzi",
						"pid": "1285"
					},
					{
						"area_id": "332600",
						"title": "都昌县",
						"pinyin": "duchang",
						"pid": "1285"
					},
					{
						"area_id": "332500",
						"title": "湖口县",
						"pinyin": "hukou",
						"pid": "1285"
					},
					{
						"area_id": "332700",
						"title": "彭泽县",
						"pinyin": "pengze",
						"pid": "1285"
					},
					{
						"area_id": "332200",
						"title": "瑞昌市",
						"pinyin": "ruichang",
						"pid": "1285"
					},
					{
						"area_id": "332020",
						"title": "共青城市",
						"pinyin": "gongqingcheng",
						"pid": "1285"
					}
				]
			},
			{
				"area_id": "338025",
				"title": "新余市",
				"pinyin": "xinyu",
				"pid": "1263",
				"child": [
					{
						"area_id": "338025",
						"title": "渝水区",
						"pinyin": "yushui",
						"pid": "1299"
					},
					{
						"area_id": "336600",
						"title": "分宜县",
						"pinyin": "fenyi",
						"pid": "1299"
					}
				]
			},
			{
				"area_id": "335000",
				"title": "鹰潭市",
				"pinyin": "yingtan",
				"pid": "1263",
				"child": [
					{
						"area_id": "335000",
						"title": "月湖区",
						"pinyin": "yuehu",
						"pid": "1302"
					},
					{
						"area_id": "335200",
						"title": "余江县",
						"pinyin": "yujiang",
						"pid": "1302"
					},
					{
						"area_id": "335400",
						"title": "贵溪市",
						"pinyin": "guixi",
						"pid": "1302"
					}
				]
			},
			{
				"area_id": "341000",
				"title": "赣州市",
				"pinyin": "ganzhou",
				"pid": "1263",
				"child": [
					{
						"area_id": "341000",
						"title": "章贡区",
						"pinyin": "zhanggong",
						"pid": "1306"
					},
					{
						"area_id": "341400",
						"title": "南康区",
						"pinyin": "nankang",
						"pid": "1306"
					},
					{
						"area_id": "341100",
						"title": "赣县",
						"pinyin": "ganxian",
						"pid": "1306"
					},
					{
						"area_id": "341600",
						"title": "信丰县",
						"pinyin": "xinfeng",
						"pid": "1306"
					},
					{
						"area_id": "341500",
						"title": "大余县",
						"pinyin": "dayu",
						"pid": "1306"
					},
					{
						"area_id": "341200",
						"title": "上犹县",
						"pinyin": "shangyou",
						"pid": "1306"
					},
					{
						"area_id": "341300",
						"title": "崇义县",
						"pinyin": "chongyi",
						"pid": "1306"
					},
					{
						"area_id": "342100",
						"title": "安远县",
						"pinyin": "anyuan",
						"pid": "1306"
					},
					{
						"area_id": "341700",
						"title": "龙南县",
						"pinyin": "longnan",
						"pid": "1306"
					},
					{
						"area_id": "341900",
						"title": "定南县",
						"pinyin": "dingnan",
						"pid": "1306"
					},
					{
						"area_id": "341800",
						"title": "全南县",
						"pinyin": "quannan",
						"pid": "1306"
					},
					{
						"area_id": "342800",
						"title": "宁都县",
						"pinyin": "ningdu",
						"pid": "1306"
					},
					{
						"area_id": "342300",
						"title": "于都县",
						"pinyin": "yudu",
						"pid": "1306"
					},
					{
						"area_id": "342400",
						"title": "兴国县",
						"pinyin": "xingguo",
						"pid": "1306"
					},
					{
						"area_id": "342600",
						"title": "会昌县",
						"pinyin": "huichang",
						"pid": "1306"
					},
					{
						"area_id": "342200",
						"title": "寻乌县",
						"pinyin": "xunwu",
						"pid": "1306"
					},
					{
						"area_id": "342700",
						"title": "石城县",
						"pinyin": "shicheng",
						"pid": "1306"
					},
					{
						"area_id": "342500",
						"title": "瑞金市",
						"pinyin": "ruijin",
						"pid": "1306"
					}
				]
			},
			{
				"area_id": "343000",
				"title": "吉安市",
				"pinyin": "ji'an",
				"pid": "1263",
				"child": [
					{
						"area_id": "343000",
						"title": "吉州区",
						"pinyin": "jizhou",
						"pid": "1325"
					},
					{
						"area_id": "343009",
						"title": "青原区",
						"pinyin": "qingyuan",
						"pid": "1325"
					},
					{
						"area_id": "343100",
						"title": "吉安县",
						"pinyin": "ji'an",
						"pid": "1325"
					},
					{
						"area_id": "331600",
						"title": "吉水县",
						"pinyin": "jishui",
						"pid": "1325"
					},
					{
						"area_id": "331409",
						"title": "峡江县",
						"pinyin": "xiajiang",
						"pid": "1325"
					},
					{
						"area_id": "331300",
						"title": "新干县",
						"pinyin": "xingan",
						"pid": "1325"
					},
					{
						"area_id": "331500",
						"title": "永丰县",
						"pinyin": "yongfeng",
						"pid": "1325"
					},
					{
						"area_id": "343700",
						"title": "泰和县",
						"pinyin": "taihe",
						"pid": "1325"
					},
					{
						"area_id": "343900",
						"title": "遂川县",
						"pinyin": "suichuan",
						"pid": "1325"
					},
					{
						"area_id": "343800",
						"title": "万安县",
						"pinyin": "wan'an",
						"pid": "1325"
					},
					{
						"area_id": "343200",
						"title": "安福县",
						"pinyin": "anfu",
						"pid": "1325"
					},
					{
						"area_id": "343400",
						"title": "永新县",
						"pinyin": "yongxin",
						"pid": "1325"
					},
					{
						"area_id": "343600",
						"title": "井冈山市",
						"pinyin": "jinggangshan",
						"pid": "1325"
					}
				]
			},
			{
				"area_id": "336000",
				"title": "宜春市",
				"pinyin": "yichun",
				"pid": "1263",
				"child": [
					{
						"area_id": "336000",
						"title": "袁州区",
						"pinyin": "yuanzhou",
						"pid": "1339"
					},
					{
						"area_id": "330700",
						"title": "奉新县",
						"pinyin": "fengxin",
						"pid": "1339"
					},
					{
						"area_id": "336100",
						"title": "万载县",
						"pinyin": "wanzai",
						"pid": "1339"
					},
					{
						"area_id": "336400",
						"title": "上高县",
						"pinyin": "shanggao",
						"pid": "1339"
					},
					{
						"area_id": "336300",
						"title": "宜丰县",
						"pinyin": "yifeng",
						"pid": "1339"
					},
					{
						"area_id": "330600",
						"title": "靖安县",
						"pinyin": "jing'an",
						"pid": "1339"
					},
					{
						"area_id": "336200",
						"title": "铜鼓县",
						"pinyin": "tonggu",
						"pid": "1339"
					},
					{
						"area_id": "331100",
						"title": "丰城市",
						"pinyin": "fengcheng",
						"pid": "1339"
					},
					{
						"area_id": "331200",
						"title": "樟树市",
						"pinyin": "zhangshu",
						"pid": "1339"
					},
					{
						"area_id": "330800",
						"title": "高安市",
						"pinyin": "gao'an",
						"pid": "1339"
					}
				]
			},
			{
				"area_id": "344000",
				"title": "抚州市",
				"pinyin": "fuzhou",
				"pid": "1263",
				"child": [
					{
						"area_id": "344000",
						"title": "临川区",
						"pinyin": "linchuan",
						"pid": "1350"
					},
					{
						"area_id": "344700",
						"title": "南城县",
						"pinyin": "nancheng",
						"pid": "1350"
					},
					{
						"area_id": "344600",
						"title": "黎川县",
						"pinyin": "lichuan",
						"pid": "1350"
					},
					{
						"area_id": "344500",
						"title": "南丰县",
						"pinyin": "nanfeng",
						"pid": "1350"
					},
					{
						"area_id": "344200",
						"title": "崇仁县",
						"pinyin": "chongren",
						"pid": "1350"
					},
					{
						"area_id": "344300",
						"title": "乐安县",
						"pinyin": "le'an",
						"pid": "1350"
					},
					{
						"area_id": "344400",
						"title": "宜黄县",
						"pinyin": "yihuang",
						"pid": "1350"
					},
					{
						"area_id": "344800",
						"title": "金溪县",
						"pinyin": "jinxi",
						"pid": "1350"
					},
					{
						"area_id": "335300",
						"title": "资溪县",
						"pinyin": "zixi",
						"pid": "1350"
					},
					{
						"area_id": "331800",
						"title": "东乡县",
						"pinyin": "dongxiang",
						"pid": "1350"
					},
					{
						"area_id": "344900",
						"title": "广昌县",
						"pinyin": "guangchang",
						"pid": "1350"
					}
				]
			},
			{
				"area_id": "334000",
				"title": "上饶市",
				"pinyin": "shangrao",
				"pid": "1263",
				"child": [
					{
						"area_id": "334000",
						"title": "信州区",
						"pinyin": "xinzhou",
						"pid": "1362"
					},
					{
						"area_id": "334100",
						"title": "上饶县",
						"pinyin": "shangrao",
						"pid": "1362"
					},
					{
						"area_id": "334600",
						"title": "广丰县",
						"pinyin": "guangfeng",
						"pid": "1362"
					},
					{
						"area_id": "334700",
						"title": "玉山县",
						"pinyin": "yushan",
						"pid": "1362"
					},
					{
						"area_id": "334500",
						"title": "铅山县",
						"pinyin": "yanshan",
						"pid": "1362"
					},
					{
						"area_id": "334300",
						"title": "横峰县",
						"pinyin": "hengfeng",
						"pid": "1362"
					},
					{
						"area_id": "334400",
						"title": "弋阳县",
						"pinyin": "yiyang",
						"pid": "1362"
					},
					{
						"area_id": "335100",
						"title": "余干县",
						"pinyin": "yugan",
						"pid": "1362"
					},
					{
						"area_id": "333100",
						"title": "鄱阳县",
						"pinyin": "poyang",
						"pid": "1362"
					},
					{
						"area_id": "335500",
						"title": "万年县",
						"pinyin": "wannian",
						"pid": "1362"
					},
					{
						"area_id": "333200",
						"title": "婺源县",
						"pinyin": "wuyuan",
						"pid": "1362"
					},
					{
						"area_id": "334200",
						"title": "德兴市",
						"pinyin": "dexing",
						"pid": "1362"
					}
				]
			}
		]
	},
	{
		"area_id": "250000",
		"title": "山东省",
		"pinyin": "shandong",
		"pid": "0",
		"child": [
			{
				"area_id": "250001",
				"title": "济南市",
				"pinyin": "jinan",
				"pid": "1375",
				"child": [
					{
						"area_id": "250014",
						"title": "历下区",
						"pinyin": "lixia",
						"pid": "1376"
					},
					{
						"area_id": "250001",
						"title": "市中区",
						"pinyin": "shizhongqu",
						"pid": "1376"
					},
					{
						"area_id": "250117",
						"title": "槐荫区",
						"pinyin": "huaiyin",
						"pid": "1376"
					},
					{
						"area_id": "250031",
						"title": "天桥区",
						"pinyin": "tianqiao",
						"pid": "1376"
					},
					{
						"area_id": "250100",
						"title": "历城区",
						"pinyin": "licheng",
						"pid": "1376"
					},
					{
						"area_id": "250300",
						"title": "长清区",
						"pinyin": "changqing",
						"pid": "1376"
					},
					{
						"area_id": "250400",
						"title": "平阴县",
						"pinyin": "pingyin",
						"pid": "1376"
					},
					{
						"area_id": "251400",
						"title": "济阳县",
						"pinyin": "jiyang",
						"pid": "1376"
					},
					{
						"area_id": "251600",
						"title": "商河县",
						"pinyin": "shanghe",
						"pid": "1376"
					},
					{
						"area_id": "250200",
						"title": "章丘市",
						"pinyin": "zhangqiu",
						"pid": "1376"
					}
				]
			},
			{
				"area_id": "266001",
				"title": "青岛市",
				"pinyin": "qingdao",
				"pid": "1375",
				"child": [
					{
						"area_id": "266001",
						"title": "市南区",
						"pinyin": "shinan",
						"pid": "1387"
					},
					{
						"area_id": "266011",
						"title": "市北区",
						"pinyin": "shibei",
						"pid": "1387"
					},
					{
						"area_id": "266500",
						"title": "黄岛区",
						"pinyin": "huangdao",
						"pid": "1387"
					},
					{
						"area_id": "266100",
						"title": "崂山区",
						"pinyin": "laoshan",
						"pid": "1387"
					},
					{
						"area_id": "266021",
						"title": "李沧区",
						"pinyin": "licang",
						"pid": "1387"
					},
					{
						"area_id": "266041",
						"title": "城阳区",
						"pinyin": "chengyang",
						"pid": "1387"
					},
					{
						"area_id": "266300",
						"title": "胶州市",
						"pinyin": "jiaozhou",
						"pid": "1387"
					},
					{
						"area_id": "266200",
						"title": "即墨市",
						"pinyin": "jimo",
						"pid": "1387"
					},
					{
						"area_id": "266700",
						"title": "平度市",
						"pinyin": "pingdu",
						"pid": "1387"
					},
					{
						"area_id": "266600",
						"title": "莱西市",
						"pinyin": "laixi",
						"pid": "1387"
					},
					{
						"area_id": "266500",
						"title": "西海岸新区",
						"pinyin": "xihai'an",
						"pid": "1387"
					}
				]
			},
			{
				"area_id": "255039",
				"title": "淄博市",
				"pinyin": "zibo",
				"pid": "1375",
				"child": [
					{
						"area_id": "255100",
						"title": "淄川区",
						"pinyin": "zichuan",
						"pid": "1399"
					},
					{
						"area_id": "255022",
						"title": "张店区",
						"pinyin": "zhangdian",
						"pid": "1399"
					},
					{
						"area_id": "255200",
						"title": "博山区",
						"pinyin": "boshan",
						"pid": "1399"
					},
					{
						"area_id": "255400",
						"title": "临淄区",
						"pinyin": "linzi",
						"pid": "1399"
					},
					{
						"area_id": "255300",
						"title": "周村区",
						"pinyin": "zhoucun",
						"pid": "1399"
					},
					{
						"area_id": "256400",
						"title": "桓台县",
						"pinyin": "huantai",
						"pid": "1399"
					},
					{
						"area_id": "256300",
						"title": "高青县",
						"pinyin": "gaoqing",
						"pid": "1399"
					},
					{
						"area_id": "256100",
						"title": "沂源县",
						"pinyin": "yiyuan",
						"pid": "1399"
					}
				]
			},
			{
				"area_id": "277101",
				"title": "枣庄市",
				"pinyin": "zaozhuang",
				"pid": "1375",
				"child": [
					{
						"area_id": "277101",
						"title": "市中区",
						"pinyin": "shizhongqu",
						"pid": "1408"
					},
					{
						"area_id": "277000",
						"title": "薛城区",
						"pinyin": "xuecheng",
						"pid": "1408"
					},
					{
						"area_id": "277300",
						"title": "峄城区",
						"pinyin": "yicheng",
						"pid": "1408"
					},
					{
						"area_id": "277400",
						"title": "台儿庄区",
						"pinyin": "taierzhuang",
						"pid": "1408"
					},
					{
						"area_id": "277200",
						"title": "山亭区",
						"pinyin": "shanting",
						"pid": "1408"
					},
					{
						"area_id": "277500",
						"title": "滕州市",
						"pinyin": "tengzhou",
						"pid": "1408"
					}
				]
			},
			{
				"area_id": "257093",
				"title": "东营市",
				"pinyin": "dongying",
				"pid": "1375",
				"child": [
					{
						"area_id": "257029",
						"title": "东营区",
						"pinyin": "dongying",
						"pid": "1415"
					},
					{
						"area_id": "257200",
						"title": "河口区",
						"pinyin": "hekou",
						"pid": "1415"
					},
					{
						"area_id": "257500",
						"title": "垦利县",
						"pinyin": "kenli",
						"pid": "1415"
					},
					{
						"area_id": "257400",
						"title": "利津县",
						"pinyin": "lijin",
						"pid": "1415"
					},
					{
						"area_id": "257300",
						"title": "广饶县",
						"pinyin": "guangrao",
						"pid": "1415"
					}
				]
			},
			{
				"area_id": "264010",
				"title": "烟台市",
				"pinyin": "yantai",
				"pid": "1375",
				"child": [
					{
						"area_id": "264001",
						"title": "芝罘区",
						"pinyin": "zhifu",
						"pid": "1421"
					},
					{
						"area_id": "265500",
						"title": "福山区",
						"pinyin": "fushan",
						"pid": "1421"
					},
					{
						"area_id": "264100",
						"title": "牟平区",
						"pinyin": "muping",
						"pid": "1421"
					},
					{
						"area_id": "264600",
						"title": "莱山区",
						"pinyin": "laishan",
						"pid": "1421"
					},
					{
						"area_id": "265800",
						"title": "长岛县",
						"pinyin": "changdao",
						"pid": "1421"
					},
					{
						"area_id": "265700",
						"title": "龙口市",
						"pinyin": "longkou",
						"pid": "1421"
					},
					{
						"area_id": "265200",
						"title": "莱阳市",
						"pinyin": "laiyang",
						"pid": "1421"
					},
					{
						"area_id": "261400",
						"title": "莱州市",
						"pinyin": "laizhou",
						"pid": "1421"
					},
					{
						"area_id": "265600",
						"title": "蓬莱市",
						"pinyin": "penglai",
						"pid": "1421"
					},
					{
						"area_id": "265400",
						"title": "招远市",
						"pinyin": "zhaoyuan",
						"pid": "1421"
					},
					{
						"area_id": "265300",
						"title": "栖霞市",
						"pinyin": "qixia",
						"pid": "1421"
					},
					{
						"area_id": "265100",
						"title": "海阳市",
						"pinyin": "haiyang",
						"pid": "1421"
					}
				]
			},
			{
				"area_id": "261041",
				"title": "潍坊市",
				"pinyin": "weifang",
				"pid": "1375",
				"child": [
					{
						"area_id": "261021",
						"title": "潍城区",
						"pinyin": "weicheng",
						"pid": "1434"
					},
					{
						"area_id": "261100",
						"title": "寒亭区",
						"pinyin": "hanting",
						"pid": "1434"
					},
					{
						"area_id": "261200",
						"title": "坊子区",
						"pinyin": "fangzi",
						"pid": "1434"
					},
					{
						"area_id": "261031",
						"title": "奎文区",
						"pinyin": "kuiwen",
						"pid": "1434"
					},
					{
						"area_id": "262600",
						"title": "临朐县",
						"pinyin": "linqu",
						"pid": "1434"
					},
					{
						"area_id": "262400",
						"title": "昌乐县",
						"pinyin": "changle",
						"pid": "1434"
					},
					{
						"area_id": "262500",
						"title": "青州市",
						"pinyin": "qingzhou",
						"pid": "1434"
					},
					{
						"area_id": "262200",
						"title": "诸城市",
						"pinyin": "zhucheng",
						"pid": "1434"
					},
					{
						"area_id": "262700",
						"title": "寿光市",
						"pinyin": "shouguang",
						"pid": "1434"
					},
					{
						"area_id": "262100",
						"title": "安丘市",
						"pinyin": "anqiu",
						"pid": "1434"
					},
					{
						"area_id": "261500",
						"title": "高密市",
						"pinyin": "gaomi",
						"pid": "1434"
					},
					{
						"area_id": "261300",
						"title": "昌邑市",
						"pinyin": "changyi",
						"pid": "1434"
					}
				]
			},
			{
				"area_id": "272119",
				"title": "济宁市",
				"pinyin": "jining",
				"pid": "1375",
				"child": [
					{
						"area_id": "272113",
						"title": "任城区",
						"pinyin": "rencheng",
						"pid": "1447"
					},
					{
						"area_id": "272000",
						"title": "兖州区",
						"pinyin": "yanzhou",
						"pid": "1447"
					},
					{
						"area_id": "277600",
						"title": "微山县",
						"pinyin": "weishan",
						"pid": "1447"
					},
					{
						"area_id": "272300",
						"title": "鱼台县",
						"pinyin": "yutai",
						"pid": "1447"
					},
					{
						"area_id": "272200",
						"title": "金乡县",
						"pinyin": "jinxiang",
						"pid": "1447"
					},
					{
						"area_id": "272400",
						"title": "嘉祥县",
						"pinyin": "jiaxiang",
						"pid": "1447"
					},
					{
						"area_id": "272501",
						"title": "汶上县",
						"pinyin": "wenshang",
						"pid": "1447"
					},
					{
						"area_id": "273200",
						"title": "泗水县",
						"pinyin": "sishui",
						"pid": "1447"
					},
					{
						"area_id": "272600",
						"title": "梁山县",
						"pinyin": "liangshan",
						"pid": "1447"
					},
					{
						"area_id": "273100",
						"title": "曲阜市",
						"pinyin": "qufu",
						"pid": "1447"
					},
					{
						"area_id": "273500",
						"title": "邹城市",
						"pinyin": "zoucheng",
						"pid": "1447"
					}
				]
			},
			{
				"area_id": "271000",
				"title": "泰安市",
				"pinyin": "tai'an",
				"pid": "1375",
				"child": [
					{
						"area_id": "271000",
						"title": "泰山区",
						"pinyin": "taishan",
						"pid": "1459"
					},
					{
						"area_id": "271000",
						"title": "岱岳区",
						"pinyin": "daiyue",
						"pid": "1459"
					},
					{
						"area_id": "271400",
						"title": "宁阳县",
						"pinyin": "ningyang",
						"pid": "1459"
					},
					{
						"area_id": "271500",
						"title": "东平县",
						"pinyin": "dongping",
						"pid": "1459"
					},
					{
						"area_id": "271200",
						"title": "新泰市",
						"pinyin": "xintai",
						"pid": "1459"
					},
					{
						"area_id": "271600",
						"title": "肥城市",
						"pinyin": "feicheng",
						"pid": "1459"
					}
				]
			},
			{
				"area_id": "264200",
				"title": "威海市",
				"pinyin": "weihai",
				"pid": "1375",
				"child": [
					{
						"area_id": "264200",
						"title": "环翠区",
						"pinyin": "huancui",
						"pid": "1466"
					},
					{
						"area_id": "266440",
						"title": "文登区",
						"pinyin": "wendeng",
						"pid": "1466"
					},
					{
						"area_id": "264300",
						"title": "荣成市",
						"pinyin": "rongcheng",
						"pid": "1466"
					},
					{
						"area_id": "264500",
						"title": "乳山市",
						"pinyin": "rushan",
						"pid": "1466"
					}
				]
			},
			{
				"area_id": "276800",
				"title": "日照市",
				"pinyin": "rizhao",
				"pid": "1375",
				"child": [
					{
						"area_id": "276800",
						"title": "东港区",
						"pinyin": "donggang",
						"pid": "1471"
					},
					{
						"area_id": "276808",
						"title": "岚山区",
						"pinyin": "lanshan",
						"pid": "1471"
					},
					{
						"area_id": "262300",
						"title": "五莲县",
						"pinyin": "wulian",
						"pid": "1471"
					},
					{
						"area_id": "276500",
						"title": "莒县",
						"pinyin": "juxian",
						"pid": "1471"
					}
				]
			},
			{
				"area_id": "271100",
				"title": "莱芜市",
				"pinyin": "laiwu",
				"pid": "1375",
				"child": [
					{
						"area_id": "271199",
						"title": "莱城区",
						"pinyin": "laicheng",
						"pid": "1476"
					},
					{
						"area_id": "271100",
						"title": "钢城区",
						"pinyin": "gangcheng",
						"pid": "1476"
					}
				]
			},
			{
				"area_id": "253000",
				"title": "临沂市",
				"pinyin": "linyi",
				"pid": "1375",
				"child": [
					{
						"area_id": "276002",
						"title": "兰山区",
						"pinyin": "lanshan",
						"pid": "1479"
					},
					{
						"area_id": "276022",
						"title": "罗庄区",
						"pinyin": "luozhuang",
						"pid": "1479"
					},
					{
						"area_id": "276034",
						"title": "河东区",
						"pinyin": "hedong",
						"pid": "1479"
					},
					{
						"area_id": "276300",
						"title": "沂南县",
						"pinyin": "yinan",
						"pid": "1479"
					},
					{
						"area_id": "276100",
						"title": "郯城县",
						"pinyin": "tancheng",
						"pid": "1479"
					},
					{
						"area_id": "276400",
						"title": "沂水县",
						"pinyin": "yishui",
						"pid": "1479"
					},
					{
						"area_id": "277700",
						"title": "兰陵县",
						"pinyin": "lanling",
						"pid": "1479"
					},
					{
						"area_id": "273400",
						"title": "费县",
						"pinyin": "feixian",
						"pid": "1479"
					},
					{
						"area_id": "273300",
						"title": "平邑县",
						"pinyin": "pingyi",
						"pid": "1479"
					},
					{
						"area_id": "276600",
						"title": "莒南县",
						"pinyin": "junan",
						"pid": "1479"
					},
					{
						"area_id": "276200",
						"title": "蒙阴县",
						"pinyin": "mengyin",
						"pid": "1479"
					},
					{
						"area_id": "276700",
						"title": "临沭县",
						"pinyin": "linshu",
						"pid": "1479"
					}
				]
			},
			{
				"area_id": "253000",
				"title": "德州市",
				"pinyin": "dezhou",
				"pid": "1375",
				"child": [
					{
						"area_id": "253012",
						"title": "德城区",
						"pinyin": "decheng",
						"pid": "1492"
					},
					{
						"area_id": "253500",
						"title": "陵城区",
						"pinyin": "lingcheng",
						"pid": "1492"
					},
					{
						"area_id": "253400",
						"title": "宁津县",
						"pinyin": "ningjin",
						"pid": "1492"
					},
					{
						"area_id": "253700",
						"title": "庆云县",
						"pinyin": "qingyun",
						"pid": "1492"
					},
					{
						"area_id": "251500",
						"title": "临邑县",
						"pinyin": "linyi",
						"pid": "1492"
					},
					{
						"area_id": "251100",
						"title": "齐河县",
						"pinyin": "qihe",
						"pid": "1492"
					},
					{
						"area_id": "253100",
						"title": "平原县",
						"pinyin": "pingyuan",
						"pid": "1492"
					},
					{
						"area_id": "253200",
						"title": "夏津县",
						"pinyin": "xiajin",
						"pid": "1492"
					},
					{
						"area_id": "253300",
						"title": "武城县",
						"pinyin": "wucheng",
						"pid": "1492"
					},
					{
						"area_id": "253600",
						"title": "乐陵市",
						"pinyin": "leling",
						"pid": "1492"
					},
					{
						"area_id": "251200",
						"title": "禹城市",
						"pinyin": "yucheng",
						"pid": "1492"
					}
				]
			},
			{
				"area_id": "252052",
				"title": "聊城市",
				"pinyin": "liaocheng",
				"pid": "1375",
				"child": [
					{
						"area_id": "252000",
						"title": "东昌府区",
						"pinyin": "dongchangfu",
						"pid": "1504"
					},
					{
						"area_id": "252300",
						"title": "阳谷县",
						"pinyin": "yanggu",
						"pid": "1504"
					},
					{
						"area_id": "252400",
						"title": "莘县",
						"pinyin": "shenxian",
						"pid": "1504"
					},
					{
						"area_id": "252100",
						"title": "茌平县",
						"pinyin": "chiping",
						"pid": "1504"
					},
					{
						"area_id": "252200",
						"title": "东阿县",
						"pinyin": "dong'e",
						"pid": "1504"
					},
					{
						"area_id": "252500",
						"title": "冠县",
						"pinyin": "guanxian",
						"pid": "1504"
					},
					{
						"area_id": "252800",
						"title": "高唐县",
						"pinyin": "gaotang",
						"pid": "1504"
					},
					{
						"area_id": "252600",
						"title": "临清市",
						"pinyin": "linqing",
						"pid": "1504"
					}
				]
			},
			{
				"area_id": "256619",
				"title": "滨州市",
				"pinyin": "binzhou",
				"pid": "1375",
				"child": [
					{
						"area_id": "256613",
						"title": "滨城区",
						"pinyin": "bincheng",
						"pid": "1513"
					},
					{
						"area_id": "256800",
						"title": "沾化区",
						"pinyin": "zhanhua",
						"pid": "1513"
					},
					{
						"area_id": "251700",
						"title": "惠民县",
						"pinyin": "huimin",
						"pid": "1513"
					},
					{
						"area_id": "251800",
						"title": "阳信县",
						"pinyin": "yangxin",
						"pid": "1513"
					},
					{
						"area_id": "251900",
						"title": "无棣县",
						"pinyin": "wudi",
						"pid": "1513"
					},
					{
						"area_id": "256500",
						"title": "博兴县",
						"pinyin": "boxing",
						"pid": "1513"
					},
					{
						"area_id": "256200",
						"title": "邹平县",
						"pinyin": "zouping",
						"pid": "1513"
					},
					{
						"area_id": "256200",
						"title": "北海新区",
						"pinyin": "beihaixinqu",
						"pid": "1513"
					}
				]
			},
			{
				"area_id": "274020",
				"title": "菏泽市",
				"pinyin": "heze",
				"pid": "1375",
				"child": [
					{
						"area_id": "274009",
						"title": "牡丹区",
						"pinyin": "mudan",
						"pid": "1522"
					},
					{
						"area_id": "274400",
						"title": "曹县",
						"pinyin": "caoxian",
						"pid": "1522"
					},
					{
						"area_id": "273700",
						"title": "单县",
						"pinyin": "shanxian",
						"pid": "1522"
					},
					{
						"area_id": "274200",
						"title": "成武县",
						"pinyin": "chengwu",
						"pid": "1522"
					},
					{
						"area_id": "274900",
						"title": "巨野县",
						"pinyin": "juye",
						"pid": "1522"
					},
					{
						"area_id": "274700",
						"title": "郓城县",
						"pinyin": "yuncheng",
						"pid": "1522"
					},
					{
						"area_id": "274600",
						"title": "鄄城县",
						"pinyin": "juancheng",
						"pid": "1522"
					},
					{
						"area_id": "274100",
						"title": "定陶县",
						"pinyin": "dingtao",
						"pid": "1522"
					},
					{
						"area_id": "274500",
						"title": "东明县",
						"pinyin": "dongming",
						"pid": "1522"
					}
				]
			}
		]
	},
	{
		"area_id": "450000",
		"title": "河南省",
		"pinyin": "henan",
		"pid": "0",
		"child": [
			{
				"area_id": "450000",
				"title": "郑州市",
				"pinyin": "zhengzhou",
				"pid": "1532",
				"child": [
					{
						"area_id": "450007",
						"title": "中原区",
						"pinyin": "zhongyuan",
						"pid": "1533"
					},
					{
						"area_id": "450052",
						"title": "二七区",
						"pinyin": "erqi",
						"pid": "1533"
					},
					{
						"area_id": "450000",
						"title": "管城回族区",
						"pinyin": "guancheng",
						"pid": "1533"
					},
					{
						"area_id": "450003",
						"title": "金水区",
						"pinyin": "jinshui",
						"pid": "1533"
					},
					{
						"area_id": "450041",
						"title": "上街区",
						"pinyin": "shangjie",
						"pid": "1533"
					},
					{
						"area_id": "450053",
						"title": "惠济区",
						"pinyin": "huiji",
						"pid": "1533"
					},
					{
						"area_id": "451450",
						"title": "中牟县",
						"pinyin": "zhongmu",
						"pid": "1533"
					},
					{
						"area_id": "451200",
						"title": "巩义市",
						"pinyin": "gongyi",
						"pid": "1533"
					},
					{
						"area_id": "450100",
						"title": "荥阳市",
						"pinyin": "xingyang",
						"pid": "1533"
					},
					{
						"area_id": "452300",
						"title": "新密市",
						"pinyin": "xinmi",
						"pid": "1533"
					},
					{
						"area_id": "451100",
						"title": "新郑市",
						"pinyin": "xinzheng",
						"pid": "1533"
					},
					{
						"area_id": "452470",
						"title": "登封市",
						"pinyin": "dengfeng",
						"pid": "1533"
					}
				]
			},
			{
				"area_id": "475001",
				"title": "开封市",
				"pinyin": "kaifeng",
				"pid": "1532",
				"child": [
					{
						"area_id": "475100",
						"title": "龙亭区",
						"pinyin": "longting",
						"pid": "1546"
					},
					{
						"area_id": "475000",
						"title": "顺河回族区",
						"pinyin": "shunhe",
						"pid": "1546"
					},
					{
						"area_id": "475000",
						"title": "鼓楼区",
						"pinyin": "gulou",
						"pid": "1546"
					},
					{
						"area_id": "475003",
						"title": "禹王台区",
						"pinyin": "yuwangtai",
						"pid": "1546"
					},
					{
						"area_id": "475100",
						"title": "祥符区",
						"pinyin": "xiangfu",
						"pid": "1546"
					},
					{
						"area_id": "475200",
						"title": "杞县",
						"pinyin": "qixian",
						"pid": "1546"
					},
					{
						"area_id": "475400",
						"title": "通许县",
						"pinyin": "tongxu",
						"pid": "1546"
					},
					{
						"area_id": "475500",
						"title": "尉氏县",
						"pinyin": "weishi",
						"pid": "1546"
					},
					{
						"area_id": "475300",
						"title": "兰考县",
						"pinyin": "lankao",
						"pid": "1546"
					}
				]
			},
			{
				"area_id": "471000",
				"title": "洛阳市",
				"pinyin": "luoyang",
				"pid": "1532",
				"child": [
					{
						"area_id": "471002",
						"title": "老城区",
						"pinyin": "laocheng",
						"pid": "1556"
					},
					{
						"area_id": "471000",
						"title": "西工区",
						"pinyin": "xigong",
						"pid": "1556"
					},
					{
						"area_id": "471002",
						"title": "瀍河回族区",
						"pinyin": "chanhe",
						"pid": "1556"
					},
					{
						"area_id": "471003",
						"title": "涧西区",
						"pinyin": "jianxi",
						"pid": "1556"
					},
					{
						"area_id": "471012",
						"title": "吉利区",
						"pinyin": "jili",
						"pid": "1556"
					},
					{
						"area_id": "471000",
						"title": "洛龙区",
						"pinyin": "luolong",
						"pid": "1556"
					},
					{
						"area_id": "471100",
						"title": "孟津县",
						"pinyin": "mengjin",
						"pid": "1556"
					},
					{
						"area_id": "471800",
						"title": "新安县",
						"pinyin": "xin'an",
						"pid": "1556"
					},
					{
						"area_id": "471500",
						"title": "栾川县",
						"pinyin": "luanchuan",
						"pid": "1556"
					},
					{
						"area_id": "471400",
						"title": "嵩县",
						"pinyin": "songxian",
						"pid": "1556"
					},
					{
						"area_id": "471200",
						"title": "汝阳县",
						"pinyin": "ruyang",
						"pid": "1556"
					},
					{
						"area_id": "471600",
						"title": "宜阳县",
						"pinyin": "yiyang",
						"pid": "1556"
					},
					{
						"area_id": "471700",
						"title": "洛宁县",
						"pinyin": "luoning",
						"pid": "1556"
					},
					{
						"area_id": "471300",
						"title": "伊川县",
						"pinyin": "yichuan",
						"pid": "1556"
					},
					{
						"area_id": "471900",
						"title": "偃师市",
						"pinyin": "yanshi",
						"pid": "1556"
					}
				]
			},
			{
				"area_id": "467000",
				"title": "平顶山市",
				"pinyin": "pingdingshan",
				"pid": "1532",
				"child": [
					{
						"area_id": "467002",
						"title": "新华区",
						"pinyin": "xinhua",
						"pid": "1572"
					},
					{
						"area_id": "467021",
						"title": "卫东区",
						"pinyin": "weidong",
						"pid": "1572"
					},
					{
						"area_id": "467045",
						"title": "石龙区",
						"pinyin": "shilong",
						"pid": "1572"
					},
					{
						"area_id": "467000",
						"title": "湛河区",
						"pinyin": "zhanhe",
						"pid": "1572"
					},
					{
						"area_id": "467400",
						"title": "宝丰县",
						"pinyin": "baofeng",
						"pid": "1572"
					},
					{
						"area_id": "467200",
						"title": "叶县",
						"pinyin": "yexian",
						"pid": "1572"
					},
					{
						"area_id": "467300",
						"title": "鲁山县",
						"pinyin": "lushan",
						"pid": "1572"
					},
					{
						"area_id": "467100",
						"title": "郏县",
						"pinyin": "jiaxian",
						"pid": "1572"
					},
					{
						"area_id": "462500",
						"title": "舞钢市",
						"pinyin": "wugang",
						"pid": "1572"
					},
					{
						"area_id": "467500",
						"title": "汝州市",
						"pinyin": "ruzhou",
						"pid": "1572"
					}
				]
			},
			{
				"area_id": "455000",
				"title": "安阳市",
				"pinyin": "anyang",
				"pid": "1532",
				"child": [
					{
						"area_id": "455000",
						"title": "文峰区",
						"pinyin": "wenfeng",
						"pid": "1583"
					},
					{
						"area_id": "455001",
						"title": "北关区",
						"pinyin": "beiguan",
						"pid": "1583"
					},
					{
						"area_id": "455004",
						"title": "殷都区",
						"pinyin": "yindu",
						"pid": "1583"
					},
					{
						"area_id": "455001",
						"title": "龙安区",
						"pinyin": "long'an",
						"pid": "1583"
					},
					{
						"area_id": "455000",
						"title": "安阳县",
						"pinyin": "anyang",
						"pid": "1583"
					},
					{
						"area_id": "456150",
						"title": "汤阴县",
						"pinyin": "tangyin",
						"pid": "1583"
					},
					{
						"area_id": "456400",
						"title": "滑县",
						"pinyin": "huaxian",
						"pid": "1583"
					},
					{
						"area_id": "456350",
						"title": "内黄县",
						"pinyin": "neihuang",
						"pid": "1583"
					},
					{
						"area_id": "456550",
						"title": "林州市",
						"pinyin": "linzhou",
						"pid": "1583"
					}
				]
			},
			{
				"area_id": "458030",
				"title": "鹤壁市",
				"pinyin": "hebi",
				"pid": "1532",
				"child": [
					{
						"area_id": "458010",
						"title": "鹤山区",
						"pinyin": "heshan",
						"pid": "1593"
					},
					{
						"area_id": "458000",
						"title": "山城区",
						"pinyin": "shancheng",
						"pid": "1593"
					},
					{
						"area_id": "458000",
						"title": "淇滨区",
						"pinyin": "qibin",
						"pid": "1593"
					},
					{
						"area_id": "456250",
						"title": "浚县",
						"pinyin": "xunxian",
						"pid": "1593"
					},
					{
						"area_id": "456750",
						"title": "淇县",
						"pinyin": "qixian",
						"pid": "1593"
					}
				]
			},
			{
				"area_id": "453000",
				"title": "新乡市",
				"pinyin": "xinxiang",
				"pid": "1532",
				"child": [
					{
						"area_id": "453000",
						"title": "红旗区",
						"pinyin": "hongqi",
						"pid": "1599"
					},
					{
						"area_id": "453000",
						"title": "卫滨区",
						"pinyin": "weibin",
						"pid": "1599"
					},
					{
						"area_id": "453011",
						"title": "凤泉区",
						"pinyin": "fengquan",
						"pid": "1599"
					},
					{
						"area_id": "453002",
						"title": "牧野区",
						"pinyin": "muye",
						"pid": "1599"
					},
					{
						"area_id": "453700",
						"title": "新乡县",
						"pinyin": "xinxiang",
						"pid": "1599"
					},
					{
						"area_id": "453800",
						"title": "获嘉县",
						"pinyin": "huojia",
						"pid": "1599"
					},
					{
						"area_id": "453500",
						"title": "原阳县",
						"pinyin": "yuanyang",
						"pid": "1599"
					},
					{
						"area_id": "453200",
						"title": "延津县",
						"pinyin": "yanjin",
						"pid": "1599"
					},
					{
						"area_id": "453300",
						"title": "封丘县",
						"pinyin": "fengqiu",
						"pid": "1599"
					},
					{
						"area_id": "453400",
						"title": "长垣县",
						"pinyin": "changyuan",
						"pid": "1599"
					},
					{
						"area_id": "453100",
						"title": "卫辉市",
						"pinyin": "weihui",
						"pid": "1599"
					},
					{
						"area_id": "453600",
						"title": "辉县市",
						"pinyin": "huixian",
						"pid": "1599"
					}
				]
			},
			{
				"area_id": "454002",
				"title": "焦作市",
				"pinyin": "jiaozuo",
				"pid": "1532",
				"child": [
					{
						"area_id": "454000",
						"title": "解放区",
						"pinyin": "jiefang",
						"pid": "1612"
					},
					{
						"area_id": "454191",
						"title": "中站区",
						"pinyin": "zhongzhan",
						"pid": "1612"
					},
					{
						"area_id": "454171",
						"title": "马村区",
						"pinyin": "macun",
						"pid": "1612"
					},
					{
						"area_id": "454002",
						"title": "山阳区",
						"pinyin": "shanyang",
						"pid": "1612"
					},
					{
						"area_id": "454350",
						"title": "修武县",
						"pinyin": "xiuwu",
						"pid": "1612"
					},
					{
						"area_id": "454450",
						"title": "博爱县",
						"pinyin": "boai",
						"pid": "1612"
					},
					{
						"area_id": "454950",
						"title": "武陟县",
						"pinyin": "wuzhi",
						"pid": "1612"
					},
					{
						"area_id": "454850",
						"title": "温县",
						"pinyin": "wenxian",
						"pid": "1612"
					},
					{
						"area_id": "454550",
						"title": "沁阳市",
						"pinyin": "qinyang",
						"pid": "1612"
					},
					{
						"area_id": "454750",
						"title": "孟州市",
						"pinyin": "mengzhou",
						"pid": "1612"
					}
				]
			},
			{
				"area_id": "457000",
				"title": "濮阳市",
				"pinyin": "puyang",
				"pid": "1532",
				"child": [
					{
						"area_id": "457001",
						"title": "华龙区",
						"pinyin": "hualong",
						"pid": "1623"
					},
					{
						"area_id": "457300",
						"title": "清丰县",
						"pinyin": "qingfeng",
						"pid": "1623"
					},
					{
						"area_id": "457400",
						"title": "南乐县",
						"pinyin": "nanle",
						"pid": "1623"
					},
					{
						"area_id": "457500",
						"title": "范县",
						"pinyin": "fanxian",
						"pid": "1623"
					},
					{
						"area_id": "457600",
						"title": "台前县",
						"pinyin": "taiqian",
						"pid": "1623"
					},
					{
						"area_id": "457100",
						"title": "濮阳县",
						"pinyin": "puyang",
						"pid": "1623"
					}
				]
			},
			{
				"area_id": "461000",
				"title": "许昌市",
				"pinyin": "xuchang",
				"pid": "1532",
				"child": [
					{
						"area_id": "461000",
						"title": "魏都区",
						"pinyin": "weidu",
						"pid": "1630"
					},
					{
						"area_id": "461100",
						"title": "许昌县",
						"pinyin": "xuchang",
						"pid": "1630"
					},
					{
						"area_id": "461200",
						"title": "鄢陵县",
						"pinyin": "yanling",
						"pid": "1630"
					},
					{
						"area_id": "461700",
						"title": "襄城县",
						"pinyin": "xiangcheng",
						"pid": "1630"
					},
					{
						"area_id": "461670",
						"title": "禹州市",
						"pinyin": "yuzhou",
						"pid": "1630"
					},
					{
						"area_id": "461500",
						"title": "长葛市",
						"pinyin": "changge",
						"pid": "1630"
					}
				]
			},
			{
				"area_id": "462000",
				"title": "漯河市",
				"pinyin": "luohe",
				"pid": "1532",
				"child": [
					{
						"area_id": "462000",
						"title": "源汇区",
						"pinyin": "yuanhui",
						"pid": "1637"
					},
					{
						"area_id": "462300",
						"title": "郾城区",
						"pinyin": "yancheng",
						"pid": "1637"
					},
					{
						"area_id": "462300",
						"title": "召陵区",
						"pinyin": "zhaoling",
						"pid": "1637"
					},
					{
						"area_id": "462400",
						"title": "舞阳县",
						"pinyin": "wuyang",
						"pid": "1637"
					},
					{
						"area_id": "462600",
						"title": "临颍县",
						"pinyin": "linying",
						"pid": "1637"
					}
				]
			},
			{
				"area_id": "472000",
				"title": "三门峡市",
				"pinyin": "sanmenxia",
				"pid": "1532",
				"child": [
					{
						"area_id": "472000",
						"title": "湖滨区",
						"pinyin": "hubin",
						"pid": "1643"
					},
					{
						"area_id": "472400",
						"title": "渑池县",
						"pinyin": "mianchi",
						"pid": "1643"
					},
					{
						"area_id": "472100",
						"title": "陕县",
						"pinyin": "shanxian",
						"pid": "1643"
					},
					{
						"area_id": "472200",
						"title": "卢氏县",
						"pinyin": "lushi",
						"pid": "1643"
					},
					{
						"area_id": "472300",
						"title": "义马市",
						"pinyin": "yima",
						"pid": "1643"
					},
					{
						"area_id": "472500",
						"title": "灵宝市",
						"pinyin": "lingbao",
						"pid": "1643"
					}
				]
			},
			{
				"area_id": "473002",
				"title": "南阳市",
				"pinyin": "nanyang",
				"pid": "1532",
				"child": [
					{
						"area_id": "473001",
						"title": "宛城区",
						"pinyin": "wancheng",
						"pid": "1650"
					},
					{
						"area_id": "473003",
						"title": "卧龙区",
						"pinyin": "wolong",
						"pid": "1650"
					},
					{
						"area_id": "474650",
						"title": "南召县",
						"pinyin": "nanzhao",
						"pid": "1650"
					},
					{
						"area_id": "473200",
						"title": "方城县",
						"pinyin": "fangcheng",
						"pid": "1650"
					},
					{
						"area_id": "474550",
						"title": "西峡县",
						"pinyin": "xixia",
						"pid": "1650"
					},
					{
						"area_id": "474250",
						"title": "镇平县",
						"pinyin": "zhenping",
						"pid": "1650"
					},
					{
						"area_id": "474350",
						"title": "内乡县",
						"pinyin": "neixiang",
						"pid": "1650"
					},
					{
						"area_id": "474450",
						"title": "淅川县",
						"pinyin": "xichuan",
						"pid": "1650"
					},
					{
						"area_id": "473300",
						"title": "社旗县",
						"pinyin": "sheqi",
						"pid": "1650"
					},
					{
						"area_id": "473400",
						"title": "唐河县",
						"pinyin": "tanghe",
						"pid": "1650"
					},
					{
						"area_id": "473500",
						"title": "新野县",
						"pinyin": "xinye",
						"pid": "1650"
					},
					{
						"area_id": "474750",
						"title": "桐柏县",
						"pinyin": "tongbai",
						"pid": "1650"
					},
					{
						"area_id": "474150",
						"title": "邓州市",
						"pinyin": "dengzhou",
						"pid": "1650"
					}
				]
			},
			{
				"area_id": "476000",
				"title": "商丘市",
				"pinyin": "shangqiu",
				"pid": "1532",
				"child": [
					{
						"area_id": "476000",
						"title": "梁园区",
						"pinyin": "liangyuan",
						"pid": "1664"
					},
					{
						"area_id": "476100",
						"title": "睢阳区",
						"pinyin": "suiyang",
						"pid": "1664"
					},
					{
						"area_id": "476800",
						"title": "民权县",
						"pinyin": "minquan",
						"pid": "1664"
					},
					{
						"area_id": "476900",
						"title": "睢县",
						"pinyin": "suixian",
						"pid": "1664"
					},
					{
						"area_id": "476700",
						"title": "宁陵县",
						"pinyin": "ningling",
						"pid": "1664"
					},
					{
						"area_id": "476200",
						"title": "柘城县",
						"pinyin": "zhecheng",
						"pid": "1664"
					},
					{
						"area_id": "476300",
						"title": "虞城县",
						"pinyin": "yucheng",
						"pid": "1664"
					},
					{
						"area_id": "476400",
						"title": "夏邑县",
						"pinyin": "xiayi",
						"pid": "1664"
					},
					{
						"area_id": "476600",
						"title": "永城市",
						"pinyin": "yongcheng",
						"pid": "1664"
					}
				]
			},
			{
				"area_id": "464000",
				"title": "信阳市",
				"pinyin": "xinyang",
				"pid": "1532",
				"child": [
					{
						"area_id": "464000",
						"title": "浉河区",
						"pinyin": "shihe",
						"pid": "1674"
					},
					{
						"area_id": "464100",
						"title": "平桥区",
						"pinyin": "pingqiao",
						"pid": "1674"
					},
					{
						"area_id": "464200",
						"title": "罗山县",
						"pinyin": "luoshan",
						"pid": "1674"
					},
					{
						"area_id": "465450",
						"title": "光山县",
						"pinyin": "guangshan",
						"pid": "1674"
					},
					{
						"area_id": "465550",
						"title": "新县",
						"pinyin": "xinxian",
						"pid": "1674"
					},
					{
						"area_id": "465350",
						"title": "商城县",
						"pinyin": "shangcheng",
						"pid": "1674"
					},
					{
						"area_id": "465250",
						"title": "固始县",
						"pinyin": "gushi",
						"pid": "1674"
					},
					{
						"area_id": "465150",
						"title": "潢川县",
						"pinyin": "huangchuan",
						"pid": "1674"
					},
					{
						"area_id": "464400",
						"title": "淮滨县",
						"pinyin": "huaibin",
						"pid": "1674"
					},
					{
						"area_id": "464300",
						"title": "息县",
						"pinyin": "xixian",
						"pid": "1674"
					}
				]
			},
			{
				"area_id": "466000",
				"title": "周口市",
				"pinyin": "zhoukou",
				"pid": "1532",
				"child": [
					{
						"area_id": "466000",
						"title": "川汇区",
						"pinyin": "chuanhui",
						"pid": "1685"
					},
					{
						"area_id": "461300",
						"title": "扶沟县",
						"pinyin": "fugou",
						"pid": "1685"
					},
					{
						"area_id": "466600",
						"title": "西华县",
						"pinyin": "xihua",
						"pid": "1685"
					},
					{
						"area_id": "466100",
						"title": "商水县",
						"pinyin": "shangshui",
						"pid": "1685"
					},
					{
						"area_id": "466300",
						"title": "沈丘县",
						"pinyin": "shenqiu",
						"pid": "1685"
					},
					{
						"area_id": "477150",
						"title": "郸城县",
						"pinyin": "dancheng",
						"pid": "1685"
					},
					{
						"area_id": "466700",
						"title": "淮阳县",
						"pinyin": "huaiyang",
						"pid": "1685"
					},
					{
						"area_id": "461400",
						"title": "太康县",
						"pinyin": "taikang",
						"pid": "1685"
					},
					{
						"area_id": "477200",
						"title": "鹿邑县",
						"pinyin": "luyi",
						"pid": "1685"
					},
					{
						"area_id": "466200",
						"title": "项城市",
						"pinyin": "xiangcheng",
						"pid": "1685"
					}
				]
			},
			{
				"area_id": "463000",
				"title": "驻马店市",
				"pinyin": "zhumadian",
				"pid": "1532",
				"child": [
					{
						"area_id": "463000",
						"title": "驿城区",
						"pinyin": "yicheng",
						"pid": "1696"
					},
					{
						"area_id": "463900",
						"title": "西平县",
						"pinyin": "xiping",
						"pid": "1696"
					},
					{
						"area_id": "463800",
						"title": "上蔡县",
						"pinyin": "shangcai",
						"pid": "1696"
					},
					{
						"area_id": "463400",
						"title": "平舆县",
						"pinyin": "pingyu",
						"pid": "1696"
					},
					{
						"area_id": "463600",
						"title": "正阳县",
						"pinyin": "zhengyang",
						"pid": "1696"
					},
					{
						"area_id": "463200",
						"title": "确山县",
						"pinyin": "queshan",
						"pid": "1696"
					},
					{
						"area_id": "463700",
						"title": "泌阳县",
						"pinyin": "biyang",
						"pid": "1696"
					},
					{
						"area_id": "463300",
						"title": "汝南县",
						"pinyin": "runan",
						"pid": "1696"
					},
					{
						"area_id": "463100",
						"title": "遂平县",
						"pinyin": "suiping",
						"pid": "1696"
					},
					{
						"area_id": "463500",
						"title": "新蔡县",
						"pinyin": "xincai",
						"pid": "1696"
					}
				]
			},
			{
				"area_id": "",
				"title": "直辖县级",
				"pinyin": "",
				"pid": "1532",
				"child": [
					{
						"area_id": "454650",
						"title": "济源市",
						"pinyin": "jiyuan",
						"pid": "1707"
					}
				]
			}
		]
	},
	{
		"area_id": "430000",
		"title": "湖北省",
		"pinyin": "hubei",
		"pid": "0",
		"child": [
			{
				"area_id": "430014",
				"title": "武汉市",
				"pinyin": "wuhan",
				"pid": "1709",
				"child": [
					{
						"area_id": "430014",
						"title": "江岸区",
						"pinyin": "jiang'an",
						"pid": "1710"
					},
					{
						"area_id": "430021",
						"title": "江汉区",
						"pinyin": "jianghan",
						"pid": "1710"
					},
					{
						"area_id": "430033",
						"title": "硚口区",
						"pinyin": "qiaokou",
						"pid": "1710"
					},
					{
						"area_id": "430050",
						"title": "汉阳区",
						"pinyin": "hanyang",
						"pid": "1710"
					},
					{
						"area_id": "430061",
						"title": "武昌区",
						"pinyin": "wuchang",
						"pid": "1710"
					},
					{
						"area_id": "430080",
						"title": "青山区",
						"pinyin": "qingshan",
						"pid": "1710"
					},
					{
						"area_id": "430070",
						"title": "洪山区",
						"pinyin": "hongshan",
						"pid": "1710"
					},
					{
						"area_id": "430040",
						"title": "东西湖区",
						"pinyin": "dongxihu",
						"pid": "1710"
					},
					{
						"area_id": "430090",
						"title": "汉南区",
						"pinyin": "hannan",
						"pid": "1710"
					},
					{
						"area_id": "430100",
						"title": "蔡甸区",
						"pinyin": "caidian",
						"pid": "1710"
					},
					{
						"area_id": "430200",
						"title": "江夏区",
						"pinyin": "jiangxia",
						"pid": "1710"
					},
					{
						"area_id": "432200",
						"title": "黄陂区",
						"pinyin": "huangpi",
						"pid": "1710"
					},
					{
						"area_id": "431400",
						"title": "新洲区",
						"pinyin": "xinzhou",
						"pid": "1710"
					}
				]
			},
			{
				"area_id": "435003",
				"title": "黄石市",
				"pinyin": "huangshi",
				"pid": "1709",
				"child": [
					{
						"area_id": "435000",
						"title": "黄石港区",
						"pinyin": "huangshigang",
						"pid": "1724"
					},
					{
						"area_id": "435001",
						"title": "西塞山区",
						"pinyin": "xisaishan",
						"pid": "1724"
					},
					{
						"area_id": "435005",
						"title": "下陆区",
						"pinyin": "xialu",
						"pid": "1724"
					},
					{
						"area_id": "435006",
						"title": "铁山区",
						"pinyin": "tieshan",
						"pid": "1724"
					},
					{
						"area_id": "435200",
						"title": "阳新县",
						"pinyin": "yangxin",
						"pid": "1724"
					},
					{
						"area_id": "435100",
						"title": "大冶市",
						"pinyin": "daye",
						"pid": "1724"
					}
				]
			},
			{
				"area_id": "442000",
				"title": "十堰市",
				"pinyin": "shiyan",
				"pid": "1709",
				"child": [
					{
						"area_id": "442012",
						"title": "茅箭区",
						"pinyin": "maojian",
						"pid": "1731"
					},
					{
						"area_id": "442001",
						"title": "张湾区",
						"pinyin": "zhangwan",
						"pid": "1731"
					},
					{
						"area_id": "442500",
						"title": "郧阳区",
						"pinyin": "yunyang",
						"pid": "1731"
					},
					{
						"area_id": "442600",
						"title": "郧西县",
						"pinyin": "yunxi",
						"pid": "1731"
					},
					{
						"area_id": "442200",
						"title": "竹山县",
						"pinyin": "zhushan",
						"pid": "1731"
					},
					{
						"area_id": "442300",
						"title": "竹溪县",
						"pinyin": "zhuxi",
						"pid": "1731"
					},
					{
						"area_id": "442100",
						"title": "房县",
						"pinyin": "fangxian",
						"pid": "1731"
					},
					{
						"area_id": "442700",
						"title": "丹江口市",
						"pinyin": "danjiangkou",
						"pid": "1731"
					}
				]
			},
			{
				"area_id": "443000",
				"title": "宜昌市",
				"pinyin": "yichang",
				"pid": "1709",
				"child": [
					{
						"area_id": "443000",
						"title": "西陵区",
						"pinyin": "xiling",
						"pid": "1740"
					},
					{
						"area_id": "443001",
						"title": "伍家岗区",
						"pinyin": "wujiagang",
						"pid": "1740"
					},
					{
						"area_id": "443006",
						"title": "点军区",
						"pinyin": "dianjun",
						"pid": "1740"
					},
					{
						"area_id": "443007",
						"title": "猇亭区",
						"pinyin": "xiaoting",
						"pid": "1740"
					},
					{
						"area_id": "443100",
						"title": "夷陵区",
						"pinyin": "yiling",
						"pid": "1740"
					},
					{
						"area_id": "444200",
						"title": "远安县",
						"pinyin": "yuan'an",
						"pid": "1740"
					},
					{
						"area_id": "443711",
						"title": "兴山县",
						"pinyin": "xingshan",
						"pid": "1740"
					},
					{
						"area_id": "443600",
						"title": "秭归县",
						"pinyin": "zigui",
						"pid": "1740"
					},
					{
						"area_id": "443500",
						"title": "长阳土家族自治县",
						"pinyin": "changyang",
						"pid": "1740"
					},
					{
						"area_id": "443413",
						"title": "五峰土家族自治县",
						"pinyin": "wufeng",
						"pid": "1740"
					},
					{
						"area_id": "443300",
						"title": "宜都市",
						"pinyin": "yidu",
						"pid": "1740"
					},
					{
						"area_id": "444100",
						"title": "当阳市",
						"pinyin": "dangyang",
						"pid": "1740"
					},
					{
						"area_id": "443200",
						"title": "枝江市",
						"pinyin": "zhijiang",
						"pid": "1740"
					}
				]
			},
			{
				"area_id": "441021",
				"title": "襄阳市",
				"pinyin": "xiangyang",
				"pid": "1709",
				"child": [
					{
						"area_id": "441021",
						"title": "襄城区",
						"pinyin": "xiangcheng",
						"pid": "1754"
					},
					{
						"area_id": "441001",
						"title": "樊城区",
						"pinyin": "fancheng",
						"pid": "1754"
					},
					{
						"area_id": "441100",
						"title": "襄州区",
						"pinyin": "xiangzhou",
						"pid": "1754"
					},
					{
						"area_id": "441500",
						"title": "南漳县",
						"pinyin": "nanzhang",
						"pid": "1754"
					},
					{
						"area_id": "441700",
						"title": "谷城县",
						"pinyin": "gucheng",
						"pid": "1754"
					},
					{
						"area_id": "441600",
						"title": "保康县",
						"pinyin": "baokang",
						"pid": "1754"
					},
					{
						"area_id": "441800",
						"title": "老河口市",
						"pinyin": "laohekou",
						"pid": "1754"
					},
					{
						"area_id": "441200",
						"title": "枣阳市",
						"pinyin": "zaoyang",
						"pid": "1754"
					},
					{
						"area_id": "441400",
						"title": "宜城市",
						"pinyin": "yicheng",
						"pid": "1754"
					}
				]
			},
			{
				"area_id": "436000",
				"title": "鄂州市",
				"pinyin": "ezhou",
				"pid": "1709",
				"child": [
					{
						"area_id": "436064",
						"title": "梁子湖区",
						"pinyin": "liangzihu",
						"pid": "1764"
					},
					{
						"area_id": "436030",
						"title": "华容区",
						"pinyin": "huarong",
						"pid": "1764"
					},
					{
						"area_id": "436000",
						"title": "鄂城区",
						"pinyin": "echeng",
						"pid": "1764"
					}
				]
			},
			{
				"area_id": "448000",
				"title": "荆门市",
				"pinyin": "jingmen",
				"pid": "1709",
				"child": [
					{
						"area_id": "448004",
						"title": "东宝区",
						"pinyin": "dongbao",
						"pid": "1768"
					},
					{
						"area_id": "448124",
						"title": "掇刀区",
						"pinyin": "duodao",
						"pid": "1768"
					},
					{
						"area_id": "431800",
						"title": "京山县",
						"pinyin": "jingshan",
						"pid": "1768"
					},
					{
						"area_id": "448200",
						"title": "沙洋县",
						"pinyin": "shayang",
						"pid": "1768"
					},
					{
						"area_id": "431900",
						"title": "钟祥市",
						"pinyin": "zhongxiang",
						"pid": "1768"
					}
				]
			},
			{
				"area_id": "432100",
				"title": "孝感市",
				"pinyin": "xiaogan",
				"pid": "1709",
				"child": [
					{
						"area_id": "432100",
						"title": "孝南区",
						"pinyin": "xiaonan",
						"pid": "1774"
					},
					{
						"area_id": "432900",
						"title": "孝昌县",
						"pinyin": "xiaochang",
						"pid": "1774"
					},
					{
						"area_id": "432800",
						"title": "大悟县",
						"pinyin": "dawu",
						"pid": "1774"
					},
					{
						"area_id": "432500",
						"title": "云梦县",
						"pinyin": "yunmeng",
						"pid": "1774"
					},
					{
						"area_id": "432400",
						"title": "应城市",
						"pinyin": "yingcheng",
						"pid": "1774"
					},
					{
						"area_id": "432600",
						"title": "安陆市",
						"pinyin": "anlu",
						"pid": "1774"
					},
					{
						"area_id": "432300",
						"title": "汉川市",
						"pinyin": "hanchuan",
						"pid": "1774"
					}
				]
			},
			{
				"area_id": "434000",
				"title": "荆州市",
				"pinyin": "jingzhou",
				"pid": "1709",
				"child": [
					{
						"area_id": "434000",
						"title": "沙市区",
						"pinyin": "shashi",
						"pid": "1782"
					},
					{
						"area_id": "434020",
						"title": "荆州区",
						"pinyin": "jingzhou",
						"pid": "1782"
					},
					{
						"area_id": "434300",
						"title": "公安县",
						"pinyin": "gong'an",
						"pid": "1782"
					},
					{
						"area_id": "433300",
						"title": "监利县",
						"pinyin": "jianli",
						"pid": "1782"
					},
					{
						"area_id": "434101",
						"title": "江陵县",
						"pinyin": "jiangling",
						"pid": "1782"
					},
					{
						"area_id": "434400",
						"title": "石首市",
						"pinyin": "shishou",
						"pid": "1782"
					},
					{
						"area_id": "433200",
						"title": "洪湖市",
						"pinyin": "honghu",
						"pid": "1782"
					},
					{
						"area_id": "434200",
						"title": "松滋市",
						"pinyin": "songzi",
						"pid": "1782"
					}
				]
			},
			{
				"area_id": "438000",
				"title": "黄冈市",
				"pinyin": "huanggang",
				"pid": "1709",
				"child": [
					{
						"area_id": "438000",
						"title": "黄州区",
						"pinyin": "huangzhou",
						"pid": "1791"
					},
					{
						"area_id": "438800",
						"title": "团风县",
						"pinyin": "tuanfeng",
						"pid": "1791"
					},
					{
						"area_id": "438401",
						"title": "红安县",
						"pinyin": "hong'an",
						"pid": "1791"
					},
					{
						"area_id": "438600",
						"title": "罗田县",
						"pinyin": "luotian",
						"pid": "1791"
					},
					{
						"area_id": "438700",
						"title": "英山县",
						"pinyin": "yingshan",
						"pid": "1791"
					},
					{
						"area_id": "438200",
						"title": "浠水县",
						"pinyin": "xishui",
						"pid": "1791"
					},
					{
						"area_id": "435300",
						"title": "蕲春县",
						"pinyin": "qichun",
						"pid": "1791"
					},
					{
						"area_id": "435500",
						"title": "黄梅县",
						"pinyin": "huangmei",
						"pid": "1791"
					},
					{
						"area_id": "438300",
						"title": "麻城市",
						"pinyin": "macheng",
						"pid": "1791"
					},
					{
						"area_id": "435400",
						"title": "武穴市",
						"pinyin": "wuxue",
						"pid": "1791"
					}
				]
			},
			{
				"area_id": "437000",
				"title": "咸宁市",
				"pinyin": "xianning",
				"pid": "1709",
				"child": [
					{
						"area_id": "437000",
						"title": "咸安区",
						"pinyin": "xian'an",
						"pid": "1802"
					},
					{
						"area_id": "437200",
						"title": "嘉鱼县",
						"pinyin": "jiayu",
						"pid": "1802"
					},
					{
						"area_id": "437400",
						"title": "通城县",
						"pinyin": "tongcheng",
						"pid": "1802"
					},
					{
						"area_id": "437500",
						"title": "崇阳县",
						"pinyin": "chongyang",
						"pid": "1802"
					},
					{
						"area_id": "437600",
						"title": "通山县",
						"pinyin": "tongshan",
						"pid": "1802"
					},
					{
						"area_id": "437300",
						"title": "赤壁市",
						"pinyin": "chibi",
						"pid": "1802"
					}
				]
			},
			{
				"area_id": "441300",
				"title": "随州市",
				"pinyin": "suizhou",
				"pid": "1709",
				"child": [
					{
						"area_id": "441300",
						"title": "曾都区",
						"pinyin": "zengdu",
						"pid": "1809"
					},
					{
						"area_id": "441309",
						"title": "随县",
						"pinyin": "suixian",
						"pid": "1809"
					},
					{
						"area_id": "432700",
						"title": "广水市",
						"pinyin": "guangshui",
						"pid": "1809"
					}
				]
			},
			{
				"area_id": "445000",
				"title": "恩施土家族苗族自治州",
				"pinyin": "enshi",
				"pid": "1709",
				"child": [
					{
						"area_id": "445000",
						"title": "恩施市",
						"pinyin": "enshi",
						"pid": "1813"
					},
					{
						"area_id": "445400",
						"title": "利川市",
						"pinyin": "lichuan",
						"pid": "1813"
					},
					{
						"area_id": "445300",
						"title": "建始县",
						"pinyin": "jianshi",
						"pid": "1813"
					},
					{
						"area_id": "444300",
						"title": "巴东县",
						"pinyin": "badong",
						"pid": "1813"
					},
					{
						"area_id": "445500",
						"title": "宣恩县",
						"pinyin": "xuanen",
						"pid": "1813"
					},
					{
						"area_id": "445600",
						"title": "咸丰县",
						"pinyin": "xianfeng",
						"pid": "1813"
					},
					{
						"area_id": "445700",
						"title": "来凤县",
						"pinyin": "laifeng",
						"pid": "1813"
					},
					{
						"area_id": "445800",
						"title": "鹤峰县",
						"pinyin": "hefeng",
						"pid": "1813"
					}
				]
			},
			{
				"area_id": "",
				"title": "直辖县级",
				"pinyin": "",
				"pid": "1709",
				"child": [
					{
						"area_id": "433000",
						"title": "仙桃市",
						"pinyin": "xiantao",
						"pid": "1822"
					},
					{
						"area_id": "433100",
						"title": "潜江市",
						"pinyin": "qianjiang",
						"pid": "1822"
					},
					{
						"area_id": "431700",
						"title": "天门市",
						"pinyin": "tianmen",
						"pid": "1822"
					},
					{
						"area_id": "442400",
						"title": "神农架林区",
						"pinyin": "shennongjia",
						"pid": "1822"
					}
				]
			}
		]
	},
	{
		"area_id": "410011",
		"title": "湖南省",
		"pinyin": "hunan",
		"pid": "0",
		"child": [
			{
				"area_id": "410005",
				"title": "长沙市",
				"pinyin": "changsha",
				"pid": "1827",
				"child": [
					{
						"area_id": "410011",
						"title": "芙蓉区",
						"pinyin": "furong",
						"pid": "1828"
					},
					{
						"area_id": "410004",
						"title": "天心区",
						"pinyin": "tianxin",
						"pid": "1828"
					},
					{
						"area_id": "410013",
						"title": "岳麓区",
						"pinyin": "yuelu",
						"pid": "1828"
					},
					{
						"area_id": "410008",
						"title": "开福区",
						"pinyin": "kaifu",
						"pid": "1828"
					},
					{
						"area_id": "410011",
						"title": "雨花区",
						"pinyin": "yuhua",
						"pid": "1828"
					},
					{
						"area_id": "410200",
						"title": "望城区",
						"pinyin": "wangcheng",
						"pid": "1828"
					},
					{
						"area_id": "410100",
						"title": "长沙县",
						"pinyin": "changsha",
						"pid": "1828"
					},
					{
						"area_id": "410600",
						"title": "宁乡县",
						"pinyin": "ningxiang",
						"pid": "1828"
					},
					{
						"area_id": "410300",
						"title": "浏阳市",
						"pinyin": "liuyang",
						"pid": "1828"
					}
				]
			},
			{
				"area_id": "412000",
				"title": "株洲市",
				"pinyin": "zhuzhou",
				"pid": "1827",
				"child": [
					{
						"area_id": "412000",
						"title": "荷塘区",
						"pinyin": "hetang",
						"pid": "1838"
					},
					{
						"area_id": "412000",
						"title": "芦淞区",
						"pinyin": "lusong",
						"pid": "1838"
					},
					{
						"area_id": "412005",
						"title": "石峰区",
						"pinyin": "shifeng",
						"pid": "1838"
					},
					{
						"area_id": "412007",
						"title": "天元区",
						"pinyin": "tianyuan",
						"pid": "1838"
					},
					{
						"area_id": "412100",
						"title": "株洲县",
						"pinyin": "zhuzhou",
						"pid": "1838"
					},
					{
						"area_id": "412300",
						"title": "攸县",
						"pinyin": "youxian",
						"pid": "1838"
					},
					{
						"area_id": "412400",
						"title": "茶陵县",
						"pinyin": "chaling",
						"pid": "1838"
					},
					{
						"area_id": "412500",
						"title": "炎陵县",
						"pinyin": "yanling",
						"pid": "1838"
					},
					{
						"area_id": "412200",
						"title": "醴陵市",
						"pinyin": "liling",
						"pid": "1838"
					}
				]
			},
			{
				"area_id": "411100",
				"title": "湘潭市",
				"pinyin": "xiangtan",
				"pid": "1827",
				"child": [
					{
						"area_id": "411100",
						"title": "雨湖区",
						"pinyin": "yuhu",
						"pid": "1848"
					},
					{
						"area_id": "411101",
						"title": "岳塘区",
						"pinyin": "yuetang",
						"pid": "1848"
					},
					{
						"area_id": "411228",
						"title": "湘潭县",
						"pinyin": "xiangtan",
						"pid": "1848"
					},
					{
						"area_id": "411400",
						"title": "湘乡市",
						"pinyin": "xiangxiang",
						"pid": "1848"
					},
					{
						"area_id": "411300",
						"title": "韶山市",
						"pinyin": "shaoshan",
						"pid": "1848"
					}
				]
			},
			{
				"area_id": "421001",
				"title": "衡阳市",
				"pinyin": "hengyang",
				"pid": "1827",
				"child": [
					{
						"area_id": "421002",
						"title": "珠晖区",
						"pinyin": "zhuhui",
						"pid": "1854"
					},
					{
						"area_id": "421001",
						"title": "雁峰区",
						"pinyin": "yanfeng",
						"pid": "1854"
					},
					{
						"area_id": "421005",
						"title": "石鼓区",
						"pinyin": "shigu",
						"pid": "1854"
					},
					{
						"area_id": "421001",
						"title": "蒸湘区",
						"pinyin": "zhengxiang",
						"pid": "1854"
					},
					{
						"area_id": "421900",
						"title": "南岳区",
						"pinyin": "nanyue",
						"pid": "1854"
					},
					{
						"area_id": "421200",
						"title": "衡阳县",
						"pinyin": "hengyang",
						"pid": "1854"
					},
					{
						"area_id": "421131",
						"title": "衡南县",
						"pinyin": "hengnan",
						"pid": "1854"
					},
					{
						"area_id": "421300",
						"title": "衡山县",
						"pinyin": "hengshan",
						"pid": "1854"
					},
					{
						"area_id": "421400",
						"title": "衡东县",
						"pinyin": "hengdong",
						"pid": "1854"
					},
					{
						"area_id": "421600",
						"title": "祁东县",
						"pinyin": "qidong",
						"pid": "1854"
					},
					{
						"area_id": "421800",
						"title": "耒阳市",
						"pinyin": "leiyang",
						"pid": "1854"
					},
					{
						"area_id": "421500",
						"title": "常宁市",
						"pinyin": "changning",
						"pid": "1854"
					}
				]
			},
			{
				"area_id": "422000",
				"title": "邵阳市",
				"pinyin": "shaoyang",
				"pid": "1827",
				"child": [
					{
						"area_id": "422001",
						"title": "双清区",
						"pinyin": "shuangqing",
						"pid": "1867"
					},
					{
						"area_id": "422000",
						"title": "大祥区",
						"pinyin": "daxiang",
						"pid": "1867"
					},
					{
						"area_id": "422007",
						"title": "北塔区",
						"pinyin": "beita",
						"pid": "1867"
					},
					{
						"area_id": "422800",
						"title": "邵东县",
						"pinyin": "shaodong",
						"pid": "1867"
					},
					{
						"area_id": "422900",
						"title": "新邵县",
						"pinyin": "xinshao",
						"pid": "1867"
					},
					{
						"area_id": "422100",
						"title": "邵阳县",
						"pinyin": "shaoyang",
						"pid": "1867"
					},
					{
						"area_id": "422200",
						"title": "隆回县",
						"pinyin": "longhui",
						"pid": "1867"
					},
					{
						"area_id": "422300",
						"title": "洞口县",
						"pinyin": "dongkou",
						"pid": "1867"
					},
					{
						"area_id": "422600",
						"title": "绥宁县",
						"pinyin": "suining",
						"pid": "1867"
					},
					{
						"area_id": "422700",
						"title": "新宁县",
						"pinyin": "xinning",
						"pid": "1867"
					},
					{
						"area_id": "422500",
						"title": "城步苗族自治县",
						"pinyin": "chengbu",
						"pid": "1867"
					},
					{
						"area_id": "422400",
						"title": "武冈市",
						"pinyin": "wugang",
						"pid": "1867"
					}
				]
			},
			{
				"area_id": "414000",
				"title": "岳阳市",
				"pinyin": "yueyang",
				"pid": "1827",
				"child": [
					{
						"area_id": "414000",
						"title": "岳阳楼区",
						"pinyin": "yueyanglou",
						"pid": "1880"
					},
					{
						"area_id": "414009",
						"title": "云溪区",
						"pinyin": "yunxi",
						"pid": "1880"
					},
					{
						"area_id": "414005",
						"title": "君山区",
						"pinyin": "junshan",
						"pid": "1880"
					},
					{
						"area_id": "414100",
						"title": "岳阳县",
						"pinyin": "yueyang",
						"pid": "1880"
					},
					{
						"area_id": "414200",
						"title": "华容县",
						"pinyin": "huarong",
						"pid": "1880"
					},
					{
						"area_id": "414600",
						"title": "湘阴县",
						"pinyin": "xiangyin",
						"pid": "1880"
					},
					{
						"area_id": "414500",
						"title": "平江县",
						"pinyin": "pingjiang",
						"pid": "1880"
					},
					{
						"area_id": "414400",
						"title": "汨罗市",
						"pinyin": "miluo",
						"pid": "1880"
					},
					{
						"area_id": "414300",
						"title": "临湘市",
						"pinyin": "linxiang",
						"pid": "1880"
					}
				]
			},
			{
				"area_id": "415000",
				"title": "常德市",
				"pinyin": "changde",
				"pid": "1827",
				"child": [
					{
						"area_id": "415000",
						"title": "武陵区",
						"pinyin": "wuling",
						"pid": "1890"
					},
					{
						"area_id": "415101",
						"title": "鼎城区",
						"pinyin": "dingcheng",
						"pid": "1890"
					},
					{
						"area_id": "415600",
						"title": "安乡县",
						"pinyin": "anxiang",
						"pid": "1890"
					},
					{
						"area_id": "415900",
						"title": "汉寿县",
						"pinyin": "hanshou",
						"pid": "1890"
					},
					{
						"area_id": "415500",
						"title": "澧县",
						"pinyin": "lixian",
						"pid": "1890"
					},
					{
						"area_id": "415200",
						"title": "临澧县",
						"pinyin": "linli",
						"pid": "1890"
					},
					{
						"area_id": "415700",
						"title": "桃源县",
						"pinyin": "taoyuan",
						"pid": "1890"
					},
					{
						"area_id": "415300",
						"title": "石门县",
						"pinyin": "shimen",
						"pid": "1890"
					},
					{
						"area_id": "415400",
						"title": "津市市",
						"pinyin": "jinshi",
						"pid": "1890"
					}
				]
			},
			{
				"area_id": "427000",
				"title": "张家界市",
				"pinyin": "zhangjiajie",
				"pid": "1827",
				"child": [
					{
						"area_id": "427000",
						"title": "永定区",
						"pinyin": "yongding",
						"pid": "1900"
					},
					{
						"area_id": "427400",
						"title": "武陵源区",
						"pinyin": "wulingyuan",
						"pid": "1900"
					},
					{
						"area_id": "427200",
						"title": "慈利县",
						"pinyin": "cili",
						"pid": "1900"
					},
					{
						"area_id": "427100",
						"title": "桑植县",
						"pinyin": "sangzhi",
						"pid": "1900"
					}
				]
			},
			{
				"area_id": "413000",
				"title": "益阳市",
				"pinyin": "yiyang",
				"pid": "1827",
				"child": [
					{
						"area_id": "413001",
						"title": "资阳区",
						"pinyin": "ziyang",
						"pid": "1905"
					},
					{
						"area_id": "413002",
						"title": "赫山区",
						"pinyin": "heshan",
						"pid": "1905"
					},
					{
						"area_id": "413200",
						"title": "南县",
						"pinyin": "nanxian",
						"pid": "1905"
					},
					{
						"area_id": "413400",
						"title": "桃江县",
						"pinyin": "taojiang",
						"pid": "1905"
					},
					{
						"area_id": "413500",
						"title": "安化县",
						"pinyin": "anhua",
						"pid": "1905"
					},
					{
						"area_id": "413100",
						"title": "沅江市",
						"pinyin": "yuanjiang",
						"pid": "1905"
					}
				]
			},
			{
				"area_id": "423000",
				"title": "郴州市",
				"pinyin": "chenzhou",
				"pid": "1827",
				"child": [
					{
						"area_id": "423000",
						"title": "北湖区",
						"pinyin": "beihu",
						"pid": "1912"
					},
					{
						"area_id": "423000",
						"title": "苏仙区",
						"pinyin": "suxian",
						"pid": "1912"
					},
					{
						"area_id": "424400",
						"title": "桂阳县",
						"pinyin": "guiyang",
						"pid": "1912"
					},
					{
						"area_id": "424200",
						"title": "宜章县",
						"pinyin": "yizhang",
						"pid": "1912"
					},
					{
						"area_id": "423300",
						"title": "永兴县",
						"pinyin": "yongxing",
						"pid": "1912"
					},
					{
						"area_id": "424500",
						"title": "嘉禾县",
						"pinyin": "jiahe",
						"pid": "1912"
					},
					{
						"area_id": "424300",
						"title": "临武县",
						"pinyin": "linwu",
						"pid": "1912"
					},
					{
						"area_id": "424100",
						"title": "汝城县",
						"pinyin": "rucheng",
						"pid": "1912"
					},
					{
						"area_id": "423500",
						"title": "桂东县",
						"pinyin": "guidong",
						"pid": "1912"
					},
					{
						"area_id": "423600",
						"title": "安仁县",
						"pinyin": "anren",
						"pid": "1912"
					},
					{
						"area_id": "423400",
						"title": "资兴市",
						"pinyin": "zixing",
						"pid": "1912"
					}
				]
			},
			{
				"area_id": "425000",
				"title": "永州市",
				"pinyin": "yongzhou",
				"pid": "1827",
				"child": [
					{
						"area_id": "425100",
						"title": "零陵区",
						"pinyin": "lingling",
						"pid": "1924"
					},
					{
						"area_id": "425100",
						"title": "冷水滩区",
						"pinyin": "lengshuitan",
						"pid": "1924"
					},
					{
						"area_id": "426100",
						"title": "祁阳县",
						"pinyin": "qiyang",
						"pid": "1924"
					},
					{
						"area_id": "425900",
						"title": "东安县",
						"pinyin": "dong'an",
						"pid": "1924"
					},
					{
						"area_id": "425200",
						"title": "双牌县",
						"pinyin": "shuangpai",
						"pid": "1924"
					},
					{
						"area_id": "425300",
						"title": "道县",
						"pinyin": "daoxian",
						"pid": "1924"
					},
					{
						"area_id": "425400",
						"title": "江永县",
						"pinyin": "jiangyong",
						"pid": "1924"
					},
					{
						"area_id": "425600",
						"title": "宁远县",
						"pinyin": "ningyuan",
						"pid": "1924"
					},
					{
						"area_id": "425800",
						"title": "蓝山县",
						"pinyin": "lanshan",
						"pid": "1924"
					},
					{
						"area_id": "425700",
						"title": "新田县",
						"pinyin": "xintian",
						"pid": "1924"
					},
					{
						"area_id": "425500",
						"title": "江华瑶族自治县",
						"pinyin": "jianghua",
						"pid": "1924"
					}
				]
			},
			{
				"area_id": "418000",
				"title": "怀化市",
				"pinyin": "huaihua",
				"pid": "1827",
				"child": [
					{
						"area_id": "418000",
						"title": "鹤城区",
						"pinyin": "hecheng",
						"pid": "1936"
					},
					{
						"area_id": "418005",
						"title": "中方县",
						"pinyin": "zhongfang",
						"pid": "1936"
					},
					{
						"area_id": "419600",
						"title": "沅陵县",
						"pinyin": "yuanling",
						"pid": "1936"
					},
					{
						"area_id": "419500",
						"title": "辰溪县",
						"pinyin": "chenxi",
						"pid": "1936"
					},
					{
						"area_id": "419300",
						"title": "溆浦县",
						"pinyin": "xupu",
						"pid": "1936"
					},
					{
						"area_id": "418300",
						"title": "会同县",
						"pinyin": "huitong",
						"pid": "1936"
					},
					{
						"area_id": "419400",
						"title": "麻阳苗族自治县",
						"pinyin": "mayang",
						"pid": "1936"
					},
					{
						"area_id": "419200",
						"title": "新晃侗族自治县",
						"pinyin": "xinhuang",
						"pid": "1936"
					},
					{
						"area_id": "419100",
						"title": "芷江侗族自治县",
						"pinyin": "zhijiang",
						"pid": "1936"
					},
					{
						"area_id": "418400",
						"title": "靖州苗族侗族自治县",
						"pinyin": "jingzhou",
						"pid": "1936"
					},
					{
						"area_id": "418500",
						"title": "通道侗族自治县",
						"pinyin": "tongdao",
						"pid": "1936"
					},
					{
						"area_id": "418100",
						"title": "洪江市",
						"pinyin": "hongjiang",
						"pid": "1936"
					}
				]
			},
			{
				"area_id": "417000",
				"title": "娄底市",
				"pinyin": "loudi",
				"pid": "1827",
				"child": [
					{
						"area_id": "417000",
						"title": "娄星区",
						"pinyin": "louxing",
						"pid": "1949"
					},
					{
						"area_id": "417700",
						"title": "双峰县",
						"pinyin": "shuangfeng",
						"pid": "1949"
					},
					{
						"area_id": "417600",
						"title": "新化县",
						"pinyin": "xinhua",
						"pid": "1949"
					},
					{
						"area_id": "417500",
						"title": "冷水江市",
						"pinyin": "lengshuijiang",
						"pid": "1949"
					},
					{
						"area_id": "417100",
						"title": "涟源市",
						"pinyin": "lianyuan",
						"pid": "1949"
					}
				]
			},
			{
				"area_id": "416000",
				"title": "湘西土家族苗族自治州",
				"pinyin": "xiangxi",
				"pid": "1827",
				"child": [
					{
						"area_id": "416000",
						"title": "吉首市",
						"pinyin": "jishou",
						"pid": "1955"
					},
					{
						"area_id": "416100",
						"title": "泸溪县",
						"pinyin": "luxi",
						"pid": "1955"
					},
					{
						"area_id": "416200",
						"title": "凤凰县",
						"pinyin": "fenghuang",
						"pid": "1955"
					},
					{
						"area_id": "416400",
						"title": "花垣县",
						"pinyin": "huayuan",
						"pid": "1955"
					},
					{
						"area_id": "416500",
						"title": "保靖县",
						"pinyin": "baojing",
						"pid": "1955"
					},
					{
						"area_id": "416300",
						"title": "古丈县",
						"pinyin": "guzhang",
						"pid": "1955"
					},
					{
						"area_id": "416700",
						"title": "永顺县",
						"pinyin": "yongshun",
						"pid": "1955"
					},
					{
						"area_id": "416800",
						"title": "龙山县",
						"pinyin": "longshan",
						"pid": "1955"
					}
				]
			}
		]
	},
	{
		"area_id": "510000",
		"title": "广东省",
		"pinyin": "guangdong",
		"pid": "0",
		"child": [
			{
				"area_id": "510032",
				"title": "广州市",
				"pinyin": "guangzhou",
				"pid": "1964",
				"child": [
					{
						"area_id": "510170",
						"title": "荔湾区",
						"pinyin": "liwan",
						"pid": "1965"
					},
					{
						"area_id": "510030",
						"title": "越秀区",
						"pinyin": "yuexiu",
						"pid": "1965"
					},
					{
						"area_id": "510300",
						"title": "海珠区",
						"pinyin": "haizhu",
						"pid": "1965"
					},
					{
						"area_id": "510665",
						"title": "天河区",
						"pinyin": "tianhe",
						"pid": "1965"
					},
					{
						"area_id": "510405",
						"title": "白云区",
						"pinyin": "baiyun",
						"pid": "1965"
					},
					{
						"area_id": "510700",
						"title": "黄埔区",
						"pinyin": "huangpu",
						"pid": "1965"
					},
					{
						"area_id": "511400",
						"title": "番禺区",
						"pinyin": "panyu",
						"pid": "1965"
					},
					{
						"area_id": "510800",
						"title": "花都区",
						"pinyin": "huadu",
						"pid": "1965"
					},
					{
						"area_id": "511458",
						"title": "南沙区",
						"pinyin": "nansha",
						"pid": "1965"
					},
					{
						"area_id": "510900",
						"title": "从化区",
						"pinyin": "conghua",
						"pid": "1965"
					},
					{
						"area_id": "511300",
						"title": "增城区",
						"pinyin": "zengcheng",
						"pid": "1965"
					}
				]
			},
			{
				"area_id": "512002",
				"title": "韶关市",
				"pinyin": "shaoguan",
				"pid": "1964",
				"child": [
					{
						"area_id": "512026",
						"title": "武江区",
						"pinyin": "wujiang",
						"pid": "1977"
					},
					{
						"area_id": "512023",
						"title": "浈江区",
						"pinyin": "zhenjiang",
						"pid": "1977"
					},
					{
						"area_id": "512101",
						"title": "曲江区",
						"pinyin": "qujiang",
						"pid": "1977"
					},
					{
						"area_id": "512500",
						"title": "始兴县",
						"pinyin": "shixing",
						"pid": "1977"
					},
					{
						"area_id": "512300",
						"title": "仁化县",
						"pinyin": "renhua",
						"pid": "1977"
					},
					{
						"area_id": "512600",
						"title": "翁源县",
						"pinyin": "wengyuan",
						"pid": "1977"
					},
					{
						"area_id": "512700",
						"title": "乳源瑶族自治县",
						"pinyin": "ruyuan",
						"pid": "1977"
					},
					{
						"area_id": "511100",
						"title": "新丰县",
						"pinyin": "xinfeng",
						"pid": "1977"
					},
					{
						"area_id": "512200",
						"title": "乐昌市",
						"pinyin": "lechang",
						"pid": "1977"
					},
					{
						"area_id": "512400",
						"title": "南雄市",
						"pinyin": "nanxiong",
						"pid": "1977"
					}
				]
			},
			{
				"area_id": "518035",
				"title": "深圳市",
				"pinyin": "shenzhen",
				"pid": "1964",
				"child": [
					{
						"area_id": "518021",
						"title": "罗湖区",
						"pinyin": "luohu",
						"pid": "1988"
					},
					{
						"area_id": "518048",
						"title": "福田区",
						"pinyin": "futian",
						"pid": "1988"
					},
					{
						"area_id": "518051",
						"title": "南山区",
						"pinyin": "nanshan",
						"pid": "1988"
					},
					{
						"area_id": "518101",
						"title": "宝安区",
						"pinyin": "bao'an",
						"pid": "1988"
					},
					{
						"area_id": "518172",
						"title": "龙岗区",
						"pinyin": "longgang",
						"pid": "1988"
					},
					{
						"area_id": "518081",
						"title": "盐田区",
						"pinyin": "yantian",
						"pid": "1988"
					},
					{
						"area_id": "518100",
						"title": "光明新区",
						"pinyin": "guangmingxinqu",
						"pid": "1988"
					},
					{
						"area_id": "518000",
						"title": "坪山新区",
						"pinyin": "pingshanxinqu",
						"pid": "1988"
					},
					{
						"area_id": "518000",
						"title": "大鹏新区",
						"pinyin": "dapengxinqu",
						"pid": "1988"
					},
					{
						"area_id": "518100",
						"title": "龙华新区",
						"pinyin": "longhuaxinqu",
						"pid": "1988"
					}
				]
			},
			{
				"area_id": "519000",
				"title": "珠海市",
				"pinyin": "zhuhai",
				"pid": "1964",
				"child": [
					{
						"area_id": "519000",
						"title": "香洲区",
						"pinyin": "xiangzhou",
						"pid": "1999"
					},
					{
						"area_id": "519110",
						"title": "斗门区",
						"pinyin": "doumen",
						"pid": "1999"
					},
					{
						"area_id": "519040",
						"title": "金湾区",
						"pinyin": "jinwan",
						"pid": "1999"
					}
				]
			},
			{
				"area_id": "515041",
				"title": "汕头市",
				"pinyin": "shantou",
				"pid": "1964",
				"child": [
					{
						"area_id": "515041",
						"title": "龙湖区",
						"pinyin": "longhu",
						"pid": "2003"
					},
					{
						"area_id": "515041",
						"title": "金平区",
						"pinyin": "jinping",
						"pid": "2003"
					},
					{
						"area_id": "515071",
						"title": "濠江区",
						"pinyin": "haojiang",
						"pid": "2003"
					},
					{
						"area_id": "515100",
						"title": "潮阳区",
						"pinyin": "chaoyang",
						"pid": "2003"
					},
					{
						"area_id": "515144",
						"title": "潮南区",
						"pinyin": "chaonan",
						"pid": "2003"
					},
					{
						"area_id": "515800",
						"title": "澄海区",
						"pinyin": "chenghai",
						"pid": "2003"
					},
					{
						"area_id": "515900",
						"title": "南澳县",
						"pinyin": "nanao",
						"pid": "2003"
					}
				]
			},
			{
				"area_id": "528000",
				"title": "佛山市",
				"pinyin": "foshan",
				"pid": "1964",
				"child": [
					{
						"area_id": "528000",
						"title": "禅城区",
						"pinyin": "chancheng",
						"pid": "2011"
					},
					{
						"area_id": "528251",
						"title": "南海区",
						"pinyin": "nanhai",
						"pid": "2011"
					},
					{
						"area_id": "528300",
						"title": "顺德区",
						"pinyin": "shunde",
						"pid": "2011"
					},
					{
						"area_id": "528133",
						"title": "三水区",
						"pinyin": "sanshui",
						"pid": "2011"
					},
					{
						"area_id": "528500",
						"title": "高明区",
						"pinyin": "gaoming",
						"pid": "2011"
					}
				]
			},
			{
				"area_id": "529000",
				"title": "江门市",
				"pinyin": "jiangmen",
				"pid": "1964",
				"child": [
					{
						"area_id": "529000",
						"title": "蓬江区",
						"pinyin": "pengjiang",
						"pid": "2017"
					},
					{
						"area_id": "529040",
						"title": "江海区",
						"pinyin": "jianghai",
						"pid": "2017"
					},
					{
						"area_id": "529100",
						"title": "新会区",
						"pinyin": "xinhui",
						"pid": "2017"
					},
					{
						"area_id": "529200",
						"title": "台山市",
						"pinyin": "taishan",
						"pid": "2017"
					},
					{
						"area_id": "529337",
						"title": "开平市",
						"pinyin": "kaiping",
						"pid": "2017"
					},
					{
						"area_id": "529700",
						"title": "鹤山市",
						"pinyin": "heshan",
						"pid": "2017"
					},
					{
						"area_id": "529400",
						"title": "恩平市",
						"pinyin": "enping",
						"pid": "2017"
					}
				]
			},
			{
				"area_id": "524047",
				"title": "湛江市",
				"pinyin": "zhanjiang",
				"pid": "1964",
				"child": [
					{
						"area_id": "524033",
						"title": "赤坎区",
						"pinyin": "chikan",
						"pid": "2025"
					},
					{
						"area_id": "524011",
						"title": "霞山区",
						"pinyin": "xiashan",
						"pid": "2025"
					},
					{
						"area_id": "524057",
						"title": "坡头区",
						"pinyin": "potou",
						"pid": "2025"
					},
					{
						"area_id": "524094",
						"title": "麻章区",
						"pinyin": "mazhang",
						"pid": "2025"
					},
					{
						"area_id": "524300",
						"title": "遂溪县",
						"pinyin": "suixi",
						"pid": "2025"
					},
					{
						"area_id": "524100",
						"title": "徐闻县",
						"pinyin": "xuwen",
						"pid": "2025"
					},
					{
						"area_id": "524400",
						"title": "廉江市",
						"pinyin": "lianjiang",
						"pid": "2025"
					},
					{
						"area_id": "524200",
						"title": "雷州市",
						"pinyin": "leizhou",
						"pid": "2025"
					},
					{
						"area_id": "524500",
						"title": "吴川市",
						"pinyin": "wuchuan",
						"pid": "2025"
					}
				]
			},
			{
				"area_id": "525000",
				"title": "茂名市",
				"pinyin": "maoming",
				"pid": "1964",
				"child": [
					{
						"area_id": "525000",
						"title": "茂南区",
						"pinyin": "maonan",
						"pid": "2035"
					},
					{
						"area_id": "525400",
						"title": "电白区",
						"pinyin": "dianbai",
						"pid": "2035"
					},
					{
						"area_id": "525200",
						"title": "高州市",
						"pinyin": "gaozhou",
						"pid": "2035"
					},
					{
						"area_id": "525100",
						"title": "化州市",
						"pinyin": "huazhou",
						"pid": "2035"
					},
					{
						"area_id": "525300",
						"title": "信宜市",
						"pinyin": "xinyi",
						"pid": "2035"
					}
				]
			},
			{
				"area_id": "526040",
				"title": "肇庆市",
				"pinyin": "zhaoqing",
				"pid": "1964",
				"child": [
					{
						"area_id": "526060",
						"title": "端州区",
						"pinyin": "duanzhou",
						"pid": "2041"
					},
					{
						"area_id": "526070",
						"title": "鼎湖区",
						"pinyin": "dinghu",
						"pid": "2041"
					},
					{
						"area_id": "526300",
						"title": "广宁县",
						"pinyin": "guangning",
						"pid": "2041"
					},
					{
						"area_id": "526400",
						"title": "怀集县",
						"pinyin": "huaiji",
						"pid": "2041"
					},
					{
						"area_id": "526500",
						"title": "封开县",
						"pinyin": "fengkai",
						"pid": "2041"
					},
					{
						"area_id": "526600",
						"title": "德庆县",
						"pinyin": "deqing",
						"pid": "2041"
					},
					{
						"area_id": "526100",
						"title": "高要市",
						"pinyin": "gaoyao",
						"pid": "2041"
					},
					{
						"area_id": "526200",
						"title": "四会市",
						"pinyin": "sihui",
						"pid": "2041"
					}
				]
			},
			{
				"area_id": "516000",
				"title": "惠州市",
				"pinyin": "huizhou",
				"pid": "1964",
				"child": [
					{
						"area_id": "516008",
						"title": "惠城区",
						"pinyin": "huicheng",
						"pid": "2050"
					},
					{
						"area_id": "516211",
						"title": "惠阳区",
						"pinyin": "huiyang",
						"pid": "2050"
					},
					{
						"area_id": "516100",
						"title": "博罗县",
						"pinyin": "boluo",
						"pid": "2050"
					},
					{
						"area_id": "516300",
						"title": "惠东县",
						"pinyin": "huidong",
						"pid": "2050"
					},
					{
						"area_id": "516800",
						"title": "龙门县",
						"pinyin": "longmen",
						"pid": "2050"
					}
				]
			},
			{
				"area_id": "514021",
				"title": "梅州市",
				"pinyin": "meizhou",
				"pid": "1964",
				"child": [
					{
						"area_id": "514000",
						"title": "梅江区",
						"pinyin": "meijiang",
						"pid": "2056"
					},
					{
						"area_id": "514787",
						"title": "梅县区",
						"pinyin": "meixian",
						"pid": "2056"
					},
					{
						"area_id": "514200",
						"title": "大埔县",
						"pinyin": "dabu",
						"pid": "2056"
					},
					{
						"area_id": "514300",
						"title": "丰顺县",
						"pinyin": "fengshun",
						"pid": "2056"
					},
					{
						"area_id": "514400",
						"title": "五华县",
						"pinyin": "wuhua",
						"pid": "2056"
					},
					{
						"area_id": "514600",
						"title": "平远县",
						"pinyin": "pingyuan",
						"pid": "2056"
					},
					{
						"area_id": "514100",
						"title": "蕉岭县",
						"pinyin": "jiaoling",
						"pid": "2056"
					},
					{
						"area_id": "514500",
						"title": "兴宁市",
						"pinyin": "xingning",
						"pid": "2056"
					}
				]
			},
			{
				"area_id": "516600",
				"title": "汕尾市",
				"pinyin": "shanwei",
				"pid": "1964",
				"child": [
					{
						"area_id": "516600",
						"title": "城区",
						"pinyin": "chengqu",
						"pid": "2065"
					},
					{
						"area_id": "516400",
						"title": "海丰县",
						"pinyin": "haifeng",
						"pid": "2065"
					},
					{
						"area_id": "516700",
						"title": "陆河县",
						"pinyin": "luhe",
						"pid": "2065"
					},
					{
						"area_id": "516500",
						"title": "陆丰市",
						"pinyin": "lufeng",
						"pid": "2065"
					}
				]
			},
			{
				"area_id": "517000",
				"title": "河源市",
				"pinyin": "heyuan",
				"pid": "1964",
				"child": [
					{
						"area_id": "517000",
						"title": "源城区",
						"pinyin": "yuancheng",
						"pid": "2070"
					},
					{
						"area_id": "517400",
						"title": "紫金县",
						"pinyin": "zijin",
						"pid": "2070"
					},
					{
						"area_id": "517300",
						"title": "龙川县",
						"pinyin": "longchuan",
						"pid": "2070"
					},
					{
						"area_id": "517100",
						"title": "连平县",
						"pinyin": "lianping",
						"pid": "2070"
					},
					{
						"area_id": "517200",
						"title": "和平县",
						"pinyin": "heping",
						"pid": "2070"
					},
					{
						"area_id": "517583",
						"title": "东源县",
						"pinyin": "dongyuan",
						"pid": "2070"
					}
				]
			},
			{
				"area_id": "529500",
				"title": "阳江市",
				"pinyin": "yangjiang",
				"pid": "1964",
				"child": [
					{
						"area_id": "529500",
						"title": "江城区",
						"pinyin": "jiangcheng",
						"pid": "2077"
					},
					{
						"area_id": "529900",
						"title": "阳东区",
						"pinyin": "yangdong",
						"pid": "2077"
					},
					{
						"area_id": "529800",
						"title": "阳西县",
						"pinyin": "yangxi",
						"pid": "2077"
					},
					{
						"area_id": "529600",
						"title": "阳春市",
						"pinyin": "yangchun",
						"pid": "2077"
					}
				]
			},
			{
				"area_id": "511500",
				"title": "清远市",
				"pinyin": "qingyuan",
				"pid": "1964",
				"child": [
					{
						"area_id": "511515",
						"title": "清城区",
						"pinyin": "qingcheng",
						"pid": "2082"
					},
					{
						"area_id": "511810",
						"title": "清新区",
						"pinyin": "qingxin",
						"pid": "2082"
					},
					{
						"area_id": "511600",
						"title": "佛冈县",
						"pinyin": "fogang",
						"pid": "2082"
					},
					{
						"area_id": "513100",
						"title": "阳山县",
						"pinyin": "yangshan",
						"pid": "2082"
					},
					{
						"area_id": "513200",
						"title": "连山壮族瑶族自治县",
						"pinyin": "lianshan",
						"pid": "2082"
					},
					{
						"area_id": "513300",
						"title": "连南瑶族自治县",
						"pinyin": "liannan",
						"pid": "2082"
					},
					{
						"area_id": "513000",
						"title": "英德市",
						"pinyin": "yingde",
						"pid": "2082"
					},
					{
						"area_id": "513400",
						"title": "连州市",
						"pinyin": "lianzhou",
						"pid": "2082"
					}
				]
			},
			{
				"area_id": "523888",
				"title": "东莞市",
				"pinyin": "dongguan",
				"pid": "1964",
				"child": [
					{
						"area_id": "523128",
						"title": "莞城区",
						"pinyin": "guancheng",
						"pid": "2091"
					},
					{
						"area_id": "523617",
						"title": "南城区",
						"pinyin": "nancheng",
						"pid": "2091"
					},
					{
						"area_id": "523039",
						"title": "万江区",
						"pinyin": "wanjiang",
						"pid": "2091"
					},
					{
						"area_id": "523290",
						"title": "石碣镇",
						"pinyin": "shijie",
						"pid": "2091"
					},
					{
						"area_id": "523326",
						"title": "石龙镇",
						"pinyin": "shilong",
						"pid": "2091"
					},
					{
						"area_id": "523380",
						"title": "茶山镇",
						"pinyin": "chashan",
						"pid": "2091"
					},
					{
						"area_id": "523346",
						"title": "石排镇",
						"pinyin": "shipai",
						"pid": "2091"
					},
					{
						"area_id": "523507",
						"title": "企石镇",
						"pinyin": "qishi",
						"pid": "2091"
					},
					{
						"area_id": "523471",
						"title": "横沥镇",
						"pinyin": "hengli",
						"pid": "2091"
					},
					{
						"area_id": "523520",
						"title": "桥头镇",
						"pinyin": "qiaotou",
						"pid": "2091"
					},
					{
						"area_id": "523592",
						"title": "谢岗镇",
						"pinyin": "xiegang",
						"pid": "2091"
					},
					{
						"area_id": "523451",
						"title": "东坑镇",
						"pinyin": "dongkeng",
						"pid": "2091"
					},
					{
						"area_id": "523560",
						"title": "常平镇",
						"pinyin": "changping",
						"pid": "2091"
					},
					{
						"area_id": "523411",
						"title": "寮步镇",
						"pinyin": "liaobu",
						"pid": "2091"
					},
					{
						"area_id": "523770",
						"title": "大朗镇",
						"pinyin": "dalang",
						"pid": "2091"
					},
					{
						"area_id": "523143",
						"title": "麻涌镇",
						"pinyin": "machong",
						"pid": "2091"
					},
					{
						"area_id": "523233",
						"title": "中堂镇",
						"pinyin": "zhongtang",
						"pid": "2091"
					},
					{
						"area_id": "523282",
						"title": "高埗镇",
						"pinyin": "gaobu",
						"pid": "2091"
					},
					{
						"area_id": "523619",
						"title": "樟木头镇",
						"pinyin": "zhangmutou",
						"pid": "2091"
					},
					{
						"area_id": "523835",
						"title": "大岭山镇",
						"pinyin": "dalingshan",
						"pid": "2091"
					},
					{
						"area_id": "523203",
						"title": "望牛墩镇",
						"pinyin": "wangniudun",
						"pid": "2091"
					},
					{
						"area_id": "523755",
						"title": "黄江镇",
						"pinyin": "huangjiang",
						"pid": "2091"
					},
					{
						"area_id": "523163",
						"title": "洪梅镇",
						"pinyin": "hongmei",
						"pid": "2091"
					},
					{
						"area_id": "523660",
						"title": "清溪镇",
						"pinyin": "qingxi",
						"pid": "2091"
					},
					{
						"area_id": "523988",
						"title": "沙田镇",
						"pinyin": "shatian",
						"pid": "2091"
					},
					{
						"area_id": "523171",
						"title": "道滘镇",
						"pinyin": "daojiao",
						"pid": "2091"
					},
					{
						"area_id": "523713",
						"title": "塘厦镇",
						"pinyin": "tangxia",
						"pid": "2091"
					},
					{
						"area_id": "523932",
						"title": "虎门镇",
						"pinyin": "humen",
						"pid": "2091"
					},
					{
						"area_id": "523960",
						"title": "厚街镇",
						"pinyin": "houjie",
						"pid": "2091"
					},
					{
						"area_id": "523690",
						"title": "凤岗镇",
						"pinyin": "fenggang",
						"pid": "2091"
					},
					{
						"area_id": "523850",
						"title": "长安镇",
						"pinyin": "chang'an",
						"pid": "2091"
					}
				]
			},
			{
				"area_id": "528403",
				"title": "中山市",
				"pinyin": "zhongshan",
				"pid": "1964",
				"child": [
					{
						"area_id": "528400",
						"title": "石岐区",
						"pinyin": "shiqi",
						"pid": "2123"
					},
					{
						"area_id": "528400",
						"title": "南区",
						"pinyin": "nanqu",
						"pid": "2123"
					},
					{
						"area_id": "528458",
						"title": "五桂山区",
						"pinyin": "wuguishan",
						"pid": "2123"
					},
					{
						"area_id": "528437",
						"title": "火炬开发区",
						"pinyin": "huoju",
						"pid": "2123"
					},
					{
						"area_id": "528429",
						"title": "黄圃镇",
						"pinyin": "huangpu",
						"pid": "2123"
					},
					{
						"area_id": "528421",
						"title": "南头镇",
						"pinyin": "nantou",
						"pid": "2123"
					},
					{
						"area_id": "528425",
						"title": "东凤镇",
						"pinyin": "dongfeng",
						"pid": "2123"
					},
					{
						"area_id": "528434",
						"title": "阜沙镇",
						"pinyin": "fusha",
						"pid": "2123"
					},
					{
						"area_id": "528415",
						"title": "小榄镇",
						"pinyin": "xiaolan",
						"pid": "2123"
					},
					{
						"area_id": "528400",
						"title": "东升镇",
						"pinyin": "dongsheng",
						"pid": "2123"
					},
					{
						"area_id": "528422",
						"title": "古镇镇",
						"pinyin": "guzhen",
						"pid": "2123"
					},
					{
						"area_id": "528478",
						"title": "横栏镇",
						"pinyin": "henglan",
						"pid": "2123"
					},
					{
						"area_id": "528422",
						"title": "三角镇",
						"pinyin": "sanjiao",
						"pid": "2123"
					},
					{
						"area_id": "528441",
						"title": "民众镇",
						"pinyin": "minzhong",
						"pid": "2123"
					},
					{
						"area_id": "528454",
						"title": "南朗镇",
						"pinyin": "nanlang",
						"pid": "2123"
					},
					{
						"area_id": "528447",
						"title": "港口镇",
						"pinyin": "gangkou",
						"pid": "2123"
					},
					{
						"area_id": "528476",
						"title": "大涌镇",
						"pinyin": "dayong",
						"pid": "2123"
					},
					{
						"area_id": "528471",
						"title": "沙溪镇",
						"pinyin": "shaxi",
						"pid": "2123"
					},
					{
						"area_id": "528463",
						"title": "三乡镇",
						"pinyin": "sanxiang",
						"pid": "2123"
					},
					{
						"area_id": "528459",
						"title": "板芙镇",
						"pinyin": "banfu",
						"pid": "2123"
					},
					{
						"area_id": "528462",
						"title": "神湾镇",
						"pinyin": "shenwan",
						"pid": "2123"
					},
					{
						"area_id": "528467",
						"title": "坦洲镇",
						"pinyin": "tanzhou",
						"pid": "2123"
					}
				]
			},
			{
				"area_id": "521000",
				"title": "潮州市",
				"pinyin": "chaozhou",
				"pid": "1964",
				"child": [
					{
						"area_id": "521000",
						"title": "湘桥区",
						"pinyin": "xiangqiao",
						"pid": "2146"
					},
					{
						"area_id": "515638",
						"title": "潮安区",
						"pinyin": "chao'an",
						"pid": "2146"
					},
					{
						"area_id": "515700",
						"title": "饶平县",
						"pinyin": "raoping",
						"pid": "2146"
					}
				]
			},
			{
				"area_id": "522000",
				"title": "揭阳市",
				"pinyin": "jieyang",
				"pid": "1964",
				"child": [
					{
						"area_id": "522000",
						"title": "榕城区",
						"pinyin": "rongcheng",
						"pid": "2150"
					},
					{
						"area_id": "515500",
						"title": "揭东区",
						"pinyin": "jiedong",
						"pid": "2150"
					},
					{
						"area_id": "515400",
						"title": "揭西县",
						"pinyin": "jiexi",
						"pid": "2150"
					},
					{
						"area_id": "515200",
						"title": "惠来县",
						"pinyin": "huilai",
						"pid": "2150"
					},
					{
						"area_id": "515300",
						"title": "普宁市",
						"pinyin": "puning",
						"pid": "2150"
					}
				]
			},
			{
				"area_id": "527300",
				"title": "云浮市",
				"pinyin": "yunfu",
				"pid": "1964",
				"child": [
					{
						"area_id": "527300",
						"title": "云城区",
						"pinyin": "yuncheng",
						"pid": "2156"
					},
					{
						"area_id": "527500",
						"title": "云安区",
						"pinyin": "yun'an",
						"pid": "2156"
					},
					{
						"area_id": "527400",
						"title": "新兴县",
						"pinyin": "xinxing",
						"pid": "2156"
					},
					{
						"area_id": "527100",
						"title": "郁南县",
						"pinyin": "yunan",
						"pid": "2156"
					},
					{
						"area_id": "527200",
						"title": "罗定市",
						"pinyin": "luoding",
						"pid": "2156"
					}
				]
			}
		]
	},
	{
		"area_id": "530000",
		"title": "广西壮族自治区",
		"pinyin": "guangxi",
		"pid": "0",
		"child": [
			{
				"area_id": "530028",
				"title": "南宁市",
				"pinyin": "nanning",
				"pid": "2162",
				"child": [
					{
						"area_id": "530023",
						"title": "兴宁区",
						"pinyin": "xingning",
						"pid": "2163"
					},
					{
						"area_id": "530213",
						"title": "青秀区",
						"pinyin": "qingxiu",
						"pid": "2163"
					},
					{
						"area_id": "530031",
						"title": "江南区",
						"pinyin": "jiangnan",
						"pid": "2163"
					},
					{
						"area_id": "530001",
						"title": "西乡塘区",
						"pinyin": "xixiangtang",
						"pid": "2163"
					},
					{
						"area_id": "530219",
						"title": "良庆区",
						"pinyin": "liangqing",
						"pid": "2163"
					},
					{
						"area_id": "530200",
						"title": "邕宁区",
						"pinyin": "yongning",
						"pid": "2163"
					},
					{
						"area_id": "530100",
						"title": "武鸣县",
						"pinyin": "wuming",
						"pid": "2163"
					},
					{
						"area_id": "532700",
						"title": "隆安县",
						"pinyin": "long'an",
						"pid": "2163"
					},
					{
						"area_id": "530600",
						"title": "马山县",
						"pinyin": "mashan",
						"pid": "2163"
					},
					{
						"area_id": "530500",
						"title": "上林县",
						"pinyin": "shanglin",
						"pid": "2163"
					},
					{
						"area_id": "530400",
						"title": "宾阳县",
						"pinyin": "binyang",
						"pid": "2163"
					},
					{
						"area_id": "530300",
						"title": "横县",
						"pinyin": "hengxian",
						"pid": "2163"
					},
					{
						"area_id": "530000",
						"title": "埌东新区",
						"pinyin": "langdong",
						"pid": "2163"
					}
				]
			},
			{
				"area_id": "545001",
				"title": "柳州市",
				"pinyin": "liuzhou",
				"pid": "2162",
				"child": [
					{
						"area_id": "545001",
						"title": "城中区",
						"pinyin": "chengzhong",
						"pid": "2177"
					},
					{
						"area_id": "545005",
						"title": "鱼峰区",
						"pinyin": "yufeng",
						"pid": "2177"
					},
					{
						"area_id": "545007",
						"title": "柳南区",
						"pinyin": "liunan",
						"pid": "2177"
					},
					{
						"area_id": "545002",
						"title": "柳北区",
						"pinyin": "liubei",
						"pid": "2177"
					},
					{
						"area_id": "545100",
						"title": "柳江县",
						"pinyin": "liujiang",
						"pid": "2177"
					},
					{
						"area_id": "545200",
						"title": "柳城县",
						"pinyin": "liucheng",
						"pid": "2177"
					},
					{
						"area_id": "545600",
						"title": "鹿寨县",
						"pinyin": "luzhai",
						"pid": "2177"
					},
					{
						"area_id": "545400",
						"title": "融安县",
						"pinyin": "rong'an",
						"pid": "2177"
					},
					{
						"area_id": "545300",
						"title": "融水苗族自治县",
						"pinyin": "rongshui",
						"pid": "2177"
					},
					{
						"area_id": "545500",
						"title": "三江侗族自治县",
						"pinyin": "sanjiang",
						"pid": "2177"
					},
					{
						"area_id": "545000",
						"title": "柳东新区",
						"pinyin": "liudong",
						"pid": "2177"
					}
				]
			},
			{
				"area_id": "541100",
				"title": "桂林市",
				"pinyin": "guilin",
				"pid": "2162",
				"child": [
					{
						"area_id": "541001",
						"title": "秀峰区",
						"pinyin": "xiufeng",
						"pid": "2189"
					},
					{
						"area_id": "541001",
						"title": "叠彩区",
						"pinyin": "diecai",
						"pid": "2189"
					},
					{
						"area_id": "541002",
						"title": "象山区",
						"pinyin": "xiangshan",
						"pid": "2189"
					},
					{
						"area_id": "541004",
						"title": "七星区",
						"pinyin": "qixing",
						"pid": "2189"
					},
					{
						"area_id": "541006",
						"title": "雁山区",
						"pinyin": "yanshan",
						"pid": "2189"
					},
					{
						"area_id": "541100",
						"title": "临桂区",
						"pinyin": "lingui",
						"pid": "2189"
					},
					{
						"area_id": "541900",
						"title": "阳朔县",
						"pinyin": "yangshuo",
						"pid": "2189"
					},
					{
						"area_id": "541200",
						"title": "灵川县",
						"pinyin": "lingchuan",
						"pid": "2189"
					},
					{
						"area_id": "541503",
						"title": "全州县",
						"pinyin": "quanzhou",
						"pid": "2189"
					},
					{
						"area_id": "541300",
						"title": "兴安县",
						"pinyin": "xing'an",
						"pid": "2189"
					},
					{
						"area_id": "541800",
						"title": "永福县",
						"pinyin": "yongfu",
						"pid": "2189"
					},
					{
						"area_id": "541600",
						"title": "灌阳县",
						"pinyin": "guanyang",
						"pid": "2189"
					},
					{
						"area_id": "541700",
						"title": "龙胜各族自治县",
						"pinyin": "longsheng",
						"pid": "2189"
					},
					{
						"area_id": "541400",
						"title": "资源县",
						"pinyin": "ziyuan",
						"pid": "2189"
					},
					{
						"area_id": "542400",
						"title": "平乐县",
						"pinyin": "pingle",
						"pid": "2189"
					},
					{
						"area_id": "546600",
						"title": "荔浦县",
						"pinyin": "lipu",
						"pid": "2189"
					},
					{
						"area_id": "542500",
						"title": "恭城瑶族自治县",
						"pinyin": "gongcheng",
						"pid": "2189"
					}
				]
			},
			{
				"area_id": "543002",
				"title": "梧州市",
				"pinyin": "wuzhou",
				"pid": "2162",
				"child": [
					{
						"area_id": "543000",
						"title": "万秀区",
						"pinyin": "wanxiu",
						"pid": "2207"
					},
					{
						"area_id": "543003",
						"title": "长洲区",
						"pinyin": "changzhou",
						"pid": "2207"
					},
					{
						"area_id": "543002",
						"title": "龙圩区",
						"pinyin": "longxu",
						"pid": "2207"
					},
					{
						"area_id": "543100",
						"title": "苍梧县",
						"pinyin": "cangwu",
						"pid": "2207"
					},
					{
						"area_id": "543300",
						"title": "藤县",
						"pinyin": "tengxian",
						"pid": "2207"
					},
					{
						"area_id": "546700",
						"title": "蒙山县",
						"pinyin": "mengshan",
						"pid": "2207"
					},
					{
						"area_id": "543200",
						"title": "岑溪市",
						"pinyin": "cenxi",
						"pid": "2207"
					}
				]
			},
			{
				"area_id": "536000",
				"title": "北海市",
				"pinyin": "beihai",
				"pid": "2162",
				"child": [
					{
						"area_id": "536000",
						"title": "海城区",
						"pinyin": "haicheng",
						"pid": "2215"
					},
					{
						"area_id": "536000",
						"title": "银海区",
						"pinyin": "yinhai",
						"pid": "2215"
					},
					{
						"area_id": "536017",
						"title": "铁山港区",
						"pinyin": "tieshangang",
						"pid": "2215"
					},
					{
						"area_id": "536100",
						"title": "合浦县",
						"pinyin": "hepu",
						"pid": "2215"
					}
				]
			},
			{
				"area_id": "538001",
				"title": "防城港市",
				"pinyin": "fangchenggang",
				"pid": "2162",
				"child": [
					{
						"area_id": "538001",
						"title": "港口区",
						"pinyin": "gangkou",
						"pid": "2220"
					},
					{
						"area_id": "538021",
						"title": "防城区",
						"pinyin": "fangcheng",
						"pid": "2220"
					},
					{
						"area_id": "535500",
						"title": "上思县",
						"pinyin": "shangsi",
						"pid": "2220"
					},
					{
						"area_id": "538100",
						"title": "东兴市",
						"pinyin": "dongxing",
						"pid": "2220"
					}
				]
			},
			{
				"area_id": "535099",
				"title": "钦州市",
				"pinyin": "qinzhou",
				"pid": "2162",
				"child": [
					{
						"area_id": "535099",
						"title": "钦南区",
						"pinyin": "qinnan",
						"pid": "2225"
					},
					{
						"area_id": "535099",
						"title": "钦北区",
						"pinyin": "qinbei",
						"pid": "2225"
					},
					{
						"area_id": "535099",
						"title": "灵山县",
						"pinyin": "lingshan",
						"pid": "2225"
					},
					{
						"area_id": "535099",
						"title": "浦北县",
						"pinyin": "pubei",
						"pid": "2225"
					}
				]
			},
			{
				"area_id": "537100",
				"title": "贵港市",
				"pinyin": "guigang",
				"pid": "2162",
				"child": [
					{
						"area_id": "537100",
						"title": "港北区",
						"pinyin": "gangbei",
						"pid": "2230"
					},
					{
						"area_id": "537100",
						"title": "港南区",
						"pinyin": "gangnan",
						"pid": "2230"
					},
					{
						"area_id": "537121",
						"title": "覃塘区",
						"pinyin": "qintang",
						"pid": "2230"
					},
					{
						"area_id": "537300",
						"title": "平南县",
						"pinyin": "pingnan",
						"pid": "2230"
					},
					{
						"area_id": "537200",
						"title": "桂平市",
						"pinyin": "guiping",
						"pid": "2230"
					}
				]
			},
			{
				"area_id": "537000",
				"title": "玉林市",
				"pinyin": "yulin",
				"pid": "2162",
				"child": [
					{
						"area_id": "537000",
						"title": "玉州区",
						"pinyin": "yuzhou",
						"pid": "2236"
					},
					{
						"area_id": "537023",
						"title": "福绵区",
						"pinyin": "fumian",
						"pid": "2236"
					},
					{
						"area_id": "537000",
						"title": "玉东新区",
						"pinyin": "yudong",
						"pid": "2236"
					},
					{
						"area_id": "537500",
						"title": "容县",
						"pinyin": "rongxian",
						"pid": "2236"
					},
					{
						"area_id": "537700",
						"title": "陆川县",
						"pinyin": "luchuan",
						"pid": "2236"
					},
					{
						"area_id": "537600",
						"title": "博白县",
						"pinyin": "bobai",
						"pid": "2236"
					},
					{
						"area_id": "537800",
						"title": "兴业县",
						"pinyin": "xingye",
						"pid": "2236"
					},
					{
						"area_id": "537400",
						"title": "北流市",
						"pinyin": "beiliu",
						"pid": "2236"
					}
				]
			},
			{
				"area_id": "533000",
				"title": "百色市",
				"pinyin": "baise",
				"pid": "2162",
				"child": [
					{
						"area_id": "533000",
						"title": "右江区",
						"pinyin": "youjiang",
						"pid": "2245"
					},
					{
						"area_id": "533600",
						"title": "田阳县",
						"pinyin": "tianyang",
						"pid": "2245"
					},
					{
						"area_id": "531500",
						"title": "田东县",
						"pinyin": "tiandong",
						"pid": "2245"
					},
					{
						"area_id": "531400",
						"title": "平果县",
						"pinyin": "pingguo",
						"pid": "2245"
					},
					{
						"area_id": "533700",
						"title": "德保县",
						"pinyin": "debao",
						"pid": "2245"
					},
					{
						"area_id": "533800",
						"title": "靖西县",
						"pinyin": "jingxi",
						"pid": "2245"
					},
					{
						"area_id": "533900",
						"title": "那坡县",
						"pinyin": "napo",
						"pid": "2245"
					},
					{
						"area_id": "533100",
						"title": "凌云县",
						"pinyin": "lingyun",
						"pid": "2245"
					},
					{
						"area_id": "533200",
						"title": "乐业县",
						"pinyin": "leye",
						"pid": "2245"
					},
					{
						"area_id": "533300",
						"title": "田林县",
						"pinyin": "tianlin",
						"pid": "2245"
					},
					{
						"area_id": "533500",
						"title": "西林县",
						"pinyin": "xilin",
						"pid": "2245"
					},
					{
						"area_id": "533400",
						"title": "隆林各族自治县",
						"pinyin": "longlin",
						"pid": "2245"
					}
				]
			},
			{
				"area_id": "542800",
				"title": "贺州市",
				"pinyin": "hezhou",
				"pid": "2162",
				"child": [
					{
						"area_id": "542800",
						"title": "八步区",
						"pinyin": "babu",
						"pid": "2258"
					},
					{
						"area_id": "546800",
						"title": "昭平县",
						"pinyin": "zhaoping",
						"pid": "2258"
					},
					{
						"area_id": "542600",
						"title": "钟山县",
						"pinyin": "zhongshan",
						"pid": "2258"
					},
					{
						"area_id": "542700",
						"title": "富川瑶族自治县",
						"pinyin": "fuchuan",
						"pid": "2258"
					},
					{
						"area_id": "542800",
						"title": "平桂管理区",
						"pinyin": "pingui",
						"pid": "2258"
					}
				]
			},
			{
				"area_id": "547000",
				"title": "河池市",
				"pinyin": "hechi",
				"pid": "2162",
				"child": [
					{
						"area_id": "547000",
						"title": "金城江区",
						"pinyin": "jinchengjiang",
						"pid": "2264"
					},
					{
						"area_id": "547200",
						"title": "南丹县",
						"pinyin": "nandan",
						"pid": "2264"
					},
					{
						"area_id": "547300",
						"title": "天峨县",
						"pinyin": "tiane",
						"pid": "2264"
					},
					{
						"area_id": "547600",
						"title": "凤山县",
						"pinyin": "fengshan",
						"pid": "2264"
					},
					{
						"area_id": "547400",
						"title": "东兰县",
						"pinyin": "donglan",
						"pid": "2264"
					},
					{
						"area_id": "546400",
						"title": "罗城仫佬族自治县",
						"pinyin": "luocheng",
						"pid": "2264"
					},
					{
						"area_id": "547100",
						"title": "环江毛南族自治县",
						"pinyin": "huanjiang",
						"pid": "2264"
					},
					{
						"area_id": "547500",
						"title": "巴马瑶族自治县",
						"pinyin": "bama",
						"pid": "2264"
					},
					{
						"area_id": "530700",
						"title": "都安瑶族自治县",
						"pinyin": "du'an",
						"pid": "2264"
					},
					{
						"area_id": "530800",
						"title": "大化瑶族自治县",
						"pinyin": "dahua",
						"pid": "2264"
					},
					{
						"area_id": "546300",
						"title": "宜州市",
						"pinyin": "yizhou",
						"pid": "2264"
					}
				]
			},
			{
				"area_id": "546100",
				"title": "来宾市",
				"pinyin": "laibin",
				"pid": "2162",
				"child": [
					{
						"area_id": "546100",
						"title": "兴宾区",
						"pinyin": "xingbin",
						"pid": "2276"
					},
					{
						"area_id": "546200",
						"title": "忻城县",
						"pinyin": "xincheng",
						"pid": "2276"
					},
					{
						"area_id": "545800",
						"title": "象州县",
						"pinyin": "xiangzhou",
						"pid": "2276"
					},
					{
						"area_id": "545900",
						"title": "武宣县",
						"pinyin": "wuxuan",
						"pid": "2276"
					},
					{
						"area_id": "545799",
						"title": "金秀瑶族自治县",
						"pinyin": "jinxiu",
						"pid": "2276"
					},
					{
						"area_id": "546500",
						"title": "合山市",
						"pinyin": "heshan",
						"pid": "2276"
					}
				]
			},
			{
				"area_id": "532299",
				"title": "崇左市",
				"pinyin": "chongzuo",
				"pid": "2162",
				"child": [
					{
						"area_id": "532299",
						"title": "江州区",
						"pinyin": "jiangzhou",
						"pid": "2283"
					},
					{
						"area_id": "532199",
						"title": "扶绥县",
						"pinyin": "fusui",
						"pid": "2283"
					},
					{
						"area_id": "532599",
						"title": "宁明县",
						"pinyin": "ningming",
						"pid": "2283"
					},
					{
						"area_id": "532499",
						"title": "龙州县",
						"pinyin": "longzhou",
						"pid": "2283"
					},
					{
						"area_id": "532399",
						"title": "大新县",
						"pinyin": "daxin",
						"pid": "2283"
					},
					{
						"area_id": "532899",
						"title": "天等县",
						"pinyin": "tiandeng",
						"pid": "2283"
					},
					{
						"area_id": "532699",
						"title": "凭祥市",
						"pinyin": "pingxiang",
						"pid": "2283"
					}
				]
			}
		]
	},
	{
		"area_id": "570000",
		"title": "海南省",
		"pinyin": "hainan",
		"pid": "0",
		"child": [
			{
				"area_id": "570000",
				"title": "海口市",
				"pinyin": "haikou",
				"pid": "2291",
				"child": [
					{
						"area_id": "570311",
						"title": "秀英区",
						"pinyin": "xiuying",
						"pid": "2292"
					},
					{
						"area_id": "570145",
						"title": "龙华区",
						"pinyin": "longhua",
						"pid": "2292"
					},
					{
						"area_id": "571100",
						"title": "琼山区",
						"pinyin": "qiongshan",
						"pid": "2292"
					},
					{
						"area_id": "570203",
						"title": "美兰区",
						"pinyin": "meilan",
						"pid": "2292"
					}
				]
			},
			{
				"area_id": "572000",
				"title": "三亚市",
				"pinyin": "sanya",
				"pid": "2291",
				"child": [
					{
						"area_id": "572000",
						"title": "海棠区",
						"pinyin": "haitang",
						"pid": "2297"
					},
					{
						"area_id": "572000",
						"title": "吉阳区",
						"pinyin": "jiyang",
						"pid": "2297"
					},
					{
						"area_id": "572000",
						"title": "天涯区",
						"pinyin": "tianya",
						"pid": "2297"
					},
					{
						"area_id": "572000",
						"title": "崖州区",
						"pinyin": "yazhou",
						"pid": "2297"
					}
				]
			},
			{
				"area_id": "573199",
				"title": "三沙市",
				"pinyin": "sansha",
				"pid": "2291",
				"child": [
					{
						"area_id": "572000",
						"title": "西沙群岛",
						"pinyin": "xishaislands",
						"pid": "2302"
					},
					{
						"area_id": "573100",
						"title": "南沙群岛",
						"pinyin": "nanshaislands",
						"pid": "2302"
					},
					{
						"area_id": "573100",
						"title": "中沙群岛",
						"pinyin": "zhongshaislands",
						"pid": "2302"
					}
				]
			},
			{
				"area_id": "",
				"title": "直辖县级",
				"pinyin": "",
				"pid": "2291",
				"child": [
					{
						"area_id": "572200",
						"title": "五指山市",
						"pinyin": "wuzhishan",
						"pid": "2306"
					},
					{
						"area_id": "571400",
						"title": "琼海市",
						"pinyin": "qionghai",
						"pid": "2306"
					},
					{
						"area_id": "571700",
						"title": "儋州市",
						"pinyin": "danzhou",
						"pid": "2306"
					},
					{
						"area_id": "571339",
						"title": "文昌市",
						"pinyin": "wenchang",
						"pid": "2306"
					},
					{
						"area_id": "571500",
						"title": "万宁市",
						"pinyin": "wanning",
						"pid": "2306"
					},
					{
						"area_id": "572600",
						"title": "东方市",
						"pinyin": "dongfang",
						"pid": "2306"
					},
					{
						"area_id": "571200",
						"title": "定安县",
						"pinyin": "ding'an",
						"pid": "2306"
					},
					{
						"area_id": "571600",
						"title": "屯昌县",
						"pinyin": "tunchang",
						"pid": "2306"
					},
					{
						"area_id": "571900",
						"title": "澄迈县",
						"pinyin": "chengmai",
						"pid": "2306"
					},
					{
						"area_id": "571800",
						"title": "临高县",
						"pinyin": "lingao",
						"pid": "2306"
					},
					{
						"area_id": "572800",
						"title": "白沙黎族自治县",
						"pinyin": "baisha",
						"pid": "2306"
					},
					{
						"area_id": "572700",
						"title": "昌江黎族自治县",
						"pinyin": "changjiang",
						"pid": "2306"
					},
					{
						"area_id": "572500",
						"title": "乐东黎族自治县",
						"pinyin": "ledong",
						"pid": "2306"
					},
					{
						"area_id": "572400",
						"title": "陵水黎族自治县",
						"pinyin": "lingshui",
						"pid": "2306"
					},
					{
						"area_id": "572300",
						"title": "保亭黎族苗族自治县",
						"pinyin": "baoting",
						"pid": "2306"
					},
					{
						"area_id": "572900",
						"title": "琼中黎族苗族自治县",
						"pinyin": "qiongzhong",
						"pid": "2306"
					}
				]
			}
		]
	},
	{
		"area_id": "400000",
		"title": "重庆",
		"pinyin": "chongqing",
		"pid": "0",
		"child": [
			{
				"area_id": "400000",
				"title": "重庆市",
				"pinyin": "chongqing",
				"pid": "2323",
				"child": [
					{
						"area_id": "404000",
						"title": "万州区",
						"pinyin": "wanzhou",
						"pid": "2324"
					},
					{
						"area_id": "408000",
						"title": "涪陵区",
						"pinyin": "fuling",
						"pid": "2324"
					},
					{
						"area_id": "400010",
						"title": "渝中区",
						"pinyin": "yuzhong",
						"pid": "2324"
					},
					{
						"area_id": "400080",
						"title": "大渡口区",
						"pinyin": "dadukou",
						"pid": "2324"
					},
					{
						"area_id": "400020",
						"title": "江北区",
						"pinyin": "jiangbei",
						"pid": "2324"
					},
					{
						"area_id": "400030",
						"title": "沙坪坝区",
						"pinyin": "shapingba",
						"pid": "2324"
					},
					{
						"area_id": "400050",
						"title": "九龙坡区",
						"pinyin": "jiulongpo",
						"pid": "2324"
					},
					{
						"area_id": "400064",
						"title": "南岸区",
						"pinyin": "nan'an",
						"pid": "2324"
					},
					{
						"area_id": "400700",
						"title": "北碚区",
						"pinyin": "beibei",
						"pid": "2324"
					},
					{
						"area_id": "400800",
						"title": "綦江区",
						"pinyin": "qijiang",
						"pid": "2324"
					},
					{
						"area_id": "400900",
						"title": "大足区",
						"pinyin": "dazu",
						"pid": "2324"
					},
					{
						"area_id": "401120",
						"title": "渝北区",
						"pinyin": "yubei",
						"pid": "2324"
					},
					{
						"area_id": "401320",
						"title": "巴南区",
						"pinyin": "banan",
						"pid": "2324"
					},
					{
						"area_id": "409700",
						"title": "黔江区",
						"pinyin": "qianjiang",
						"pid": "2324"
					},
					{
						"area_id": "401220",
						"title": "长寿区",
						"pinyin": "changshou",
						"pid": "2324"
					},
					{
						"area_id": "402260",
						"title": "江津区",
						"pinyin": "jiangjin",
						"pid": "2324"
					},
					{
						"area_id": "401520",
						"title": "合川区",
						"pinyin": "hechuan",
						"pid": "2324"
					},
					{
						"area_id": "402160",
						"title": "永川区",
						"pinyin": "yongchuan",
						"pid": "2324"
					},
					{
						"area_id": "408400",
						"title": "南川区",
						"pinyin": "nanchuan",
						"pid": "2324"
					},
					{
						"area_id": "402760",
						"title": "璧山区",
						"pinyin": "bishan",
						"pid": "2324"
					},
					{
						"area_id": "402560",
						"title": "铜梁区",
						"pinyin": "tongliang",
						"pid": "2324"
					},
					{
						"area_id": "402660",
						"title": "潼南县",
						"pinyin": "tongnan",
						"pid": "2324"
					},
					{
						"area_id": "402460",
						"title": "荣昌县",
						"pinyin": "rongchang",
						"pid": "2324"
					},
					{
						"area_id": "405200",
						"title": "梁平县",
						"pinyin": "liangping",
						"pid": "2324"
					},
					{
						"area_id": "405900",
						"title": "城口县",
						"pinyin": "chengkou",
						"pid": "2324"
					},
					{
						"area_id": "408200",
						"title": "丰都县",
						"pinyin": "fengdu",
						"pid": "2324"
					},
					{
						"area_id": "408300",
						"title": "垫江县",
						"pinyin": "dianjiang",
						"pid": "2324"
					},
					{
						"area_id": "408500",
						"title": "武隆县",
						"pinyin": "wulong",
						"pid": "2324"
					},
					{
						"area_id": "404300",
						"title": "忠县",
						"pinyin": "zhongxian",
						"pid": "2324"
					},
					{
						"area_id": "405400",
						"title": "开县",
						"pinyin": "kaixian",
						"pid": "2324"
					},
					{
						"area_id": "404500",
						"title": "云阳县",
						"pinyin": "yunyang",
						"pid": "2324"
					},
					{
						"area_id": "404600",
						"title": "奉节县",
						"pinyin": "fengjie",
						"pid": "2324"
					},
					{
						"area_id": "404700",
						"title": "巫山县",
						"pinyin": "wushan",
						"pid": "2324"
					},
					{
						"area_id": "405800",
						"title": "巫溪县",
						"pinyin": "wuxi",
						"pid": "2324"
					},
					{
						"area_id": "409100",
						"title": "石柱土家族自治县",
						"pinyin": "shizhu",
						"pid": "2324"
					},
					{
						"area_id": "409900",
						"title": "秀山土家族苗族自治县",
						"pinyin": "xiushan",
						"pid": "2324"
					},
					{
						"area_id": "409800",
						"title": "酉阳土家族苗族自治县",
						"pinyin": "youyang",
						"pid": "2324"
					},
					{
						"area_id": "409600",
						"title": "彭水苗族土家族自治县",
						"pinyin": "pengshui",
						"pid": "2324"
					}
				]
			},
			{
				"area_id": "400000",
				"title": "两江新区",
				"pinyin": "liangjiangxinqu",
				"pid": "2323",
				"child": [
					{
						"area_id": "400000",
						"title": "北部新区",
						"pinyin": "beibuxinqu",
						"pid": "2363"
					},
					{
						"area_id": "400000",
						"title": "保税港区",
						"pinyin": "baoshuigangqu",
						"pid": "2363"
					},
					{
						"area_id": "400000",
						"title": "工业园区",
						"pinyin": "gongyeyuanqu",
						"pid": "2363"
					}
				]
			}
		]
	},
	{
		"area_id": "610000",
		"title": "四川省",
		"pinyin": "sichuan",
		"pid": "0",
		"child": [
			{
				"area_id": "610015",
				"title": "成都市",
				"pinyin": "chengdu",
				"pid": "2367",
				"child": [
					{
						"area_id": "610021",
						"title": "锦江区",
						"pinyin": "jinjiang",
						"pid": "2368"
					},
					{
						"area_id": "610031",
						"title": "青羊区",
						"pinyin": "qingyang",
						"pid": "2368"
					},
					{
						"area_id": "610036",
						"title": "金牛区",
						"pinyin": "jinniu",
						"pid": "2368"
					},
					{
						"area_id": "610041",
						"title": "武侯区",
						"pinyin": "wuhou",
						"pid": "2368"
					},
					{
						"area_id": "610066",
						"title": "成华区",
						"pinyin": "chenghua",
						"pid": "2368"
					},
					{
						"area_id": "610100",
						"title": "龙泉驿区",
						"pinyin": "longquanyi",
						"pid": "2368"
					},
					{
						"area_id": "610300",
						"title": "青白江区",
						"pinyin": "qingbaijiang",
						"pid": "2368"
					},
					{
						"area_id": "610500",
						"title": "新都区",
						"pinyin": "xindu",
						"pid": "2368"
					},
					{
						"area_id": "611130",
						"title": "温江区",
						"pinyin": "wenjiang",
						"pid": "2368"
					},
					{
						"area_id": "610400",
						"title": "金堂县",
						"pinyin": "jintang",
						"pid": "2368"
					},
					{
						"area_id": "610200",
						"title": "双流县",
						"pinyin": "shuangliu",
						"pid": "2368"
					},
					{
						"area_id": "611730",
						"title": "郫县",
						"pinyin": "pixian",
						"pid": "2368"
					},
					{
						"area_id": "611330",
						"title": "大邑县",
						"pinyin": "dayi",
						"pid": "2368"
					},
					{
						"area_id": "611630",
						"title": "蒲江县",
						"pinyin": "pujiang",
						"pid": "2368"
					},
					{
						"area_id": "611430",
						"title": "新津县",
						"pinyin": "xinjin",
						"pid": "2368"
					},
					{
						"area_id": "611830",
						"title": "都江堰市",
						"pinyin": "dujiangyan",
						"pid": "2368"
					},
					{
						"area_id": "611930",
						"title": "彭州市",
						"pinyin": "pengzhou",
						"pid": "2368"
					},
					{
						"area_id": "611530",
						"title": "邛崃市",
						"pinyin": "qionglai",
						"pid": "2368"
					},
					{
						"area_id": "611230",
						"title": "崇州市",
						"pinyin": "chongzhou",
						"pid": "2368"
					}
				]
			},
			{
				"area_id": "643000",
				"title": "自贡市",
				"pinyin": "zigong",
				"pid": "2367",
				"child": [
					{
						"area_id": "643000",
						"title": "自流井区",
						"pinyin": "ziliujing",
						"pid": "2388"
					},
					{
						"area_id": "643020",
						"title": "贡井区",
						"pinyin": "gongjing",
						"pid": "2388"
					},
					{
						"area_id": "643010",
						"title": "大安区",
						"pinyin": "da'an",
						"pid": "2388"
					},
					{
						"area_id": "643030",
						"title": "沿滩区",
						"pinyin": "yantan",
						"pid": "2388"
					},
					{
						"area_id": "643100",
						"title": "荣县",
						"pinyin": "rongxian",
						"pid": "2388"
					},
					{
						"area_id": "643200",
						"title": "富顺县",
						"pinyin": "fushun",
						"pid": "2388"
					}
				]
			},
			{
				"area_id": "617000",
				"title": "攀枝花市",
				"pinyin": "panzhihua",
				"pid": "2367",
				"child": [
					{
						"area_id": "617067",
						"title": "东区",
						"pinyin": "dongqu",
						"pid": "2395"
					},
					{
						"area_id": "617068",
						"title": "西区",
						"pinyin": "xiqu",
						"pid": "2395"
					},
					{
						"area_id": "617061",
						"title": "仁和区",
						"pinyin": "renhe",
						"pid": "2395"
					},
					{
						"area_id": "617200",
						"title": "米易县",
						"pinyin": "miyi",
						"pid": "2395"
					},
					{
						"area_id": "617100",
						"title": "盐边县",
						"pinyin": "yanbian",
						"pid": "2395"
					}
				]
			},
			{
				"area_id": "646000",
				"title": "泸州市",
				"pinyin": "luzhou",
				"pid": "2367",
				"child": [
					{
						"area_id": "646000",
						"title": "江阳区",
						"pinyin": "jiangyang",
						"pid": "2401"
					},
					{
						"area_id": "646300",
						"title": "纳溪区",
						"pinyin": "naxi",
						"pid": "2401"
					},
					{
						"area_id": "646000",
						"title": "龙马潭区",
						"pinyin": "longmatan",
						"pid": "2401"
					},
					{
						"area_id": "646106",
						"title": "泸县",
						"pinyin": "luxian",
						"pid": "2401"
					},
					{
						"area_id": "646200",
						"title": "合江县",
						"pinyin": "hejiang",
						"pid": "2401"
					},
					{
						"area_id": "646400",
						"title": "叙永县",
						"pinyin": "xuyong",
						"pid": "2401"
					},
					{
						"area_id": "646500",
						"title": "古蔺县",
						"pinyin": "gulin",
						"pid": "2401"
					}
				]
			},
			{
				"area_id": "618000",
				"title": "德阳市",
				"pinyin": "deyang",
				"pid": "2367",
				"child": [
					{
						"area_id": "618000",
						"title": "旌阳区",
						"pinyin": "jingyang",
						"pid": "2409"
					},
					{
						"area_id": "618100",
						"title": "中江县",
						"pinyin": "zhongjiang",
						"pid": "2409"
					},
					{
						"area_id": "618500",
						"title": "罗江县",
						"pinyin": "luojiang",
						"pid": "2409"
					},
					{
						"area_id": "618300",
						"title": "广汉市",
						"pinyin": "guanghan",
						"pid": "2409"
					},
					{
						"area_id": "618400",
						"title": "什邡市",
						"pinyin": "shifang",
						"pid": "2409"
					},
					{
						"area_id": "618200",
						"title": "绵竹市",
						"pinyin": "mianzhu",
						"pid": "2409"
					}
				]
			},
			{
				"area_id": "621000",
				"title": "绵阳市",
				"pinyin": "mianyang",
				"pid": "2367",
				"child": [
					{
						"area_id": "621000",
						"title": "涪城区",
						"pinyin": "fucheng",
						"pid": "2416"
					},
					{
						"area_id": "621022",
						"title": "游仙区",
						"pinyin": "youxian",
						"pid": "2416"
					},
					{
						"area_id": "621100",
						"title": "三台县",
						"pinyin": "santai",
						"pid": "2416"
					},
					{
						"area_id": "621600",
						"title": "盐亭县",
						"pinyin": "yanting",
						"pid": "2416"
					},
					{
						"area_id": "622650",
						"title": "安县",
						"pinyin": "anxian",
						"pid": "2416"
					},
					{
						"area_id": "622150",
						"title": "梓潼县",
						"pinyin": "zitong",
						"pid": "2416"
					},
					{
						"area_id": "622750",
						"title": "北川羌族自治县",
						"pinyin": "beichuan",
						"pid": "2416"
					},
					{
						"area_id": "622550",
						"title": "平武县",
						"pinyin": "pingwu",
						"pid": "2416"
					},
					{
						"area_id": "621700",
						"title": "江油市",
						"pinyin": "jiangyou",
						"pid": "2416"
					}
				]
			},
			{
				"area_id": "628000",
				"title": "广元市",
				"pinyin": "guangyuan",
				"pid": "2367",
				"child": [
					{
						"area_id": "628017",
						"title": "利州区",
						"pinyin": "lizhou",
						"pid": "2426"
					},
					{
						"area_id": "628017",
						"title": "昭化区",
						"pinyin": "zhaohua",
						"pid": "2426"
					},
					{
						"area_id": "628017",
						"title": "朝天区",
						"pinyin": "chaotian",
						"pid": "2426"
					},
					{
						"area_id": "628200",
						"title": "旺苍县",
						"pinyin": "wangcang",
						"pid": "2426"
					},
					{
						"area_id": "628100",
						"title": "青川县",
						"pinyin": "qingchuan",
						"pid": "2426"
					},
					{
						"area_id": "628300",
						"title": "剑阁县",
						"pinyin": "jiange",
						"pid": "2426"
					},
					{
						"area_id": "628400",
						"title": "苍溪县",
						"pinyin": "cangxi",
						"pid": "2426"
					}
				]
			},
			{
				"area_id": "629000",
				"title": "遂宁市",
				"pinyin": "suining",
				"pid": "2367",
				"child": [
					{
						"area_id": "629000",
						"title": "船山区",
						"pinyin": "chuanshan",
						"pid": "2434"
					},
					{
						"area_id": "629000",
						"title": "安居区",
						"pinyin": "anju",
						"pid": "2434"
					},
					{
						"area_id": "629100",
						"title": "蓬溪县",
						"pinyin": "pengxi",
						"pid": "2434"
					},
					{
						"area_id": "629200",
						"title": "射洪县",
						"pinyin": "shehong",
						"pid": "2434"
					},
					{
						"area_id": "629300",
						"title": "大英县",
						"pinyin": "daying",
						"pid": "2434"
					}
				]
			},
			{
				"area_id": "641000",
				"title": "内江市",
				"pinyin": "neijiang",
				"pid": "2367",
				"child": [
					{
						"area_id": "641000",
						"title": "市中区",
						"pinyin": "shizhongqu",
						"pid": "2440"
					},
					{
						"area_id": "641100",
						"title": "东兴区",
						"pinyin": "dongxing",
						"pid": "2440"
					},
					{
						"area_id": "642450",
						"title": "威远县",
						"pinyin": "weiyuan",
						"pid": "2440"
					},
					{
						"area_id": "641200",
						"title": "资中县",
						"pinyin": "zizhong",
						"pid": "2440"
					},
					{
						"area_id": "642150",
						"title": "隆昌县",
						"pinyin": "longchang",
						"pid": "2440"
					}
				]
			},
			{
				"area_id": "614000",
				"title": "乐山市",
				"pinyin": "leshan",
				"pid": "2367",
				"child": [
					{
						"area_id": "614000",
						"title": "市中区",
						"pinyin": "shizhongqu",
						"pid": "2446"
					},
					{
						"area_id": "614900",
						"title": "沙湾区",
						"pinyin": "shawan",
						"pid": "2446"
					},
					{
						"area_id": "614800",
						"title": "五通桥区",
						"pinyin": "wutongqiao",
						"pid": "2446"
					},
					{
						"area_id": "614700",
						"title": "金口河区",
						"pinyin": "jinkouhe",
						"pid": "2446"
					},
					{
						"area_id": "614400",
						"title": "犍为县",
						"pinyin": "qianwei",
						"pid": "2446"
					},
					{
						"area_id": "613100",
						"title": "井研县",
						"pinyin": "jingyan",
						"pid": "2446"
					},
					{
						"area_id": "614100",
						"title": "夹江县",
						"pinyin": "jiajiang",
						"pid": "2446"
					},
					{
						"area_id": "614500",
						"title": "沐川县",
						"pinyin": "muchuan",
						"pid": "2446"
					},
					{
						"area_id": "614300",
						"title": "峨边彝族自治县",
						"pinyin": "ebian",
						"pid": "2446"
					},
					{
						"area_id": "614600",
						"title": "马边彝族自治县",
						"pinyin": "mabian",
						"pid": "2446"
					},
					{
						"area_id": "614200",
						"title": "峨眉山市",
						"pinyin": "emeishan",
						"pid": "2446"
					}
				]
			},
			{
				"area_id": "637000",
				"title": "南充市",
				"pinyin": "nanchong",
				"pid": "2367",
				"child": [
					{
						"area_id": "637000",
						"title": "顺庆区",
						"pinyin": "shunqing",
						"pid": "2458"
					},
					{
						"area_id": "637100",
						"title": "高坪区",
						"pinyin": "gaoping",
						"pid": "2458"
					},
					{
						"area_id": "637100",
						"title": "嘉陵区",
						"pinyin": "jialing",
						"pid": "2458"
					},
					{
						"area_id": "637300",
						"title": "南部县",
						"pinyin": "nanbu",
						"pid": "2458"
					},
					{
						"area_id": "637700",
						"title": "营山县",
						"pinyin": "yingshan",
						"pid": "2458"
					},
					{
						"area_id": "637800",
						"title": "蓬安县",
						"pinyin": "peng'an",
						"pid": "2458"
					},
					{
						"area_id": "637600",
						"title": "仪陇县",
						"pinyin": "yilong",
						"pid": "2458"
					},
					{
						"area_id": "637200",
						"title": "西充县",
						"pinyin": "xichong",
						"pid": "2458"
					},
					{
						"area_id": "637400",
						"title": "阆中市",
						"pinyin": "langzhong",
						"pid": "2458"
					}
				]
			},
			{
				"area_id": "620020",
				"title": "眉山市",
				"pinyin": "meishan",
				"pid": "2367",
				"child": [
					{
						"area_id": "620010",
						"title": "东坡区",
						"pinyin": "dongpo",
						"pid": "2468"
					},
					{
						"area_id": "620860",
						"title": "彭山区",
						"pinyin": "pengshan",
						"pid": "2468"
					},
					{
						"area_id": "620500",
						"title": "仁寿县",
						"pinyin": "renshou",
						"pid": "2468"
					},
					{
						"area_id": "620360",
						"title": "洪雅县",
						"pinyin": "hongya",
						"pid": "2468"
					},
					{
						"area_id": "620200",
						"title": "丹棱县",
						"pinyin": "danling",
						"pid": "2468"
					},
					{
						"area_id": "620460",
						"title": "青神县",
						"pinyin": "qingshen",
						"pid": "2468"
					}
				]
			},
			{
				"area_id": "644000",
				"title": "宜宾市",
				"pinyin": "yibin",
				"pid": "2367",
				"child": [
					{
						"area_id": "644000",
						"title": "翠屏区",
						"pinyin": "cuiping",
						"pid": "2475"
					},
					{
						"area_id": "644100",
						"title": "南溪区",
						"pinyin": "nanxi",
						"pid": "2475"
					},
					{
						"area_id": "644600",
						"title": "宜宾县",
						"pinyin": "yibin",
						"pid": "2475"
					},
					{
						"area_id": "644200",
						"title": "江安县",
						"pinyin": "jiang'an",
						"pid": "2475"
					},
					{
						"area_id": "644300",
						"title": "长宁县",
						"pinyin": "changning",
						"pid": "2475"
					},
					{
						"area_id": "645150",
						"title": "高县",
						"pinyin": "gaoxian",
						"pid": "2475"
					},
					{
						"area_id": "644500",
						"title": "珙县",
						"pinyin": "gongxian",
						"pid": "2475"
					},
					{
						"area_id": "645250",
						"title": "筠连县",
						"pinyin": "junlian",
						"pid": "2475"
					},
					{
						"area_id": "644400",
						"title": "兴文县",
						"pinyin": "xingwen",
						"pid": "2475"
					},
					{
						"area_id": "645350",
						"title": "屏山县",
						"pinyin": "pingshan",
						"pid": "2475"
					}
				]
			},
			{
				"area_id": "638000",
				"title": "广安市",
				"pinyin": "guang'an",
				"pid": "2367",
				"child": [
					{
						"area_id": "638000",
						"title": "广安区",
						"pinyin": "guang'an",
						"pid": "2486"
					},
					{
						"area_id": "638019",
						"title": "前锋区",
						"pinyin": "qianfeng",
						"pid": "2486"
					},
					{
						"area_id": "638300",
						"title": "岳池县",
						"pinyin": "yuechi",
						"pid": "2486"
					},
					{
						"area_id": "638400",
						"title": "武胜县",
						"pinyin": "wusheng",
						"pid": "2486"
					},
					{
						"area_id": "638500",
						"title": "邻水县",
						"pinyin": "linshui",
						"pid": "2486"
					},
					{
						"area_id": "638600",
						"title": "华蓥市",
						"pinyin": "huaying",
						"pid": "2486"
					}
				]
			},
			{
				"area_id": "635000",
				"title": "达州市",
				"pinyin": "dazhou",
				"pid": "2367",
				"child": [
					{
						"area_id": "635000",
						"title": "通川区",
						"pinyin": "tongchuan",
						"pid": "2493"
					},
					{
						"area_id": "635000",
						"title": "达川区",
						"pinyin": "dachuan",
						"pid": "2493"
					},
					{
						"area_id": "636150",
						"title": "宣汉县",
						"pinyin": "xuanhan",
						"pid": "2493"
					},
					{
						"area_id": "636250",
						"title": "开江县",
						"pinyin": "kaijiang",
						"pid": "2493"
					},
					{
						"area_id": "635100",
						"title": "大竹县",
						"pinyin": "dazhu",
						"pid": "2493"
					},
					{
						"area_id": "635200",
						"title": "渠县",
						"pinyin": "quxian",
						"pid": "2493"
					},
					{
						"area_id": "636350",
						"title": "万源市",
						"pinyin": "wanyuan",
						"pid": "2493"
					}
				]
			},
			{
				"area_id": "625000",
				"title": "雅安市",
				"pinyin": "ya'an",
				"pid": "2367",
				"child": [
					{
						"area_id": "625000",
						"title": "雨城区",
						"pinyin": "yucheng",
						"pid": "2501"
					},
					{
						"area_id": "625100",
						"title": "名山区",
						"pinyin": "mingshan",
						"pid": "2501"
					},
					{
						"area_id": "625200",
						"title": "荥经县",
						"pinyin": "yingjing",
						"pid": "2501"
					},
					{
						"area_id": "625300",
						"title": "汉源县",
						"pinyin": "hanyuan",
						"pid": "2501"
					},
					{
						"area_id": "625400",
						"title": "石棉县",
						"pinyin": "shimian",
						"pid": "2501"
					},
					{
						"area_id": "625500",
						"title": "天全县",
						"pinyin": "tianquan",
						"pid": "2501"
					},
					{
						"area_id": "625600",
						"title": "芦山县",
						"pinyin": "lushan",
						"pid": "2501"
					},
					{
						"area_id": "625700",
						"title": "宝兴县",
						"pinyin": "baoxing",
						"pid": "2501"
					}
				]
			},
			{
				"area_id": "636000",
				"title": "巴中市",
				"pinyin": "bazhong",
				"pid": "2367",
				"child": [
					{
						"area_id": "636001",
						"title": "巴州区",
						"pinyin": "bazhou",
						"pid": "2510"
					},
					{
						"area_id": "636064",
						"title": "恩阳区",
						"pinyin": "enyang",
						"pid": "2510"
					},
					{
						"area_id": "636700",
						"title": "通江县",
						"pinyin": "tongjiang",
						"pid": "2510"
					},
					{
						"area_id": "636600",
						"title": "南江县",
						"pinyin": "nanjiang",
						"pid": "2510"
					},
					{
						"area_id": "636400",
						"title": "平昌县",
						"pinyin": "pingchang",
						"pid": "2510"
					}
				]
			},
			{
				"area_id": "641300",
				"title": "资阳市",
				"pinyin": "ziyang",
				"pid": "2367",
				"child": [
					{
						"area_id": "641300",
						"title": "雁江区",
						"pinyin": "yanjiang",
						"pid": "2516"
					},
					{
						"area_id": "642350",
						"title": "安岳县",
						"pinyin": "anyue",
						"pid": "2516"
					},
					{
						"area_id": "641500",
						"title": "乐至县",
						"pinyin": "lezhi",
						"pid": "2516"
					},
					{
						"area_id": "641400",
						"title": "简阳市",
						"pinyin": "jianyang",
						"pid": "2516"
					}
				]
			},
			{
				"area_id": "624000",
				"title": "阿坝藏族羌族自治州",
				"pinyin": "aba",
				"pid": "2367",
				"child": [
					{
						"area_id": "623000",
						"title": "汶川县",
						"pinyin": "wenchuan",
						"pid": "2521"
					},
					{
						"area_id": "623100",
						"title": "理县",
						"pinyin": "lixian",
						"pid": "2521"
					},
					{
						"area_id": "623200",
						"title": "茂县",
						"pinyin": "maoxian",
						"pid": "2521"
					},
					{
						"area_id": "623300",
						"title": "松潘县",
						"pinyin": "songpan",
						"pid": "2521"
					},
					{
						"area_id": "623400",
						"title": "九寨沟县",
						"pinyin": "jiuzhaigou",
						"pid": "2521"
					},
					{
						"area_id": "624100",
						"title": "金川县",
						"pinyin": "jinchuan",
						"pid": "2521"
					},
					{
						"area_id": "624200",
						"title": "小金县",
						"pinyin": "xiaojin",
						"pid": "2521"
					},
					{
						"area_id": "623500",
						"title": "黑水县",
						"pinyin": "heishui",
						"pid": "2521"
					},
					{
						"area_id": "624000",
						"title": "马尔康县",
						"pinyin": "maerkang",
						"pid": "2521"
					},
					{
						"area_id": "624300",
						"title": "壤塘县",
						"pinyin": "rangtang",
						"pid": "2521"
					},
					{
						"area_id": "624600",
						"title": "阿坝县",
						"pinyin": "aba",
						"pid": "2521"
					},
					{
						"area_id": "624500",
						"title": "若尔盖县",
						"pinyin": "ruoergai",
						"pid": "2521"
					},
					{
						"area_id": "624400",
						"title": "红原县",
						"pinyin": "hongyuan",
						"pid": "2521"
					}
				]
			},
			{
				"area_id": "626000",
				"title": "甘孜藏族自治州",
				"pinyin": "garze",
				"pid": "2367",
				"child": [
					{
						"area_id": "626000",
						"title": "康定县",
						"pinyin": "kangding",
						"pid": "2535"
					},
					{
						"area_id": "626100",
						"title": "泸定县",
						"pinyin": "luding",
						"pid": "2535"
					},
					{
						"area_id": "626300",
						"title": "丹巴县",
						"pinyin": "danba",
						"pid": "2535"
					},
					{
						"area_id": "626200",
						"title": "九龙县",
						"pinyin": "jiulong",
						"pid": "2535"
					},
					{
						"area_id": "627450",
						"title": "雅江县",
						"pinyin": "yajiang",
						"pid": "2535"
					},
					{
						"area_id": "626400",
						"title": "道孚县",
						"pinyin": "daofu",
						"pid": "2535"
					},
					{
						"area_id": "626500",
						"title": "炉霍县",
						"pinyin": "luhuo",
						"pid": "2535"
					},
					{
						"area_id": "626700",
						"title": "甘孜县",
						"pinyin": "ganzi",
						"pid": "2535"
					},
					{
						"area_id": "626800",
						"title": "新龙县",
						"pinyin": "xinlong",
						"pid": "2535"
					},
					{
						"area_id": "627250",
						"title": "德格县",
						"pinyin": "dege",
						"pid": "2535"
					},
					{
						"area_id": "627150",
						"title": "白玉县",
						"pinyin": "baiyu",
						"pid": "2535"
					},
					{
						"area_id": "627350",
						"title": "石渠县",
						"pinyin": "shiqu",
						"pid": "2535"
					},
					{
						"area_id": "626600",
						"title": "色达县",
						"pinyin": "seda",
						"pid": "2535"
					},
					{
						"area_id": "627550",
						"title": "理塘县",
						"pinyin": "litang",
						"pid": "2535"
					},
					{
						"area_id": "627650",
						"title": "巴塘县",
						"pinyin": "batang",
						"pid": "2535"
					},
					{
						"area_id": "627850",
						"title": "乡城县",
						"pinyin": "xiangcheng",
						"pid": "2535"
					},
					{
						"area_id": "627750",
						"title": "稻城县",
						"pinyin": "daocheng",
						"pid": "2535"
					},
					{
						"area_id": "627950",
						"title": "得荣县",
						"pinyin": "derong",
						"pid": "2535"
					}
				]
			},
			{
				"area_id": "615000",
				"title": "凉山彝族自治州",
				"pinyin": "liangshan",
				"pid": "2367",
				"child": [
					{
						"area_id": "615000",
						"title": "西昌市",
						"pinyin": "xichang",
						"pid": "2554"
					},
					{
						"area_id": "615800",
						"title": "木里藏族自治县",
						"pinyin": "muli",
						"pid": "2554"
					},
					{
						"area_id": "615700",
						"title": "盐源县",
						"pinyin": "yanyuan",
						"pid": "2554"
					},
					{
						"area_id": "615500",
						"title": "德昌县",
						"pinyin": "dechang",
						"pid": "2554"
					},
					{
						"area_id": "615100",
						"title": "会理县",
						"pinyin": "huili",
						"pid": "2554"
					},
					{
						"area_id": "615200",
						"title": "会东县",
						"pinyin": "huidong",
						"pid": "2554"
					},
					{
						"area_id": "615400",
						"title": "宁南县",
						"pinyin": "ningnan",
						"pid": "2554"
					},
					{
						"area_id": "615300",
						"title": "普格县",
						"pinyin": "puge",
						"pid": "2554"
					},
					{
						"area_id": "616350",
						"title": "布拖县",
						"pinyin": "butuo",
						"pid": "2554"
					},
					{
						"area_id": "616250",
						"title": "金阳县",
						"pinyin": "jinyang",
						"pid": "2554"
					},
					{
						"area_id": "616150",
						"title": "昭觉县",
						"pinyin": "zhaojue",
						"pid": "2554"
					},
					{
						"area_id": "616750",
						"title": "喜德县",
						"pinyin": "xide",
						"pid": "2554"
					},
					{
						"area_id": "615600",
						"title": "冕宁县",
						"pinyin": "mianning",
						"pid": "2554"
					},
					{
						"area_id": "616650",
						"title": "越西县",
						"pinyin": "yuexi",
						"pid": "2554"
					},
					{
						"area_id": "616850",
						"title": "甘洛县",
						"pinyin": "ganluo",
						"pid": "2554"
					},
					{
						"area_id": "616450",
						"title": "美姑县",
						"pinyin": "meigu",
						"pid": "2554"
					},
					{
						"area_id": "616550",
						"title": "雷波县",
						"pinyin": "leibo",
						"pid": "2554"
					}
				]
			}
		]
	},
	{
		"area_id": "550000",
		"title": "贵州省",
		"pinyin": "guizhou",
		"pid": "0",
		"child": [
			{
				"area_id": "550001",
				"title": "贵阳市",
				"pinyin": "guiyang",
				"pid": "2572",
				"child": [
					{
						"area_id": "550001",
						"title": "南明区",
						"pinyin": "nanming",
						"pid": "2573"
					},
					{
						"area_id": "550001",
						"title": "云岩区",
						"pinyin": "yunyan",
						"pid": "2573"
					},
					{
						"area_id": "550025",
						"title": "花溪区",
						"pinyin": "huaxi",
						"pid": "2573"
					},
					{
						"area_id": "550018",
						"title": "乌当区",
						"pinyin": "wudang",
						"pid": "2573"
					},
					{
						"area_id": "550014",
						"title": "白云区",
						"pinyin": "baiyun",
						"pid": "2573"
					},
					{
						"area_id": "550009",
						"title": "观山湖区",
						"pinyin": "guanshanhu",
						"pid": "2573"
					},
					{
						"area_id": "550300",
						"title": "开阳县",
						"pinyin": "kaiyang",
						"pid": "2573"
					},
					{
						"area_id": "551100",
						"title": "息烽县",
						"pinyin": "xifeng",
						"pid": "2573"
					},
					{
						"area_id": "550200",
						"title": "修文县",
						"pinyin": "xiuwen",
						"pid": "2573"
					},
					{
						"area_id": "551400",
						"title": "清镇市",
						"pinyin": "qingzhen",
						"pid": "2573"
					}
				]
			},
			{
				"area_id": "553400",
				"title": "六盘水市",
				"pinyin": "liupanshui",
				"pid": "2572",
				"child": [
					{
						"area_id": "553000",
						"title": "钟山区",
						"pinyin": "zhongshan",
						"pid": "2584"
					},
					{
						"area_id": "553400",
						"title": "六枝特区",
						"pinyin": "liuzhi",
						"pid": "2584"
					},
					{
						"area_id": "553000",
						"title": "水城县",
						"pinyin": "shuicheng",
						"pid": "2584"
					},
					{
						"area_id": "561601",
						"title": "盘县",
						"pinyin": "panxian",
						"pid": "2584"
					}
				]
			},
			{
				"area_id": "563000",
				"title": "遵义市",
				"pinyin": "zunyi",
				"pid": "2572",
				"child": [
					{
						"area_id": "563000",
						"title": "红花岗区",
						"pinyin": "honghuagang",
						"pid": "2589"
					},
					{
						"area_id": "563000",
						"title": "汇川区",
						"pinyin": "huichuan",
						"pid": "2589"
					},
					{
						"area_id": "563100",
						"title": "遵义县",
						"pinyin": "zunyi",
						"pid": "2589"
					},
					{
						"area_id": "563200",
						"title": "桐梓县",
						"pinyin": "tongzi",
						"pid": "2589"
					},
					{
						"area_id": "563300",
						"title": "绥阳县",
						"pinyin": "suiyang",
						"pid": "2589"
					},
					{
						"area_id": "563400",
						"title": "正安县",
						"pinyin": "zheng'an",
						"pid": "2589"
					},
					{
						"area_id": "563500",
						"title": "道真仡佬族苗族自治县",
						"pinyin": "daozhen",
						"pid": "2589"
					},
					{
						"area_id": "564300",
						"title": "务川仡佬族苗族自治县",
						"pinyin": "wuchuan",
						"pid": "2589"
					},
					{
						"area_id": "564200",
						"title": "凤冈县",
						"pinyin": "fenggang",
						"pid": "2589"
					},
					{
						"area_id": "564100",
						"title": "湄潭县",
						"pinyin": "meitan",
						"pid": "2589"
					},
					{
						"area_id": "564400",
						"title": "余庆县",
						"pinyin": "yuqing",
						"pid": "2589"
					},
					{
						"area_id": "564600",
						"title": "习水县",
						"pinyin": "xishui",
						"pid": "2589"
					},
					{
						"area_id": "564700",
						"title": "赤水市",
						"pinyin": "chishui",
						"pid": "2589"
					},
					{
						"area_id": "564500",
						"title": "仁怀市",
						"pinyin": "renhuai",
						"pid": "2589"
					}
				]
			},
			{
				"area_id": "561000",
				"title": "安顺市",
				"pinyin": "anshun",
				"pid": "2572",
				"child": [
					{
						"area_id": "561000",
						"title": "西秀区",
						"pinyin": "xixiu",
						"pid": "2604"
					},
					{
						"area_id": "561100",
						"title": "平坝区",
						"pinyin": "pingba",
						"pid": "2604"
					},
					{
						"area_id": "562100",
						"title": "普定县",
						"pinyin": "puding",
						"pid": "2604"
					},
					{
						"area_id": "561200",
						"title": "镇宁布依族苗族自治县",
						"pinyin": "zhenning",
						"pid": "2604"
					},
					{
						"area_id": "561300",
						"title": "关岭布依族苗族自治县",
						"pinyin": "guanling",
						"pid": "2604"
					},
					{
						"area_id": "550800",
						"title": "紫云苗族布依族自治县",
						"pinyin": "ziyun",
						"pid": "2604"
					}
				]
			},
			{
				"area_id": "551700",
				"title": "毕节市",
				"pinyin": "bijie",
				"pid": "2572",
				"child": [
					{
						"area_id": "551700",
						"title": "七星关区",
						"pinyin": "qixingguan",
						"pid": "2611"
					},
					{
						"area_id": "551600",
						"title": "大方县",
						"pinyin": "dafang",
						"pid": "2611"
					},
					{
						"area_id": "551500",
						"title": "黔西县",
						"pinyin": "qianxi",
						"pid": "2611"
					},
					{
						"area_id": "551800",
						"title": "金沙县",
						"pinyin": "jinsha",
						"pid": "2611"
					},
					{
						"area_id": "552100",
						"title": "织金县",
						"pinyin": "zhijin",
						"pid": "2611"
					},
					{
						"area_id": "553300",
						"title": "纳雍县",
						"pinyin": "nayong",
						"pid": "2611"
					},
					{
						"area_id": "553100",
						"title": "威宁彝族回族苗族自治县",
						"pinyin": "weining",
						"pid": "2611"
					},
					{
						"area_id": "553200",
						"title": "赫章县",
						"pinyin": "hezhang",
						"pid": "2611"
					}
				]
			},
			{
				"area_id": "554300",
				"title": "铜仁市",
				"pinyin": "tongren",
				"pid": "2572",
				"child": [
					{
						"area_id": "554300",
						"title": "碧江区",
						"pinyin": "bijiang",
						"pid": "2620"
					},
					{
						"area_id": "554200",
						"title": "万山区",
						"pinyin": "wanshan",
						"pid": "2620"
					},
					{
						"area_id": "554400",
						"title": "江口县",
						"pinyin": "jiangkou",
						"pid": "2620"
					},
					{
						"area_id": "554004",
						"title": "玉屏侗族自治县",
						"pinyin": "yuping",
						"pid": "2620"
					},
					{
						"area_id": "555100",
						"title": "石阡县",
						"pinyin": "shiqian",
						"pid": "2620"
					},
					{
						"area_id": "565100",
						"title": "思南县",
						"pinyin": "sinan",
						"pid": "2620"
					},
					{
						"area_id": "555200",
						"title": "印江土家族苗族自治县",
						"pinyin": "yinjiang",
						"pid": "2620"
					},
					{
						"area_id": "565200",
						"title": "德江县",
						"pinyin": "dejiang",
						"pid": "2620"
					},
					{
						"area_id": "565300",
						"title": "沿河土家族自治县",
						"pinyin": "yuanhe",
						"pid": "2620"
					},
					{
						"area_id": "554100",
						"title": "松桃苗族自治县",
						"pinyin": "songtao",
						"pid": "2620"
					}
				]
			},
			{
				"area_id": "562400",
				"title": "黔西南布依族苗族自治州",
				"pinyin": "qianxinan",
				"pid": "2572",
				"child": [
					{
						"area_id": "562400",
						"title": "兴义市 ",
						"pinyin": "xingyi",
						"pid": "2631"
					},
					{
						"area_id": "562300",
						"title": "兴仁县",
						"pinyin": "xingren",
						"pid": "2631"
					},
					{
						"area_id": "561500",
						"title": "普安县",
						"pinyin": "pu'an",
						"pid": "2631"
					},
					{
						"area_id": "561400",
						"title": "晴隆县",
						"pinyin": "qinglong",
						"pid": "2631"
					},
					{
						"area_id": "562200",
						"title": "贞丰县",
						"pinyin": "zhenfeng",
						"pid": "2631"
					},
					{
						"area_id": "552300",
						"title": "望谟县",
						"pinyin": "wangmo",
						"pid": "2631"
					},
					{
						"area_id": "552200",
						"title": "册亨县",
						"pinyin": "ceheng",
						"pid": "2631"
					},
					{
						"area_id": "552400",
						"title": "安龙县",
						"pinyin": "anlong",
						"pid": "2631"
					}
				]
			},
			{
				"area_id": "556000",
				"title": "黔东南苗族侗族自治州",
				"pinyin": "qiandongnan",
				"pid": "2572",
				"child": [
					{
						"area_id": "556000",
						"title": "凯里市",
						"pinyin": "kaili",
						"pid": "2640"
					},
					{
						"area_id": "556100",
						"title": "黄平县",
						"pinyin": "huangping",
						"pid": "2640"
					},
					{
						"area_id": "556200",
						"title": "施秉县",
						"pinyin": "shibing",
						"pid": "2640"
					},
					{
						"area_id": "556500",
						"title": "三穗县",
						"pinyin": "sansui",
						"pid": "2640"
					},
					{
						"area_id": "557700",
						"title": "镇远县",
						"pinyin": "zhenyuan",
						"pid": "2640"
					},
					{
						"area_id": "557800",
						"title": "岑巩县",
						"pinyin": "cengong",
						"pid": "2640"
					},
					{
						"area_id": "556600",
						"title": "天柱县",
						"pinyin": "tianzhu",
						"pid": "2640"
					},
					{
						"area_id": "556700",
						"title": "锦屏县",
						"pinyin": "jinping",
						"pid": "2640"
					},
					{
						"area_id": "556400",
						"title": "剑河县",
						"pinyin": "jianhe",
						"pid": "2640"
					},
					{
						"area_id": "556300",
						"title": "台江县",
						"pinyin": "taijiang",
						"pid": "2640"
					},
					{
						"area_id": "557300",
						"title": "黎平县",
						"pinyin": "liping",
						"pid": "2640"
					},
					{
						"area_id": "557200",
						"title": "榕江县",
						"pinyin": "rongjiang",
						"pid": "2640"
					},
					{
						"area_id": "557400",
						"title": "从江县",
						"pinyin": "congjiang",
						"pid": "2640"
					},
					{
						"area_id": "557100",
						"title": "雷山县",
						"pinyin": "leishan",
						"pid": "2640"
					},
					{
						"area_id": "557600",
						"title": "麻江县",
						"pinyin": "majiang",
						"pid": "2640"
					},
					{
						"area_id": "557500",
						"title": "丹寨县",
						"pinyin": "danzhai",
						"pid": "2640"
					}
				]
			},
			{
				"area_id": "558000",
				"title": "黔南布依族苗族自治州",
				"pinyin": "qiannan",
				"pid": "2572",
				"child": [
					{
						"area_id": "558000",
						"title": "都匀市",
						"pinyin": "duyun",
						"pid": "2657"
					},
					{
						"area_id": "550500",
						"title": "福泉市",
						"pinyin": "fuquan",
						"pid": "2657"
					},
					{
						"area_id": "558400",
						"title": "荔波县",
						"pinyin": "libo",
						"pid": "2657"
					},
					{
						"area_id": "551300",
						"title": "贵定县",
						"pinyin": "guiding",
						"pid": "2657"
					},
					{
						"area_id": "550400",
						"title": "瓮安县",
						"pinyin": "weng'an",
						"pid": "2657"
					},
					{
						"area_id": "558200",
						"title": "独山县",
						"pinyin": "dushan",
						"pid": "2657"
					},
					{
						"area_id": "558300",
						"title": "平塘县",
						"pinyin": "pingtang",
						"pid": "2657"
					},
					{
						"area_id": "550100",
						"title": "罗甸县",
						"pinyin": "luodian",
						"pid": "2657"
					},
					{
						"area_id": "550700",
						"title": "长顺县",
						"pinyin": "changshun",
						"pid": "2657"
					},
					{
						"area_id": "551200",
						"title": "龙里县",
						"pinyin": "longli",
						"pid": "2657"
					},
					{
						"area_id": "550600",
						"title": "惠水县",
						"pinyin": "huishui",
						"pid": "2657"
					},
					{
						"area_id": "558100",
						"title": "三都水族自治县",
						"pinyin": "sandu",
						"pid": "2657"
					}
				]
			}
		]
	},
	{
		"area_id": "650000",
		"title": "云南省",
		"pinyin": "yunnan",
		"pid": "0",
		"child": [
			{
				"area_id": "650500",
				"title": "昆明市",
				"pinyin": "kunming",
				"pid": "2670",
				"child": [
					{
						"area_id": "650021",
						"title": "五华区",
						"pinyin": "wuhua",
						"pid": "2671"
					},
					{
						"area_id": "650051",
						"title": "盘龙区",
						"pinyin": "panlong",
						"pid": "2671"
					},
					{
						"area_id": "650200",
						"title": "官渡区",
						"pinyin": "guandu",
						"pid": "2671"
					},
					{
						"area_id": "650118",
						"title": "西山区",
						"pinyin": "xishan",
						"pid": "2671"
					},
					{
						"area_id": "654100",
						"title": "东川区",
						"pinyin": "dongchuan",
						"pid": "2671"
					},
					{
						"area_id": "650500",
						"title": "呈贡区",
						"pinyin": "chenggong",
						"pid": "2671"
					},
					{
						"area_id": "650600",
						"title": "晋宁县",
						"pinyin": "jinning",
						"pid": "2671"
					},
					{
						"area_id": "650400",
						"title": "富民县",
						"pinyin": "fumin",
						"pid": "2671"
					},
					{
						"area_id": "652100",
						"title": "宜良县",
						"pinyin": "yiliang",
						"pid": "2671"
					},
					{
						"area_id": "652200",
						"title": "石林彝族自治县",
						"pinyin": "shilin",
						"pid": "2671"
					},
					{
						"area_id": "651700",
						"title": "嵩明县",
						"pinyin": "songming",
						"pid": "2671"
					},
					{
						"area_id": "651500",
						"title": "禄劝彝族苗族自治县",
						"pinyin": "luquan",
						"pid": "2671"
					},
					{
						"area_id": "655200",
						"title": "寻甸回族彝族自治县 ",
						"pinyin": "xundian",
						"pid": "2671"
					},
					{
						"area_id": "650300",
						"title": "安宁市",
						"pinyin": "anning",
						"pid": "2671"
					}
				]
			},
			{
				"area_id": "655000",
				"title": "曲靖市",
				"pinyin": "qujing",
				"pid": "2670",
				"child": [
					{
						"area_id": "655000",
						"title": "麒麟区",
						"pinyin": "qilin",
						"pid": "2686"
					},
					{
						"area_id": "655100",
						"title": "马龙县",
						"pinyin": "malong",
						"pid": "2686"
					},
					{
						"area_id": "655600",
						"title": "陆良县",
						"pinyin": "luliang",
						"pid": "2686"
					},
					{
						"area_id": "655700",
						"title": "师宗县",
						"pinyin": "shizong",
						"pid": "2686"
					},
					{
						"area_id": "655800",
						"title": "罗平县",
						"pinyin": "luoping",
						"pid": "2686"
					},
					{
						"area_id": "655500",
						"title": "富源县",
						"pinyin": "fuyuan",
						"pid": "2686"
					},
					{
						"area_id": "654200",
						"title": "会泽县",
						"pinyin": "huize",
						"pid": "2686"
					},
					{
						"area_id": "655331",
						"title": "沾益县",
						"pinyin": "zhanyi",
						"pid": "2686"
					},
					{
						"area_id": "655400",
						"title": "宣威市",
						"pinyin": "xuanwei",
						"pid": "2686"
					}
				]
			},
			{
				"area_id": "653100",
				"title": "玉溪市",
				"pinyin": "yuxi",
				"pid": "2670",
				"child": [
					{
						"area_id": "653100",
						"title": "红塔区",
						"pinyin": "hongta",
						"pid": "2696"
					},
					{
						"area_id": "652600",
						"title": "江川县",
						"pinyin": "jiangchuan",
						"pid": "2696"
					},
					{
						"area_id": "652500",
						"title": "澄江县",
						"pinyin": "chengjiang",
						"pid": "2696"
					},
					{
						"area_id": "652700",
						"title": "通海县",
						"pinyin": "tonghai",
						"pid": "2696"
					},
					{
						"area_id": "652800",
						"title": "华宁县",
						"pinyin": "huaning",
						"pid": "2696"
					},
					{
						"area_id": "651100",
						"title": "易门县",
						"pinyin": "yimen",
						"pid": "2696"
					},
					{
						"area_id": "653200",
						"title": "峨山彝族自治县",
						"pinyin": "eshan",
						"pid": "2696"
					},
					{
						"area_id": "653400",
						"title": "新平彝族傣族自治县",
						"pinyin": "xinping",
						"pid": "2696"
					},
					{
						"area_id": "653300",
						"title": "元江哈尼族彝族傣族自治县",
						"pinyin": "yuanjiang",
						"pid": "2696"
					}
				]
			},
			{
				"area_id": "678000",
				"title": "保山市",
				"pinyin": "baoshan",
				"pid": "2670",
				"child": [
					{
						"area_id": "678000",
						"title": "隆阳区",
						"pinyin": "longyang",
						"pid": "2706"
					},
					{
						"area_id": "678200",
						"title": "施甸县",
						"pinyin": "shidian",
						"pid": "2706"
					},
					{
						"area_id": "679100",
						"title": "腾冲县",
						"pinyin": "tengchong",
						"pid": "2706"
					},
					{
						"area_id": "678300",
						"title": "龙陵县",
						"pinyin": "longling",
						"pid": "2706"
					},
					{
						"area_id": "678100",
						"title": "昌宁县",
						"pinyin": "changning",
						"pid": "2706"
					}
				]
			},
			{
				"area_id": "657000",
				"title": "昭通市",
				"pinyin": "zhaotong",
				"pid": "2670",
				"child": [
					{
						"area_id": "657000",
						"title": "昭阳区",
						"pinyin": "zhaoyang",
						"pid": "2712"
					},
					{
						"area_id": "657100",
						"title": "鲁甸县",
						"pinyin": "ludian",
						"pid": "2712"
					},
					{
						"area_id": "654600",
						"title": "巧家县",
						"pinyin": "qiaojia",
						"pid": "2712"
					},
					{
						"area_id": "657500",
						"title": "盐津县",
						"pinyin": "yanjin",
						"pid": "2712"
					},
					{
						"area_id": "657400",
						"title": "大关县",
						"pinyin": "daguan",
						"pid": "2712"
					},
					{
						"area_id": "657300",
						"title": "永善县",
						"pinyin": "yongshan",
						"pid": "2712"
					},
					{
						"area_id": "657700",
						"title": "绥江县",
						"pinyin": "suijiang",
						"pid": "2712"
					},
					{
						"area_id": "657200",
						"title": "镇雄县",
						"pinyin": "zhenxiong",
						"pid": "2712"
					},
					{
						"area_id": "657600",
						"title": "彝良县",
						"pinyin": "yiliang",
						"pid": "2712"
					},
					{
						"area_id": "657900",
						"title": "威信县",
						"pinyin": "weixin",
						"pid": "2712"
					},
					{
						"area_id": "657800",
						"title": "水富县",
						"pinyin": "shuifu",
						"pid": "2712"
					}
				]
			},
			{
				"area_id": "674100",
				"title": "丽江市",
				"pinyin": "lijiang",
				"pid": "2670",
				"child": [
					{
						"area_id": "674100",
						"title": "古城区",
						"pinyin": "gucheng",
						"pid": "2724"
					},
					{
						"area_id": "674100",
						"title": "玉龙纳西族自治县",
						"pinyin": "yulong",
						"pid": "2724"
					},
					{
						"area_id": "674200",
						"title": "永胜县",
						"pinyin": "yongsheng",
						"pid": "2724"
					},
					{
						"area_id": "674800",
						"title": "华坪县",
						"pinyin": "huaping",
						"pid": "2724"
					},
					{
						"area_id": "674300",
						"title": "宁蒗彝族自治县",
						"pinyin": "ninglang",
						"pid": "2724"
					}
				]
			},
			{
				"area_id": "665000",
				"title": "普洱市",
				"pinyin": "pu'er",
				"pid": "2670",
				"child": [
					{
						"area_id": "665000",
						"title": "思茅区",
						"pinyin": "simao",
						"pid": "2730"
					},
					{
						"area_id": "665100",
						"title": "宁洱哈尼族彝族自治县",
						"pinyin": "ninger",
						"pid": "2730"
					},
					{
						"area_id": "654800",
						"title": "墨江哈尼族自治县",
						"pinyin": "mojiang",
						"pid": "2730"
					},
					{
						"area_id": "676200",
						"title": "景东彝族自治县",
						"pinyin": "jingdong",
						"pid": "2730"
					},
					{
						"area_id": "666400",
						"title": "景谷傣族彝族自治县",
						"pinyin": "jinggu",
						"pid": "2730"
					},
					{
						"area_id": "666500",
						"title": "镇沅彝族哈尼族拉祜族自治县",
						"pinyin": "zhenyuan",
						"pid": "2730"
					},
					{
						"area_id": "665900",
						"title": "江城哈尼族彝族自治县",
						"pinyin": "jiangcheng",
						"pid": "2730"
					},
					{
						"area_id": "665800",
						"title": "孟连傣族拉祜族佤族自治县",
						"pinyin": "menglian",
						"pid": "2730"
					},
					{
						"area_id": "665600",
						"title": "澜沧拉祜族自治县",
						"pinyin": "lancang",
						"pid": "2730"
					},
					{
						"area_id": "665700",
						"title": "西盟佤族自治县",
						"pinyin": "ximeng",
						"pid": "2730"
					}
				]
			},
			{
				"area_id": "677000",
				"title": "临沧市",
				"pinyin": "lincang",
				"pid": "2670",
				"child": [
					{
						"area_id": "677000",
						"title": "临翔区",
						"pinyin": "linxiang",
						"pid": "2741"
					},
					{
						"area_id": "675900",
						"title": "凤庆县",
						"pinyin": "fengqing",
						"pid": "2741"
					},
					{
						"area_id": "675800",
						"title": "云县",
						"pinyin": "yunxian",
						"pid": "2741"
					},
					{
						"area_id": "677600",
						"title": "永德县",
						"pinyin": "yongde",
						"pid": "2741"
					},
					{
						"area_id": "677704",
						"title": "镇康县",
						"pinyin": "zhenkang",
						"pid": "2741"
					},
					{
						"area_id": "677300",
						"title": "双江拉祜族佤族布朗族傣族自治县",
						"pinyin": "shuangjiang",
						"pid": "2741"
					},
					{
						"area_id": "677500",
						"title": "耿马傣族佤族自治县",
						"pinyin": "gengma",
						"pid": "2741"
					},
					{
						"area_id": "677400",
						"title": "沧源佤族自治县",
						"pinyin": "cangyuan",
						"pid": "2741"
					}
				]
			},
			{
				"area_id": "675000",
				"title": "楚雄彝族自治州",
				"pinyin": "chuxiong",
				"pid": "2670",
				"child": [
					{
						"area_id": "675000",
						"title": "楚雄市",
						"pinyin": "chuxiong",
						"pid": "2750"
					},
					{
						"area_id": "675100",
						"title": "双柏县",
						"pinyin": "shuangbai",
						"pid": "2750"
					},
					{
						"area_id": "675500",
						"title": "牟定县",
						"pinyin": "mouding",
						"pid": "2750"
					},
					{
						"area_id": "675200",
						"title": "南华县",
						"pinyin": "nanhua",
						"pid": "2750"
					},
					{
						"area_id": "675300",
						"title": "姚安县",
						"pinyin": "yao'an",
						"pid": "2750"
					},
					{
						"area_id": "675400",
						"title": "大姚县",
						"pinyin": "dayao",
						"pid": "2750"
					},
					{
						"area_id": "651400",
						"title": "永仁县",
						"pinyin": "yongren",
						"pid": "2750"
					},
					{
						"area_id": "651300",
						"title": "元谋县",
						"pinyin": "yuanmou",
						"pid": "2750"
					},
					{
						"area_id": "651600",
						"title": "武定县",
						"pinyin": "wuding",
						"pid": "2750"
					},
					{
						"area_id": "651200",
						"title": "禄丰县",
						"pinyin": "lufeng",
						"pid": "2750"
					}
				]
			},
			{
				"area_id": "661400",
				"title": "红河哈尼族彝族自治州",
				"pinyin": "honghe",
				"pid": "2670",
				"child": [
					{
						"area_id": "661000",
						"title": "个旧市",
						"pinyin": "gejiu",
						"pid": "2761"
					},
					{
						"area_id": "661600",
						"title": "开远市",
						"pinyin": "kaiyuan",
						"pid": "2761"
					},
					{
						"area_id": "661101",
						"title": "蒙自市",
						"pinyin": "mengzi",
						"pid": "2761"
					},
					{
						"area_id": "652300",
						"title": "弥勒市",
						"pinyin": "mile",
						"pid": "2761"
					},
					{
						"area_id": "661200",
						"title": "屏边苗族自治县",
						"pinyin": "pingbian",
						"pid": "2761"
					},
					{
						"area_id": "654300",
						"title": "建水县",
						"pinyin": "jianshui",
						"pid": "2761"
					},
					{
						"area_id": "662200",
						"title": "石屏县",
						"pinyin": "shiping",
						"pid": "2761"
					},
					{
						"area_id": "652400",
						"title": "泸西县",
						"pinyin": "luxi",
						"pid": "2761"
					},
					{
						"area_id": "662400",
						"title": "元阳县",
						"pinyin": "yuanyang",
						"pid": "2761"
					},
					{
						"area_id": "654400",
						"title": "红河县",
						"pinyin": "honghexian",
						"pid": "2761"
					},
					{
						"area_id": "661500",
						"title": "金平苗族瑶族傣族自治县",
						"pinyin": "jinping",
						"pid": "2761"
					},
					{
						"area_id": "662500",
						"title": "绿春县",
						"pinyin": "lvchun",
						"pid": "2761"
					},
					{
						"area_id": "661300",
						"title": "河口瑶族自治县",
						"pinyin": "hekou",
						"pid": "2761"
					}
				]
			},
			{
				"area_id": "663000",
				"title": "文山壮族苗族自治州",
				"pinyin": "wenshan",
				"pid": "2670",
				"child": [
					{
						"area_id": "663000",
						"title": "文山市",
						"pinyin": "wenshan",
						"pid": "2775"
					},
					{
						"area_id": "663100",
						"title": "砚山县",
						"pinyin": "yanshan",
						"pid": "2775"
					},
					{
						"area_id": "663500",
						"title": "西畴县",
						"pinyin": "xichou",
						"pid": "2775"
					},
					{
						"area_id": "663600",
						"title": "麻栗坡县",
						"pinyin": "malipo",
						"pid": "2775"
					},
					{
						"area_id": "663700",
						"title": "马关县",
						"pinyin": "maguan",
						"pid": "2775"
					},
					{
						"area_id": "663200",
						"title": "丘北县",
						"pinyin": "qiubei",
						"pid": "2775"
					},
					{
						"area_id": "663300",
						"title": "广南县",
						"pinyin": "guangnan",
						"pid": "2775"
					},
					{
						"area_id": "663400",
						"title": "富宁县",
						"pinyin": "funing",
						"pid": "2775"
					}
				]
			},
			{
				"area_id": "666100",
				"title": "西双版纳傣族自治州",
				"pinyin": "xishuangbanna",
				"pid": "2670",
				"child": [
					{
						"area_id": "666100",
						"title": "景洪市",
						"pinyin": "jinghong",
						"pid": "2784"
					},
					{
						"area_id": "666200",
						"title": "勐海县",
						"pinyin": "menghai",
						"pid": "2784"
					},
					{
						"area_id": "666300",
						"title": "勐腊县",
						"pinyin": "mengla",
						"pid": "2784"
					}
				]
			},
			{
				"area_id": "671000",
				"title": "大理白族自治州",
				"pinyin": "dali",
				"pid": "2670",
				"child": [
					{
						"area_id": "671000",
						"title": "大理市",
						"pinyin": "dali",
						"pid": "2788"
					},
					{
						"area_id": "672500",
						"title": "漾濞彝族自治县",
						"pinyin": "yangbi",
						"pid": "2788"
					},
					{
						"area_id": "672100",
						"title": "祥云县",
						"pinyin": "xiangyun",
						"pid": "2788"
					},
					{
						"area_id": "671600",
						"title": "宾川县",
						"pinyin": "binchuan",
						"pid": "2788"
					},
					{
						"area_id": "675600",
						"title": "弥渡县",
						"pinyin": "midu",
						"pid": "2788"
					},
					{
						"area_id": "675700",
						"title": "南涧彝族自治县",
						"pinyin": "nanjian",
						"pid": "2788"
					},
					{
						"area_id": "672400",
						"title": "巍山彝族回族自治县",
						"pinyin": "weishan",
						"pid": "2788"
					},
					{
						"area_id": "672600",
						"title": "永平县",
						"pinyin": "yongping",
						"pid": "2788"
					},
					{
						"area_id": "672700",
						"title": "云龙县",
						"pinyin": "yunlong",
						"pid": "2788"
					},
					{
						"area_id": "671200",
						"title": "洱源县",
						"pinyin": "eryuan",
						"pid": "2788"
					},
					{
						"area_id": "671300",
						"title": "剑川县",
						"pinyin": "jianchuan",
						"pid": "2788"
					},
					{
						"area_id": "671500",
						"title": "鹤庆县",
						"pinyin": "heqing",
						"pid": "2788"
					}
				]
			},
			{
				"area_id": "678400",
				"title": "德宏傣族景颇族自治州",
				"pinyin": "dehong",
				"pid": "2670",
				"child": [
					{
						"area_id": "678600",
						"title": "瑞丽市",
						"pinyin": "ruili",
						"pid": "2801"
					},
					{
						"area_id": "678400",
						"title": "芒市",
						"pinyin": "mangshi",
						"pid": "2801"
					},
					{
						"area_id": "679200",
						"title": "梁河县",
						"pinyin": "lianghe",
						"pid": "2801"
					},
					{
						"area_id": "679300",
						"title": "盈江县",
						"pinyin": "yingjiang",
						"pid": "2801"
					},
					{
						"area_id": "678700",
						"title": "陇川县",
						"pinyin": "longchuan",
						"pid": "2801"
					}
				]
			},
			{
				"area_id": "673100",
				"title": "怒江傈僳族自治州",
				"pinyin": "nujiang",
				"pid": "2670",
				"child": [
					{
						"area_id": "673100",
						"title": "泸水县",
						"pinyin": "lushui",
						"pid": "2807"
					},
					{
						"area_id": "673400",
						"title": "福贡县",
						"pinyin": "fugong",
						"pid": "2807"
					},
					{
						"area_id": "673500",
						"title": "贡山独龙族怒族自治县",
						"pinyin": "gongshan",
						"pid": "2807"
					},
					{
						"area_id": "671400",
						"title": "兰坪白族普米族自治县",
						"pinyin": "lanping",
						"pid": "2807"
					}
				]
			},
			{
				"area_id": "674400",
				"title": "迪庆藏族自治州",
				"pinyin": "deqen",
				"pid": "2670",
				"child": [
					{
						"area_id": "674400",
						"title": "香格里拉市",
						"pinyin": "xianggelila",
						"pid": "2812"
					},
					{
						"area_id": "674500",
						"title": "德钦县",
						"pinyin": "deqin",
						"pid": "2812"
					},
					{
						"area_id": "674600",
						"title": "维西傈僳族自治县",
						"pinyin": "weixi",
						"pid": "2812"
					}
				]
			}
		]
	},
	{
		"area_id": "850000",
		"title": "西藏自治区",
		"pinyin": "tibet",
		"pid": "0",
		"child": [
			{
				"area_id": "850000",
				"title": "拉萨市",
				"pinyin": "lhasa",
				"pid": "2816",
				"child": [
					{
						"area_id": "850000",
						"title": "城关区",
						"pinyin": "chengguan",
						"pid": "2817"
					},
					{
						"area_id": "851600",
						"title": "林周县",
						"pinyin": "linzhou",
						"pid": "2817"
					},
					{
						"area_id": "851500",
						"title": "当雄县",
						"pinyin": "dangxiong",
						"pid": "2817"
					},
					{
						"area_id": "851300",
						"title": "尼木县",
						"pinyin": "nimu",
						"pid": "2817"
					},
					{
						"area_id": "850600",
						"title": "曲水县",
						"pinyin": "qushui",
						"pid": "2817"
					},
					{
						"area_id": "851400",
						"title": "堆龙德庆县",
						"pinyin": "duilongdeqing",
						"pid": "2817"
					},
					{
						"area_id": "850100",
						"title": "达孜县",
						"pinyin": "dazi",
						"pid": "2817"
					},
					{
						"area_id": "850200",
						"title": "墨竹工卡县",
						"pinyin": "mozhugongka",
						"pid": "2817"
					}
				]
			},
			{
				"area_id": "857000",
				"title": "日喀则市",
				"pinyin": "rikaze",
				"pid": "2816",
				"child": [
					{
						"area_id": "857000",
						"title": "桑珠孜区",
						"pinyin": "sangzhuzi",
						"pid": "2826"
					},
					{
						"area_id": "857100",
						"title": "南木林县",
						"pinyin": "nanmulin",
						"pid": "2826"
					},
					{
						"area_id": "857400",
						"title": "江孜县",
						"pinyin": "jiangzi",
						"pid": "2826"
					},
					{
						"area_id": "858200",
						"title": "定日县",
						"pinyin": "dingri",
						"pid": "2826"
					},
					{
						"area_id": "857800",
						"title": "萨迦县",
						"pinyin": "sajia",
						"pid": "2826"
					},
					{
						"area_id": "858100",
						"title": "拉孜县",
						"pinyin": "lazi",
						"pid": "2826"
					},
					{
						"area_id": "858500",
						"title": "昂仁县",
						"pinyin": "angren",
						"pid": "2826"
					},
					{
						"area_id": "858900",
						"title": "谢通门县",
						"pinyin": "xietongmen",
						"pid": "2826"
					},
					{
						"area_id": "857300",
						"title": "白朗县",
						"pinyin": "bailang",
						"pid": "2826"
					},
					{
						"area_id": "857200",
						"title": "仁布县",
						"pinyin": "renbu",
						"pid": "2826"
					},
					{
						"area_id": "857500",
						"title": "康马县",
						"pinyin": "kangma",
						"pid": "2826"
					},
					{
						"area_id": "857900",
						"title": "定结县",
						"pinyin": "dingjie",
						"pid": "2826"
					},
					{
						"area_id": "858800",
						"title": "仲巴县",
						"pinyin": "zhongba",
						"pid": "2826"
					},
					{
						"area_id": "857600",
						"title": "亚东县",
						"pinyin": "yadong",
						"pid": "2826"
					},
					{
						"area_id": "858700",
						"title": "吉隆县",
						"pinyin": "jilong",
						"pid": "2826"
					},
					{
						"area_id": "858300",
						"title": "聂拉木县",
						"pinyin": "nielamu",
						"pid": "2826"
					},
					{
						"area_id": "857800",
						"title": "萨嘎县",
						"pinyin": "saga",
						"pid": "2826"
					},
					{
						"area_id": "857700",
						"title": "岗巴县",
						"pinyin": "gangba",
						"pid": "2826"
					}
				]
			},
			{
				"area_id": "854000",
				"title": "昌都市",
				"pinyin": "qamdo",
				"pid": "2816",
				"child": [
					{
						"area_id": "854000",
						"title": "卡若区",
						"pinyin": "karuo",
						"pid": "2845"
					},
					{
						"area_id": "854100",
						"title": "江达县",
						"pinyin": "jiangda",
						"pid": "2845"
					},
					{
						"area_id": "854200",
						"title": "贡觉县",
						"pinyin": "gongjue",
						"pid": "2845"
					},
					{
						"area_id": "855600",
						"title": "类乌齐县",
						"pinyin": "leiwuqi",
						"pid": "2845"
					},
					{
						"area_id": "855700",
						"title": "丁青县",
						"pinyin": "dingqing",
						"pid": "2845"
					},
					{
						"area_id": "854300",
						"title": "察雅县",
						"pinyin": "chaya",
						"pid": "2845"
					},
					{
						"area_id": "854600",
						"title": "八宿县",
						"pinyin": "basu",
						"pid": "2845"
					},
					{
						"area_id": "854400",
						"title": "左贡县",
						"pinyin": "zuogong",
						"pid": "2845"
					},
					{
						"area_id": "854500",
						"title": "芒康县",
						"pinyin": "mangkang",
						"pid": "2845"
					},
					{
						"area_id": "855400",
						"title": "洛隆县",
						"pinyin": "luolong",
						"pid": "2845"
					},
					{
						"area_id": "855500",
						"title": "边坝县",
						"pinyin": "bianba",
						"pid": "2845"
					}
				]
			},
			{
				"area_id": "856000",
				"title": "山南地区",
				"pinyin": "shannan",
				"pid": "2816",
				"child": [
					{
						"area_id": "856100",
						"title": "乃东县",
						"pinyin": "naidong",
						"pid": "2857"
					},
					{
						"area_id": "850800",
						"title": "扎囊县",
						"pinyin": "zhanang",
						"pid": "2857"
					},
					{
						"area_id": "850700",
						"title": "贡嘎县",
						"pinyin": "gongga",
						"pid": "2857"
					},
					{
						"area_id": "856200",
						"title": "桑日县",
						"pinyin": "sangri",
						"pid": "2857"
					},
					{
						"area_id": "856800",
						"title": "琼结县",
						"pinyin": "qiongjie",
						"pid": "2857"
					},
					{
						"area_id": "856300",
						"title": "曲松县",
						"pinyin": "qusong",
						"pid": "2857"
					},
					{
						"area_id": "856900",
						"title": "措美县",
						"pinyin": "cuomei",
						"pid": "2857"
					},
					{
						"area_id": "856600",
						"title": "洛扎县",
						"pinyin": "luozha",
						"pid": "2857"
					},
					{
						"area_id": "856400",
						"title": "加查县",
						"pinyin": "jiacha",
						"pid": "2857"
					},
					{
						"area_id": "856600",
						"title": "隆子县",
						"pinyin": "longzi",
						"pid": "2857"
					},
					{
						"area_id": "856700",
						"title": "错那县",
						"pinyin": "cuona",
						"pid": "2857"
					},
					{
						"area_id": "851100",
						"title": "浪卡子县",
						"pinyin": "langkazi",
						"pid": "2857"
					}
				]
			},
			{
				"area_id": "852000",
				"title": "那曲地区",
				"pinyin": "nagqu",
				"pid": "2816",
				"child": [
					{
						"area_id": "852000",
						"title": "那曲县",
						"pinyin": "naqu",
						"pid": "2870"
					},
					{
						"area_id": "852400",
						"title": "嘉黎县",
						"pinyin": "jiali",
						"pid": "2870"
					},
					{
						"area_id": "852300",
						"title": "比如县",
						"pinyin": "biru",
						"pid": "2870"
					},
					{
						"area_id": "853500",
						"title": "聂荣县",
						"pinyin": "nierong",
						"pid": "2870"
					},
					{
						"area_id": "853400",
						"title": "安多县",
						"pinyin": "anduo",
						"pid": "2870"
					},
					{
						"area_id": "853100",
						"title": "申扎县",
						"pinyin": "shenzha",
						"pid": "2870"
					},
					{
						"area_id": "852200",
						"title": "索县",
						"pinyin": "suoxian",
						"pid": "2870"
					},
					{
						"area_id": "852500",
						"title": "班戈县",
						"pinyin": "bange",
						"pid": "2870"
					},
					{
						"area_id": "852100",
						"title": "巴青县",
						"pinyin": "baqing",
						"pid": "2870"
					},
					{
						"area_id": "852600",
						"title": "尼玛县",
						"pinyin": "nima",
						"pid": "2870"
					},
					{
						"area_id": "852600",
						"title": "双湖县",
						"pinyin": "shuanghu",
						"pid": "2870"
					}
				]
			},
			{
				"area_id": "859000",
				"title": "阿里地区",
				"pinyin": "ngari",
				"pid": "2816",
				"child": [
					{
						"area_id": "859500",
						"title": "普兰县",
						"pinyin": "pulan",
						"pid": "2882"
					},
					{
						"area_id": "859600",
						"title": "札达县",
						"pinyin": "zhada",
						"pid": "2882"
					},
					{
						"area_id": "859400",
						"title": "噶尔县",
						"pinyin": "gaer",
						"pid": "2882"
					},
					{
						"area_id": "859700",
						"title": "日土县",
						"pinyin": "ritu",
						"pid": "2882"
					},
					{
						"area_id": "859100",
						"title": "革吉县",
						"pinyin": "geji",
						"pid": "2882"
					},
					{
						"area_id": "859200",
						"title": "改则县",
						"pinyin": "gaize",
						"pid": "2882"
					},
					{
						"area_id": "859300",
						"title": "措勤县",
						"pinyin": "cuoqin",
						"pid": "2882"
					}
				]
			},
			{
				"area_id": "850400",
				"title": "林芝地区",
				"pinyin": "nyingchi",
				"pid": "2816",
				"child": [
					{
						"area_id": "850400",
						"title": "林芝县",
						"pinyin": "linzhi",
						"pid": "2890"
					},
					{
						"area_id": "850300",
						"title": "工布江达县",
						"pinyin": "gongbujiangda",
						"pid": "2890"
					},
					{
						"area_id": "850500",
						"title": "米林县",
						"pinyin": "milin",
						"pid": "2890"
					},
					{
						"area_id": "855300",
						"title": "墨脱县",
						"pinyin": "motuo",
						"pid": "2890"
					},
					{
						"area_id": "855200",
						"title": "波密县",
						"pinyin": "bomi",
						"pid": "2890"
					},
					{
						"area_id": "855100",
						"title": "察隅县",
						"pinyin": "chayu",
						"pid": "2890"
					},
					{
						"area_id": "856500",
						"title": "朗县",
						"pinyin": "langxian",
						"pid": "2890"
					}
				]
			}
		]
	},
	{
		"area_id": "710000",
		"title": "陕西省",
		"pinyin": "shaanxi",
		"pid": "0",
		"child": [
			{
				"area_id": "710003",
				"title": "西安市",
				"pinyin": "xi'an",
				"pid": "2898",
				"child": [
					{
						"area_id": "710004",
						"title": "新城区",
						"pinyin": "xincheng",
						"pid": "2899"
					},
					{
						"area_id": "710001",
						"title": "碑林区",
						"pinyin": "beilin",
						"pid": "2899"
					},
					{
						"area_id": "710003",
						"title": "莲湖区",
						"pinyin": "lianhu",
						"pid": "2899"
					},
					{
						"area_id": "710038",
						"title": "灞桥区",
						"pinyin": "baqiao",
						"pid": "2899"
					},
					{
						"area_id": "710014",
						"title": "未央区",
						"pinyin": "weiyang",
						"pid": "2899"
					},
					{
						"area_id": "710061",
						"title": "雁塔区",
						"pinyin": "yanta",
						"pid": "2899"
					},
					{
						"area_id": "710087",
						"title": "阎良区",
						"pinyin": "yanliang",
						"pid": "2899"
					},
					{
						"area_id": "710600",
						"title": "临潼区",
						"pinyin": "lintong",
						"pid": "2899"
					},
					{
						"area_id": "710100",
						"title": "长安区",
						"pinyin": "chang'an",
						"pid": "2899"
					},
					{
						"area_id": "710500",
						"title": "蓝田县",
						"pinyin": "lantian",
						"pid": "2899"
					},
					{
						"area_id": "710400",
						"title": "周至县",
						"pinyin": "zhouzhi",
						"pid": "2899"
					},
					{
						"area_id": "710300",
						"title": "户县",
						"pinyin": "huxian",
						"pid": "2899"
					},
					{
						"area_id": "710200",
						"title": "高陵区",
						"pinyin": "gaoling",
						"pid": "2899"
					}
				]
			},
			{
				"area_id": "727100",
				"title": "铜川市",
				"pinyin": "tongchuan",
				"pid": "2898",
				"child": [
					{
						"area_id": "727000",
						"title": "王益区",
						"pinyin": "wangyi",
						"pid": "2913"
					},
					{
						"area_id": "727007",
						"title": "印台区",
						"pinyin": "yintai",
						"pid": "2913"
					},
					{
						"area_id": "727100",
						"title": "耀州区",
						"pinyin": "yaozhou",
						"pid": "2913"
					},
					{
						"area_id": "727200",
						"title": "宜君县",
						"pinyin": "yijun",
						"pid": "2913"
					}
				]
			},
			{
				"area_id": "721000",
				"title": "宝鸡市",
				"pinyin": "baoji",
				"pid": "2898",
				"child": [
					{
						"area_id": "721000",
						"title": "渭滨区",
						"pinyin": "weibin",
						"pid": "2918"
					},
					{
						"area_id": "721000",
						"title": "金台区",
						"pinyin": "jintai",
						"pid": "2918"
					},
					{
						"area_id": "721300",
						"title": "陈仓区",
						"pinyin": "chencang",
						"pid": "2918"
					},
					{
						"area_id": "721400",
						"title": "凤翔县",
						"pinyin": "fengxiang",
						"pid": "2918"
					},
					{
						"area_id": "722400",
						"title": "岐山县",
						"pinyin": "qishan",
						"pid": "2918"
					},
					{
						"area_id": "722200",
						"title": "扶风县",
						"pinyin": "fufeng",
						"pid": "2918"
					},
					{
						"area_id": "722300",
						"title": "眉县",
						"pinyin": "meixian",
						"pid": "2918"
					},
					{
						"area_id": "721200",
						"title": "陇县",
						"pinyin": "longxian",
						"pid": "2918"
					},
					{
						"area_id": "721100",
						"title": "千阳县",
						"pinyin": "qianyang",
						"pid": "2918"
					},
					{
						"area_id": "721500",
						"title": "麟游县",
						"pinyin": "linyou",
						"pid": "2918"
					},
					{
						"area_id": "721700",
						"title": "凤县",
						"pinyin": "fengxian",
						"pid": "2918"
					},
					{
						"area_id": "721600",
						"title": "太白县",
						"pinyin": "taibai",
						"pid": "2918"
					}
				]
			},
			{
				"area_id": "712000",
				"title": "咸阳市",
				"pinyin": "xianyang",
				"pid": "2898",
				"child": [
					{
						"area_id": "712000",
						"title": "秦都区",
						"pinyin": "qindu",
						"pid": "2931"
					},
					{
						"area_id": "712100",
						"title": "杨陵区",
						"pinyin": "yangling",
						"pid": "2931"
					},
					{
						"area_id": "712000",
						"title": "渭城区",
						"pinyin": "weicheng",
						"pid": "2931"
					},
					{
						"area_id": "713800",
						"title": "三原县",
						"pinyin": "sanyuan",
						"pid": "2931"
					},
					{
						"area_id": "713700",
						"title": "泾阳县",
						"pinyin": "jingyang",
						"pid": "2931"
					},
					{
						"area_id": "713300",
						"title": "乾县",
						"pinyin": "qianxian",
						"pid": "2931"
					},
					{
						"area_id": "713200",
						"title": "礼泉县",
						"pinyin": "liquan",
						"pid": "2931"
					},
					{
						"area_id": "713400",
						"title": "永寿县",
						"pinyin": "yongshou",
						"pid": "2931"
					},
					{
						"area_id": "713500",
						"title": "彬县",
						"pinyin": "binxian",
						"pid": "2931"
					},
					{
						"area_id": "713600",
						"title": "长武县",
						"pinyin": "changwu",
						"pid": "2931"
					},
					{
						"area_id": "711300",
						"title": "旬邑县",
						"pinyin": "xunyi",
						"pid": "2931"
					},
					{
						"area_id": "711200",
						"title": "淳化县",
						"pinyin": "chunhua",
						"pid": "2931"
					},
					{
						"area_id": "712200",
						"title": "武功县",
						"pinyin": "wugong",
						"pid": "2931"
					},
					{
						"area_id": "713100",
						"title": "兴平市",
						"pinyin": "xingping",
						"pid": "2931"
					}
				]
			},
			{
				"area_id": "714000",
				"title": "渭南市",
				"pinyin": "weinan",
				"pid": "2898",
				"child": [
					{
						"area_id": "714000",
						"title": "临渭区",
						"pinyin": "linwei",
						"pid": "2946"
					},
					{
						"area_id": "714100",
						"title": "华县",
						"pinyin": "huaxian",
						"pid": "2946"
					},
					{
						"area_id": "714300",
						"title": "潼关县",
						"pinyin": "tongguan",
						"pid": "2946"
					},
					{
						"area_id": "715100",
						"title": "大荔县",
						"pinyin": "dali",
						"pid": "2946"
					},
					{
						"area_id": "715300",
						"title": "合阳县",
						"pinyin": "heyang",
						"pid": "2946"
					},
					{
						"area_id": "715200",
						"title": "澄城县",
						"pinyin": "chengcheng",
						"pid": "2946"
					},
					{
						"area_id": "715500",
						"title": "蒲城县",
						"pinyin": "pucheng",
						"pid": "2946"
					},
					{
						"area_id": "715600",
						"title": "白水县",
						"pinyin": "baishui",
						"pid": "2946"
					},
					{
						"area_id": "711700",
						"title": "富平县",
						"pinyin": "fuping",
						"pid": "2946"
					},
					{
						"area_id": "715400",
						"title": "韩城市",
						"pinyin": "hancheng",
						"pid": "2946"
					},
					{
						"area_id": "714200",
						"title": "华阴市",
						"pinyin": "huayin",
						"pid": "2946"
					}
				]
			},
			{
				"area_id": "716000",
				"title": "延安市",
				"pinyin": "yan'an",
				"pid": "2898",
				"child": [
					{
						"area_id": "716000",
						"title": "宝塔区",
						"pinyin": "baota",
						"pid": "2958"
					},
					{
						"area_id": "717100",
						"title": "延长县",
						"pinyin": "yanchang",
						"pid": "2958"
					},
					{
						"area_id": "717200",
						"title": "延川县",
						"pinyin": "yanchuan",
						"pid": "2958"
					},
					{
						"area_id": "717300",
						"title": "子长县",
						"pinyin": "zichang",
						"pid": "2958"
					},
					{
						"area_id": "717400",
						"title": "安塞县",
						"pinyin": "ansai",
						"pid": "2958"
					},
					{
						"area_id": "717500",
						"title": "志丹县",
						"pinyin": "zhidan",
						"pid": "2958"
					},
					{
						"area_id": "717600",
						"title": "吴起县",
						"pinyin": "wuqi",
						"pid": "2958"
					},
					{
						"area_id": "716100",
						"title": "甘泉县",
						"pinyin": "ganquan",
						"pid": "2958"
					},
					{
						"area_id": "727500",
						"title": "富县",
						"pinyin": "fuxian",
						"pid": "2958"
					},
					{
						"area_id": "727400",
						"title": "洛川县",
						"pinyin": "luochuan",
						"pid": "2958"
					},
					{
						"area_id": "716200",
						"title": "宜川县",
						"pinyin": "yichuan",
						"pid": "2958"
					},
					{
						"area_id": "715700",
						"title": "黄龙县",
						"pinyin": "huanglong",
						"pid": "2958"
					},
					{
						"area_id": "727300",
						"title": "黄陵县",
						"pinyin": "huangling",
						"pid": "2958"
					}
				]
			},
			{
				"area_id": "723000",
				"title": "汉中市",
				"pinyin": "hanzhong",
				"pid": "2898",
				"child": [
					{
						"area_id": "723000",
						"title": "汉台区",
						"pinyin": "hantai",
						"pid": "2972"
					},
					{
						"area_id": "723100",
						"title": "南郑县",
						"pinyin": "nanzheng",
						"pid": "2972"
					},
					{
						"area_id": "723200",
						"title": "城固县",
						"pinyin": "chenggu",
						"pid": "2972"
					},
					{
						"area_id": "723300",
						"title": "洋县",
						"pinyin": "yangxian",
						"pid": "2972"
					},
					{
						"area_id": "723500",
						"title": "西乡县",
						"pinyin": "xixiang",
						"pid": "2972"
					},
					{
						"area_id": "724200",
						"title": "勉县",
						"pinyin": "mianxian",
						"pid": "2972"
					},
					{
						"area_id": "724400",
						"title": "宁强县",
						"pinyin": "ningqiang",
						"pid": "2972"
					},
					{
						"area_id": "724300",
						"title": "略阳县",
						"pinyin": "lueyang",
						"pid": "2972"
					},
					{
						"area_id": "723600",
						"title": "镇巴县",
						"pinyin": "zhenba",
						"pid": "2972"
					},
					{
						"area_id": "724100",
						"title": "留坝县",
						"pinyin": "liuba",
						"pid": "2972"
					},
					{
						"area_id": "723400",
						"title": "佛坪县",
						"pinyin": "foping",
						"pid": "2972"
					}
				]
			},
			{
				"area_id": "719000",
				"title": "榆林市",
				"pinyin": "yulin",
				"pid": "2898",
				"child": [
					{
						"area_id": "719000",
						"title": "榆阳区",
						"pinyin": "yuyang",
						"pid": "2984"
					},
					{
						"area_id": "719300",
						"title": "神木县",
						"pinyin": "shenmu",
						"pid": "2984"
					},
					{
						"area_id": "719400",
						"title": "府谷县",
						"pinyin": "fugu",
						"pid": "2984"
					},
					{
						"area_id": "719100",
						"title": "横山县",
						"pinyin": "hengshan",
						"pid": "2984"
					},
					{
						"area_id": "718500",
						"title": "靖边县",
						"pinyin": "jingbian",
						"pid": "2984"
					},
					{
						"area_id": "718600",
						"title": "定边县",
						"pinyin": "dingbian",
						"pid": "2984"
					},
					{
						"area_id": "718000",
						"title": "绥德县",
						"pinyin": "suide",
						"pid": "2984"
					},
					{
						"area_id": "718100",
						"title": "米脂县",
						"pinyin": "mizhi",
						"pid": "2984"
					},
					{
						"area_id": "719200",
						"title": "佳县",
						"pinyin": "jiaxian",
						"pid": "2984"
					},
					{
						"area_id": "718200",
						"title": "吴堡县",
						"pinyin": "wubu",
						"pid": "2984"
					},
					{
						"area_id": "718300",
						"title": "清涧县",
						"pinyin": "qingjian",
						"pid": "2984"
					},
					{
						"area_id": "718400",
						"title": "子洲县",
						"pinyin": "zizhou",
						"pid": "2984"
					}
				]
			},
			{
				"area_id": "725000",
				"title": "安康市",
				"pinyin": "ankang",
				"pid": "2898",
				"child": [
					{
						"area_id": "725000",
						"title": "汉滨区",
						"pinyin": "hanbin",
						"pid": "2997"
					},
					{
						"area_id": "725100",
						"title": "汉阴县",
						"pinyin": "hanyin",
						"pid": "2997"
					},
					{
						"area_id": "725200",
						"title": "石泉县",
						"pinyin": "shiquan",
						"pid": "2997"
					},
					{
						"area_id": "711600",
						"title": "宁陕县",
						"pinyin": "ningshan",
						"pid": "2997"
					},
					{
						"area_id": "725300",
						"title": "紫阳县",
						"pinyin": "ziyang",
						"pid": "2997"
					},
					{
						"area_id": "725400",
						"title": "岚皋县",
						"pinyin": "langao",
						"pid": "2997"
					},
					{
						"area_id": "725500",
						"title": "平利县",
						"pinyin": "pingli",
						"pid": "2997"
					},
					{
						"area_id": "725600",
						"title": "镇坪县",
						"pinyin": "zhenping",
						"pid": "2997"
					},
					{
						"area_id": "725700",
						"title": "旬阳县",
						"pinyin": "xunyang",
						"pid": "2997"
					},
					{
						"area_id": "725800",
						"title": "白河县",
						"pinyin": "baihe",
						"pid": "2997"
					}
				]
			},
			{
				"area_id": "726000",
				"title": "商洛市",
				"pinyin": "shangluo",
				"pid": "2898",
				"child": [
					{
						"area_id": "726000",
						"title": "商州区",
						"pinyin": "shangzhou",
						"pid": "3008"
					},
					{
						"area_id": "726100",
						"title": "洛南县",
						"pinyin": "luonan",
						"pid": "3008"
					},
					{
						"area_id": "726200",
						"title": "丹凤县",
						"pinyin": "danfeng",
						"pid": "3008"
					},
					{
						"area_id": "726300",
						"title": "商南县",
						"pinyin": "shangnan",
						"pid": "3008"
					},
					{
						"area_id": "726400",
						"title": "山阳县",
						"pinyin": "shanyang",
						"pid": "3008"
					},
					{
						"area_id": "711500",
						"title": "镇安县",
						"pinyin": "zhen'an",
						"pid": "3008"
					},
					{
						"area_id": "711400",
						"title": "柞水县",
						"pinyin": "zhashui",
						"pid": "3008"
					}
				]
			},
			{
				"area_id": "712000",
				"title": "西咸新区",
				"pinyin": "xixian",
				"pid": "2898",
				"child": [
					{
						"area_id": "461000",
						"title": "空港新城",
						"pinyin": "konggang",
						"pid": "3016"
					},
					{
						"area_id": "710000",
						"title": "沣东新城",
						"pinyin": "fengdong",
						"pid": "3016"
					},
					{
						"area_id": "712000",
						"title": "秦汉新城",
						"pinyin": "qinhan",
						"pid": "3016"
					},
					{
						"area_id": "710000",
						"title": "沣西新城",
						"pinyin": "fengxi",
						"pid": "3016"
					},
					{
						"area_id": "713700",
						"title": "泾河新城",
						"pinyin": "jinghe",
						"pid": "3016"
					}
				]
			}
		]
	},
	{
		"area_id": "730000",
		"title": "甘肃省",
		"pinyin": "gansu",
		"pid": "0",
		"child": [
			{
				"area_id": "730030",
				"title": "兰州市",
				"pinyin": "lanzhou",
				"pid": "3022",
				"child": [
					{
						"area_id": "730030",
						"title": "城关区",
						"pinyin": "chengguan",
						"pid": "3023"
					},
					{
						"area_id": "730050",
						"title": "七里河区",
						"pinyin": "qilihe",
						"pid": "3023"
					},
					{
						"area_id": "730060",
						"title": "西固区",
						"pinyin": "xigu",
						"pid": "3023"
					},
					{
						"area_id": "730070",
						"title": "安宁区",
						"pinyin": "anning",
						"pid": "3023"
					},
					{
						"area_id": "730084",
						"title": "红古区",
						"pinyin": "honggu",
						"pid": "3023"
					},
					{
						"area_id": "730300",
						"title": "永登县",
						"pinyin": "yongdeng",
						"pid": "3023"
					},
					{
						"area_id": "730200",
						"title": "皋兰县",
						"pinyin": "gaolan",
						"pid": "3023"
					},
					{
						"area_id": "730100",
						"title": "榆中县",
						"pinyin": "yuzhong",
						"pid": "3023"
					}
				]
			},
			{
				"area_id": "735100",
				"title": "嘉峪关市",
				"pinyin": "jiayuguan",
				"pid": "3022",
				"child": [
					{
						"area_id": "735100",
						"title": "雄关区",
						"pinyin": "xiongguan",
						"pid": "3032"
					},
					{
						"area_id": "735106",
						"title": "长城区",
						"pinyin": "changcheng",
						"pid": "3032"
					},
					{
						"area_id": "735100",
						"title": "镜铁区",
						"pinyin": "jingtie",
						"pid": "3032"
					}
				]
			},
			{
				"area_id": "737100",
				"title": "金昌市",
				"pinyin": "jinchang",
				"pid": "3022",
				"child": [
					{
						"area_id": "737100",
						"title": "金川区",
						"pinyin": "jinchuan",
						"pid": "3036"
					},
					{
						"area_id": "737200",
						"title": "永昌县",
						"pinyin": "yongchang",
						"pid": "3036"
					}
				]
			},
			{
				"area_id": "730900",
				"title": "白银市",
				"pinyin": "baiyin",
				"pid": "3022",
				"child": [
					{
						"area_id": "730900",
						"title": "白银区",
						"pinyin": "baiyin",
						"pid": "3039"
					},
					{
						"area_id": "730913",
						"title": "平川区",
						"pinyin": "pingchuan",
						"pid": "3039"
					},
					{
						"area_id": "730600",
						"title": "靖远县",
						"pinyin": "jingyuan",
						"pid": "3039"
					},
					{
						"area_id": "730700",
						"title": "会宁县",
						"pinyin": "huining",
						"pid": "3039"
					},
					{
						"area_id": "730400",
						"title": "景泰县",
						"pinyin": "jingtai",
						"pid": "3039"
					}
				]
			},
			{
				"area_id": "741000",
				"title": "天水市",
				"pinyin": "tianshui",
				"pid": "3022",
				"child": [
					{
						"area_id": "741000",
						"title": "秦州区",
						"pinyin": "qinzhou",
						"pid": "3045"
					},
					{
						"area_id": "741020",
						"title": "麦积区",
						"pinyin": "maiji",
						"pid": "3045"
					},
					{
						"area_id": "741400",
						"title": "清水县",
						"pinyin": "qingshui",
						"pid": "3045"
					},
					{
						"area_id": "741600",
						"title": "秦安县",
						"pinyin": "qin'an",
						"pid": "3045"
					},
					{
						"area_id": "741200",
						"title": "甘谷县",
						"pinyin": "gangu",
						"pid": "3045"
					},
					{
						"area_id": "741300",
						"title": "武山县",
						"pinyin": "wushan",
						"pid": "3045"
					},
					{
						"area_id": "741500",
						"title": "张家川回族自治县",
						"pinyin": "zhangjiachuan",
						"pid": "3045"
					}
				]
			},
			{
				"area_id": "733000",
				"title": "武威市",
				"pinyin": "wuwei",
				"pid": "3022",
				"child": [
					{
						"area_id": "733000",
						"title": "凉州区",
						"pinyin": "liangzhou",
						"pid": "3053"
					},
					{
						"area_id": "733300",
						"title": "民勤县",
						"pinyin": "minqin",
						"pid": "3053"
					},
					{
						"area_id": "733100",
						"title": "古浪县",
						"pinyin": "gulang",
						"pid": "3053"
					},
					{
						"area_id": "733200",
						"title": "天祝藏族自治县",
						"pinyin": "tianzhu",
						"pid": "3053"
					}
				]
			},
			{
				"area_id": "734000",
				"title": "张掖市",
				"pinyin": "zhangye",
				"pid": "3022",
				"child": [
					{
						"area_id": "734000",
						"title": "甘州区",
						"pinyin": "ganzhou",
						"pid": "3058"
					},
					{
						"area_id": "734400",
						"title": "肃南裕固族自治县",
						"pinyin": "sunan",
						"pid": "3058"
					},
					{
						"area_id": "734500",
						"title": "民乐县",
						"pinyin": "minle",
						"pid": "3058"
					},
					{
						"area_id": "734200",
						"title": "临泽县",
						"pinyin": "linze",
						"pid": "3058"
					},
					{
						"area_id": "734300",
						"title": "高台县",
						"pinyin": "gaotai",
						"pid": "3058"
					},
					{
						"area_id": "734100",
						"title": "山丹县",
						"pinyin": "shandan",
						"pid": "3058"
					}
				]
			},
			{
				"area_id": "744000",
				"title": "平凉市",
				"pinyin": "pingliang",
				"pid": "3022",
				"child": [
					{
						"area_id": "744000",
						"title": "崆峒区",
						"pinyin": "kongtong",
						"pid": "3065"
					},
					{
						"area_id": "744300",
						"title": "泾川县",
						"pinyin": "jingchuan",
						"pid": "3065"
					},
					{
						"area_id": "744400",
						"title": "灵台县",
						"pinyin": "lingtai",
						"pid": "3065"
					},
					{
						"area_id": "744200",
						"title": "崇信县",
						"pinyin": "chongxin",
						"pid": "3065"
					},
					{
						"area_id": "744100",
						"title": "华亭县",
						"pinyin": "huating",
						"pid": "3065"
					},
					{
						"area_id": "744600",
						"title": "庄浪县",
						"pinyin": "zhuanglang",
						"pid": "3065"
					},
					{
						"area_id": "743400",
						"title": "静宁县",
						"pinyin": "jingning",
						"pid": "3065"
					}
				]
			},
			{
				"area_id": "735000",
				"title": "酒泉市",
				"pinyin": "jiuquan",
				"pid": "3022",
				"child": [
					{
						"area_id": "735000",
						"title": "肃州区",
						"pinyin": "suzhou",
						"pid": "3073"
					},
					{
						"area_id": "735300",
						"title": "金塔县",
						"pinyin": "jinta",
						"pid": "3073"
					},
					{
						"area_id": "736100",
						"title": "瓜州县",
						"pinyin": "guazhou",
						"pid": "3073"
					},
					{
						"area_id": "736300",
						"title": "肃北蒙古族自治县",
						"pinyin": "subei",
						"pid": "3073"
					},
					{
						"area_id": "736400",
						"title": "阿克塞哈萨克族自治县",
						"pinyin": "akesai",
						"pid": "3073"
					},
					{
						"area_id": "735200",
						"title": "玉门市",
						"pinyin": "yumen",
						"pid": "3073"
					},
					{
						"area_id": "736200",
						"title": "敦煌市",
						"pinyin": "dunhuang",
						"pid": "3073"
					}
				]
			},
			{
				"area_id": "745000",
				"title": "庆阳市",
				"pinyin": "qingyang",
				"pid": "3022",
				"child": [
					{
						"area_id": "745000",
						"title": "西峰区",
						"pinyin": "xifeng",
						"pid": "3081"
					},
					{
						"area_id": "745100",
						"title": "庆城县",
						"pinyin": "qingcheng",
						"pid": "3081"
					},
					{
						"area_id": "745700",
						"title": "环县",
						"pinyin": "huanxian",
						"pid": "3081"
					},
					{
						"area_id": "745600",
						"title": "华池县",
						"pinyin": "huachi",
						"pid": "3081"
					},
					{
						"area_id": "745400",
						"title": "合水县",
						"pinyin": "heshui",
						"pid": "3081"
					},
					{
						"area_id": "745300",
						"title": "正宁县",
						"pinyin": "zhengning",
						"pid": "3081"
					},
					{
						"area_id": "745200",
						"title": "宁县",
						"pinyin": "ningxian",
						"pid": "3081"
					},
					{
						"area_id": "744500",
						"title": "镇原县",
						"pinyin": "zhenyuan",
						"pid": "3081"
					}
				]
			},
			{
				"area_id": "743000",
				"title": "定西市",
				"pinyin": "dingxi",
				"pid": "3022",
				"child": [
					{
						"area_id": "743000",
						"title": "安定区",
						"pinyin": "anding",
						"pid": "3090"
					},
					{
						"area_id": "743300",
						"title": "通渭县",
						"pinyin": "tongwei",
						"pid": "3090"
					},
					{
						"area_id": "748100",
						"title": "陇西县",
						"pinyin": "longxi",
						"pid": "3090"
					},
					{
						"area_id": "748200",
						"title": "渭源县",
						"pinyin": "weiyuan",
						"pid": "3090"
					},
					{
						"area_id": "730500",
						"title": "临洮县",
						"pinyin": "lintao",
						"pid": "3090"
					},
					{
						"area_id": "748300",
						"title": "漳县",
						"pinyin": "zhangxian",
						"pid": "3090"
					},
					{
						"area_id": "748400",
						"title": "岷县",
						"pinyin": "minxian",
						"pid": "3090"
					}
				]
			},
			{
				"area_id": "746000",
				"title": "陇南市",
				"pinyin": "longnan",
				"pid": "3022",
				"child": [
					{
						"area_id": "746000",
						"title": "武都区",
						"pinyin": "wudu",
						"pid": "3098"
					},
					{
						"area_id": "742500",
						"title": "成县",
						"pinyin": "chengxian",
						"pid": "3098"
					},
					{
						"area_id": "746400",
						"title": "文县",
						"pinyin": "wenxian",
						"pid": "3098"
					},
					{
						"area_id": "748500",
						"title": "宕昌县",
						"pinyin": "dangchang",
						"pid": "3098"
					},
					{
						"area_id": "746500",
						"title": "康县",
						"pinyin": "kangxian",
						"pid": "3098"
					},
					{
						"area_id": "742100",
						"title": "西和县",
						"pinyin": "xihe",
						"pid": "3098"
					},
					{
						"area_id": "742200",
						"title": "礼县",
						"pinyin": "lixian",
						"pid": "3098"
					},
					{
						"area_id": "742300",
						"title": "徽县",
						"pinyin": "huixian",
						"pid": "3098"
					},
					{
						"area_id": "742400",
						"title": "两当县",
						"pinyin": "liangdang",
						"pid": "3098"
					}
				]
			},
			{
				"area_id": "731100",
				"title": "临夏回族自治州",
				"pinyin": "linxia",
				"pid": "3022",
				"child": [
					{
						"area_id": "731100",
						"title": "临夏市",
						"pinyin": "linxia",
						"pid": "3108"
					},
					{
						"area_id": "731800",
						"title": "临夏县",
						"pinyin": "linxia",
						"pid": "3108"
					},
					{
						"area_id": "731500",
						"title": "康乐县",
						"pinyin": "kangle",
						"pid": "3108"
					},
					{
						"area_id": "731600",
						"title": "永靖县",
						"pinyin": "yongjing",
						"pid": "3108"
					},
					{
						"area_id": "731300",
						"title": "广河县",
						"pinyin": "guanghe",
						"pid": "3108"
					},
					{
						"area_id": "731200",
						"title": "和政县",
						"pinyin": "hezheng",
						"pid": "3108"
					},
					{
						"area_id": "731400",
						"title": "东乡族自治县",
						"pinyin": "dongxiangzu",
						"pid": "3108"
					},
					{
						"area_id": "731700",
						"title": "积石山保安族东乡族撒拉族自治县",
						"pinyin": "jishishan",
						"pid": "3108"
					}
				]
			},
			{
				"area_id": "747000",
				"title": "甘南藏族自治州",
				"pinyin": "gannan",
				"pid": "3022",
				"child": [
					{
						"area_id": "747000",
						"title": "合作市",
						"pinyin": "hezuo",
						"pid": "3117"
					},
					{
						"area_id": "747500",
						"title": "临潭县",
						"pinyin": "lintan",
						"pid": "3117"
					},
					{
						"area_id": "747600",
						"title": "卓尼县",
						"pinyin": "zhuoni",
						"pid": "3117"
					},
					{
						"area_id": "746300",
						"title": "舟曲县",
						"pinyin": "zhouqu",
						"pid": "3117"
					},
					{
						"area_id": "747400",
						"title": "迭部县",
						"pinyin": "diebu",
						"pid": "3117"
					},
					{
						"area_id": "747300",
						"title": "玛曲县",
						"pinyin": "maqu",
						"pid": "3117"
					},
					{
						"area_id": "747200",
						"title": "碌曲县",
						"pinyin": "luqu",
						"pid": "3117"
					},
					{
						"area_id": "747100",
						"title": "夏河县",
						"pinyin": "xiahe",
						"pid": "3117"
					}
				]
			}
		]
	},
	{
		"area_id": "810000",
		"title": "青海省",
		"pinyin": "qinghai",
		"pid": "0",
		"child": [
			{
				"area_id": "810000",
				"title": "西宁市",
				"pinyin": "xining",
				"pid": "3126",
				"child": [
					{
						"area_id": "810007",
						"title": "城东区",
						"pinyin": "chengdong",
						"pid": "3127"
					},
					{
						"area_id": "810000",
						"title": "城中区",
						"pinyin": "chengzhong",
						"pid": "3127"
					},
					{
						"area_id": "810001",
						"title": "城西区",
						"pinyin": "chengxi",
						"pid": "3127"
					},
					{
						"area_id": "810003",
						"title": "城北区",
						"pinyin": "chengbei",
						"pid": "3127"
					},
					{
						"area_id": "810100",
						"title": "大通回族土族自治县",
						"pinyin": "datong",
						"pid": "3127"
					},
					{
						"area_id": "811600",
						"title": "湟中县",
						"pinyin": "huangzhong",
						"pid": "3127"
					},
					{
						"area_id": "812100",
						"title": "湟源县",
						"pinyin": "huangyuan",
						"pid": "3127"
					}
				]
			},
			{
				"area_id": "810700",
				"title": "海东市",
				"pinyin": "haidong",
				"pid": "3126",
				"child": [
					{
						"area_id": "810700",
						"title": "乐都区",
						"pinyin": "ledu",
						"pid": "3135"
					},
					{
						"area_id": "810600",
						"title": "平安县",
						"pinyin": "ping'an",
						"pid": "3135"
					},
					{
						"area_id": "810800",
						"title": "民和回族土族自治县",
						"pinyin": "minhe",
						"pid": "3135"
					},
					{
						"area_id": "810500",
						"title": "互助土族自治县",
						"pinyin": "huzhu",
						"pid": "3135"
					},
					{
						"area_id": "810900",
						"title": "化隆回族自治县",
						"pinyin": "hualong",
						"pid": "3135"
					},
					{
						"area_id": "811100",
						"title": "循化撒拉族自治县",
						"pinyin": "xunhua",
						"pid": "3135"
					}
				]
			},
			{
				"area_id": "812200",
				"title": "海北藏族自治州",
				"pinyin": "haibei",
				"pid": "3126",
				"child": [
					{
						"area_id": "810300",
						"title": "门源回族自治县",
						"pinyin": "menyuan",
						"pid": "3142"
					},
					{
						"area_id": "810400",
						"title": "祁连县",
						"pinyin": "qilian",
						"pid": "3142"
					},
					{
						"area_id": "812200",
						"title": "海晏县",
						"pinyin": "haiyan",
						"pid": "3142"
					},
					{
						"area_id": "812300",
						"title": "刚察县",
						"pinyin": "gangcha",
						"pid": "3142"
					}
				]
			},
			{
				"area_id": "811300",
				"title": "黄南藏族自治州",
				"pinyin": "huangnan",
				"pid": "3126",
				"child": [
					{
						"area_id": "811300",
						"title": "同仁县",
						"pinyin": "tongren",
						"pid": "3147"
					},
					{
						"area_id": "811200",
						"title": "尖扎县",
						"pinyin": "jianzha",
						"pid": "3147"
					},
					{
						"area_id": "811400",
						"title": "泽库县",
						"pinyin": "zeku",
						"pid": "3147"
					},
					{
						"area_id": "811500",
						"title": "河南蒙古族自治县",
						"pinyin": "henan",
						"pid": "3147"
					}
				]
			},
			{
				"area_id": "813000",
				"title": "海南藏族自治州",
				"pinyin": "hainan",
				"pid": "3126",
				"child": [
					{
						"area_id": "813000",
						"title": "共和县",
						"pinyin": "gonghe",
						"pid": "3152"
					},
					{
						"area_id": "813200",
						"title": "同德县",
						"pinyin": "tongde",
						"pid": "3152"
					},
					{
						"area_id": "811700",
						"title": "贵德县",
						"pinyin": "guide",
						"pid": "3152"
					},
					{
						"area_id": "813300",
						"title": "兴海县",
						"pinyin": "xinghai",
						"pid": "3152"
					},
					{
						"area_id": "813100",
						"title": "贵南县",
						"pinyin": "guinan",
						"pid": "3152"
					}
				]
			},
			{
				"area_id": "814000",
				"title": "果洛藏族自治州",
				"pinyin": "golog",
				"pid": "3126",
				"child": [
					{
						"area_id": "814000",
						"title": "玛沁县",
						"pinyin": "maqin",
						"pid": "3158"
					},
					{
						"area_id": "814300",
						"title": "班玛县",
						"pinyin": "banma",
						"pid": "3158"
					},
					{
						"area_id": "814100",
						"title": "甘德县",
						"pinyin": "gande",
						"pid": "3158"
					},
					{
						"area_id": "814200",
						"title": "达日县",
						"pinyin": "dari",
						"pid": "3158"
					},
					{
						"area_id": "624700",
						"title": "久治县",
						"pinyin": "jiuzhi",
						"pid": "3158"
					},
					{
						"area_id": "813500",
						"title": "玛多县",
						"pinyin": "maduo",
						"pid": "3158"
					}
				]
			},
			{
				"area_id": "815000",
				"title": "玉树藏族自治州",
				"pinyin": "yushu",
				"pid": "3126",
				"child": [
					{
						"area_id": "815000",
						"title": "玉树市",
						"pinyin": "yushu",
						"pid": "3165"
					},
					{
						"area_id": "815300",
						"title": "杂多县",
						"pinyin": "zaduo",
						"pid": "3165"
					},
					{
						"area_id": "815100",
						"title": "称多县",
						"pinyin": "chenduo",
						"pid": "3165"
					},
					{
						"area_id": "815400",
						"title": "治多县",
						"pinyin": "zhiduo",
						"pid": "3165"
					},
					{
						"area_id": "815200",
						"title": "囊谦县",
						"pinyin": "nangqian",
						"pid": "3165"
					},
					{
						"area_id": "815500",
						"title": "曲麻莱县",
						"pinyin": "qumalai",
						"pid": "3165"
					}
				]
			},
			{
				"area_id": "817000",
				"title": "海西蒙古族藏族自治州",
				"pinyin": "haixi",
				"pid": "3126",
				"child": [
					{
						"area_id": "816000",
						"title": "格尔木市",
						"pinyin": "geermu",
						"pid": "3172"
					},
					{
						"area_id": "817000",
						"title": "德令哈市",
						"pinyin": "delingha",
						"pid": "3172"
					},
					{
						"area_id": "817100",
						"title": "乌兰县",
						"pinyin": "wulan",
						"pid": "3172"
					},
					{
						"area_id": "816100",
						"title": "都兰县",
						"pinyin": "dulan",
						"pid": "3172"
					},
					{
						"area_id": "817200",
						"title": "天峻县",
						"pinyin": "tianjun",
						"pid": "3172"
					}
				]
			}
		]
	},
	{
		"area_id": "750000",
		"title": "宁夏回族自治区",
		"pinyin": "ningxia",
		"pid": "0",
		"child": [
			{
				"area_id": "750004",
				"title": "银川市",
				"pinyin": "yinchuan",
				"pid": "3178",
				"child": [
					{
						"area_id": "750001",
						"title": "兴庆区",
						"pinyin": "xingqing",
						"pid": "3179"
					},
					{
						"area_id": "750021",
						"title": "西夏区",
						"pinyin": "xixia",
						"pid": "3179"
					},
					{
						"area_id": "750011",
						"title": "金凤区",
						"pinyin": "jinfeng",
						"pid": "3179"
					},
					{
						"area_id": "750100",
						"title": "永宁县",
						"pinyin": "yongning",
						"pid": "3179"
					},
					{
						"area_id": "750200",
						"title": "贺兰县",
						"pinyin": "helan",
						"pid": "3179"
					},
					{
						"area_id": "750004",
						"title": "灵武市",
						"pinyin": "lingwu",
						"pid": "3179"
					}
				]
			},
			{
				"area_id": "753000",
				"title": "石嘴山市",
				"pinyin": "shizuishan",
				"pid": "3178",
				"child": [
					{
						"area_id": "753000",
						"title": "大武口区",
						"pinyin": "dawukou",
						"pid": "3186"
					},
					{
						"area_id": "753600",
						"title": "惠农区",
						"pinyin": "huinong",
						"pid": "3186"
					},
					{
						"area_id": "753400",
						"title": "平罗县",
						"pinyin": "pingluo",
						"pid": "3186"
					}
				]
			},
			{
				"area_id": "751100",
				"title": "吴忠市",
				"pinyin": "wuzhong",
				"pid": "3178",
				"child": [
					{
						"area_id": "751100",
						"title": "利通区",
						"pinyin": "litong",
						"pid": "3190"
					},
					{
						"area_id": "751900",
						"title": "红寺堡区",
						"pinyin": "hongsibao",
						"pid": "3190"
					},
					{
						"area_id": "751500",
						"title": "盐池县",
						"pinyin": "yanchi",
						"pid": "3190"
					},
					{
						"area_id": "751300",
						"title": "同心县",
						"pinyin": "tongxin",
						"pid": "3190"
					},
					{
						"area_id": "751600",
						"title": "青铜峡市",
						"pinyin": "qingtongxia",
						"pid": "3190"
					}
				]
			},
			{
				"area_id": "756000",
				"title": "固原市",
				"pinyin": "guyuan",
				"pid": "3178",
				"child": [
					{
						"area_id": "756000",
						"title": "原州区",
						"pinyin": "yuanzhou",
						"pid": "3196"
					},
					{
						"area_id": "756200",
						"title": "西吉县",
						"pinyin": "xiji",
						"pid": "3196"
					},
					{
						"area_id": "756300",
						"title": "隆德县",
						"pinyin": "longde",
						"pid": "3196"
					},
					{
						"area_id": "756400",
						"title": "泾源县",
						"pinyin": "jingyuan",
						"pid": "3196"
					},
					{
						"area_id": "756500",
						"title": "彭阳县",
						"pinyin": "pengyang",
						"pid": "3196"
					}
				]
			},
			{
				"area_id": "751700",
				"title": "中卫市",
				"pinyin": "zhongwei",
				"pid": "3178",
				"child": [
					{
						"area_id": "755000",
						"title": "沙坡头区",
						"pinyin": "shapotou",
						"pid": "3202"
					},
					{
						"area_id": "751200",
						"title": "中宁县",
						"pinyin": "zhongning",
						"pid": "3202"
					},
					{
						"area_id": "751800",
						"title": "海原县",
						"pinyin": "haiyuan",
						"pid": "3202"
					}
				]
			}
		]
	},
	{
		"area_id": "848000",
		"title": "新疆维吾尔自治区",
		"pinyin": "xinjiang",
		"pid": "0",
		"child": [
			{
				"area_id": "830002",
				"title": "乌鲁木齐市",
				"pinyin": "urumqi",
				"pid": "3206",
				"child": [
					{
						"area_id": "830002",
						"title": "天山区",
						"pinyin": "tianshan",
						"pid": "3207"
					},
					{
						"area_id": "830000",
						"title": "沙依巴克区",
						"pinyin": "shayibake",
						"pid": "3207"
					},
					{
						"area_id": "830011",
						"title": "新市区",
						"pinyin": "xinshi",
						"pid": "3207"
					},
					{
						"area_id": "830017",
						"title": "水磨沟区",
						"pinyin": "shuimogou",
						"pid": "3207"
					},
					{
						"area_id": "830022",
						"title": "头屯河区",
						"pinyin": "toutunhe",
						"pid": "3207"
					},
					{
						"area_id": "830039",
						"title": "达坂城区",
						"pinyin": "dabancheng",
						"pid": "3207"
					},
					{
						"area_id": "830019",
						"title": "米东区",
						"pinyin": "midong",
						"pid": "3207"
					},
					{
						"area_id": "830063",
						"title": "乌鲁木齐县",
						"pinyin": "wulumuqi",
						"pid": "3207"
					}
				]
			},
			{
				"area_id": "834000",
				"title": "克拉玛依市",
				"pinyin": "karamay",
				"pid": "3206",
				"child": [
					{
						"area_id": "834021",
						"title": "独山子区",
						"pinyin": "dushanzi",
						"pid": "3216"
					},
					{
						"area_id": "834000",
						"title": "克拉玛依区",
						"pinyin": "kelamayi",
						"pid": "3216"
					},
					{
						"area_id": "834008",
						"title": "白碱滩区",
						"pinyin": "baijiantan",
						"pid": "3216"
					},
					{
						"area_id": "834012",
						"title": "乌尔禾区",
						"pinyin": "wuerhe",
						"pid": "3216"
					}
				]
			},
			{
				"area_id": "838000",
				"title": "吐鲁番地区",
				"pinyin": "turpan",
				"pid": "3206",
				"child": [
					{
						"area_id": "838000",
						"title": "吐鲁番市",
						"pinyin": "tulufan",
						"pid": "3221"
					},
					{
						"area_id": "838200",
						"title": "鄯善县",
						"pinyin": "shanshan",
						"pid": "3221"
					},
					{
						"area_id": "838100",
						"title": "托克逊县",
						"pinyin": "tuokexun",
						"pid": "3221"
					}
				]
			},
			{
				"area_id": "839000",
				"title": "哈密地区",
				"pinyin": "hami",
				"pid": "3206",
				"child": [
					{
						"area_id": "839000",
						"title": "哈密市",
						"pinyin": "hami",
						"pid": "3225"
					},
					{
						"area_id": "839200",
						"title": "巴里坤哈萨克自治县",
						"pinyin": "balikun",
						"pid": "3225"
					},
					{
						"area_id": "839300",
						"title": "伊吾县",
						"pinyin": "yiwu",
						"pid": "3225"
					}
				]
			},
			{
				"area_id": "831100",
				"title": "昌吉回族自治州",
				"pinyin": "changji",
				"pid": "3206",
				"child": [
					{
						"area_id": "831100",
						"title": "昌吉市",
						"pinyin": "changji",
						"pid": "3229"
					},
					{
						"area_id": "831500",
						"title": "阜康市",
						"pinyin": "fukang",
						"pid": "3229"
					},
					{
						"area_id": "831200",
						"title": "呼图壁县",
						"pinyin": "hutubi",
						"pid": "3229"
					},
					{
						"area_id": "832200",
						"title": "玛纳斯县",
						"pinyin": "manasi",
						"pid": "3229"
					},
					{
						"area_id": "831800",
						"title": "奇台县",
						"pinyin": "qitai",
						"pid": "3229"
					},
					{
						"area_id": "831700",
						"title": "吉木萨尔县",
						"pinyin": "jimusaer",
						"pid": "3229"
					},
					{
						"area_id": "831900",
						"title": "木垒哈萨克自治县",
						"pinyin": "mulei",
						"pid": "3229"
					}
				]
			},
			{
				"area_id": "833400",
				"title": "博尔塔拉蒙古自治州",
				"pinyin": "bortala",
				"pid": "3206",
				"child": [
					{
						"area_id": "833400",
						"title": "博乐市",
						"pinyin": "bole",
						"pid": "3237"
					},
					{
						"area_id": "833400",
						"title": "阿拉山口市",
						"pinyin": "alashankou",
						"pid": "3237"
					},
					{
						"area_id": "833300",
						"title": "精河县",
						"pinyin": "jinghe",
						"pid": "3237"
					},
					{
						"area_id": "833500",
						"title": "温泉县",
						"pinyin": "wenquan",
						"pid": "3237"
					}
				]
			},
			{
				"area_id": "841000",
				"title": "巴音郭楞蒙古自治州",
				"pinyin": "bayingol",
				"pid": "3206",
				"child": [
					{
						"area_id": "841000",
						"title": "库尔勒市",
						"pinyin": "kuerle",
						"pid": "3242"
					},
					{
						"area_id": "841600",
						"title": "轮台县",
						"pinyin": "luntai",
						"pid": "3242"
					},
					{
						"area_id": "841500",
						"title": "尉犁县",
						"pinyin": "yuli",
						"pid": "3242"
					},
					{
						"area_id": "841800",
						"title": "若羌县",
						"pinyin": "ruoqiang",
						"pid": "3242"
					},
					{
						"area_id": "841900",
						"title": "且末县",
						"pinyin": "qiemo",
						"pid": "3242"
					},
					{
						"area_id": "841100",
						"title": "焉耆回族自治县",
						"pinyin": "yanqi",
						"pid": "3242"
					},
					{
						"area_id": "841300",
						"title": "和静县",
						"pinyin": "hejing",
						"pid": "3242"
					},
					{
						"area_id": "841200",
						"title": "和硕县",
						"pinyin": "heshuo",
						"pid": "3242"
					},
					{
						"area_id": "841400",
						"title": "博湖县",
						"pinyin": "bohu",
						"pid": "3242"
					}
				]
			},
			{
				"area_id": "843000",
				"title": "阿克苏地区",
				"pinyin": "aksu",
				"pid": "3206",
				"child": [
					{
						"area_id": "843000",
						"title": "阿克苏市",
						"pinyin": "akesu",
						"pid": "3252"
					},
					{
						"area_id": "843100",
						"title": "温宿县",
						"pinyin": "wensu",
						"pid": "3252"
					},
					{
						"area_id": "842000",
						"title": "库车县",
						"pinyin": "kuche",
						"pid": "3252"
					},
					{
						"area_id": "842200",
						"title": "沙雅县",
						"pinyin": "shaya",
						"pid": "3252"
					},
					{
						"area_id": "842100",
						"title": "新和县",
						"pinyin": "xinhe",
						"pid": "3252"
					},
					{
						"area_id": "842300",
						"title": "拜城县",
						"pinyin": "baicheng",
						"pid": "3252"
					},
					{
						"area_id": "843400",
						"title": "乌什县",
						"pinyin": "wushi",
						"pid": "3252"
					},
					{
						"area_id": "843200",
						"title": "阿瓦提县",
						"pinyin": "awati",
						"pid": "3252"
					},
					{
						"area_id": "843600",
						"title": "柯坪县",
						"pinyin": "keping",
						"pid": "3252"
					}
				]
			},
			{
				"area_id": "845350",
				"title": "克孜勒苏柯尔克孜自治州",
				"pinyin": "kizilsu",
				"pid": "3206",
				"child": [
					{
						"area_id": "845350",
						"title": "阿图什市",
						"pinyin": "atushi",
						"pid": "3262"
					},
					{
						"area_id": "845550",
						"title": "阿克陶县",
						"pinyin": "aketao",
						"pid": "3262"
					},
					{
						"area_id": "843500",
						"title": "阿合奇县",
						"pinyin": "aheqi",
						"pid": "3262"
					},
					{
						"area_id": "845450",
						"title": "乌恰县",
						"pinyin": "wuqia",
						"pid": "3262"
					}
				]
			},
			{
				"area_id": "844000",
				"title": "喀什地区",
				"pinyin": "kashgar",
				"pid": "3206",
				"child": [
					{
						"area_id": "844000",
						"title": "喀什市",
						"pinyin": "kashi",
						"pid": "3267"
					},
					{
						"area_id": "844100",
						"title": "疏附县",
						"pinyin": "shufu",
						"pid": "3267"
					},
					{
						"area_id": "844200",
						"title": "疏勒县",
						"pinyin": "shule",
						"pid": "3267"
					},
					{
						"area_id": "844500",
						"title": "英吉沙县",
						"pinyin": "yingjisha",
						"pid": "3267"
					},
					{
						"area_id": "844800",
						"title": "泽普县",
						"pinyin": "zepu",
						"pid": "3267"
					},
					{
						"area_id": "844700",
						"title": "莎车县",
						"pinyin": "shache",
						"pid": "3267"
					},
					{
						"area_id": "844900",
						"title": "叶城县",
						"pinyin": "yecheng",
						"pid": "3267"
					},
					{
						"area_id": "844600",
						"title": "麦盖提县",
						"pinyin": "maigaiti",
						"pid": "3267"
					},
					{
						"area_id": "844400",
						"title": "岳普湖县",
						"pinyin": "yuepuhu",
						"pid": "3267"
					},
					{
						"area_id": "844300",
						"title": "伽师县",
						"pinyin": "jiashi",
						"pid": "3267"
					},
					{
						"area_id": "843800",
						"title": "巴楚县",
						"pinyin": "bachu",
						"pid": "3267"
					},
					{
						"area_id": "845250",
						"title": "塔什库尔干塔吉克自治县",
						"pinyin": "tashikuergantajike",
						"pid": "3267"
					}
				]
			},
			{
				"area_id": "848000",
				"title": "和田地区",
				"pinyin": "hotan",
				"pid": "3206",
				"child": [
					{
						"area_id": "848000",
						"title": "和田市",
						"pinyin": "hetianshi",
						"pid": "3280"
					},
					{
						"area_id": "848000",
						"title": "和田县",
						"pinyin": "hetianxian",
						"pid": "3280"
					},
					{
						"area_id": "848100",
						"title": "墨玉县",
						"pinyin": "moyu",
						"pid": "3280"
					},
					{
						"area_id": "845150",
						"title": "皮山县",
						"pinyin": "pishan",
						"pid": "3280"
					},
					{
						"area_id": "848200",
						"title": "洛浦县",
						"pinyin": "luopu",
						"pid": "3280"
					},
					{
						"area_id": "848300",
						"title": "策勒县",
						"pinyin": "cele",
						"pid": "3280"
					},
					{
						"area_id": "848400",
						"title": "于田县",
						"pinyin": "yutian",
						"pid": "3280"
					},
					{
						"area_id": "848500",
						"title": "民丰县",
						"pinyin": "minfeng",
						"pid": "3280"
					}
				]
			},
			{
				"area_id": "835100",
				"title": "伊犁哈萨克自治州",
				"pinyin": "ili",
				"pid": "3206",
				"child": [
					{
						"area_id": "835000",
						"title": "伊宁市",
						"pinyin": "yining",
						"pid": "3289"
					},
					{
						"area_id": "833200",
						"title": "奎屯市",
						"pinyin": "kuitun",
						"pid": "3289"
					},
					{
						"area_id": "835221",
						"title": "霍尔果斯市",
						"pinyin": "huoerguosi",
						"pid": "3289"
					},
					{
						"area_id": "835100",
						"title": "伊宁县",
						"pinyin": "yining",
						"pid": "3289"
					},
					{
						"area_id": "835300",
						"title": "察布查尔锡伯自治县",
						"pinyin": "chabuchaerxibo",
						"pid": "3289"
					},
					{
						"area_id": "835200",
						"title": "霍城县",
						"pinyin": "huocheng",
						"pid": "3289"
					},
					{
						"area_id": "835400",
						"title": "巩留县",
						"pinyin": "gongliu",
						"pid": "3289"
					},
					{
						"area_id": "835800",
						"title": "新源县",
						"pinyin": "xinyuan",
						"pid": "3289"
					},
					{
						"area_id": "835600",
						"title": "昭苏县",
						"pinyin": "zhaosu",
						"pid": "3289"
					},
					{
						"area_id": "835500",
						"title": "特克斯县",
						"pinyin": "tekesi",
						"pid": "3289"
					},
					{
						"area_id": "835700",
						"title": "尼勒克县",
						"pinyin": "nileke",
						"pid": "3289"
					}
				]
			},
			{
				"area_id": "834700",
				"title": "塔城地区",
				"pinyin": "qoqek",
				"pid": "3206",
				"child": [
					{
						"area_id": "834700",
						"title": "塔城市",
						"pinyin": "tacheng",
						"pid": "3301"
					},
					{
						"area_id": "833000",
						"title": "乌苏市",
						"pinyin": "wusu",
						"pid": "3301"
					},
					{
						"area_id": "834600",
						"title": "额敏县",
						"pinyin": "emin",
						"pid": "3301"
					},
					{
						"area_id": "832100",
						"title": "沙湾县",
						"pinyin": "shawan",
						"pid": "3301"
					},
					{
						"area_id": "834500",
						"title": "托里县",
						"pinyin": "tuoli",
						"pid": "3301"
					},
					{
						"area_id": "834800",
						"title": "裕民县",
						"pinyin": "yumin",
						"pid": "3301"
					},
					{
						"area_id": "834400",
						"title": "和布克赛尔蒙古自治县",
						"pinyin": "hebukesaier",
						"pid": "3301"
					}
				]
			},
			{
				"area_id": "836500",
				"title": "阿勒泰地区",
				"pinyin": "altay",
				"pid": "3206",
				"child": [
					{
						"area_id": "836500",
						"title": "阿勒泰市",
						"pinyin": "aletai",
						"pid": "3309"
					},
					{
						"area_id": "836600",
						"title": "布尔津县",
						"pinyin": "buerjin",
						"pid": "3309"
					},
					{
						"area_id": "836100",
						"title": "富蕴县",
						"pinyin": "fuyun",
						"pid": "3309"
					},
					{
						"area_id": "836400",
						"title": "福海县",
						"pinyin": "fuhai",
						"pid": "3309"
					},
					{
						"area_id": "836700",
						"title": "哈巴河县",
						"pinyin": "habahe",
						"pid": "3309"
					},
					{
						"area_id": "836200",
						"title": "青河县",
						"pinyin": "qinghe",
						"pid": "3309"
					},
					{
						"area_id": "836800",
						"title": "吉木乃县",
						"pinyin": "jimunai",
						"pid": "3309"
					}
				]
			},
			{
				"area_id": "",
				"title": "直辖县级",
				"pinyin": "",
				"pid": "3206",
				"child": [
					{
						"area_id": "832000",
						"title": "石河子市",
						"pinyin": "shihezi",
						"pid": "3317"
					},
					{
						"area_id": "843300",
						"title": "阿拉尔市",
						"pinyin": "aral",
						"pid": "3317"
					},
					{
						"area_id": "843806",
						"title": "图木舒克市",
						"pinyin": "tumxuk",
						"pid": "3317"
					},
					{
						"area_id": "831300",
						"title": "五家渠市",
						"pinyin": "wujiaqu",
						"pid": "3317"
					},
					{
						"area_id": "836000",
						"title": "北屯市",
						"pinyin": "beitun",
						"pid": "3317"
					},
					{
						"area_id": "836000",
						"title": "铁门关市",
						"pinyin": "tiemenguan",
						"pid": "3317"
					},
					{
						"area_id": "833408",
						"title": "双河市",
						"pinyin": "shuanghe",
						"pid": "3317"
					}
				]
			}
		]
	},
	{
		"area_id": "200",
		"title": "台湾",
		"pinyin": "taiwan",
		"pid": "0",
		"child": [
			{
				"area_id": "1",
				"title": "台北市",
				"pinyin": "taipei",
				"pid": "3325",
				"child": [
					{
						"area_id": "105",
						"title": "松山区",
						"pinyin": "songshan",
						"pid": "3326"
					},
					{
						"area_id": "110",
						"title": "信义区",
						"pinyin": "xinyi",
						"pid": "3326"
					},
					{
						"area_id": "106",
						"title": "大安区",
						"pinyin": "da'an",
						"pid": "3326"
					},
					{
						"area_id": "104",
						"title": "中山区",
						"pinyin": "zhongshan",
						"pid": "3326"
					},
					{
						"area_id": "100",
						"title": "中正区",
						"pinyin": "zhongzheng",
						"pid": "3326"
					},
					{
						"area_id": "103",
						"title": "大同区",
						"pinyin": "datong",
						"pid": "3326"
					},
					{
						"area_id": "108",
						"title": "万华区",
						"pinyin": "wanhua",
						"pid": "3326"
					},
					{
						"area_id": "116",
						"title": "文山区",
						"pinyin": "wenshan",
						"pid": "3326"
					},
					{
						"area_id": "115",
						"title": "南港区",
						"pinyin": "nangang",
						"pid": "3326"
					},
					{
						"area_id": "114",
						"title": "内湖区",
						"pinyin": "nahu",
						"pid": "3326"
					},
					{
						"area_id": "111",
						"title": "士林区",
						"pinyin": "shilin",
						"pid": "3326"
					},
					{
						"area_id": "112",
						"title": "北投区",
						"pinyin": "beitou",
						"pid": "3326"
					}
				]
			},
			{
				"area_id": "8",
				"title": "高雄市",
				"pinyin": "kaohsiung",
				"pid": "3325",
				"child": [
					{
						"area_id": "803",
						"title": "盐埕区",
						"pinyin": "yancheng",
						"pid": "3339"
					},
					{
						"area_id": "804",
						"title": "鼓山区",
						"pinyin": "gushan",
						"pid": "3339"
					},
					{
						"area_id": "813",
						"title": "左营区",
						"pinyin": "zuoying",
						"pid": "3339"
					},
					{
						"area_id": "811",
						"title": "楠梓区",
						"pinyin": "nanzi",
						"pid": "3339"
					},
					{
						"area_id": "807",
						"title": "三民区",
						"pinyin": "sanmin",
						"pid": "3339"
					},
					{
						"area_id": "800",
						"title": "新兴区",
						"pinyin": "xinxing",
						"pid": "3339"
					},
					{
						"area_id": "801",
						"title": "前金区",
						"pinyin": "qianjin",
						"pid": "3339"
					},
					{
						"area_id": "802",
						"title": "苓雅区",
						"pinyin": "lingya",
						"pid": "3339"
					},
					{
						"area_id": "806",
						"title": "前镇区",
						"pinyin": "qianzhen",
						"pid": "3339"
					},
					{
						"area_id": "805",
						"title": "旗津区",
						"pinyin": "qijin",
						"pid": "3339"
					},
					{
						"area_id": "812",
						"title": "小港区",
						"pinyin": "xiaogang",
						"pid": "3339"
					},
					{
						"area_id": "830",
						"title": "凤山区",
						"pinyin": "fengshan",
						"pid": "3339"
					},
					{
						"area_id": "832",
						"title": "林园区",
						"pinyin": "linyuan",
						"pid": "3339"
					},
					{
						"area_id": "831",
						"title": "大寮区",
						"pinyin": "daliao",
						"pid": "3339"
					},
					{
						"area_id": "840",
						"title": "大树区",
						"pinyin": "dashu",
						"pid": "3339"
					},
					{
						"area_id": "815",
						"title": "大社区",
						"pinyin": "dashe",
						"pid": "3339"
					},
					{
						"area_id": "814",
						"title": "仁武区",
						"pinyin": "renwu",
						"pid": "3339"
					},
					{
						"area_id": "833",
						"title": "鸟松区",
						"pinyin": "niaosong",
						"pid": "3339"
					},
					{
						"area_id": "820",
						"title": "冈山区",
						"pinyin": "gangshan",
						"pid": "3339"
					},
					{
						"area_id": "825",
						"title": "桥头区",
						"pinyin": "qiaotou",
						"pid": "3339"
					},
					{
						"area_id": "824",
						"title": "燕巢区",
						"pinyin": "yanchao",
						"pid": "3339"
					},
					{
						"area_id": "823",
						"title": "田寮区",
						"pinyin": "tianliao",
						"pid": "3339"
					},
					{
						"area_id": "822",
						"title": "阿莲区",
						"pinyin": "alian",
						"pid": "3339"
					},
					{
						"area_id": "821",
						"title": "路竹区",
						"pinyin": "luzhu",
						"pid": "3339"
					},
					{
						"area_id": "829",
						"title": "湖内区",
						"pinyin": "huna",
						"pid": "3339"
					},
					{
						"area_id": "852",
						"title": "茄萣区",
						"pinyin": "qieding",
						"pid": "3339"
					},
					{
						"area_id": "828",
						"title": "永安区",
						"pinyin": "yong'an",
						"pid": "3339"
					},
					{
						"area_id": "827",
						"title": "弥陀区",
						"pinyin": "mituo",
						"pid": "3339"
					},
					{
						"area_id": "826",
						"title": "梓官区",
						"pinyin": "ziguan",
						"pid": "3339"
					},
					{
						"area_id": "842",
						"title": "旗山区",
						"pinyin": "qishan",
						"pid": "3339"
					},
					{
						"area_id": "843",
						"title": "美浓区",
						"pinyin": "meinong",
						"pid": "3339"
					},
					{
						"area_id": "844",
						"title": "六龟区",
						"pinyin": "liugui",
						"pid": "3339"
					},
					{
						"area_id": "847",
						"title": "甲仙区",
						"pinyin": "jiaxian",
						"pid": "3339"
					},
					{
						"area_id": "846",
						"title": "杉林区",
						"pinyin": "shanlin",
						"pid": "3339"
					},
					{
						"area_id": "845",
						"title": "内门区",
						"pinyin": "namen",
						"pid": "3339"
					},
					{
						"area_id": "851",
						"title": "茂林区",
						"pinyin": "maolin",
						"pid": "3339"
					},
					{
						"area_id": "848",
						"title": "桃源区",
						"pinyin": "taoyuan",
						"pid": "3339"
					},
					{
						"area_id": "849",
						"title": "那玛夏区",
						"pinyin": "namaxia",
						"pid": "3339"
					}
				]
			},
			{
				"area_id": "2",
				"title": "基隆市",
				"pinyin": "keelung",
				"pid": "3325",
				"child": [
					{
						"area_id": "202",
						"title": "中正区",
						"pinyin": "zhongzheng",
						"pid": "3378"
					},
					{
						"area_id": "206",
						"title": "七堵区",
						"pinyin": "qidu",
						"pid": "3378"
					},
					{
						"area_id": "205",
						"title": "暖暖区",
						"pinyin": "nuannuan",
						"pid": "3378"
					},
					{
						"area_id": "200",
						"title": "仁爱区",
						"pinyin": "renai",
						"pid": "3378"
					},
					{
						"area_id": "203",
						"title": "中山区",
						"pinyin": "zhongshan",
						"pid": "3378"
					},
					{
						"area_id": "204",
						"title": "安乐区",
						"pinyin": "anle",
						"pid": "3378"
					},
					{
						"area_id": "201",
						"title": "信义区",
						"pinyin": "xinyi",
						"pid": "3378"
					}
				]
			},
			{
				"area_id": "4",
				"title": "台中市",
				"pinyin": "taichung",
				"pid": "3325",
				"child": [
					{
						"area_id": "400",
						"title": "中区",
						"pinyin": "zhongqu",
						"pid": "3386"
					},
					{
						"area_id": "401",
						"title": "东区",
						"pinyin": "dongqu",
						"pid": "3386"
					},
					{
						"area_id": "402",
						"title": "南区",
						"pinyin": "nanqu",
						"pid": "3386"
					},
					{
						"area_id": "403",
						"title": "西区",
						"pinyin": "xiqu",
						"pid": "3386"
					},
					{
						"area_id": "404",
						"title": "北区",
						"pinyin": "beiqu",
						"pid": "3386"
					},
					{
						"area_id": "407",
						"title": "西屯区",
						"pinyin": "xitun",
						"pid": "3386"
					},
					{
						"area_id": "408",
						"title": "南屯区",
						"pinyin": "nantun",
						"pid": "3386"
					},
					{
						"area_id": "406",
						"title": "北屯区",
						"pinyin": "beitun",
						"pid": "3386"
					},
					{
						"area_id": "420",
						"title": "丰原区",
						"pinyin": "fengyuan",
						"pid": "3386"
					},
					{
						"area_id": "423",
						"title": "东势区",
						"pinyin": "dongshi",
						"pid": "3386"
					},
					{
						"area_id": "437",
						"title": "大甲区",
						"pinyin": "dajia",
						"pid": "3386"
					},
					{
						"area_id": "436",
						"title": "清水区",
						"pinyin": "qingshui",
						"pid": "3386"
					},
					{
						"area_id": "433",
						"title": "沙鹿区",
						"pinyin": "shalu",
						"pid": "3386"
					},
					{
						"area_id": "435",
						"title": "梧栖区",
						"pinyin": "wuqi",
						"pid": "3386"
					},
					{
						"area_id": "421",
						"title": "后里区",
						"pinyin": "houli",
						"pid": "3386"
					},
					{
						"area_id": "429",
						"title": "神冈区",
						"pinyin": "shengang",
						"pid": "3386"
					},
					{
						"area_id": "427",
						"title": "潭子区",
						"pinyin": "tanzi",
						"pid": "3386"
					},
					{
						"area_id": "428",
						"title": "大雅区",
						"pinyin": "daya",
						"pid": "3386"
					},
					{
						"area_id": "426",
						"title": "新社区",
						"pinyin": "xinshe",
						"pid": "3386"
					},
					{
						"area_id": "422",
						"title": "石冈区",
						"pinyin": "shigang",
						"pid": "3386"
					},
					{
						"area_id": "438",
						"title": "外埔区",
						"pinyin": "waipu",
						"pid": "3386"
					},
					{
						"area_id": "439",
						"title": "大安区",
						"pinyin": "da'an",
						"pid": "3386"
					},
					{
						"area_id": "414",
						"title": "乌日区",
						"pinyin": "wuri",
						"pid": "3386"
					},
					{
						"area_id": "432",
						"title": "大肚区",
						"pinyin": "dadu",
						"pid": "3386"
					},
					{
						"area_id": "434",
						"title": "龙井区",
						"pinyin": "longjing",
						"pid": "3386"
					},
					{
						"area_id": "413",
						"title": "雾峰区",
						"pinyin": "wufeng",
						"pid": "3386"
					},
					{
						"area_id": "411",
						"title": "太平区",
						"pinyin": "taiping",
						"pid": "3386"
					},
					{
						"area_id": "412",
						"title": "大里区",
						"pinyin": "dali",
						"pid": "3386"
					},
					{
						"area_id": "424",
						"title": "和平区",
						"pinyin": "heping",
						"pid": "3386"
					}
				]
			},
			{
				"area_id": "7",
				"title": "台南市",
				"pinyin": "tainan",
				"pid": "3325",
				"child": [
					{
						"area_id": "701",
						"title": "东区",
						"pinyin": "dongqu",
						"pid": "3416"
					},
					{
						"area_id": "702",
						"title": "南区",
						"pinyin": "nanqu",
						"pid": "3416"
					},
					{
						"area_id": "704",
						"title": "北区",
						"pinyin": "beiqu",
						"pid": "3416"
					},
					{
						"area_id": "709",
						"title": "安南区",
						"pinyin": "annan",
						"pid": "3416"
					},
					{
						"area_id": "708",
						"title": "安平区",
						"pinyin": "anping",
						"pid": "3416"
					},
					{
						"area_id": "700",
						"title": "中西区",
						"pinyin": "zhongxi",
						"pid": "3416"
					},
					{
						"area_id": "730",
						"title": "新营区",
						"pinyin": "xinying",
						"pid": "3416"
					},
					{
						"area_id": "737",
						"title": "盐水区",
						"pinyin": "yanshui",
						"pid": "3416"
					},
					{
						"area_id": "732",
						"title": "白河区",
						"pinyin": "baihe",
						"pid": "3416"
					},
					{
						"area_id": "736",
						"title": "柳营区",
						"pinyin": "liuying",
						"pid": "3416"
					},
					{
						"area_id": "731",
						"title": "后壁区",
						"pinyin": "houbi",
						"pid": "3416"
					},
					{
						"area_id": "733",
						"title": "东山区",
						"pinyin": "dongshan",
						"pid": "3416"
					},
					{
						"area_id": "721",
						"title": "麻豆区",
						"pinyin": "madou",
						"pid": "3416"
					},
					{
						"area_id": "735",
						"title": "下营区",
						"pinyin": "xiaying",
						"pid": "3416"
					},
					{
						"area_id": "734",
						"title": "六甲区",
						"pinyin": "liujia",
						"pid": "3416"
					},
					{
						"area_id": "720",
						"title": "官田区",
						"pinyin": "guantian",
						"pid": "3416"
					},
					{
						"area_id": "742",
						"title": "大内区",
						"pinyin": "dana",
						"pid": "3416"
					},
					{
						"area_id": "722",
						"title": "佳里区",
						"pinyin": "jiali",
						"pid": "3416"
					},
					{
						"area_id": "726",
						"title": "学甲区",
						"pinyin": "xuejia",
						"pid": "3416"
					},
					{
						"area_id": "723",
						"title": "西港区",
						"pinyin": "xigang",
						"pid": "3416"
					},
					{
						"area_id": "724",
						"title": "七股区",
						"pinyin": "qigu",
						"pid": "3416"
					},
					{
						"area_id": "725",
						"title": "将军区",
						"pinyin": "jiangjun",
						"pid": "3416"
					},
					{
						"area_id": "727",
						"title": "北门区",
						"pinyin": "beimen",
						"pid": "3416"
					},
					{
						"area_id": "712",
						"title": "新化区",
						"pinyin": "xinhua",
						"pid": "3416"
					},
					{
						"area_id": "741",
						"title": "善化区",
						"pinyin": "shanhua",
						"pid": "3416"
					},
					{
						"area_id": "744",
						"title": "新市区",
						"pinyin": "xinshi",
						"pid": "3416"
					},
					{
						"area_id": "745",
						"title": "安定区",
						"pinyin": "anding",
						"pid": "3416"
					},
					{
						"area_id": "743",
						"title": "山上区",
						"pinyin": "shanshang",
						"pid": "3416"
					},
					{
						"area_id": "714",
						"title": "玉井区",
						"pinyin": "yujing",
						"pid": "3416"
					},
					{
						"area_id": "715",
						"title": "楠西区",
						"pinyin": "nanxi",
						"pid": "3416"
					},
					{
						"area_id": "716",
						"title": "南化区",
						"pinyin": "nanhua",
						"pid": "3416"
					},
					{
						"area_id": "713",
						"title": "左镇区",
						"pinyin": "zuozhen",
						"pid": "3416"
					},
					{
						"area_id": "717",
						"title": "仁德区",
						"pinyin": "rende",
						"pid": "3416"
					},
					{
						"area_id": "711",
						"title": "归仁区",
						"pinyin": "guiren",
						"pid": "3416"
					},
					{
						"area_id": "718",
						"title": "关庙区",
						"pinyin": "guanmiao",
						"pid": "3416"
					},
					{
						"area_id": "719",
						"title": "龙崎区",
						"pinyin": "longqi",
						"pid": "3416"
					},
					{
						"area_id": "710",
						"title": "永康区",
						"pinyin": "yongkang",
						"pid": "3416"
					}
				]
			},
			{
				"area_id": "3",
				"title": "新竹市",
				"pinyin": "hsinchu",
				"pid": "3325",
				"child": [
					{
						"area_id": "300",
						"title": "东区",
						"pinyin": "dongqu",
						"pid": "3454"
					},
					{
						"area_id": "",
						"title": "北区",
						"pinyin": "beiqu",
						"pid": "3454"
					},
					{
						"area_id": "",
						"title": "香山区",
						"pinyin": "xiangshan",
						"pid": "3454"
					}
				]
			},
			{
				"area_id": "6",
				"title": "嘉义市",
				"pinyin": "chiayi",
				"pid": "3325",
				"child": [
					{
						"area_id": "600",
						"title": "东区",
						"pinyin": "dongqu",
						"pid": "3458"
					},
					{
						"area_id": "600",
						"title": "西区",
						"pinyin": "xiqu",
						"pid": "3458"
					}
				]
			},
			{
				"area_id": "2",
				"title": "新北市",
				"pinyin": "newtaipei",
				"pid": "3325",
				"child": [
					{
						"area_id": "220",
						"title": "板桥区",
						"pinyin": "banqiao",
						"pid": "3461"
					},
					{
						"area_id": "241",
						"title": "三重区",
						"pinyin": "sanzhong",
						"pid": "3461"
					},
					{
						"area_id": "235",
						"title": "中和区",
						"pinyin": "zhonghe",
						"pid": "3461"
					},
					{
						"area_id": "234",
						"title": "永和区",
						"pinyin": "yonghe",
						"pid": "3461"
					},
					{
						"area_id": "242",
						"title": "新庄区",
						"pinyin": "xinzhuang",
						"pid": "3461"
					},
					{
						"area_id": "231",
						"title": "新店区",
						"pinyin": "xindian",
						"pid": "3461"
					},
					{
						"area_id": "238",
						"title": "树林区",
						"pinyin": "shulin",
						"pid": "3461"
					},
					{
						"area_id": "239",
						"title": "莺歌区",
						"pinyin": "yingge",
						"pid": "3461"
					},
					{
						"area_id": "237",
						"title": "三峡区",
						"pinyin": "sanxia",
						"pid": "3461"
					},
					{
						"area_id": "251",
						"title": "淡水区",
						"pinyin": "danshui",
						"pid": "3461"
					},
					{
						"area_id": "221",
						"title": "汐止区",
						"pinyin": "xizhi",
						"pid": "3461"
					},
					{
						"area_id": "224",
						"title": "瑞芳区",
						"pinyin": "ruifang",
						"pid": "3461"
					},
					{
						"area_id": "236",
						"title": "土城区",
						"pinyin": "tucheng",
						"pid": "3461"
					},
					{
						"area_id": "247",
						"title": "芦洲区",
						"pinyin": "luzhou",
						"pid": "3461"
					},
					{
						"area_id": "248",
						"title": "五股区",
						"pinyin": "wugu",
						"pid": "3461"
					},
					{
						"area_id": "243",
						"title": "泰山区",
						"pinyin": "taishan",
						"pid": "3461"
					},
					{
						"area_id": "244",
						"title": "林口区",
						"pinyin": "linkou",
						"pid": "3461"
					},
					{
						"area_id": "222",
						"title": "深坑区",
						"pinyin": "shenkeng",
						"pid": "3461"
					},
					{
						"area_id": "223",
						"title": "石碇区",
						"pinyin": "shiding",
						"pid": "3461"
					},
					{
						"area_id": "232",
						"title": "坪林区",
						"pinyin": "pinglin",
						"pid": "3461"
					},
					{
						"area_id": "252",
						"title": "三芝区",
						"pinyin": "sanzhi",
						"pid": "3461"
					},
					{
						"area_id": "253",
						"title": "石门区",
						"pinyin": "shimen",
						"pid": "3461"
					},
					{
						"area_id": "249",
						"title": "八里区",
						"pinyin": "bali",
						"pid": "3461"
					},
					{
						"area_id": "226",
						"title": "平溪区",
						"pinyin": "pingxi",
						"pid": "3461"
					},
					{
						"area_id": "227",
						"title": "双溪区",
						"pinyin": "shuangxi",
						"pid": "3461"
					},
					{
						"area_id": "228",
						"title": "贡寮区",
						"pinyin": "gongliao",
						"pid": "3461"
					},
					{
						"area_id": "208",
						"title": "金山区",
						"pinyin": "jinshan",
						"pid": "3461"
					},
					{
						"area_id": "207",
						"title": "万里区",
						"pinyin": "wanli",
						"pid": "3461"
					},
					{
						"area_id": "233",
						"title": "乌来区",
						"pinyin": "wulai",
						"pid": "3461"
					}
				]
			},
			{
				"area_id": "2",
				"title": "宜兰县",
				"pinyin": "yilan",
				"pid": "3325",
				"child": [
					{
						"area_id": "260",
						"title": "宜兰市",
						"pinyin": "yilan",
						"pid": "3491"
					},
					{
						"area_id": "265",
						"title": "罗东镇",
						"pinyin": "luodong",
						"pid": "3491"
					},
					{
						"area_id": "270",
						"title": "苏澳镇",
						"pinyin": "suao",
						"pid": "3491"
					},
					{
						"area_id": "261",
						"title": "头城镇",
						"pinyin": "toucheng",
						"pid": "3491"
					},
					{
						"area_id": "262",
						"title": "礁溪乡",
						"pinyin": "jiaoxi",
						"pid": "3491"
					},
					{
						"area_id": "263",
						"title": "壮围乡",
						"pinyin": "zhuangwei",
						"pid": "3491"
					},
					{
						"area_id": "264",
						"title": "员山乡",
						"pinyin": "yuanshan",
						"pid": "3491"
					},
					{
						"area_id": "269",
						"title": "冬山乡",
						"pinyin": "dongshan",
						"pid": "3491"
					},
					{
						"area_id": "268",
						"title": "五结乡",
						"pinyin": "wujie",
						"pid": "3491"
					},
					{
						"area_id": "266",
						"title": "三星乡",
						"pinyin": "sanxing",
						"pid": "3491"
					},
					{
						"area_id": "267",
						"title": "大同乡",
						"pinyin": "datong",
						"pid": "3491"
					},
					{
						"area_id": "272",
						"title": "南澳乡",
						"pinyin": "nanao",
						"pid": "3491"
					}
				]
			},
			{
				"area_id": "3",
				"title": "桃园县",
				"pinyin": "taoyuan",
				"pid": "3325",
				"child": [
					{
						"area_id": "330",
						"title": "桃园市",
						"pinyin": "taoyuan",
						"pid": "3504"
					},
					{
						"area_id": "320",
						"title": "中坜市",
						"pinyin": "zhongli",
						"pid": "3504"
					},
					{
						"area_id": "324",
						"title": "平镇市",
						"pinyin": "pingzhen",
						"pid": "3504"
					},
					{
						"area_id": "334",
						"title": "八德市",
						"pinyin": "bade",
						"pid": "3504"
					},
					{
						"area_id": "326",
						"title": "杨梅市",
						"pinyin": "yangmei",
						"pid": "3504"
					},
					{
						"area_id": "338",
						"title": "芦竹市",
						"pinyin": "luzhu",
						"pid": "3504"
					},
					{
						"area_id": "335",
						"title": "大溪镇",
						"pinyin": "daxi",
						"pid": "3504"
					},
					{
						"area_id": "337",
						"title": "大园乡",
						"pinyin": "dayuan",
						"pid": "3504"
					},
					{
						"area_id": "333",
						"title": "龟山乡",
						"pinyin": "guishan",
						"pid": "3504"
					},
					{
						"area_id": "325",
						"title": "龙潭乡",
						"pinyin": "longtan",
						"pid": "3504"
					},
					{
						"area_id": "327",
						"title": "新屋乡",
						"pinyin": "xinwu",
						"pid": "3504"
					},
					{
						"area_id": "328",
						"title": "观音乡",
						"pinyin": "guanyin",
						"pid": "3504"
					},
					{
						"area_id": "336",
						"title": "复兴乡",
						"pinyin": "fuxing",
						"pid": "3504"
					}
				]
			},
			{
				"area_id": "3",
				"title": "新竹县",
				"pinyin": "hsinchu",
				"pid": "3325",
				"child": [
					{
						"area_id": "302",
						"title": "竹北市",
						"pinyin": "zhubei",
						"pid": "3518"
					},
					{
						"area_id": "310",
						"title": "竹东镇",
						"pinyin": "zhudong",
						"pid": "3518"
					},
					{
						"area_id": "305",
						"title": "新埔镇",
						"pinyin": "xinpu",
						"pid": "3518"
					},
					{
						"area_id": "306",
						"title": "关西镇",
						"pinyin": "guanxi",
						"pid": "3518"
					},
					{
						"area_id": "303",
						"title": "湖口乡",
						"pinyin": "hukou",
						"pid": "3518"
					},
					{
						"area_id": "304",
						"title": "新丰乡",
						"pinyin": "xinfeng",
						"pid": "3518"
					},
					{
						"area_id": "307",
						"title": "芎林乡",
						"pinyin": "xionglin",
						"pid": "3518"
					},
					{
						"area_id": "312",
						"title": "横山乡",
						"pinyin": "hengshan",
						"pid": "3518"
					},
					{
						"area_id": "314",
						"title": "北埔乡",
						"pinyin": "beipu",
						"pid": "3518"
					},
					{
						"area_id": "308",
						"title": "宝山乡",
						"pinyin": "baoshan",
						"pid": "3518"
					},
					{
						"area_id": "315",
						"title": "峨眉乡",
						"pinyin": "emei",
						"pid": "3518"
					},
					{
						"area_id": "313",
						"title": "尖石乡",
						"pinyin": "jianshi",
						"pid": "3518"
					},
					{
						"area_id": "311",
						"title": "五峰乡",
						"pinyin": "wufeng",
						"pid": "3518"
					}
				]
			},
			{
				"area_id": "3",
				"title": "苗栗县",
				"pinyin": "miaoli",
				"pid": "3325",
				"child": [
					{
						"area_id": "360",
						"title": "苗栗市",
						"pinyin": "miaoli",
						"pid": "3532"
					},
					{
						"area_id": "358",
						"title": "苑里镇",
						"pinyin": "yuanli",
						"pid": "3532"
					},
					{
						"area_id": "357",
						"title": "通霄镇",
						"pinyin": "tongxiao",
						"pid": "3532"
					},
					{
						"area_id": "350",
						"title": "竹南镇",
						"pinyin": "zhunan",
						"pid": "3532"
					},
					{
						"area_id": "351",
						"title": "头份镇",
						"pinyin": "toufen",
						"pid": "3532"
					},
					{
						"area_id": "356",
						"title": "后龙镇",
						"pinyin": "houlong",
						"pid": "3532"
					},
					{
						"area_id": "369",
						"title": "卓兰镇",
						"pinyin": "zhuolan",
						"pid": "3532"
					},
					{
						"area_id": "364",
						"title": "大湖乡",
						"pinyin": "dahu",
						"pid": "3532"
					},
					{
						"area_id": "363",
						"title": "公馆乡",
						"pinyin": "gongguan",
						"pid": "3532"
					},
					{
						"area_id": "366",
						"title": "铜锣乡",
						"pinyin": "tongluo",
						"pid": "3532"
					},
					{
						"area_id": "353",
						"title": "南庄乡",
						"pinyin": "nanzhuang",
						"pid": "3532"
					},
					{
						"area_id": "362",
						"title": "头屋乡",
						"pinyin": "touwu",
						"pid": "3532"
					},
					{
						"area_id": "367",
						"title": "三义乡",
						"pinyin": "sanyi",
						"pid": "3532"
					},
					{
						"area_id": "368",
						"title": "西湖乡",
						"pinyin": "xihu",
						"pid": "3532"
					},
					{
						"area_id": "361",
						"title": "造桥乡",
						"pinyin": "zaoqiao",
						"pid": "3532"
					},
					{
						"area_id": "352",
						"title": "三湾乡",
						"pinyin": "sanwan",
						"pid": "3532"
					},
					{
						"area_id": "354",
						"title": "狮潭乡",
						"pinyin": "shitan",
						"pid": "3532"
					},
					{
						"area_id": "365",
						"title": "泰安乡",
						"pinyin": "tai'an",
						"pid": "3532"
					}
				]
			},
			{
				"area_id": "5",
				"title": "彰化县",
				"pinyin": "changhua",
				"pid": "3325",
				"child": [
					{
						"area_id": "500",
						"title": "彰化市",
						"pinyin": "zhanghuashi",
						"pid": "3551"
					},
					{
						"area_id": "505",
						"title": "鹿港镇",
						"pinyin": "lugang",
						"pid": "3551"
					},
					{
						"area_id": "508",
						"title": "和美镇",
						"pinyin": "hemei",
						"pid": "3551"
					},
					{
						"area_id": "507",
						"title": "线西乡",
						"pinyin": "xianxi",
						"pid": "3551"
					},
					{
						"area_id": "509",
						"title": "伸港乡",
						"pinyin": "shengang",
						"pid": "3551"
					},
					{
						"area_id": "506",
						"title": "福兴乡",
						"pinyin": "fuxing",
						"pid": "3551"
					},
					{
						"area_id": "504",
						"title": "秀水乡",
						"pinyin": "xiushui",
						"pid": "3551"
					},
					{
						"area_id": "503",
						"title": "花坛乡",
						"pinyin": "huatan",
						"pid": "3551"
					},
					{
						"area_id": "502",
						"title": "芬园乡",
						"pinyin": "fenyuan",
						"pid": "3551"
					},
					{
						"area_id": "510",
						"title": "员林镇",
						"pinyin": "yuanlin",
						"pid": "3551"
					},
					{
						"area_id": "514",
						"title": "溪湖镇",
						"pinyin": "xihu",
						"pid": "3551"
					},
					{
						"area_id": "520",
						"title": "田中镇",
						"pinyin": "tianzhong",
						"pid": "3551"
					},
					{
						"area_id": "515",
						"title": "大村乡",
						"pinyin": "dacun",
						"pid": "3551"
					},
					{
						"area_id": "516",
						"title": "埔盐乡",
						"pinyin": "puyan",
						"pid": "3551"
					},
					{
						"area_id": "513",
						"title": "埔心乡",
						"pinyin": "puxin",
						"pid": "3551"
					},
					{
						"area_id": "512",
						"title": "永靖乡",
						"pinyin": "yongjing",
						"pid": "3551"
					},
					{
						"area_id": "511",
						"title": "社头乡",
						"pinyin": "shetou",
						"pid": "3551"
					},
					{
						"area_id": "530",
						"title": "二水乡",
						"pinyin": "ershui",
						"pid": "3551"
					},
					{
						"area_id": "521",
						"title": "北斗镇",
						"pinyin": "beidou",
						"pid": "3551"
					},
					{
						"area_id": "526",
						"title": "二林镇",
						"pinyin": "erlin",
						"pid": "3551"
					},
					{
						"area_id": "522",
						"title": "田尾乡",
						"pinyin": "tianwei",
						"pid": "3551"
					},
					{
						"area_id": "523",
						"title": "埤头乡",
						"pinyin": "pitou",
						"pid": "3551"
					},
					{
						"area_id": "528",
						"title": "芳苑乡",
						"pinyin": "fangyuan",
						"pid": "3551"
					},
					{
						"area_id": "527",
						"title": "大城乡",
						"pinyin": "dacheng",
						"pid": "3551"
					},
					{
						"area_id": "525",
						"title": "竹塘乡",
						"pinyin": "zhutang",
						"pid": "3551"
					},
					{
						"area_id": "524",
						"title": "溪州乡",
						"pinyin": "xizhou",
						"pid": "3551"
					}
				]
			},
			{
				"area_id": "5",
				"title": "南投县",
				"pinyin": "nantou",
				"pid": "3325",
				"child": [
					{
						"area_id": "540",
						"title": "南投市",
						"pinyin": "nantoushi",
						"pid": "3578"
					},
					{
						"area_id": "545",
						"title": "埔里镇",
						"pinyin": "puli",
						"pid": "3578"
					},
					{
						"area_id": "542",
						"title": "草屯镇",
						"pinyin": "caotun",
						"pid": "3578"
					},
					{
						"area_id": "557",
						"title": "竹山镇",
						"pinyin": "zhushan",
						"pid": "3578"
					},
					{
						"area_id": "552",
						"title": "集集镇",
						"pinyin": "jiji",
						"pid": "3578"
					},
					{
						"area_id": "551",
						"title": "名间乡",
						"pinyin": "mingjian",
						"pid": "3578"
					},
					{
						"area_id": "558",
						"title": "鹿谷乡",
						"pinyin": "lugu",
						"pid": "3578"
					},
					{
						"area_id": "541",
						"title": "中寮乡",
						"pinyin": "zhongliao",
						"pid": "3578"
					},
					{
						"area_id": "555",
						"title": "鱼池乡",
						"pinyin": "yuchi",
						"pid": "3578"
					},
					{
						"area_id": "544",
						"title": "国姓乡",
						"pinyin": "guoxing",
						"pid": "3578"
					},
					{
						"area_id": "553",
						"title": "水里乡",
						"pinyin": "shuili",
						"pid": "3578"
					},
					{
						"area_id": "556",
						"title": "信义乡",
						"pinyin": "xinyi",
						"pid": "3578"
					},
					{
						"area_id": "546",
						"title": "仁爱乡",
						"pinyin": "renai",
						"pid": "3578"
					}
				]
			},
			{
				"area_id": "6",
				"title": "云林县",
				"pinyin": "yunlin",
				"pid": "3325",
				"child": [
					{
						"area_id": "640",
						"title": "斗六市",
						"pinyin": "douliu",
						"pid": "3592"
					},
					{
						"area_id": "630",
						"title": "斗南镇",
						"pinyin": "dounan",
						"pid": "3592"
					},
					{
						"area_id": "632",
						"title": "虎尾镇",
						"pinyin": "huwei",
						"pid": "3592"
					},
					{
						"area_id": "648",
						"title": "西螺镇",
						"pinyin": "xiluo",
						"pid": "3592"
					},
					{
						"area_id": "633",
						"title": "土库镇",
						"pinyin": "tuku",
						"pid": "3592"
					},
					{
						"area_id": "651",
						"title": "北港镇",
						"pinyin": "beigang",
						"pid": "3592"
					},
					{
						"area_id": "646",
						"title": "古坑乡",
						"pinyin": "gukeng",
						"pid": "3592"
					},
					{
						"area_id": "631",
						"title": "大埤乡",
						"pinyin": "dapi",
						"pid": "3592"
					},
					{
						"area_id": "647",
						"title": "莿桐乡",
						"pinyin": "citong",
						"pid": "3592"
					},
					{
						"area_id": "643",
						"title": "林内乡",
						"pinyin": "linna",
						"pid": "3592"
					},
					{
						"area_id": "649",
						"title": "二仑乡",
						"pinyin": "erlun",
						"pid": "3592"
					},
					{
						"area_id": "637",
						"title": "仑背乡",
						"pinyin": "lunbei",
						"pid": "3592"
					},
					{
						"area_id": "638",
						"title": "麦寮乡",
						"pinyin": "mailiao",
						"pid": "3592"
					},
					{
						"area_id": "635",
						"title": "东势乡",
						"pinyin": "dongshi",
						"pid": "3592"
					},
					{
						"area_id": "634",
						"title": "褒忠乡",
						"pinyin": "baozhong",
						"pid": "3592"
					},
					{
						"area_id": "636",
						"title": "台西乡",
						"pinyin": "taixi",
						"pid": "3592"
					},
					{
						"area_id": "655",
						"title": "元长乡",
						"pinyin": "yuanchang",
						"pid": "3592"
					},
					{
						"area_id": "654",
						"title": "四湖乡",
						"pinyin": "sihu",
						"pid": "3592"
					},
					{
						"area_id": "653",
						"title": "口湖乡",
						"pinyin": "kouhu",
						"pid": "3592"
					},
					{
						"area_id": "652",
						"title": "水林乡",
						"pinyin": "shuilin",
						"pid": "3592"
					}
				]
			},
			{
				"area_id": "6",
				"title": "嘉义县",
				"pinyin": "chiayi",
				"pid": "3325",
				"child": [
					{
						"area_id": "612",
						"title": "太保市",
						"pinyin": "taibao",
						"pid": "3613"
					},
					{
						"area_id": "613",
						"title": "朴子市",
						"pinyin": "puzi",
						"pid": "3613"
					},
					{
						"area_id": "625",
						"title": "布袋镇",
						"pinyin": "budai",
						"pid": "3613"
					},
					{
						"area_id": "622",
						"title": "大林镇",
						"pinyin": "dalin",
						"pid": "3613"
					},
					{
						"area_id": "621",
						"title": "民雄乡",
						"pinyin": "minxiong",
						"pid": "3613"
					},
					{
						"area_id": "623",
						"title": "溪口乡",
						"pinyin": "xikou",
						"pid": "3613"
					},
					{
						"area_id": "616",
						"title": "新港乡",
						"pinyin": "xingang",
						"pid": "3613"
					},
					{
						"area_id": "615",
						"title": "六脚乡",
						"pinyin": "liujiao",
						"pid": "3613"
					},
					{
						"area_id": "614",
						"title": "东石乡",
						"pinyin": "dongshi",
						"pid": "3613"
					},
					{
						"area_id": "624",
						"title": "义竹乡",
						"pinyin": "yizhu",
						"pid": "3613"
					},
					{
						"area_id": "611",
						"title": "鹿草乡",
						"pinyin": "lucao",
						"pid": "3613"
					},
					{
						"area_id": "608",
						"title": "水上乡",
						"pinyin": "shuishang",
						"pid": "3613"
					},
					{
						"area_id": "606",
						"title": "中埔乡",
						"pinyin": "zhongpu",
						"pid": "3613"
					},
					{
						"area_id": "604",
						"title": "竹崎乡",
						"pinyin": "zhuqi",
						"pid": "3613"
					},
					{
						"area_id": "603",
						"title": "梅山乡",
						"pinyin": "meishan",
						"pid": "3613"
					},
					{
						"area_id": "602",
						"title": "番路乡",
						"pinyin": "fanlu",
						"pid": "3613"
					},
					{
						"area_id": "607",
						"title": "大埔乡",
						"pinyin": "dapu",
						"pid": "3613"
					},
					{
						"area_id": "605",
						"title": "阿里山乡",
						"pinyin": "alishan",
						"pid": "3613"
					}
				]
			},
			{
				"area_id": "9",
				"title": "屏东县",
				"pinyin": "pingtung",
				"pid": "3325",
				"child": [
					{
						"area_id": "900",
						"title": "屏东市",
						"pinyin": "pingdong",
						"pid": "3632"
					},
					{
						"area_id": "920",
						"title": "潮州镇",
						"pinyin": "chaozhou",
						"pid": "3632"
					},
					{
						"area_id": "928",
						"title": "东港镇",
						"pinyin": "donggang",
						"pid": "3632"
					},
					{
						"area_id": "946",
						"title": "恒春镇",
						"pinyin": "hengchun",
						"pid": "3632"
					},
					{
						"area_id": "913",
						"title": "万丹乡",
						"pinyin": "wandan",
						"pid": "3632"
					},
					{
						"area_id": "908",
						"title": "长治乡",
						"pinyin": "changzhi",
						"pid": "3632"
					},
					{
						"area_id": "909",
						"title": "麟洛乡",
						"pinyin": "linluo",
						"pid": "3632"
					},
					{
						"area_id": "904",
						"title": "九如乡",
						"pinyin": "jiuru",
						"pid": "3632"
					},
					{
						"area_id": "905",
						"title": "里港乡",
						"pinyin": "ligang",
						"pid": "3632"
					},
					{
						"area_id": "907",
						"title": "盐埔乡",
						"pinyin": "yanpu",
						"pid": "3632"
					},
					{
						"area_id": "906",
						"title": "高树乡",
						"pinyin": "gaoshu",
						"pid": "3632"
					},
					{
						"area_id": "923",
						"title": "万峦乡",
						"pinyin": "wanluan",
						"pid": "3632"
					},
					{
						"area_id": "912",
						"title": "内埔乡",
						"pinyin": "napu",
						"pid": "3632"
					},
					{
						"area_id": "911",
						"title": "竹田乡",
						"pinyin": "zhutian",
						"pid": "3632"
					},
					{
						"area_id": "925",
						"title": "新埤乡",
						"pinyin": "xinpi",
						"pid": "3632"
					},
					{
						"area_id": "940",
						"title": "枋寮乡",
						"pinyin": "fangliao",
						"pid": "3632"
					},
					{
						"area_id": "932",
						"title": "新园乡",
						"pinyin": "xinyuan",
						"pid": "3632"
					},
					{
						"area_id": "924",
						"title": "崁顶乡",
						"pinyin": "kanding",
						"pid": "3632"
					},
					{
						"area_id": "927",
						"title": "林边乡",
						"pinyin": "linbian",
						"pid": "3632"
					},
					{
						"area_id": "926",
						"title": "南州乡",
						"pinyin": "nanzhou",
						"pid": "3632"
					},
					{
						"area_id": "931",
						"title": "佳冬乡",
						"pinyin": "jiadong",
						"pid": "3632"
					},
					{
						"area_id": "929",
						"title": "琉球乡",
						"pinyin": "liuqiu",
						"pid": "3632"
					},
					{
						"area_id": "944",
						"title": "车城乡",
						"pinyin": "checheng",
						"pid": "3632"
					},
					{
						"area_id": "947",
						"title": "满州乡",
						"pinyin": "manzhou",
						"pid": "3632"
					},
					{
						"area_id": "941",
						"title": "枋山乡",
						"pinyin": "fangshan",
						"pid": "3632"
					},
					{
						"area_id": "901",
						"title": "三地门乡",
						"pinyin": "sandimen",
						"pid": "3632"
					},
					{
						"area_id": "902",
						"title": "雾台乡",
						"pinyin": "wutai",
						"pid": "3632"
					},
					{
						"area_id": "903",
						"title": "玛家乡",
						"pinyin": "majia",
						"pid": "3632"
					},
					{
						"area_id": "921",
						"title": "泰武乡",
						"pinyin": "taiwu",
						"pid": "3632"
					},
					{
						"area_id": "922",
						"title": "来义乡",
						"pinyin": "laiyi",
						"pid": "3632"
					},
					{
						"area_id": "942",
						"title": "春日乡",
						"pinyin": "chunri",
						"pid": "3632"
					},
					{
						"area_id": "943",
						"title": "狮子乡",
						"pinyin": "shizi",
						"pid": "3632"
					},
					{
						"area_id": "945",
						"title": "牡丹乡",
						"pinyin": "mudan",
						"pid": "3632"
					}
				]
			},
			{
				"area_id": "9",
				"title": "台东县",
				"pinyin": "taitung",
				"pid": "3325",
				"child": [
					{
						"area_id": "950",
						"title": "台东市",
						"pinyin": "taidong",
						"pid": "3666"
					},
					{
						"area_id": "961",
						"title": "成功镇",
						"pinyin": "chenggong",
						"pid": "3666"
					},
					{
						"area_id": "956",
						"title": "关山镇",
						"pinyin": "guanshan",
						"pid": "3666"
					},
					{
						"area_id": "954",
						"title": "卑南乡",
						"pinyin": "beinan",
						"pid": "3666"
					},
					{
						"area_id": "955",
						"title": "鹿野乡",
						"pinyin": "luye",
						"pid": "3666"
					},
					{
						"area_id": "958",
						"title": "池上乡",
						"pinyin": "chishang",
						"pid": "3666"
					},
					{
						"area_id": "959",
						"title": "东河乡",
						"pinyin": "donghe",
						"pid": "3666"
					},
					{
						"area_id": "962",
						"title": "长滨乡",
						"pinyin": "changbin",
						"pid": "3666"
					},
					{
						"area_id": "963",
						"title": "太麻里乡",
						"pinyin": "taimali",
						"pid": "3666"
					},
					{
						"area_id": "965",
						"title": "大武乡",
						"pinyin": "dawu",
						"pid": "3666"
					},
					{
						"area_id": "951",
						"title": "绿岛乡",
						"pinyin": "lvdao",
						"pid": "3666"
					},
					{
						"area_id": "957",
						"title": "海端乡",
						"pinyin": "haiduan",
						"pid": "3666"
					},
					{
						"area_id": "953",
						"title": "延平乡",
						"pinyin": "yanping",
						"pid": "3666"
					},
					{
						"area_id": "964",
						"title": "金峰乡",
						"pinyin": "jinfeng",
						"pid": "3666"
					},
					{
						"area_id": "966",
						"title": "达仁乡",
						"pinyin": "daren",
						"pid": "3666"
					},
					{
						"area_id": "952",
						"title": "兰屿乡",
						"pinyin": "lanyu",
						"pid": "3666"
					}
				]
			},
			{
				"area_id": "9",
				"title": "花莲县",
				"pinyin": "hualien",
				"pid": "3325",
				"child": [
					{
						"area_id": "970",
						"title": "花莲市",
						"pinyin": "hualian",
						"pid": "3683"
					},
					{
						"area_id": "975",
						"title": "凤林镇",
						"pinyin": "fenglin",
						"pid": "3683"
					},
					{
						"area_id": "981",
						"title": "玉里镇",
						"pinyin": "yuli",
						"pid": "3683"
					},
					{
						"area_id": "971",
						"title": "新城乡",
						"pinyin": "xincheng",
						"pid": "3683"
					},
					{
						"area_id": "973",
						"title": "吉安乡",
						"pinyin": "ji'an",
						"pid": "3683"
					},
					{
						"area_id": "974",
						"title": "寿丰乡",
						"pinyin": "shoufeng",
						"pid": "3683"
					},
					{
						"area_id": "976",
						"title": "光复乡",
						"pinyin": "guangfu",
						"pid": "3683"
					},
					{
						"area_id": "977",
						"title": "丰滨乡",
						"pinyin": "fengbin",
						"pid": "3683"
					},
					{
						"area_id": "978",
						"title": "瑞穗乡",
						"pinyin": "ruisui",
						"pid": "3683"
					},
					{
						"area_id": "983",
						"title": "富里乡",
						"pinyin": "fuli",
						"pid": "3683"
					},
					{
						"area_id": "972",
						"title": "秀林乡",
						"pinyin": "xiulin",
						"pid": "3683"
					},
					{
						"area_id": "979",
						"title": "万荣乡",
						"pinyin": "wanrong",
						"pid": "3683"
					},
					{
						"area_id": "982",
						"title": "卓溪乡",
						"pinyin": "zhuoxi",
						"pid": "3683"
					}
				]
			},
			{
				"area_id": "8",
				"title": "澎湖县",
				"pinyin": "penghu",
				"pid": "3325",
				"child": [
					{
						"area_id": "880",
						"title": "马公市",
						"pinyin": "magong",
						"pid": "3697"
					},
					{
						"area_id": "885",
						"title": "湖西乡",
						"pinyin": "huxi",
						"pid": "3697"
					},
					{
						"area_id": "884",
						"title": "白沙乡",
						"pinyin": "baisha",
						"pid": "3697"
					},
					{
						"area_id": "881",
						"title": "西屿乡",
						"pinyin": "xiyu",
						"pid": "3697"
					},
					{
						"area_id": "882",
						"title": "望安乡",
						"pinyin": "wang'an",
						"pid": "3697"
					},
					{
						"area_id": "883",
						"title": "七美乡",
						"pinyin": "qimei",
						"pid": "3697"
					}
				]
			},
			{
				"area_id": "8",
				"title": "金门县",
				"pinyin": "jinmen",
				"pid": "3325",
				"child": [
					{
						"area_id": "893",
						"title": "金城镇",
						"pinyin": "jincheng",
						"pid": "3704"
					},
					{
						"area_id": "891",
						"title": "金湖镇",
						"pinyin": "jinhu",
						"pid": "3704"
					},
					{
						"area_id": "890",
						"title": "金沙镇",
						"pinyin": "jinsha",
						"pid": "3704"
					},
					{
						"area_id": "892",
						"title": "金宁乡",
						"pinyin": "jinning",
						"pid": "3704"
					},
					{
						"area_id": "894",
						"title": "烈屿乡",
						"pinyin": "lieyu",
						"pid": "3704"
					},
					{
						"area_id": "896",
						"title": "乌丘乡",
						"pinyin": "wuqiu",
						"pid": "3704"
					}
				]
			},
			{
				"area_id": "2",
				"title": "连江县",
				"pinyin": "lienchiang",
				"pid": "3325",
				"child": [
					{
						"area_id": "209",
						"title": "南竿乡",
						"pinyin": "nangan",
						"pid": "3711"
					},
					{
						"area_id": "210",
						"title": "北竿乡",
						"pinyin": "beigan",
						"pid": "3711"
					},
					{
						"area_id": "211",
						"title": "莒光乡",
						"pinyin": "juguang",
						"pid": "3711"
					},
					{
						"area_id": "212",
						"title": "东引乡",
						"pinyin": "dongyin",
						"pid": "3711"
					}
				]
			}
		]
	},
	{
		"area_id": "999077",
		"title": "香港特别行政区",
		"pinyin": "hongkong",
		"pid": "0",
		"child": [
			{
				"area_id": "999077",
				"title": "香港岛",
				"pinyin": "hongkongisland",
				"pid": "3716",
				"child": [
					{
						"area_id": "999077",
						"title": "中西区",
						"pinyin": "centralandwesterndistrict",
						"pid": "3717"
					},
					{
						"area_id": "999077",
						"title": "湾仔区",
						"pinyin": "wanchaidistrict",
						"pid": "3717"
					},
					{
						"area_id": "999077",
						"title": "东区",
						"pinyin": "easterndistrict",
						"pid": "3717"
					},
					{
						"area_id": "999077",
						"title": "南区",
						"pinyin": "southerndistrict",
						"pid": "3717"
					}
				]
			},
			{
				"area_id": "999077",
				"title": "九龙",
				"pinyin": "kowloon",
				"pid": "3716",
				"child": [
					{
						"area_id": "999077",
						"title": "油尖旺区",
						"pinyin": "yautsimmong",
						"pid": "3722"
					},
					{
						"area_id": "999077",
						"title": "深水埗区",
						"pinyin": "shamshuipo",
						"pid": "3722"
					},
					{
						"area_id": "999077",
						"title": "九龙城区",
						"pinyin": "jiulongcheng",
						"pid": "3722"
					},
					{
						"area_id": "999077",
						"title": "黄大仙区",
						"pinyin": "wongtaisin",
						"pid": "3722"
					},
					{
						"area_id": "999077",
						"title": "观塘区",
						"pinyin": "kwuntong",
						"pid": "3722"
					}
				]
			},
			{
				"area_id": "999077",
				"title": "新界",
				"pinyin": "newterritories",
				"pid": "3716",
				"child": [
					{
						"area_id": "999077",
						"title": "荃湾区",
						"pinyin": "tsuenwan",
						"pid": "3728"
					},
					{
						"area_id": "999077",
						"title": "屯门区",
						"pinyin": "tuenmun",
						"pid": "3728"
					},
					{
						"area_id": "999077",
						"title": "元朗区",
						"pinyin": "yuenlong",
						"pid": "3728"
					},
					{
						"area_id": "999077",
						"title": "北区",
						"pinyin": "northdistrict",
						"pid": "3728"
					},
					{
						"area_id": "999077",
						"title": "大埔区",
						"pinyin": "taipo",
						"pid": "3728"
					},
					{
						"area_id": "999077",
						"title": "西贡区",
						"pinyin": "saikung",
						"pid": "3728"
					},
					{
						"area_id": "999077",
						"title": "沙田区",
						"pinyin": "shatin",
						"pid": "3728"
					},
					{
						"area_id": "999077",
						"title": "葵青区",
						"pinyin": "kwaitsing",
						"pid": "3728"
					},
					{
						"area_id": "999077",
						"title": "离岛区",
						"pinyin": "outlyingislands",
						"pid": "3728"
					}
				]
			}
		]
	},
	{
		"area_id": "999078",
		"title": "澳门特别行政区",
		"pinyin": "macau",
		"pid": "0",
		"child": [
			{
				"area_id": "999078",
				"title": "澳门半岛",
				"pinyin": "macaupeninsula",
				"pid": "3738",
				"child": [
					{
						"area_id": "999078",
						"title": "花地玛堂区",
						"pinyin": "nossasenhoradefatima",
						"pid": "3739"
					},
					{
						"area_id": "999078",
						"title": "圣安多尼堂区",
						"pinyin": "santoantonio",
						"pid": "3739"
					},
					{
						"area_id": "999078",
						"title": "大堂区",
						"pinyin": "sé",
						"pid": "3739"
					},
					{
						"area_id": "999078",
						"title": "望德堂区",
						"pinyin": "saolazaro",
						"pid": "3739"
					},
					{
						"area_id": "999078",
						"title": "风顺堂区",
						"pinyin": "saolourenco",
						"pid": "3739"
					}
				]
			},
			{
				"area_id": "999078",
				"title": "氹仔岛",
				"pinyin": "taipa",
				"pid": "3738",
				"child": [
					{
						"area_id": "999078",
						"title": "嘉模堂区",
						"pinyin": "ourladyofcarmel'sparish",
						"pid": "3745"
					}
				]
			},
			{
				"area_id": "999078",
				"title": "路环岛",
				"pinyin": "coloane",
				"pid": "3738",
				"child": [
					{
						"area_id": "999078",
						"title": "圣方济各堂区",
						"pinyin": "stfrancisxavier'sparish",
						"pid": "3747"
					}
				]
			}
		]
	},
	{
		"area_id": "000000",
		"title": "钓鱼岛",
		"pinyin": "diaoyudao",
		"pid": "0",
		"child": []
	}
]

function arrObjIndex (obj, objStr) {
	return obj.reduce((index, ele, i) => {
		if (ele.area_id === objStr) {
			return i
		} else {
			return index
		}
	}, -1)
}
// console.log(arrObjIndex(obj,"350000"))
