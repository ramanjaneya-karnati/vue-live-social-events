<template>
    <div>
        <h1>You lost in space!!</h1>
        <h2>Please return to home.
            <router-link :to="{name: 'event-list'}">Event List</router-link>
        </h2>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>

</style>
