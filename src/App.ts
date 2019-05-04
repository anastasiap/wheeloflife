import Vue from 'vue'
import Container from './components/Container.vue'

const App = Vue.extend({
    components: {
        Container,
    },
    computed: {
        initialLang(): string { return this.$i18n.locale },
    },
    created() {
        this.$store.dispatch('getData', this.$i18n.locale)
    },
    name: 'App',
    template: `<Container :initialLang=initialLang />`,
})

export default App
