import Vue from 'vue'
import MainContainer from './components/MainContainer.vue'

const App = Vue.extend({
    components: { MainContainer },
    data() {
        return {
            msg: 'Test',
        }
    },
    name: 'App',
    template: `<MainContainer />`,
})

export default App
