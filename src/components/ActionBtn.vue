<template>
    <div class="action-button">
        <label for="">{{ label }}</label>
        <button @click="{ type }"><i class="el-icon-{{ icon }}"></i></button>
    </div>
</template>

<script lang="ts">
    export default {
        methods: {
            add() {
                this.$store.commit('addCategory')
            }, 
            resetMarks() {},
            resetWheel() {},
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