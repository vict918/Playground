<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark padding">
    <NuxtLink class="navbar-brand" to="/">My Body B</NuxtLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <NuxtLink :to="localePath('/')" class="nav-link">Linkedin <span class="sr-only">(current)</span></NuxtLink>
            </li>
            <li class="nav-item active">
                <NuxtLink :to="localePath('/languages')" class="nav-link">I18n<span class="sr-only">(current)</span></NuxtLink>
            </li>
            <li class="nav-item active">
                <NuxtLink :to="localePath('/Schools')" class="nav-link">Filter<span class="sr-only">(current)</span></NuxtLink>
            </li>
            <li class="nav-item active">
                <NuxtLink :to="localePath('/dedicated')" class="nav-link">Dedicated<span class="sr-only">(current)</span></NuxtLink>
            </li>
        </ul>
    </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

</style>