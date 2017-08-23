
<template>

 <div class="row">
 <Navbar></Navbar>
 <hr>
   <div class="col-md-6 col-md-offset-3">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="email">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Remember me
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button @click="login" type="submit" class="btn btn-default">Login</button>
          </div>
  </div>
</form>
   </div>
 </div>

	
</template>

<script>
import Navbar from "../Navbar.vue" 
	export default{
    components:{
    'Navbar' : Navbar,
  },
  data (){
    return {
      email: '',
      password: ''
    }
  },
  
  methods: {
    login(){
      var data= {
        client_id: 2,
        client_secret: '8pc5P0QVGQZeTsGFlVNzx474trn8b540tPb3q0wy',
        grant_type: 'password',
        username:this.email,
        password:this.password
      }
      this.$http.post("oauth/token", data)
      .then(response=>{
        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
        this.$router.push('/backend')
                                              
        //  var role_id="2";
        // this.$auth.setRoles(role_id)

        // var Roleid       =localStorage.getItem('roleid');
        // if (Roleid=='1') {
        //   console.log("welcome admin");
        //      //this.$router.push('/backend')
        //    }else if (Roleid=="2") {
        //     console.log("welcome client");
        //    }

        //insert roles in local storage by gettting roles
        // this.$http.get('api/userRoles')
        //  .then(response => {
        //   //insert roles in localstorage//
        //   this.$auth.setRoles(response.body.role_id)

        //  })
      })
    
    }
  }
}
</script>

<style>
	
</style>