import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'
import * as event from '@/store/modules/event'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: ['nature', 'animal welfare', 'housing', 'education', 'community', 'food'],
    },
    modules: {
        user,
        event
    }
})
//TODO Always put Mutations in actions

