<template>
    <h1>Redirigiendo</h1>
</template>

<script>
export default {
    name: "Redirect",
    mounted()
    {
        this.$router.push('/search/'+this.$route.params.searchString);
    }
}
</script>