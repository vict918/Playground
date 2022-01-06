<template>
    <div class="container">
        <div class="post-container">
            <LinkedinPost
            v-for="post in postsLinkedin"
                :key="post.sys.id"
                :post="post"
            
            />
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

    export default {
        mounted () {
            this.$store.dispatch("loadPostsLinkedin")
        },
        computed: mapState([
            'postsLinkedin'
        ])
    }
</script>