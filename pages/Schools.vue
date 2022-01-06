<template>
    <div>
        <SchoolsFilter
        :universities="universities"
        />
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        mounted(){
            this.$store.dispatch('loadUniversities')
        },
        computed: {
            ...mapState(['universities'])
        }
    }
</script>

<style lang="scss" scoped>

</style>