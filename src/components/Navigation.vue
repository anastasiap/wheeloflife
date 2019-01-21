<template>
    <div class="main-nav">
        <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect" :router=true>
            <el-menu-item v-for="(item, index) in routes" :key="index" :route="item.path" :index="index">{{ item.name }}</el-menu-item>  
        </el-menu>
    </div>
</template>

<script lang="ts">
    import { routes } from '../configs/app.config'

    export default {
        data() {
            return {
                routes: routes,
                msg: 'main container some',
                activeIndex: '0',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log('handlesubmit key', key)
                // console.log('handlesubmit keyPath', keyPath)
                // this.$router.push(keyPath)
                // this.activeIndex = key
            }
        },
        name: 'Navigation',
    }
</script>

<style lang="scss" scoped>
    .main-nav {
        width: 100%;
    }
</style>
