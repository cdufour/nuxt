<template>
    <div>
        <h1 class="demo">Joueurs ({{ players.length }})</h1>
        <nuxt-link to="/about">A propos</nuxt-link>
        <PlayerCard 
            v-for="(player, index) in players"
            :key="index"
            :player="player" />
    </div>
</template>

<script>
import PlayerCard from '@/components/PLayerCard.vue'
import { mapState } from 'vuex'

const description = "Page listant tous les joueurs du championnat XXX"

export default {
    name: 'PlayersPage',
    components: {
        PlayerCard
    },
    head: {
        title: 'Player list',
        meta: [
            { hid: 'description', name: 'description', content: description  }
        ]
    },
    // data() {
    //     return {
    //         players: []
    //     }
    // },

    // ** Rendu de la requête async se fera côté client **
    // created() {
    //     this.$axios.get('http://api.opusidea.net/player')
    //         .then(res => {
    //             this.players = res.data.players
    //         })
    // }

    // ** rendu de la requête async se fera côté serveur **
    // asyncData retourne des données qui
    // fusionnés (merged) dans les data du composant
    // liées (binded) au template avant réponse au client
    // local state (on utilise le state du composant)

    // asyncData(context) {
    //     return context.$axios.get('http://api.opusidea.net/player')
    //         .then(res => {
    //             return {
    //                 players: res.data.players
    //             }
    //         })
    // },

    // passage par le store
    // async/await
    async fetch(context) {
        // attente de la fin du traitement async éxécuté par l'action
        
        try {
            // attente du retour de la promesse
            await context.store.dispatch('players/fetchPlayers')
        } catch(e) {
            console.log(e)
        }
        
    },

    computed: mapState('players', ['players'])

}
</script>

<style scoped>
/* div {
    color: green
} */
</style>