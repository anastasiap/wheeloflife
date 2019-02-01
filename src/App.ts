import Vue from 'vue'
import MainContainer from './components/MainContainer.vue'

const App = Vue.extend({
    components: { MainContainer },
    created() {
        this.$store.dispatch('getData')
    },
    name: 'App',
    template: `<MainContainer />`,
})

export default App
