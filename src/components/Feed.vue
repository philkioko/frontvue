<template>
	<div>
	<Navbar></Navbar>
	<h2>Feed</h2>
	<br>
	<my-product></my-product>
	</div>
</template>
<script>
import Navbar from './Navbar.vue'
import Products from "./product/products.vue"
export default {
	components: {
		"my-product" : Products,
		"Navbar"     : Navbar
	}
}
</script>
<style>
	
</style>
