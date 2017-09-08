export default function(Vue) {
    Vue.auth = {
        setToken(token,expiration){
            localStorage.setItem('AppName.auth.token', token)
            localStorage.setItem('expiration', expiration) 
        },

        getToken () {
            var token = localStorage.getItem('AppName.auth.token');
            var expiration = localStorage.getItem('expiration');

            if (!token || !expiration)
                return null;

            if (Date.now() < parseInt(expiration)) {
                return token;
            }

            this.destroyToken();
            return null;
        },

        destroyToken() {
            localStorage.removeItem('AppName.auth.token');
            localStorage.removeItem('expiration');
        },

        setRoles(role_id){
            localStorage.setItem('roleid', role_id);
        },

        isAuthenticated(){
            if(this.getToken()) return true;

            return false;
        }
    }
 
    Object.defineProperties(Vue.prototype,{
        $auth: {
            get () {
                return Vue.auth;
            }
        }
    });
}
