<template>
    <div>
        <h1>A propos</h1>
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
        }
    }
</script>

<style scoped>

</style>