<script setup>
import { useRouter } from 'vue-router';
import supabase from "../../supbase"
import { ref } from 'vue';

const router = useRouter();
const userInputs = ref({ email: '', password: '' });
const validations = ref({ error: '', raised: false });



async function login() {
	try {
		let { data, error } = await supabase.auth.signUp({
			email: userInputs.value.email,
			password: userInputs.value.password,
		});
		console.log(data);
	} catch (error) {
		console.log(error);
	} finally {
		userInputs.value.email = '';
		userInputs.value.password = '';
		router.push({ name: 'landing-page' });
	}
}
</script>
<template>
	<v-sheet class="rounded-0" width="400" height="700">
		<h1 class="mb-2">Login</h1>
		<v-form @submit.prevent="login">
			<v-text-field
				label="Email"
				clearable
				v-model="userInputs.email"
				type="email"
				required
			/>
			<v-text-field
				label="Password"
				type="password"
				clearable
				v-model="userInputs.password"
			/>

			<v-btn-group>
				<v-btn class="bg-red-accent-3" variant="outlined" type="reset"
					>Reset</v-btn
				>
				<v-btn class="bg-green-accent-1" variant="outlined" type="submit"
					>Login</v-btn
				>
			</v-btn-group>

			<div>{{ userInputs }}</div>
		</v-form>

		<div>
			<span>Don't have account?:</span>
			<router-link to="/register">Create Account</router-link>
		</div>
	</v-sheet>

	<v-snackbar
		y="top"
		:timeout="2000"
		color="blue-grey"
		rounded="pill"
		v-model="validations.raised"
	>
		Error
	</v-snackbar>
</template>

<style></style>
