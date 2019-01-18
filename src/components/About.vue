<template>
    <div>
        <h3>About</h3>
        <LeftSidebar />
        <Main />
        <RightSidebar /> 
    </div>
</template>

<script>
    import LeftSidebar from './LeftSidebar.vue'
    import Main from './Main.vue'
    import RightSidebar from './RightSidebar.vue'

    export default {
        components: {
            LeftSidebar,
            Main,
            RightSidebar,
        },
        name: 'About',
    }
</script>

<style scoped>

</style>