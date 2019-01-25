<template>
    <div class="home">
        <el-main>
            <Main class="main-container">
                <el-row>
                    <el-col :span="12">
                        <Wheel/>
                    </el-col>
                    <el-col :span="12">
                        <Description/>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <ActionBtn type="add" label="$t('hello')" icon='plus' />
                    </el-col>
                </el-row>
            </Main>
        </el-main>
    </div>
</template>

<script lang="ts">
    import Description from './Description.vue'
    import Main from './Main.vue'
    import Wheel from './Wheel.vue'

    export default {
        components: {
            Description,
            Main,
            Wheel,
        },
        name: 'Home',
    }
</script>

<style lang="scss" scoped>
    .main-container {
        
    }
</style>
