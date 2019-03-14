<template>
    <div id="main-wrapper">
        <el-container>
            <!-- <h4>{{ msg }}</h4>
            <p>{{ count }}</p>
            <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </p> -->
            <el-header>
                <Header :initialLang=initialLang>
                    <Navigation />
                </Header>
            </el-header>
            <router-view />      
            <el-footer>
                <PromoFooter />
                <Footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
    import Content from './Content.vue'
    import Footer from './Footer.vue'
    import Header from './Header.vue'
    import Navigation from './Navigation.vue'
    import PromoFooter from './PromoFooter.vue'
    import Vue from 'vue'

    const MainContainer = Vue.extend({
        components: {
            Content,
            Footer,
            Header,
            Navigation,
            PromoFooter,
        },
        props: [
            'initialLang'
        ],
        methods: {
            sum: function(a: number, b: number) {
                return a + b;
            }
        }
    })

    export default MainContainer
</script>

<style lang="scss">
    body {
        font-family: 'Didact Gothic', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Amatic SC', italic;

    }
</style>

