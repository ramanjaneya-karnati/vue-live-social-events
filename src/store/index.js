import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'
import * as event from '@/store/modules/event'
import * as notification from '@/store/modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: ['nature', 'animal welfare', 'housing', 'education', 'community', 'food'],
    },
    modules: {
        user,
        event,
        notification
    }
})
//TODO Always put Mutations in actions

