<template>
    <div>
        <LangSwitcher 
        v-for="lang in langContent"
        :key ="lang.fields.code"
        :lang="lang"
        />
    </div>
</template>

<script>
import {mapState} from 'vuex'

    export default {
        
        mounted() {           
            this.$store.dispatch('loadLangContent', this.$i18n.localeProperties.iso)
        },
        computed: {
            ...mapState(['langContent'])
        }
    }
</script>

<style>

</style>