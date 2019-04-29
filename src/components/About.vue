<template>
    <div>
        <h3>About</h3>
        <LeftSidebar />
        <RightSidebar /> 
    </div>
</template>

<script>
    import LeftSidebar from './LeftSidebar.vue'
    import RightSidebar from './RightSidebar.vue'

    export default {
        components: {
            LeftSidebar,
            RightSidebar,
        },
        name: 'About',
    }
</script>

<style scoped>

</style>