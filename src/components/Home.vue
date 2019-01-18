<template>
    <div class="home">
        <el-main>
            <Main />
        </el-main>
    </div>
</template>

<script lang="ts">
    import Main from './Main.vue'

    export default {
        components: {
            Main,
        },
        name: 'Home',
    }
</script>
