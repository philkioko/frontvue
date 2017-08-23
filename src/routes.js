import Vue from "vue"
import VueRouter from "vue-router"

import Login from "./components/authentication/Login.vue"
import Register from "./components/authentication/Register.vue"
import Backend from "./components/backend/backend.vue"

Vue.use(VueRouter)
const router =new VueRouter({
	routes:[
		{
			path: "/login",
		    component: Login,
		    meta: {
		    	forVisitors: true
		    }
		},
		{
			path: "/register",
		    component: Register,
		    meta: {
		    	forVisitors: true
		    }
		},
		{
			path: "/backend",
		    component: Backend,
		    meta: {
		    	forAuth: true   
		    }
		}

		
	]
})

export default router