<template>
    <div>
        <h3>{{ isDefault }}</h3>
        <div v-if="isDefault" class="circle default-circle"><h3>Default</h3></div>
        <div v-if="!isDefault" class="circle custom-circle"><h3>Custom</h3></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Wheel',
        computed: mapState({
            isDefault: 'isDefault',
        })
    }
</script>

<style scoped>
    .circle {
        width: 100px;
        height: 100px;
        border: 1px solid #000000;
        margin: 25px auto;
    }

    .custom-circle {
        border: 1px solid red;
    }
</style>