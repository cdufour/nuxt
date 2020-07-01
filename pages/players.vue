<template>
    <div>
        <h1>Joueurs</h1>
        <p>{{ players.length }}</p>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                players: []
            }
        },
        created() {
            this.$axios.get('http://api.opusidea.net/player')
                .then(res => {
                    console.log(res.data.players)
                    this.players = res.data.players
                })
        }
    }
</script>

<style scoped>

</style>