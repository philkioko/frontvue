<template>
	<div class="col-md-4">
	<div class="thumbnail">
		<img :src="'http://localhost:8000/images/' + product.image" alt="">
		<div class="caption">
		    <h5>{{"user id"}} {{product.user_id}}</h5>
			<h3>{{"product name"}} {{product.name}} </h3>
			<p>product price {{""}} {{"Ksh"}} {{product.price}}</p>
			<hr>
			<p>
				<a href="" class="btn btn-default">Wish list</a>
				<a href="" class="btn btn-success">Buy</a>
				<a  class="btn btn-danger" role="button" 
				v-if ="product.user_id == authenticatedUser.id"
				@click="$emit('delete-Product')">
					delete
				</a>
				<router-link :to = " '/products/' + product.id + '/Edit' " class="btn btn-primary">
					Edit
				</router-link>
			</p>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	props: ['product','authenticatedUser'],

}
	
</script>

