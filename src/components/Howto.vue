<template>
    <div>
        <h3>How to</h3>
        <el-container>
            <el-aside width="200px">
                <LeftSidebar />
            </el-aside>
            <el-main>
                <Main />
            </el-main>
            <el-aside width="200px">
                <RightSidebar />
            </el-aside>  
        </el-container>
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
        name: 'Howto',
    }
</script>

<style scoped>

</style>