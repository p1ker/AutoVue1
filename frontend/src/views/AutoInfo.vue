<template>
    <div>
        <section v-if="auto">
            <h1>{{ auto.model}}</h1>
        </section>
    </div>
</template>

<script>
export default {
    name: "AutoInfo",
    data() {
        return {
            auto: null
        }
    },
    created() {
        const id = this.$route.params.id
        this.$http.get('/auto/' + id)
            .then(response => this.auto = response.data)
    }
}
</script>
