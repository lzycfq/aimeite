import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	mode: 'history',
 	routes: [
	{
		path: '/',
		name: 'index',
		component(resolve) {
			require(['../pages/web/Index.vue'], resolve)
		}
	},
		{
			path: '/company_Activity',
			name: 'company_Activity',
			component(resolve) {
				require(['../pages/web/company/company_Activity'], resolve)
			}
		},
		{
			path: '/company_Responsibility',
			name: 'company_Responsibility',
			component(resolve) {
				require(['../pages/web/company/company_Responsibility'], resolve)
			}
		},
		{
			path: '/company_History',
			name: 'company_History',
			component(resolve) {
				require(['../pages/web/company/company_History'], resolve)
			}
		},
		{
			path: '/company_Honor',
			name: 'company_Honor',
			component(resolve) {
				require(['../pages/web/company/company_Honor'], resolve)
			}
		},
		{
			path: '/company_Culture',
			name: 'company_Culture',
			component(resolve) {
				require(['../pages/web/company/company_Culture.vue'], resolve)
			}
		},
		{
			path: '/company_Introduction',
			name: 'company_Introduction',
			component(resolve) {
				require(['../pages/web/company/company_Introduction.vue'], resolve)
			}
		},
		
		{
	path: '/Servezhengce',
			name: 'Servezhengce',
			component(resolve) {
				require(['../pages/web/serve/Servezhengce'], resolve)
			}
		},
		{
		path: '/Servegonggao',
				name: 'Servegonggao',
				component(resolve) {
					require(['../pages/web/serve/Servegonggao'], resolve)
				}
			},
			{
			path: '/detail',
			name: 'detail',
			component(resolve) {
				require(['../pages/web/Detail.vue'], resolve)
			}
		},
		{
          path: '/Servejinka',
				name: 'Servejinka',
				component(resolve) {
					require(['../pages/web/serve/Servejinka'], resolve)
				}
			},
		{
			path: '/product',
			name: 'product',
			component(resolve) {
				require(['../pages/web/Product.vue'], resolve)
			}
		},
		{
			path: '/Product_list.vue',
			name: 'Product_list.vue',
			component(resolve) {
				require(['../pages/web/Product_list.vue'], resolve)
			}
		},
		{
			path: '/Serve',
			name: 'Serve',
			component(resolve) {
				require(['../pages/web/serve/Serve'], resolve)
			}
		},
		{
			path: '/Servewangdian',
			name: 'Servewangdian',
			component(resolve) {
				require(['../pages/web/serve/Servewangdian'], resolve)
			}
		},
		{
			path: '/Servewenti',
			name: 'Servewenti',
			component(resolve) {
				require(['../pages/web/serve/Servewenti'], resolve)
			}
		},
		{
			path: '/Servelianxi',
			name: 'Servelianxi',
			component(resolve) {
				require(['../pages/web/serve/Servelianxi'], resolve)
			}
		},
		{
			path: '/Serveshangwuserve',
			name: 'Serveshangwuserve',
			component(resolve) {
				require(['../pages/web/serve/Serveshangwuserve'], resolve)
			}
		},
		{
			path: '/Servezhineng',
			name: 'Servezhineng',
			component(resolve) {
				require(['../pages/web/serve/Servezhineng'], resolve)
			}
		},
		{
			path: '/Servezhuanmai',
			name: 'Servezhuanmai',
			component(resolve) {
				require(['../pages/web/serve/Servezhuanmai'], resolve)
			}
		},
		{
			path: '/Serveliuyan',
			name: 'Serveliuyan',
			component(resolve) {
				require(['../pages/web/serve/Serveliuyan'], resolve)
			}
		},
		

	],

	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
