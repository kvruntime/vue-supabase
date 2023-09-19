<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { useRouter } from 'vue-router';
import { useCurrentUser } from 'vuefire';
import { onBeforeMount } from 'vue';

const user = useCurrentUser();
const router = useRouter();
</script>

<template>
	<div>
		<!-- <h2>Landing page</h2>
		<dir>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
				molestias expedita consequatur dignissimos laboriosam recusandae ea in
				velit delectus omnis animi perspiciatis labore cum culpa corporis
				tempora sequi soluta numquam?
			</p>
		</dir> -->
		<v-card max-width="500">
			<v-card-title>Landing Page</v-card-title>
			<v-card-subtitle
				>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam nobis
				nam.</v-card-subtitle
			>
			<v-card-text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias
				aperiam, excepturi officia voluptates quas dolorum minus quidem
				molestiae possimus dolor tenetur amet culpa ab totam. Fugiat quidem
				dignissimos accusamus.
				<v-card-item>
					<v-img
						aspect-ratio="16/9"
						width="500"
						cover
						alt="image description"
						src="https://cdn.pixabay.com/photo/2023/09/12/13/20/autumn-tree-8248822_1280.png"
					></v-img>
				</v-card-item>
			</v-card-text>
			<v-card-actions>
				<!-- <v-btn-group>
					<v-btn>BackTo</v-btn>
					<v-btn>GoTo</v-btn>
				</v-btn-group> -->
			</v-card-actions>
		</v-card>
	</div>
</template>

<style></style>
