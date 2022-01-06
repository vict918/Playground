<template>
    <div class="post">
        <div class="header">
            <img :src="post.fields.imageProfile.fields.file.url" alt="Image du post Linkedin" class="image-profil">
            <h4 class="nom-profil">{{post.fields.nomProfil}}</h4>
        </div>
        <p class="description-profil">{{post.fields.descriptionProfil}}</p>
        <h5 class="titre-post">{{post.fields.titrePost}}</h5>
        <img :src="post.fields.imagePost.fields.file.url" alt="Image du post Linkedin" class="image-post">
    </div>
</template>

<script>
    export default {
        props: ["post"], 
        mounted(){
            console.log(this.post, "post")
            // console.log(this.post.fields.imagePost.fields.file.url, "image")
        }
    }
</script>