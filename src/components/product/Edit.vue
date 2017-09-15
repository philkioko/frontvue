<template>
  <div class="row">
  <Navbar></Navbar>
  <hr><br>
  	<div class="col-md-6 col-md-offset-2">
  		<div class="panel pane-default">
  			<div class="panel-body">
  				<div class="form-group">
  					<label for="Name">Name</label>
  					<input type="text" class="form-control" 
  					v-model="product.name">
  				</div>

  				<div class="form-group">
  					<label for="price">Price</label>
  					<input type="number" class="form-control" 
  					v-model="product.price">
  				</div>

  				<div class="form-group">
  					<label for="description">Description</label>
  					<textarea class="form-control" 
  					v-model="product.description"></textarea>
  				</div>

  				<button class="btn btn-success pull-right"
  				@click = "update"
  				v-show="product.name && product.price && product.description">Update</button>
  			</div>
  		</div>
  	</div>
  </div>
</template>
<script>
	import Navbar from '../Navbar.vue'
  import swal from "sweetalert2"
	export default {
    created () {
      this.getProduct()
    },
		data () {
			 return {
        product: {}
       }
		},
		methods: {
      getProduct () {
        this.$http.get('api/products/' + this.$route.params.product)
         .then(response => {
          this.product = response.body
         })

      }, 
			update () {
				this.$http.post('api/productsupdate/' + this.$route.params.product, this.product)
				.then(response => {
          console.log(response)
          swal("Updated", "Your product has been updated !", "success")
					 
				});
			}
		},

		components: {
			"Navbar" : Navbar
		}
	}
</script>
<style></style>