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
                    <select v-model="$i18n.locale">
                        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
                    </select>
                </div>
            </el-col>
            <!-- <div class="lang-switch">
                <a @click="setLanguage('ru')" href="#">rus</a> | <a @click="setLanguage('en')" href="#">en</a> 
            </div> -->
        </el-row>
        <p>{{ $t("message.hello") }}</p>
    </header>
</template>

<script>
    export default {
        data () {
            return { 
                langs: ['ru', 'en'],
            }
        },
        name: 'Header',
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