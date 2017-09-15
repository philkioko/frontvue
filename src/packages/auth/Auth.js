export default function(Vue){
 let authenticatedUser = {}

 Vue.auth = {

 setToken(token,expiration){
     localStorage.setItem('AppName.auth.token', token)
     localStorage.setItem('expiration', expiration)  
 },

 getToken () {
  var token       =localStorage.getItem('AppName.auth.token');
  var expiration  =localStorage.getItem('expiration');
  if (!token || !expiration)
  	return null;

  if (Date.now() > parseInt(expiration)) {
  	this.destroyToken();
  	return null;
  }else{
  	return token;
  }
 },
 setAuthenticatedUser (data) {
      authenticatedUser = data
   },

   getAuthenticatedUser () {
      return authenticatedUser
   },

 destroyToken() {
 	localStorage.removeItem('AppName.auth.token');
 	localStorage.removeItem('expiration');
 },

setRoles(role_id){
 	localStorage.setItem('roleid', role_id)
 },


 isAuthenticated(){
  	if(this.getToken())
  		return true
  	else
  		return false
  }
   
 }
 
 Object.defineProperties(Vue.prototype,{
 	$auth: {
 		get () {
 		return Vue.auth;
 	  }
 	}
 })
}