<template>
    <div id="app">
        <Navigation />
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Navigation from './components/Navigation.vue'
    import Category from './services/Category'
    import { ICategory } from './data/categories'

    export default {
        components: {
            Navigation,
        },
        created() {
            // this.loadDefaultCategories();
        },
        data() {
            return { // categories: this.$store.state.categories    
            }
        },
        methods: {
            // loadDefaultCategories(): any { // todo return a tuple wth types object
            //     // return all categories prepared for circle creation and manipulation
            //     // у меня есть массив со всеми категориями.
            //     // создай круг
            //     return this.categories.map((cat: ICategory) => {
            //        new Category(cat.name, cat.bgColor);
            //     });
            // },
        },
        name: 'App',
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
