<template>
    <div>
        <h1 class="toto">{{ 'A propos' | trim(3, 3) }} </h1>
        <img src="~assets/loup.jpg" alt="loup"/>
        <p>
            <nuxt-link to="/players">Joueurs</nuxt-link>
        </p>
        <p>{{ counter }}</p>
        <button @click="incr">Increment</button>
        <p v-if="isEnough">BASTA !</p>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            incr() {
                this.counter++
            }
        },
        computed: {
            isEnough() {
                return this.counter > 10
            }
        },
        layout: 'demo'
    }
</script>

<style scoped>

</style>