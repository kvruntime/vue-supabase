import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import 'vuetify/dist/vuetify.min.css';
import router from './router';

const app = createApp(App);
app.use(createVuetify({ components })).use(router).mount('#app');
