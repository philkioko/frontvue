<template>
  <div class="row">
  <Navbar></Navbar>
  <hr><br>
  	<div class="col-md-6 col-md-offset-2">
  		<div class="panel pane-default">
  			<div class="panel-body">
  				<form @submit.prevent="Create">
          
          <div class="form-group">
            <label for="Name">Name</label>
            <input  type="file" class="form-control"
            @change="imageChanged">
          </div>

            <div class="form-group">
            <label for="Name">Name</label>
            <input name="name" type="text" class="form-control" autofocus="true" 
            v-validate="'required'"
            v-model="product.name">
           
            <span 
            v-show="errors.has('name')">
             <div class="help-block alert alert-danger">
            {{ errors.first('name')}}
             </div>
            </span>
          </div>

          <div class="form-group">
            <label for="price">Price</label>
            <input name="price" type="number" class="form-control" 
            v-validate = "'max_value:50|min_value:1|required'"
            v-model="product.price">
            <span 
            v-show="errors.has('price')">
             <div class="help-block alert alert-danger">
            {{ errors.first('price')}}
             </div>
            </span>
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" class="form-control"
            v-validate = "'required'" 
            v-model="product.description"></textarea>
            <span 
            v-show="errors.has('description')">
             <div class="help-block alert alert-danger">
            {{ errors.first('description')}}
             </div>
            </span>
          </div>

          <input type="submit" class="btn btn-success pull-right"
         value="Create">    
          </form>
  			</div>
  		</div>
  	</div>
  </div>
</template>
<script>
	import Navbar from '../Navbar.vue'
	export default {
		data () {
			return {
				product : {
					name: "",
					price: 0,
					description: "",
          image: ''
				}
			}
		},
		methods: {
      imageChanged (e) {

          var fileReader = new FileReader()
          fileReader.readAsDataURL(e.target.files[0])
          fileReader.onload = (e) => {
            this.product.image = e.target.result
          }
      },

			Create () {
        this.$validator.validateAll().then( (result) => {
          if (result) { 
              this.$http.post('api/store', this.product)
                .then(response => {
                 this.$router.push('/feed');
                });
          }
        }﻿);
			}
		},

		components: {
			"Navbar" : Navbar
		}
	}
</script>
<style></style>