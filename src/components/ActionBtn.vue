<template>
    <div class="action-button">
        <label for="">Добавить категорию</label>
        <el-button @click="add" type="primary" icon="el-icon-plus" circle></el-button>
        <label for="">Обнулить оценки</label>
        <el-button @click="resetMarks" type="primary" icon="el-icon-refresh" circle></el-button>
        <label for="">Сбросить изменения круга</label>
        <el-button @click="resetWheel" type="primary" icon="el-icon-close" circle></el-button>
        <label for="">Скачать</label>
        <el-button @click="download" type="primary" icon="el-icon-download" circle></el-button>
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
                console.log('add worked');
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

<style scoped>

</style>