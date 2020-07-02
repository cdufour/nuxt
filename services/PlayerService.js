import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://api.opusidea.net',
    withCredentials: false,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPlayers() {
        return apiClient.get('/player')
    }
}