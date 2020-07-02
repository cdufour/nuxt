<template>
    <div>
        <h1>Joueurs ({{ players.length }})</h1>
        <nuxt-link to="/about">Test</nuxt-link>
        <PlayerCard 
            v-for="(player, index) in players"
            :key="index"
            :player="player" />
    </div>
</template>

<script>
import PlayerCard from '@/components/PLayerCard.vue'
export default {
    components: {
        PlayerCard
    },
    // data() {
    //     return {
    //         players: []
    //     }
    // },
    // created() {
    //     this.$axios.get('http://api.opusidea.net/player')
    //         .then(res => {
    //             this.players = res.data.players
    //         })
    // }
    asyncData(context) {
        return context.$axios.get('http://api.opusidea.net/player')
            .then(res => {
                return {
                    players: res.data.players
                }
            })
    }
}
</script>

<style scoped>

</style>