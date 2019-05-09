const Mock = require('mockjs')
const tween = Mock.mock(
	'/api/tween', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					tweenimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904101922362236.png"
				},
				{
					tweenimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904101921332133.png"
				},
				{
					tweenimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904101922532253.png"
				}
			],
			message: '查询成功'
		}
	})
const buildpcontent = Mock.mock(
	'/api/buildpcontent', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					pcontentimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon6.png",
					pcontentimg2: "http://www.airmate-china.com/uploadfiles/image/icon/icon6_on.png",
					pcontentc: "除湿机"

				},
				{
					pcontentimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon1.png",
					pcontentimg2: "http://www.airmate-china.com/uploadfiles/image/icon/icon1_on.png",
					pcontentc: "电风扇"


				},
				{
					pcontentimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon2.png",
					pcontentimg2: "http://www.airmate-china.com/uploadfiles/image/icon/icon2_on.png",
					pcontentc: "空气机"

				},
				{
					pcontentimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon3.png",
					pcontentimg2: "http://www.airmate-china.com/uploadfiles/image/icon/icon4_on.png",
					pcontentc: "新风系统"

				},
				{
					pcontentimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon4.png",
					pcontentimg2: "http://www.airmate-china.com/uploadfiles/image/icon/icon4_on.png",
					pcontentc: "电暖器"


				},
				{
					pcontentimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon5.png",
					pcontentimg2: "http://www.airmate-china.com/uploadfiles/image/icon/icon5_on.png",
					pcontentc: "加湿机"


				},
			],
			message: '查询成功'
		}
	})
const buildncdata = Mock.mock(
	'/api/buildncdata', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					ncimg: "http://www.airmate-china.com/uploadfiles/image/icon/icon6.png",
					ncimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon6_on.png",
					pcontentc: "除湿机"

				},
				{
					ncimg: "http://www.airmate-china.com/uploadfiles/image/icon/icon1.png",
					ncimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon1_on.png",
					pcontentc: "电风扇"


				},
				{
					ncimg: "http://www.airmate-china.com/uploadfiles/image/icon/icon2.png",
					ncimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon2_on.png",
					pcontentc: "空气机"

				},
				{
					ncimg: "http://www.airmate-china.com/uploadfiles/image/icon/icon3.png",
					ncimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon3_on.png",
					pcontentc: "新风系统"

				},
				{
					ncimg: "http://www.airmate-china.com/uploadfiles/image/icon/icon4.png",
					ncimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon4_on.png",
					pcontentc: "电暖器"


				},
				{
					ncimg: "http://www.airmate-china.com/uploadfiles/image/icon/icon5.png",
					ncimg1: "http://www.airmate-china.com/uploadfiles/image/icon/icon5_on.png",
					pcontentc: "电风扇"


				},
			],
			message: '查询成功'
		}
	})
const buildbox1 = Mock.mock(
	'/api/buildbox1', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					boxcontent_wenzi_img: "http://www.airmate-china.com/uploadfiles/2019/04/20190417200746746.png",
					boxcontent_wenzi_name: "aimeite",
					boxcontent_wenzi_dsc: "黑白天鹅"

				},
				{
					boxcontent_wenzi_img: "http://www.airmate-china.com/uploadfiles/image/Home_img2.jpg",
					boxcontent_wenzi_name: "the new air system",
					boxcontent_wenzi_dsc: "新风系统"


				}
			],
			message: '查询成功'
		}
	})
const buildbox2 = Mock.mock(
	'/api/buildbox2', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					box2gridcontent_img: "http://www.airmate-china.com/uploadfiles/image/Home_box2_img2.jpg",
					box2gridcontent_name: "AIRMETA视频",
					box2gridcontent_dsc: "艾美特首次和嘻哈跨界合作，为您营造最舒适的空气环境。"

				},

				{
					box2gridcontent_img: "http://www.airmate-china.com/uploadfiles/2018/10/201810181344244424.jpg",
					box2gridcontent_name: "HEY SIRI",
					box2gridcontent_dsc: "享受高科技 HEY SIRI开一下风扇"

				},
				{
					box2gridcontent_img: "http://www.airmate-china.com/uploadfiles/image/Home_box2_img7.jpg",
					box2gridcontent_name: "科技感受诗意",
					box2gridcontent_dsc: "自40年来专注电机的研发与设计，开创电机领域先河"

				},
				{
					box2gridcontent_img: "http://www.airmate-china.com/uploadfiles/image/Home_box2_img9.jpg",
					box2gridcontent_name: "服务支持",
					box2gridcontent_dsc: "为消费者提供更健康优质的生活而努力"

				},
				{
					box2gridcontent_img: "http://www.airmate-china.com/uploadfiles/image/Home_box2_img10.jpg",
					box2gridcontent_name: "企业文化",
					box2gridcontent_dsc: "品质是艾美特的生命"

				},
				{
					box2gridcontent_img: "http://www.airmate-china.com/uploadfiles/image/Home_box2_img11.jpg",
					box2gridcontent_name: "加入我们",
					box2gridcontent_dsc: "加入我们艾美特"

				},
				{
					box2gridcontent_img: "http://www.airmate-china.com/uploadfiles/image/Home_box2_img12.jpg",
					box2gridcontent_name: "社交媒体",
					box2gridcontent_dsc: "订阅艾美特，时刻关注我们"

				},
			],
			message: '查询成功'
		}
	})
// 产品中心
const buildprocontent = Mock.mock(
	'/api/buildprocontent', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121158395839.jpg",
					procontentdsc: "FB2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/20190412120049049.jpg",
					procontentdsc: "FS2309DR"

				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121159195919.jpg",
					procontentdsc: "AB2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121351255125.jpg",
					procontentdsc: "FED309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121159115911.jpg",
					procontentdsc: "EDB2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904191144414441.jpg",
					procontentdsc: "RF2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121158535853.jpg",
					procontentdsc: "RT2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904191130403040.jpg",
					procontentdsc: "TY2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121351475147.jpg",
					procontentdsc: "TY2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/20190412140939939.jpg",
					procontentdsc: "RTER09DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/2019041214070070.jpg",
					procontentdsc: "TYWE09DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/2019041214050959.jpg",
					procontentdsc: "EDYWE09DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121154315431.jpg",
					procontentdsc: "ED852ED36"
				},
			],
			message: '查询成功'
		}
	})
// 产品中心
const buildprocontentlist = Mock.mock(
	'/api/buildprocontentlist', 'get', (req, res) => {
		return {
			code: 200,
			data: [{

					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121158395839.jpg",
					procontentdsc: "FB2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/20190412120049049.jpg",
					procontentdsc: "FS2309DR"

				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121159195919.jpg",
					procontentdsc: "AB2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121351255125.jpg",
					procontentdsc: "FED309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121159115911.jpg",
					procontentdsc: "EDB2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904191144414441.jpg",
					procontentdsc: "RF2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121158535853.jpg",
					procontentdsc: "RT2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904191130403040.jpg",
					procontentdsc: "TY2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121351475147.jpg",
					procontentdsc: "TY2309DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/20190412140939939.jpg",
					procontentdsc: "RTER09DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/2019041214070070.jpg",
					procontentdsc: "TYWE09DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/2019041214050959.jpg",
					procontentdsc: "EDYWE09DR"
				},
				{
					procontentimg: "http://www.airmate-china.com/uploadfiles/2019/04/201904121154315431.jpg",
					procontentdsc: "ED852ED36"
				},
			],
			message: '查询成功'
		}
	})
const buildproducttitleall = Mock.mock(
	'/api/buildproducttitleall', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				producttitle: [{
					producttitles: "新风系统",
				}],
				producttitleli: [{
						productli: "空气循环扇"
					},
					{
						productli: "塔扇"
					},
					{
						productli: "落地扇"
					},
					{
						productli: "冷风扇"
					},
					{
						productli: "台立扇"
					},
					{
						productli: "转页扇"
					}
				]

			}],
			message: '查询成功'
		}
	})
const uldata = Mock.mock(
	'/api/uldata', 'get', (req, res) => {
		return {
			code: 200,
			data: [{

					wname: "秦皇岛盛浩商贸有限公司",
					wadress: "秦皇岛市海港区迎宾路8号秦保宾馆院内",
					wphone: "0335-3601778",
					type: "1"
				},
				{
					wname: "唐山辰科商贸有限公司",
					wadress: "唐山市路北区大理路西山道口南行150米路东6排6号",
					wphone: "0315-2173201",
					type: "2"
				},
				{
					wname: "张家口鸿彭商贸有限公司（1）",
					wadress: "张家口市宣化区南大街商业大厦",
					wphone: "15831376243",
					type: "1"
				},
				{
					wname: "张家口鸿彭商贸有限公司（2）",
					wadress: "张家口市桥西区至善街25号",
					wphone: "15831376243",
					type: "2"
				},
				{
					wname: "承德盛裕商贸有限公司",
					wadress: "河北省承德市双桥区大老虎沟绿园小区2号楼1单元",
					wphone: "13832411516",
					type: "1"
				},
				{
					wname: "平泉县家电售后维修中心",
					wadress: "河北省承德市平泉市双兴街金世纪S14-4底商",
					wphone: "13831466010",
					type: "2"
				}
			],
			message: '查询成功'
		}
	})
const buildProblemlist = Mock.mock(
	'/api/buildProblemlist', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					"show": '1',
					"listwenti": "1.为什么电风扇的风量会忽大忽小（遥控系列）？",
					"listda": "因为使用了电风扇的自然风或睡眠风的功能。我们遥控系列的电风扇有设计普通风、自然风、睡眠风等三种功能，普通风的风量是恒定的，不会存在勿大勿小；自然风主要是针对大自然的风力忽大忽小，模拟出能周期性地由强转弱的控制电路，进而控制电机的转速会忽快忽慢；睡眠风的原理同自然风一样，也是用由强转弱的控制电路来控制电机的转速。提醒：消费者在使用时请合理地选用自己所需要的风类。"

				},
				{
					"show": '2',

					"listwenti": "2.为什么有些电风扇的摆头角度只偏向一边",
					"listda": "有消费者反映我们有些风扇在摆头时，摆头的角度只偏向一边，而非左右一样。主要原因是他所使用的风扇采用的是分段式首部。目前我们公司的电风扇的首部有两种，一种是自动大首部。使用自动大首部的风扇的摆头角度是固定的（左右摆动角度一样），无法调节；另一种是分段式首部。使用分段式首部的风扇的摆头角度是可以随意调节的，没有固定角度。提醒：消费者可以根据自己的需要搬动机头（往自己需要的方向搬动）来调节风扇摆头的角度。"

				},
				{
					"show": '4',

					"listwenti": "3.电风扇的前后扇网怎么拆？",
					"listda": "有些消费者反映我们电风扇的前后网很难拆卸，其实只要掌握了拆卸技巧就很容易了。首先打开透明网夹螺丝及网夹，然后用手左右同时轻拍塑胶网圈即可。敬告：切勿使用一字起硬性地去撬网圈，以免网圈损坏。"

				},
				{
					"show": '5',

					"listwenti": "4.负离子电风扇所产生的负离子量会不会随着时间的推移而逐渐减少呢",
					"listda": "有些消费者在咨询中问到，负离子电风扇所产生的负离子量会不会随着时间的推移而越来越少，回答是否定的。艾美特负离子电风扇采用的是负离子发生器，只要使负离子发生器通电，即可产生负离子，而不会因为时间的推移而影响其产生负离子的浓度。温馨提示：艾美特电风扇所使用的负离子发生器可有效消烟除尘、去异味，强力杀菌、净化空气，不仅改善睡眠品质，而且对降低血压、增强心肌功能有良好效果。另外，艾美特负离子电风扇能启动多种酶，促进新陈代谢，增强肌体免疫抗病能力，对呼吸道、支气管炎、慢性鼻炎、更年期综合症、慢性皮肤病具有镇疼作用。"

				},
				{
					"show": '6',

					"listwenti": "5.使用电风扇应做好哪些安全防范措施？",
					"listda": "A、不得带电移动电风扇，必须切断电源，待风叶停止转动后，再移动。这是最关键的一条安全措施。 B、根据住房面积，家用电器的多少，合理安排好电源插座（数量、布局），不临时接长电源线，以杜绝因接线错误而造成设备外壳带电事故。 C、购买合格产品，对自行组装或非正规电器厂组装的产品要请懂得电气知识人员进行一次检查，消除缺陷。 D、电风扇外壳要可靠接地。 E、新购、经过修理或每年使用前必须用验电笔验明电风扇外壳无漏电现象。 F、应加装家用触电保护器。"

				},
				{
					"show": '7',

					"listwenti": "6.艾美特电风扇蓝牙遥控器更换新的后如何配对？",
					"listda": "机体在通电待机状态，显示屏上方会出现“锁定”字样，用手同时按风类、摆头键，“锁定”字样会闪烁，这时按遥控器上“学习锁定键”（按其它键也可）一下，机体PCB板会出现3次小蜂鸣声，同时“锁定”字样停止闪烁，此时使用遥控器可遥控机体，机体与遥控器配对成功。"

				},
				{
					"show": '8',

					"listwenti": "7.冰冷扇为什么又叫空调扇？它能像空调一样制冷吗？",
					"listda": "目前市面上的冰冷扇又叫空调扇，其实空调扇只不过是源于空气调节扇的简称，但它并不能像空调一样能制冷。空调是通过压缩机和氟里昂制冷剂来取到一种制冷的效果，而空调扇的工作原理则不然，空调扇只是通过水的循环配合冷冻好的冰晶，使吹出来的风带有一定的湿度，同时通过水温的影响而起到降低空气温度的作用，从而使人有一丝凉爽的感觉。"

				}

			],
			message: '查询成功'
		}
	})
const buildzhineng = Mock.mock(
	'/api/buildzhineng', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					type: "1",
					zhinengfirst: [{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img7.jpg",
							"zhinengjieshao": "HomeKit操作说明"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img6.jpg",
							"zhinengjieshao": "用户扫描二维码下载京东超级APP"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img2.jpg",
							"zhinengjieshao": "用户扫描二维码下载京东超级APP"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img1.jpg",
							"zhinengjieshao": "HomeKit操作说明"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img4.jpg",
							"zhinengjieshao": "HomeKit操作说明"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img3.jpg",
							"zhinengjieshao": "HomeKit操作说明"
						}
					]
				},
				{
					type: "2",
					zhinengtwo: [{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img7.jpg",
							"zhinengjieshao": "HomeKit操作说明"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img6.jpg",
							"zhinengjieshao": "用户扫描二维码下载京东超级APP"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img2.jpg",
							"zhinengjieshao": "用户扫描二维码下载京东超级APP"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img1.jpg",
							"zhinengjieshao": "HomeKit操作说明"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img4.jpg",
							"zhinengjieshao": "HomeKit操作说明"
						},
						{
							"zhinengimg": "http://www.airmate-china.com/uploadfiles/image/Intelligence_img3.jpg",
							"zhinengjieshao": "HomeKit操作说明"
						}
					]
				}
			],
			message: '查询成功'
		}
	})
const initImg = Mock.mock(
	'/api/initImg', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2019/01/20190121103002302.jpg",
					"title": "艾美特2019春夏新品发布会",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/11/201811141130473047.jpg",
					"title": "艾美特移动地暖荣获2018磐石奖",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/10/201810150949454945.png",
					"title": "快速取暖是为了慢慢生活，艾美特x天猫精灵智能取暖器精致首发",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2019/01/20190121103002302.jpg",
					"title": "艾美特2019春夏新品发布会",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/11/201811141130473047.jpg",
					"title": "艾美特移动地暖荣获2018磐石奖",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/10/201810150949454945.png",
					"title": "快速取暖是为了慢慢生活，艾美特x天猫精灵智能取暖器精致首发",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2019/01/20190121103002302.jpg",
					"title": "艾美特2019春夏新品发布会",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/11/201811141130473047.jpg",
					"title": "艾美特移动地暖荣获2018磐石奖",
					"info": "艾美特2019春夏新品发布会",

				},

			],
			message: '查询成功'
		}
	})
const initImgs = Mock.mock(
	'/api/initImgs', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2019/01/20190121103002302.jpg",
					"title": "艾美特2019春夏新品发布会",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/11/201811141130473047.jpg",
					"title": "艾美特移动地暖荣获2018磐石奖",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/10/201810150949454945.png",
					"title": "快速取暖是为了慢慢生活，艾美特x天猫精灵智能取暖器精致首发",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2019/01/20190121103002302.jpg",
					"title": "艾美特2019春夏新品发布会",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/11/201811141130473047.jpg",
					"title": "艾美特移动地暖荣获2018磐石奖",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/10/201810150949454945.png",
					"title": "快速取暖是为了慢慢生活，艾美特x天猫精灵智能取暖器精致首发",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2019/01/20190121103002302.jpg",
					"title": "艾美特2019春夏新品发布会",
					"info": "艾美特2019春夏新品发布会",

				},
				{
					"imgsArr": "http://www.airmate-china.com/uploadfiles/2018/11/201811141130473047.jpg",
					"title": "艾美特移动地暖荣获2018磐石奖",
					"info": "艾美特2019春夏新品发布会",

				},

			],
			message: '查询成功'
		}
	})
// 手机端
const moblieswiper = Mock.mock(
	'/api/moblieswiper', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					tweenimg: "http://www.airmate-china.com/uploadfiles/2018/10/201810091847174717.jpg"
				},
				{
					tweenimg: "http://www.airmate-china.com/uploadfiles/image/Hbanner_wap.jpg"
				}

			],
			message: '查询成功'
		}
	})
	const buildnavbarjson = Mock.mock(
		'/api/buildnavbarjson', 'get', (req, res) => {
			return {
				code: 200,
				data: [
					{
					na:[
						{
							nac:"电风扇",
							id:1,
							link:"Product_list"
						},
						{
							nac:"电暖气",
							id:2,
							link:"Product_list"
						},
						{
							nac:"空气净化器",
							id:3,
							link:"Product_list"
						},
						{
							nac:"除湿器",
							id:4,
							link:"Product_list"
						},
						{
							nac:"加湿器",
							id:5,
							link:"Product_list"
						},
						{
							nac:"新风系统",
							id:6,
							link:"Product_list"
						}
					],
					nb:[
						{
							nbc:"服务理念",
							link:"/Serve_linian"
						},
						{
							nbc:"服务政策",
							link:"/Serve_zhengce"

						},
						{
							nbc:"上门服务公告",
							link:"/Serve_gonggao"

						},
						{
							nbc:"[金卡]服务",
							link:"/Serve_jinka"

						},
						{
							nbc:"服务网点",
							link:"/Serve_wangdian"

						},
						{
							nbc:"常见问题",
							link:"/Serve_wenti"

						},
						{
							nbc:"联系我们",
							link:"/Serve_lianxi"

						},
					
						{
							nbc:"软件下载",
							link:"/Serve_xiazai"

						},
						{
							nbc:"智能产品专区",
							link:"/Serve_zhuanqu"

						},
						{
							nbc:"专卖网络",
							link:"/Serve_zhuanmai"

						},
						{
							nbc:"在线留言",
							link:"/Serve_liuyan"

						}
					],
					nc:[
						{
							ncc:"财务咨询"
						},
						{
							ncc:"公司年报"
						},
						{
							ncc:"公司治理"
						},
						{
							ncc:"公司公告"
						},
						{
							ncc:"视频咨询"
						},
						{
							ncc:"服务咨询"
						}
					],
					ne:[
						{nec:"公司简介"},
						{nec:"企业荣誉"},
						{nec:"发展历史"},
						{nec:"社会责任"},
						{nec:"企业文化"},
						{nec:"公司章程"}
					],
					nf:[
						{
							"nfc":"企业活动"
						},
						{
							"nfc":"活动专题"
						},
						{
							"nfc":"媒体中心"
						},
						{
							"nfc":"行业资讯"
						}
					],
					ng:[
						{
							ngf:"人才理念"
						},
						{
							ngf:"薪酬福利"
						},
						{
							ngf:"岗位招聘"
						}
					]
					}
	
				],
				message: '查询成功'
			}
		})
const buildlayoutproduct = Mock.mock(
	'/api/buildlayoutproduct', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					layoutproduct: [{
							productimg: "http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn1.png",
							id: "1",
							producttitle: "电风扇"
						},
						{
							productimg: "http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn2.png",
							id: "2",
							producttitle: "电暖气"
						},
						{
							productimg: "http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn3.png",
							id: "3",
							producttitle: "空气净化器"
						},
						{
							productimg: "http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn4.png",
							id: "4",
							producttitle: "除湿器"
						},
						{
							productimg: "http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn5.png",
							id: "5",
							producttitle: "加湿器"
						},
						{
							productimg: "http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn6.png",
							id: "6",
							producttitle: "新风系统"
						}
					],
					pic: [{
						picimg: "http://www.airmate-china.com/uploadfiles/image/wap_Home_img1.jpg"
					}]
				}

			],
			message: '查询成功'
		}
	})
const buildproducttwo = Mock.mock(
	'/api/buildproducttwo', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
							producttwoimg: "http://www.airmate-china.com/uploadfiles/2019/01/201901101542514251.jpg",
							id: "1",
							producttwotitle: "HGY905P"
						},
						{
							producttwoimg: "http://www.airmate-china.com/uploadfiles/2019/01/201901101540354035.jpg",
							id: "2",
							producttwotitle: "HGY1009P-W"
						},
						{
							producttwoimg: "http://www.airmate-china.com/uploadfiles/2018/12/201812171344144414.png",
							id: "3",
							producttwotitle: "HQ8082"
						},
						{
							producttwoimg: "http://www.airmate-china.com/uploadfiles/2018/12/201812121611371137.jpg",
							id: "4",
							producttwotitle: "HU1325-W"
						}


			],
			message: '查询成功'
		}
	})
	const buildprolist = Mock.mock(
		'/api/buildprolist', 'get', (req, res) => {
			return {
				code: 200,
				data: [
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2019/01/201901101542514251.jpg",
		prolisttitle:"HGY905P"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2019/01/201901101540354035.jpg",
		prolisttitle:"HGY1009P-W"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2018/12/201812171344144414.png",
		prolisttitle:"HQ8082"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2018/12/201812121611371137.jpg",
		prolisttitle:"HU1325-W"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2018/12/201812061621592159.jpg",
		prolisttitle:"HT16011"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2018/12/201812061620122012.jpg",
		prolisttitle:"HT16011a"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2018/11/201811131448444844.jpg",
		prolisttitle:"HT1601sa"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2018/11/201811131437363736.jpg",
		prolisttitle:"HT1s1sa"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2018/11/201811131425212521.jpg",
		prolisttitle:"rT1s1sa"
	},
	{
		prolistimg:"http://www.airmate-china.com/uploadfiles/2018/11/201811100936143614.jpg",
		prolisttitle:"Hvf1s1sa"
	}
				],
				message: '查询成功'
			}
		})
		const buildproductname = Mock.mock(
			'/api/buildproductname', 'get', (req, res) => {
				return {
					code: 200,
					data: [
		{
			productname:"电风扇"
		}
					],
					message: '查询成功'
				}
			})
			const builddetail = Mock.mock(
				'/api/builddetail', 'get', (req, res) => {
					return {
						code: 200,
						data: [
			                     {
									 detailtitle:"电风扇",
									 detaildsc:"FB15ED",
									 bannerimg:"http://www.airmate-china.com/uploadfiles/image/wap_pro13.jpg",
									 detailimg:[
										 {
											detailsimg:"http://www.airmate-china.com/amtdqj201708217221/uploadfiles/2017/12/201712261521542154.jpg" 
										 }
									 ]
								 }
						],
						message: '查询成功'
					}
				})
export default {
	tween,
	buildpcontent,
	buildncdata,
	buildbox1,
	buildbox2,
	buildprocontent,
	buildprocontentlist,
	buildproducttitleall,
	uldata,
	buildProblemlist,
	buildzhineng,
	initImg,
	initImgs,
	buildnavbarjson,
	moblieswiper,
	buildlayoutproduct,
buildproducttwo,
buildprolist,
buildproductname,
builddetail
}
