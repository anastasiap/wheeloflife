<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->

        <MainButtons></MainButtons>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import MainButtons from '../components/MainButtons.vue'; // @ is an alias to /src

    export default {
        name: 'MainPage',
        components: { MainButtons }
    }
</script>
