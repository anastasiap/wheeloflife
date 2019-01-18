<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/howto">How to</router-link> |
        <router-link to="/info">Info</router-link> |
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                msg: 'main container some',
            }
        },
        methods: {
            hello() {
                return 'hello'
            },
        },
        name: 'Navigation',
    }
</script>
