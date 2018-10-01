<template>
    <div>
        <button @click="setDefault(true)">Button 1</button>
        <button @click="setDefault(false)">Button 2</button>

        <router-link to="/custom">Custom</router-link>


        <wheel></wheel>
    </div>
</template>

<script>
    import Wheel from './Wheel.vue';
    import { mapMutations } from 'vuex'

    export default {
        name: 'MainButtons',
        components: { Wheel },
        data() {
            return {
                isDefault: this.$store.state.isDefault,
            };
        },
        methods: {
            setDefault(set) {
                this.$store.commit('updateDefault', set);
            },
            /*...mapMutations[{
                updateDefault: 'updateDefault'
            }],*/
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