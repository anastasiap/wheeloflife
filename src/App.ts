import Vue from 'vue'
import MainContainer from './components/MainContainer.vue'

const App = Vue.extend({
    components: {
        MainContainer,
    },
    computed: {
        initialLang(): string {
            return this.$i18n.locale
        },
    },
    created() {
        this.$store.dispatch('getData', this.$i18n.locale)
    },
    name: 'App',
    template: `<MainContainer :initialLang=initialLang />`,
})

export default App
