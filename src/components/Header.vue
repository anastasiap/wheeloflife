<template>
    <el-row>
        <el-col :xs="12" :sm="10" :md="10" :lg="10">
            <div class="c-header-title">
                <h1>Wheel of Life<span class="c-header-title__subtitle">: online quick tool</span> </h1>  
            </div>
        </el-col>
        <el-col :xs="1" :sm="8" :md="10" :lg="12">
            <slot></slot>
        </el-col>
        <el-col :xs="11" :sm="8" :md="4" :lg="2">
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
    import { LANG_MAP, LANGUAGES } from '../configs/app.config'
    import { mapLangKeys } from '../services/helpers'

    export default {
        computed: {
            wheelKey() {
                return this.$store.state.wheelKey
            },
        },
        data() {
            return {
                langs: LANGUAGES,
                locale: this.initialLang,
                langMap: LANG_MAP,
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
                this.$store.commit('setLang', this.$i18n.locale)
                // todo set cokies in other way
                document.cookie = `wil_lang=${this.$i18n.locale}`
                this.$store.commit('updateHome')
                this.$store.commit('updateWheelKey')
                this.$store.commit('updateDescriptionKey')
            },
        },
    }
</script>

<style lang="scss">
    .c-header-title {
        h1 {
            font-size: 2.2em;
            margin: 0;
            padding: 7px 0;
            color: #353535;
        }
    }

    .c-language-switcher {
        padding: 10px 5px;
        max-width: 100px;
        float: right;

        .el-select .el-input--suffix .el-input__inner {
            border: 0;
        }
    }

    @media (max-width: 1024px) { 
        .c-header-title {
            h1 {
                font-size: 1.8em;
            }
        }
    }

    @media (max-width: 560px) { 
        .c-header-title {
            h1 {
                font-size: 1.6em;
            }

            &__subtitle {
                display: none;
            }
        }
    }
    
</style>