<template>
    <div class="container">
        <h1>test</h1>
        <p v-for="items, index in trainings"
        :key="index"
        ></p>
        <p></p>
    </div>
</template>

<script>
export default {
    props: {
        trainings: {
            type: Array
        }
    }
}
 
</script>

<style scoped>

</style>