<template>
    <div>
        <h3>Info</h3>
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
        name: 'Info',
    }
</script>

<style scoped>

</style>