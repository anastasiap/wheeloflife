<template>
    <div id="main-wrapper">
        <h1>Hello</h1>
        <Navigation />
    </div>
</template>

<script lang="ts">
import Navigation from './Navigation.vue'

export default {
    components: {
        Navigation,
    },
    data() {
        return {
            msg: 'main container some',
        }
    },
    name: 'MainContainer',
}

</script>
