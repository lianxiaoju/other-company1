import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import main from '@/pages/main/main'
import mine from '@/pages/main/childs/mine'
import repayment from '@/pages/main/childs/repayment'
import home from '@/pages/main/childs/home'
import approve from '@/pages/approve/approve'

import cardApprove from '@/pages/approve/childs/cardApprove'
import photoApprove from '@/pages/approve/childs/photoApprove'
import phoneApprove from '@/pages/approve/childs/phoneApprove'
import infoApprove from '@/pages/approve/childs/infoApprove'


import login from '@/pages/login/login'


Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: App,
			redirect: '/main/home',
			children: [{
					path: '/main',
					name: 'main',
					component: main,
					children: [{
						path: 'home',
						name: 'home',
						title: 'Dream Monster',
						component: home
					}, {
						path: 'mine',
						name: 'mine',
						title: 'Dream Monster',
						component: mine
					}, {
						path: 'repayment',
						name: 'repayment',
						title: 'Dream Monster',
						component: repayment
					}]
				},
				{
					path: '/approve',
					name: 'approve',
					title: '认证资料',
					component: approve,
					//					children:[]
				}, {
					path: '/card',
					name: 'cardApprove',
					title: 'Dream Monster',
					component: cardApprove
				}, {
					path: '/photo',
					name: 'photoApprove',
					title: 'Dream Monster',
					component: photoApprove
				}, {
					path: '/phone',
					name: 'phoneApprove',
					title: 'Dream Monster',
					component: phoneApprove
				}, {
					path: '/info',
					name: 'infoApprove',
					title: 'Dream Monster',
					component: infoApprove
				}, {
					path: '/login',
					name: 'login',
					title: 'Dream Monster',
					component: login
				},

			]
		},

	]
})