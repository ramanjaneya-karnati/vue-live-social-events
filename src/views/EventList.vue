<template>
    <div>
        <h1>Events List</h1>
        <event-card v-for="event in events" :key="event.id" :event="event"></event-card>
    </div>
</template>

<script>
    import EventCard from '@/components/EventCard.vue'
    import EventService from '@/services/EventService' // <--- brings in the axios library
    export default {
        name: "EventList",
        components:{
            'event-card': EventCard
        },
        data(){
            return{
                events : []
            }
        },
        created() {
            EventService.getEvents()
                .then(response =>{
                    this.events = response.data
                })
                .catch(error =>{
                    console.log("There was an error", error)
                })
        }
    }
</script>

<style scoped>

</style>
