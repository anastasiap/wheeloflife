<template>
    <div class="m-action-buttons">
        <div class="c-button">
            <label for="">{{ $t("addCat") }}</label>    
            <el-button @click="add" type="primary" icon="el-icon-plus" circle></el-button>
        </div>
        <div class="c-button">
            <label for="">{{ $t("resetMarks") }}</label>
            <el-button @click="resetMarks" type="primary" icon="el-icon-refresh" circle></el-button>
        </div>
        <div class="c-button">
            <label for="">{{ $t("resetWheel") }}</label>
            <el-button @click="resetWheel" type="primary" icon="el-icon-close" circle></el-button>
        </div>
        <div class="c-button">
            <label for="">{{ $t("download") }}</label>
            <el-button @click="download" type="primary" icon="el-icon-download" circle></el-button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        computed: {
            // TODO make btn translations work
            // label() {
            //     return this.$t(`messages.${this.label}`)
            // },
            btnMethod(): string {
                return this.type;
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
                this.$store.dispatch('getData')
            },
            download() {},
        },
        name: 'ActionBtn',
        props: [
            'label',
            'icon',
            'type',
        ],
    }
</script>

<style lang="scss" scoped>
    .m-action-buttons {
        display: flex;
        justify-content: center; 
    }

    .c-button {
        margin: .3rem .7rem;
        
        .el-button {
            margin: 0 .3rem;
        }  
    }
</style>