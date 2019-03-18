<template>
    <div class="home">
        <el-main>
            <!-- TODO try to fix it with watcher in child (wheel) -->
            <Main v-if="categories.length > 0" class="main-container">
                <el-row>
                    <el-col :xs="24" :lg="10">
                        <Wheel :categories="categories" />
                    </el-col>
                    <el-col :xs="24" :lg="14">
                        <Description :categories="categories" />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <ActionBtn type="add" label="hello" icon='plus' />
                    </el-col>
                </el-row>
            </Main>
        </el-main>
    </div>
</template>

<script lang="ts">
    import ActionBtn from './ActionBtn.vue'
    import Description from './Description.vue'
    import Main from './Main.vue'
    import Wheel from './Wheel.vue'

    export default {
        components: {
            ActionBtn,
            Description,
            Main,
            Wheel,
        },
        computed: {
            categories() {
                return this.$store.state.categories
            }
        },
        name: 'Home',
    }
</script>

<style lang="scss" scoped>
    .main-container {
        
    }
</style>
