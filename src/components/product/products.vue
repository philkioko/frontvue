<template>
	<div class="row">
	<my-product 
		v-for = "product in products"
		@delete-Product = "deleteProduct(product)"
		:authenticatedUser = "authenticatedUser"
		:product = "product">
	</my-product>
  </div>
</template>

<script>
import Product from "./product.vue"
import swal from "sweetalert2"

export default {
	data () {
 	return {
 		products: []
 		
 	}
 },
 components: {
		"my-product" : Product
  },

  computed: {
  	authenticatedUser () {
  		return this.$auth.getAuthenticatedUser()
  	}
  },

 created () {
 	this.$http.get('api/products')
 	 .then(response => {
 	 	this.products = response.body;
 	 })
 },

	methods: {
		deleteProduct (product) {
			swal({
			  title: 'Are you sure?',
			  text: "You won't be able to recover this product!",
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, delete it!'
			}).then(function () {
				this.$http.post("api/deleteProduct/" + product.id)
				 .then(response => {
				 	let index = this.products.indexOf(product)
			        this.products.splice(index, 1)
				 	swal(
					    'Deleted!',
					    'Your product has been deleted.',
					    'success'
					  ),
				 	this.$router.push('/feed')
				 })
			  
			}.bind(this)
		)
		} ///
	}
}
	
</script>
<style>
	
</style>
