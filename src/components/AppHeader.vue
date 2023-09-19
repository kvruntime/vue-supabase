<script setup>
import { useRouter } from 'vue-router';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signOut } from 'firebase/auth';

const router = useRouter();

const auth = useFirebaseAuth();
const user = useCurrentUser();

function register() {
	router.push({ name: 'register' });
	console.log('click');
}

async function disconnect() {
	try {
		await signOut(auth);
		router.push("/login")
	} catch (error) {
		console.error(error);
	} finally {
		console.log('ended..');
	}
}
</script>

<template>
	<div>
		<v-app-bar>
			<v-app-bar-title>
				<v-btn to="/">Vue+Firebase</v-btn>
			</v-app-bar-title>

			<v-card-actions>
				<v-btn-group>
					<!-- <v-btn @click="goToLogin">Login</v-btn> -->
					<v-btn v-if="!user?.email" to="/auth">Login</v-btn>
					<v-btn v-if="!user?.email" @click="register">Register</v-btn>
				</v-btn-group>
				<v-btn-group>
					<v-btn v-if="user?.email" to="/landing">Landing</v-btn>
					<v-btn v-if="user?.email" to="/user">{{
						user?.email.toLowerCase()
					}}</v-btn>
					<v-btn v-if="user?.email" @click="disconnect">Disconnet</v-btn>
				</v-btn-group>
			</v-card-actions>
		</v-app-bar>
	</div>
</template>

<style></style>
