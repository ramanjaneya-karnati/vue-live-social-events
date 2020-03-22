<template>
<h1>Hello Mr. {{username}}</h1>
</template>

<script>
    export default {
        name: "User",
        props: ["username"]
    }
</script>

<style scoped>

</style>
