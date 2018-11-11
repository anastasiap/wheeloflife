<template>
    <div class="home">
        <Switcher />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Switcher from './Switcher.vue'; // @ is an alias to /src

    export default {
        name: 'Home',
        components: { Switcher }
    }
</script>
