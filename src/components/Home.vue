<template>
    <div class="home container">
        <el-main>
            <!-- TODO try to fix it with watcher in child (wheel) -->
            <Main v-if="categories.length > 0" class="main-container" >
                <el-row align="middle">
                    <el-col :xs="24" :lg="10">
                        <Wheel :categories="categories" :key="wheelKey" />
                    </el-col>
                    <el-col :xs="24" :lg="14">
                        <Description :categories="categories" :key="descriptionKey" />
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <ActionBtn />
                    </el-col>
                </el-row>
            </Main>
        </el-main>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { ICategory } from '../configs/app.config'
    import ActionBtn from './ActionBtn.vue'
    import Description from './Description.vue'
    import Main from './Main.vue'
    import Wheel from './Wheel.vue'
    
    export default Vue.extend({
        components: {
            ActionBtn,
            Description,
            Main,
            Wheel,
        },
        computed: {
            categories(): ICategory {
                return this.$store.state.categories
            },
            wheelKey(): void {
                return this.$store.state.wheelKey
            },
            descriptionKey(): void {
                return this.$store.state.descriptionKey
            },
        },
        name: 'Home',
    })
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1440px;
        margin: 0 auto;
    }

    .is-align-middle {
        display: flex;
        align-items: center;
        margin-bottom: 80px;
        margin-top: 30px;
    }
</style>
