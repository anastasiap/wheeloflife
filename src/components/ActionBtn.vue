<template>
    <div class="m-action-buttons">
        <div class="c-button">
            <label class="c-button__label" for="">{{ $t("addCat") }}</label>    
            <el-button @click="add" type="primary" icon="el-icon-plus" circle></el-button>
        </div>
        <div class="c-button">
            <label class="c-button__label" for="">{{ $t("resetMarks") }}</label>
            <el-button @click="resetMarks" type="primary" icon="el-icon-refresh" circle></el-button>
        </div>
        <div class="c-button">
            <label class="c-button__label" for="">{{ $t("resetWheel") }}</label>
            <el-button @click="resetWheel" type="primary" icon="el-icon-close" circle></el-button>
        </div>
        <div class="c-button">
            <label class="c-button__label" for="">{{ $t("download") }}</label>
            <el-button @click="download" type="primary" icon="el-icon-download" circle></el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        computed: {
            btnMethod(): string {
                return this.type
            },
        },
        methods: {
            add() {
                this.$store.commit('addCategory')
            },
            resetMarks() {
                this.$store.commit('resetMarks')
            },
            resetWheel() {
                this.$store.dispatch('getData', this.$i18n.locale)
            },
            download() {},
        },
        name: 'ActionBtn',
        props: [
            'label',
            'icon',
            'type',
        ],
    })
</script>

<style lang="scss" scoped>
    .m-action-buttons {
        display: flex;
        justify-content: center;
        text-align: center; 
    }

    .c-button {
        margin: .3rem .7rem;
        
        &__label {
            display: block;
            margin-bottom: .5rem;
            color: lightgray;
            font-size: .9rem;
        }  
    }
</style>