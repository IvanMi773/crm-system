import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'materialize-css/dist/js/materialize';
import dateFilter from '@/filters/DateFilter';
import currencyFilter from '@/filters/CurrencyFilter';
import MessagePlugin from '@/utils/Message.plugin';
import Loader from '@/components/app/Loader'
import tooltip from '@/directives/tooltip.directive'
import Paginate from 'vuejs-paginate'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(MessagePlugin);

Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);

Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

Vue.directive('tooltip', tooltip)

const firebaseConfig = {
	apiKey: 'AIzaSyDgJwnH5oznYv7zcXLEMJXJWE6-eyQcq5w',
	authDomain: 'crm-vue-23aff.firebaseapp.com',
	databaseURL: 'https://crm-vue-23aff.firebaseio.com',
	projectId: 'crm-vue-23aff',
	storageBucket: 'crm-vue-23aff.appspot.com',
	messagingSenderId: '256056298510',
	appId: '1:256056298510:web:34d2654fb6c9070570c05f',
	measurementId: 'G-XY171127DM',
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App),
		}).$mount('#app');
	}
});
