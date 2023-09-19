<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';



</script>
<template>
	<v-container>
		<v-row>
			<v-spacer />
			<v-col>
				<RouterView />
			</v-col>
			<v-spacer />
		</v-row>
	</v-container>
</template>

<style></style>
