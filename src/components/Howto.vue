<template>
    <div>
        <h3>How to</h3>
        <el-container>
            <el-aside width="200px">
                <LeftSidebar />
            </el-aside>
            <el-main>
                
            </el-main>
            <el-aside width="200px">
                <RightSidebar />
            </el-aside>  
        </el-container>
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
        name: 'Howto',
    }
</script>

<style scoped>

</style>