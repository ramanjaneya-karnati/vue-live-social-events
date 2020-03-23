import EventService from '@/services/EventService'

export const namespaced = true

export const state = {
    events: [],
    event: {}
}
export const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event)
    },
    GET_EVENTS(state, events) {
        state.events = events;
    },
    GET_EVENT(state, event) {
        state.event = event
    }
}
export const actions = {
    createEvent({commit}, event) {
        EventService.postEvent(event).then(() => {
            commit('ADD_EVENT', event);
        })
    },
    fetchEvents({commit}) {
        EventService.getEvents()
            .then(response => {
                commit('GET_EVENTS', response.data)
            })
            .catch(error => {
                console.log("There was an error", error.response);
            })
    },
    fetchEvent({commit, getters}, id) {
        const event = getters.getEventById(id);
        if (event) {
            commit('GET_EVENT', event)
        } else {
            EventService.getEvent(id)
                .then(response => {
                    //this.event = response.data
                    commit('GET_EVENT', response.data)
                })
                .catch(error => {
                    console.log("There was an error", error.response)
                })
        }
    }
}

export const getters = {
    getEventById: state => id => {
        return state.events.find(event => event.id === id)
    }
}

//TODO To access any module state actions need use rootScope
//with dispatch scope we can dispatch actions anywhere
