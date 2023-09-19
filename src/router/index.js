'use strict';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		name: 'home',
		path: '/',
		component: () => import('@/components/HelloWorld.vue'),
	},
	{
		name: 'auth',
		path: '/auth',
		redirect: '/login',
		meta: { requiresAuth: true },
		component: () => import('@/layouts/AuthLayout.vue'),
		children: [
			{
				name: 'login',
				path: '/login',
				component: () => import('@/pages/auth/LoginPage.vue'),
				meta: { requiresAuth: true },
			},
			{
				name: 'register',
				path: '/register',
				component: () => import('@/pages/auth/RegisterPage.vue'),
				meta: { requiresAuth: true },
			},
		],
	},
	{
		name: 'landing-page',
		path: '/landing',
		component: () => import('@/pages/LandingPage.vue'),
		meta: { requiresAuth: true },
	},
	{
		name: 'user-info',
		path: '/user',
		component: () => import('@/pages/UserPage.vue'),
		meta: { requiresAuth: true },
	},
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
