import Vue from 'vue'
import App from './App.vue'
import Router from "./routes.js"
import VeeValidate from 'vee-validate'
import VueResource from "vue-resource"
import Auth from "./packages/auth/Auth.js" 
import swal from "sweetalert2"

Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate)

Vue.http.options.root = "http://127.0.0.1:8000"

Vue.http.interceptors.push((request, next) => {
    var token = localStorage.getItem('AppName.auth.token');

    if (token !== null && token !== 'undefined') {
        request.headers.set('Authorization', 'Bearer ' + token);
    }

    next((response) => {
        if (response.body.access_token) {
            localStorage.setItem('AppName.auth.token', response.body.access_token);
            localStorage.setItem('expiration', response.body.expires_in + Date.now());
        } else if (response.status == 404 ) {
             swal(response.status.toString(), response.body.error, "error");
         }else if (response.status == 500 ) {
         	swal(response.status.toString(), "Sorry we are experiencing problems in our servers !", "error");
         }
    });
});
//Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Router.beforeEach(
	(to,from,next) => {
		if (to.matched.some(record => record.meta.forVisitors)) {
			if (Vue.auth.isAuthenticated()) {
				next({ 
					path: '/backend'
				})
			}else next()
		}else if (to.matched.some(record => record.meta.forAuth)) {
			if (! Vue.auth.isAuthenticated()) {
				next({
					path: '/'
				})
			}else next()
		}else next() 
	}
)

new Vue({
  el: '#app',
  render: h => h(App),  
  router:Router
})