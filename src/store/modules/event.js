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
    createEvent({commit, dispatch}, event) {
        EventService.postEvent(event).then(() => {
            commit('ADD_EVENT', event);
            const notification = {
                type: 'success',
                message: 'Your event has been created!'
            }
            dispatch('notification/add', notification, {root: true})
        })
            .catch(error =>{
                const notification = {
                    type: 'error',
                    message: 'There was a problem creating  event: ' + error.message
                }
                dispatch('notification/add', notification, {root: true})
            })
    },
    fetchEvents({commit, dispatch}) {
        EventService.getEvents()
            .then(response => {
                commit('GET_EVENTS', response.data)
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching events: ' + error.message
                }
                dispatch('notification/add', notification, {root: true})
            })
    },
    fetchEvent({commit, getters, dispatch}, id) {
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
                    const notification = {
                        type: 'error',
                        message: 'There was a problem fetching event: ' + error.message
                    }
                    dispatch('notification/add', notification, {root: true})
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
