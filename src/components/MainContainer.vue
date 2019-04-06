<template>
    <div id="main-wrapper">
        <el-container>
            <el-header>
                <Header :initialLang=initialLang>
                    <Navigation />
                </Header>
            </el-header>
            <router-view />      
            <el-footer>
                <Footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Footer from './Footer.vue'
    import Header from './Header.vue'
    import Navigation from './Navigation.vue'

    export default  {
        components: {
            Footer,
            Header,
            Navigation,
        },
        props: [
            'initialLang',
        ],
    }
</script>

<style lang="scss">
    body {
        font-family: 'Didact Gothic', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Amatic SC', italic;

    }
</style>