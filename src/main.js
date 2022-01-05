/*
 * @Author       : Zero
 * @Date         : 2022-01-05 10:20:32
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-05 13:02:25
 * @FilePath     : /middle_school_kids_today/src/main.js
 */


import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.less'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')