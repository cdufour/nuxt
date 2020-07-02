<template>
    <div class="player-card">
        <h2>{{ player.lastname }} {{ player.firstname }}</h2>
        <p>Poste: {{ player.position }}</p>
        <p>Equipe: {{ player.team }}</p>
    </div>
</template>

<script>
    export default {
        name: 'PlayerCard',
        props: {
            player: {
                type: Object
            }
        }
    }
</script>

<style scoped>
h2 {
    color: orange
}
.player-card {
    margin: 20px 4px;
    background-color: #ddd;
    width: 300px;
    padding: 10px;
    border-radius: 8px
}
</style>