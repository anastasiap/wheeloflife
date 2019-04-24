<template>
    <el-row>
        <el-col :xs="24" :lg="10">
            <div class="c-header-logo">
                <h1>Wheel of Life: online quick tool </h1>  
            </div>
        </el-col>
        <el-col :xs="24" :lg="12">
            <slot></slot>
        </el-col>
        <el-col :xs="24" :lg="2">
            <div class="c-language-switcher">
                <el-select v-model="locale">
                    <el-option
                        v-for="(lang, i) in langs"
                        :key="`Lang${i}`"
                        :label="langMap[lang]"
                        :value="lang">
                    </el-option>
                </el-select>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import { LANGUAGES } from '../configs/app.config'
    import { mapLangKeys } from '../services/helpers'

    export default {
        data() {
            return {
                // todo create object with locales keys
                // todo refactor all languages objects
                langs: LANGUAGES,
                locale: this.initialLang,
                langMap: {
                    'ru': 'Русский',
                    'en': 'English',
                }

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

<style lang="scss">
    .c-header-logo {
        h1 {
            font-size: 2.2em;
            margin: 0;
            padding: 7px 0;
            color: #353535;
        }
    }

    .c-language-switcher {
        padding: 10px 5px;

        .el-select .el-input--suffix .el-input__inner {
            border: 0;
        }
    }
    
</style>