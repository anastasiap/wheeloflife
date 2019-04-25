<template>
    <el-row class="footer">
        <el-col :span="24">
            <div class="footer__link">
                <a href="https://thewebbird.me">(c) thewebbird</a>
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
        &__contacts {
            text-align: left;
        }
        
        &__link {
            padding: 15px; 
            text-align: center;
            
            a {
                text-decoration: none;
                color: #353535; 

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>