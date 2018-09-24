<template>
    <div>
        <div v-if="isDefault" class="circle default-circle"><h3>Default</h3></div>
        <div v-if="!isDefault" class="circle custom-circle"><h3>Custom</h3></div>
    </div>
</template>

<script>
    export default {
        name: 'Wheel',
        data() {
            return {
                isDefault: this.$store.state.isDefault
            }
        }
    }
</script>

<style scoped>
    .circle {
        width: 100px;
        height: 100px;
        border: 1px solid #000000;
    }
</style>