
<template>
<div>
	<h1>welcome to backend page</h1>
		<li v-for="name in Names">
			{{ name.first_name }} | {{ name.last_name }}
		</li>
	<ul>
		
	</ul>
</div>
	
	
	
</template>

<script>
	export default {
		data () {
			return {
				Names: []
			}
		},

		created () {
			this.$http.get('api/user')
			.then(response => {
				this.Names=response.body
			})
		}
	}
</script>