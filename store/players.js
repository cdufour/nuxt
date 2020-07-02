import PlayerService from '@/services/PlayerService.js'

export const state = () => ({
    players: []
})

export const mutations = {
    SET_PLAYERS(state, players) {
        state.players = players
    }
}

export const actions = {
    fetchPlayers({ commit }) {
        return PlayerService.getPlayers().then(res => {
            commit('SET_PLAYERS', res.data.players)
        })
    }
}