import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)
const router =new VueRouter({
	routes:[
		{
			path: "/",
		    component: require('./components/authentication/Login.vue'),
		    meta: {
		    	forVisitors: true
		    }
		},
		{
			path: "/register",
		    component: require('./components/authentication/Register.vue'),
		    meta: {
		    	forVisitors: true
		    }
		},
		{
			path: "/backend",
		    component: require('./components/backend/backend.vue'),
		    meta: {
		    	forAuth: true   
		    }
		},

		{
			path: "/feed",
			component: require('./components/Feed.vue'),
			meta:{
				forAuth: true
			}
		},
		
		{
			path: '/products/create',
			component: require('./components/product/Create.vue'),
			meta: {
				forAuth: true
			}
		},
		{
			path: '/products/:product/Edit',
			component: require('./components/product/Edit.vue'),
			meta: {
				forAuth: true
			}
		}
	],
	//mode: 'history',
	linkActiveClass: 'active'

})

export default router