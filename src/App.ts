import Vue from 'vue'
import MainContainer from './components/MainContainer.vue'

const App = Vue.extend({
    components: { 
        MainContainer, 
    },
    computed: {
        initialLang() {
            return this.$i18n.locale
        }, 
    },
    created() {
        this.detectBrowserLocale()
        this.$store.dispatch('getData', this.$i18n.locale)
    },
    data() {
        return {
            test: 'ru'
        }
    },
    methods: {
        detectBrowserLocale() {
            // check if coocie from previous session is set
            // if not
            // detect browser settings, set locale and fetch relevant data

            navigator.language === 'ru' ? this.$i18n.locale = 'ru' : this.$i18n.locale = 'en'
        },
    },
    name: 'App',
    template: `<MainContainer :initialLang=initialLang />`,
})

export default App
