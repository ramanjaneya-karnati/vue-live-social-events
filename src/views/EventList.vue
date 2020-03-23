<template>
    <div>
        <h1>Events for {{user.user.name}} </h1>
        <event-card v-for="event in event.events" :key="event.id" :event="event"></event-card>
    </div>
</template>

<script>
    import EventCard from '@/components/EventCard.vue'
    import {mapState} from 'vuex';
    export default {
        name: "EventList",
        components:{
            'event-card': EventCard
        },
        created() {
            this.$store.dispatch('event/fetchEvents')
        },
        computed: mapState(['event', 'user'])
    }
</script>

<style scoped>

</style>
