import Vue from 'vue'
import Vuex from 'vuex'
import publicStore from './publicStore.js'
import index from './pageModules/index.js'

Vue.use(Vuex)

let store = new Vuex.Store({
	modules: {
		publicStore,
		index,
	}
})


export default store