<template>
    <div class="home">
        <MainButtons></MainButtons>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from 'HelloWorld.vue'; // @ is an alias to /src
    import MainButtons from './MainButtons.vue'; // @ is an alias to /src

    export default {
        name: 'MainPage',
        components: { MainButtons }
    }
</script>
