<template>
    <header>
        <el-row>
             <el-col :xs="24" :lg="10">
                <div class="header-logo">
                    <h1>Wheel of Life: online quick tool </h1>  
                </div>
            </el-col>
            <el-col :xs="24" :lg="12">
                <slot></slot>
            </el-col>
            <el-col :xs="24" :lg="2">
                <div class="lang-switch">
                    <el-select v-model="locale">
                        <el-option
                        v-for="(lang, i) in langs"
                        :key="`Lang${i}`"
                        :label="lang"
                        :value="lang">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
        </el-row>
    </header>
</template>

<script>
    import { LANGUAGES } from '../configs/app.config'

    export default {
        data() {
            return {
                // todo create object with locales keys
                langs: LANGUAGES,
                locale: this.initialLang,
            }
        },
        name: 'Header',
        props: [
            'initialLang',
        ],
        watch: {
            locale(val) {
                this.$i18n.locale = val
                this.$store.dispatch('getData', this.$i18n.locale)
            },
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