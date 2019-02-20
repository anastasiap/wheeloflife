<template>
    <header>
        <el-row>
             <el-col :span="3">
                <div class="header-logo">
                    <img src="../assets/wil-logo.jpg" alt="WiL Logo">
                </div>
            </el-col>
            <el-col :span="19">
                <div class="nav-slot">
                    <slot></slot>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="lang-switch">
                    <select v-model="locale">
                        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
                    </select>
                </div>
            </el-col>
        </el-row>
        <p>{{ $t("hello") }}</p>
    </header>
</template>

<script>
    export default {
        data () {
            return { 
                // move array to config
                langs: [ 'ru', 'en' ],
                locale: this.initialLang
            }
        },
        name: 'Header',
        props: [ 
            'initialLang' 
        ],
        watch: {
            locale(val) {
                this.$i18n.locale = val
                this.$store.dispatch('getData', this.$i18n.locale)      
            }
        },
    }
</script>

<style lang="scss" scoped>
    .header-container {
        // .header-logo {
        
        // }

        // .nav-slot {
        
        // }
        
        // .lang-switch {
        
        // }
    }
</style>