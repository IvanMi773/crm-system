import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { layout: 'main' },
		component: () => import('../views/Home.vue'),
	},

	{
		path: '/login',
		name: 'login',
		meta: { layout: 'empty' },
		component: () => import('../views/Login.vue'),
	},

	{
		path: '/register',
		name: 'register',
		meta: { layout: 'empty' },
		component: () => import('../views/Register.vue'),
	},

	{
		path: '/categories',
		name: 'categories',
		component: () => import('../views/Categories.vue'),
		meta: { layout: 'main' },
	},

	{
		path: '/detail',
		name: 'detail',
		component: () => import('../views/Detail.vue'),
		meta: { layout: 'main' },
	},

	{
		path: '/history',
		name: 'history',
		component: () => import('../views/History.vue'),
		meta: { layout: 'main' },
	},

	{
		path: '/planning',
		name: 'planning',
		component: () => import('../views/Planning.vue'),
		meta: { layout: 'main' },
	},

	{
		path: '/profile',
		name: 'profile',
		component: () => import('../views/Profile.vue'),
		meta: { layout: 'main' },
	},

	{
		path: '/record',
		name: 'record',
		component: () => import('../views/Record.vue'),
		meta: { layout: 'main' },
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
