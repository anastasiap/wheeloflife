<template>
    <el-row class="footer">
        <el-col :span="12">
            <div class="footer__contacts">Contact me</div>
        </el-col>
        <el-col :span="12">
            <div class="footer__link">
                <a href="https://thewebbird.me">thewebbird.me</a>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style lang="scss" scoped>
    .footer {
        background-color: #dde0ff;
        padding: 15px; 
        margin: -20px;
        
        &__contacts {
            text-align: left;
        }
        
        &__link {
            text-align: right;
        }
    }
</style>