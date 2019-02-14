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
        ]
    })

    export default MainContainer
</script>

<style lang="scss">
    body {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>

