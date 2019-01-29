import Vue from 'vue'
import MainContainer from './components/MainContainer.vue'

const App = Vue.extend({
    components: { MainContainer },
    data() {
        return {
            msg: 'Test',
        }
    },
    created() {
        this.$store.dispatch('getData')
    },
    name: 'App',
    template: `<MainContainer />`,
})

export default App
