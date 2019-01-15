<template>
    <div>
        <button @click="setDefault(true)">Button 1</button>
        <button @click="setDefault(false)">Button 2</button>

        <Wheel />
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Wheel from './Wheel.vue'
    
    export default {
        components: { Wheel },
        data() {
            return {
                isDefault: this.$store.state.isDefault,
            }
        },
        methods: {
            setDefault(set) {
                this.$store.commit('updateDefault', set)
            },
            /*...mapMutations[{
                updateDefault: 'updateDefault'
            }],*/
        },
        name: 'Switcher',
    }
</script>

<style scoped>
    .circle {
        width: 100px;
        height: 100px;
        border: 1px solid #000000;
    }
</style>