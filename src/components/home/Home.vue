<template>
    <div class="home container animated fadeIn delay-1s" :key="homeWheelKey">
        <el-main v-if="categories.length > 0" id="main-container">
            <el-row align="middle">
                <el-col :xs="24" :sm="24" :md="24" :lg="10">
                    <Wheel :categories="categories" :key="wheelKey" />
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="14">
                    <Description :categories="categories" :key="descriptionKey" />
                </el-col>
            </el-row>
        </el-main>
        <el-row>
            <el-col :span="24">
                <ActionBtn />
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { ICategory } from '@/types/category'
import Vue from 'vue'
import ActionBtn from './ActionBtn.vue'
import Description from './Description.vue'
import Wheel from './Wheel.vue'

export default Vue.extend({
    components: {
        ActionBtn,
        Description,
        Wheel,
    },
    computed: {
        categories(): ICategory { return this.$store.state.categories },
        wheelKey(): number { return this.$store.state.wheelKey },
        descriptionKey(): number { return this.$store.state.descriptionKey },
        homeWheelKey(): number { return this.$store.state.homeWheelKey },
    },
    name: 'Home',
})
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1440px;
        margin: 0 auto;
    }

    .el-main {
        overflow: inherit;
    }

    .is-align-middle {
        display: flex;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 60px;
    }

    @media (max-width: 768px) { 
        .is-align-middle {
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
</style>
