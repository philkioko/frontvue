<template>
<div class="row">
 <Navbar></Navbar>
 <hr>
   <div class="col-md-6 col-md-offset-3">
   <form class="form-horizontal">
      <div class="form-group">
    <label for="inputFirstname" class="col-sm-2 control-label">Firstname</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputFirstname" placeholder="Firstname" v-model="Firstname">
    </div>
  </div>

  <div class="form-group">
    <label for="inputLastFirstname" class="col-sm-2 control-label">Last Firstname</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputLastFirstname" placeholder="Last Firstname" v-model="LastFirstname">
    </div>
  </div>

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
      <button @click="register" type="submit" class="btn btn-default">Register</button>
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
  data(){
    return {
      Firstname:  '',
      LastFirstname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
        var data ={
        Firstname:this.Firstname,
        LastFirstname:this.LastFirstname,
        email:this.email,
        password:this.password
        }
      this.$http.post('api/register', data)
       .then(function(response){
        console.log(response) 
       })
    }
  }
}
  
</script>

<style>
  
</style>