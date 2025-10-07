import './styles.css'
import './animations.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@aws-amplify/ui-vue/styles.css';
import { configureAmplify } from '@/utils/configureAmplify.ts'

configureAmplify()

const app = createApp(App)

app.use(router)
app.mount('#app')
