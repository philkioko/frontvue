
<template>
<div>
<Navbar></Navbar>
<hr>
	<h1>welcome to backend page</h1>
		<li v-for="name in Names">
			{{ name.first_name }} | {{ name.last_name }}
		</li>
	<ul>
		
	</ul>
</div>
	
	
	
</template>

<script>
import Navbar from '../Navbar.vue'
	export default {
		data () {
			return {
				Names: []
			}
		},
		components: {
			"Navbar" : Navbar
		},

		created () {
			this.$http.get('api/users')
			.then(response => {
				this.Names=response.body
			}),
			this.setAuthenticatedUser()
		},
		methods: {
			setAuthenticatedUser () {
		      this.$http.get('api/user')
		      .then(response => {
		        this.$auth.setAuthenticatedUser(response.body);
		        console.log(this.$auth.getAuthenticatedUser());
		      });
		    }
		}
	}
</script>