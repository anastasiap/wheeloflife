<template>
    <div>
        <button @click="isDefault = true">Button 1</button>
        <button @click="isDefault = false">Button 2</button>

        <wheel></wheel>
    </div>
</template>

<script>
    import Wheel from './Wheel.vue'

    export default {
        name: 'MainButtons',
        components: { Wheel },
        data() {
            return {
                isDefault: this.$store.state.isDefault
            }
        },
        methods: {
            setActiveCircle() {
                this.$store.commit('updateDefault', isDefault);
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